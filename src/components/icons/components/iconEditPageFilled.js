import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'icon-edit-page-filled',
    className: 'IconEditPageFilled'
}

export class IconEditPageFilled extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.75c0-.414.336-.75.75-.75s.75.336.75.75v9.25c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm-2.011 6.526c-1.045 3.003-1.238 3.45-1.238 3.84 0 .441.385.626.627.626.272 0 1.108-.301 3.829-1.249zm.888-.889 3.22 3.22 8.408-8.4c.163-.163.245-.377.245-.592 0-.213-.082-.427-.245-.591-.58-.578-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245z"
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData.iconLabel, IconEditPageFilled);

