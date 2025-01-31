import { LitElement, css, html } from 'lit'
import { PiBaseFormElement } from '../base/baseFormElement';

export class PiToggleSwitch extends PiBaseFormElement {

    static get properties() {
        return {
            value: { type: Boolean, reflect: true },
        }
    }

    constructor() {
        super();
        this.value = false;
    }

    renderInput() {
        return html`
            <div 
            class="toggle_container"
            @click=${this._handleInputChange}
            >
                <icon-toggle-on class=${this.value ? 'visible' : 'hidden'}></icon-toggle-on>
                <icon-toggle-off class=${this.value ? 'hidden' : 'visible'}></icon-toggle-off>
            </div>
        `;
    }

    _handleInputChange() {
        if(this.value === true) { this.value = false }
        else { this.value = true }

        this._dispatchChangeEvent(this.value)
    }

    static styles = [
        css`
            :host {
                display: block;
                width: 39px;
                height: 36px;
                position: relative;
            }

            .toggle_container {
                width: 100%;
                display: block;
                user-select: none;
                position: relative;
            }

            icon-toggle-off, icon-toggle-on {
                width: 100%;
                cursor: pointer;
                position: absolute;
                top: 0;
                left: 0;
                transition: opacity 0.15s ease, 
                            visibility 0.15s ease;
            }

            icon-toggle-off {
                fill: var(--pi-toggle-switch-input-fill-color-false, #aaa);
            }

            icon-toggle-on {
                fill: var(--pi-toggle-switch-input-fill-color-true, #74c1d6);
            }

            .visible {
                opacity: 1;
                visibility: visible;
            }

            .hidden {
                opacity: 0;
                visibility: hidden;
            }
        `
    ]
}
customElements.define('pi-toggle-switch', PiToggleSwitch);
