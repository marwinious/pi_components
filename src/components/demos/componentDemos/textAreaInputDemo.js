import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicTextAreaSample, 
    optionsTextAreaSample,
    disabledTextAreaSample
} from '../codeSamples/textAreaCodeSamples';
import { PiTextAreaInput } from '../../inputs';

export class PiTextAreaInputDemo extends LitElement {

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
            label="Textarea Inputs"
            >

                <pi-feature-example-container
                title="Basic Textarea"
                .sampleCode=${basicTextAreaSample}
                >

                    <pi-text-area-input
                    name="shortBio"
                    @change="${(e) => this.child[0].handleCallbackData(e.detail)}"
                    ></pi-text-area-input>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="With Options"
                .sampleCode=${optionsTextAreaSample}
                >

                    <pi-text-area-input
                    name="summary"
                    label="Summary"
                    placeholder="Summarize your interests here"
                    @change="${(e) => this.child[1].handleCallbackData(e.detail)}"
                    ></pi-text-area-input>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Disabled"
                .sampleCode=${disabledTextAreaSample}
                >

                    <pi-text-area-input
                    name="aboutYou"
                    label="About You"
                    disabled
                    @change="${(e) => this.child[2].handleCallbackData(e.detail)}"
                    ></pi-text-area-input>

                </pi-feature-example-container>

            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-textarea-input-demo', PiTextAreaInputDemo);
