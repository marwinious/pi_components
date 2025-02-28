import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-paper-stack-fancy-dark',
    className: 'PiIconPaperStackFancyDark'
}

export class PiIconPaperStackFancyDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M15.602 4.075c2.201 1.174 4.904 3.254 6.398 5.252-1.286-.9-3.011-1.027-5.058-.549.222-1.469-.185-3.535-1.34-4.703zm-.825 6.925s1.522-7-3.335-7h-5.442v20h16v-10.629c0-3.42-4.214-3.116-7.223-2.371zm-.318-8l-1.459-1h-9v20h1v-19h9.459zm-2.443-2l-1.5-1h-8.516v20h1v-19h9.016z"
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

if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconPaperStackFancyDark); }