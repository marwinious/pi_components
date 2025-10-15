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
                            <pi-icon-handler icon="menu-hamburger-rounded"></pi-icon-handler>
                        </div>
                    ` : null}
                </slot>
            </div>

            <div class="header_content">
                <div class="header_title">
                    ${this.title}
                </div>
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
                gap: 1.2rem;
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
                width: 25px;
                height: 25px;
                cursor: pointer;
                border-radius: 50%;
                padding: 5px;
                transition: all 0.25s ease-in-out;
                fill: var(--pi-header-bar-nav-icon-color, #333);

                &:hover {
                    background: var(--pi-header-bar-nav-icon-hover-bg-color, rgba(0,0,0,0.1));
                    fill: var(--pi-header-bar-nav-icon-hover-color, #333);
                }
            }

            .header_content {
                font-size: var(--pi-header-bar-content-font-size, 1.4rem);
                flex-grow: 1;
                color: var(--pi-header-bar-content-text-color, #333);
            }
        `
    ]
    
}

// if(!customElements.get('pi-header-bar')) { customElements.define('pi-header-bar', PiHeaderBar); }