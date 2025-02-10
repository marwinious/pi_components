import { html } from "lit";
import { action } from '@storybook/addon-actions'
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiForm } from "../../components/forms/form";
import { PiFormGroup } from "../../components/forms/formGroup";
import { PiGrid } from "../../components/grid/components/gridContainer";
import { PiGridColumn } from "../../components/grid/components/gridColumn";
import { PiGridRow } from "../../components/grid/components/gridRow";
import { PiTextInput } from "../../main";
import { PiTextAreaInput } from "../../main";
import { PiSelectInput } from "../../main";
import { PiCheckboxInput } from "../../main";
import { PiRadioInput } from "../../main";
import { PiToggleSwitch } from "../../main";
import { PiButton } from "../../main";

const sampleData = [
    { name: 'Alice', age: 30, country: 'USA', income: '$100,000', rawIncome: '100000' },
    { name: 'Bob', age: 25, country: 'UK', income: '$50,000', rawIncome: '50000' },
    { name: 'Charlie', age: 35, country: 'Canada', income: '$200,000', rawIncome: '200000' },
    { name: 'David', age: 32, country: 'Spain', income: '$70,000', rawIncome: '70000' },
    { name: 'Edward', age: 27, country: 'New Zealand', income: '$150,000', rawIncome: '150000' },
]

export default {
    title: 'Components/Forms',
    component: 'pi-form',
    tags: ['autodocs'],
    argTypes: {
        
    },
    args: {
        
    }
}

const Template = ({}) => html`
    <pi-form
    @formSubmitted=${(e) => action('Form submitted')(e.detail)}
    @formDataUpdated=${(e) => action('Form data changed')(e.detail)}
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
`;

const TemplateGroups = ({}) => html`
    <pi-form
    @formSubmitted=${(e) => action('Form submitted')(e.detail)}
    @formDataUpdated=${(e) => action('Form data changed')(e.detail)}
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
`;

const TemplateMultiInputs = ({}) => html`
    <pi-form
    @formSubmitted=${(e) => action('Form submitted')(e.detail)}
    @formDataUpdated=${(e) => action('Form data changed')(e.detail)}
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
                    .options="${sampleData}"
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
                    <div>
                        <pi-toggle-switch
                        name="enableAlerts"
                        label="Enable Alerts"
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
`;

export const Default = Template.bind();
Default.args = {
    
}

export const Groups = TemplateGroups.bind();
Groups.args = {
    
}

export const MultiInputs = TemplateMultiInputs.bind();
MultiInputs.args = {
    
}