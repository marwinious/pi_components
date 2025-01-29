import { LitElement, css, html } from 'lit'

export class PiTableSortIcon extends LitElement {

    static get properties() {
        return {
            sortDirection: { type: String }
        }
    }

    constructor() {
        super()
        this.sortDirection = '';
    }

    render() {
        return html`
            ${this.sortDirection === "asc" ? "▲" : 
                this.sortDirection === "desc" ? "▼" 
                    : "↕"
            }
        `;
    }

    static styles = [
        css`
            :host {
                margin: var(--pi-table-sort-icon-margin, 0 0 0 0.5em);
                font-size: var(--pi-table-sort-icon-font-size, 0.8em);
                color: var(--pi-table-sort-icon-color, #666);
            }

            :host([data-active="true"]) {
                color: var(--pi-table-sort-icon-active-color, #000);
            }
        `
    ]
    
}
customElements.define('pi-table-sort-icon', PiTableSortIcon);
