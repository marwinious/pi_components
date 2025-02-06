import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiButton } from '../../components/buttons/button'
// import '../../index.css'

export default {
    title: 'Components/Button',
    component: 'pi-button',
    tags: ['autodocs'],
    argTypes: {
        slotContent: { 
            control: 'text', 
            name: 'button text',
            description: 'Text displayed on the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'none'}
            } 
        },
        variant: { 
            control: 'select', 
            options: ['', 'text', 'outlined', 'iconOnly'],
            description: 'Main display variations',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'none'}
            }
        },
        severity: { 
            control: 'select' , 
            options: ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger'],
            description: 'Colorized versions for various scenarios',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'none'}
            }
        },
        raised: { 
            control: 'boolean',
            description: 'Adds a shadow to "elevate" the button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false'}
            }
        },
        rounded: { 
            control: 'boolean',
            description: 'Rounds the corners of the button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false'}
            }
        },
        badge: { 
            control: {
                type: 'number',
                min: 0,
                max: 10,
                step: 1
            },
            description: 'Adds a number to the button representing a count',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'none'}
            }
        },
        icon: { 
            control: 'select',
            options: ['', 'alert-triangle-light', 'gear-solid', 'info-filled'],
            description: 'Adds a pi icon to the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'none'}
            }
        },
        disabled: {
            control: 'boolean',
            description: 'Disables click and hover events',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false'}
            }
        }
    },
/*     args: {
        variant: 'text'
    } */
}

const Template = ({ slotContent, variant, severity, raised, rounded, badge, icon, disabled }) => html`
    <pi-button 
    variant="${variant}" 
    severity="${severity}" 
    ?raised=${raised}
    ?rounded=${rounded}
    ?disabled=${disabled}
    badge=${ifDefined(badge > 0 ? badge : undefined)}
    icon=${ifDefined(icon != '' ? icon : undefined)}
    >${slotContent}</pi-button>
`;

export const Default = Template.bind();
Default.args = {
    slotContent: 'Button'
}

export const Severity = Template.bind();
Severity.args = {
    slotContent: 'Severity',
    severity: 'primary'
}

export const Rounded = Template.bind();
Rounded.args = {
    slotContent: 'Rounded',
    rounded: true
}

export const Outlined = Template.bind();
Outlined.args = {
    slotContent: 'Outlined',
    variant: 'outlined'
}

export const Raised = Template.bind();
Raised.args = {
    slotContent: 'Raised',
    raised: true
}

export const Badge = Template.bind();
Badge.args = {
    slotContent: 'Badge',
    badge: 2
}

export const WithIcon = Template.bind();
WithIcon.args = {
    slotContent: 'With Icon',
    icon: 'gear-solid'
}

export const IconOnly = Template.bind();
IconOnly.args = {
    slotContent: '',
    variant: 'iconOnly',
    icon: 'gear-solid'
}