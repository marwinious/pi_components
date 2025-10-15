import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-layout-light',
    className: 'PiIconLayoutLight'
}

export class PiIconLayoutLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-10 .5v15h-6.5v-15zm1.5 8h7v7h-7zm7-8v6.5h-7v-6.5z"
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}

// if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconLayoutLight); }