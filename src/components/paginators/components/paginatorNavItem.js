import { LitElement, css, html } from 'lit'

export class PiPaginatorNavItem extends LitElement {

    static get properties() {
        return {
            disabled: { type: Boolean },
            value: { type: String }
        }
    }

    constructor() {
        super()
        this.disabled = false;
        this.value = '';
    }

    render() {
        return html`
            <slot>${this.value}</slot>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                padding: 5px 10px;
                cursor: pointer;
                color: var(--standard-table-pager-button-color, #777);
                user-select: none;

                &:hover {
                    color: var(--standard-table-pager-button-color-hover, #000);
                }
            }

            :host([disabled]) {
                pointer-events: none;
                opacity: 0.6;
            }

            :host([active]) {
                color: var(--standard-table-pager-number-color-active, #000);
                font-weight: bold;
            }
        `
    ]
    
}
customElements.define('pi-paginator-nav-item', PiPaginatorNavItem);
