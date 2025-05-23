import { LitElement, css, html } from 'lit'

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
                    <div class="nav_icon">
                        <pi-icon-handler icon="menu-hamburger-rounded"></pi-icon-handler>
                    </div>
                </slot>
            </div>

            <div class="header_title">
                ${this.title}
            </div>

            <div class="append_container">
                <slot name="append"></slot>
            </div>
        `;
    }

    static styles = [
        css`
            :host {

            }
        `
    ]
    
}

if(!customElements.get('pi-header-bar')) { customElements.define('pi-header-bar', PiHeaderBar); }