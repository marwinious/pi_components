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
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('change', (event) => this._handleFormElementChange(event));
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

    getFormData() { return this.formData }

    _handleFormElementChange(e) {
        if(e.detail?.group) {
            if(typeof this.formData[e.detail.group] == 'undefined') { this.formData[e.detail.group] = {} }
            this.formData[e.detail.group][e.detail.name] = e.detail.value;
        }
        else {
            this.formData = { ...this.formData, [e.detail.name]: e.detail.value };
        }
        
        // console.log("Form Data on Change:", this.formData);

        const submitEvent = new CustomEvent('formDataUpdated', {
            detail: { formData: this.formData },
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(submitEvent);
    }

    _handleSubmit(e) {
        e.preventDefault(); // Prevent default form submission

        const finalFormData = this._collectFormData();

        // console.log('Final Form Data on Submit:', finalFormData);

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
            const groupName = element.closest('pi-form-group')?.name; // Get group name if within a group

            if (groupName) {
                if (!formData[groupName]) {
                    formData[groupName] = {}; 
                }

                const component = element.closest('pi-base-form-element')
                                    || element.closest('pi-text-input')
                                    || element.closest('pi-select-input')
                ;

                if (component) {
                    formData[groupName][component.name] = component.getValue();
                } 
                else {
                    // Exclude any form group elements from collection (children of groups will still be processed)
                    if(element.tagName != 'PI-FORM-GROUP') {
                        formData[groupName][element.name] = element.value; 
                    }   
                }
            } 
            else {
                const component = element.closest('pi-base-form-element')
                                    || element.closest('pi-text-input')
                                    || element.closest('pi-select-input')
                ;

                if (component) {
                    formData[component.name] = component.getValue();
                } 
                else {
                    formData[element.name] = element.value; 
                }
            }
        });

        return formData;
    }

    _handleReset(e) {
        e.preventDefault();

        const formElements = this.querySelectorAll('[name]');

        formElements.forEach(element => {
            const component = element.closest('pi-base-form-element')
                                || element.closest('pi-text-input')
                                || element.closest('pi-select-input')
            
            ;
            
            if (component) {
                component.setValue('');
            } 
            else if (element.tagName === 'PI-TEXT-INPUT' || element.tagName === 'PI-SELECT-INPUT' || element.tagName === 'TEXTAREA'){
                element.value = '';
            }
        });
        this.formData = {};
    }

    _handleSlotChange() {
        const formData = this._collectFormData();
        this.formData = formData;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-form', PiForm);
