import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicTableCode, 
    stripedTableCode, 
    gridlinesTableCode,
    sortableTableCode,
    preSortedTableCode,
    paginatedTableCode
} from '../codeSamples/tableCodeSamples';
import { PiTable } from '../../tables/components/table/table';
import { PiTableColumn } from '../../tables/components/table/tableColumn';

export class PiTableDemo extends LitElement {

    static get properties() {
        return {
            child: { type: Object }
        }
    }

    constructor() {
        super()
        this.child = {}

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

    firstUpdated() {
        this.child = this.shadowRoot.querySelectorAll('pi-feature-example-container')
    }

    render() {
        return html`
            <pi-feature-demo-container 
            label="Data Table"
            >

                <pi-feature-example-container
                title="Basic Table"
                .sampleCode=${basicTableCode}
                >

                    <pi-table .rows=${this.sampleRows}>
                        <pi-table-column key="name" label="Name"></pi-table-column>
                        <pi-table-column key="age" label="Age"></pi-table-column>
                        <pi-table-column key="country" label="Country"></pi-table-column>
                        <pi-table-column key="income" label="Income"></pi-table-column>
                    </pi-table>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Striped Table"
                .sampleCode=${stripedTableCode}
                >

                    <pi-table .rows=${this.sampleRows} striped>
                        <pi-table-column key="name" label="Name"></pi-table-column>
                        <pi-table-column key="age" label="Age"></pi-table-column>
                        <pi-table-column key="country" label="Country"></pi-table-column>
                        <pi-table-column key="income" label="Income"></pi-table-column>
                    </pi-table>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Gridlines Table"
                .sampleCode=${gridlinesTableCode}
                >

                    <pi-table .rows=${this.sampleRows} gridlines>
                        <pi-table-column key="name" label="Name"></pi-table-column>
                        <pi-table-column key="age" label="Age"></pi-table-column>
                        <pi-table-column key="country" label="Country"></pi-table-column>
                        <pi-table-column key="income" label="Income"></pi-table-column>
                    </pi-table>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Sortable Table"
                .sampleCode=${sortableTableCode}
                >

                    <pi-table .rows=${this.sampleRows}>
                        <pi-table-column key="name" label="Name" sortable sortKey="name"></pi-table-column>
                        <pi-table-column key="age" label="Age"></pi-table-column>
                        <pi-table-column key="country" label="Country"></pi-table-column>
                        <pi-table-column key="income" label="Income"></pi-table-column>
                    </pi-table>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Pre-sorted Table (by age, ascending)"
                .sampleCode=${preSortedTableCode}
                >

                    <pi-table .rows=${this.sampleRows} sortKey="age" sortDirection="asc">
                        <pi-table-column key="name" label="Name" sortable sortKey="name"></pi-table-column>
                        <pi-table-column key="age" label="Age" sortable sortKey="age"></pi-table-column>
                        <pi-table-column key="country" label="Country" sortable sortKey="country"></pi-table-column>
                        <pi-table-column key="income" label="Income" sortable sortKey="rawIncome"></pi-table-column>
                    </pi-table>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Paginated Table"
                .sampleCode=${paginatedTableCode}
                >

                    <pi-table .rows=${this.sampleRows} paginate rowsPerPage="3">
                        <pi-table-column key="name" label="Name"></pi-table-column>
                        <pi-table-column key="age" label="Age" sortable sortKey="age"></pi-table-column>
                        <pi-table-column key="country" label="Country"></pi-table-column>
                        <pi-table-column key="income" label="Income"></pi-table-column>
                    </pi-table>

                </pi-feature-example-container>

            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-table-demo', PiTableDemo);
