import { LitElement, css, html } from 'lit'
import { PiTableThead } from './tableThead';
import { PiTableTr } from './tableTr';
import { PiTableTh } from './tableTh';
import { PiTableTbody } from './tableTbody';
import { PiTableTd } from './tableTd';
import { PiTableTfoot } from './tableTfoot';
import { PiBaseTable } from './baseTable';

/*
<table>
                <pi-table-thead>
                    <pi-table-tr>
                        ${this.columns.map((col) => html`
                            <pi-table-th>${col.label}</pi-table-th>
                        `)}
                    </pi-table-tr>
                </pi-table-thead>
                <pi-table-tbody>
                    ${this.rows.map((row) => html`
                        <pi-table-tr>
                            ${this.columns.map((col) => html`
                                <pi-table-td>${row[col.key]}</pi-table-td>
                            `)}
                        </pi-table-tr>
                    `)}
                </pi-table-tbody>
                <pi-table-tfoot></pi-table-tfoot>
            </table>
*/

export class PiTable extends LitElement {

    static get properties() {
        return {
            columns: { type: Array, attribute: false },
            rows: { type: Array },
            striped: { type: Boolean },
        }
    }

    constructor() {
        super()
        this.columns = [];
        this.rows = [];
        this.striped = false;
    }

    firstUpdated() {
        this.captureColumnData();
    }

    willUpdate(changedProperties) {
        if(changedProperties.has('rows')) {
            // console.log('this.rows: ', this.rows);
            this.captureColumnData();
        }
    }

    render() {
        return html`
            <pi-base-table>
                <pi-table-thead>
                    <slot></slot>
                </pi-table-thead>

                <pi-table-tbody
                ?striped=${this.striped}
                .rows=${this.rows}
                .columns=${this.columns}
                ></pi-table-tbody>

                <pi-table-tfoot>
                    <slot name="tfoot"></slot>
                </pi-table-tfoot>
            </pi-base-table>
        `;
    }

    captureColumnData() {
        // Init column data
        const columnData = [];

        // Get slot
        const columnsSlot = this.shadowRoot.querySelector('slot');

        // Check for slotted items
        if(columnsSlot == null) { return false; }

        // Get slot elements
        const assignedElements = columnsSlot.assignedElements({ flatten: true});
        // console.log('assignedElements: ', assignedElements);

        // Check if slot elements are p-table-columns
        if(assignedElements[0].nodeName == "PI-TABLE-COLUMN") {
            // console.log('assignedElements: ', assignedElements);
            // Loop through elements
            assignedElements.forEach((el) => {
                const columnDataItem = {};

                // Translate each element's attributes to key->value objects
                Array.from(el.attributes).forEach((attr) => {
                    // console.log('Attribute: ', attr.name, attr.value);
                    // Add this attribute's name and corresponding label to our data item
                    columnDataItem[attr.name] = attr.value;
                    // Add to column data
                    // columnData.push({ key: attr.key, label: attr.value})
                })

                // Add to column data
                columnData.push(columnDataItem);
            })

            // console.log('columnData: ', columnData);
            
            // Update this.columns with new columnData
            this.columns = columnData

        }
    }

    static styles = [
        css`
            :host {
                display: table;
                overflow-x: var(--pi-table-overflow-x, auto);
                overflow-y: var(--pi-table-overflow-y, visible);
                width: var(--pi-table-width, 100%);
                border-collapse: var(--pi-table-border-collapse, collapse);
                text-align: var(--pi-table-text-align, left);
                white-space: var(--pi-table-white-space, nowrap);
            }
        `
    ]
    
}
customElements.define('pi-table', PiTable);
