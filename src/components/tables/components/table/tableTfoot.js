import { LitElement, css, html } from 'lit'
import { PiTableTr } from './tableTr';
import { PiTableTd } from './tableTd';

export class PiTableTfoot extends LitElement {

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
                display: table-footer-group;
                
            }

            /* .table_tfoot {
                display: block;
                padding: 0.5rem 0 0.5rem 0;
            } */
        `
    ]
    
}
customElements.define('pi-table-tfoot', PiTableTfoot);
