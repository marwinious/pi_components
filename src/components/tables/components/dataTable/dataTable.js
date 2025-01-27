import { LitElement, css, html } from 'lit'
import { PiTable } from '../table/table';
import { PiTableThead } from '../table/tableThead';
import { PiTableTr } from '../table/tableTr';
import { PiTableTh } from '../table/tableTh';
import { PiTableTbody } from '../table/tableTbody';
import { PiTableTd } from '../table/tableTd';
import { PiTableTfoot } from '../table/tableTfoot';

export class PiDataTable extends LitElement {

    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
            striped: { type: Boolean },
            sortable: { type: Boolean },
        }
    }

    constructor() {
        super()
        this.columns = [];
        this.rows = [];
        this.striped = false;
        this.sortable = false;
    }

    render() {
        return html`
            <pi-table>

                <pi-table-thead
                .columns=${this.columns}
                ></pi-table-thead>

                <pi-table-tbody
                ?striped=${this.striped}
                ?sortable=${this.sortable}
                .rows=${this.rows}
                .columns=${this.columns}
                ></pi-table-tbody>

                <pi-table-tfoot>
                    <slot name="tfoot"></slot>
                </pi-table-tfoot>

            </pi-table>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-data-table', PiDataTable);
