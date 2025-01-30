import { LitElement, css, html } from 'lit'

/*
EXAMPLE USAGE:

<toggle-control
.value=true
@toggleChanged=${this.handleToggleChange}
></toggle-control>
*/

export class PiToggleSwitch extends LitElement {

    static get properties() {
        return {
            value: { type: Boolean }
        }
    }

    constructor() {
        super()
        this.value = false;
    }

    render() {
        return html`
            <div 
            class="toggle_container"
            @click=${this.handleToggleClick}
            >
                <icon-toggle-on class=${this.value ? 'visible' : 'hidden'}></icon-toggle-on>
                <icon-toggle-off class=${this.value ? 'hidden' : 'visible'}></icon-toggle-off>
            </div>
        `;
    }

    handleToggleClick() {
        if(this.value === true) { this.value = false }
        else { this.value = true }

        const event = new CustomEvent('toggleChanged', {
            detail: {value: this.value},
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(event);
    }

    static styles = [
        css`
            :host {
                display: inline-block;
                width: 39px;
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
