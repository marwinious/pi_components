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
        minify: true, // or 'terser' if specified
        
        // 1. REMOVE 'lib' entirely. Vite's default build mode is now used.
        //    The output is configured via rollupOptions.
        
        rollupOptions: {
            // 2. Specify all your components/files as entry points
            input: {
                // 'index' is for the main package entry, like 'src/main.js' or 'src/index.js'
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
            
            // 3. Keep external configuration for Lit dependencies
            external: [
                /^lit\/.*/,
                'lit',
                'lit-html',
                'lit-element',
            ],
            
            output: {
                // 4. Configure output file naming
                //    [name] will correspond to the keys in the 'input' object (e.g., my-button.js)
                entryFileNames: ({ name }) => {
                    // Ensures that components are in a specific folder, e.g., 'dist/components/my-button.js'
                    if (name === 'index') {
                        return 'index.js'; // or 'pi_components.js' if you prefer a single main file
                    }
                    return 'components/[name].js';
                },
                
                // Name for any shared code-split chunks (e.g., utilities)
                chunkFileNames: 'chunks/[name].js', 
                
                // 5. Ensure ES module format
                format: 'es',
                
                // 6. Keep globals if necessary (though less common for ES module libraries)
                globals: {
                    lit: 'lit'
                },
            }
        }
    }
});