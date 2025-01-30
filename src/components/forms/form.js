import { LitElement, css, html } from 'lit'
import { PiBaseFormElement } from '../inputs/base/baseFormElement';

export class PiForm extends LitElement {

    static get properties() {
        return {
            formData: { type: Object }
        }
    }

    constructor() {
        super()
        this.formData = {};
    }

    render() {
        return html`
            <form @submit=${this._handleSubmit} @reset=${this._handleReset}>
                <slot @slotchange=${this._handleSlotChange}></slot>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        `;
    }

    _handleFormElementChange(e) {
        this.formData = { ...this.formData, [e.detail.name]: e.detail.value };
        console.log("Form Data on Change:", this.formData);
    }

    _handleSubmit(e) {
        e.preventDefault(); // Prevent default form submission

        const formElements = this.querySelectorAll('[name]'); // Select elements with 'name' attribute
        const finalFormData = {};

        formElements.forEach(element => {
            const component = element.closest('pi-base-form-element'); // Find the custom component
            if (component) {
                finalFormData[component.name] = component.getValue();
            } 
            else {
                finalFormData[element.name] = element.value; // For standard inputs
            }

        });
        console.log('Final Form Data on Submit:', finalFormData);

        const submitEvent = new CustomEvent('formSubmitted', {
            detail: finalFormData,
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(submitEvent);
    }

    _handleReset(e) {
        e.preventDefault();
        
        const formElements = this.querySelectorAll('[name]');

        formElements.forEach(element => {
            const component = element.closest('pi-base-form-element');
            if (component) {
                component.setValue('');
            } 
            else if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA'){
                element.value = '';
            }
        });
        this.formData = {};
    }

    _handleSlotChange() {
        this.formData = {};
        const formElements = this.querySelectorAll('[name]');

        formElements.forEach(element => {
            const component = element.closest('pi-base-form-element');
            if (component) {
                this.formData[component.name] = component.value;
            } 
            else {
                this.formData[element.name] = element.value;
            }
        });
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-form', PiForm);
