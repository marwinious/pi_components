export const basicTableCode = `<pi-table .rows=\${this.sampleRows}>
    <pi-table-column key="name" label="Name"></pi-table-column>
    <pi-table-column key="age" label="Age"></pi-table-column>
    <pi-table-column key="country" label="Country"></pi-table-column>
    <pi-table-column key="income" label="Income"></pi-table-column>
</pi-table>  
`

export const stripedTableCode = `<pi-table .rows=\${this.sampleRows} striped>
    <pi-table-column key="name" label="Name"></pi-table-column>
    <pi-table-column key="age" label="Age"></pi-table-column>
    <pi-table-column key="country" label="Country"></pi-table-column>
    <pi-table-column key="income" label="Income"></pi-table-column>
</pi-table>  
`

export const gridlinesTableCode = `<pi-table .rows=\${this.sampleRows} gridlines>
    <pi-table-column key="name" label="Name"></pi-table-column>
    <pi-table-column key="age" label="Age"></pi-table-column>
    <pi-table-column key="country" label="Country"></pi-table-column>
    <pi-table-column key="income" label="Income"></pi-table-column>
</pi-table>  
`

export const sortableTableCode = `<pi-table .rows=\${this.sampleRows}>
    <pi-table-column key="name" label="Name" sortable sortKey="name"></pi-table-column>
    <pi-table-column key="age" label="Age"></pi-table-column>
    <pi-table-column key="country" label="Country"></pi-table-column>
    <pi-table-column key="income" label="Income"></pi-table-column>
</pi-table>  
`

export const preSortedTableCode = `<pi-table .rows=\${this.sampleRows} sortKey="age" sortDirection="asc">
    <pi-table-column key="name" label="Name" sortable sortKey="name"></pi-table-column>
    <pi-table-column key="age" label="Age" sortable sortKey="name"></pi-table-column>
    <pi-table-column key="country" label="Country" sortable sortKey="name"></pi-table-column>
    <pi-table-column key="income" label="Income" sortable sortKey="rawIncome"></pi-table-column>
</pi-table>
`

export const paginatedTableCode = `<pi-table .rows=\${this.sampleRows} paginate rowsPerPage="3">
    <pi-table-column key="name" label="Name"></pi-table-column>
    <pi-table-column key="age" label="Age" sortable sortKey="age"></pi-table-column>
    <pi-table-column key="country" label="Country"></pi-table-column>
    <pi-table-column key="income" label="Income"></pi-table-column>
</pi-table>
`