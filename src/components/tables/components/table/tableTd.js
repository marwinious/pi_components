import { LitElement, css, html } from 'lit'

export class PiTableTd extends LitElement {

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
                border-top: var(--pi-table-cell-border-top, 1px solid #ddd);
                border-right: var(--pi-table-cell-border-right, 1px solid #ddd);
                border-bottom: var(--pi-table-cell-border-bottom, 1px solid #ddd);
                border-left: var(--pi-table-cell-border-left, 1px solid #ddd);
                background-color: var(--pi-table-cell-bg-color, #f4f4f4);
                color: var(--pi-table-cell-text-color);
                text-align: var(--pi-table-cell-text-align, left);
                font-weight: var(--pi-table-cell-font-weight, bold);
                transition: var(--pi-table-cell-transition, background-color 0.5s ease, border 0.5s ease, color 0.5s ease);

                &.clickable {
                    color: var(--pi-table-cell-clickable-text-color, blue);
                    cursor: pointer;

                    &:hover {
                        color: var(--pi-table-cell-clickable-text-color-hover, purple);
                    }
                }
            }

            @media (max-width: 768px) {
                :host {
                    font-size: var(--pi-table-cell-font-size-sm, 0.9em);
                }
            }
        `
    ]
    
}
customElements.define('pi-table-td', PiTableTd);