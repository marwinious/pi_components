import { LitElement, css, html } from 'lit'
import { repeat } from 'lit/directives/repeat.js';

export class PiTableRow extends LitElement {

    static get properties() {
        return {
            item: { type: Object },
            columns: { type: Array },
            rowIndex: { type: Number },
        }
    }

    constructor() {
        super()

        this.item = {};
        this.columns = [];
        this.rowIndex = -1;
    }

    render() {
        return html`
            ${repeat(this.columns, (col) => col.key, (col) => html`
                <td role="cell">
                    ${
                        // If a render function is provided for the column, use it.
                        // Otherwise, display the data directly from the item.
                        col.render ? col.render(this.item, this.rowIndex) : this.item[col.key]
                    }
                </td>
            `)}
        `;
    }

    static styles = [
        css`
            :host {
                display: table-row;
            }

            td {
                padding: var(--pi-table-cell-padding, 0.75em);
                border-top: var(--pi-table-cell-border-top, 1px solid #ddd);
                border-right: var(--pi-table-cell-border-right, 1px solid #ddd);
                border-bottom: var(--pi-table-cell-border-bottom, 1px solid #ddd);
                border-left: var(--pi-table-cell-border-left, 1px solid #ddd);
                background-color: var(--pi-table-cell-bg-color, #f4f4f4);
                color: var(--pi-table-cell-text-color);
                text-align: var(--pi-table-cell-text-align, left);
                font-weight: var(--pi-table-cell-font-weight, bold);
                transition: var(--pi-table-cell-transition, background-color 0.5s ease, border 0.5s ease, color 0.5s ease);
            }
        `
    ]
    
}

if(!customElements.get('pi-table-row')) { customElements.define('pi-table-row', PiTableRow); }