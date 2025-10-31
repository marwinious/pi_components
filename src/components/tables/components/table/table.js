import { LitElement, css, html } from 'lit'
import { register } from '../../../../registerWebComp';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { PiTableRow } from './tableRow';
import { PiTableColumn } from './tableColumn';
import { PiTablePaginator } from '../pagination/tablePaginator';
import defaultCss from '../../../../css/defaultCss';
import { sortArrayOfObjects } from '../../../../lib/utility/sorters';

register('pi-table-row', PiTableRow)
register('pi-table-column', PiTableColumn)
register('pi-table-paginator', PiTablePaginator)

export class PiTable extends LitElement {

    static get properties() {
        return {
            rows: { type: Array },
            sortedRows: { type: Array },
            activeRows: { type: Array },
            columns: { type: Array },
            striped: { type: Boolean },
            compact: { type: Boolean },
            gridlines: { type: Boolean },
            defaultSortKey: { type: String },
            defaultSortDirection: { type: String },
            paginate: { type: Boolean },
            rowsPerPage: { type: Number|String },
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.initTable();

        this.addEventListener('sortRequested', (e) => this.handleSortRequest(e.detail.key, e.detail.newSortDirection))
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        
        this.removeEventListener('sortRequested', (e) => this.handleSortRequest(e.detail.key, e.detail.newSortDirection))
    }

    firstUpdated() {
        this.handleDefaultSort();
    }

    constructor() {
        super()

        this.rows = [];
        this.sortedRows = [];
        this.activeRows = [];
        this.columns = undefined; // Use undefined to differentiate from an empty array
        this.striped = false;
        this.compact = false;
        this.gridlines = false;
        this.defaultSortKey = null;
        this.defaultSortDirection = null;
        this.paginate = false;
        this.rowsPerPage = 5;
    }

    initTable() {
        // Copy rows prop to activeRows for manipulation
        this.activeRows = [...this.rows];
        this.sortedRows = [...this.rows];
    }

    resolveColumns() {
        if (this.columns && this.columns.length > 0) {
            return this.columns;
        }

        // Infer columns from the first item if data exists
        if (this.rows && this.rows.length > 0) {
            return Object.keys(this.rows[0]).map(key => ({
                key: key,
                header: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'), // Basic capitalization
            }));
        }

        return []; // No data and no column config
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

    handleDefaultSort() {
        if(this.defaultSortKey != null && this.defaultSortDirection != null) {
            this.handleSortRequest(this.defaultSortKey, this.defaultSortDirection);
        }
    }

    updateColumnSorters(sortKey, sortDirection) {
        const columnHeaders = this.shadowRoot.querySelectorAll('pi-table-column');
        
        columnHeaders.forEach(el => {
            el.dispatchEvent(new CustomEvent('updateSorter', { 
                detail: { sortKey, sortDirection },
                bubbles: true,
                composed: true
            }));
        })
    }

    handleUpdatedPageRows(updatedRows) {
        this.activeRows = [...updatedRows];
    }

    render() {
        const resolvedColumns = this.resolveColumns();

        // Define dynamic classes
        const rowClasses = {
            striped: this.striped,
            gridlines: this.gridlines
        }

        if (!this.rows || this.rows.length === 0) {
            return html`<div class="empty_table_message">No data to display.</div>`;
        }

        return html`
            <table role="table" aria-label="Customizable Data Table">
                <thead role="rowgroup">
                    <tr role="row">
                        ${repeat(resolvedColumns, (col) => col.key, (col) => html`
                            <pi-table-column
                            ?sortable=${col.sortable && col.sortKey}
                            .label=${col.header}
                            .key=${col.key}
                            .sortKey=${col.sortKey}
                            >${col.header}</pi-table-column>
                        `)}
                    </tr>
                </thead>
                <tbody role="rowgroup">
                    ${repeat(this.activeRows, (item, index) => item.id || index, (item, index) => html`
                        <pi-table-row
                        class=${classMap(rowClasses)}
                        .item=${item}
                        .columns=${resolvedColumns}
                        .rowIndex=${index}
                        ></pi-table-row>
                    `)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan=10000>
                            <slot name="tfoot"></slot>
                        </td>
                    </tr>
                </tfoot>
            </table>

            ${this.paginate ? html`
                <pi-table-paginator
                .rows=${this.sortedRows}
                .rowsPerPage=${this.rowsPerPage}
                @updatedPageRows=${(e) => this.handleUpdatedPageRows(e.detail.rows)}
                ></pi-table-paginator>
            ` : null}
        `;
    }

    static styles = [
        defaultCss,
        css`
            :host {
                display: block;
            }

            table {
                overflow-x: var(--pi-table-overflow-x, auto);
                overflow-y: var(--pi-table-overflow-y, visible);
                width: var(--pi-table-width, 100%);
                border-collapse: var(--pi-table-border-collapse, collapse);
                text-align: var(--pi-table-text-align, left);
                white-space: var(--pi-table-white-space, nowrap);
            }

            tfoot {
                white-space: wrap;
            }

            .striped:nth-child(even) {
                background-color: var(--pi-table-row-bg-color-striped-even, #f8f8f8);
            }

            .striped:nth-child(odd) {
                background-color: var(--pi-table-row-bg-color-striped-odd, #fff);
            }

            .gridlines {
                --pi-table-cell-border-right: var(--pi-table-cell-border-top, 1px solid #ddd);
                --pi-table-cell-border-left: var(--pi-table-cell-border-top, 1px solid #ddd);
            }

            pi-table-row,
            pi-table-row.striped,
            pi-table-row.gridlines {
                &:hover {
                    background: var(--pi-table-row-bg-color-hover, #eee);
                }
            }

            /* For empty state */
            .empty_table_message {
                text-align: center;
                padding: 40px;
                color: #666;
                font-style: italic;
            }
        `
    ]
    
}

// if(!customElements.get('pi-table')) { customElements.define('pi-table', PiTable); }