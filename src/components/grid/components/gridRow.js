import { LitElement, css, html } from 'lit'

export class PiGridRow extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    static styles = [
        css`
            :host {
                display: contents;
                width: 100%;
            }
        `
    ]
    
}
customElements.define('pi-row', PiGridRow);
