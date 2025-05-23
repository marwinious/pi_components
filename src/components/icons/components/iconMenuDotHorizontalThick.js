import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-menu-dot-horizontal-thick',
    className: 'PiIconMenuDotHorizontalThick'
}

export class PiIconMenuDotHorizontalThick extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "m16.5 11.998c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25c0 1.241-1.008 2.25-2.25 2.25s-2.25-1.009-2.25-2.25zm1.5 0c0-.414.336-.75.75-.75s.75.336.75.75-.336.75-.75.75-.75-.336-.75-.75zm-8.25 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25c0 1.241-1.008 2.25-2.25 2.25s-2.25-1.009-2.25-2.25zm1.5 0c0-.414.336-.75.75-.75s.75.336.75.75-.336.75-.75.75-.75-.336-.75-.75zm-8.25 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25c0 1.241-1.008 2.25-2.25 2.25s-2.25-1.009-2.25-2.25zm1.5 0c0-.414.336-.75.75-.75s.75.336.75.75-.336.75-.75.75-.75-.336-.75-.75z"
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

if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconMenuDotHorizontalThick); }