import{LitElement as i,html as a,css as d}from"lit";import{register as l}from"./src/registerWebComp.js";import{classMap as n}from"lit/directives/class-map.js";import{repeat as s}from"lit/directives/repeat.js";import{PiTableRow as p}from"./piTableRow.js";import{PiTableColumn as c}from"./piTableColumn.js";import{PiTablePaginator as h}from"./piTablePaginator.js";import b from"./src/css/defaultCss.js";import{sortArrayOfObjects as u}from"./src/lib/utility/sorters.js";l("pi-table-row",p);l("pi-table-column",c);l("pi-table-paginator",h);class C extends i{static get properties(){return{rows:{type:Array},sortedRows:{type:Array},activeRows:{type:Array},columns:{type:Array},striped:{type:Boolean},compact:{type:Boolean},gridlines:{type:Boolean},defaultSortKey:{type:String},defaultSortDirection:{type:String},paginate:{type:Boolean},rowsPerPage:{type:Number|String}}}connectedCallback(){super.connectedCallback(),this.initTable(),this.addEventListener("sortRequested",t=>this.handleSortRequest(t.detail.key,t.detail.newSortDirection))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sortRequested",t=>this.handleSortRequest(t.detail.key,t.detail.newSortDirection))}firstUpdated(){this.handleDefaultSort()}constructor(){super(),this.rows=[],this.sortedRows=[],this.activeRows=[],this.columns=void 0,this.striped=!1,this.compact=!1,this.gridlines=!1,this.defaultSortKey=null,this.defaultSortDirection=null,this.paginate=!1,this.rowsPerPage=5}initTable(){this.activeRows=[...this.rows],this.sortedRows=[...this.rows]}resolveColumns(){return this.columns&&this.columns.length>0?this.columns:this.rows&&this.rows.length>0?Object.keys(this.rows[0]).map(t=>({key:t,header:t.charAt(0).toUpperCase()+t.slice(1).replace(/([A-Z])/g," $1")})):[]}handleSortRequest(t,r){this.sortedRows=u(this.rows,t,r),this.updateColumnSorters(t,r),this.paginate||(this.activeRows=[...this.sortedRows])}handleDefaultSort(){this.defaultSortKey!=null&&this.defaultSortDirection!=null&&this.handleSortRequest(this.defaultSortKey,this.defaultSortDirection)}updateColumnSorters(t,r){this.shadowRoot.querySelectorAll("pi-table-column").forEach(o=>{o.dispatchEvent(new CustomEvent("updateSorter",{detail:{sortKey:t,sortDirection:r},bubbles:!0,composed:!0}))})}handleUpdatedPageRows(t){this.activeRows=[...t]}render(){const t=this.resolveColumns(),r={striped:this.striped,gridlines:this.gridlines};return!this.rows||this.rows.length===0?a`<div class="empty-table-message">No data to display.</div>`:a`
            <table role="table" aria-label="Customizable Data Table">
                <thead role="rowgroup">
                    <tr role="row">
                        ${s(t,e=>e.key,e=>a`
                            <pi-table-column
                            ?sortable=${e.sortable&&e.sortKey}
                            .label=${e.header}
                            .key=${e.key}
                            .sortKey=${e.sortKey}
                            >${e.header}</pi-table-column>
                        `)}
                    </tr>
                </thead>
                <tbody role="rowgroup">
                    ${s(this.activeRows,(e,o)=>e.id||o,(e,o)=>a`
                        <pi-table-row
                        class=${n(r)}
                        .item=${e}
                        .columns=${t}
                        .rowIndex=${o}
                        ></pi-table-row>
                    `)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan=10000>
                            <slot name="tfoot"></slot>
                        </td>
                    </tr>
                </tfoot>
            </table>

            ${this.paginate?a`
                <pi-table-paginator
                .rows=${this.sortedRows}
                .rowsPerPage=${this.rowsPerPage}
                @updatedPageRows=${e=>this.handleUpdatedPageRows(e.detail.rows)}
                ></pi-table-paginator>
            `:null}
        `}static styles=[b,d`
            :host {
                display: block;
                /* font-family: 'Inter', sans-serif;
                --table-border-color: #e0e0e0;
                --table-header-bg: #f5f5f5;
                --table-row-hover-bg: #f9f9f9;
                --table-stripe-bg: #f2f2f2;
                --table-text-color: #333;
                --table-header-text-color: #555;
                --table-cell-padding: 12px;
                --table-compact-cell-padding: 8px; */
            }

            table {
                overflow-x: var(--pi-table-overflow-x, auto);
                overflow-y: var(--pi-table-overflow-y, visible);
                width: var(--pi-table-width, 100%);
                border-collapse: var(--pi-table-border-collapse, collapse);
                text-align: var(--pi-table-text-align, left);
                white-space: var(--pi-table-white-space, nowrap);
            }

            tfoot {
                white-space: wrap;
            }

            .striped:nth-child(even) {
                background-color: var(--pi-table-row-bg-color-striped-even, #f8f8f8);
            }

            .striped:nth-child(odd) {
                background-color: var(--pi-table-row-bg-color-striped-odd, #fff);
            }

            .gridlines {
                --pi-table-cell-border-right: var(--pi-table-cell-border-top, 1px solid #ddd);
                --pi-table-cell-border-left: var(--pi-table-cell-border-top, 1px solid #ddd);
            }

            th, td {
                border: 1px solid var(--table-border-color);
                padding: var(--table-cell-padding);
                text-align: left;
            }

            /* Compact styling */
            :host([compact]) th,
            :host([compact]) td {
                padding: var(--table-compact-cell-padding);
            }

            thead {
                background-color: var(--table-header-bg);
            }

            th {
                font-weight: 600;
                color: var(--table-header-text-color);
                text-transform: uppercase;
                font-size: 0.85em;
            }

            tbody tr:hover {
                background-color: var(--table-row-hover-bg);
                transition: background-color 0.2s ease-in-out;
            }

            /* Striped rows styling */
            :host([striped]) tbody tr:nth-child(even) {
                background-color: var(--table-stripe-bg);
            }

            /* For empty state */
            .empty-table-message {
                text-align: center;
                padding: 40px;
                color: #666;
                font-style: italic;
            }
        `]}export{C as PiTable};
//# sourceMappingURL=piTable.js.map
