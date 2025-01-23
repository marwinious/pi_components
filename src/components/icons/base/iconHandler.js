import { LitElement, css, html } from 'lit'
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

export class IconHandler extends LitElement {

    static get properties() {
        return {
            icon: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.icon = '';
    }

    render() {
        return html`
            <div class="icon">${unsafeHTML('<icon-'+this.icon+'></icon-'+this.icon)}</div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }

            .icon {
                display: flex;
                overflow: hidden;
                height: 100%;

                * {
                    height: 100%;
                }
            }
        `
    ]
}
customElements.define('icon-handler', IconHandler);
