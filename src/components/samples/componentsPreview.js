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
            <h4>Tabs</h4>

            <pi-demo-tabs></pi-demo-tabs>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('components-preview', ComponentsPreview);
