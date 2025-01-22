import { LitElement, css, html } from 'lit'
import { PiDemoTabs } from '../tabs/demoTabs';

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
            <pi-demo-tabs></pi-demo-tabs>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                max-width: 1000px;
                box-sizing: border-box;
            }
        `
    ]
    
}
customElements.define('components-preview', ComponentsPreview);
