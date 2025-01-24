import { LitElement, css, html } from 'lit'
import { PiDemoContainer } from '../samples/demoContainer';
import { PiPaginator } from './components/paginator';

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

                    <h5>Basic paginator</h5>
                    <pi-paginator rows=10 totalRecords=100></pi-paginator>

                    <h5>Event handling</h5>
                    <p style="text-align: center;">Pager button click value: ${JSON.stringify(this.demoEvent, null, 2)}</p>
                    <pi-paginator rows=10 totalRecords=100 @navClick="${(e) => this.handlePagerNavClick(e)}"></pi-paginator>

                    <h5>Numbers-only paginator</h5>
                    <pi-paginator rows=10 totalRecords=100 .useStartEndLinks=${false} .useNextPrevLinks=${false}></pi-paginator>

                    <h5>Next/Prev only paginator</h5>
                    <pi-paginator rows=10 totalRecords=100 .useStartEndLinks=${false} .useNextPrevLinks=${true} .useNumericLinks=${false}></pi-paginator>

                    <h5>Start/End only paginator</h5>
                    <pi-paginator rows=10 totalRecords=100 .useStartEndLinks=${true} .useNextPrevLinks=${false} .useNumericLinks=${false}></pi-paginator>

                </div>

            </pi-demo-container>

        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-paginators', PiDemoPaginators);
