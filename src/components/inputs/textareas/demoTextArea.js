import { LitElement, css, html } from 'lit'
import { CodeDisplaySample } from '../../samples/codeSampleDisplay';
import { 
    basicTextAreaSample, 
} from './codeSamples/textAreaCodeSamples';
import { PiDemoContainer } from '../../samples/demoContainer';
import { PiCard } from '../../cards/components/card';
import { PiTextAreaInput } from './textAreaInput';

export class PiDemoTextArea extends LitElement {

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
                        <div slot="title">Basic Textarea</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-text-area-input
                                name="shortBio"
                                ></pi-text-area-input>
                            </div>
                        </div>

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[0] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[0]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${basicTextAreaSample}
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
customElements.define('pi-demo-text-area', PiDemoTextArea);
