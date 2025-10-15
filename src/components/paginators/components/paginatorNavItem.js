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
                padding: var(--pi-paginator-nav-item-padding, 5px 10px);
                cursor: pointer;
                color: var(--pi-paginator-nav-item-text-color, #777);
                user-select: none;

                &:hover {
                    color: var(--pi-paginator-nav-item-text-color-hover, #000);
                }
            }

            :host([disabled]) {
                pointer-events: none;
                opacity: 0.6;
            }

            :host([active]) {
                color: var(--pi-paginator-nav-item-text-color-active, #000);
                font-weight: var(--pi-paginator-nav-item-font-weight-active, bold);
            }
        `
    ]
    
}

// if(!customElements.get('pi-paginator-nav-item')) { customElements.define('pi-paginator-nav-item', PiPaginatorNavItem); }