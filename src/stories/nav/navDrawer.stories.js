import { html } from "lit";
import { action } from '@storybook/addon-actions'
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiNavDrawer } from "../../components/nav/components/navDrawer";

export default {
    title: 'Components/Navigation/Nav Drawer',
    component: 'pi-nav-drawer',
    tags: ['autodocs'],
    argTypes: {
        contents: {
            control: 'text', 
            name: 'content slot (optional)',
            description: 'Slot for content',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            }
        },
    },
    args: {
        contents: 'Nav drawer contents',
    }
}

const toggleDrawer = () => {
    const drawer = document.querySelector('pi-nav-drawer');
    
    drawer.toggleDrawer();
}

const Template = ({ contents }) => html`
    <button @click=${() => toggleDrawer()}>Toggle Drawer</button>

    <pi-nav-drawer
    contents=${ifDefined(contents != '' ? contents : undefined)}
    ?showDrawer=${false}
    ></pi-nav-drawer>
`;

export const Default = Template.bind();
Default.args = {}