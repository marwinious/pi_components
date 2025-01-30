import { LitElement, css, html } from 'lit'

export class TextInput extends LitElement {

    static get properties() {
        return {
            placeholder: { type: String },
            showLabel: { type: Boolean, attribute: false },
            value: { type: String },
            disabled: { type: Boolean },
        }
    }

    constructor() {
        super()
        this.placeholder = '';
        this.showLabel = false;
        this.value = '';
        this.disabled = false;
    }

    render() {
        return html`
            <div 
            class="label"
            ?hidden=${!this.showLabel}
            >
                <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
            
            <input 
            type="text" 
            placeholder=${this.placeholder} 
            @input=${this.handleInputChange}
            .value=${this.value}
            ?disabled=${this.disabled}
            >
        `;
    }

    handleSlotChange() {
        // Change label visibility depending on slot content
        const slot = this.shadowRoot.querySelector('slot');
        const assignedNodes = slot.assignedNodes({ flatten: true });

        this.showLabel = assignedNodes.length > 0 ? true : false;
    }

    handleInputChange(e) {
        const newValue = e.target.value;

        const event = new CustomEvent('inputChanged', {
            detail: newValue,
            bubbles: true,
            composed: true
        })

        this.dispatchEvent(event);
    }

    static styles = [
        css`
            :host {
                display: block;
            }

            .label {
                font-size: var(--pi-text-input-label-font-size, 80%);
                text-transform: var(--pi-text-input-label-transform, none);
                color: var(--pi-text-input-label-color, #888);
                font-weight: var(--pi-text-input-label-font-weight, bold);
                padding: var(--pi-text-input-label-padding, 0 0 0 0.5rem);
            }

            input {
                font-size: var(--pi-text-input-font-size, 16px);
                padding: var(--pi-text-input-padding, 5px 7px);
                background-color: var(--pi-text-input-bg-color, #fff);
                border-radius: var(--pi-text-input-border-radius, 5px);
                border-style: var(--pi-text-input-border-style, solid);
                border-width: var(--pi-text-input-border-width, 1px);
                border-color: var(--pi-text-input-border-color, #aaa);
                color: var(--pi-text-input-text-color, #555);
                box-shadow: var(--pi-text-input-box-shadow, none);
                transition: background 0.3s ease, 
                            box-shadow 0.3s ease,
                            border-color 0.3s ease;

                &::placeholder {
                    color: var(--pi-text-input-placeholder-color, #aaa);
                }

                &:disabled, &:disabled::placeholder {
                    background-color: var(--pi-text-input-disabled-bg-color, #eee);
                    color: var(--pi-text-input-disabled-text-color, #888);
                }

                &:focus {
                    background: var(--pi-text-input-bg-color-focus, #f2fcff);
                    outline: none;
                    border-style: var(--pi-text-input-border-style-focus, solid);
                    border-width: var(--pi-text-input-border-width-focus, 1px);
                    border-color: var(--pi-text-input-border-color-focus, #aaa);
                    box-shadow: var(--pi-text-input-box-shadow-focus, 1px 1px 1px #ddd);
                }
            }

        `
    ]
}
customElements.define('pi-text-input', TextInput);
