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
        // Define dynamic classes
        const tbodyClasses = {
            striped: this.striped
        }

        return html`
            ${this.rows.map((row) => html`
                <pi-table-tr
                class="${classMap(tbodyClasses)}"
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

            .test {
                --pi-table-cell-border-right: none;
                --pi-table-cell-border-left: none;
            }

            pi-table-tr.striped:nth-child(even) {
                background-color: #eee;
            }

            pi-table-tr.striped:nth-child(odd) {
                background-color: #fff;
            }
        `
    ]
    
}
customElements.define('pi-table-tbody', PiTableTbody);
