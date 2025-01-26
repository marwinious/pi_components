import { LitElement, css, html } from 'lit'
import { PiTableThead } from './tableThead';
import { PiTableTr } from './tableTr';
import { PiTableTh } from './tableTh';
import { PiTableTbody } from './tableTbody';
import { PiTableTd } from './tableTd';
import { PiTableTfoot } from './tableTfoot';

/*
<table>
                <pi-table-thead>
                    <pi-table-tr>
                        ${this.columns.map((col) => html`
                            <pi-table-th>${col.label}</pi-table-th>
                        `)}
                    </pi-table-tr>
                </pi-table-thead>
                <pi-table-tbody>
                    ${this.rows.map((row) => html`
                        <pi-table-tr>
                            ${this.columns.map((col) => html`
                                <pi-table-td>${row[col.key]}</pi-table-td>
                            `)}
                        </pi-table-tr>
                    `)}
                </pi-table-tbody>
                <pi-table-tfoot></pi-table-tfoot>
            </table>
*/

export class PiTable extends LitElement {

    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
        }
    }

    constructor() {
        super()
        this.columns = [];
        this.rows = [];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    static styles = [
        css`
            :host {
                display: table;
                overflow-x: auto;
                width: 100%;
                border-collapse: collapse;
                text-align: left;
                white-space: nowrap;
            }
        `
    ]
    
}
customElements.define('pi-table', PiTable);
