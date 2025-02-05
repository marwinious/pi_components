import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicPaginatorSample,
    eventPaginatorSample,
    numbersPaginatorSample,
    nextPrevPaginatorSample,
    startEndPaginatorSample,
} from '../codeSamples/paginatorCodeSamples';
import { PiPaginator } from '../../paginators/components/paginator';

export class PiPaginatorDemo extends LitElement {

    static get properties() {
        return {
            child: { type: Object }
        }
    }

    constructor() {
        super()
        this.child = {}
    }

    firstUpdated() {
        this.child = this.shadowRoot.querySelectorAll('pi-feature-example-container')
    }

    render() {
        return html`
            <pi-feature-demo-container 
            label="Paginator"
            >

                <pi-feature-example-container
                title="Basic paginator"
                .sampleCode=${basicPaginatorSample}
                >

                    <pi-paginator rows=10 totalRecords=100></pi-paginator>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Event handling"
                .sampleCode=${eventPaginatorSample}
                >

                    <pi-paginator 
                    rows=10 
                    totalRecords=100
                    @navClick="${(e) => this.child[1].handleCallbackData(e.detail)}"
                    ></pi-paginator>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Numbers-only Nav"
                .sampleCode=${numbersPaginatorSample}
                >

                    <pi-paginator 
                    rows=10 
                    totalRecords=100
                    .useStartEndLinks=${false} 
                    .useNextPrevLinks=${false}
                    ></pi-paginator>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Next/Prev only Nav"
                .sampleCode=${nextPrevPaginatorSample}
                >

                    <pi-paginator 
                    rows=10 
                    totalRecords=100
                    .useStartEndLinks=${false} 
                    .useNextPrevLinks=${true} 
                    .useNumericLinks=${false}
                    ></pi-paginator>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Start/End only Nav"
                .sampleCode=${startEndPaginatorSample}
                >

                    <pi-paginator 
                    rows=10 
                    totalRecords=100
                    .useStartEndLinks=${true} 
                    .useNextPrevLinks=${false} 
                    .useNumericLinks=${false}
                    ></pi-paginator>

                </pi-feature-example-container>

            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-paginator-demo', PiPaginatorDemo);
