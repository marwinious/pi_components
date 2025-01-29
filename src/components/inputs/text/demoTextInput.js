import { LitElement, css, html } from 'lit'
import { CodeDisplaySample } from '../../samples/codeSampleDisplay';
import { 
    basicTextInputSample,
} from './codeSamples/textInputCodeSamples';
import { PiDemoContainer } from '../../samples/demoContainer';
import { PiCard } from '../../cards/components/card';
import { TextInput } from './textInput';

export class PiDemoTextInputs extends LitElement {

    static get properties() {
        return {
            textInput1: { type: String, attribute: false }
        }
    }

    constructor() {
        super();
        this.textInput1 = '';
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
                                <pi-text-input @inputChanged="${(e) => this.handleInput1(e.detail)}"></pi-text-input>
                            </div>
                            <div>
                                ${this.textInput1 != '' ? html`
                                    <strong>Captured input:</strong> ${this.textInput1}
                                ` : null }
                            </div>
                        </div>

                        <code-display-sample
                        .code=${basicTextInputSample}
                        ></code-display-sample>
                        
                    </pi-card>

                </div>

            </pi-demo-container>

        `;
    }

    handleInput1(newInput) { this.textInput1 = newInput }

    static styles = [
        css`
            .demoFlexContainer {
                display: flex;
                justify-content:space-around
            }
        `
    ]
    
}
customElements.define('pi-demo-text-inputs', PiDemoTextInputs);
