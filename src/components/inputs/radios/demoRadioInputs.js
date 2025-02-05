import { LitElement, css, html } from 'lit'
import { CodeDisplaySample } from '../../samples/codeSampleDisplay';
import { 
    basicRadioInputSample,
    preselectedRadioInputSample
} from './codeSamples/radioInputCodeSamples';
import { PiDemoContainer } from '../../samples/demoContainer';
import { PiCard } from '../../cards/components/card';
import { PiRadioInput } from './radioInput';

export class PiDemoRadioInputs extends LitElement {

    static get properties() {
        return {
            capturedInputs: { type: Array, attribute: false },
        }
    }

    constructor() {
        super();
        this.capturedInputs = [];
    }

    render() {
        return html`

            <pi-demo-container
            title="Radio Inputs"
            >

                <div>

                    <pi-card>
                        <div slot="title">Basic Radio Button</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-radio-input
                                name="ageRange"
                                label="18-24"
                                value="18_24"
                                @change="${(e) => this.handleInput(e.detail, 0)}"
                                ></pi-radio-input>
                                <pi-radio-input
                                name="ageRange"
                                label="25-29"
                                value="25_29"
                                @change="${(e) => this.handleInput(e.detail, 0)}"
                                ></pi-radio-input>
                                <pi-radio-input
                                name="ageRange"
                                label="30-35"
                                value="30_35"
                                @change="${(e) => this.handleInput(e.detail, 0)}"
                                ></pi-radio-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[0] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[0]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${basicRadioInputSample}
                        ></code-display-sample>
                        
                    </pi-card>

                    <pi-card>
                        <div slot="title">Pre-selected</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-radio-input
                                name="ageRange2"
                                label="18-24"
                                value="18_24"
                                @change="${(e) => this.handleInput(e.detail, 1)}"
                                ></pi-radio-input>
                                <pi-radio-input
                                name="ageRange2"
                                label="25-29"
                                value="25_29"
                                checked
                                @change="${(e) => this.handleInput(e.detail, 1)}"
                                ></pi-radio-input>
                                <pi-radio-input
                                name="ageRange2"
                                label="30-35"
                                value="30_35"
                                @change="${(e) => this.handleInput(e.detail, 1)}"
                                ></pi-radio-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[1] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[1]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${preselectedRadioInputSample}
                        ></code-display-sample>
                        
                    </pi-card>

                </div>

            </pi-demo-container>

        `;
    }

    handleInput(input, captureIndex) {
        this.capturedInputs[captureIndex] = JSON.stringify(input, null, 2);
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
customElements.define('pi-demo-radio-inputs', PiDemoRadioInputs);
