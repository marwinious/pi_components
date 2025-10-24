import { LitElement, css, html } from 'lit'
import { register } from '../../../registerWebComp';
import { PiNotificationCenter } from './notificationCenter';

register('pi-notification-center', PiNotificationCenter)

export class PiNotifications extends LitElement {

    static get properties() {
        return {
            notificationCenter: { type: Object },
        }
    }

    constructor() {
        super()
        this.notificationCenter = null;

        // Init
        this.initNotifications();

        this.severityMap = {
            'primary': {
                icon: 'flag-wavy-dark',
                color: 'var(--pi-severity-bg-color-primary, #117ab4)'
            },
            'secondary': {
                icon: 'star-dark',
                color: 'var(--pi-severity-bg-color-secondary, #ccc)'
            },
            'success': {
                icon: 'thumbs-up-dark',
                color: 'var(--pi-severity-bg-color-success, #208c39)'
            },
            'info': {
                icon: 'info-sample-dark',
                color: 'var(--pi-severity-bg-color-info, #17A2B9)'
            },
            'warn': {
                icon: 'alert-triangle-dark',
                color: 'var(--pi-severity-bg-color-warn, #d28809)'
            },
            'help': {
                icon: 'globe-dark',
                color: 'var(--pi-severity-bg-color-help, #A855F8)'
            },
            'danger': {
                icon: 'stop-ex-dark',
                color: 'var(--pi-severity-bg-color-danger, #F04544)'
            },
        }
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    initNotifications() {
        // Create notification center if doesn't exist
        if(!document.querySelector('pi-notification-center')) {
            const notificationCenter = document.createElement('pi-notification-center');
            document.body.appendChild(notificationCenter);
        }

        this.notificationCenter = document.querySelector('pi-notification-center');
    }

    create(notificationData) {
        const finalNotificationData = this.finalizeNotificationData(notificationData);
        // console.log({notificationData});
        // console.log({finalNotificationData});

        document.querySelector('pi-notification-center').addNotification(finalNotificationData);
    }

    finalizeNotificationData(data) {
        // Check for severity
        if(typeof data.severity != 'undefined' && typeof this.severityMap[data.severity] != 'undefined') {
            // console.log('made it to the first check');
            
            // Only do something if no custom icon has been specified
            if(data.icon == '' || typeof data.icon == 'undefined') {
                // console.log('made it to the second check');
                
                data.icon = this.severityMap[data.severity].icon;
                data.iconColor = this.severityMap[data.severity].color;
            }
        }

        return data;
    }

    render() {
        return html`
            
        `;
    }

    static styles = [
        css`

        `
    ]
    
}

// if(!customElements.get('pi-notifications')) { customElements.define('pi-notifications', PiNotifications); }