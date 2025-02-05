import { LitElement, css, html } from 'lit'
import { PiBaseFormElement } from '../base/baseFormElement';

export class PiRadioInputGroup extends PiBaseFormElement {

    static get properties() {
        return {
            label: { type: String },
            name: { type: String },
            value: { type: String },
            radios: { type: Array }
        }
    }

    constructor() {
        super()
        this.label = '';
        this.name = '';
        this.value = '';
        this.radios = [];
    }
    
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('radio-change', (event) => this._handleRadioElementChange(event));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('radio-change', (event) => this._handleRadioElementChange(event));
    }

    render() {
        return html`
            <label 
            class="label"
            ?hidden=${this.label==''}
            >${this.label}</label>
            
            <slot @slotchange=${this._handleSlotChange}></slot>
        `;
    }

    _handleRadioElementChange(e) {
        if(typeof e.detail?.value != 'undefined') {
            this.value = e.detail.value;
            this._dispatchChangeEvent(e.detail.value)
        }

        // reset checked values of other radio options
        this.syncCheckedRadio();
    }

    syncCheckedRadio() {
        this.radios.forEach((radio) => {
            if(radio.value !== this.value) {
                radio.checked = false;
            }
        })
    }

    _collectRadioData() {
        const formElements = this.querySelectorAll('[name]');
        const radioData = '';
        
        formElements.forEach(element => {
            const component = element.closest('pi-radio-input');

            if(component) {
                if(component.checked) {
                    radioData = component.getValue();
                }
            } 
            else {
                radioData = element.value; 
            }
            
        });

        return radioData;
    }

    _handleSlotChange() {
        this.radios = this.querySelectorAll('pi-radio-input');

        const radioData = this._collectRadioData();
        this.value = radioData;
    }

    static styles = [
        css`
            :host {
                display: block;
            }

            label {
                display: block;
                box-sizing: border-box;
                font-size: var(--pi-text-input-label-font-size, 80%);
                text-transform: var(--pi-text-input-label-transform, none);
                color: var(--pi-text-input-label-color, #888);
                font-weight: var(--pi-text-input-label-font-weight, bold);
                padding: 0;
                margin-bottom: 0.25rem;
            }
        `
    ]
    
}
customElements.define('pi-radio-input-group', PiRadioInputGroup);
