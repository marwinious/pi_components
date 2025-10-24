import { html } from "lit";
import { register } from "../../registerWebComp";
import { action } from '@storybook/addon-actions'
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiToggleSwitch } from "../../components/inputs/switches/toggleSwitch";

register('pi-toggle-switch', PiToggleSwitch)

export default {
    title: 'Components/Inputs/Toggle Switch',
    component: 'pi-toggle-switch',
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
        label: '',
        checked: false,
        disabled: false
    }
}

const Template = ({ label, checked, disabled }) => html`
    <pi-toggle-switch
    name="piToggleSwitch"
    label=${ifDefined(label != '' ? label : undefined)}
    ?checked=${checked}
    ?disabled=${disabled}
    @change=${(e) => action('Switch toggled')(e.detail)}
    ></pi-toggle-switch>
`;

export const Default = Template.bind();
Default.args = {}

export const Label = Template.bind();
Label.args = {
    label: 'Enable something'
}

export const Checked = Template.bind();
Checked.args = {
    label: 'Pre-selected to "on"',
    checked: true
}

export const Disabled = Template.bind();
Disabled.args = {
    disabled: true
}
