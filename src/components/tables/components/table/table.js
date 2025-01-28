import { LitElement, css, html } from 'lit'
import { sortArrayOfObjects } from '../../../../lib/utility/sorters';
import { PiTableThead } from './tableThead';
import { PiTableTbody } from './tableTbody';
import { PiTableTfoot } from './tableTfoot';
import { PiBaseTable } from './baseTable';

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
            slottedColumns: { type: Array, attribute: false }
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
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('sortRequested', (e) => this.handleSortRequest(e))
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('sortRequested')
    }

    firstUpdated() {
        this.captureColumnData();
        this.checkDefaultSort();
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
        `;
    }

    handleSortRequest(e) {
        this.activeRows = this.sortRows(this.activeRows, e.detail.key, e.detail.newSortDirection);
        this.updateColumnSorters(e.detail.key)
    }

    updateColumnSorters(sortKey) {
        this.slottedColumns.forEach(el => {
            el.dispatchEvent(new CustomEvent('updateSorter', { 
                detail: sortKey,
                bubbles: true,
                composed: true
            }));
        })
    }

    checkDefaultSort() {
        if(this.sortKey != '' && this.sortDirection != '') {
            // Sort initial data
            this.activeRows = sortArrayOfObjects(this.rows, this.sortKey, this.sortDirection);
        }
        else {
            this.activeRows = this.rows;
        }
    }

    sortRows(rowData, sortKey, sortDirection) {
        return sortArrayOfObjects(rowData, sortKey, sortDirection);
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

    static styles = [
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
