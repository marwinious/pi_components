import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-menu-hamburger-rounded',
    className: 'PiIconMenuHamburgerRounded'
}

export class PiIconMenuHamburgerRounded extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
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

// if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconMenuHamburgerRounded); }