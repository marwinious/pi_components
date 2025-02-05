import { LitElement, css, html } from 'lit'
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
        // this.addToGroup();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // this.removeFromGroup();
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

        if(this.checked) {
            // this.syncCheckedState();
        }

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

    addToGroup() {
        if(this.name) {
            this._group = Array.from(this.getRootNode().querySelectorAll(`pi-radio-input[name="${this.name}"]`))
            this.syncCheckedState();
        }
    }

    removeFromGroup() {
        if(this.name) {
            this._group = this._group.filter(radio => radio !== this);
        }
    }

    syncCheckedState() {
        if(this.checked) {
            this._group.forEach(radio => {      
                if(radio !== this) {
                    radio.checked = false;
                }
            })
        }
    }

    static styles = [
        css`
            :host {
                display: inline-block;
                position: relative;
                cursor: pointer;
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
                border: 2px solid var(--radio-border-color, #ccc); /* Use a CSS variable for easy styling */
                background-color: var(--radio-background-color, #fff);
                margin-right: 8px; /* Space between indicator and label */
                box-sizing: border-box; /* Include border in size */
                transition: background-color 0.4s ease, 
                            border-color 0.4s ease; /* Smooth transitions */
            }

            input:checked + .radio_indicator {
                background-color: var(--radio-checked-color, #2196f3); /* Checked color */
                border-color: var(--radio-checked-color, #2196f3);
            }

            input:checked + .radio_indicator::after { /* The inner circle when checked */
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #fff; /* Or use a CSS variable */
                position: absolute;
                top: 0.85rem;
                left: 0.72rem;
                transform: translate(-80%, -80%);
            }

        `
    ]
}
customElements.define('pi-radio-input', PiRadioInput);
