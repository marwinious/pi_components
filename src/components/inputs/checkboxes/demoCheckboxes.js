import { LitElement, css, html } from 'lit'
import { CodeDisplaySample } from '../../samples/codeSampleDisplay';
import { PiDemoContainer } from '../../samples/demoContainer';
import { PiCard } from '../../cards/components/card';
import { PiCheckboxInput } from './checkboxInput';

export class PiDemoCheckboxes extends LitElement {

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
            title="Checkbox Inputs"
            >

                <div>

                    <pi-card>
                        <div slot="title">Basic Checkbox</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-checkbox-input
                                name="basic_checkbox"
                                @change="${(e) => this.handleInput(e.detail, 0)}"
                                ></pi-checkbox-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[0] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[0]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${"test"}
                        ></code-display-sample>
                        
                    </pi-card>

                    <pi-card>
                        <div slot="title">Labeled Checkbox</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-checkbox-input
                                name="labeled_checkbox"
                                label="Check me"
                                @change="${(e) => this.handleInput(e.detail, 1)}"
                                ></pi-checkbox-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[1] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[1]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${"test"}
                        ></code-display-sample>
                        
                    </pi-card>

                    <pi-card>
                        <div slot="title">Preset Checkbox</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-checkbox-input
                                name="preset_checkbox"
                                label="On by default"
                                checked
                                @change="${(e) => this.handleInput(e.detail, 2)}"
                                ></pi-checkbox-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[2] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[2]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${"test"}
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
customElements.define('pi-demo-checkboxes', PiDemoCheckboxes);
