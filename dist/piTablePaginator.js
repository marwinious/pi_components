import{LitElement as a,html as i,css as s}from"lit";import{register as r}from"./src/registerWebComp.js";import{chunkArray as o}from"./src/lib/utility/arrays.js";import{PiPaginator as n}from"./piPaginator.js";r("pi-paginator",n);class w extends a{static get properties(){return{rows:{type:Array},rowsPerPage:{type:[Number,String]},activeRows:{type:Array,attribute:!1},pages:{type:Array,attribute:!1},activePageIndex:{type:Number,attribute:!1}}}constructor(){super(),this.rows=[],this.rowsPerPage=-1,this.activeRows=[],this.pages=[],this.activePageIndex=0}willUpdate(t){t.has("rows")&&this.initPagination()}render(){return i`
            <pi-paginator
            .rows=${this.rowsPerPage}
            .totalRecords=${this.rows.length}
            @navClick=${t=>this.handlePagerNavClick(t.detail)}
            ></pi-paginator>
        `}initPagination(){if(this.rowsPerPage>0){const t=o(this.rows,this.rowsPerPage);this.pages=t,this.handlePaginationChange()}}handlePaginationChange(){this.emitPageRows(this.pages[this.activePageIndex])}emitPageRows(t){const e=new CustomEvent("updatedPageRows",{detail:{rows:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}handlePagerNavClick(t){Number(t.navIndex*this.rowsPerPage)+Number(this.rowsPerPage),this.activePageIndex=t.navIndex,this.handlePaginationChange()}static styles=[s`
            :host {
                display: block;
                width: 100%;
            }
        `]}export{w as PiTablePaginator};
//# sourceMappingURL=piTablePaginator.js.map
