import { html } from "lit";
import { register } from "../../registerWebComp";
import { ifDefined } from "lit/directives/if-defined.js";
// import '../../components/icons/index'
import { PiIconBase } from "pi_icons/components/components/icons/base/iconBase";
import { PiIconHandler } from "pi_icons/components/components/icons/base/iconHandler";
import { PiIconAlertTriangleLight } from "pi_icons/components/components/icons/components/alerts/iconAlertTriangleLight"
import { PiIconGearSolid } from "pi_icons/components/components/icons/components/gears/iconGearSolid";
import { PiIconInfoFilled } from "pi_icons/components/components/icons/components/info/iconInfoFilled";
import { PiButton } from '../../components/buttons/button'
import '../../index.css'

register('pi-icon-base', PiIconBase)
register('pi-icon-handler', PiIconHandler)
register('pi-button', PiButton)
register('pi-icon-alert-triangle-light', PiIconAlertTriangleLight)
register('pi-icon-gear-solid', PiIconGearSolid)
register('pi-icon-info-filled', PiIconInfoFilled)

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
            options: ['', 'primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger'],
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
        squared: { 
            control: 'boolean',
            description: 'Squares the corners of the button',
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
        },
        fullWidth: {
            control: 'boolean',
            description: 'Makes the button as wide as its container',
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

const Template = ({ slotContent, variant, severity, raised, rounded, squared, badge, icon, disabled, fullWidth }) => html`
    <pi-button 
    variant="${variant}" 
    severity="${severity}" 
    ?raised=${raised}
    ?rounded=${rounded}
    ?squared=${squared}
    ?disabled=${disabled}
    ?fullWidth=${fullWidth}
    badge=${ifDefined(badge > 0 ? badge : undefined)}
    icon=${ifDefined(icon != '' ? icon : undefined)}
    >
        ${slotContent}

        ${icon != '' ? html`
            
                <pi-icon-handler icon="${icon}" slot="icon"></pi-icon-handler>
            
        ` : null}
    </pi-button>
`;

export const Default = Template.bind();
Default.args = {
    slotContent: 'Button'
}

export const FullWidth = Template.bind();
FullWidth.args = {
    slotContent: 'Button',
    fullWidth: true
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

export const Squared = Template.bind();
Squared.args = {
    slotContent: 'Squared',
    squared: true
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