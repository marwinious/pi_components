import { LitElement, css, html } from 'lit'
import { PiBaseFormElement } from '../inputs/base/baseFormElement';

export class PiForm extends LitElement {

    static get properties() {
        return {
            formData: { type: Object },
            showReset: { type: Boolean },
            showSubmit: { type: Boolean }
        }
    }

    constructor() {
        super()
        this.formData = {};
        this.showReset = false;
        this.showSubmit = true;
    }

    connectedCallback() {
        super.connectedCallback();
        // Listen for 'change' events from child form elements
        this.addEventListener('change', (event) => this._handleFormElementChange(event));
        this.addEventListener('pi-submit', (event) => this._handleSubmit(event));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('change', (event) => this._handleFormElementChange(event));
        this.removeEventListener('pi-submit', (event) => this._handleSubmit(event));
    }

    render() {
        return html`
            <form @submit=${this._handleSubmit} @reset=${this._handleReset}>
                <slot @slotchange=${this._handleSlotChange}></slot>

                <div class="button_row">
                    
                        <slot name="submitButton">
                            <button type="submit">Submit</button>
                        </slot>
                    
                    
                    ${this.showReset ? html `
                        <slot name="resetButton">
                            <button type="reset">Reset</button>
                        </slot>
                    `: null}
                    
                </div>
                
            </form>
        `;
    }

    _handleFormElementChange(e) {
        // console.log('e.detail from change: ', e.detail);
        
        if(e.detail?.group) {
            if(typeof this.formData[e.detail.group] == 'undefined') { this.formData[e.detail.group] = {} }
            this.formData[e.detail.group][e.detail.name] = e.detail.value;
        }
        else {
            this.formData = { ...this.formData, [e.detail.name]: e.detail.value };
        }
        
        // console.log("Form Data on Change:", this.formData);

        const submitEvent = new CustomEvent('formDataUpdated', {
            detail: this.formData,
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

            // If looking into a form group
            if (groupName) {
                if (!formData[groupName]) {
                    formData[groupName] = {}; 
                }

                const component = element.closest('pi-base-form-element')
                                    || element.closest('pi-text-input')
                                    || element.closest('pi-select-input')
                                    || element.closest('pi-checkbox-input')
                                    || element.closest('pi-toggle-switch')
                                    || element.closest('pi-radio-input-group')
                                    || element.closest('pi-text-area-input')
                ;

                if (component) {
                    // console.log('component: ', component);
                    
                    // Account for radio inputs
                    if(component.tagName == 'PI-RADIO-INPUT-GROUP') {
                        // console.log('input group');
                        
                        /* if(component.checked) {
                            formData[groupName][component.name] = component.getValue();
                        } */
                    }
                    else {
                        formData[groupName][component.name] = component.getValue();
                    }
                } 
                else {
                    // Exclude any form group elements from collection (children of groups will still be processed)
                    if(element.tagName != 'PI-FORM-GROUP') {
                        // console.log('element: ', element);
                        
                        formData[groupName][element.name] = element.value; 
                    }   
                }
            }
            // Otherwise, assume we're looking at a direct form element
            else {
                const component = element.closest('pi-base-form-element')
                                    || element.closest('pi-text-input')
                                    || element.closest('pi-select-input')
                                    || element.closest('pi-checkbox-input')
                                    || element.closest('pi-toggle-switch')
                                    || element.closest('pi-radio-input-group')
                                    || element.closest('pi-text-area-input')
                ;

                if (component) {
                    // console.log('component: ', component, component.getValue());
                    
                    // Account for radio inputs
                    if(component.tagName == 'PI-RADIO-INPUT') {
                        /* if(component.checked) {
                            formData[component.name] = component.getValue();
                        } */
                    }
                    else {
                        formData[component.name] = component.getValue();
                    }
                    
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
                                || element.closest('pi-checkbox-input')
                                || element.closest('pi-toggle-switch')
                                || element.closest('pi-radio-input-group')
                                || element.closest('pi-text-area-input')
            
            ;

            if (component) {
                component.setValue('');
            } 
            else if (element.tagName === 'PI-TEXT-INPUT' 
                    || element.tagName === 'PI-SELECT-INPUT' 
                    || element.tagName === 'PI-TEXT-AREA-INPUT'
                    || element.tagName === 'PI-TOGGLE-INPUT'
                    || element.tagName === 'PI-RADIO-INPUT'
                    || element.tagName === 'PI-CHECKBOX-INPUT'
            ){
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
            .button_row {
                margin: var(--pi-form-button-row-margin, 1rem 0);
            }
        `
    ]
    
}
customElements.define('pi-form', PiForm);
