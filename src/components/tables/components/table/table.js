import { LitElement, css, html } from 'lit'

export class PiTable extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <table><slot></slot></table>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                overflow-x: auto;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                text-align: left;
                white-space: nowrap;
            }
        `
    ]
    
}
customElements.define('pi-table', PiTable);
