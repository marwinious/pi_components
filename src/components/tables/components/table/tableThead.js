import { LitElement, css, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js';
import { PiTableTr } from './tableTr';
import { PiTableTh } from './tableTh';

export class PiTableThead extends LitElement {

    static get properties() {
        return {
            columns: { type: Array },
            sortable: { type: Boolean },
            gridlines: { type: Boolean }
        }
    }

    constructor() {
        super()
        this.columns = [];
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
            <pi-table-tr
            class=${classMap(tbodyClasses)}
            >
                <slot>
                    ${this.columns.map((col) => html`
                        <pi-table-th
                        ?sortable=${this.sortable && col.sortKey}
                        >${col.label}</pi-table-th>
                    `)}
                </slot>
            </pi-table-tr>
        `;
    }

    static styles = [
        css`
            :host {
                display: table-row-group;
            }

            .gridlines {
                --pi-table-th-border-right: var(--pi-table-th-border-bottom, 1px solid #ddd);
                --pi-table-th-border-left: var(--pi-table-th-border-bottom, 1px solid #ddd);
                --pi-table-th-border-top: var(--pi-table-th-border-bottom, 1px solid #ddd);
            }
        `
    ]
    
}
customElements.define('pi-table-thead', PiTableThead);
