import { LitElement, css, html } from 'lit'
import { chunkArray } from '../../../../lib/utility/arrays';
import { PiPaginator } from '../../../paginators/components/paginator';

export class PiTablePaginator extends LitElement {

    static get properties() {
        return {
            rows: { type: Array },
            rowsPerPage: { type: [Number, String] },
            activeRows: { type: Array, attribute: false },
            pages: { type: Array, attribute: false },
            activePageIndex: { type: Number, attribute: false }
        }
    }

    constructor() {
        super()
        this.rows = [];
        this.rowsPerPage = -1;
        this.activeRows = [];
        this.pages = [];
        this.activePageIndex = 0;
    }

    willUpdate(changedProperties) {
        if(changedProperties.has('rows')) {
            this.initPagination();
        }
    }

    render() {
        return html`
            <pi-paginator
            .rows=${this.rowsPerPage}
            .totalRecords=${this.rows.length}
            @navClick=${(e) => this.handlePagerNavClick(e.detail)}
            ></pi-paginator>
        `;
    }

    initPagination() {
        if(this.rowsPerPage > 0) {
            // Split rows into an array of rows for easy reference
            const pagesOfRows = chunkArray(this.rows, this.rowsPerPage);
            this.pages = pagesOfRows;

            this.handlePaginationChange();
        }
    }

    handlePaginationChange() {
        this.emitPageRows(this.pages[this.activePageIndex]);
    }

    emitPageRows(updatedRows) {
        // Emit event with selected tab
        const event = new CustomEvent('updatedPageRows', {
            detail: {
                rows: updatedRows
            },
            bubbles: true,
            composed: true
        })

        this.dispatchEvent(event);
    }

    handlePagerNavClick(navData) {
        const rowStart = Number(navData.navIndex * this.rowsPerPage);
        const rowStop = rowStart + Number(this.rowsPerPage);

        this.activePageIndex = navData.navIndex;

        this.handlePaginationChange();
    }

    static styles = [
        css`
            :host {
                display: block;
                width: 100%;
            }
        `
    ]
    
}

// if(!customElements.get('pi-table-paginator')) { customElements.define('pi-table-paginator', PiTablePaginator); }