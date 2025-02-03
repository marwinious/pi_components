import { LitElement, css, html } from 'lit'

export class PiGridColumn extends LitElement {

    static get properties() {
        return {
            cols: { type: Number }
        }
    }

    constructor() {
        super()
        this.cols = 1;
    }

    render() {
        this.style.gridColumn = `span ${this.cols}`;

        return html`
            <slot></slot>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ]
    
}
customElements.define('pi-col', PiGridColumn);
