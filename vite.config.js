import { defineConfig } from 'vite'
import { resolve } from 'path'
// import Sonda from 'sonda/vite'; 

export default defineConfig({
    plugins: [
        /* Sonda({
            open: true
        }) */
    ],
    /* resolve: {
        alias: {
            '@package-name': 'pi_components'
        }
    }, */
    build: {
        // format: 'es',
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src/main.js'),
            name: "PiComponents",
            // type: "module",
            filename: (format) => `pi_components.${format}.js`,
            // filename: "pi",
            formats: ['es'], // Ensure it is an ES module format
        },
        sourcemap: true,
        target: 'esnext',
        minify: true,
        // minify: terser, // Enable minification using Terser (default minifier)
        rollupOptions: {
            external: [
                /^lit\/.*/,
                'lit',
                'lit-html',
                'lit-element',
                /* 'lit/directives/class-map.js',
                'lit/directives/ref.js',
                'lit/directives/unsafe-html.js',
                'lit/directives/class-map.js',
                'lit/directives/style-map.js',
                'lit/directives/repeat.js',
                'lit/directives/if-defined.js',
                'lit/directives/live.js',
                'lit/decorators.js',
                'lit/decorators/custom-element.js',
                'lit/decorators/property.js',
                'lit/decorators/state.js',
                'lit/decorators/query.js', */
            ],
            output: {
                globals: {
                    lit: 'lit'
                },
                // You can further customize how the file is named
                // For example, if you want to ensure it's myModule.js:
                /* entryFileNames: 'pi_components.js', // Output filename
                chunkFileNames: '[name].js', // Name for any code-split chunks
                assetFileNames: '[name][extname]', // Asset filenames */
                // Ensure that minification is applied
                /* plugins: [
                    // Use Terser plugin for minification
                    terser
                ], */
            }
            
        }
    }
})