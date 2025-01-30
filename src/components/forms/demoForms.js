import { LitElement, css, html } from 'lit'
import { CodeDisplaySample } from '../samples/codeSampleDisplay';
import { PiDemoContainer } from '../samples/demoContainer';
import { PiCard } from '../cards/components/card';
import { PiForm } from './form';
import { PiTextInput } from '../inputs';

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
                        .code=${[]}
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
