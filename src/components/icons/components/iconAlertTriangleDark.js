import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'icon-alert-triangle-dark',
    className: 'IconAlertTriangleDark'
}

export class IconAlertTriangleDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"
    }

    render() {
        return html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData.iconLabel, IconAlertTriangleDark);

