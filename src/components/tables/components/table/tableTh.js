import { LitElement, css, html } from 'lit'

export class PiTableTh extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <slot></slot>
        `;
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

                &.isSortable {
                    cursor: pointer;
                }

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

            @media (max-width: 768px) {
                :host {
                    font-size: 0.9em;
                    font-size: var(--pi-table-small-cell-font-size, 0.9em);
                }
            }
        `
    ]
    
}
customElements.define('pi-table-th', PiTableTh);
