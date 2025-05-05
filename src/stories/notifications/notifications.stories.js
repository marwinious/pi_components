import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { PiNotifications } from "../../components/notifications/components/notifications";

export default {
    title: 'Components/Notifications',
    component: 'pi-notifications',
    tags: ['autodocs'],
    argTypes: {
        title: { 
            control: 'text', 
            name: 'Title',
            description: 'Title for notification',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        message: { 
            control: 'text', 
            name: 'Message',
            description: 'Message text of notification',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        severity: { 
            control: 'select' , 
            options: ['', 'primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger'],
            description: 'Applies icon/colors of severity to notification',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'none'}
            }
        },
        position: { 
            control: 'select' , 
            options: ['', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'top', 'bottom'],
            description: 'Applies icon/colors of severity to notification',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'top-right'}
            }
        },
        offset: { 
            control: {
                type: 'number',
                min: 0,
                max: 1000,
                step: 1
            },
            description: 'Top position offset of notification',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '0'}
            }
        },
        icon: { 
            control: 'text', 
            name: 'Icon',
            description: 'Specific icon for notification (overrides severity)',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        closeIcon: { 
            control: 'text', 
            name: 'Close Icon',
            description: 'Specific close icon for notification (overrides severity)',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        autoCloseDuration: { 
            control: 'boolean',
            description: 'Duration notification is visible (0 = until closed)',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: '5000'}
            }
        },
    },
    args: {
        title: 'Title text',
        message: 'Message text',
        severity: '',
        position: 'top-right',
        offset: 0,
        icon: '',
        closeIcon: '',
        autoCloseDuration: 5000
    }
}

const triggerAlert = () => {
    const notifications = document.querySelector('pi-notifications');
    
    notifications.create({
        title: 'Title text',
        message: 'Message text',
        severity: 'primary',
        position: 'top-right',
        offset: 0,
        icon: '',
        closeIcon: '',
        autoCloseDuration: 5000
    });
}

const Template = ({ title, message, severity, position, offset, icon, closeIcon, autoCloseDuration }) => html`
    <pi-notifications></pi-notifications>

    <button
    type="button"
    @click=${() => triggerAlert()}
    >Trigger Alert</button>
`;

export const Default = Template.bind();
Default.args = {
    
}
