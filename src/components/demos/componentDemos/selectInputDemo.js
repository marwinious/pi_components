import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicSelectSample,
    optionsSelectSample,
    preSelectedSelectSample,
    disabledSelectSample
} from '../codeSamples/selectInputCodeSamples';
import { PiSelectInput } from '../../inputs';

export class PiSelectInputDemo extends LitElement {

    static get properties() {
        return {
            child: { type: Object }
        }
    }

    constructor() {
        super()
        this.child = {}

        this.sampleData = [
            { name: 'Alice', age: 30, country: 'USA', income: '$100,000', rawIncome: '100000' },
            { name: 'Bob', age: 25, country: 'UK', income: '$50,000', rawIncome: '50000' },
            { name: 'Charlie', age: 35, country: 'Canada', income: '$200,000', rawIncome: '200000' },
            { name: 'David', age: 32, country: 'Spain', income: '$70,000', rawIncome: '70000' },
            { name: 'Edward', age: 27, country: 'New Zealand', income: '$150,000', rawIncome: '150000' },
        ]
    }

    firstUpdated() {
        this.child = this.shadowRoot.querySelectorAll('pi-feature-example-container')
    }

    render() {
        return html`
            <pi-feature-demo-container 
            label="Select Inputs"
            >

                <pi-feature-example-container
                title="Basic Select"
                .sampleCode=${basicSelectSample}
                >

                    <pi-select-input
                    .options="${this.sampleData}"
                    labelKey="country"
                    valueKey="country"
                    name="basic_select"
                    @change="${(e) => this.child[0].handleCallbackData(e.detail)}"
                    ></pi-select-input>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="With options"
                .sampleCode=${optionsSelectSample}
                >

                    <pi-select-input
                    .options="${this.sampleData}"
                    labelKey="country"
                    valueKey="income"
                    name="options_select"
                    defaultText="Pick something"
                    @change="${(e) => this.child[1].handleCallbackData(e.detail)}"
                    ></pi-select-input>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Pre-selected Value"
                .sampleCode=${preSelectedSelectSample}
                >

                    <pi-select-input
                    .options="${this.sampleData}"
                    labelKey="country"
                    valueKey="income"
                    name="preset_select"
                    defaultText="Pick something"
                    .selectedObject="${this.sampleData[2]}"
                    @change="${(e) => this.child[2].handleCallbackData(e.detail)}"
                    ></pi-select-input>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Disabled"
                .sampleCode=${disabledSelectSample}
                >

                    <pi-select-input
                    .options="${this.sampleData}"
                    labelKey="country"
                    valueKey="income"
                    name="disabled_select"
                    .selectedObject="${this.sampleData[1]}"
                    disabled
                    @change="${(e) => this.child[3].handleCallbackData(e.detail)}"
                    ></pi-select-input>

                </pi-feature-example-container>

            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-select-input-demo', PiSelectInputDemo);
