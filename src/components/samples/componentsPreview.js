import { LitElement, css, html } from 'lit'
import { PiDemoTabs } from '../tabs/demoTabs';
import { PiDemoButtons } from '../buttons/demoButtons';
import { PiDemoCards } from '../cards/demoCards';
import { PiDemoPaginators } from '../paginators/demoPaginators';
import { PiDemoDataTable } from '../tables/demoDataTable';
import { PiDemoTextInputs } from '../inputs/text/demoTextInput';
import { PiDemoSelectInputs } from '../inputs/selects/demoSelectInput';
import { PiDemoToggleSwitches } from '../inputs/switches/demoSwitches';
import { PiDemoCheckboxes } from '../inputs/checkboxes/demoCheckboxes';
import { PiDemoForms } from '../forms/demoForms';

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
            <pi-demo-forms></pi-demo-forms>
            <pi-demo-checkboxes></pi-demo-checkboxes>
            <pi-demo-toggle-switches></pi-demo-toggle-switches>
            <pi-demo-select-inputs></pi-demo-select-inputs>
            <pi-demo-text-inputs></pi-demo-text-inputs>
            <pi-demo-data-table></pi-demo-data-table>
            <pi-demo-paginators></pi-demo-paginators>
            <pi-demo-tabs></pi-demo-tabs>
            <pi-demo-buttons></pi-demo-buttons>
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
