import { LitElement, css, html } from 'lit'
import { PiNotificationItem } from './notificationItem';

export class PiNotificationCenter extends LitElement {

    static get properties() {
        return {
            notifications: { type: Array },
        }
    }

    constructor() {
        super()
        this.notifications = [];
    }

    connectedCallback() {
        super.connectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        // Check for notifications changes
        if (changedProperties.has('notifications')) {
            // Hide notification center if zero notifications present
            this.hidden = this.notifications.length < 1;
        }
    }

    render() {
        return html`
            
        `;
    }

    addNotification(notificationData) {
        // Create unique id for notification
        const notificationId = Date.now();
        notificationData.id = notificationId;

        // Add notification to local array of notifications
        // this.notifications = [...this.notifications, {...notificationData}];

        const newNotification = document.createElement('pi-notification-item');
        newNotification.setAttribute('data-id', notificationId);
        newNotification.setAttribute('title', notificationData.title);
        newNotification.setAttribute('message', notificationData.message);
        newNotification.setAttribute('icon', notificationData.icon);
        newNotification.setAttribute('iconColor', notificationData.iconColor);
        newNotification.setAttribute('severity', notificationData.severity);
        newNotification.setAttribute('position', notificationData.position);
        newNotification.setAttribute('offset', notificationData.offset);
        newNotification.setAttribute('autoCloseDuration', notificationData.autoCloseDuration);
        newNotification.setAttribute('closeIcon', notificationData.closeIcon);
        newNotification.classList.add(notificationData.position);
        newNotification.addEventListener('removeNotification', (e) => this.removeNotification(notificationData.id));
        document.body.appendChild(newNotification);

        // If notification duration > 0, set auto-close timeout
        if(notificationData.autoCloseDuration > 0) {
            this.autoCloseNotification(notificationId, notificationData.autoCloseDuration);
        }

        // console.log("this.notifications: ", this.notifications);
    }

    removeNotification(notificationId) {
        const notificationToRemove = document.querySelector(`pi-notification-item[data-id="${notificationId}"]`);

        if (notificationToRemove) {
            document.body.removeChild(notificationToRemove);
        }
    }

    autoCloseNotification(notificationId, duration) {
        setTimeout(() => {
            this.removeNotification(notificationId);
        }, duration)
    }

    static styles = [
        css`
            :host {
                position: fixed;
                top: 0;
                right: 15px;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                /* pointer-events: none; */
                width: var(--pi-notification-width, 330px);
                height: 100%;
                background: transparent;
            }

            :host([hidden]) {
                display: none;
            }
        `
    ]
    
}

if(!customElements.get('pi-notification-center')) { customElements.define('pi-notification-center', PiNotificationCenter); }