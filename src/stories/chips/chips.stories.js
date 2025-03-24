import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { PiChip } from "../../components/chips/components/chip";

export default {
    title: 'Components/Chips',
    component: 'pi-chip',
    tags: ['autodocs'],
    argTypes: {
        label: { 
            control: 'text', 
            name: 'label',
            description: 'Label for chip',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        removable: { 
            control: 'boolean', 
            name: 'Removable',
            description: 'Allows chip to be removed',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
    },
    args: {
        label: 'Chip label',
        removable: false
    }
}

const Template = ({ label, removable }) => html`
    <pi-chip 
    label=${label}
    ?removable=${removable}
    ></pi-chip>
`;

export const Default = Template.bind();
Default.args = {
    
}
