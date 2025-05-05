import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/notifications/index'


export default {
    title: 'Components/Notifications',
    component: 'pi-notifications',
    tags: ['autodocs'],
    argTypes: {
        slotContent: { 
            control: 'text', 
            name: 'content slot',
            description: 'Main content area',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
    },
    args: {
        
    }
}

const Template = ({ slotContent }) => html`
    
`;

export const Default = Template.bind();
Default.args = {
    
}
