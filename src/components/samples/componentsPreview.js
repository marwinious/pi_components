import { LitElement, css, html } from 'lit'
import { PiDemoPaginators } from '../paginators/demoPaginators';
import { PiDemoDataTable } from '../tables/demoDataTable';
import { PiDemoGrid } from '../grid/demoGrid';
import { PiTextInputDemo } from '../demos/componentDemos/textInputDemo';
import { PiCheckboxInputDemo } from '../demos/componentDemos/checkboxInputDemo';
import { PiRadioInputDemo } from '../demos/componentDemos/radioInputDemo';
import { PiSelectInputDemo } from '../demos/componentDemos/selectInputDemo';
import { PiToggleSwitchDemo } from '../demos/componentDemos/toggleSwitchDemo';
import { PiTextAreaInputDemo } from '../demos/componentDemos/textAreaInputDemo';
import { PiButtonsDemo } from '../demos/componentDemos/buttonsDemo';
import { PiCardDemo } from '../demos/componentDemos/cardDemo';
import { PiFormDemo } from '../demos/componentDemos/formDemo';
import { PiTabsDemo } from '../demos/componentDemos/tabsDemo';

export class ComponentsPreview extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            
            <pi-demo-grid></pi-demo-grid>
            <pi-card-demo></pi-card-demo>
            <pi-radio-input-demo></pi-radio-input-demo>
            <pi-textarea-input-demo></pi-textarea-input-demo>
            <pi-form-demo></pi-form-demo>
            <pi-checkbox-input-demo></pi-checkbox-input-demo>
            <pi-toggle-switch-demo></pi-toggle-switch-demo>
            <pi-select-input-demo></pi-select-input-demo>
            <pi-text-input-demo></pi-text-input-demo>
            <pi-demo-data-table></pi-demo-data-table>
            <pi-demo-paginators></pi-demo-paginators>
            <pi-tabs-demo></pi-tabs-demo>
            <pi-buttons-demo></pi-buttons-demo>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                max-width: 1100px;
                box-sizing: border-box;
                font-family: Arial, Helvetica, sans-serif
            }
        `
    ]
    
}
customElements.define('components-preview', ComponentsPreview);
