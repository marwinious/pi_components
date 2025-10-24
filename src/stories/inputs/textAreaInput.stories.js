import { html } from "lit";
import { register } from "../../registerWebComp";
import { action } from '@storybook/addon-actions'
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiTextAreaInput } from "../../components/inputs/textareas/textAreaInput";

register('pi-text-area-input', PiTextAreaInput)

export default {
    title: 'Components/Inputs/Textarea',
    component: 'pi-text-area-input',
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
        label: '',
        placeholder: '',
        value: '',
        disabled: false
    }
}

const Template = ({ label, placeholder, value, disabled }) => html`
    <pi-text-area-input
    name="piTextArea"
    label=${ifDefined(label != '' ? label : undefined)}
    placeholder=${ifDefined(placeholder != '' ? placeholder : undefined)}
    value=${ifDefined(value != '' ? value : undefined)}
    ?disabled=${disabled}
    @change=${(e) => action('Text changed')(e.detail)}
    ></pi-text-area-input>
`;

export const Default = Template.bind();
Default.args = {}

export const Label = Template.bind();
Label.args = {
    label: 'Short bio'
}

export const Placeholder = Template.bind();
Placeholder.args = {
    placeholder: 'Summarize your interests...'
}

export const Value = Template.bind();
Value.args = {
    value: 'I love walking on the beach, but I hate those seagulls.'
}

export const Disabled = Template.bind();
Disabled.args = {
    disabled: true
}