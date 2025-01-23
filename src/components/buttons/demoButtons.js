import { LitElement, css, html } from 'lit'
import { PiButton } from './button';
import { PiDemoContainer } from '../samples/demoContainer';

export class PiDemoButtons extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`

            <pi-demo-container
            title="Buttons"
            >

                <div>

                    <h5>Severities</h5>

                    <pi-button>Primary</pi-button>
                    <pi-button severity="secondary">Secondary</pi-button>
                    <pi-button severity="success">Success</pi-button>
                    <pi-button severity="info">Info</pi-button>
                    <pi-button severity="warn">Warn</pi-button>
                    <pi-button severity="help">Help</pi-button>
                    <pi-button severity="danger">Danger</pi-button>
                    <pi-button disabled>Disabled</pi-button>

                    <h5>Raised</h5>

                    <pi-button raised>Primary</pi-button>
                    <pi-button severity="secondary" raised>Secondary</pi-button>
                    <pi-button severity="success" raised>Success</pi-button>
                    <pi-button severity="info" raised>Info</pi-button>
                    <pi-button severity="warn" raised>Warn</pi-button>
                    <pi-button severity="help" raised>Help</pi-button>
                    <pi-button severity="danger" raised>Danger</pi-button>
                    <pi-button disabled raised>Disabled</pi-button>

                    <h5>Rounded</h5>

                    <pi-button rounded>Primary</pi-button>
                    <pi-button severity="secondary" rounded>Secondary</pi-button>
                    <pi-button severity="success" rounded>Success</pi-button>
                    <pi-button severity="info" rounded>Info</pi-button>
                    <pi-button severity="warn" rounded>Warn</pi-button>
                    <pi-button severity="help" rounded>Help</pi-button>
                    <pi-button severity="danger" rounded>Danger</pi-button>
                    <pi-button disabled rounded>Disabled</pi-button>

                    <h5>Text</h5>

                    <pi-button variant="text">Primary</pi-button>
                    <pi-button severity="secondary" variant="text">Secondary</pi-button>
                    <pi-button severity="success" variant="text">Success</pi-button>
                    <pi-button severity="info" variant="text">Info</pi-button>
                    <pi-button severity="warn" variant="text">Warn</pi-button>
                    <pi-button severity="help" variant="text">Help</pi-button>
                    <pi-button severity="danger" variant="text">Danger</pi-button>
                    <pi-button disabled variant="text">Disabled</pi-button>

                    <h5>Raised Text</h5>

                    <pi-button variant="text" raised>Primary</pi-button>
                    <pi-button severity="secondary" variant="text" raised>Secondary</pi-button>
                    <pi-button severity="success" variant="text" raised>Success</pi-button>
                    <pi-button severity="info" variant="text" raised>Info</pi-button>
                    <pi-button severity="warn" variant="text" raised>Warn</pi-button>
                    <pi-button severity="help" variant="text" raised>Help</pi-button>
                    <pi-button severity="danger" variant="text" raised>Danger</pi-button>
                    <pi-button disabled variant="text" raised>Disabled</pi-button>

                    <h5>Outlined</h5>

                    <pi-button variant="outlined">Primary</pi-button>
                    <pi-button severity="secondary" variant="outlined">Secondary</pi-button>
                    <pi-button severity="success" variant="outlined">Success</pi-button>
                    <pi-button severity="info" variant="outlined">Info</pi-button>
                    <pi-button severity="warn" variant="outlined">Warn</pi-button>
                    <pi-button severity="help" variant="outlined">Help</pi-button>
                    <pi-button severity="danger" variant="outlined">Danger</pi-button>
                    <pi-button disabled variant="outlined">Disabled</pi-button>

                    <h5>Icons</h5>

                    <pi-button icon="alert-triangle-light">Primary</pi-button>
                    <pi-button severity="secondary" icon="alert-triangle-light">Secondary</pi-button>
                    <pi-button severity="success" icon="alert-triangle-light">Success</pi-button>
                    <pi-button severity="info" icon="alert-triangle-light">Info</pi-button>
                    <pi-button severity="warn" icon="alert-triangle-light">Warn</pi-button>
                    <pi-button severity="help" icon="alert-triangle-light">Help</pi-button>
                    <pi-button severity="danger" icon="alert-triangle-light">Danger</pi-button>
                    <pi-button disabled icon="alert-triangle-light">Disabled</pi-button>

                    <h5>Icon Only</h5>

                    <pi-button icon="alert-triangle-light" variant="iconOnly">Primary</pi-button>
                    <pi-button severity="secondary" icon="alert-triangle-light" variant="iconOnly">Secondary</pi-button>
                    <pi-button severity="success" icon="alert-triangle-light" variant="iconOnly">Success</pi-button>
                    <pi-button severity="info" icon="alert-triangle-light" variant="iconOnly">Info</pi-button>
                    <pi-button severity="warn" icon="alert-triangle-light" variant="iconOnly">Warn</pi-button>
                    <pi-button severity="help" icon="alert-triangle-light" variant="iconOnly">Help</pi-button>
                    <pi-button severity="danger" icon="alert-triangle-light" variant="iconOnly">Danger</pi-button>
                    <pi-button disabled icon="alert-triangle-light" variant="iconOnly">Disabled</pi-button>

                    <h5>Icon Only + Rounded</h5>

                    <pi-button icon="alert-triangle-light" variant="iconOnly" rounded>Primary</pi-button>
                    <pi-button severity="secondary" icon="alert-triangle-light" variant="iconOnly" rounded>Secondary</pi-button>
                    <pi-button severity="success" icon="alert-triangle-light" variant="iconOnly" rounded>Success</pi-button>
                    <pi-button severity="info" icon="alert-triangle-light" variant="iconOnly" rounded>Info</pi-button>
                    <pi-button severity="warn" icon="alert-triangle-light" variant="iconOnly" rounded>Warn</pi-button>
                    <pi-button severity="help" icon="alert-triangle-light" variant="iconOnly" rounded>Help</pi-button>
                    <pi-button severity="danger" icon="alert-triangle-light" variant="iconOnly" rounded>Danger</pi-button>
                    <pi-button disabled icon="alert-triangle-light" variant="iconOnly" rounded>Disabled</pi-button>

                    <h5>Badges</h5>

                    <pi-button badge=2>Primary</pi-button>
                    <pi-button icon="alert-triangle-light" badge=2>Primary</pi-button>

                    <h5>Other</h5>

                    <pi-button raised>Primary</pi-button>
                    <pi-button severity="secondary" variant="text">Secondary</pi-button>
                    <pi-button severity="success" variant="text" raised>Success</pi-button>
                    <pi-button severity="info" variant="outlined">Info</pi-button>
                    <pi-button severity="warn" variant="iconOnly">Warn</pi-button>
                    <pi-button severity="help" badge="2">Help</pi-button>
                    <pi-button severity="danger" size="small">Danger</pi-button>
                    <pi-button disabled>Disabled</pi-button>

                </div>

            </pi-demo-container>

        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-buttons', PiDemoButtons);
