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
            <td><slot></slot></td>
        `;
    }

    static styles = [
        css`
            td {
                padding: var(--pi-table-cell-padding, 0.75em);
                border: var(--pi-table-cell-border, 1px solid #ddd);
                transition: background-color 0.5s ease, border 0.5s ease, color 0.5s ease;

                &.clickable {
                    color: var(--standard-table-clickable-text-color, blue);
                    cursor: pointer;

                    &:hover {
                        color: var(--standard-table-clickable-text-color-hover, purple);
                    }
                }
            }

            @media (max-width: 768px) {
                td {
                    font-size: 0.9em;
                    font-size: var(--pi-table-small-cell-font-size, 0.9em);
                }
            }
        `
    ]
    
}
customElements.define('pi-table-td', PiTableTd);