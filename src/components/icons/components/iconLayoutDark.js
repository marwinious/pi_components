import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-layout-dark',
    className: 'PiIconLayoutDark'
}

export class PiIconLayoutDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "m11 3h-7c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h7zm10 9.4h-8.6v8.6h7.6c.478 0 1-.379 1-1zm-8.6-9.4v8h8.6v-7c0-.478-.379-1-1-1z"
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

// if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconLayoutDark); }