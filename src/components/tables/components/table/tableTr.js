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
            <tr><slot></slot></tr>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-table-tr', PiTableTr);
