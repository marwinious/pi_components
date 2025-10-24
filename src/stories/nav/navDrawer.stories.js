import { html } from "lit";
import { register } from "../../registerWebComp";
import { action } from '@storybook/addon-actions'
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiNavDrawer } from "../../components/nav/components/navDrawer";

register('pi-nav-drawer', PiNavDrawer)

export default {
    title: 'Components/Navigation/Nav Drawer',
    component: 'pi-nav-drawer',
    tags: ['autodocs'],
    argTypes: {
        contents: {
            control: 'text', 
            name: 'content slot',
            description: 'Slot for content',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            }
        },
    },
    args: {
        contents: '',
    }
}

const toggleDrawer = () => {
    const drawer = document.querySelector('pi-nav-drawer');
    
    drawer.toggleDrawer();
}

const Template = ({ contents }) => html`
    <button @click=${() => toggleDrawer()}>Toggle Drawer</button>

    <pi-nav-drawer
    ?showDrawer=${false}
    >${contents}</pi-nav-drawer>
`;

export const Default = Template.bind();
Default.args = {}