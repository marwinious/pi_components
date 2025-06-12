import { LitElement, css, html } from 'lit'
import { repeat } from 'lit/directives/repeat.js';
import { PiTable2Row } from './table2Row';

export class PiTable2 extends LitElement {

    static get properties() {
        return {
            data: { type: Array },
            columns: { type: Array },
            striped: { type: Boolean },
            compact: { type: Boolean },
        }
    }

    constructor() {
        super()

        this.data = [];
        this.columns = undefined; // Use undefined to differentiate from an empty array
        this.striped = false;
        this.compact = false;
    }

    resolveColumns() {
        if (this.columns && this.columns.length > 0) {
            return this.columns;
        }

        // Infer columns from the first item if data exists
        if (this.data && this.data.length > 0) {
            return Object.keys(this.data[0]).map(key => ({
                key: key,
                header: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'), // Basic capitalization
            }));
        }

        return []; // No data and no column config
    }

    render() {
        const resolvedColumns = this._resolveColumns();

        if (!this.data || this.data.length === 0) {
            return html`<div class="empty-table-message">No data to display.</div>`;
        }

        return html`
            <table role="table" aria-label="Customizable Data Table">
                <thead role="rowgroup">
                    <tr role="row">
                        ${repeat(resolvedColumns, (col) => col.key, (col) => html`
                            <th role="columnheader">${col.header}</th>
                        `)}
                    </tr>
                </thead>
                <tbody role="rowgroup">
                    ${repeat(this.data, (item, index) => item.id || index, (item, index) => html`
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
        css`
            :host {
                display: block;
                font-family: 'Inter', sans-serif;
                --table-border-color: #e0e0e0;
                --table-header-bg: #f5f5f5;
                --table-row-hover-bg: #f9f9f9;
                --table-stripe-bg: #f2f2f2;
                --table-text-color: #333;
                --table-header-text-color: #555;
                --table-cell-padding: 12px;
                --table-compact-cell-padding: 8px;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                border-radius: 8px;
                overflow: hidden; /* Ensures border-radius applies to borders */
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                background-color: white;
                color: var(--table-text-color);
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