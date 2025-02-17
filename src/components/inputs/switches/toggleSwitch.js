import { LitElement, css, html } from 'lit'
import defaultCss from '../../../css/defaultCss';
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
        if(!this.disabled) {
            this.checked = !this.checked; // Toggle the checked property
            this.value = this.checked;

            this._dispatchChangeEvent(this.value)
        }
        
    }

    static styles = [
        defaultCss,
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
                background-color: var(--pi-toggle-switch-input-fill-color-false, #aaa);
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
                background-color: var(--pi-toggle-switch-input-slider-color, #fff);
                transition: transform 0.3s ease-in-out;
            }

            :host([checked]) .slider {
                transform: translateX(19px); 
            }

            :host([disabled]) {
                cursor: default;
                user-select: none;
                
                .toggle_container {
                    background-color: var(--pi-input-bg-color-disabled)
                }
            }
        `
    ]
}

if(!customElements.get('pi-toggle-switch')) { customElements.define('pi-toggle-switch', PiToggleSwitch); }