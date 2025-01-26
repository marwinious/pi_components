import { LitElement, css, html } from 'lit'
import { PiTable } from '../table/table';
import { PiTableThead } from '../table/tableThead';
import { PiTableTr } from '../table/tableTr';
import { PiTableTh } from '../table/tableTh';
import { PiTableTbody } from '../table/tableTbody';
import { PiTableTd } from '../table/tableTd';
import { PiTableTfoot } from '../table/tableTfoot';

export class PiBasicTable extends LitElement {

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
            <pi-table>
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
            </pi-table>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-basic-table', PiBasicTable);
