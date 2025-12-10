import { html } from "lit";
import { register } from "../../registerWebComp";
import { action } from '@storybook/addon-actions'
import { ifDefined } from "lit/directives/if-defined.js";
import { PiNavMenu } from "../../components/nav/components/navMenu";

register('pi-nav-menu-test', PiNavMenu)

const menuData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Products",
        href: "/products",
        children: [
            // Sub-level 1
            { label: "Software", href: "/products/software" },
            {
                label: "Hardware",
                href: "/products/hardware",
                children: [
                    // Sub-level 2
                    { label: "Drivers", href: "/drivers" },
                    { label: "Documentation", href: "/docs" },
                ],
            },
        ],
    },
    {
        label: "Contact",
        href: "/contact",
    },
]

export default {
    title: 'Components/Navigation/Nav Menu',
    component: 'pi-nav-menu-test',
    tags: ['autodocs'],
    argTypes: {
        vertical: { 
            control: 'boolean', 
            name: 'vertical',
            description: 'Changes to vertical menu',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
    },
    args: {
        vertical: false,
    }
}

const Template = ({ vertical }) => html`
    <pi-nav-menu-test
    .items=${menuData}
    ?vertical=${vertical}
    ></pi-nav-menu-test>
`;

export const Default = Template.bind();
Default.args = {}