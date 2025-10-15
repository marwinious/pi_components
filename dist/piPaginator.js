import{LitElement as r,html as a,css as s}from"lit";import"lit/directives/class-map.js";import n from"./css/defaultCss.js";import"./piPaginatorNavItem.js";class h extends r{static get properties(){return{rows:{type:Number},totalRecords:{type:Number},totalPages:{type:Number},rowsPerPageOptions:{type:Array},currentPage:{type:Number,attribute:!1},pagerNavNumberStart:{type:Number,attribute:!1},pagerNavNumberStop:{type:Number,attribute:!1},pagerNavNumberCount:{type:Number,attribute:!1},useStartEndLinks:{type:Boolean},useNextPrevLinks:{type:Boolean},useNumericLinks:{type:Boolean},template:{type:Object,attribute:!1}}}constructor(){super(),this.rows=0,this.totalRecords=0,this.totalPages=0,this.rowsPerPageOptions=[],this.currentPage=0,this.pagerNavNumberStart=0,this.pagerNavNumberStop=3,this.pagerNavNumberCount=3,this.useStartEndLinks=!0,this.useNextPrevLinks=!0,this.useNumericLinks=!0,this.template={}}connectedCallback(){super.connectedCallback(),this.updatePagerNav(),this.generateTemplate()}updatePagerNav(){const t=this.currentPage>0?this.currentPage-1:0,e=t+this.pagerNavNumberCount,i=Math.ceil(this.totalRecords/this.rows);this.pagerNavNumberStart=t,this.pagerNavNumberStop=e,this.totalPages=i}handlePageNavNumberClick(t){t<0&&(t=0),t>this.pageCount&&(t=this.pageCount),this.currentPage=t,this.updatePagerNav(),this.generateTemplate();const e=new CustomEvent("navClick",{detail:{navIndex:t,pageNumber:t+1},bubbles:!0,composed:!0});this.dispatchEvent(e)}generateTemplate(){const t=[];if(this.useStartEndLinks&&t.push(a`
                <pi-paginator-nav-item 
                @click="${()=>this.handlePageNavNumberClick(0)}"
                ?disabled=${this.currentPage==0}
                value="&lt;&lt;"
                ></pi-paginator-nav-item>
            `),this.useNextPrevLinks&&t.push(a`
                <pi-paginator-nav-item 
                @click="${()=>this.handlePageNavNumberClick(this.currentPage-1)}"
                ?disabled=${this.currentPage-1<0}
                value="&lt;"
                ></pi-paginator-nav-item>
            `),this.useNumericLinks)for(let e=this.pagerNavNumberStart,i=this.pagerNavNumberStop;e<i;e++)e<this.totalPages&&t.push(a`
                        <pi-paginator-nav-item 
                        @click="${()=>this.handlePageNavNumberClick(e)}"
                        ?active=${e===this.currentPage}
                        value=${e+1}
                        ></pi-paginator-nav-item>
                    `);this.useNextPrevLinks&&t.push(a`
                <pi-paginator-nav-item 
                @click="${()=>this.handlePageNavNumberClick(this.currentPage+1)}"
                ?disabled=${this.currentPage+1>=this.totalPages}
                value="&gt;"
                ></pi-paginator-nav-item>
            `),this.useStartEndLinks&&t.push(a`
                <pi-paginator-nav-item 
                @click="${()=>this.handlePageNavNumberClick(this.totalPages-1)}"
                ?disabled=${this.currentPage+1>=this.totalPages}
                value="&gt;&gt;"
                ></pi-paginator-nav-item>
            `),this.template=t}render(){return a`
            ${this.template}
        `}static styles=[n,s`
            :host {
                display: flex;
                width: 100%;
                justify-content: center;
                margin: var(--pi-paginator-margin, 1rem 0 0 0);
                gap: var(--pi-paginator-gap, 10px);
            }
        `]}export{h as PiPaginator};
//# sourceMappingURL=piPaginator.js.map
