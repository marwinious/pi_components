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

    connectedCallback() {
        super.connectedCallback();
        // Listen for 'change' events from child form elements
        this.addEventListener('change', (event) => this._handleFormElementChange(event));
        /* this.addEventListener('change', (event) => { 
            this.formData = { ...this.formData, [event.detail.name]: event.detail.value };
            // console.log("Form Data on Change:", this.formData); 
        }); */
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('change', this._handleFormElementChange());
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
        // console.log("Form Data on Change:", this.formData);
    }

    _handleSubmit(e) {
        e.preventDefault(); // Prevent default form submission

        const finalFormData = this._collectFormData();

        console.log('Final Form Data on Submit:', finalFormData);

        const submitEvent = new CustomEvent('formSubmitted', {
            detail: finalFormData,
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(submitEvent);
    }

    _collectFormData() { 
        const formElements = this.querySelectorAll('[name]');
        const formData = {};
        formElements.forEach(element => {
            const component = element.closest('pi-base-form-element');
            if (component) {
                formData[component.name] = component.getValue();
            } 
            else {
                formData[element.name] = element.value; 
            }
        });
        return formData;
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
