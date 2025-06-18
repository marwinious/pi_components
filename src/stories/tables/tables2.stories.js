import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import sampleProductList from "../../components/tables/sampleData/sampleProductsList.json"
import { PiTable2 } from "../../components/tables/components/table/table2";

/* const sampleColumns = [
    { label: 'Name', key: 'name', sortKey: 'name' },
    { label: 'Age', key: 'age', sortKey: 'age' },
    { label: 'Country', key: 'country', sortKey: 'country' },
    { label: 'Income', key: 'income', sortKey: 'rawIncome' },
] */

/* const sampleColumns = [
    { label: 'Category', key: 'category', sortKey: 'category' },
    { label: 'Title', key: 'title', sortKey: 'title' },
    { label: 'Brand', key: 'brand', sortKey: 'brand' },
    { label: 'Price', key: 'price', sortKey: 'price' },
] */

const sampleColumns = [
    { header: 'Category', key: 'category', sortKey: 'category', sortable: true },
    { header: 'Title', key: 'title', sortKey: 'title' },
    { header: 'Brand', key: 'brand', sortKey: 'brand' },
    { 
        header: 'Price', key: 'price', sortKey: 'price',
        render: (item) =>  html`
            &dollar;${item.price}
        `
    },
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
    title: 'Components/Tables/Test',
    component: 'pi-table-2',
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
            options: ['', 'category', 'title', 'brand', 'price'],
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
    <pi-table-2 
    .rows=${sampleRows}
    .columns=${sampleColumns}
    .striped=${striped}
    .gridlines=${gridlines}
    .paginate=${paginate}
    rowsPerPage=${ifDefined(paginate == true ? rowsPerPage : undefined)}
    defaultSortKey=${ifDefined(sortKey != '' ? sortKey : undefined)}
    defaultSortDirection=${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    ></pi-table-2>
`;

export const Default = Template.bind();
Default.args = {}