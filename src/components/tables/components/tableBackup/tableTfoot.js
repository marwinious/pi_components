import { LitElement, css, html } from 'lit'

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
            <div class="table_tfoot"><slot></slot></div>
        `;
    }

    static styles = [
        css`
            :host {
                display: table-footer-group;
                
            }

            .table_tfoot {
                display: block;
                padding: 0.5rem 0 0.5rem 0;
            }
        `
    ]
    
}
customElements.define('pi-table-tfoot', PiTableTfoot);
