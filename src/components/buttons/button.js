import { LitElement, css, html } from 'lit'

export class PiButton extends LitElement {

    static get properties() {
        return {
            disabled: { type: Boolean },
            icon: { type: String }
        }
    }

    constructor() {
        super()
        this.disabled = false;
        this.icon = '';
    }

    render() {
        return html`
            <button 
            type="button"
            ?disabled=${this.disabled}
            >

                <span class="button_content_container">
                    ${this.icon != '' ? html`
                        <div class="icon">${unsafeHTML(this.icon)}</div>
                    ` : null}
                    <slot></slot>
                </span>
                
            </button>
        `;
    }

    static styles = [
        css`
            button {
                display: inline-block;
                background: var(--pi-button-bg-color, #117ab4);
                border: var(--pi-button-border, solid 1px #117ab4);
                color: var(--pi-button-text-color, #FFF);
                border-radius: var(--pi-button-border-radius, 5px);
                padding: var(--pi-button-padding, 7px 12px);
                font-weight: var(--pi-button-font-weight, bold);
                font-size: var(--pi-button-font-size, 16px);
                cursor: var(--pi-button-cursor, pointer);
                user-select: none; 
                transition: background-color 0.5s ease, border 0.5s ease, color 0.5s ease;

                &:hover {
                    background: var(--pi-button-hover-bg-color, #0a486a);
                    border-color: var(--pi-button-hover-border-color, #0a486a);
                }

                &:active {
                    background: var(--pi-button-active-bg-color, #FFF);
                    color: var(--pi-button-active-text-color, #0a486a);
                    border-color: var(--pi-button-active-border-color, #0a486a);
                }

                &:disabled, &[disabled] {
                    background: var(--pi-button-disabled-bg-color, #bbb);
                    border-color: var(--pi-button-disabled-border-color, #bbb);
                    cursor: not-allowed;
                    pointer-events: none;
                }
            }

            .button_content_container {
                display: flex;
                align-items: center;
                width: 100%;
                gap: 5px;
            }

            .icon {
                width: var(--pi-button-icon-width, 17px);
                height: var(--pi-button-icon-height, 17px);
                fill: var(--pi-button-icon-fill-color, #FFF);
            }
        `
    ]
    
}
customElements.define('pi-button', PiButton);
