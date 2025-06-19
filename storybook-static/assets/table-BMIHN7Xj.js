import{r as m,x as b,i as v,T as R}from"./lit-element-55XysmYc.js";import{e as $}from"./class-map-CZwkYLGW.js";import{e as D,i as E,t as A}from"./directive-CJw_OlP2.js";import{p as I,v as g,r as f,M as x,m as N}from"./directive-helpers-8UxTEN2p.js";import"./paginator-hcdYnD-x.js";import{d as T}from"./defaultCss-Dh8mF8Ic.js";function q(s,t){const o=[];for(let r=0;r<s.length;r+=Number(t))o.push(s.slice(r,r+Number(t)));return o}class U extends m{static get properties(){return{rows:{type:Array},rowsPerPage:{type:[Number,String]},activeRows:{type:Array,attribute:!1},pages:{type:Array,attribute:!1},activePageIndex:{type:Number,attribute:!1}}}constructor(){super(),this.rows=[],this.rowsPerPage=-1,this.activeRows=[],this.pages=[],this.activePageIndex=0}willUpdate(t){t.has("rows")&&this.initPagination()}render(){return b`
            <pi-paginator
            .rows=${this.rowsPerPage}
            .totalRecords=${this.rows.length}
            @navClick=${t=>this.handlePagerNavClick(t.detail)}
            ></pi-paginator>
        `}initPagination(){if(this.rowsPerPage>0){const t=q(this.rows,this.rowsPerPage);this.pages=t,this.handlePaginationChange()}}handlePaginationChange(){this.emitPageRows(this.pages[this.activePageIndex])}emitPageRows(t){const o=new CustomEvent("updatedPageRows",{detail:{rows:t},bubbles:!0,composed:!0});this.dispatchEvent(o)}handlePagerNavClick(t){Number(t.navIndex*this.rowsPerPage)+Number(this.rowsPerPage),this.activePageIndex=t.navIndex,this.handlePaginationChange()}static styles=[v`
            :host {
                display: block;
                width: 100%;
            }
        `]}customElements.get("pi-table-paginator")||customElements.define("pi-table-paginator",U);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=(s,t,o)=>{const r=new Map;for(let e=t;e<=o;e++)r.set(s[e],e);return r},P=D(class extends E{constructor(s){if(super(s),s.type!==A.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,o){let r;o===void 0?o=t:t!==void 0&&(r=t);const e=[],d=[];let i=0;for(const c of s)e[i]=r?r(c,i):i,d[i]=o(c,i),i++;return{values:d,keys:e}}render(s,t,o){return this.dt(s,t,o).values}update(s,[t,o,r]){const e=I(s),{values:d,keys:i}=this.dt(t,o,r);if(!Array.isArray(e))return this.ut=i,d;const c=this.ut??=[],p=[];let w,k,a=0,n=e.length-1,l=0,h=d.length-1;for(;a<=n&&l<=h;)if(e[a]===null)a++;else if(e[n]===null)n--;else if(c[a]===i[l])p[l]=g(e[a],d[l]),a++,l++;else if(c[n]===i[h])p[h]=g(e[n],d[h]),n--,h--;else if(c[a]===i[h])p[h]=g(e[a],d[h]),f(s,p[h+1],e[a]),a++,h--;else if(c[n]===i[l])p[l]=g(e[n],d[l]),f(s,e[a],e[n]),n--,l++;else if(w===void 0&&(w=C(i,l,h),k=C(c,a,n)),w.has(c[a]))if(w.has(c[n])){const u=k.get(i[l]),y=u!==void 0?e[u]:null;if(y===null){const S=f(s,e[a]);g(S,d[l]),p[l]=S}else p[l]=g(y,d[l]),f(s,e[a],y),e[u]=null;l++}else x(e[n]),n--;else x(e[a]),a++;for(;l<=h;){const u=f(s,p[h+1]);g(u,d[l]),p[l++]=u}for(;a<=n;){const u=e[a++];u!==null&&x(u)}return this.ut=i,N(s,p),R}});class B extends m{static get properties(){return{item:{type:Object},columns:{type:Array},rowIndex:{type:Number}}}constructor(){super(),this.item={},this.columns=[],this.rowIndex=-1}render(){return b`
            ${P(this.columns,t=>t.key,t=>b`
                <td role="cell">
                    ${t.render?t.render(this.item,this.rowIndex):this.item[t.key]}
                </td>
            `)}
        `}static styles=[v`
            :host {
                display: table-row;
            }

            td {
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
            }
        `]}customElements.get("pi-table-row")||customElements.define("pi-table-row",B);class K extends m{static get properties(){return{sortDirection:{type:String}}}constructor(){super(),this.sortDirection=""}render(){return b`
            ${this.sortDirection==="asc"?"▲":this.sortDirection==="desc"?"▼":"↕"}
        `}static styles=[v`
            :host {
                margin: var(--pi-table-sort-icon-margin, 0 0 0 0.5em);
                font-size: var(--pi-table-sort-icon-font-size, 0.8em);
                color: var(--pi-table-sort-icon-color, #666);
            }

            :host([data-active="true"]) {
                color: var(--pi-table-sort-icon-active-color, #000);
            }
        `]}customElements.get("pi-table-sort-icon")||customElements.define("pi-table-sort-icon",K);class z extends m{static get properties(){return{sortable:{type:Boolean},sortDirection:{type:String},key:{type:String},label:{type:String}}}constructor(){super(),this.sortable=!1,this.sortDirection="",this.key="",this.label=""}connectedCallback(){super.connectedCallback(),this.addEventListener("updateSorter",t=>this.handleUpdateSorter(t.detail))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("updateSorter",t=>this.handleUpdateSorter(t.detail))}render(){const t={isSortable:this.sortable};return b`
            <div 
            class="table_th ${$(t)}"
            @click=${this.handleSortClick}
            >
                ${this.label}
                ${this.sortable?b`
                    <pi-table-sort-icon
                    .sortDirection=${this.sortDirection}
                    ></pi-table-sort-icon>
                `:null}
            </div>
            
        `}handleUpdateSorter(t){t.sortKey!=this.key?this.sortDirection="":this.sortDirection=t.sortDirection}handleSortClick(t){if(this.sortable==!0){const o=this.sortDirection,r=o=="asc"?"desc":"asc",e=new CustomEvent("sortRequested",{detail:{key:this.key,label:this.label,currentSortDirection:o,newSortDirection:r},bubbles:!0,composed:!0});this.dispatchEvent(e),this.sortDirection=r}}static styles=[v`
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
        `]}customElements.get("pi-table-column")||customElements.define("pi-table-column",z);function L(s,t,o){return[...s].sort((e,d)=>{const i=e[t],c=d[t],p=typeof i=="string"&&typeof c=="string"?i.localeCompare(c,void 0,{numeric:!0}):Number(i)-Number(c);return o==="asc"?p:-p})}class O extends m{static get properties(){return{rows:{type:Array},sortedRows:{type:Array},activeRows:{type:Array},columns:{type:Array},striped:{type:Boolean},compact:{type:Boolean},gridlines:{type:Boolean},defaultSortKey:{type:String},defaultSortDirection:{type:String},paginate:{type:Boolean},rowsPerPage:{type:Number|String}}}connectedCallback(){super.connectedCallback(),this.initTable(),this.addEventListener("sortRequested",t=>this.handleSortRequest(t.detail.key,t.detail.newSortDirection))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sortRequested",t=>this.handleSortRequest(t.detail.key,t.detail.newSortDirection))}firstUpdated(){this.handleDefaultSort()}constructor(){super(),this.rows=[],this.sortedRows=[],this.activeRows=[],this.columns=void 0,this.striped=!1,this.compact=!1,this.gridlines=!1,this.defaultSortKey=null,this.defaultSortDirection=null,this.paginate=!1,this.rowsPerPage=5}initTable(){this.activeRows=[...this.rows],this.sortedRows=[...this.rows]}resolveColumns(){return this.columns&&this.columns.length>0?this.columns:this.rows&&this.rows.length>0?Object.keys(this.rows[0]).map(t=>({key:t,header:t.charAt(0).toUpperCase()+t.slice(1).replace(/([A-Z])/g," $1")})):[]}handleSortRequest(t,o){this.sortedRows=L(this.rows,t,o),this.updateColumnSorters(t,o),this.paginate||(this.activeRows=[...this.sortedRows])}handleDefaultSort(){this.defaultSortKey!=null&&this.defaultSortDirection!=null&&this.handleSortRequest(this.defaultSortKey,this.defaultSortDirection)}updateColumnSorters(t,o){this.shadowRoot.querySelectorAll("pi-table-column").forEach(e=>{e.dispatchEvent(new CustomEvent("updateSorter",{detail:{sortKey:t,sortDirection:o},bubbles:!0,composed:!0}))})}handleUpdatedPageRows(t){this.activeRows=[...t]}render(){const t=this.resolveColumns(),o={striped:this.striped,gridlines:this.gridlines};return!this.rows||this.rows.length===0?b`<div class="empty-table-message">No data to display.</div>`:b`
            <table role="table" aria-label="Customizable Data Table">
                <thead role="rowgroup">
                    <tr role="row">
                        ${P(t,r=>r.key,r=>b`
                            <pi-table-column
                            ?sortable=${r.sortable&&r.sortKey}
                            .label=${r.header}
                            .key=${r.key}
                            .sortKey=${r.sortKey}
                            >${r.header}</pi-table-column>
                        `)}
                    </tr>
                </thead>
                <tbody role="rowgroup">
                    ${P(this.activeRows,(r,e)=>r.id||e,(r,e)=>b`
                        <pi-table-row
                        class=${$(o)}
                        .item=${r}
                        .columns=${t}
                        .rowIndex=${e}
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

            ${this.paginate?b`
                <pi-table-paginator
                .rows=${this.sortedRows}
                .rowsPerPage=${this.rowsPerPage}
                @updatedPageRows=${r=>this.handleUpdatedPageRows(r.detail.rows)}
                ></pi-table-paginator>
            `:null}
        `}static styles=[T,v`
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
        `]}customElements.get("pi-table")||customElements.define("pi-table",O);
