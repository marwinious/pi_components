import { LitElement, css, html } from 'lit'
import { repeat } from 'lit/directives/repeat.js';

export class PiTable2Row extends LitElement {

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
        `
    ]
    
}

if(!customElements.get('pi-table-2-row')) { customElements.define('pi-table-2-row', PiTable2Row); }