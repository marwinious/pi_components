import { LitElement, css, html } from 'lit'
import defaultCss from '../../../css/defaultCss';
import { PiBaseFormElement } from '../base/baseFormElement';
import { PiLabel } from '../../labels/components/label';

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
            <pi-label 
            text=${this.label}
            ?hidden=${this.label==''}
            ></pi-label>

            <textarea
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            @input=${this._handleInputChange}
            ></textarea>
        `;
    }

    static styles = [
        defaultCss,
        css`
            :host { 
                display: inline-block;
                min-width: 250px;
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

// if(!customElements.get('pi-text-area-input')) { customElements.define('pi-text-area-input', PiTextAreaInput); }