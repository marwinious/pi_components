/* CSS Imports */
import './index.css'
/* import './css/variables/globalVars.css'
import './css/variables/buttonVars.css'
import './css/variables/tableVars.css' */

/* Icon Imports */
/* import './components/icons/base/iconBase'
import './components/icons/base/iconHandler'
import './components/icons/base/iconImports' */

/* DEV MODE ONLY */
if (import.meta.env.MODE === 'development') {
  import('./components/samples/componentsPreview').then((module) => {
    // Use the imported module
    console.log('Development-only module loaded:', module);
  });
}

// import { ComponentsPreview } from "./components/samples/componentsPreview";

export * from './components/icons/index'
export * from './components/buttons/index'
export * from './components/inputs/index'