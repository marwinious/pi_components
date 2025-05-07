import { LitElement, css, html } from 'lit'
import { PiNotificationItem } from './notificationItem';

export class PiNotificationCenter extends LitElement {

    static get properties() {
        return {
            notifications: { type: Array },
            notificationsByPosition: { type: Object }
        }
    }

    constructor() {
        super()
        this.notifications = [];
        this.notificationsByPosition = {
            'top-left': [],
            'top-right': [],
            'bottom-left': [],
            'bottom-right': [],
            'top': [],
            'bottom': [],
        };
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
        const notificationId = crypto.randomUUID();
        notificationData.id = notificationId;

        // Add notification to local array of notifications
        if (this.notificationsByPosition[notificationData.position]) {
            this.notificationsByPosition[notificationData.position] = [
                ...this.notificationsByPosition[notificationData.position],
                { ...notificationData },
            ];
            this._renderNotifications(); // Trigger re-render to update DOM
        } else {
            console.warn(`Invalid notification position: ${notificationData.position}`);
        }

        // If notification duration > 0, set auto-close timeout
        if (notificationData.autoCloseDuration > 0) {
            this.autoCloseNotification(notificationId, notificationData.autoCloseDuration, notificationData.position);
        }

        console.log("notificationsByPosition: ", this.notificationsByPosition);
    }

    _renderNotifications() {
        // Clear existing notifications (we'll handle removal with animation now)
        const existingNotifications = document.querySelectorAll('pi-notification-item');
        existingNotifications.forEach(n => {
            n.classList.remove('visible'); // Start fade-out/slide-out
            setTimeout(() => {
                if (n.parentNode === document.body) {
                    document.body.removeChild(n);
                }
            }, 300); // Match the transition duration
        });

        for (const position in this.notificationsByPosition) {
            let currentOffset = 15; // Initial offset from the edge

            this.notificationsByPosition[position].forEach((notification, index) => {
                const newNotification = document.createElement('pi-notification-item');
                newNotification.setAttribute('title', notification.title);
                newNotification.setAttribute('message', notification.message);
                newNotification.setAttribute('icon', notification.icon);
                newNotification.setAttribute('iconColor', notification.iconColor);
                newNotification.setAttribute('severity', notification.severity);
                newNotification.setAttribute('position', notification.position);
                newNotification.setAttribute('offset', notification.offset);
                newNotification.setAttribute('autoCloseDuration', notification.autoCloseDuration);
                newNotification.setAttribute('closeIcon', notification.closeIcon);
                newNotification.classList.add(notification.position);
                newNotification.setAttribute('data-id', notification.id);

                // Calculate and apply dynamic positioning
                const positionStyles = this._calculatePositionStyles(position, currentOffset);
                Object.assign(newNotification.style, positionStyles);

                newNotification.addEventListener('removeNotification', (e) =>
                    this._handleNotificationClosed(notification.id, position)
                );

                document.body.appendChild(newNotification);

                // Force a reflow to ensure the initial state is applied before adding the visible class
                newNotification.offsetHeight;

                newNotification.classList.add('visible'); // Trigger fade-in/slide-in

                // Update offset for the next notification in the same position
                // You'll need to get the actual height of the rendered notification item
                // For the first render, it might be 0. You might need a slight delay or
                // rely on an estimated height initially and refine later.
                const notificationHeight = 80; // Example estimated height
                currentOffset += notificationHeight + 10; // Add height + some spacing
            });
        }
    }

    _calculatePositionStyles(position, offset) {
        const styles = { position: 'fixed', zIndex: 10001 }; // Ensure it's above other elements

        switch (position) {
            case 'top-left':
                styles.top = `${offset}px`;
                styles.left = '15px';
                styles.alignItems = 'flex-start'; // For stacking direction if needed
                break;
            case 'top-right':
                styles.top = `${offset}px`;
                styles.right = '15px';
                styles.alignItems = 'flex-end';
                break;
            case 'bottom-left':
                styles.bottom = `${offset}px`;
                styles.left = '15px';
                styles.alignItems = 'flex-start';
                break;
            case 'bottom-right':
                styles.bottom = `${offset}px`;
                styles.right = '15px';
                styles.alignItems = 'flex-end';
                break;
            case 'top':
                styles.top = `${offset}px`;
                styles.left = '50%';
                styles.transform = 'translateX(-50%)';
                styles.alignItems = 'center';
                break;
            case 'bottom':
                styles.bottom = `${offset}px`;
                styles.left = '50%';
                styles.transform = 'translateX(-50%)';
                styles.alignItems = 'center';
                break;
        }

        return styles;
    }

    _handleNotificationClosed(notificationId, position) {
        const notificationToRemove = document.querySelector(`pi-notification-item[data-id="${notificationId}"]`);
        if (notificationToRemove) {
            notificationToRemove.classList.remove('visible');
            setTimeout(() => {
                if (notificationToRemove.parentNode === document.body) {
                    document.body.removeChild(notificationToRemove);
                    // Re-render to update positions of remaining notifications
                    this._renderNotifications();
                }
            }, 300);
        }

        this.notificationsByPosition[position] = this.notificationsByPosition[position].filter(
            (n) => n.id !== notificationId
        );
        // We no longer call _renderNotifications here immediately, it's called after removal
    }

    autoCloseNotification(notificationId, duration, position) {
        setTimeout(() => {
            this._handleNotificationClosed(notificationId, position);
        }, duration);
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