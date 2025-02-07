import { html } from "lit";
import { action } from '@storybook/addon-actions'
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiCheckboxInput } from "../../components/inputs/checkboxes/checkboxInput";

export default {
    title: 'Components/Inputs/Checkbox',
    component: 'pi-checkbox-input',
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
            description: 'Toggled on or off (true or false)',
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
        label: 'Check me out',
        checked: false,
        disabled: false
    }
}

const Template = ({ label, checked, disabled }) => html`
    <pi-checkbox-input
    name="piCheckbox"
    label=${ifDefined(label != '' ? label : undefined)}
    ?checked=${checked}
    ?disabled=${disabled}
    @change=${(e) => action('Text input changed')(e.detail)}
    ></pi-checkbox-input>
`;

export const Default = Template.bind();
Default.args = {}

export const Checked = Template.bind();
Checked.args = {
    checked: true
}

export const Disabled = Template.bind();
Disabled.args = {
    disabled: true
}
