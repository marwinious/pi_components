import{r as n,x as i,i as l}from"./lit-element-CIbSzfXw.js";import{o as p}from"./if-defined-jbakrIYG.js";import"./iconUserRoundedLight-D36zYM6r.js";import{d as $}from"./defaultCss-CkMoNE8s.js";import{e as w}from"./class-map-CB0bDZon.js";import"./paginator-BeAsC3Zz.js";import"./directive-CF8sV3Lr.js";function D(r,e,t){return[...r].sort((a,s)=>{const c=a[e],d=s[e],v=typeof c=="string"&&typeof d=="string"?c.localeCompare(d,void 0,{numeric:!0}):Number(c)-Number(d);return t==="asc"?v:-v})}class k extends n{static get properties(){return{}}constructor(){super()}render(){return i`
            <slot></slot>
        `}static styles=[l`
            :host {
                display: table-row;
            }
        `]}customElements.define("pi-table-tr",k);class S extends n{static get properties(){return{sortDirection:{type:String}}}constructor(){super(),this.sortDirection=""}render(){return i`
            ${this.sortDirection==="asc"?"▲":this.sortDirection==="desc"?"▼":"↕"}
        `}static styles=[l`
            :host {
                margin: var(--pi-table-sort-icon-margin, 0 0 0 0.5em);
                font-size: var(--pi-table-sort-icon-font-size, 0.8em);
                color: var(--pi-table-sort-icon-color, #666);
            }

            :host([data-active="true"]) {
                color: var(--pi-table-sort-icon-active-color, #000);
            }
        `]}customElements.define("pi-table-sort-icon",S);class x extends n{static get properties(){return{sortable:{type:Boolean},sortDirection:{type:String}}}constructor(){super(),this.sortable=!1,this.sortDirection=""}render(){const e={isSortable:this.sortable};return i`
            <div 
            class="table_th ${w(e)}"
            @click=${this.handleSortClick}
            >
                <slot></slot>
                ${this.sortable?i`
                    <pi-table-sort-icon
                    .sortDirection=${this.sortDirection}
                    ></pi-table-sort-icon>
                `:null}
            </div>
            
        `}handleSortClick(e){const t=new CustomEvent("tableSortIconClicked",{detail:{currentSortDirection:this.sortDirection},bubbles:!0,composed:!0});this.dispatchEvent(t)}static styles=[l`
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
        `]}customElements.define("pi-table-th",x);class C extends n{static get properties(){return{columns:{type:Array},sortable:{type:Boolean},gridlines:{type:Boolean},sortKey:{type:String},sortDirection:{type:String}}}constructor(){super(),this.columns=[],this.sortable=!1,this.gridlines=!1,this.sortKey="",this.sortDirection=""}render(){const e={gridlines:this.gridlines};return i`
            <pi-table-tr
            class=${w(e)}
            >
                <slot>
                    ${this.columns.map(t=>i`
                        <pi-table-th
                        ?sortable=${this.sortable&&t.sortKey}
                        >${t.label}</pi-table-th>
                    `)}
                </slot>
            </pi-table-tr>
        `}static styles=[l`
            :host {
                display: table-row-group;
            }

            .gridlines {
                --pi-table-th-border-right: var(--pi-table-th-border-bottom, 1px solid #ddd);
                --pi-table-th-border-left: var(--pi-table-th-border-bottom, 1px solid #ddd);
                --pi-table-th-border-top: var(--pi-table-th-border-bottom, 1px solid #ddd);
            }
        `]}customElements.define("pi-table-thead",C);class K extends n{static get properties(){return{colspan:{type:Number}}}constructor(){super(),this.colspan=1}render(){return i`
            <slot></slot>
        `}static styles=[l`
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
        `]}customElements.define("pi-table-td",K);class R extends n{static get properties(){return{columns:{type:Array},rows:{type:Array},striped:{type:Boolean},sortable:{type:Boolean},gridlines:{type:Boolean}}}constructor(){super(),this.columns=[],this.rows=[],this.striped=!1,this.sortable=!1,this.gridlines=!1}render(){const e={striped:this.striped,gridlines:this.gridlines};return i`
            ${this.rows.map(t=>i`
                <pi-table-tr
                class=${w(e)}
                >
                    ${this.columns.map(o=>i`
                        <pi-table-td>${t[o.key]}</pi-table-td>
                    `)}
                </pi-table-tr>
            `)}
        `}static styles=[l`
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
        `]}customElements.define("pi-table-tbody",R);class E extends n{static get properties(){return{}}constructor(){super()}render(){return i`
            <slot></slot>
        `}static styles=[l`
            :host {
                display: table-footer-group;
                
            }

            /* .table_tfoot {
                display: block;
                padding: 0.5rem 0 0.5rem 0;
            } */
        `]}customElements.define("pi-table-tfoot",E);class A extends n{static get properties(){return{columns:{type:Array},rows:{type:Array}}}constructor(){super(),this.columns=[],this.rows=[]}render(){return i`
            <slot></slot>
        `}static styles=[l`
            :host {
                display: table;
                overflow-x: auto;
                width: 100%;
                border-collapse: collapse;
                text-align: left;
                white-space: nowrap;
            }
        `]}customElements.define("pi-base-table",A);function I(r,e){return r.reduce((t,o,a)=>(a%e===0&&t.push(r.slice(a,a+e)),t),[])}class T extends n{static get properties(){return{rows:{type:Array},rowsPerPage:{type:[Number,String]},activeRows:{type:Array,attribute:!1},pages:{type:Array,attribute:!1},activePageIndex:{type:Number,attribute:!1}}}constructor(){super(),this.rows=[],this.rowsPerPage=-1,this.activeRows=[],this.pages=[],this.activePageIndex=0}willUpdate(e){e.has("rows")&&this.initPagination()}render(){return i`
            <pi-paginator
            .rows=${this.rowsPerPage}
            .totalRecords=${this.rows.length}
            @navClick=${e=>this.handlePagerNavClick(e.detail)}
            ></pi-paginator>
        `}initPagination(){if(this.rowsPerPage>0){const e=I(this.rows,this.rowsPerPage);this.pages=e,this.handlePaginationChange()}}handlePaginationChange(){this.emitPageRows(this.pages[this.activePageIndex])}emitPageRows(e){const t=new CustomEvent("updatedPageRows",{detail:{rows:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}handlePagerNavClick(e){Number(e.navIndex*this.rowsPerPage)+Number(this.rowsPerPage),this.activePageIndex=e.navIndex,this.handlePaginationChange()}static styles=[l`
            :host {
                display: block;
                width: 100%;
            }
        `]}customElements.define("pi-table-paginator",T);class N extends n{static get properties(){return{columns:{type:Array,attribute:!1},rows:{type:Array},striped:{type:Boolean},gridlines:{type:Boolean},sortKey:{type:String},sortDirection:{type:String},activeRows:{type:Array,attribute:!1},slottedColumns:{type:Array,attribute:!1},paginate:{type:Boolean},rowsPerPage:{type:[Number,String]},sortedRows:{type:Array,attribute:!1}}}constructor(){super(),this.columns=[],this.rows=[],this.striped=!1,this.gridlines=!1,this.sortKey="",this.sortDirection="",this.activeRows=[],this.slottedColumns=[],this.paginate=!1,this.rowsPerPage=-1,this.sortedRows=[]}connectedCallback(){super.connectedCallback(),this.initTable(),this.addEventListener("sortRequested",e=>this.handleSortRequest(e.detail.key,e.detail.newSortDirection))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sortRequested")}firstUpdated(){this.captureColumnData(),this.handleDefaultSort()}willUpdate(e){e.has("rows")&&this.captureColumnData()}render(){return i`
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

            ${this.paginate?i`
                <pi-table-paginator
                .rows=${this.sortedRows}
                .rowsPerPage=${this.rowsPerPage}
                @updatedPageRows=${e=>this.handleUpdatedPageRows(e.detail.rows)}
                ></pi-table-paginator>
            `:null}
        `}handleUpdatedPageRows(e){this.activeRows=[...e]}handleSortRequest(e,t){this.sortedRows=D(this.rows,e,t),this.updateColumnSorters(e,t),this.paginate||(this.activeRows=[...this.sortedRows])}updateColumnSorters(e,t){this.slottedColumns.forEach(o=>{o.dispatchEvent(new CustomEvent("updateSorter",{detail:{sortKey:e,sortDirection:t},bubbles:!0,composed:!0}))})}handleDefaultSort(){this.sortKey!=""&&this.sortDirection!=""&&this.handleSortRequest(this.sortKey,this.sortDirection)}captureColumnData(){const e=[],t=[],o=this.shadowRoot.querySelector("slot");if(o==null)return!1;o.assignedElements({flatten:!0}).forEach(s=>{if(s.nodeName=="PI-TABLE-COLUMN"){const c={};t.push(s),Array.from(s.attributes).forEach(d=>{c[d.name]=d.value}),e.push(c)}}),this.columns=e,t.length>0&&(this.slottedColumns=t)}initTable(){this.activeRows=[...this.rows],this.sortedRows=[...this.rows]}static styles=[$,l`
            :host {
                display: table;
                overflow-x: var(--pi-table-overflow-x, auto);
                overflow-y: var(--pi-table-overflow-y, visible);
                width: var(--pi-table-width, 100%);
                border-collapse: var(--pi-table-border-collapse, collapse);
                text-align: var(--pi-table-text-align, left);
                white-space: var(--pi-table-white-space, nowrap);
            }
        `]}customElements.define("pi-table",N);class B extends n{static get properties(){return{sortable:{type:Boolean},sortDirection:{type:String},key:{type:String},label:{type:String}}}constructor(){super(),this.sortable=!1,this.sortDirection="",this.key="",this.label=""}connectedCallback(){super.connectedCallback(),this.addEventListener("updateSorter",e=>this.handleUpdateSorter(e.detail))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("updateSorter")}render(){const e={isSortable:this.sortable};return i`
            <div 
            class="table_th ${w(e)}"
            @click=${this.handleSortClick}
            >
                ${this.label}
                ${this.sortable?i`
                    <pi-table-sort-icon
                    .sortDirection=${this.sortDirection}
                    ></pi-table-sort-icon>
                `:null}
            </div>
            
        `}handleUpdateSorter(e){e.sortKey!=this.key?this.sortDirection="":this.sortDirection=e.sortDirection}handleSortClick(e){if(this.sortable==!0){const t=this.sortDirection,o=t=="asc"?"desc":"asc",a=new CustomEvent("sortRequested",{detail:{key:this.key,label:this.label,currentSortDirection:t,newSortDirection:o},bubbles:!0,composed:!0});this.dispatchEvent(a),this.sortDirection=o}}static styles=[l`
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
        `]}customElements.define("pi-table-column",B);const P=[{name:"Alice",age:30,country:"USA",income:"$100,000",rawIncome:"100000"},{name:"Bob",age:25,country:"UK",income:"$50,000",rawIncome:"50000"},{name:"Charlie",age:35,country:"Canada",income:"$200,000",rawIncome:"200000"},{name:"David",age:32,country:"Spain",income:"$70,000",rawIncome:"70000"},{name:"Edward",age:27,country:"New Zealand",income:"$150,000",rawIncome:"150000"}],j={title:"Components/Tables",component:"pi-table",tags:["autodocs"],argTypes:{striped:{control:"boolean",name:"striped",description:"Stripe table rows",table:{type:{summary:"string"},defaultValue:{summary:""}}},gridlines:{control:"boolean",name:"gridlines",description:"Show gridlines",table:{type:{summary:"string"},defaultValue:{summary:""}}},paginate:{control:"boolean",name:"paginate",description:"Enable pagination",table:{type:{summary:"string"},defaultValue:{summary:""}}},rowsPerPage:{control:"number",name:"rowsPerPage",description:"Number of rows per paginated page",table:{type:{summary:"string"},defaultValue:{summary:""}}},sortKey:{control:"select",name:"sortKey",description:"Pre-sorted table sort key",options:["","name","age","country","income","rawIncome"],table:{type:{summary:"string"},defaultValue:{summary:""}}},sortDirection:{control:"select",name:"sortDirection",description:"Pre-sorted table sort direction",options:["asc","desc"],table:{type:{summary:"string"},defaultValue:{summary:""}}}},args:{striped:!1,gridlines:!1,paginate:!1,rowsPerPage:3,sortKey:"",sortDirection:""}},f=({striped:r,gridlines:e,paginate:t,rowsPerPage:o,sortKey:a,sortDirection:s})=>i`
    <pi-table 
    .rows=${P}
    .striped=${r}
    .gridlines=${e}
    .paginate=${t}
    rowsPerPage=${p(t==!0?o:void 0)}
    sortKey=${p(a!=""?a:void 0)}
    sortDirection=${p(s!=""?s:void 0)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
`,z=({striped:r,gridlines:e,paginate:t,rowsPerPage:o,sortKey:a,sortDirection:s})=>i`
    <pi-table 
    .rows=${P}
    .striped=${r}
    .gridlines=${e}
    .paginate=${t}
    rowsPerPage=${p(t==!0?o:void 0)}
    sortKey=${p(a!=""?a:void 0)}
    sortDirection=${p(s!=""?s:void 0)}
    >
        <pi-table-column key="name" label="Name" sortable sortKey="name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
`,b=f.bind();b.args={};const u=f.bind();u.args={striped:!0};const m=f.bind();m.args={gridlines:!0};const g=z.bind();g.args={};const h=f.bind();h.args={sortKey:"age",sortDirection:"asc"};const y=f.bind();y.args={paginate:!0,rowsPerPage:3};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`({
  striped,
  gridlines,
  paginate,
  rowsPerPage,
  sortKey,
  sortDirection
}) => html\`
    <pi-table 
    .rows=\${sampleRows}
    .striped=\${striped}
    .gridlines=\${gridlines}
    .paginate=\${paginate}
    rowsPerPage=\${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=\${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=\${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
\``,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  striped,
  gridlines,
  paginate,
  rowsPerPage,
  sortKey,
  sortDirection
}) => html\`
    <pi-table 
    .rows=\${sampleRows}
    .striped=\${striped}
    .gridlines=\${gridlines}
    .paginate=\${paginate}
    rowsPerPage=\${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=\${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=\${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
\``,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  striped,
  gridlines,
  paginate,
  rowsPerPage,
  sortKey,
  sortDirection
}) => html\`
    <pi-table 
    .rows=\${sampleRows}
    .striped=\${striped}
    .gridlines=\${gridlines}
    .paginate=\${paginate}
    rowsPerPage=\${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=\${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=\${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
\``,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  striped,
  gridlines,
  paginate,
  rowsPerPage,
  sortKey,
  sortDirection
}) => html\`
    <pi-table 
    .rows=\${sampleRows}
    .striped=\${striped}
    .gridlines=\${gridlines}
    .paginate=\${paginate}
    rowsPerPage=\${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=\${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=\${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name" sortable sortKey="name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
\``,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
  striped,
  gridlines,
  paginate,
  rowsPerPage,
  sortKey,
  sortDirection
}) => html\`
    <pi-table 
    .rows=\${sampleRows}
    .striped=\${striped}
    .gridlines=\${gridlines}
    .paginate=\${paginate}
    rowsPerPage=\${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=\${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=\${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
\``,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`({
  striped,
  gridlines,
  paginate,
  rowsPerPage,
  sortKey,
  sortDirection
}) => html\`
    <pi-table 
    .rows=\${sampleRows}
    .striped=\${striped}
    .gridlines=\${gridlines}
    .paginate=\${paginate}
    rowsPerPage=\${ifDefined(paginate == true ? rowsPerPage : undefined)}
    sortKey=\${ifDefined(sortKey != '' ? sortKey : undefined)}
    sortDirection=\${ifDefined(sortDirection != '' ? sortDirection : undefined)}
    >
        <pi-table-column key="name" label="Name"></pi-table-column>
        <pi-table-column key="age" label="Age"></pi-table-column>
        <pi-table-column key="country" label="Country"></pi-table-column>
        <pi-table-column key="income" label="Income"></pi-table-column>
    </pi-table>
\``,...y.parameters?.docs?.source}}};const M=["Default","Striped","Gridlines","SelectiveSorting","PreSorted","Paginated"];export{b as Default,m as Gridlines,y as Paginated,h as PreSorted,g as SelectiveSorting,u as Striped,M as __namedExportsOrder,j as default};
