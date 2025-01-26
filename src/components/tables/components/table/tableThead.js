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
            <thead><slot></slot></thead>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-table-thead', PiTableThead);
