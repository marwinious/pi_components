import{LitElement as a,html as s,css as i}from"lit";import{chunkArray as r}from"./lib/utility/arrays.js";import"./piPaginator.js";class P extends a{static get properties(){return{rows:{type:Array},rowsPerPage:{type:[Number,String]},activeRows:{type:Array,attribute:!1},pages:{type:Array,attribute:!1},activePageIndex:{type:Number,attribute:!1}}}constructor(){super(),this.rows=[],this.rowsPerPage=-1,this.activeRows=[],this.pages=[],this.activePageIndex=0}willUpdate(t){t.has("rows")&&this.initPagination()}render(){return s`
            <pi-paginator
            .rows=${this.rowsPerPage}
            .totalRecords=${this.rows.length}
            @navClick=${t=>this.handlePagerNavClick(t.detail)}
            ></pi-paginator>
        `}initPagination(){if(this.rowsPerPage>0){const t=r(this.rows,this.rowsPerPage);this.pages=t,this.handlePaginationChange()}}handlePaginationChange(){this.emitPageRows(this.pages[this.activePageIndex])}emitPageRows(t){const e=new CustomEvent("updatedPageRows",{detail:{rows:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}handlePagerNavClick(t){Number(t.navIndex*this.rowsPerPage)+Number(this.rowsPerPage),this.activePageIndex=t.navIndex,this.handlePaginationChange()}static styles=[i`
            :host {
                display: block;
                width: 100%;
            }
        `]}export{P as PiTablePaginator};
//# sourceMappingURL=piTablePaginator.js.map
