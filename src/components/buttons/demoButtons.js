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

                <h5>Other</h5>

                <pi-button raised>Primary</pi-button>
                <pi-button severity="secondary" variant="text">Secondary</pi-button>
                <pi-button severity="success" variant="text" raised>Success</pi-button>
                <pi-button severity="info" variant="outlined">Info</pi-button>
                <pi-button severity="warn" variant="iconOnly">Warn</pi-button>
                <pi-button severity="help" badge="2">Help</pi-button>
                <pi-button severity="danger" size="small">Danger</pi-button>
                <pi-button disabled>Disabled</pi-button>

            </pi-demo-container>

        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-buttons', PiDemoButtons);
