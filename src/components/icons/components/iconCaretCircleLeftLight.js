import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-caret-circle-left-light',
    className: 'PiIconCaretCircleLeftLight'
}

export class PiIconCaretCircleLeftLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-1.5 0c0 4.69-3.808 8.498-8.498 8.498s-8.497-3.808-8.497-8.498 3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497zm-6.711-4.845c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591zm-.289 7.564v-5.446l-3.522 2.718z"
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

if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconCaretCircleLeftLight); }