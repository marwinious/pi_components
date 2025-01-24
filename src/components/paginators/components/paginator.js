import { LitElement, css, html } from 'lit'

export class PiPaginator extends LitElement {

    static get properties() {
        return {
            rows: { type: Number },
            totalRecords: { type: Number },
            rowsPerPage: { type: Number },
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-paginator', PiPaginator);
