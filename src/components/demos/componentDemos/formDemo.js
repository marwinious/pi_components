import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicFormSample,
    customSubmitFormSample,
    groupFormSample,
    multiInputFormSample,
} from '../codeSamples/formCodeSamples';
import { PiForm } from '../../forms/form';
import { PiFormGroup } from '../../forms/formGroup';
import { PiTextInput } from '../../inputs';
import { PiGrid } from '../../grid/components/gridContainer';
import { PiGridRow } from '../../grid/components/gridRow';
import { PiGridColumn } from '../../grid/components/gridColumn';
import { PiButton } from '../../buttons';
import { PiSelectInput } from '../../inputs';
import { PiCheckboxInput } from '../../inputs';
import { PiRadioInput } from '../../inputs';
import { PiRadioInputGroup } from '../../inputs/radios/radioInputGroup';
import { PiToggleSwitch } from '../../inputs';
import { PiTextAreaInput } from '../../inputs';

export class PiFormDemo extends LitElement {

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

    submitFormById(e, formId) {
        this.shadowRoot.querySelector(`pi-form[id='${formId}']`)._handleSubmit(e)
    }

    render() {
        return html`
            <pi-feature-demo-container 
            label="Forms"
            >

                <pi-feature-example-container
                title="Basic Form"
                .sampleCode=${basicFormSample}
                >

                    <pi-form
                    @formSubmitted="${(e) => this.child[0].handleCallbackData(e.detail)}"
                    @formDataUpdated="${(e) => this.child[0].handleCallbackData(e.detail)}"
                    >

                        <pi-grid>
                            <pi-row>
                                <pi-col cols=3>
                                    <pi-text-input
                                    name="firstName"
                                    label="First Name"
                                    ></pi-text-input>
                                </pi-col>
                                <pi-col cols=3>
                                    <pi-text-input
                                    name="lastName"
                                    label="Last Name"
                                    ></pi-text-input>
                                </pi-col>
                            </pi-row>
                        </pi-grid>

                        <pi-button slot="submitButton" type="submit">Submit</pi-button>
                        
                    </pi-form>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Custom Submit"
                .sampleCode=${customSubmitFormSample}
                >

                    <pi-form
                    id="pi-form-1"
                    @formSubmitted="${(e) => this.child[1].handleCallbackData(e.detail)}"
                    @formDataUpdated="${(e) => this.child[1].handleCallbackData(e.detail)}"
                    >

                        <pi-grid>
                            <pi-row>
                                <pi-col cols=3>
                                    <pi-text-input
                                    name="firstName"
                                    label="First Name"
                                    ></pi-text-input>
                                </pi-col>
                                <pi-col cols=3>
                                    <pi-text-input
                                    name="lastName"
                                    label="Last Name"
                                    ></pi-text-input>
                                </pi-col>
                            </pi-row>
                        </pi-grid>

                        <pi-button slot="submitButton" @click="${(e) => this.submitFormById(e, 'pi-form-1')}">Submit</pi-button>
                        
                    </pi-form>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Form Groups"
                .sampleCode=${groupFormSample}
                >

                    <pi-form
                    @formSubmitted="${(e) => this.child[2].handleCallbackData(e.detail)}"
                    @formDataUpdated="${(e) => this.child[2].handleCallbackData(e.detail)}"
                    >

                        <pi-grid>
                            <pi-row>
                                <pi-col cols=3>
                                    <pi-form-group
                                    name="person"
                                    >
                                        <pi-text-input
                                        name="firstName"
                                        label="First Name"
                                        ></pi-text-input>
                                    </pi-form-group>
                                </pi-col>
                                <pi-col cols=3>
                                    <pi-form-group
                                    name="person"
                                    >
                                        <pi-text-input
                                        name="lastName"
                                        label="Last Name"
                                        ></pi-text-input>
                                    </pi-form-group>
                                </pi-col>
                            </pi-row>
                            <pi-row>
                                <pi-col cols=3>
                                    <pi-text-input
                                    name="company"
                                    label="Company"
                                    ></pi-text-input>
                                </pi-col>
                                <pi-col cols=3>
                                    <pi-text-input
                                    name="planet"
                                    label="Planet"
                                    ></pi-text-input>
                                </pi-col>
                            </pi-row>
                        </pi-grid>

                        <pi-button slot="submitButton" type="submit">Submit</pi-button>
                        
                    </pi-form>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Multiple Input Types"
                .sampleCode=${multiInputFormSample}
                >

                    <pi-form
                    @formSubmitted="${(e) => this.child[3].handleCallbackData(e.detail)}"
                    @formDataUpdated="${(e) => this.child[3].handleCallbackData(e.detail)}"
                    >

                        <pi-grid>
                            <pi-row>
                                <pi-col cols=3>
                                    <pi-form-group
                                    name="person"
                                    >
                                        <pi-text-input
                                        name="firstName"
                                        label="First Name"
                                        ></pi-text-input>
                                    </pi-form-group>
                                </pi-col>
                                <pi-col cols=3>
                                    <pi-form-group
                                    name="person"
                                    >
                                        <pi-text-input
                                        name="lastName"
                                        label="Last Name"
                                        ></pi-text-input>
                                    </pi-form-group>
                                </pi-col>
                            </pi-row>
                            <pi-row>
                                <pi-col cols=3>
                                    <pi-text-input
                                    name="company"
                                    label="Company"
                                    ></pi-text-input>
                                </pi-col>
                                <pi-col cols=3>
                                    <pi-select-input
                                    .options="${this.sampleData}"
                                    labelKey="country"
                                    valueKey="country"
                                    label="Country"
                                    name="country"
                                    ></pi-select-input>
                                </pi-col>
                            </pi-row>
                            <pi-row>
                                <pi-col cols=12>
                                    <pi-radio-input-group 
                                    label="Age Range"
                                    name="ageRange"
                                    >
                                        <pi-radio-input
                                        label="18-24"
                                        value="18_24"
                                        checked
                                        ></pi-radio-input>
                                        <pi-radio-input
                                        label="25-29"
                                        value="25_29"
                                        ></pi-radio-input>
                                        <pi-radio-input
                                        label="30-35"
                                        value="30_35"
                                        ></pi-radio-input>
                                    </pi-radio-input-group>
                                </pi-col>
                            </pi-row>
                            <pi-row>
                                <pi-col cols=12>
                                    <pi-checkbox-input
                                    name="subscribeNewsletter"
                                    label="Subscribe to our newsletter"
                                    ></pi-checkbox-input>
                                </pi-col>
                            </pi-row>
                            <pi-row>
                                <pi-col cols=12>
                                    <label>Enable Alerts</label>
                                    <div>
                                        <pi-toggle-switch
                                        name="enableAlerts"
                                        ></pi-toggle-switch>
                                    </div>
                                </pi-col>
                            </pi-row>
                            <pi-row>
                                <pi-col cols=6>
                                    <pi-text-area-input
                                    style="width: 100%"
                                    name="shortBio"
                                    label="Short Bio"
                                    ></pi-text-area-input>
                                </pi-col>
                            </pi-row>
                        </pi-grid>

                        <pi-button slot="submitButton" type="submit">Submit</pi-button>
                        
                    </pi-form>

                </pi-feature-example-container>

            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-form-demo', PiFormDemo);
