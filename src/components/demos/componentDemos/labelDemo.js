import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicLabelSample,
    optionsLabelSample
} from '../codeSamples/labelCodeSamples';
import { PiLabel } from '../../labels/components/label';

export class PiLabelDemo extends LitElement {

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
                title="Basic Label"
                .sampleCode=${basicLabelSample}
                >

                    <pi-label text="Hello world!"></pi-label>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="With options"
                .sampleCode=${optionsLabelSample}
                >

                    <pi-label text="Hello world!" block no-padding no-margin></pi-label>

                </pi-feature-example-container>


            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-label-demo', PiLabelDemo);
