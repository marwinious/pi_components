import { LitElement, css, html } from 'lit'
import { CodeDisplaySample } from '../../samples/codeSampleDisplay';
import { 
    basicTextInputSample,
    optionsTextInputSample,
    presetTextInputSample,
} from './codeSamples/textInputCodeSamples';
import { PiDemoContainer } from '../../samples/demoContainer';
import { PiCard } from '../../cards/components/card';
import { TextInput } from './textInput';

export class PiDemoTextInputs extends LitElement {

    static get properties() {
        return {
            textInput1: { type: String, attribute: false },
            textInput2: { type: String, attribute: false },
            textInput3: { type: String, attribute: false },
            textInput4: { type: String, attribute: false },
            textInput5: { type: String, attribute: false },
            textInput6: { type: String, attribute: false },
        }
    }

    constructor() {
        super();
        this.textInput1 = '';
        this.textInput2 = '';
        this.textInput3 = '';
        this.textInput4 = '';
        this.textInput5 = '';
        this.textInput6 = '';
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

                    <pi-card>
                        <div slot="title">With options</div>

                        <div class="demoFlexContainer">
                            <div>
                                <pi-text-input 
                                placeholder="Type something here"
                                @inputChanged="${(e) => this.handleInput2(e.detail)}"
                                >
                                    Field label sample
                                </pi-text-input>
                            </div>
                            <div>
                                ${this.textInput2 != '' ? html`
                                    <strong>Captured input:</strong> ${this.textInput2}
                                ` : null }
                            </div>
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
                                value="Hello world!"
                                @inputChanged="${(e) => this.handleInput3(e.detail)}"
                                ></pi-text-input>
                            </div>
                            <div>
                                ${this.textInput3 != '' ? html`
                                    <strong>Captured input:</strong> ${this.textInput3}
                                ` : null }
                            </div>
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
                                placeholder="You can't type here"
                                disabled
                                @inputChanged="${(e) => this.handleInput3(e.detail)}"
                                ></pi-text-input>
                            </div>
                            <div>
                                ${this.textInput3 != '' ? html`
                                    <strong>Captured input:</strong> ${this.textInput3}
                                ` : null }
                            </div>
                        </div>

                        <code-display-sample
                        .code=${presetTextInputSample}
                        ></code-display-sample>
                        
                    </pi-card>

                </div>

            </pi-demo-container>

        `;
    }

    handleInput1(newInput) { this.textInput1 = newInput }
    handleInput2(newInput) { this.textInput2 = newInput }
    handleInput3(newInput) { this.textInput3 = newInput }
    handleInput4(newInput) { this.textInput4 = newInput }
    handleInput5(newInput) { this.textInput5 = newInput }
    handleInput6(newInput) { this.textInput6 = newInput }

    static styles = [
        css`
            .demoFlexContainer {
                display: flex;
                justify-content:space-around;
                align-items: center;
            }
        `
    ]
    
}
customElements.define('pi-demo-text-inputs', PiDemoTextInputs);
