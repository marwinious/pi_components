import { LitElement, css, html } from 'lit'
import { CodeDisplaySample } from '../../samples/codeSampleDisplay';
import { 
    basicTextInputSample,
    optionsTextInputSample,
    presetTextInputSample,
} from './codeSamples/textInputCodeSamples';
import { PiDemoContainer } from '../../samples/demoContainer';
import { PiCard } from '../../cards/components/card';
import { PiTextInput } from './textInput';

export class PiDemoTextInputs extends LitElement {

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
            title="Text Inputs"
            >

                <div>

                    <pi-card>
                        <div slot="title">Basic Text Field</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-text-input name="basic_text_field" @change="${(e) => this.handleInput(e.detail, 0)}"></pi-text-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[0] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[0]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${basicTextInputSample}
                        ></code-display-sample>
                        
                    </pi-card>

                    <pi-card>
                        <div slot="title">With options</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-text-input 
                                name="options_text_field"
                                placeholder="Type something here"
                                @change="${(e) => this.handleInput(e.detail, 1)}"
                                >
                                    Field label sample
                                </pi-text-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[1] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[1]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${optionsTextInputSample}
                        ></code-display-sample>
                        
                    </pi-card>

                    <pi-card>
                        <div slot="title">With preset value</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-text-input 
                                name="preset_text_field"
                                value="Hello world!"
                                @change="${(e) => this.handleInput(e.detail, 2)}"
                                ></pi-text-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[2] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[2]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${presetTextInputSample}
                        ></code-display-sample>
                        
                    </pi-card>

                    <pi-card>
                        <div slot="title">Disabled</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-text-input 
                                name="disabled_text_field"
                                placeholder="You can't type here"
                                disabled
                                @change="${(e) => this.handleInput(e.detail, 3)}"
                                ></pi-text-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[3] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[3]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${presetTextInputSample}
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
customElements.define('pi-demo-text-inputs', PiDemoTextInputs);
