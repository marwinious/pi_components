import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicRadioInputSample,
    preselectedRadioInputSample
} from '../codeSamples/radioInputCodeSamples';
import { PiRadioInput } from '../../inputs';

export class PiRadioInputDemo extends LitElement {

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
            label="Radio Inputs"
            >

                <pi-feature-example-container
                title="Basic Radio Button"
                .sampleCode=${basicRadioInputSample}
                >

                    <pi-radio-input
                    name="ageRange"
                    label="18-24"
                    value="18_24"
                    @change="${(e) => this.child[0].handleCallbackData(e.detail)}"
                    ></pi-radio-input>
                    <pi-radio-input
                    name="ageRange"
                    label="25-29"
                    value="25_29"
                    @change="${(e) => this.child[0].handleCallbackData(e.detail)}"
                    ></pi-radio-input>
                    <pi-radio-input
                    name="ageRange"
                    label="30-35"
                    value="30_35"
                    @change="${(e) => this.child[0].handleCallbackData(e.detail)}"
                    ></pi-radio-input>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Pre-selected"
                .sampleCode=${preselectedRadioInputSample}
                >

                    <pi-radio-input
                    name="ageRange2"
                    label="18-24"
                    value="18_24"
                    @change="${(e) => this.child[1].handleCallbackData(e.detail)}"
                    ></pi-radio-input>
                    <pi-radio-input
                    name="ageRange2"
                    label="25-29"
                    value="25_29"
                    checked
                    @change="${(e) => this.child[1].handleCallbackData(e.detail)}"
                    ></pi-radio-input>
                    <pi-radio-input
                    name="ageRange2"
                    label="30-35"
                    value="30_35"
                    @change="${(e) => this.child[1].handleCallbackData(e.detail)}"
                    ></pi-radio-input>

                </pi-feature-example-container>

            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-radio-input-demo', PiRadioInputDemo);
