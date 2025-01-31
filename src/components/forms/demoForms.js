import { LitElement, css, html } from 'lit'
import { CodeDisplaySample } from '../samples/codeSampleDisplay';
import { PiDemoContainer } from '../samples/demoContainer';
import { PiCard } from '../cards/components/card';
import { PiForm } from './form';
import { PiTextInput } from '../inputs';
import { PiFormGroup } from './formGroup';

export class PiDemoForms extends LitElement {

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
            title="Forms"
            >

                <div>

                    <pi-card>
                        <div slot="title">Basic Form</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-form
                                @formSubmitted="${(e) => this.handleInput(e.detail, 0)}"
                                @formDataUpdated="${(e) => this.handleInput(e.detail.formData, 0)}"
                                >

                                    <pi-text-input
                                    name="firstName"
                                    label="First Name"
                                    ></pi-text-input>

                                </pi-form>
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
                        <div slot="title">Form Group</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-form
                                @formSubmitted="${(e) => this.handleInput(e.detail, 1)}"
                                @formDataUpdated="${(e) => this.handleInput(e.detail.formData, 1)}"
                                >

                                    <pi-form-group
                                    name="person"
                                    >                                    
                                        <pi-text-input
                                        name="firstName"
                                        label="First Name"
                                        ></pi-text-input>

                                        <pi-text-input
                                        name="lastName"
                                        label="Last Name"
                                        ></pi-text-input>
                                    </pi-form-group>

                                    <div>
                                        <pi-text-input
                                        name="house"
                                        label="Duplex"
                                        ></pi-text-input>
                                    </div>

                                    <pi-text-input
                                    name="car"
                                    label="Car"
                                    ></pi-text-input>

                                </pi-form>

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
customElements.define('pi-demo-forms', PiDemoForms);
