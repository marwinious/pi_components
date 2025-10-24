import { LitElement, css, html } from 'lit';
import { register } from '../../../registerWebComp';
import { PiNotificationItem } from './notificationItem';

register('pi-notification-item', PiNotificationItem);

export class PiNotificationCenter extends LitElement {
    static get properties() {
        return {
            notificationsByPosition: { type: Object },
        };
    }

    constructor() {
        super();
        this.notificationsByPosition = {
            'top-left': [],
            'top-right': [],
            'bottom-left': [],
            'bottom-right': [],
            'top': [],
            'bottom': [],
        };
        this._renderedNotifications = {}; // Track rendered DOM elements by ID
    }

    addNotification(notificationData) {
        const notificationId = crypto.randomUUID();
        notificationData.id = notificationId;

        if (this.notificationsByPosition[notificationData.position]) {
            this.notificationsByPosition = {
                ...this.notificationsByPosition,
                [notificationData.position]: [
                    ...this.notificationsByPosition[notificationData.position],
                    { ...notificationData },
                ],
            };
            this._renderNotifications();
        } else {
            console.warn(`Invalid notification position: ${notificationData.position}`);
        }

        if (notificationData.autoCloseDuration > 0) {
            this.autoCloseNotification(notificationId, notificationData.autoCloseDuration, notificationData.position);
        }

        // console.log("notificationsByPosition: ", this.notificationsByPosition);
    }

    _handleNotificationClosed(notificationId, position) {
        this.notificationsByPosition = {
            ...this.notificationsByPosition,
            [position]: this.notificationsByPosition[position].filter(n => n.id !== notificationId),
        };
        this._renderNotifications();
    }

    autoCloseNotification(notificationId, duration, position) {
        setTimeout(() => {
            this._handleNotificationClosed(notificationId, position);
        }, duration);
    }

    _renderNotifications() {
        const allNotifications = Object.values(this.notificationsByPosition).flat();
        const currentRenderedIds = new Set(Object.keys(this._renderedNotifications));
        const targetRenderedIds = new Set(allNotifications.map(n => n.id));

        // Remove notifications that are no longer in the state
        for (const id of currentRenderedIds) {
            if (!targetRenderedIds.has(id)) {
                const notificationToRemove = this._renderedNotifications[id];
                if (notificationToRemove && notificationToRemove.parentNode === document.body) {
                    notificationToRemove.classList.remove('visible');
                    setTimeout(() => {
                        document.body.removeChild(notificationToRemove);
                        delete this._renderedNotifications[id];
                    }, 300);
                } else if (notificationToRemove) {
                    delete this._renderedNotifications[id];
                }
            }
        }

        // Add and update existing notifications
        for (const notification of allNotifications) {
            if (!this._renderedNotifications[notification.id]) {
                // Create a new notification element
                const newNotification = document.createElement('pi-notification-item');
                this._applyNotificationData(newNotification, notification);
                const positionStyles = this._calculatePositionStyles(notification.position, this._getOffsetForPosition(notification.position, notification.id));
                Object.assign(newNotification.style, positionStyles);
                newNotification.addEventListener('removeNotification', (e) =>
                    this._handleNotificationClosed(notification.id, notification.position)
                );
                document.body.appendChild(newNotification);
                this._renderedNotifications[notification.id] = newNotification;
                // Force reflow and add visible class for animation
                newNotification.offsetHeight;
                requestAnimationFrame(() => newNotification.classList.add('visible'));
            } else {
                // Update existing notification's position
                const existingNotification = this._renderedNotifications[notification.id];
                const positionStyles = this._calculatePositionStyles(notification.position, this._getOffsetForPosition(notification.position, notification.id));
                Object.assign(existingNotification.style, positionStyles);
                this._applyNotificationData(existingNotification, notification); // Ensure data is up-to-date
            }
        }
    }

    _applyNotificationData(element, data) {
        element.setAttribute('title', data.title);
        element.setAttribute('message', data.message);
        element.setAttribute('icon', data.icon);
        element.setAttribute('iconColor', data.iconColor);
        element.setAttribute('severity', data.severity);
        element.setAttribute('position', data.position);
        element.setAttribute('offset', data.offset);
        element.setAttribute('autoCloseDuration', data.autoCloseDuration);
        element.setAttribute('closeIcon', data.closeIcon);
        element.setAttribute('data-id', data.id);
        element.classList.add(data.position); // Ensure position class is present
    }

    _getOffsetForPosition(position, currentId) {
        const notificationsInPosition = this.notificationsByPosition[position];
        let currentOffset = 15;
        for (const notification of notificationsInPosition) {
            if (notification.id === currentId) {
                return `${currentOffset}px`;
            }
            currentOffset += 90; // Estimate height + spacing
        }
        return `${currentOffset}px`; // Should not reach here if ID exists
    }

    _calculatePositionStyles(position, offset) {
        const styles = {};

        switch (position) {
            case 'top-left':
                styles.top = offset;
                styles.left = '15px';
                // styles.alignItems = 'flex-start';
                break;
            case 'top-right':
                styles.top = offset;
                styles.right = '15px';
                // styles.alignItems = 'flex-end';
                break;
            case 'bottom-left':
                styles.bottom = offset;
                styles.left = '15px';
                // styles.alignItems = 'flex-start';
                break;
            case 'bottom-right':
                styles.bottom = offset;
                styles.right = '15px';
                // styles.alignItems = 'flex-end';
                break;
            case 'top':
                styles.top = offset;
                styles.left = '50%';
                styles.transform = 'translateX(-50%)';
                // styles.alignItems = 'center';
                break;
            case 'bottom':
                styles.bottom = offset;
                styles.left = '50%';
                styles.transform = 'translateX(-50%)';
                // styles.alignItems = 'center';
                break;
        }
        return styles;
    }

    render() {
        // PiNotificationCenter doesn't render any visual elements directly related to notifications anymore
        return html`<slot></slot>`; // You might want a slot for other content in the center if needed
    }

    static styles = [
        css`
            :host {
                display: none; /* The center itself might not need to be visible */
                position: fixed;
                top: 0;
                right: 15px;
                z-index: 10000;
            }
        `,
    ];
}

// if (!customElements.get('pi-notification-center')) { customElements.define('pi-notification-center', PiNotificationCenter); }