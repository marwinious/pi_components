import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiTable } from "../../components/tables/components/table/table";
import { PiTableColumn } from "../../components/tables/components/table/tableColumn";

const sampleColumns = [
    { label: 'Name', key: 'name', sortKey: 'name' },
    { label: 'Age', key: 'age', sortKey: 'age' },
    { label: 'Country', key: 'country', sortKey: 'country' },
    { label: 'Income', key: 'income', sortKey: 'rawIncome' },
]

const sampleRows = [
    { name: 'Alice', age: 30, country: 'USA', income: '$100,000', rawIncome: '100000' },
    { name: 'Bob', age: 25, country: 'UK', income: '$50,000', rawIncome: '50000' },
    { name: 'Charlie', age: 35, country: 'Canada', income: '$200,000', rawIncome: '200000' },
    { name: 'David', age: 32, country: 'Spain', income: '$70,000', rawIncome: '70000' },
    { name: 'Edward', age: 27, country: 'New Zealand', income: '$150,000', rawIncome: '150000' },
]

export default {
    title: 'Components/Tables',
    component: 'pi-table',
    tags: ['autodocs'],
    argTypes: {
        striped: { 
            control: 'boolean', 
            name: 'striped',
            description: 'Stripe table rows',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        gridlines: { 
            control: 'boolean', 
            name: 'gridlines',
            description: 'Show gridlines',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        paginate: { 
            control: 'boolean', 
            name: 'paginate',
            description: 'Enable pagination',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        rowsPerPage: { 
            control: 'number', 
            name: 'rowsPerPage',
            description: 'Number of rows per paginated page',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        sortKey: { 
            control: 'select', 
            name: 'sortKey',
            description: 'Pre-sorted table sort key',
            options: ['', 'name', 'age', 'country', 'income', 'rawIncome'],
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        sortDirection: { 
            control: 'select', 
            name: 'sortDirection',
            description: 'Pre-sorted table sort direction',
            options: ['asc', 'desc'],
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
    },
    args: {
        striped: false,
        gridlines: false,
        paginate: false,
        rowsPerPage: 3,
        sortKey: '',
        sortDirection: ''
    }
}

const Template = ({ striped, gridlines, paginate, rowsPerPage, sortKey, sortDirection }) => html`
    <pi-table 
    .rows=${sampleRows}
    .striped=${striped}
    .gridlines=${gridlines}
    .paginate=${paginate}
    rowsPerPage=${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
`;

const TemplateSortColumn = ({ striped, gridlines, paginate, rowsPerPage, sortKey, sortDirection }) => html`
    <pi-table 
    .rows=${sampleRows}
    .striped=${striped}
    .gridlines=${gridlines}
    .paginate=${paginate}
    rowsPerPage=${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name" sortable sortKey="name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
`;

export const Default = Template.bind();
Default.args = {}

export const Striped = Template.bind();
Striped.args = {
    striped: true
}

export const Gridlines = Template.bind();
Gridlines.args = {
    gridlines: true
}

export const SelectiveSorting = TemplateSortColumn.bind();
SelectiveSorting.args = {}

export const PreSorted = Template.bind();
PreSorted.args = {
    sortKey: 'age',
    sortDirection: 'asc'
}

export const Paginated = Template.bind();
Paginated.args = {
    paginate: true,
    rowsPerPage: 3
}