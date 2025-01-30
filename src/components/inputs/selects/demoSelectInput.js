import { LitElement, css, html } from 'lit'
import { CodeDisplaySample } from '../../samples/codeSampleDisplay';
import { 
    basicSelectSample,
    optionsSelectSample,
    preSelectedSelectSample,
    disabledSelectSample
} from './codeSamples/selectInputCodeSamples';
import { PiDemoContainer } from '../../samples/demoContainer';
import { PiCard } from '../../cards/components/card';
import { PiSelectInput } from './selectInput';

export class PiDemoSelectInputs extends LitElement {

    static get properties() {
        return {
            capturedInputs: { type: Array, attribute: false },
        }
    }

    constructor() {
        super();
        this.capturedInputs = [];

        this.sampleData = [
            { name: 'Alice', age: 30, country: 'USA', income: '$100,000', rawIncome: '100000' },
            { name: 'Bob', age: 25, country: 'UK', income: '$50,000', rawIncome: '50000' },
            { name: 'Charlie', age: 35, country: 'Canada', income: '$200,000', rawIncome: '200000' },
            { name: 'David', age: 32, country: 'Spain', income: '$70,000', rawIncome: '70000' },
            { name: 'Edward', age: 27, country: 'New Zealand', income: '$150,000', rawIncome: '150000' },
        ]
    }

    render() {
        return html`

            <pi-demo-container
            title="Select Inputs"
            >

                <div>

                    <pi-card>
                        <div slot="title">Basic Select</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-select-input
                                .options="${this.sampleData}"
                                labelKey="country"
                                valueKey="income"
                                @selectionChanged="${(e) => this.handleInput(e.detail.selectedItem, 0)}"
                                ></pi-select-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[0] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[0]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${basicSelectSample}
                        ></code-display-sample>
                        
                    </pi-card>

                    <pi-card>
                        <div slot="title">With options</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-select-input
                                .options="${this.sampleData}"
                                labelKey="country"
                                valueKey="income"
                                defaultText="Pick something"
                                @selectionChanged="${(e) => this.handleInput(e.detail.selectedItem, 1)}"
                                ></pi-select-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[1] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[1]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${optionsSelectSample}
                        ></code-display-sample>
                        
                    </pi-card>

                    <pi-card>
                        <div slot="title">Pre-selected Value</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-select-input
                                .options="${this.sampleData}"
                                labelKey="country"
                                valueKey="income"
                                defaultText="Pick something"
                                .selectedObject="${this.sampleData[2]}"
                                @selectionChanged="${(e) => this.handleInput(e.detail.selectedItem, 2)}"
                                ></pi-select-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[2] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[2]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${preSelectedSelectSample}
                        ></code-display-sample>
                        
                    </pi-card>

                    <pi-card>
                        <div slot="title">Disabled</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-select-input
                                .options="${this.sampleData}"
                                labelKey="country"
                                valueKey="income"
                                .selectedObject="${this.sampleData[1]}"
                                disabled
                                @selectionChanged="${(e) => this.handleInput(e.detail.selectedItem, 3)}"
                                ></pi-select-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[3] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[3]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${disabledSelectSample}
                        ></code-display-sample>
                        
                    </pi-card>

                </div>

            </pi-demo-container>

        `;
    }

    handleInput(newInput, captureIndex) {
        this.capturedInputs[captureIndex] = JSON.stringify(newInput, null, 2);
        this.requestUpdate();
    }

    static styles = [
        css`
            .demoFlexContainer {
                display: flex;
                justify-content:space-around;
                align-items: center;
            }

            .demoCapturedInput {
                margin-top: 1rem;
            }
        `
    ]
    
}
customElements.define('pi-demo-select-inputs', PiDemoSelectInputs);
