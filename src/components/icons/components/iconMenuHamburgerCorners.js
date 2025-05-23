import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-menu-hamburger-corners',
    className: 'PiIconMenuHamburgerCorners'
}

export class PiIconMenuHamburgerCorners extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}

if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconMenuHamburgerCorners); }