import { LitElement, css, html } from 'lit'
import { PiDemoContainer } from '../samples/demoContainer';

export class PiDemoCards extends LitElement {

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
            title="Cards"
            >

                <div>

                    

                </div>

            </pi-demo-container>

        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-cards', PiDemoCards);
