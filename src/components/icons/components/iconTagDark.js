import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-tag-dark',
    className: 'PiIconTagDark'
}

export class PiIconTagDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M10.605 0h-10.605v10.609l13.391 13.391 10.609-10.604-13.395-13.396zm-4.191 6.414c-.781.781-2.046.781-2.829.001-.781-.783-.781-2.048 0-2.829.782-.782 2.048-.781 2.829-.001.782.782.781 2.047 0 2.829z"
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}

if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconTagDark); }