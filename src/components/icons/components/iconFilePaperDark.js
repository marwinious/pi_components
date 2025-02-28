import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-file-paper-dark',
    className: 'PiIconFilePaperDark'
}

export class PiIconFilePaperDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm.256 11h-8v-1h8v1zm4-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z"
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

if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconFilePaperDark); }