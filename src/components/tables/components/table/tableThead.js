import { LitElement, css, html } from 'lit'

export class PiTableThead extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    static styles = [
        css`
            :host {
                display: table-row-group;
            }
        `
    ]
    
}
customElements.define('pi-table-thead', PiTableThead);
