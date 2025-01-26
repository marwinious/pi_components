import { LitElement, css, html } from 'lit'

export class PiTableTr extends LitElement {

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
                display: table-row;
            }
        `
    ]
    
}
customElements.define('pi-table-tr', PiTableTr);
