import { LitElement, css, html } from 'lit'
import { PiBaseFormElement } from '../base/baseFormElement';

export class PiCheckboxInput extends PiBaseFormElement {

    static get properties() {
        return {
            checked: { type: Boolean, reflect: true },
            label: { type: String }
        }
    }

    constructor() {
        super()
        this.checked = false;
        this.label = '';
    }

    renderInput() {
        return html`
            <div 
            class="checkbox-container" 
            @click=${this._handleInputChange}
            >
                <div class="checkmark"></div>
            </div>

            <span 
            class="label" 
            ?hidden=${this.label==''}
             @click=${this._handleInputChange}
            >${this.label}</span>
        `;
    }

    _handleInputChange() {
        this.checked = !this.checked; // Toggle the checked property
        this.value = this.checked;

        this._dispatchChangeEvent(this.value);
    }

    static styles = [
        css`
            :host {
                display: inline-flex; /* Use inline-flex for label alignment */
                align-items: center; /* Vertically align checkbox and label */
                cursor: pointer;
                user-select: none;
            }

            .checkbox-container {
                position: relative; /* For positioning the checkmark */
                width: var(--pi-checkbox-input-inner-width, 20px); /* Adjust size as needed */
                height: var(--pi-checkbox-input-inner-height, 20px);
                border-width: 2px; /* Or your preferred border style */
                border-style: solid; /* Or your preferred border style */
                border-color: var(--pi-input-fill-color-false); /* Or your preferred border style */
                border-radius: 3px; /* Optional rounded corners */
                background-color: #fff; /* Default background color */
            }

            .checkmark {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: var(--pi-checkbox-input-width, 12px); /* Adjust checkmark size */
                height: var(--pi-checkbox-input-height, 12px);
                background-color: var(--pi-checkbox-input-fill-color-true, #74c1d6); /* Or your checkmark color */
                border-radius: 2px; /* Optional rounded checkmark */
                opacity: 0; /* Initially hidden */
                transition: opacity 0.2s ease; /* Smooth appearance */
            }

            :host([checked]) .checkmark { /* Show checkmark when checked */
                opacity: 1;
            }

            /* Optional: Style the container on hover */
            .checkbox-container:hover {
                border-color: var(--pi-checkbox-input-fill-color-true, #74c1d6);
            }

            /* Optional: Style the container when checked */
            :host([checked]) .checkbox-container {
                background-color: var(--pi-checkbox-input-fill-color-false, #ccc); /* Or your checked background color */
            }

            .label {
                margin: var(--pi-checkbox-input-label-margin, 0 0 0 0.5rem); /* Space between checkbox and label */
                font-size: var(--pi-checkbox-input-label-font-size, 1rem); /* Adjust as needed */
                color: var(--pi-checkbox-input-label-color, #555); /* Or your preferred label color */
            }
        `
    ]
    
}
customElements.define('pi-checkbox-input', PiCheckboxInput);
