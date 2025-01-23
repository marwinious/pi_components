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

            </pi-demo-container>

        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-buttons', PiDemoButtons);
