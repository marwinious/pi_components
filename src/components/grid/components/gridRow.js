import { LitElement, css, html } from 'lit'

export class PiGridRow extends LitElement {

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
                display: grid;
                grid-template-columns: var(--pi-grid-template-columns, repeat(12, 1fr)); /* 12-column layout */
                /* gap: 16px; Space between columns */
                width: 100%;
                box-sizing: border-box;
            }

            @media (max-width: 768px) {
                :host {
                    grid-template-columns: var(--pi-grid-template-columns-mw-768, repeat(6, 1fr)); /* Switch to 6 columns */
                }
            }

            @media (max-width: 480px) {
                :host {
                    grid-template-columns: var(--pi-grid-template-columns-mw-480, repeat(2, 1fr)); /* Switch to 6 columns */
                }
            }
        `
    ]
    
}

if(!customElements.get('pi-row')) { customElements.define('pi-row', PiGridRow); }