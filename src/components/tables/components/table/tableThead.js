import { LitElement, css, html } from 'lit'
import { PiTableTr } from './tableTr';
import { PiTableTh } from './tableTh';

export class PiTableThead extends LitElement {

    static get properties() {
        return {
            columns: { type: Array },
        }
    }

    constructor() {
        super()
        this.columns = [];
    }

    render() {
        return html`
            <pi-table-tr>
                ${this.columns.map((col) => html`
                    <pi-table-th>${col.label}</pi-table-th>
                `)}
            </pi-table-tr>
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
