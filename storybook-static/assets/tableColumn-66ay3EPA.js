import{r as i,x as s,i as a}from"./lit-element-qJpPW6A9.js";import{d as h}from"./defaultCss-aEcf2KJM.js";import{e as p}from"./class-map-j0Yd3Bp3.js";import"./paginator-B6elyfOC.js";function u(r,t){return r.reduce((e,o,l)=>(l%t===0&&e.push(r.slice(l,l+t)),e),[])}class g extends i{static get properties(){return{rows:{type:Array},rowsPerPage:{type:[Number,String]},activeRows:{type:Array,attribute:!1},pages:{type:Array,attribute:!1},activePageIndex:{type:Number,attribute:!1}}}constructor(){super(),this.rows=[],this.rowsPerPage=-1,this.activeRows=[],this.pages=[],this.activePageIndex=0}willUpdate(t){t.has("rows")&&this.initPagination()}render(){return s`
            <pi-paginator
            .rows=${this.rowsPerPage}
            .totalRecords=${this.rows.length}
            @navClick=${t=>this.handlePagerNavClick(t.detail)}
            ></pi-paginator>
        `}initPagination(){if(this.rowsPerPage>0){const t=u(this.rows,this.rowsPerPage);this.pages=t,this.handlePaginationChange()}}handlePaginationChange(){this.emitPageRows(this.pages[this.activePageIndex])}emitPageRows(t){const e=new CustomEvent("updatedPageRows",{detail:{rows:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}handlePagerNavClick(t){Number(t.navIndex*this.rowsPerPage)+Number(this.rowsPerPage),this.activePageIndex=t.navIndex,this.handlePaginationChange()}static styles=[a`
            :host {
                display: block;
                width: 100%;
            }
        `]}customElements.get("pi-table-paginator")||customElements.define("pi-table-paginator",g);function m(r,t,e){return[...r].sort((l,d)=>{const n=l[t],c=d[t],b=typeof n=="string"&&typeof c=="string"?n.localeCompare(c,void 0,{numeric:!0}):Number(n)-Number(c);return e==="asc"?b:-b})}class f extends i{static get properties(){return{}}constructor(){super()}render(){return s`
            <slot></slot>
        `}static styles=[a`
            :host {
                display: table-row;
            }
        `]}customElements.get("pi-table-tr")||customElements.define("pi-table-tr",f);class v extends i{static get properties(){return{sortDirection:{type:String}}}constructor(){super(),this.sortDirection=""}render(){return s`
            ${this.sortDirection==="asc"?"▲":this.sortDirection==="desc"?"▼":"↕"}
        `}static styles=[a`
            :host {
                margin: var(--pi-table-sort-icon-margin, 0 0 0 0.5em);
                font-size: var(--pi-table-sort-icon-font-size, 0.8em);
                color: var(--pi-table-sort-icon-color, #666);
            }

            :host([data-active="true"]) {
                color: var(--pi-table-sort-icon-active-color, #000);
            }
        `]}customElements.get("pi-table-sort-icon")||customElements.define("pi-table-sort-icon",v);class y extends i{static get properties(){return{sortable:{type:Boolean},sortDirection:{type:String}}}constructor(){super(),this.sortable=!1,this.sortDirection=""}render(){const t={isSortable:this.sortable};return s`
            <div 
            class="table_th ${p(t)}"
            @click=${this.handleSortClick}
            >
                <slot></slot>
                ${this.sortable?s`
                    <pi-table-sort-icon
                    .sortDirection=${this.sortDirection}
                    ></pi-table-sort-icon>
                `:null}
            </div>
            
        `}handleSortClick(t){const e=new CustomEvent("tableSortIconClicked",{detail:{currentSortDirection:this.sortDirection},bubbles:!0,composed:!0});this.dispatchEvent(e)}static styles=[a`
            :host {
                display: table-cell;
                padding: var(--pi-table-cell-padding, 0.75em);
                border: var(--pi-table-cell-border, 1px solid #ddd);
                background-color: var(--pi-table-th-bg-color, #f4f4f4);
                position: relative;
                transition: background-color 0.5s ease, border 0.5s ease, color 0.5s ease;

                &[data-active="true"] {
                    background-color: var(--pi-table-th-active-bg-color, color-mix(in srgb, var(--pi-table-th-bg-color, #f4f4f4), black 20%));
                }

                .sort-icon {
                    margin: var(--pi-table-sort-icon-margin, 0 0 0 0.5em);
                    font-size: var(--pi-table-sort-icon-font-size, 0.8em);
                    color: var(--pi-table-sort-icon-color, #666);

                    &[data-active="true"] {
                        color: var(--standard-table-sort-icon-active-color, #000);
                    }
                }
            }

            .table_th {
                &.isSortable {
                    cursor: pointer;
                }
            }

            @media (max-width: 768px) {
                :host {
                    font-size: 0.9em;
                    font-size: var(--pi-table-small-cell-font-size, 0.9em);
                }
            }
        `]}customElements.get("pi-table-th")||customElements.define("pi-table-th",y);class w extends i{static get properties(){return{columns:{type:Array},sortable:{type:Boolean},gridlines:{type:Boolean},sortKey:{type:String},sortDirection:{type:String}}}constructor(){super(),this.columns=[],this.sortable=!1,this.gridlines=!1,this.sortKey="",this.sortDirection=""}render(){const t={gridlines:this.gridlines};return s`
            <pi-table-tr
            class=${p(t)}
            >
                <slot>
                    ${this.columns.map(e=>s`
                        <pi-table-th
                        ?sortable=${this.sortable&&e.sortKey}
                        >${e.label}</pi-table-th>
                    `)}
                </slot>
            </pi-table-tr>
        `}static styles=[a`
            :host {
                display: table-row-group;
            }

            .gridlines {
                --pi-table-th-border-right: var(--pi-table-th-border-bottom, 1px solid #ddd);
                --pi-table-th-border-left: var(--pi-table-th-border-bottom, 1px solid #ddd);
                --pi-table-th-border-top: var(--pi-table-th-border-bottom, 1px solid #ddd);
            }
        `]}customElements.get("pi-table-thead")||customElements.define("pi-table-thead",w);class x extends i{static get properties(){return{colspan:{type:Number}}}constructor(){super(),this.colspan=1}render(){return s`
            <slot></slot>
        `}static styles=[a`
            :host {
                display: table-cell;
                padding: var(--pi-table-cell-padding, 0.75em);
                border-top: var(--pi-table-cell-border-top, 1px solid #ddd);
                border-right: var(--pi-table-cell-border-right, 1px solid #ddd);
                border-bottom: var(--pi-table-cell-border-bottom, 1px solid #ddd);
                border-left: var(--pi-table-cell-border-left, 1px solid #ddd);
                background-color: var(--pi-table-cell-bg-color, #f4f4f4);
                color: var(--pi-table-cell-text-color);
                text-align: var(--pi-table-cell-text-align, left);
                font-weight: var(--pi-table-cell-font-weight, bold);
                transition: var(--pi-table-cell-transition, background-color 0.5s ease, border 0.5s ease, color 0.5s ease);

                &.clickable {
                    color: var(--pi-table-cell-clickable-text-color, blue);
                    cursor: pointer;

                    &:hover {
                        color: var(--pi-table-cell-clickable-text-color-hover, purple);
                    }
                }
            }

            @media (max-width: 768px) {
                :host {
                    font-size: var(--pi-table-cell-font-size-sm, 0.9em);
                }
            }
        `]}customElements.get("pi-table-td")||customElements.define("pi-table-td",x);class P extends i{static get properties(){return{columns:{type:Array},rows:{type:Array},striped:{type:Boolean},sortable:{type:Boolean},gridlines:{type:Boolean}}}constructor(){super(),this.columns=[],this.rows=[],this.striped=!1,this.sortable=!1,this.gridlines=!1}render(){const t={striped:this.striped,gridlines:this.gridlines};return s`
            ${this.rows.map(e=>s`
                <pi-table-tr
                class=${p(t)}
                >
                    ${this.columns.map(o=>s`
                        <pi-table-td>${e[o.key]}</pi-table-td>
                    `)}
                </pi-table-tr>
            `)}
        `}static styles=[a`
            :host {
                display: table-row-group;
            }

            .gridlines {
                --pi-table-cell-border-right: var(--pi-table-cell-border-top, 1px solid #ddd);
                --pi-table-cell-border-left: var(--pi-table-cell-border-top, 1px solid #ddd);
            }

            pi-table-tr.striped:nth-child(even) {
                background-color: var(--pi-table-row-bg-color-striped-even, #f8f8f8);
            }

            pi-table-tr.striped:nth-child(odd) {
                background-color: var(--pi-table-row-bg-color-striped-odd, #fff);
            }
        `]}customElements.get("pi-table-tbody")||customElements.define("pi-table-tbody",P);class k extends i{static get properties(){return{}}constructor(){super()}render(){return s`
            <slot></slot>
        `}static styles=[a`
            :host {
                display: table-footer-group;
                
            }

            /* .table_tfoot {
                display: block;
                padding: 0.5rem 0 0.5rem 0;
            } */
        `]}customElements.get("pi-table-tfoot")||customElements.define("pi-table-tfoot",k);class E extends i{static get properties(){return{columns:{type:Array},rows:{type:Array}}}constructor(){super(),this.columns=[],this.rows=[]}render(){return s`
            <slot></slot>
        `}static styles=[a`
            :host {
                display: table;
                overflow-x: auto;
                width: 100%;
                border-collapse: collapse;
                text-align: left;
                white-space: nowrap;
            }
        `]}customElements.get("pi-base-table")||customElements.define("pi-base-table",E);class S extends i{static get properties(){return{columns:{type:Array,attribute:!1},rows:{type:Array},striped:{type:Boolean},gridlines:{type:Boolean},sortKey:{type:String},sortDirection:{type:String},activeRows:{type:Array,attribute:!1},slottedColumns:{type:Array,attribute:!1},paginate:{type:Boolean},rowsPerPage:{type:[Number,String]},sortedRows:{type:Array,attribute:!1}}}constructor(){super(),this.columns=[],this.rows=[],this.striped=!1,this.gridlines=!1,this.sortKey="",this.sortDirection="",this.activeRows=[],this.slottedColumns=[],this.paginate=!1,this.rowsPerPage=-1,this.sortedRows=[]}connectedCallback(){super.connectedCallback(),this.initTable(),this.addEventListener("sortRequested",t=>this.handleSortRequest(t.detail.key,t.detail.newSortDirection))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sortRequested")}firstUpdated(){this.captureColumnData(),this.handleDefaultSort()}willUpdate(t){t.has("rows")&&this.captureColumnData()}render(){return s`
            <pi-base-table>
                <pi-table-thead
                ?gridlines=${this.gridlines}
                .sortKey=${this.sortKey}
                .sortDirection=${this.sortDirection}
                >
                    <slot></slot>
                </pi-table-thead>

                <pi-table-tbody
                ?striped=${this.striped}
                ?gridlines=${this.gridlines}
                .rows=${this.activeRows}
                .columns=${this.columns}
                ></pi-table-tbody>

                <pi-table-tfoot>
                    <slot name="tfoot"></slot>
                </pi-table-tfoot>
            </pi-base-table>

            ${this.paginate?s`
                <pi-table-paginator
                .rows=${this.sortedRows}
                .rowsPerPage=${this.rowsPerPage}
                @updatedPageRows=${t=>this.handleUpdatedPageRows(t.detail.rows)}
                ></pi-table-paginator>
            `:null}
        `}handleUpdatedPageRows(t){this.activeRows=[...t]}handleSortRequest(t,e){this.sortedRows=m(this.rows,t,e),this.updateColumnSorters(t,e),this.paginate||(this.activeRows=[...this.sortedRows])}updateColumnSorters(t,e){this.slottedColumns.forEach(o=>{o.dispatchEvent(new CustomEvent("updateSorter",{detail:{sortKey:t,sortDirection:e},bubbles:!0,composed:!0}))})}handleDefaultSort(){this.sortKey!=""&&this.sortDirection!=""&&this.handleSortRequest(this.sortKey,this.sortDirection)}captureColumnData(){const t=[],e=[],o=this.shadowRoot.querySelector("slot");if(o==null)return!1;o.assignedElements({flatten:!0}).forEach(d=>{if(d.nodeName=="PI-TABLE-COLUMN"){const n={};e.push(d),Array.from(d.attributes).forEach(c=>{n[c.name]=c.value}),t.push(n)}}),this.columns=t,e.length>0&&(this.slottedColumns=e)}initTable(){this.activeRows=[...this.rows],this.sortedRows=[...this.rows]}static styles=[h,a`
            :host {
                display: table;
                overflow-x: var(--pi-table-overflow-x, auto);
                overflow-y: var(--pi-table-overflow-y, visible);
                width: var(--pi-table-width, 100%);
                border-collapse: var(--pi-table-border-collapse, collapse);
                text-align: var(--pi-table-text-align, left);
                white-space: var(--pi-table-white-space, nowrap);
            }
        `]}customElements.get("pi-table")||customElements.define("pi-table",S);class C extends i{static get properties(){return{sortable:{type:Boolean},sortDirection:{type:String},key:{type:String},label:{type:String}}}constructor(){super(),this.sortable=!1,this.sortDirection="",this.key="",this.label=""}connectedCallback(){super.connectedCallback(),this.addEventListener("updateSorter",t=>this.handleUpdateSorter(t.detail))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("updateSorter")}render(){const t={isSortable:this.sortable};return s`
            <div 
            class="table_th ${p(t)}"
            @click=${this.handleSortClick}
            >
                ${this.label}
                ${this.sortable?s`
                    <pi-table-sort-icon
                    .sortDirection=${this.sortDirection}
                    ></pi-table-sort-icon>
                `:null}
            </div>
            
        `}handleUpdateSorter(t){t.sortKey!=this.key?this.sortDirection="":this.sortDirection=t.sortDirection}handleSortClick(t){if(this.sortable==!0){const e=this.sortDirection,o=e=="asc"?"desc":"asc",l=new CustomEvent("sortRequested",{detail:{key:this.key,label:this.label,currentSortDirection:e,newSortDirection:o},bubbles:!0,composed:!0});this.dispatchEvent(l),this.sortDirection=o}}static styles=[a`
            :host {
                display: table-cell;
                padding: var(--pi-table-th-padding, 0.75em);
                border-top: var(--pi-table-th-border-top, 1px solid #ddd);
                border-right: var(--pi-table-th-border-right, 1px solid #ddd);
                border-bottom: var(--pi-table-th-border-bottom, 1px solid #ddd);
                border-left: var(--pi-table-th-border-left, 1px solid #ddd);
                background-color: var(--pi-table-th-bg-color, #f4f4f4);
                color: var(--pi-table-th-text-color, #555);
                text-align: var(--pi-table-th-text-align, left);
                position: relative;
                font-weight: var(--pi-table-th-font-weight, bold);
                transition: var(--pi-table-th-transition, background-color 0.5s ease, border 0.5s ease, color 0.5s ease);

                &[data-active="true"] {
                    background-color: var(--pi-table-th-bg-color-active, color-mix(in srgb, var(--pi-table-th-bg-color, #f4f4f4), black 20%));
                }
            }

            .table_th {
                &.isSortable {
                    cursor: pointer;
                }
            }

            @media (max-width: 768px) {
                :host {
                    font-size: var(--pi-table-th-font-size-sm, 0.9em);
                }
            }
        `]}customElements.get("pi-table-column")||customElements.define("pi-table-column",C);
