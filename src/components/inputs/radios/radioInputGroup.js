import { LitElement, css, html } from 'lit'
import { register } from '../../../registerWebComp';
import defaultCss from '../../../css/defaultCss';
import { PiBaseFormElement } from '../base/baseFormElement';
import { PiLabel } from '../../labels/components/label';

register('pi-base-form-element', PiBaseFormElement)
register('pi-label', PiLabel)

export class PiRadioInputGroup extends PiBaseFormElement {

    static get properties() {
        return {
            label: { type: String },
            name: { type: String },
            value: { type: String },
            radios: { type: Array },
            disabled: { type: Boolean }
        }
    }

    constructor() {
        super()
        this.label = '';
        this.name = '';
        this.value = '';
        this.radios = [];
        this.disabled = false;
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
            <pi-label 
            text=${this.label}
            block
            no-padding
            ?hidden=${this.label==''}
            ></pi-label>
            
            <slot @slotchange=${this._handleSlotChange}></slot>
        `;
    }

    _handleRadioElementChange(e) {
        if(!this.disabled) {
            if(typeof e.detail?.value != 'undefined') {
                this.value = e.detail.value;
                this._dispatchChangeEvent(e.detail.value)
            }

            // reset checked values of other radio options
            this.syncCheckedRadio();
        }
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
        let radioData = '';
        
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

        // Disabled all radio buttons if disabled is flagged
        if(this.disabled) {
            this.radios.forEach((radio) => {
                radio.disabled = true;
            })
        }

        const radioData = this._collectRadioData();
        this.value = radioData;
    }

    static styles = [
        defaultCss,
        css`
            :host {
                display: block;
                position: relative;
                box-sizing: border-box;
            }
        `
    ]
    
}

// if(!customElements.get('pi-radio-input-group')) { customElements.define('pi-radio-input-group', PiRadioInputGroup); }