import { LitElement, css, html } from 'lit'

export class PiTableTfoot extends LitElement {

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
                display: table-footer-group;
            }
        `
    ]
    
}
customElements.define('pi-table-tfoot', PiTableTfoot);
