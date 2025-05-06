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
            ${this.notifications.map((notification) => html`
                <!-- <div>Data: ${JSON.stringify(notification)}</div> -->
                <pi-notification-item
                title=${notification.title}
                message=${notification.message}
                icon=${notification.icon}
                iconColor=${notification.iconColor}
                severity=${notification.severity}
                position=${notification.position}
                offset=${notification.offset}
                autoCloseDuration=${notification.autoCloseDuration}
                closeIcon=${notification.closeIcon}
                @removeNotification=${() => this.removeNotification(notification.id)}
                ></pi-notification-item>
            `)}
        `;
    }

    addNotification(notificationData) {
        // Create unique id for notification
        const notificationId = Date.now();

        // Add notification to local array of notifications
        this.notifications = [...this.notifications, {...notificationData, id: notificationId}];

        // If notification duration > 0, set auto-close timeout
        if(notificationData.autoCloseDuration > 0) {
            this.autoCloseNotification(notificationId, notificationData.autoCloseDuration);
        }

        console.log("this.notifications: ", this.notifications);
    }

    removeNotification(notificationId) {
        this.notifications = this.notifications.filter(notification => notification.id !== notificationId);
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
                width: var(--pi-notifications-width, 330px);
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