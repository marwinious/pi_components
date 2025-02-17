import { LitElement, css, html } from 'lit'
import { PiTableThead } from './tableThead';
import { PiTableTr } from './tableTr';
import { PiTableTh } from './tableTh';
import { PiTableTbody } from './tableTbody';
import { PiTableTd } from './tableTd';
import { PiTableTfoot } from './tableTfoot';

export class PiBaseTable extends LitElement {

    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
        }
    }

    constructor() {
        super()
        this.columns = [];
        this.rows = [];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    static styles = [
        css`
            :host {
                display: table;
                overflow-x: auto;
                width: 100%;
                border-collapse: collapse;
                text-align: left;
                white-space: nowrap;
            }
        `
    ]
    
}

if(!customElements.get('pi-base-table')) { customElements.define('pi-base-table', PiBaseTable); }