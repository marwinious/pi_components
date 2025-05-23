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
        title: {
            control: 'text', 
            name: 'title (optional)',
            description: 'Title for bar',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            }
        },
        sticky: { 
            control: 'boolean', 
            name: 'sticky (optional)',
            description: 'Enables sticky mode',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: ''}
            } 
        },
        showNavIcon: {
            control: 'boolean', 
            name: 'showNavIcon (optional)',
            description: 'Shows the nav icon at front of bar',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            }
        },
    },
    args: {
        title: 'Header Bar Title',
        sticky: false,
        showNavIcon: true
    }
}

const Template = ({ title, sticky, showNavIcon }) => html`
    <pi-header-bar
    title=${ifDefined(title != '' ? title : undefined)}
    ?sticky=${sticky}
    ?showNavIcon=${showNavIcon}
    ></pi-header-bar>
`;

export const Default = Template.bind();
Default.args = {}