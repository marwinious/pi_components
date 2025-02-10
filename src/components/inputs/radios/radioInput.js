import { LitElement, css, html } from 'lit'
import defaultCss from '../../../css/defaultCss';
import { PiBaseFormElement } from '../base/baseFormElement';
import { PiLabel } from '../../labels/components/label';

export class PiRadioInput extends PiBaseFormElement {

    static get properties() {
        return {
            placeholder: { type: String },
            showLabel: { type: Boolean, attribute: false },
            value: { type: String },
            disabled: { type: Boolean, reflect: true },
            label: { type: String },
            checked: { type: Boolean, reflect: true },
            name: { type: String }
        }
    }

    constructor() {
        super()
        this.placeholder = '';
        this.showLabel = false;
        this.value = '';
        this.disabled = false;
        this.label = '';
        this.checked = false;
        this._group = [];
        this.name = '';
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    render() {
        return html`
            <div class="container">
                <input 
                type="radio" 
                placeholder=${this.placeholder} 
                @input=${this._handleInputChange}
                .value=${this.value}
                ?disabled=${this.disabled}
                tabindex="0"
                .checked=${this.checked}
                aria-checked=${this.checked}
                role="radio"
                >
                <div class="radio_indicator"></div>
                <!-- <label>${this.label}</label> -->
                <pi-label 
                text=${this.label} 
                no-padding 
                no-margin
                ></pi-label>
            </div>
            
        `;
    }

    _handleInputChange(e) {
        this.value = e.target.value;
        this.checked = !this.checked;

        const event = new CustomEvent('radio-change', {
            detail: { 
                name: this.name, 
                value: this.value, 
                group: null 
            }, // Include name for easy identification
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }

    static styles = [
        defaultCss,
        css`
            :host {
                display: inline-block;
                position: relative;
                cursor: pointer;
                box-sizing: border-box;
                -webkit-tap-highlight-color: transparent; /* Remove mobile tap highlight */
            }

            :host([block]) {
                display: block;

                .container {
                    margin-right: 0;
                }
            }

            .container {
                display: flex;
                align-items: center;
                margin-right: 0.75rem;
            }

            input {
                opacity: 0; /* Hide the default radio button */
                position: absolute;
                margin: 0;
                height: 20px;
                width: 20px;
                cursor: pointer;
            }

            .radio_indicator { /* The custom radio indicator */
                cursor: pointer;
                width: 18px;
                height: 18px;
                border-radius: 50%; /* Make it round */
                border: 2px solid var(--pi-radio-input-border-color, #ccc); /* Use a CSS variable for easy styling */
                background-color: var(--pi-radio-input-background-color, #fff);
                margin-right: var(--pi-radio-input-margin-right, 8px); /* Space between indicator and label */
                box-sizing: border-box; /* Include border in size */
                transition: background-color 0.4s ease, 
                            border-color 0.4s ease; /* Smooth transitions */
            }

            input:checked + .radio_indicator {
                background-color: var(--pi-radio-input-color-checked, #2196f3); /* Checked color */
                border-color: var(--pi-radio-input-color-checked, #2196f3);
            }

            input:checked + .radio_indicator::after { /* The inner circle when checked */
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: var(--pi-radio-input-background-color-checked, #FFF); /* Or use a CSS variable */
                position: absolute;
                top: 12px;
                left: 11px;
                transform: translate(-80%, -80%);
            }

            :host([disabled]) {
                input {
                    cursor: default;
                }

                .radio_indicator {
                    background-color: var(--pi-input-bg-color-disabled);
                }
            }

        `
    ]
}
customElements.define('pi-radio-input', PiRadioInput);
