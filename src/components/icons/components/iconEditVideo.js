import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'icon-edit-video',
    className: 'IconEditVideo'
}

export class IconEditVideo extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M4 5v18h20v-18h-20zm4 16h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm10 12h-8v-6h8v6zm0-8h-8v-6h8v6zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm-1-6h-19v17h-2v-19h21v2z"
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
customElements.define(iconData.iconLabel, IconEditVideo);

