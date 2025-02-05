import { LitElement, css, html } from 'lit'
import { PiBaseFormElement } from '../base/baseFormElement';
import { PiLabel } from '../../labels/components/label';

export class PiToggleSwitch extends PiBaseFormElement {

     static get properties() {
        return {
            checked: { type: Boolean, reflect: true },
            value: { type: Boolean },
            label: { type: String },
        }
    }

    constructor() {
        super();
        this.checked = false;
        this.value = false;
        this.label = '';
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this._handleInputChange);
        if(this.checked) { this.value = this.checked }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('click', this._handleInputChange);
    }

    renderInput() {
        return html`
            <div 
            class="toggle_container" 
            >
                <div class="slider"></div>
            </div>

            <pi-label
            text=${this.label}
            ?hidden=${this.label==''}
            no-margin
            ></pi-label>
        `;
    }

    _handleInputChange() {
        this.checked = !this.checked; // Toggle the checked property
        this.value = this.checked;

        this._dispatchChangeEvent(this.value)
    }

    static styles = [
        css`
            :host {
                display: inline-flex;
                align-items: center;
                cursor: pointer;
            }

            :host([checked]) .toggle_container {
                background-color: var(--pi-checkbox-input-fill-color-true, #74c1d6); 
            }

            .toggle_container {
                display: inline-block;
                width: 40px;
                height: 20px;
                border-radius: 10px;
                background-color: #aaa;
                position: relative;
            }

            .slider {
                position: absolute;
                top: 4px;
                left: 4px;
                right: 4px;
                bottom: 4px;
                border-radius: 9px;
                width: 13px;
                /* height: 15px; */
                background-color: #fff;
                transition: transform 0.3s ease-in-out;
            }

            :host([checked]) .slider {
                transform: translateX(19px); 
            }

            .label {
                padding: var(--pi-checkbox-input-label-padding, 0 0 0 0.5rem); /* Space between checkbox and label */
                font-size: var(--pi-checkbox-input-label-font-size, 1rem); /* Adjust as needed */
                color: var(--pi-checkbox-input-label-color, #555); /* Or your preferred label color */
            }
        `
    ]
}
customElements.define('pi-toggle-switch', PiToggleSwitch);
