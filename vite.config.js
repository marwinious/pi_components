import { defineConfig } from 'vite';
import { resolve } from 'path';

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
                // Add an entry for *each* component
                'piBadge': resolve(__dirname, 'src/components/badges/badge.js'),
                'piButton': resolve(__dirname, 'src/components/buttons/button.js'),
                'piCard': resolve(__dirname, 'src/components/cards/components/card.js'),
                'piChip': resolve(__dirname, 'src/components/chips/components/chip.js'),
                'piForm': resolve(__dirname, 'src/components/forms/form.js'),
                'piFormGroup': resolve(__dirname, 'src/components/forms/formGroup.js'),
                'piGridContainer': resolve(__dirname, 'src/components/grid/components/gridContainer.js'),
                'piGridRow': resolve(__dirname, 'src/components/grid/components/gridRow.js'),
                'piGridColumn': resolve(__dirname, 'src/components/grid/components/gridColumn.js'),
                'piHeaderBar': resolve(__dirname, 'src/components/headerBar/components/headerBar.js'),
                'piInputCheckbox': resolve(__dirname, 'src/components/inputs/checkboxes/checkboxInput.js'),
                'piInputRadio': resolve(__dirname, 'src/components/inputs/radios/radioInput.js'),
                'piInputRadioGroup': resolve(__dirname, 'src/components/inputs/radios/radioInputGroup.js'),
                'piInputSelect': resolve(__dirname, 'src/components/inputs/selects/selectInput.js'),
                'piInputSwitch': resolve(__dirname, 'src/components/inputs/switches/toggleSwitch.js'),
                'piInputText': resolve(__dirname, 'src/components/inputs/text/textInput.js'),
                'piInputTextArea': resolve(__dirname, 'src/components/inputs/textareas/textAreaInput.js'),
                'piLabel': resolve(__dirname, 'src/components/labels/components/label.js'),
                'piNavDrawer': resolve(__dirname, 'src/components/nav/components/navDrawer.js'),
                'piNotifications': resolve(__dirname, 'src/components/notifications/components/notifications.js'),
                'piNotificationCenter': resolve(__dirname, 'src/components/notifications/components/notificationCenter.js'),
                'piNotificationItem': resolve(__dirname, 'src/components/notifications/components/notificationItem.js'),
                'piPaginator': resolve(__dirname, 'src/components/paginators/components/paginator.js'),
                'piPaginatorNavItem': resolve(__dirname, 'src/components/paginators/components/paginatorNavItem.js'),
                'piTablePaginator': resolve(__dirname, 'src/components/tables/components/pagination/tablePaginator.js'),
                'piTable': resolve(__dirname, 'src/components/tables/components/table/table.js'),
                'piTableColumn': resolve(__dirname, 'src/components/tables/components/table/tableColumn.js'),
                'piTableRow': resolve(__dirname, 'src/components/tables/components/table/tableRow.js'),
                'piTableSortIcon': resolve(__dirname, 'src/components/tables/components/table/tableSortIcon.js'),
                'piTab': resolve(__dirname, 'src/components/tabs/tab.js'),
                'piTabList': resolve(__dirname, 'src/components/tabs/tabList.js'),
                'piTabPanel': resolve(__dirname, 'src/components/tabs/tabPanel.js'),
                'piTabPanels': resolve(__dirname, 'src/components/tabs/tabPanels.js'),
                'piTabs': resolve(__dirname, 'src/components/tabs/tabs.js'),
            },
            
            // Keep external configuration for Lit dependencies
            external: [
                /^lit\/.*/,
                'lit',
                'lit-html',
                'lit-element',
            ],
            
            output: {
                // **CRITICAL FIX 1: preserveModules MUST be in the output block**
                preserveModules: true,
                
                // **CRITICAL FIX 2: Simplify naming when using preserveModules**
                // This pattern ensures the output file path is just the name (e.g., piInputSelect.js) 
                // and Rollup handles the folder structure relative to the 'dist' folder.
                entryFileNames: `[name].js`,
                
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
