import { LitElement, css, html, unsafeCSS } from 'lit'
import commonCss from '../../css/common.css?inline'
import { classMap } from 'lit/directives/class-map.js';
import severityCss from './css/buttonSeverityCss'
import variantCss from './css/buttonVariantCss'
import iconsCss from './css/buttonIconsCss'
import badgeCss from './css/buttonBadgeCss'
import { PiIconHandler } from '../icons';
import { PiBadge } from '../badges/badge';

// commonCss = css`${unsafeCSS(commonCss)}`;

export class PiButton extends LitElement {

    static get properties() {
        return {
            disabled: { type: Boolean },
            icon: { type: String },
            severity: { type: String },
            raised: { type: Boolean },
            rounded: { type: Boolean },
            squared: { type: Boolean },
            variant: { type: String },
            badge: { type: [Number, String] },
            type: { type: String }
        }
    }

    constructor() {
        super()
        this.disabled = false;
        this.icon = '';
        this.severity = '';
        this.raised = false;
        this.rounded = false;
        this.squared = false;
        this.variant = false;
        this.badge = null;
        this.type = 'button';
    }

    /* <div class="icon">${unsafeHTML(this.icon)}</div> */

    render() {

        const buttonClasses = {
            [`btn_severity_${this.severity}`]: true,
            [`btn_variant_${this.variant}`]: true,
            'raised': this.raised === true,
            'rounded': this.rounded === true,
            'squared': this.squared === true,
        }

        return html`
            <button 
            type=${this.type}
            class=${classMap(buttonClasses)}
            ?disabled=${this.disabled}
            @click=${this._handleClick}
            >

                <span class="button_content_container">
                    <!-- Optional icon -->
                    <span class="button_icon_container">
                        <pi-icon-handler .icon=${this.icon}></pi-icon-handler>
                    </span>

                    <!-- Button text -->
                    ${this.variant != 'iconOnly' ? html`
                        <slot></slot>
                    ` : null}
                    

                    <!-- Optional Badge -->
                    <pi-badge>${this.badge}</pi-badge>
                </span>
                
            </button>
        `;
    }

    _handleClick(e) {
        if (this.type !== 'submit') { // Only handle clicks for non-submit buttons
            this.dispatchEvent(new CustomEvent('click', { 
                detail: e
            }));
        }
        else {
            this.dispatchEvent(new CustomEvent('pi-submit', { 
                detail: e,
                composed: true,
                bubbles: true
            }));
        }
    }

    static styles = [
        severityCss,
        variantCss,
        iconsCss,
        badgeCss,
        unsafeCSS(commonCss),
        css`
            :host {
                display: inline-flex;
                align-items: flex-start;
                justify-content: center;
            }

            button {
                display: block;
                height: 100%;
                width: 100%;
                padding: 0;
                border-radius: var(--pi-button-border-radius, 5px);
                font-weight: var(--pi-button-font-weight, bold);
                font-size: var(--pi-button-font-size, 16px);
                cursor: var(--pi-button-cursor, pointer);
                user-select: none; 
                transition: background-color 0.2s ease, border 0.2s ease, color 0.2s ease;
                background: var(--pi-button-bg-color, #333);
                border: var(--pi-button-border, solid 1px #333);
                color: var(--pi-button-text-color, #FFF);

                &:hover {
                    background: var(--pi-button-hover-bg-color, #666);
                    border-color: var(--pi-button-hover-border-color, #666);
                    color: var(--pi-button-hover-text-color, #FFF);
                }

                &:active {
                    background: var(--pi-button-active-bg-color, #FFF);
                    color: var(--pi-button-active-text-color, #000);
                    border-color: var(--pi-button-active-border-color, #000);
                }

                &:disabled, &[disabled] {
                    background: var(--pi-button-disabled-bg-color, #bbb);
                    border-color: var(--pi-button-disabled-border-color, #bbb);
                    color: var(--pi-button-disabled-text-color, #fff);
                    cursor: not-allowed;
                    pointer-events: none;
                }
            }

            .button_content_container {
                display: flex;
                align-items: center;
                gap: 0;
                padding: var(--pi-button-padding, 7px 12px);
            }

            :host([icon]:not([variant="iconOnly"])) .button_content_container,
            :host([badge]:not([variant="iconOnly"])) .button_content_container {
                gap: 5px;
            }

            :host([icon][variant="iconOnly"]) .button_content_container {
                padding: 0.5rem;
            }

            :host([icon][variant="iconOnly"][rounded]) .button_content_container {
                padding: 0.14rem;
            }

            .button_icon_container {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 0;
                height: var(--pi-button-icon-height, 15px);
                fill: var(--pi-button-icon-fill-color, #FFF);
            }

            :host([icon]) .button_icon_container {
                width: var(--pi-button-icon-width, 15px);
            }

            pi-badge { 
                display: none;
            }

            :host([badge]) pi-badge {
                display: inline-flex;
            }

        `
    ]
    
}
customElements.define('pi-button', PiButton);
