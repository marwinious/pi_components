import{LitElement as s,html as r,css as n}from"lit";import"./piPaginator.js";import"lit/directives/class-map.js";import"../chunks/defaultCss.js";import"./piPaginatorNavItem.js";function o(i,t){const e=[];for(let a=0;a<i.length;a+=Number(t))e.push(i.slice(a,a+Number(t)));return e}class c extends s{static get properties(){return{rows:{type:Array},rowsPerPage:{type:[Number,String]},activeRows:{type:Array,attribute:!1},pages:{type:Array,attribute:!1},activePageIndex:{type:Number,attribute:!1}}}constructor(){super(),this.rows=[],this.rowsPerPage=-1,this.activeRows=[],this.pages=[],this.activePageIndex=0}willUpdate(t){t.has("rows")&&this.initPagination()}render(){return r`
            <pi-paginator
            .rows=${this.rowsPerPage}
            .totalRecords=${this.rows.length}
            @navClick=${t=>this.handlePagerNavClick(t.detail)}
            ></pi-paginator>
        `}initPagination(){if(this.rowsPerPage>0){const t=o(this.rows,this.rowsPerPage);this.pages=t,this.handlePaginationChange()}}handlePaginationChange(){this.emitPageRows(this.pages[this.activePageIndex])}emitPageRows(t){const e=new CustomEvent("updatedPageRows",{detail:{rows:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}handlePagerNavClick(t){Number(t.navIndex*this.rowsPerPage)+Number(this.rowsPerPage),this.activePageIndex=t.navIndex,this.handlePaginationChange()}static styles=[n`
            :host {
                display: block;
                width: 100%;
            }
        `]}
//# sourceMappingURL=piTablePaginator.js.map
