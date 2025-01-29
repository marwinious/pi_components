import { LitElement, css, html } from 'lit'
import { PiPaginator } from '../../../paginators/components/paginator';

export class PiTablePaginator extends LitElement {

    static get properties() {
        return {
            rawRows: { type: Array },
            rowsPerPage: { type: [Number, String] },
            activeRows: { type: Array, attribute: false }
        }
    }

    constructor() {
        super()
        this.rawRows = [];
        this.rowsPerPage = -1;
        this.activeRows = [];
    }

    connectedCallback() {
        super.connectedCallback();
        this.initPagination();
    }

    render() {
        return html`
            <pi-paginator
            .rows=${this.rowsPerPage}
            .totalRecords=${this.rawRows.length}
            @navClick=${(e) => this.handlePagerNavClick(e.detail)}
            ></pi-paginator>
        `;
    }

    initPagination() {
        if(this.rowsPerPage > 0) {
            this.handleDataPagination(0, this.rowsPerPage);
        }
    }

    handleDataPagination(rowStart, rowStop) {
        // Paginate
        const paginatedData = this.rawRows.slice(rowStart, rowStop);

        // Update activeRows
        this.activeRows = paginatedData;

        // Emit update
        this.emitPageRows();
    }

    emitPageRows() {
        // Emit event with selected tab
        const event = new CustomEvent('updatedPageRows', {
            detail: {
                rows: this.activeRows
            },
            bubbles: true,
            composed: true
        })

        this.dispatchEvent(event);
    }

    handlePagerNavClick(navData) {
        const rowStart = Number(navData.navIndex * this.rowsPerPage);
        const rowStop = rowStart + Number(this.rowsPerPage);

        this.handleDataPagination(rowStart, rowStop);
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
customElements.define('pi-table-paginator', PiTablePaginator);
