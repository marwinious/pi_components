import { html } from "lit";
import { register } from "../../registerWebComp";
import { action } from '@storybook/addon-actions'
import { ifDefined } from "lit/directives/if-defined.js";
import { PiSelectInput } from "../../components/inputs/selects/selectInput";

register('pi-select-input', PiSelectInput)

const sampleData = [
    { name: 'Alice', age: 30, country: 'USA', income: '$100,000', rawIncome: '100000' },
    { name: 'Bob', age: 25, country: 'UK', income: '$50,000', rawIncome: '50000' },
    { name: 'Charlie', age: 35, country: 'Canada', income: '$200,000', rawIncome: '200000' },
    { name: 'David', age: 32, country: 'Spain', income: '$70,000', rawIncome: '70000' },
    { name: 'Edward', age: 27, country: 'New Zealand', income: '$150,000', rawIncome: '150000' },
]

export default {
    title: 'Components/Inputs/Select',
    component: 'pi-select-input',
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text', 
            name: 'label (optional)',
            description: 'Label for the field',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            }
        },
        options: { 
            control: 'array', 
            name: 'options',
            description: 'Data array to populate options',
            table: {
                type: { summary: 'array' },
                defaultValue: { summary: ''}
            } 
        },
        labelKey: { 
            control: 'text', 
            name: 'labelKey',
            description: 'Key from objects in options array for select label',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        valueKey: { 
            control: 'text', 
            name: 'valueKey',
            description: 'Key from objects in options array for value of selected item',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        defaultText: { 
            control: 'text', 
            name: 'defaultText',
            description: 'Placeholder text for no selected items in select box',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        selectedObject: { 
            control: 'object', 
            name: 'selectedObject',
            description: 'Object from options array to auto-select from select',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        disabled: {
            control: 'boolean',
            description: 'Disables field',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false'}
            }
        },
        preventDefaultSelection: {
            control: 'boolean',
            description: 'Prevents initial default option from being re-selected',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false'}
            }
        },
    },
    args: {
        label: '',
        options: sampleData,
        disabled: false,
        selectedObject: '',
        labelKey: 'country',
        valueKey: 'country',
        preventDefaultSelection: false
    }
}



const Template = ({ label, options, labelKey, valueKey, defaultText, selectedObject, disabled, preventDefaultSelection }) => html`
    <pi-select-input
    name="piSelect"
    .options="${options}"
    label=${ifDefined(label != '' ? label : undefined)}
    labelKey=${ifDefined(labelKey != '' ? labelKey : undefined)}
    valueKey=${ifDefined(valueKey != '' ? valueKey : undefined)}
    defaultText=${ifDefined(defaultText != '' ? defaultText : undefined)}
    .selectedObject=${ifDefined(selectedObject != '' ? selectedObject : undefined)}
    ?disabled=${disabled}
    ?preventDefaultSelection=${preventDefaultSelection}
    @change=${(e) => action('Selection changed')(e.detail)}
    ></pi-select-input>
`;

export const Default = Template.bind();
Default.args = {}

export const Label = Template.bind();
Label.args = {
    label: 'Country'
}

export const Placeholder = Template.bind();
Placeholder.args = {
    label: 'Country',
    defaultText: 'Choose a country'
}

export const PreSelected = Template.bind();
PreSelected.args = {
    label: 'Country',
    defaultText: 'Choose a country',
    selectedObject: sampleData[2]
}

export const Disabled = Template.bind();
Disabled.args = {
    label: 'Country',
    defaultText: 'Choose a country',
    disabled: true
}