import { LitElement, css, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js';
import severityCss from './css/buttonSeverityCss'

export class PiButton extends LitElement {

    static get properties() {
        return {
            disabled: { type: Boolean },
            icon: { type: String },
            severity: { type: String }
        }
    }

    constructor() {
        super()
        this.disabled = false;
        this.icon = '';
        this.severity = 'primary';
    }

    render() {

        const buttonClasses = {
            'btn_severity_primary': this.severity === 'primary',
            'btn_severity_secondary': this.severity === 'secondary',
            'btn_severity_success': this.severity === 'success',
            'btn_severity_info': this.severity === 'info',
            'btn_severity_warn': this.severity === 'warn',
            'btn_severity_help': this.severity === 'help',
            'btn_severity_danger': this.severity === 'danger',
        }

        return html`
            <button 
            type="button"
            class=${classMap(buttonClasses)}
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
        severityCss,
        css`
            button {
                display: inline-block;
                border-radius: var(--pi-button-border-radius, 5px);
                padding: var(--pi-button-padding, 7px 12px);
                font-weight: var(--pi-button-font-weight, bold);
                font-size: var(--pi-button-font-size, 16px);
                cursor: var(--pi-button-cursor, pointer);
                user-select: none; 
                transition: background-color 0.5s ease, border 0.5s ease, color 0.5s ease;
                background: var(--pi-button-bg-color, #117ab4);
                border: var(--pi-button-border, solid 1px #117ab4);
                color: var(--pi-button-text-color, #FFF);

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
