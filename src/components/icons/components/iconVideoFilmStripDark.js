import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-video-film-strip-dark',
    className: 'PiIconVideoFilmStripDark'
}

export class PiIconVideoFilmStripDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M22 1v2h-2v-2h-2v4h-12v-4h-2v2h-2v-2h-2v22h2v-2h2v2h2v-4h12v4h2v-2h2v2h2v-22h-2zm-18 18h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm6 8v-6l5 3-5 3zm12 4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"
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

if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconVideoFilmStripDark); }