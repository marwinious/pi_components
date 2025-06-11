import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiTable } from "../../components/tables/components/table/table";
import { PiTableColumn } from "../../components/tables/components/table/tableColumn";
import sampleProductList from "../../components/tables/sampleData/sampleProductsList.json"

/* const sampleColumns = [
    { label: 'Name', key: 'name', sortKey: 'name' },
    { label: 'Age', key: 'age', sortKey: 'age' },
    { label: 'Country', key: 'country', sortKey: 'country' },
    { label: 'Income', key: 'income', sortKey: 'rawIncome' },
] */

const sampleColumns = [
    { label: 'Category', key: 'category', sortKey: 'category' },
    { label: 'Title', key: 'title', sortKey: 'title' },
    { label: 'Brand', key: 'brand', sortKey: 'brand' },
    { label: 'Price', key: 'price', sortKey: 'price' },
]

/* const sampleRows = [
    { name: 'Alice', age: 30, country: 'USA', income: '$100,000', rawIncome: '100000' },
    { name: 'Bob', age: 25, country: 'UK', income: '$50,000', rawIncome: '50000' },
    { name: 'Charlie', age: 35, country: 'Canada', income: '$200,000', rawIncome: '200000' },
    { name: 'David', age: 32, country: 'Spain', income: '$70,000', rawIncome: '70000' },
    { name: 'Edward', age: 27, country: 'New Zealand', income: '$150,000', rawIncome: '150000' },
] */

const sampleRows = sampleProductList.products;

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
        <pi-table-column key="category" label="Category"></pi-table-column>
        <pi-table-column key="title" label="Title"></pi-table-column>
        <pi-table-column key="brand" label="Brand"></pi-table-column>
        <pi-table-column key="price" label="Price"></pi-table-column>
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
        <pi-table-column key="category" label="Category" sortable sortKey="category"></pi-table-column>
        <pi-table-column key="title" label="Title"></pi-table-column>
        <pi-table-column key="brand" label="Brand"></pi-table-column>
        <pi-table-column key="price" label="Price"></pi-table-column>
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