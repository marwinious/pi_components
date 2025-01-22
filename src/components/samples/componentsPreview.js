import { LitElement, css, html } from 'lit'
import { PiTabs } from '../tabs/tabs';

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


        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('components-preview', ComponentsPreview);
