import { LitElement, css, html } from 'lit'

export class PiTabList extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <slot @slotchange=${this._updateTabOptions}></slot>
        `;
    }

    _updateTabOptions() {
        const tabOptions = this.querySelectorAll('slot');
        console.log('tabOptions: ', tabOptions);
        
    }

    static styles = [
        css`
            :host {
                display: flex;
                border: var(--pi-tabs-tab-header-border, none);
                border-top: var(--pi-tabs-tab-header-border-top, none);
                border-right: var(--pi-tabs-tab-header-border-right, none);
                border-bottom: var(--pi-tabs-tab-header-border-bottom, 1px solid #ddd);
                border-left: var(--pi-tabs-tab-header-border-left, none);
            }
        `
    ]
    
}
customElements.define('pi-tab-list', PiTabList);
