import { LitElement, css, html } from 'lit'
import defaultCss from '../../../css/defaultCss';

export class PiHeaderBar extends LitElement {

    static get properties() {
        return {
            sticky: { type: Boolean },
            showNavIcon: { type: Boolean },
            title: { type: String }
        }
    }

    constructor() {
        super()
        this.sticky = false;
        this.showNavIcon = false;
        this.title = "";
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    render() {
        return html`
            <div class="prepend_container">
                <slot name="prepend">
                    ${this.showNavIcon ? html`
                        <div 
                        class="nav_icon"
                        @click=${this.handleNavIconClick}
                        >
                            <slot name="menuIcon"></slot>
                        </div>
                    ` : null}
                </slot>
            </div>

            <div class="header_content">
                <div class="header_title">
                    <slot name="title">${this.title}</slot>
                </div>

                <slot name="headerContent"></slot>
            </div>

            <div class="append_container">
                <slot name="append"></slot>
            </div>
        `;
    }

    handleNavIconClick() {
        const clickEvent = new CustomEvent('navIconClick', {
            detail: false,
            bubbles: true,
            composed: true,
        });

        this.dispatchEvent(clickEvent);
    }

    static styles = [
        defaultCss,
        css`
            :host {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                /* border: solid 1px blue; */
                padding: var(--pi-header-bar-padding, 0.8rem);
                box-shadow: var(--pi-header-bar-box-shadow, 0px 1px 2px #666);
                gap: var(--pi-header-bar-gap, 1.2rem);
                background-color: var(--pi-header-bar-background-color, #fff);
                width: 100%;
                z-index: 9999;
            }

            :host([sticky]) {
                position: fixed;
                top: 0;
                left: 0;
            }

            .nav_icon {
                width: var(--pi-header-bar-nav-icon-width, 25px);
                height: var(--pi-header-bar-nav-icon-height, 25px);
                cursor: var(--pi-header-bar-nav-icon-cursor, pointer);
                border-radius: var(--pi-header-bar-nav-icon-border-radius, 50%);
                padding: var(--pi-header-bar-nav-icon-padding, 5px);
                transition: var(--pi-header-bar-nav-icon-transition, all 0.25s ease-in-out);
                fill: var(--pi-header-bar-nav-icon-color, #333);
                color: var(--pi-header-bar-nav-icon-color, #333);

                &:hover {
                    background: var(--pi-header-bar-nav-icon-hover-bg-color, rgba(0,0,0,0.1));
                    fill: var(--pi-header-bar-nav-icon-hover-color, #333);
                }
            }

            .header_content {
                display: flex;
                flex-direction: row;
                gap: var(--pi-header-bar-content-gap, 1rem);
                flex-grow: 1;
                align-items: var(--pi-header-bar-content-align-items, center);
            }

            .header_title,
            slot[name="headerContent"] {
                flex-shrink: 0;
            }

            .header_title {
                font-size: var(--pi-header-bar-title-font-size, 1.4rem);
                color: var(--pi-header-bar-title-text-color, #333);
                font-weight: var(--pi-header-bar-title-font-weight, normal);
            }

            slot[name="headerContent"] {
                color: var(--pi-header-bar-content-text-color, #333);
                font-size: var(--pi-header-bar-content-font-size, 1.0rem);
                font-weight: var(--pi-header-bar-content-font-weight, normal);
            }
        `
    ]
    
}

// if(!customElements.get('pi-header-bar')) { customElements.define('pi-header-bar', PiHeaderBar); }