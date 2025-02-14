import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'icon-toggle-on',
    className: 'IconToggleOn'
}

export class IconToggleOn extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M6 18h12c3.311 0 6-2.689 6-6s-2.689-6-6-6h-12.039c-3.293.021-5.961 2.701-5.961 6 0 3.311 2.688 6 6 6zm12-10c-2.208 0-4 1.792-4 4s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4z"
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
customElements.define(iconData.iconLabel, IconToggleOn);

