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
            .rows=3
            .totalRecords=${this.rawRows.length}
            @navClick=${(e) => this.handlePagerNavClick(e.detail)}
            ></pi-paginator>
        `;
    }

    initPagination() {
        if(this.rowsPerPage > 0) {
            // Paginate initial data
            let paginatedData = this.rawRows.slice(0, this.rowsPerPage);

            // Update activeRows
            this.activeRows = paginatedData;

            // Emit update
            this.emitPageRows();
        }
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
        console.log('navData: ', navData);
        
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
