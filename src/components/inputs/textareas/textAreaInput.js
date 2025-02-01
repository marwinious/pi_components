import { LitElement, css, html } from 'lit'
import { PiBaseFormElement } from '../base/baseFormElement';

export class PiTextAreaInput extends PiBaseFormElement {

    static get properties() {
        return {
            label: { type: String },
            value: { type: String },
            placeholder: { type: String }
        }
    }

    constructor() {
        super()
        this.label = '';
        this.value = '';
        this.placeholder = '';
    }

    render() {
        return html`
            <div 
            class="label"
            ?hidden=${this.label==''}
            >${this.label}</div>

            <textarea
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            @input=${this._handleInputChange}
            ></textarea>
        `;
    }

    static styles = [
        css`
            :host { 
                display: inline-block;
                min-width: 250px;
            }

           .label {
                font-size: var(--pi-textarea-input-label-font-size, 80%);
                text-transform: var(--pi-textarea-input-label-transform, none);
                color: var(--pi-textarea-input-label-color, #888);
                font-weight: var(--pi-textarea-input-label-font-weight, bold);
                padding: var(--pi-textarea-input-label-padding, 0 0 0 0.5rem);
            }

            textarea {
                width: 100%;
                min-height: 80px;
                font-size: var(--pi-textarea-input-font-size, 16px);
                padding: var(--pi-textarea-input-padding, 5px 7px);
                background-color: var(--pi-textarea-input-bg-color, #fff);
                border-radius: var(--pi-textarea-input-border-radius, 5px);
                border-style: var(--pi-textarea-input-border-style, solid);
                border-width: var(--pi-textarea-input-border-width, 1px);
                border-color: var(--pi-textarea-input-border-color, #aaa);
                color: var(--pi-textarea-input-text-color, #555);
                box-shadow: var(--pi-textarea-input-box-shadow, none);
                transition: background 0.3s ease, 
                            box-shadow 0.3s ease,
                            border-color 0.3s ease;

                &::placeholder {
                    color: var(--pi-textarea-input-placeholder-text-color, #aaa);
                }

                &:disabled, &:disabled::placeholder {
                    background-color: var(--pi-textarea-input-bg-color-disabled, #eee);
                    color: var(--pi-textarea-input-text-color-disabled, #888);
                }

                &:focus {
                    background: var(--pi-textarea-input-bg-color-focus, #f2fcff);
                    outline: none;
                    border-style: var(--pi-textarea-input-border-style-focus, solid);
                    border-width: var(--pi-textarea-input-border-width-focus, 1px);
                    border-color: var(--pi-textarea-input-border-color-focus, #aaa);
                    box-shadow: var(--pi-textarea-input-box-shadow-focus, 1px 1px 1px #ddd);
                }
            }
        `
    ]
    
}
customElements.define('pi-text-area-input', PiTextAreaInput);
