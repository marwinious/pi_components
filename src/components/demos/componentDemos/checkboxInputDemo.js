import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicCheckboxSample,
    labeledCheckboxSample,
    presetCheckboxSample
} from '../codeSamples/checkboxInputCodeSamples';
import { PiCheckboxInput } from '../../inputs';

export class PiCheckboxInputDemo extends LitElement {

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
            label="Checkbox Inputs"
            >

                <pi-feature-example-container
                title="Basic Checkbox"
                .sampleCode=${basicCheckboxSample}
                >

                    <pi-checkbox-input
                    name="basic_checkbox"
                    @change="${(e) => this.child[0].handleCallbackData(e.detail)}"
                    ></pi-checkbox-input>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Labeled Checkbox"
                .sampleCode=${labeledCheckboxSample}
                >

                    <pi-checkbox-input
                    name="labeled_checkbox"
                    label="Check me"
                    @change="${(e) => this.child[1].handleCallbackData(e.detail)}"
                    ></pi-checkbox-input>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Preset Checkbox"
                .sampleCode=${presetCheckboxSample}
                >

                    <pi-checkbox-input
                    name="preset_checkbox"
                    label="On by default"
                    checked
                    @change="${(e) => this.child[2].handleCallbackData(e.detail)}"
                    ></pi-checkbox-input>

                </pi-feature-example-container>

            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-checkbox-input-demo', PiCheckboxInputDemo);
