import { LitElement, css, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js';
import { PiTableSortIcon } from './tableSortIcon';

export class PiTableTh extends LitElement {

    static get properties() {
        return {
            sortable: { type: Boolean },
            sortDirection: { type: String }
        }
    }

    constructor() {
        super()
        this.sortable = false;
        this.sortDirection = '';
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
                <slot></slot>
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
                padding: var(--pi-table-cell-padding, 0.75em);
                border: var(--pi-table-cell-border, 1px solid #ddd);
                background-color: var(--pi-table-th-bg-color, #f4f4f4);
                position: relative;
                transition: background-color 0.5s ease, border 0.5s ease, color 0.5s ease;

                &[data-active="true"] {
                    background-color: var(--pi-table-th-active-bg-color, color-mix(in srgb, var(--pi-table-th-bg-color, #f4f4f4), black 20%));
                }

                .sort-icon {
                    margin: var(--pi-table-sort-icon-margin, 0 0 0 0.5em);
                    font-size: var(--pi-table-sort-icon-font-size, 0.8em);
                    color: var(--pi-table-sort-icon-color, #666);

                    &[data-active="true"] {
                        color: var(--standard-table-sort-icon-active-color, #000);
                    }
                }
            }

            .table_th {
                &.isSortable {
                    cursor: pointer;
                }
            }

            @media (max-width: 768px) {
                :host {
                    font-size: 0.9em;
                    font-size: var(--pi-table-small-cell-font-size, 0.9em);
                }
            }
        `
    ]
    
}

if(!customElements.get('pi-table-th')) { customElements.define('pi-table-th', PiTableTh); }