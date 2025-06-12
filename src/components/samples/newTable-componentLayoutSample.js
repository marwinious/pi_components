// src/components/lt-table.js
import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js'; // For efficient list rendering

// Import the row component (will be defined below)
import './lt-table-row.js';

/**
 * @typedef {Object} ColumnConfig
 * @property {string} key - The key from the data object to display.
 * @property {string} header - The display text for the table header.
 * @property {(item: Object) => import('lit').TemplateResult | string} [render] - Optional render function for custom cell content.
 */

/**
 * `<lt-table>`
 * A flexible table component that renders data from an array of objects.
 * Supports automatic header/row generation, striped/compact styles, and
 * custom cell content via column render functions.
 *
 * @prop {Array<Object>} data - The array of data objects to display.
 * @prop {Array<ColumnConfig>} [columns] - Optional configuration for columns.
 * @prop {boolean} [striped=false] - If true, apply striped row styling.
 * @prop {boolean} [compact=false] - If true, apply compact row styling.
 */
class LtTable extends LitElement {
    static properties = {
        data: { type: Array },
        columns: { type: Array },
        striped: { type: Boolean },
        compact: { type: Boolean },
    };

    constructor() {
        super();
        this.data = [];
        this.columns = undefined; // Use undefined to differentiate from an empty array
        this.striped = false;
        this.compact = false;
    }

    static styles = css`
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
    `;

    /**
     * Resolves the columns to use, either from the 'columns' prop or inferred from data.
     * @returns {Array<ColumnConfig>}
     */
    _resolveColumns() {
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
                        <lt-table-row
                            .item=${item}
                            .columns=${resolvedColumns}
                            .rowIndex=${index}
                        ></lt-table-row>
                    `)}
                </tbody>
            </table>
        `;
    }
}
customElements.define('lt-table', LtTable);


// src/components/lt-table-row.js
import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

/**
 * `<lt-table-row>`
 * Renders a single table row (`<tr>`) and its cells (`<td>`).
 * Used internally by `<lt-table>`.
 *
 * @prop {Object} item - The data object for the current row.
 * @prop {Array<ColumnConfig>} columns - The resolved column configurations.
 * @prop {number} rowIndex - The index of the current row (for accessibility or debugging).
 */
class LtTableRow extends LitElement {
    static properties = {
        item: { type: Object },
        columns: { type: Array },
        rowIndex: { type: Number },
    };

    constructor() {
        super();
        this.item = {};
        this.columns = [];
        this.rowIndex = -1;
    }

    static styles = css`
        /* No specific styles here, inherited from lt-table for cells */
    `;

    render() {
        return html`
            <tr role="row">
                ${repeat(this.columns, (col) => col.key, (col) => html`
                    <td role="cell">
                        ${
                            // If a render function is provided for the column, use it.
                            // Otherwise, display the data directly from the item.
                            col.render ? col.render(this.item, this.rowIndex) : this.item[col.key]
                        }
                    </td>
                `)}
            </tr>
        `;
    }
}
customElements.define('lt-table-row', LtTableRow);