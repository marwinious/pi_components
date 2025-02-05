import { LitElement, css, html } from 'lit'
import { PiTableTr } from './tableTr';
import { PiTableTh } from './tableTh';

export class PiTableThead extends LitElement {

    static get properties() {
        return {
            columns: { type: Array },
            sortable: { type: Boolean },
        }
    }

    constructor() {
        super()
        this.columns = [];
        this.sortable = false;
    }

    render() {
        return html`
            <pi-table-tr>
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
        `
    ]
    
}
customElements.define('pi-table-thead', PiTableThead);
