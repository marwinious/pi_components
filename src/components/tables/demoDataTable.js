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
            title="Basic Table"
            >

                <div>
                    
                    <pi-card>
                        <div slot="title">Sortable data table</div>
                        <pi-basic-table
                        .columns=${this.sampleColumns}
                        .rows=${this.sampleRows}
                        sortable
                        ></pi-basic-table>
                    </pi-card>

                    <pi-card>
                        <div slot="title">Sample data</div>
                        <pre>
this.sampleColumns = [
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
    { label: 'Country', key: 'country' },
    { label: 'Income', key: 'income' },
]

this.sampleRows = [
    { name: 'Alice', age: 30, country: 'USA', income: '$100,000', rawIncome: '100000' },
    { name: 'Bob', age: 25, country: 'UK', income: '$50,000', rawIncome: '50000' },
    { name: 'Charlie', age: 35, country: 'Canada', income: '$200,000', rawIncome: '200000' },
]
                        </pre>
                    </pi-card>

                    <pi-card>
                        <div slot="title">Sample usage</div>
                        <pre>
&lt;pi-basic-table
.columns=\${this.sampleColumns}
.rows=\${this.sampleRows}
&gt;&lt;/pi-basic-table&gt;
                        </pre>
                        <pre>
&lt;pi-basic-table
.columns=\${this.sampleColumns}
.rows=\${this.sampleRows}
striped
&gt;&lt;/pi-basic-table&gt;
                        </pre>
                        <pre>
&lt;pi-basic-table
.columns=\${this.sampleColumns}
.rows=\${this.sampleRows}
&gt;
    &lt;div slot=&quot;tfoot&quot;&gt;Some footer content here&lt;/div&gt;
&lt;/pi-basic-table&gt;
                        </pre>
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
