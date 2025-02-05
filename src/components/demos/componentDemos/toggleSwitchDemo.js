import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicSwitchSample,
    presetSwitchSample
} from '../codeSamples/toggleSwitchCodeSamples';
import { PiToggleSwitch } from '../../inputs';

export class PiToggleSwitchDemo extends LitElement {

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
            label="Toggle Switches"
            >

                <pi-feature-example-container
                title="Basic Switch"
                .sampleCode=${basicSwitchSample}
                >

                    <pi-toggle-switch 
                    name="basic_switch"
                    @change="${(e) => this.child[0].handleCallbackData(e.detail)}"
                    ></pi-toggle-switch>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Preset Value"
                .sampleCode=${presetSwitchSample}
                >

                    <pi-toggle-switch 
                    name="preset_switch"
                    checked
                    @change="${(e) => this.child[1].handleCallbackData(e.detail)}"
                    ></pi-toggle-switch>

                </pi-feature-example-container>

            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-toggle-switch-demo', PiToggleSwitchDemo);
