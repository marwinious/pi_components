import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-toggle-off',
    className: 'PiIconToggleOff'
}

export class PiIconToggleOff extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M18 18h-12c-3.311 0-6-2.689-6-6s2.689-6 6-6h12.039c3.293.021 5.961 2.701 5.961 6 0 3.311-2.688 6-6 6zm-12-10c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z"
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`

        `
    ]
}
customElements.define(iconData.iconLabel, PiIconToggleOff);

