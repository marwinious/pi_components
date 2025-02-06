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
            name: 'button text' 
        },
        variant: { 
            control: 'select', 
            options: ['', 'text', 'outlined', 'iconOnly'],
            description: ''
        },
        severity: { 
            control: 'select' , 
            options: ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger'] 
        },
        raised: { 
            control: 'boolean'
        },
        rounded: { 
            control: 'boolean'
        },
        badge: { 
            control: {
                type: 'number',
                min: 0,
                max: 10,
                step: 1
            } 
        },
        icon: { 
            control: 'select',
            options: ['', 'alert-triangle-light', 'gear-solid', 'info-filled']
        }
    }
}

const Template = ({ slotContent, variant, severity, raised, rounded, badge, icon }) => html`
    <pi-button 
    variant="${variant}" 
    severity="${severity}" 
    ?raised=${raised}
    ?rounded=${rounded}
    badge=${ifDefined(badge > 0 ? badge : undefined)}
    icon=${ifDefined(icon != '' ? icon : undefined)}
    >${slotContent}</pi-button>
`;

export const Default = Template.bind();
Default.args = {
    slotContent: 'Button'
}

export const Severities = Template.bind();
Severities.args = {
    slotContent: 'Severity',
    severity: 'primary'
}