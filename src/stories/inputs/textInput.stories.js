import { html } from "lit";
import { action } from '@storybook/addon-actions'
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiTextInput } from "../../main";

export default {
    title: 'Components/Inputs/Text',
    component: 'pi-text-input',
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
        placeholder: {
            control: 'text', 
            name: 'placeholder (optional)',
            description: 'Hint for input',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            }
        },
        value: {
            control: 'text', 
            name: 'value (optional)',
            description: 'Initial value for field',
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
        }
    },
    args: {
        placeholder: '',
        label: '',
        value: '',
        disabled: false
    }
}

const Template = ({ label, placeholder, value, disabled }) => html`
    <pi-text-input 
    name="basic_text_field"
    label=${ifDefined(label != '' ? label : undefined)}
    placeholder=${ifDefined(placeholder != '' ? placeholder : undefined)}
    value=${ifDefined(value != '' ? value : undefined)}
    ?disabled=${disabled}
    @change=${(e) => action('Text input changed')(e.detail)}
    ></pi-text-input>
`;

export const Default = Template.bind();
Default.args = {}

export const Label = Template.bind();
Label.args = {
    label: 'First Name'
}

export const Placeholder = Template.bind();
Placeholder.args = {
    placeholder: 'Type here to start'
}

export const Value = Template.bind();
Value.args = {
    value: 'John Doe'
}

export const Disabled = Template.bind();
Disabled.args = {
    disabled: true
}