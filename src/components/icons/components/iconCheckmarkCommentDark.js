import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-checkmark-comment-dark',
    className: 'PiIconCheckmarkCommentDark'
}

export class PiIconCheckmarkCommentDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M24 1v16.981h-13l-7 5.02v-5.02h-4v-16.981h24zm-6 5.285l-6.622 7.715-4.378-3.852 1.319-1.489 2.879 2.519 5.327-6.178 1.475 1.285z"
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}

if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconCheckmarkCommentDark); }