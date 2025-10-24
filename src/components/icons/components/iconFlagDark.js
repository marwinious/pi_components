import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-flag-dark',
    className: 'PiIconFlagDark'
}

export class PiIconFlagDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M4 24h-2v-24h2v24zm18-22h-16v12h16l-4-5.969 4-6.031z"
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}

// if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconFlagDark); }