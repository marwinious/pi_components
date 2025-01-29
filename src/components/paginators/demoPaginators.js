import { LitElement, css, html } from 'lit'
import { PiDemoContainer } from '../samples/demoContainer';
import { PiPaginator } from './components/paginator';
import { PiCard } from '../cards/components/card';

export class PiDemoPaginators extends LitElement {

    static get properties() {
        return {
            demoEvent: { type: Object }
        }
    }

    /*
    TODO: Find a way to make code sample work
    */

    constructor() {
        super()
    }

    handlePagerNavClick(e) {
        this.demoEvent = e.detail;
    }

    render() {
        return html`

            <pi-demo-container
            title="Paginators"
            >

                <div>
                    
                    <pi-card>
                        <div slot="title">Basic paginator</div>
                        <pi-paginator rows=10 totalRecords=100></pi-paginator>
                    </pi-card>

                    <pi-card>
                        <div slot="title">Event handling</div>
                        <div slot="footer">Pager button click value: ${JSON.stringify(this.demoEvent, null, 2)}</div>
                        <pi-paginator rows=10 totalRecords=100 @navClick="${(e) => this.handlePagerNavClick(e)}"></pi-paginator>
                    </pi-card>

                    <pi-card>
                        <div slot="title">Numbers-only paginator</div>
                        <pi-paginator rows=10 totalRecords=100 .useStartEndLinks=${false} .useNextPrevLinks=${false}></pi-paginator>
                    </pi-card>

                    <pi-card>
                        <div slot="title">Next/Prev only paginator</div>
                        <pi-paginator rows=10 totalRecords=100 .useStartEndLinks=${false} .useNextPrevLinks=${true} .useNumericLinks=${false}></pi-paginator>
                    </pi-card>

                    <pi-card>
                        <div slot="title">Start/End only paginator</div>
                        <pi-paginator rows=10 totalRecords=100 .useStartEndLinks=${true} .useNextPrevLinks=${false} .useNumericLinks=${false}></pi-paginator>
                    </pi-card>

                </div>

            </pi-demo-container>

        `;
    }

    static styles = [
        css`
            .section_title {
                font-size: 20px;
                color: #555;
            }

            [slot="footer"] {
                display: block;
                background: #eee;
                padding: 1rem;
            }
        `
    ]
    
}
customElements.define('pi-demo-paginators', PiDemoPaginators);
