import { LitElement, css, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js';
import defaultCss from '../../../css/defaultCss';
import { PiPaginatorNavItem } from './paginatorNavItem';

export class PiPaginator extends LitElement {

    static get properties() {
        return {
            rows: { type: Number },
            totalRecords: { type: Number },
            totalPages: { type: Number },
            rowsPerPageOptions: { type: Array },
            currentPage: { type: Number, attribute: false },
            pagerNavNumberStart: { type: Number, attribute: false },
            pagerNavNumberStop: { type: Number, attribute: false },
            pagerNavNumberCount: { type: Number, attribute: false },
            useStartEndLinks: { type: Boolean },
            useNextPrevLinks: { type: Boolean },
            useNumericLinks: { type: Boolean },
            template: { type: Object, attribute: false }
        }
    }

    /*
    TODO: Refactor template generation
        - Seems like re-generating the entire template on nav click isn't efficient
        - Seems like having one large set of templates in generateTemplate isn't ideal
    TODO: Add nav item type to paginatorNavItem?
        - We might want to support custom styling of numbers vs. other nav items
        - This isn't supported in the current component
    TODO: Add specific button that was clicked to the emit
        - It currently shows pageNumber and index clicked
        - Should also show "button: 1" or "button: FirstItem" or "button: NextPage", etc.
    */

    constructor() {
        super()
        this.rows = 0;
        this.totalRecords = 0;
        this.totalPages = 0;
        this.rowsPerPageOptions = [];
        this.currentPage = 0;
        this.pagerNavNumberStart = 0;
        this.pagerNavNumberStop = 3;
        this.pagerNavNumberCount = 3;
        this.useStartEndLinks = true;
        this.useNextPrevLinks = true;
        this.useNumericLinks = true;
        this.template = {};
    }

    connectedCallback() {
        super.connectedCallback();
        this.updatePagerNav();
        this.generateTemplate();
    }

    updatePagerNav() {
        const newNavStart = this.currentPage > 0 ? this.currentPage-1 : 0;
        const newNavStop = newNavStart + this.pagerNavNumberCount
        const totalPages = Math.ceil(this.totalRecords / this.rows);

        this.pagerNavNumberStart = newNavStart
        this.pagerNavNumberStop = newNavStop
        this.totalPages = totalPages;
    }

    handlePageNavNumberClick(navNumber) {
        if(navNumber < 0) { navNumber = 0 }
        if(navNumber > this.pageCount) { navNumber = this.pageCount }
        this.currentPage = navNumber

        this.updatePagerNav()
        this.generateTemplate();

        // Emit event with selected tab
        const event = new CustomEvent('navClick', {
            detail: {
                navIndex: navNumber,
                pageNumber: navNumber+1
            },
            bubbles: true,
            composed: true
        })

        this.dispatchEvent(event);
    }

    generateTemplate() {
        const template = [];

        // Add "First Page" link if enabled
        if(this.useStartEndLinks) {
            template.push(html`
                <pi-paginator-nav-item 
                @click="${() => this.handlePageNavNumberClick(0)}"
                ?disabled=${this.currentPage == 0}
                value="&lt;&lt;"
                ></pi-paginator-nav-item>
            `)
        }

        // Add "Prev Page" link if enabled
        if(this.useNextPrevLinks) {
            template.push(html`
                <pi-paginator-nav-item 
                @click="${() => this.handlePageNavNumberClick(this.currentPage-1)}"
                ?disabled=${this.currentPage-1 < 0}
                value="&lt;"
                ></pi-paginator-nav-item>
            `)
        }

        // Add "Numeric" links if enabled
        if(this.useNumericLinks) {
            // Loop through pages from current start to current stop
            for(let i=this.pagerNavNumberStart, l=this.pagerNavNumberStop;i<l;i++) { 
                // If i is less than the number of numeric links we want to show at once
                if(i < this.totalPages) {
                    template.push(html`
                        <pi-paginator-nav-item 
                        @click="${() => this.handlePageNavNumberClick(i)}"
                        ?active=${i === this.currentPage}
                        value=${i+1}
                        ></pi-paginator-nav-item>
                    `)
                }
            }
        }

        // Add "Next Page" link if enabled
        if(this.useNextPrevLinks) {
            template.push(html`
                <pi-paginator-nav-item 
                @click="${() => this.handlePageNavNumberClick(this.currentPage+1)}"
                ?disabled=${this.currentPage+1 >= this.totalPages}
                value="&gt;"
                ></pi-paginator-nav-item>
            `)
        }

        // Add "Last Page" link if enabled
        if(this.useStartEndLinks) {
            template.push(html`
                <pi-paginator-nav-item 
                @click="${() => this.handlePageNavNumberClick(this.totalPages-1)}"
                ?disabled=${this.currentPage+1 >= this.totalPages}
                value="&gt;&gt;"
                ></pi-paginator-nav-item>
            `)
        }

        // Update template
        this.template = template;
    }

    render() {
        return html`
            ${this.template}
        `;
    }

    static styles = [
        defaultCss,
        css`
            :host {
                display: flex;
                width: 100%;
                justify-content: center;
                margin: var(--pi-paginator-margin, 1rem 0 0 0);
                gap: var(--pi-paginator-gap, 10px);
            }
        `
    ]
    
}

// if(!customElements.get('pi-paginator')) { customElements.define('pi-paginator', PiPaginator); }