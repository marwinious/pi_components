import { LitElement, css, html } from 'lit'
import defaultCss from '../../../../css/defaultCss';
import { sortArrayOfObjects } from '../../../../lib/utility/sorters';
import { PiTableThead } from './tableThead';
import { PiTableTbody } from './tableTbody';
import { PiTableTfoot } from './tableTfoot';
import { PiBaseTable } from './baseTable';
import { PiPaginator } from '../../../paginators/components/paginator';
import { PiTablePaginator } from '../pagination/tablePaginator';

/*
TODO: Add filter option with input fields to filter columns by search strings
TODO: Refactor how tfoot is handled. Currently only really works with same columns as header
*/

export class PiTable extends LitElement {

    static get properties() {
        return {
            columns: { type: Array, attribute: false },
            rows: { type: Array },
            striped: { type: Boolean },
            gridlines: { type: Boolean },
            sortKey: { type: String },
            sortDirection: { type: String },
            activeRows: { type: Array, attribute: false },
            slottedColumns: { type: Array, attribute: false },
            paginate: { type: Boolean },
            rowsPerPage: { type: [Number, String] },
            sortedRows: { type: Array, attribute: false }
        }
    }

    constructor() {
        super()
        this.columns = [];
        this.rows = [];
        this.striped = false;
        this.gridlines = false;
        this.sortKey = '';
        this.sortDirection = '';
        this.activeRows = [];
        this.slottedColumns = [];
        this.paginate = false;
        this.rowsPerPage = -1;
        this.sortedRows = [];
    }

    connectedCallback() {
        super.connectedCallback();
        this.initTable();
        this.addEventListener('sortRequested', (e) => this.handleSortRequest(e.detail.key, e.detail.newSortDirection))
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('sortRequested')
    }

    firstUpdated() {
        this.captureColumnData();
        this.handleDefaultSort();
    }

    willUpdate(changedProperties) {
        if(changedProperties.has('rows')) {
            this.captureColumnData();
        }
    }

    render() {
        return html`
            <pi-base-table>
                <pi-table-thead
                ?gridlines=${this.gridlines}
                .sortKey=${this.sortKey}
                .sortDirection=${this.sortDirection}
                >
                    <slot></slot>
                </pi-table-thead>

                <pi-table-tbody
                ?striped=${this.striped}
                ?gridlines=${this.gridlines}
                .rows=${this.activeRows}
                .columns=${this.columns}
                ></pi-table-tbody>

                <pi-table-tfoot>
                    <slot name="tfoot"></slot>
                </pi-table-tfoot>
            </pi-base-table>

            ${this.paginate ? html`
                <pi-table-paginator
                .rows=${this.sortedRows}
                .rowsPerPage=${this.rowsPerPage}
                @updatedPageRows=${(e) => this.handleUpdatedPageRows(e.detail.rows)}
                ></pi-table-paginator>
            ` : null}
        `;
    }

    handleUpdatedPageRows(updatedRows) {
        this.activeRows = [...updatedRows];
    }

    handleSortRequest(sortKey, sortDirection) {
        this.sortedRows = sortArrayOfObjects(this.rows, sortKey, sortDirection);
        this.updateColumnSorters(sortKey, sortDirection)

        // If paginator is not enabled
        if(!this.paginate) {
            // Update activeRows (otherwise the paginator handles that)
            this.activeRows = [...this.sortedRows];
        }
    }

    updateColumnSorters(sortKey, sortDirection) {
        this.slottedColumns.forEach(el => {
            el.dispatchEvent(new CustomEvent('updateSorter', { 
                detail: { sortKey, sortDirection },
                bubbles: true,
                composed: true
            }));
        })
    }

    handleDefaultSort() {
        if(this.sortKey != '' && this.sortDirection != '') {
            this.handleSortRequest(this.sortKey, this.sortDirection);
        }
    }

    captureColumnData() {
        // Init column data
        const columnData = [];
        const columnElements = [];

        // Get slot
        const columnsSlot = this.shadowRoot.querySelector('slot');

        // Check for slotted items
        if(columnsSlot == null) { return false; }

        // Get slot elements
        const assignedElements = columnsSlot.assignedElements({ flatten: true});

        // Loop through elements
        assignedElements.forEach((el) => {
            // Check if slot element is p-table-column
            if(el.nodeName == "PI-TABLE-COLUMN") {
                const columnDataItem = {};
                columnElements.push(el);

                // Translate each element's attributes to key->value objects
                Array.from(el.attributes).forEach((attr) => {
                    // Add this attribute's name and corresponding label to our data item
                    columnDataItem[attr.name] = attr.value;
                })

                // Add to column data
                columnData.push(columnDataItem);
            }
        })
        
        // Update this.columns with new columnData
        this.columns = columnData

        // Update this.slottedColumns with capture elements
        if(columnElements.length > 0 ) {
            this.slottedColumns = columnElements;
        }

    }

    initTable() {
        // Copy rows prop to activeRows for manipulation
        this.activeRows = [...this.rows];
        this.sortedRows = [...this.rows];
    }

    static styles = [
        defaultCss,
        css`
            :host {
                display: table;
                overflow-x: var(--pi-table-overflow-x, auto);
                overflow-y: var(--pi-table-overflow-y, visible);
                width: var(--pi-table-width, 100%);
                border-collapse: var(--pi-table-border-collapse, collapse);
                text-align: var(--pi-table-text-align, left);
                white-space: var(--pi-table-white-space, nowrap);
            }
        `
    ]
    
}
customElements.define('pi-table', PiTable);
