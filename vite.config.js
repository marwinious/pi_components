import { defineConfig } from 'vite';
import { resolve } from 'path';
import { peerDependencies } from './package.json'
import path from 'path';
import glob from 'fast-glob';

// Externalize all packages listed in peerDependencies
const externalPackages = [
    ...Object.keys(peerDependencies || {}),
    /^lit\/.*/ // Keep this for deep Lit imports
];

// Utility function to dynamically generate entry points from the components directory
const generateComponentEntries = () => {
    const componentDir = resolve(__dirname, 'src/components');
    const files = glob.sync(componentDir + '/**/*.{js,jsx,ts,tsx}', {
        // Ignore index files as they are often meant for re-exporting, not direct entry
        ignore: ['**/index.*', '**/main.*']
    });

    return files.reduce((entries, absolutePath) => {
        // NEW LOGIC: Use ONLY the filename (without extension) as the Rollup input key.
        // This is the cleanest way to flatten the structure.
        const baseName = path.basename(absolutePath, path.extname(absolutePath));
        
        // Example: entries['iconGearSolid'] = '.../iconGearSolid.js'
        entries[baseName] = absolutePath;
        return entries;
    }, {});
};

export default defineConfig({
    plugins: [
        /* ... your plugins ... */
    ],
    build: {
        outDir: 'dist',
        sourcemap: true,
        target: 'esnext',
        minify: true, 
        
        rollupOptions: {
            // FIX 1: Explicitly set preserveEntrySignatures to a compatible value 
            // This resolves the error caused by implicit 'false' when using preserveModules.
            preserveEntrySignatures: 'allow-extension', 
            
            // FIX 2: Re-add preserveModulesRoot to ensure the output file structure 
            // (inside dist) correctly mirrors the source file structure (inside src)
            preserveModulesRoot: resolve(__dirname, 'src'),

            // Specify all your components/files as entry points (This block remains correct)
            input: {
                // 'index' is for the main package entry
                index: resolve(__dirname, 'src/main.js'), 
                ...generateComponentEntries()
            },
            
            // Keep external configuration for Lit dependencies
            external: externalPackages,
            
            output: {
                // **CRITICAL FIX 1: preserveModules MUST be in the output block**
                preserveModules: true,
                
                // CRITICAL FIX: Use a function to manually prepend the 'components' folder.
                entryFileNames: (chunkInfo) => {
                    // List utility files that should be hidden
                    const utilityFiles = ['registerWebComp'];
                    
                    // 1. Get the final filename (without path or extension)
                    const fileName = path.basename(chunkInfo.name);
                    const baseName = path.basename(chunkInfo.name, '.js'); 
                    
                    // 2. Check if this module is one of our hidden utility files.
                    if (utilityFiles.includes(baseName)) {
                        // Put utility files into a hidden 'utils' folder to declutter 'components/'
                        return `utils/${fileName}.js`; 
                    }

                    // 3. Check if this is a primary source module (has a facadeModuleId).
                    if (chunkInfo.facadeModuleId) {
                        // All remaining files are public components. Flatten them to components/filename.js
                        return `components/${fileName}.js`; 
                    }
                    
                    // Fallback for Rollup chunks
                    return '[name].js';
                },
                
                // Name for any shared code-split chunks (e.g., utilities)
                chunkFileNames: `chunks/[name].js`, 
                
                // Ensure ES module format
                format: 'es',
                
                // Keep globals if necessary (though less common for ES module libraries)
                globals: {
                    lit: 'lit'
                },

                // This forces the CSS file to be named `styles.css` and placed in the `dist/styles` folder.
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'styles/styles.css'; 
                    }
                    return 'assets/[name].[ext]';
                },
            }
        }
    }
});
