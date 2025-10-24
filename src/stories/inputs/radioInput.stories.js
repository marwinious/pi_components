import { html } from "lit";
import { register } from "../../registerWebComp";
import { action } from '@storybook/addon-actions'
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiRadioInput } from "../../components/inputs/radios/radioInput";
import { PiRadioInputGroup } from "../../components/inputs/radios/radioInputGroup";

register('pi-radio-input', PiRadioInput);
register('pi-radio-input-group', PiRadioInputGroup);

export default {
    title: 'Components/Inputs/Radio',
    component: 'pi-radio-input',
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text', 
            name: 'label (optional)',
            description: 'Label for the text field',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            }
        },
        checked: { 
            control: 'boolean', 
            name: 'checked',
            description: 'Show pre-selected radio option',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        disabled: {
            control: 'boolean', 
            name: 'disabled (optional)',
            description: 'Disables the field',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            }
        },
    },
    args: {
        label: '',
        checked: false,
        disabled: false
    }
}

const Template = ({ label, checked, disabled }) => html`
    <pi-radio-input-group
    name="ageRange"
    label=${ifDefined(label != '' ? label : undefined)}
    ?disabled=${disabled}
    @change=${(e) => action('Radio option selected')(e.detail)}
    >

        <pi-radio-input
        label="18-24"
        value="18_24"
        ></pi-radio-input>

        <pi-radio-input
        label="25-29"
        value="25_29"
        ?checked=${checked}
        ></pi-radio-input>

        <pi-radio-input
        label="30-35"
        value="30_35"
        ></pi-radio-input>

    </pi-radio-input-group>
`;

export const Default = Template.bind();
Default.args = {
    
}

export const Label = Template.bind();
Label.args = {
    label: 'Select an age range'
}

export const Checked = Template.bind();
Checked.args = {
    label: 'Pre-selected a radio item',
    checked: true
}

export const Disabled = Template.bind();
Disabled.args = {
    disabled: true
}