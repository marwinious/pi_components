import { LitElement, css, html } from 'lit'
import { unsafeCSS } from 'lit'
import defaultCss from '../../../css/defaultCss'
import commonCss from '../../../css/common.css?inline'

export class PiChip extends LitElement {

    static get properties() {
        return {
            label: { type: String },
            removable: { type: Boolean },
            isVisible: {type: Boolean }
        }
    }

    constructor() {
        super()
        this.label = '';
        this.removable = false;
        this.isVisible = true;
    }

    render() {
        return html`
            <!-- <div class="icon"></div> -->
            <!-- <div class="image"></div> -->
            <div class="label">${this.label}</div>

            ${this.removable ? html`
                <div class="remove_icon" @click=${this.closeChip}>X</div>
            ` : null }
        `;
    }

    closeChip() {
        this.isVisible = false;
        this.toggleAttribute('hidden', !this.isVisible);
    }

    static styles = [
        defaultCss,
        unsafeCSS(commonCss),
        css`
            :host {
                display: inline-flex;
                background: #eee;
                border-radius: 16px;
                padding: 0.5rem 0.75rem;
                align-items: center;
                gap: 0.5rem;
            }

            :host([hidden]) {
                display: none;
            }

            .label {
                color: #444;
                font-size: 14px;
            }

            .remove_icon {
                border: solid 1px #444;
                border-radius: 50%;
                font-size: 8px;
                padding: 0.15rem 0.25rem;
                cursor: pointer;
                user-select: none;
            }
        `
    ]
    
}

if(!customElements.get('pi-chip')) { customElements.define('pi-chip', PiChip); }