import { LitElement, css, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js';
import { PiTableTr } from './tableTr';
import { PiTableTd } from './tableTd';

export class PiTableTbody extends LitElement {

    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
            striped: { type: Boolean },
            sortable: { type: Boolean },
            gridlines: { type: Boolean }
        }
    }

    constructor() {
        super()
        this.columns = [];
        this.rows = [];
        this.striped = false;
        this.sortable = false;
        this.gridlines = false;
    }

    render() {
        // Define dynamic classes
        const tbodyClasses = {
            striped: this.striped,
            gridlines: this.gridlines
        }

        return html`
            ${this.rows.map((row) => html`
                <pi-table-tr
                class=${classMap(tbodyClasses)}
                >
                    ${this.columns.map((col) => html`
                        <pi-table-td>${row[col.key]}</pi-table-td>
                    `)}
                </pi-table-tr>
            `)}
        `;
    }

    static styles = [
        css`
            :host {
                display: table-row-group;
            }

            .gridlines {
                --pi-table-cell-border-right: var(--pi-table-cell-border-top, 1px solid #ddd);
                --pi-table-cell-border-left: var(--pi-table-cell-border-top, 1px solid #ddd);
            }

            pi-table-tr.striped:nth-child(even) {
                background-color: var(--pi-table-row-bg-color-striped-even, #f8f8f8);
            }

            pi-table-tr.striped:nth-child(odd) {
                background-color: var(--pi-table-row-bg-color-striped-odd, #fff);
            }
        `
    ]
    
}
customElements.define('pi-table-tbody', PiTableTbody);
