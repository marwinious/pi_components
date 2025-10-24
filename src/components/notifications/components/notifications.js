import { LitElement, css, html } from 'lit'
import { register } from '../../../registerWebComp';
import { PiNotificationCenter } from './notificationCenter';
import { PiIconHandler } from 'pi_icons/components/components/icons/base/iconHandler';
import { PiIconFlagWavyDark } from 'pi_icons/components/components/icons/components/flags/iconFlagWavyDark';
import { PiIconStarDark } from 'pi_icons/components/components/icons/components/stars/iconStarDark';
import { PiIconThumbsUpDark } from 'pi_icons/components/components/icons/components/ratings/iconThumbsUpDark';
import { PiIconInfoSimpleDark } from 'pi_icons/components/components/icons/components/info/iconInfoSimpleDark';
import { PiIconAlertTriangleDark } from 'pi_icons/components/components/icons/components/alerts/iconAlertTriangleDark';
import { PiIconGlobeDark } from 'pi_icons/components/components/icons/components/globes/iconGlobeDark';
import { PiIconStopExDark } from 'pi_icons/components/components/icons/components/actions/iconStopExDark';

register('pi-notification-center', PiNotificationCenter)
register('pi-icon-handler', PiIconHandler);
register('pi-icon-flag-wavy-dark', PiIconFlagWavyDark);
register('pi-icon-star-dark', PiIconStarDark);
register('pi-icon-thumbs-up-dark', PiIconThumbsUpDark);
register('pi-icon-info-simple-dark', PiIconInfoSimpleDark);
register('pi-icon-alert-triangle-dark', PiIconAlertTriangleDark);
register('pi-icon-globe-dark', PiIconGlobeDark);
register('pi-icon-stop-ex-dark', PiIconStopExDark);

export class PiNotifications extends LitElement {

    static get properties() {
        return {
            notificationCenter: { type: Object },
            severityMap: { type: Object },
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
                icon: 'info-simple-dark',
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