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
            <tfoot><slot></slot></tfoot>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-table-tfoot', PiTableTfoot);
