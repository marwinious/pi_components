import { html } from "lit";
import { register } from "../../registerWebComp";
import { action } from '@storybook/addon-actions'
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiHeaderBar } from "../../components/headerBar";
import { PiIconHandler } from "pi_icons/components/components/icons/base/iconHandler";
import { PiIconMenuHamburgerRounded } from "pi_icons/components/components/icons/components/menus/iconMenuHamburgerRounded";

register('pi-icon-handler', PiIconHandler)
register('pi-icon-menu-hamburger-rounded', PiIconMenuHamburgerRounded)
register('pi-header-bar', PiHeaderBar)

export default {
    title: 'Components/Headers/Header Bar',
    component: 'pi-header-bar',
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
    >
        <pi-icon-handler icon="menu-hamburger-rounded" slot="menuIcon"></pi-icon-handler>
    </pi-header-bar>
`;

export const Default = Template.bind();
Default.args = {}