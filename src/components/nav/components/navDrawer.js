import { LitElement, css, html } from 'lit'

export class PiNavDrawer extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            
        `;
    }

    static styles = [
        css`
            :host {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1000;
                height: 100%;
                width: 256px;
                min-width: 256px;
                transform: translateX(-256px);
                transition: all 0.25s ease-in-out;
            }

            :host([showDrawer]) {
                transform: translateX(0px);
            }
        `
    ]
    
}

if(!customElements.get('pi-nav-drawer')) { customElements.define('pi-nav-drawer', PiNavDrawer); }