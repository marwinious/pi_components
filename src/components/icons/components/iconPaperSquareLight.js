import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-square-paper-light',
    className: 'PiIconSquarePaperLight'
}

export class PiIconSquarePaperLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M16 0h-14v24h20v-18l-6-6zm0 3l3 3h-3v-3zm-12 19v-20h10v6h6v14h-16z"
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

if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconSquarePaperLight); }