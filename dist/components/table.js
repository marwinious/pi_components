import{LitElement as l,html as s,css as d}from"lit";import{register as a}from"../utils/registerWebComp.js";import{classMap as n}from"lit/directives/class-map.js";import{repeat as i}from"lit/directives/repeat.js";import{PiTableRow as p}from"./tableRow.js";import{PiTableColumn as h}from"./tableColumn.js";import{PiTablePaginator as c}from"./tablePaginator.js";import b from"./defaultCss.js";import{sortArrayOfObjects as u}from"./sorters.js";a("pi-table-row",p);a("pi-table-column",h);a("pi-table-paginator",c);class C extends l{static get properties(){return{rows:{type:Array},sortedRows:{type:Array},activeRows:{type:Array},columns:{type:Array},striped:{type:Boolean},compact:{type:Boolean},gridlines:{type:Boolean},defaultSortKey:{type:String},defaultSortDirection:{type:String},paginate:{type:Boolean},rowsPerPage:{type:Number|String}}}connectedCallback(){super.connectedCallback(),this.initTable(),this.addEventListener("sortRequested",e=>this.handleSortRequest(e.detail.key,e.detail.newSortDirection))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sortRequested",e=>this.handleSortRequest(e.detail.key,e.detail.newSortDirection))}firstUpdated(){this.handleDefaultSort()}constructor(){super(),this.rows=[],this.sortedRows=[],this.activeRows=[],this.columns=void 0,this.striped=!1,this.compact=!1,this.gridlines=!1,this.defaultSortKey=null,this.defaultSortDirection=null,this.paginate=!1,this.rowsPerPage=5}initTable(){this.activeRows=[...this.rows],this.sortedRows=[...this.rows]}resolveColumns(){return this.columns&&this.columns.length>0?this.columns:this.rows&&this.rows.length>0?Object.keys(this.rows[0]).map(e=>({key:e,header:e.charAt(0).toUpperCase()+e.slice(1).replace(/([A-Z])/g," $1")})):[]}handleSortRequest(e,r){this.sortedRows=u(this.rows,e,r),this.updateColumnSorters(e,r),this.paginate||(this.activeRows=[...this.sortedRows])}handleDefaultSort(){this.defaultSortKey!=null&&this.defaultSortDirection!=null&&this.handleSortRequest(this.defaultSortKey,this.defaultSortDirection)}updateColumnSorters(e,r){this.shadowRoot.querySelectorAll("pi-table-column").forEach(o=>{o.dispatchEvent(new CustomEvent("updateSorter",{detail:{sortKey:e,sortDirection:r},bubbles:!0,composed:!0}))})}handleUpdatedPageRows(e){this.activeRows=[...e]}render(){const e=this.resolveColumns(),r={striped:this.striped,gridlines:this.gridlines};return!this.rows||this.rows.length===0?s`<div class="empty_table_message">No data to display.</div>`:s`
            <table role="table" aria-label="Customizable Data Table">
                <thead role="rowgroup">
                    <tr role="row">
                        ${i(e,t=>t.key,t=>s`
                            <pi-table-column
                            ?sortable=${t.sortable&&t.sortKey}
                            .label=${t.header}
                            .key=${t.key}
                            .sortKey=${t.sortKey}
                            >${t.header}</pi-table-column>
                        `)}
                    </tr>
                </thead>
                <tbody role="rowgroup">
                    ${i(this.activeRows,(t,o)=>t.id||o,(t,o)=>s`
                        <pi-table-row
                        class=${n(r)}
                        .item=${t}
                        .columns=${e}
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

            ${this.paginate?s`
                <pi-table-paginator
                .rows=${this.sortedRows}
                .rowsPerPage=${this.rowsPerPage}
                @updatedPageRows=${t=>this.handleUpdatedPageRows(t.detail.rows)}
                ></pi-table-paginator>
            `:null}
        `}static styles=[b,d`
            :host {
                display: block;
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

            pi-table-row,
            pi-table-row.striped,
            pi-table-row.gridlines {
                &:hover {
                    background: var(--pi-table-row-bg-color-hover, #eee);
                }
            }

            /* For empty state */
            .empty_table_message {
                text-align: center;
                padding: 40px;
                color: #666;
                font-style: italic;
            }
        `]}export{C as PiTable};
//# sourceMappingURL=table.js.map
