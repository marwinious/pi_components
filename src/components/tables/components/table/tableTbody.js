import { LitElement, css, html } from 'lit'

export class PiTableTbody extends LitElement {

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
                display: table-row-group;

                &.striped {
                    tr:nth-child(even) {
                        background-color: #eee;
                    }

                    tr:nth-child(odd) {
                        background-color: #fff;
                    }
                }
            }
        `
    ]
    
}
customElements.define('pi-table-tbody', PiTableTbody);
