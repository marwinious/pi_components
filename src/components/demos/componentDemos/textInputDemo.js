import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicTextInputSample,
    optionsTextInputSample,
    presetTextInputSample,
} from '../../inputs/text/codeSamples/textInputCodeSamples';
import { PiTextInput } from '../../inputs';

export class PiTextInputDemo extends LitElement {

    static get properties() {
        return {
            child: { type: Object }
        }
    }

    constructor() {
        super()
        this.child = {}
    }

    firstUpdated() {
        this.child = this.shadowRoot.querySelectorAll('pi-feature-example-container')
    }

    render() {
        return html`
            <pi-feature-demo-container 
            label="Text Inputs"
            >

                <pi-feature-example-container
                title="Basic Text Field"
                .sampleCode=${basicTextInputSample}
                >

                    <pi-text-input 
                    name="basic_text_field" 
                    @change="${(e) => this.child[0].handleCallbackData(e.detail)}"
                    ></pi-text-input>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="With options"
                .sampleCode=${optionsTextInputSample}
                >

                    <pi-text-input 
                    name="options_text_field"
                    placeholder="Type something here"
                    @change="${(e) => this.child[1].handleCallbackData(e.detail)}"
                    >
                        Field label sample
                    </pi-text-input>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="With preset value"
                .sampleCode=${presetTextInputSample}
                >

                    <pi-text-input 
                    name="preset_text_field"
                    value="Hello world!"
                    @change="${(e) => this.child[2].handleCallbackData(e.detail)}"
                    ></pi-text-input>

                </pi-feature-example-container>

            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-text-input-demo', PiTextInputDemo);
