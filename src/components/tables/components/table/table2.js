import { LitElement, css, html } from 'lit'
import { repeat } from 'lit/directives/repeat.js';
import { PiTable2Row } from './table2Row';
import { PiTableColumn } from './tableColumn';
import defaultCss from '../../../../css/defaultCss';

export class PiTable2 extends LitElement {

    static get properties() {
        return {
            rows: { type: Array },
            columns: { type: Array },
            striped: { type: Boolean },
            compact: { type: Boolean },
        }
    }

    constructor() {
        super()

        this.rows = [];
        this.columns = undefined; // Use undefined to differentiate from an empty array
        this.striped = false;
        this.compact = false;
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

    render() {
        const resolvedColumns = this.resolveColumns();

        if (!this.rows || this.rows.length === 0) {
            return html`<div class="empty-table-message">No data to display.</div>`;
        }

        return html`
            <table role="table" aria-label="Customizable Data Table">
                <thead role="rowgroup">
                    <tr role="row">
                        ${repeat(resolvedColumns, (col) => col.key, (col) => html`
                            <pi-table-column
                            ?sortable=${this.sortable && col.sortKey}
                            .label=${col.header}
                            .key=${col.key}
                            .sortKey=${col.sortKey}
                            >${col.header}</pi-table-column>
                        `)}
                    </tr>
                </thead>
                <tbody role="rowgroup">
                    ${repeat(this.rows, (item, index) => item.id || index, (item, index) => html`
                        <pi-table-2-row
                            .item=${item}
                            .columns=${resolvedColumns}
                            .rowIndex=${index}
                        ></pi-table-2-row>
                    `)}
                </tbody>
            </table>
        `;
    }

    static styles = [
        defaultCss,
        css`
            :host {
                display: block;
                /* font-family: 'Inter', sans-serif;
                --table-border-color: #e0e0e0;
                --table-header-bg: #f5f5f5;
                --table-row-hover-bg: #f9f9f9;
                --table-stripe-bg: #f2f2f2;
                --table-text-color: #333;
                --table-header-text-color: #555;
                --table-cell-padding: 12px;
                --table-compact-cell-padding: 8px; */
            }

            table {
                overflow-x: var(--pi-table-overflow-x, auto);
                overflow-y: var(--pi-table-overflow-y, visible);
                width: var(--pi-table-width, 100%);
                border-collapse: var(--pi-table-border-collapse, collapse);
                text-align: var(--pi-table-text-align, left);
                white-space: var(--pi-table-white-space, nowrap);
            }

            .gridlines {
                --pi-table-th-border-right: var(--pi-table-th-border-bottom, 1px solid #ddd);
                --pi-table-th-border-left: var(--pi-table-th-border-bottom, 1px solid #ddd);
                --pi-table-th-border-top: var(--pi-table-th-border-bottom, 1px solid #ddd);
            }

            th, td {
                border: 1px solid var(--table-border-color);
                padding: var(--table-cell-padding);
                text-align: left;
            }

            /* Compact styling */
            :host([compact]) th,
            :host([compact]) td {
                padding: var(--table-compact-cell-padding);
            }

            thead {
                background-color: var(--table-header-bg);
            }

            th {
                font-weight: 600;
                color: var(--table-header-text-color);
                text-transform: uppercase;
                font-size: 0.85em;
            }

            tbody tr:hover {
                background-color: var(--table-row-hover-bg);
                transition: background-color 0.2s ease-in-out;
            }

            /* Striped rows styling */
            :host([striped]) tbody tr:nth-child(even) {
                background-color: var(--table-stripe-bg);
            }

            /* For empty state */
            .empty-table-message {
                text-align: center;
                padding: 40px;
                color: #666;
                font-style: italic;
            }
        `
    ]
    
}

if(!customElements.get('pi-table-2')) { customElements.define('pi-table-2', PiTable2); }