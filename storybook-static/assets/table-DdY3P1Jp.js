import{i as v,x as b,a as w,T as $}from"./lit-element-Rv6HkL07.js";import{r as m}from"./registerWebComp-xWpx6Xkx.js";import{e as D}from"./class-map-KOhBCLCh.js";import{e as A,i as I,t as N}from"./directive-CJw_OlP2.js";import{p as E,v as g,s as f,M as P,m as T}from"./directive-helpers-CnTqk2HR.js";import{P as q}from"./paginator-CWwSxXN6.js";import{d as U}from"./defaultCss-BUBpELKw.js";function B(i,t){const o=[];for(let r=0;r<i.length;r+=Number(t))o.push(i.slice(r,r+Number(t)));return o}m("pi-paginator",q);class K extends v{static get properties(){return{rows:{type:Array},rowsPerPage:{type:[Number,String]},activeRows:{type:Array,attribute:!1},pages:{type:Array,attribute:!1},activePageIndex:{type:Number,attribute:!1}}}constructor(){super(),this.rows=[],this.rowsPerPage=-1,this.activeRows=[],this.pages=[],this.activePageIndex=0}willUpdate(t){t.has("rows")&&this.initPagination()}render(){return b`
            <pi-paginator
            .rows=${this.rowsPerPage}
            .totalRecords=${this.rows.length}
            @navClick=${t=>this.handlePagerNavClick(t.detail)}
            ></pi-paginator>
        `}initPagination(){if(this.rowsPerPage>0){const t=B(this.rows,this.rowsPerPage);this.pages=t,this.handlePaginationChange()}}handlePaginationChange(){this.emitPageRows(this.pages[this.activePageIndex])}emitPageRows(t){const o=new CustomEvent("updatedPageRows",{detail:{rows:t},bubbles:!0,composed:!0});this.dispatchEvent(o)}handlePagerNavClick(t){Number(t.navIndex*this.rowsPerPage)+Number(this.rowsPerPage),this.activePageIndex=t.navIndex,this.handlePaginationChange()}static styles=[w`
            :host {
                display: block;
                width: 100%;
            }
        `]}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=(i,t,o)=>{const r=new Map;for(let e=t;e<=o;e++)r.set(i[e],e);return r},k=A(class extends I{constructor(i){if(super(i),i.type!==N.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,t,o){let r;o===void 0?o=t:t!==void 0&&(r=t);const e=[],d=[];let s=0;for(const c of i)e[s]=r?r(c,s):s,d[s]=o(c,s),s++;return{values:d,keys:e}}render(i,t,o){return this.dt(i,t,o).values}update(i,[t,o,r]){const e=E(i),{values:d,keys:s}=this.dt(t,o,r);if(!Array.isArray(e))return this.ut=s,d;const c=this.ut??=[],p=[];let y,S,a=0,n=e.length-1,l=0,h=d.length-1;for(;a<=n&&l<=h;)if(e[a]===null)a++;else if(e[n]===null)n--;else if(c[a]===s[l])p[l]=g(e[a],d[l]),a++,l++;else if(c[n]===s[h])p[h]=g(e[n],d[h]),n--,h--;else if(c[a]===s[h])p[h]=g(e[a],d[h]),f(i,p[h+1],e[a]),a++,h--;else if(c[n]===s[l])p[l]=g(e[n],d[l]),f(i,e[a],e[n]),n--,l++;else if(y===void 0&&(y=R(s,l,h),S=R(c,a,n)),y.has(c[a]))if(y.has(c[n])){const u=S.get(s[l]),x=u!==void 0?e[u]:null;if(x===null){const C=f(i,e[a]);g(C,d[l]),p[l]=C}else p[l]=g(x,d[l]),f(i,e[a],x),e[u]=null;l++}else P(e[n]),n--;else P(e[a]),a++;for(;l<=h;){const u=f(i,p[h+1]);g(u,d[l]),p[l++]=u}for(;a<=n;){const u=e[a++];u!==null&&P(u)}return this.ut=s,T(i,p),$}});class z extends v{static get properties(){return{item:{type:Object},columns:{type:Array},rowIndex:{type:Number}}}constructor(){super(),this.item={},this.columns=[],this.rowIndex=-1}render(){return b`
            ${k(this.columns,t=>t.key,t=>b`
                <td role="cell">
                    ${t.render?t.render(this.item,this.rowIndex):this.item[t.key]}
                </td>
            `)}
        `}static styles=[w`
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
        `]}class L extends v{static get properties(){return{sortDirection:{type:String}}}constructor(){super(),this.sortDirection=""}render(){return b`
            ${this.sortDirection==="asc"?"▲":this.sortDirection==="desc"?"▼":"↕"}
        `}static styles=[w`
            :host {
                margin: var(--pi-table-sort-icon-margin, 0 0 0 0.5em);
                font-size: var(--pi-table-sort-icon-font-size, 0.8em);
                color: var(--pi-table-sort-icon-color, #666);
            }

            :host([data-active="true"]) {
                color: var(--pi-table-sort-icon-active-color, #000);
            }
        `]}m("pi-table-sort-icon",L);class O extends v{static get properties(){return{sortable:{type:Boolean},sortDirection:{type:String},key:{type:String},label:{type:String}}}constructor(){super(),this.sortable=!1,this.sortDirection="",this.key="",this.label=""}connectedCallback(){super.connectedCallback(),this.addEventListener("updateSorter",t=>this.handleUpdateSorter(t.detail))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("updateSorter",t=>this.handleUpdateSorter(t.detail))}render(){const t={isSortable:this.sortable};return b`
            <div 
            class="table_th ${D(t)}"
            @click=${this.handleSortClick}
            >
                ${this.label}
                ${this.sortable?b`
                    <pi-table-sort-icon
                    .sortDirection=${this.sortDirection}
                    ></pi-table-sort-icon>
                `:null}
            </div>
            
        `}handleUpdateSorter(t){t.sortKey!=this.key?this.sortDirection="":this.sortDirection=t.sortDirection}handleSortClick(t){if(this.sortable==!0){const o=this.sortDirection,r=o=="asc"?"desc":"asc",e=new CustomEvent("sortRequested",{detail:{key:this.key,label:this.label,currentSortDirection:o,newSortDirection:r},bubbles:!0,composed:!0});this.dispatchEvent(e),this.sortDirection=r}}static styles=[w`
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
        `]}function j(i,t,o){return[...i].sort((e,d)=>{const s=e[t],c=d[t],p=typeof s=="string"&&typeof c=="string"?s.localeCompare(c,void 0,{numeric:!0}):Number(s)-Number(c);return o==="asc"?p:-p})}m("pi-table-row",z);m("pi-table-column",O);m("pi-table-paginator",K);class Q extends v{static get properties(){return{rows:{type:Array},sortedRows:{type:Array},activeRows:{type:Array},columns:{type:Array},striped:{type:Boolean},compact:{type:Boolean},gridlines:{type:Boolean},defaultSortKey:{type:String},defaultSortDirection:{type:String},paginate:{type:Boolean},rowsPerPage:{type:Number|String}}}connectedCallback(){super.connectedCallback(),this.initTable(),this.addEventListener("sortRequested",t=>this.handleSortRequest(t.detail.key,t.detail.newSortDirection))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sortRequested",t=>this.handleSortRequest(t.detail.key,t.detail.newSortDirection))}firstUpdated(){this.handleDefaultSort()}constructor(){super(),this.rows=[],this.sortedRows=[],this.activeRows=[],this.columns=void 0,this.striped=!1,this.compact=!1,this.gridlines=!1,this.defaultSortKey=null,this.defaultSortDirection=null,this.paginate=!1,this.rowsPerPage=5}initTable(){this.activeRows=[...this.rows],this.sortedRows=[...this.rows]}resolveColumns(){return this.columns&&this.columns.length>0?this.columns:this.rows&&this.rows.length>0?Object.keys(this.rows[0]).map(t=>({key:t,header:t.charAt(0).toUpperCase()+t.slice(1).replace(/([A-Z])/g," $1")})):[]}handleSortRequest(t,o){this.sortedRows=j(this.rows,t,o),this.updateColumnSorters(t,o),this.paginate||(this.activeRows=[...this.sortedRows])}handleDefaultSort(){this.defaultSortKey!=null&&this.defaultSortDirection!=null&&this.handleSortRequest(this.defaultSortKey,this.defaultSortDirection)}updateColumnSorters(t,o){this.shadowRoot.querySelectorAll("pi-table-column").forEach(e=>{e.dispatchEvent(new CustomEvent("updateSorter",{detail:{sortKey:t,sortDirection:o},bubbles:!0,composed:!0}))})}handleUpdatedPageRows(t){this.activeRows=[...t]}render(){const t=this.resolveColumns(),o={striped:this.striped,gridlines:this.gridlines};return!this.rows||this.rows.length===0?b`<div class="empty-table-message">No data to display.</div>`:b`
            <table role="table" aria-label="Customizable Data Table">
                <thead role="rowgroup">
                    <tr role="row">
                        ${k(t,r=>r.key,r=>b`
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
                    ${k(this.activeRows,(r,e)=>r.id||e,(r,e)=>b`
                        <pi-table-row
                        class=${D(o)}
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
        `}static styles=[U,w`
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
        `]}export{Q as P};
