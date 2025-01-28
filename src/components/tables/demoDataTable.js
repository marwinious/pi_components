import { LitElement, css, html } from 'lit'
import { PiCard } from '../cards/components/card';
import { PiDemoContainer } from '../samples/demoContainer';
import { PiTable } from './components/table/table';
import { PiTableThead } from './components/table/tableThead';
import { PiTableTr } from './components/table/tableTr';
import { PiTableTh } from './components/table/tableTh';
import { PiTableTbody } from './components/table/tableTbody';
import { PiTableTd } from './components/table/tableTd';
import { PiTableTfoot } from './components/table/tableTfoot';
import { PiBasicTable } from './components/basicTable/basicTable';
import { PiDataTable } from './components/dataTable/dataTable';
import { PiTableColumn } from './components/table/tableColumn';

/*
<pi-card>
                        <pi-table
                        .columns=${this.sampleColumns}
                        .rows=${this.sampleRows}
                        ></pi-table>
                    </pi-card>
*/

export class PiDemoDataTable extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()

        this.sampleColumns = [
            { label: 'Name', key: 'name', sortKey: 'name' },
            { label: 'Age', key: 'age', sortKey: 'age' },
            { label: 'Country', key: 'country', sortKey: 'country' },
            { label: 'Income', key: 'income', sortKey: 'rawIncome' },
        ]

        this.sampleRows = [
            { name: 'Alice', age: 30, country: 'USA', income: '$100,000', rawIncome: '100000' },
            { name: 'Bob', age: 25, country: 'UK', income: '$50,000', rawIncome: '50000' },
            { name: 'Charlie', age: 35, country: 'Canada', income: '$200,000', rawIncome: '200000' },
        ]
    }

    render() {
        return html`
            <pi-demo-container
            title="Data Table"
            >

                <div>
                    
                    <pi-card>
                        <div slot="title">Column Table</div>
                        <pi-table .rows=${this.sampleRows}>
                            <pi-table-column key="name" label="Name"></pi-table-column>
                            <pi-table-column key="age" label="Age"></pi-table-column>
                            <pi-table-column key="country" label="Country"></pi-table-column>
                            <pi-table-column key="income" label="Income"></pi-table-column>
                        </pi-table>
                    </pi-card>

                </div>

            </pi-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-data-table', PiDemoDataTable);
