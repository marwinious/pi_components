import { LitElement, css, html } from 'lit'

export class PiTableTr extends LitElement {

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
                display: table-row;
            }
        `
    ]
    
}

if(!customElements.get('pi-table-tr')) { customElements.define('pi-table-tr', PiTableTr); }