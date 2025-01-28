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
            { name: 'David', age: 32, country: 'Spain', income: '$70,000', rawIncome: '70000' },
            { name: 'Edward', age: 27, country: 'New Zealand', income: '$150,000', rawIncome: '150000' },
        ]
    }

    render() {
        return html`
            <pi-demo-container
            title="Data Table"
            >

                <div>
                    
                    <pi-card>
                        <div slot="title">Simple Table</div>
                        <pi-table .rows=${this.sampleRows}>
                            <pi-table-column key="name" label="Name"></pi-table-column>
                            <pi-table-column key="age" label="Age"></pi-table-column>
                            <pi-table-column key="country" label="Country"></pi-table-column>
                            <pi-table-column key="income" label="Income"></pi-table-column>
                        </pi-table>
                    </pi-card>

                    <pi-card>
                        <div slot="title">Striped Table</div>
                        <pi-table .rows=${this.sampleRows} striped>
                            <pi-table-column key="name" label="Name"></pi-table-column>
                            <pi-table-column key="age" label="Age"></pi-table-column>
                            <pi-table-column key="country" label="Country"></pi-table-column>
                            <pi-table-column key="income" label="Income"></pi-table-column>
                        </pi-table>
                    </pi-card>

                    <pi-card>
                        <div slot="title">Gridlines Table</div>
                        <pi-table .rows=${this.sampleRows} gridlines>
                            <pi-table-column key="name" label="Name"></pi-table-column>
                            <pi-table-column key="age" label="Age"></pi-table-column>
                            <pi-table-column key="country" label="Country"></pi-table-column>
                            <pi-table-column key="income" label="Income"></pi-table-column>
                        </pi-table>
                    </pi-card>

                    <pi-card>
                        <div slot="title">Sortable Table</div>
                        <pi-table .rows=${this.sampleRows} gridlines>
                            <pi-table-column key="name" label="Name" sortable sortKey="name"></pi-table-column>
                            <pi-table-column key="age" label="Age"></pi-table-column>
                            <pi-table-column key="country" label="Country"></pi-table-column>
                            <pi-table-column key="income" label="Income"></pi-table-column>
                        </pi-table>
                    </pi-card>

                    <pi-card>
                        <div slot="title">Pre-sorted Table (by age, ascending)</div>
                        <pi-table .rows=${this.sampleRows} sortKey="age" sortDirection="asc">
                            <pi-table-column key="name" label="Name" sortable sortKey="name"></pi-table-column>
                            <pi-table-column key="age" label="Age" sortable sortKey="name"></pi-table-column>
                            <pi-table-column key="country" label="Country" sortable sortKey="name"></pi-table-column>
                            <pi-table-column key="income" label="Income" sortable sortKey="rawIncome"></pi-table-column>
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
