import { LitElement, css, html } from 'lit'
import defaultCss from '../../../css/defaultCss';

export class PiNavDrawer extends LitElement {

    static get properties() {
        return {
            showDrawer: { type: Boolean, reflect: true }
        }
    }

    constructor() {
        super()
        this.showDrawer = false;
    }

    render() {
        return html`
            <div class="close_container">
                <span @click="${this.closeDrawer}">x</span>
            </div>

            <div class="content_container">
                <slot>Demo Slot</slot>
            </div>
        `;
    }

    closeDrawer() {
        this.showDrawer = false;
    }

    openDrawer() {
        this.showDrawer = true;
    }

    toggleDrawer() {
        this.showDrawer = !this.showDrawer;
    }

    static styles = [
        defaultCss,
        css`
            :host {
                box-sizing: border-box;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1000;
                height: 100%;
                width: 256px;
                min-width: 256px;
                transform: translateX(-260px);
                transition: all 0.25s ease-in-out;
                background: #FFF;
                box-shadow: 1px 1px 2px #666;
                padding: 1.2rem;
            }

            :host([showDrawer]) {
                transform: translateX(0px);
            }

            .close_container {
                box-sizing: border-box;
                position: absolute;
                top: 0px;
                right: 0px;
                cursor: pointer;
                font-size: 1.4rem;
                user-select: none;
                padding: 0.2rem 0.40rem;
            }
        `
    ]
    
}

if(!customElements.get('pi-nav-drawer')) { customElements.define('pi-nav-drawer', PiNavDrawer); }