import { LitElement, css, html } from 'lit'
import { PiDemoContainer } from '../samples/demoContainer';
import { PiTable } from './components/table/table';
import { PiTableThead } from './components/table/tableThead';
import { PiTableTr } from './components/table/tableTr';
import { PiTableTh } from './components/table/tableTh';
import { PiTableTbody } from './components/table/tableTbody';
import { PiTableTd } from './components/table/tableTd';
import { PiTableTfoot } from './components/table/tableTfoot';

export class PiDemoTable extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <pi-demo-container
            title="Paginators"
            >

                <div>
                    
                    <pi-table>
                        <pi-table-thead>
                            <pi-table-tr>
                                <pi-table-th></pi-table-th>
                                <pi-table-th></pi-table-th>
                                <pi-table-th></pi-table-th>
                            </pi-table-tr>
                        </pi-table-thead>
                        <pi-table-tbody></pi-table-tbody>
                        <pi-table-tfoot></pi-table-tfoot>
                    </pi-table>

                </div>

            </pi-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-table', PiDemoTable);
