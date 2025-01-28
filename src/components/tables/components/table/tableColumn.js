import { LitElement, css, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js';
import { PiTableSortIcon } from './tableSortIcon';

export class PiTableColumn extends LitElement {

    static get properties() {
        return {
            sortable: { type: Boolean },
            sortDirection: { type: String },
            key: { type: String},
            label: { type: String }
        }
    }

    constructor() {
        super()
        this.sortable = false;
        this.sortDirection = '';
        this.key = '';
        this.label = '';
    }

    render() {
        const dynamicClasses = {
            'isSortable': this.sortable
        }

        return html`
            <div 
            class="table_th ${classMap(dynamicClasses)}"
            @click=${this.handleSortClick}
            >
                ${this.label}
                ${this.sortable ? html`
                    <pi-table-sort-icon
                    .sortDirection=${this.sortDirection}
                    ></pi-table-sort-icon>
                ` : null}
            </div>
            
        `;
    }

    handleSortClick(e) {
        // Emit event with selected tab
        const event = new CustomEvent('tableSortIconClicked', {
            detail: {
                currentSortDirection: this.sortDirection
            },
            bubbles: true,
            composed: true
        })

        this.dispatchEvent(event);
    }

    static styles = [
        css`
            :host {
                display: table-cell;
                padding: var(--pi-table-th-padding, 0.75em);
                border-top: var(--pi-table-th-border-top, 1px solid #ddd);
                border-right: var(--pi-table-th-border-right, 1px solid #ddd);
                border-bottom: var(--pi-table-th-border-bottom, 1px solid #ddd);
                border-left: var(--pi-table-th-border-left, 1px solid #ddd);
                background-color: var(--pi-table-th-bg-color, #f4f4f4);
                color: var(--pi-table-th-text-color, #555);
                text-align: var(--pi-table-th-text-align, left);
                position: relative;
                font-weight: var(--pi-table-th-font-weight, bold);
                transition: var(--pi-table-th-transition, background-color 0.5s ease, border 0.5s ease, color 0.5s ease);

                &[data-active="true"] {
                    background-color: var(--pi-table-th-bg-color-active, color-mix(in srgb, var(--pi-table-th-bg-color, #f4f4f4), black 20%));
                }
            }

            .table_th {
                &.isSortable {
                    cursor: pointer;
                }
            }

            @media (max-width: 768px) {
                :host {
                    font-size: var(--pi-table-th-font-size-sm, 0.9em);
                }
            }
        `
    ]
    
}
customElements.define('pi-table-column', PiTableColumn);
