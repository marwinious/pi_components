import { LitElement, css, html } from 'lit'

export class PiTabPanel extends LitElement {

    static properties = {
        
    };

    constructor() {
        super()
    }

    render() {
        return html`<slot></slot>`;
    }

    static styles = css`
        :host {
            display: none;
            color: var(--pi-tabs-panel-text-color, inherit);
            background-color: var(--pi-tabs-panel-bg-color, inherit);
            padding: var(--pi-tabs-panel-padding, 1rem);
            border-style: var(--pi-tabs-panel-border-style, solid);
            border-width: var(--pi-tabs-panel-border-width, 1px);
            border-color: var(--pi-tabs-panel-border-color, #ddd);
        }
        
        :host([active]) {
            display: block;
        }
    `;
    
}

if(!customElements.get('pi-tab-panel')) { customElements.define('pi-tab-panel', PiTabPanel); }