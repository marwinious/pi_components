import { LitElement, css, html } from 'lit'
import { PiDemoTabs } from '../tabs/demoTabs';
import { PiDemoButtons } from '../buttons/demoButtons';
import { PiDemoCards } from '../cards/demoCards';
import { PiDemoPaginators } from '../paginators/demoPaginators';

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
            <pi-demo-paginators></pi-demo-paginators>
            <pi-demo-tabs></pi-demo-tabs>
            <pi-demo-buttons></pi-demo-buttons>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                max-width: 1000px;
                box-sizing: border-box;
                font-family: Arial, Helvetica, sans-serif
            }
        `
    ]
    
}
customElements.define('components-preview', ComponentsPreview);
