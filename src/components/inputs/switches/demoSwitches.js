import { LitElement, css, html } from 'lit'
import { CodeDisplaySample } from '../../samples/codeSampleDisplay';
import { PiDemoContainer } from '../../samples/demoContainer';
import { PiCard } from '../../cards/components/card';
import { PiToggleSwitch } from './toggleSwitch';

export class PiDemoToggleSwitches extends LitElement {

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
            title="Toggle Switches"
            >

                <div>

                    <pi-card>
                        <div slot="title">Basic Switch</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-toggle-switch 
                                @toggleChanged="${(e) => this.handleInput(e.detail.value, 0)}"
                                ></pi-toggle-switch>
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
                        <div slot="title">Preset Value</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-toggle-switch 
                                ?value="${true}"
                                @toggleChanged="${(e) => this.handleInput(e.detail.value, 1)}"
                                ></pi-toggle-switch>
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
customElements.define('pi-demo-toggle-switches', PiDemoToggleSwitches);
