import { LitElement, css, html } from 'lit'

export class PiPaginator extends LitElement {

    static get properties() {
        return {
            rows: { type: Number },
            totalRecords: { type: Number },
            totalPages: { type: Number },
            rowsPerPage: { type: Number },
            currentPage: { type: Number },
            pagerNavNumberStart: { type: Number },
            pagerNavNumberStop: { type: Number },
        }
    }

    constructor() {
        super()
        this.rows = -1;
        this.totalRecords = -1;
        this.totalPages = -1;
        this.rowsPerPage = -1;
        this.currentPage = -1;
        this.pagerNavNumberStart = -1;
        this.pagerNavNumberStop = -1;
    }

    render() {
        const pager = [];

        // Create "back to start" button
        pager.push(html`
            <div 
            class="pageNavButton toStart" 
            @click="${() => this.handlePageNavNumberClick(0)}"
            ?disabled=${this.currentPage == 0}
            >&lt;&lt;</div>
        `)

        // Create "previous page" button
        pager.push(html`
            <div 
            class="pageNavButton prevPage" 
            @click="${() => this.handlePageNavNumberClick(this.currentPage-1)}"
            ?disabled=${this.currentPage-1 < 0}
            >&lt;</div>
        `)

        // Create "page number" buttons
        for(let i=this.pagerNavNumberStart, l=this.pagerNavNumberStop;i<l;i++) { 
            if(i < this.pageCount) {
                pager.push(html`<div class=${classMap({
                    pageNavNumber: true,
                    active: i === this.currentPage
                })} @click="${() => this.handlePageNavNumberClick(i)}">${i+1}</div>`)
            }
        } 

        // Create "next page" button
        pager.push(html`
            <div 
            class="pageNavButton nextPage" 
            @click="${() => this.handlePageNavNumberClick(this.currentPage+1)}"
            ?disabled=${this.currentPage+1 >= this.pageCount}
            >&gt;</div>
        `)

        // Create "jump to last page" button
        pager.push(html`
            <div 
            class="pageNavButton toEnd" 
            @click="${() => this.handlePageNavNumberClick(this.pageCount-1)}"
            ?disabled=${this.currentPage+1 >= this.pageCount}
            >&gt;&gt;</div>
        `)

        return html`
            
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-paginator', PiPaginator);
