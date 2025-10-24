import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-menu-hamburger-corners-thick',
    className: 'PiIconMenuHamburgerCornersThick'
}

export class PiIconMenuHamburgerCornersThick extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
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

// if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconMenuHamburgerCornersThick); }