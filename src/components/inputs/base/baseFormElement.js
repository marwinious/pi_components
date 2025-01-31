import { LitElement, css, html } from 'lit'

export class PiBaseFormElement extends LitElement {

    static get properties() {
        return {
            disabled: { type: Boolean },
            name: { type: String },
        }
    }

    constructor() {
        super()
        this.disabled = false;
        this.name = '';
    }

    render() {
        return html`${this.renderInput()}`;
    }

    // Abstract method to render the form element (implement in child classes)
    renderInput() {
        throw new Error('renderInput() must be implemented in child class');
    }

    // Method to dispatch the 'change' event
    _dispatchChangeEvent(value) {
        const event = new CustomEvent('change', {
            detail: { 
                name: this.name, 
                value, 
                group: this.closest('pi-form-group')?.name || null }, // Include name for easy identification
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }

    // Example input change handler (override in child classes if needed)
    _handleInputChange(e) {
        this.value = e.target.value;
        this._dispatchChangeEvent(this.value)
    }

    // Get value (for form submit)
    getValue() { return this.value; }

    // Set value (for form reset and initial value)
    setValue(value) { this.value = value; this._dispatchChangeEvent(this.value) }

    static styles = [
        css`
            :host { 
                display: inline-block;
            }
        `
    ]
    
}
customElements.define('pi-base-form-element', PiBaseFormElement);
