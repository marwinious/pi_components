import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicCardSample,
    headerCardSample,
} from '../codeSamples/cardCodeSamples';
import { PiTextInput } from '../../inputs';

export class PiCardDemo extends LitElement {

    static get properties() {
        return {
            child: { type: Object }
        }
    }

    constructor() {
        super()
        this.child = {}
    }

    firstUpdated() {
        this.child = this.shadowRoot.querySelectorAll('pi-feature-example-container')
    }

    render() {
        return html`
            <pi-feature-demo-container 
            label="Cards"
            >

                <pi-feature-example-container
                title="Basic Card"
                .sampleCode=${basicCardSample}
                >

                    <pi-card>
                        <p>This is the main content area of a card and the simplest implemenation.</p>
                        <p>Cards have a thin outline and some simple padding/margins that give a clean separation of content.</p>
                        <p>They serve as containers for any other type of content or components.</p>
                    </pi-card>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Header"
                .sampleCode=${headerCardSample}
                >

                    <pi-card>

                        <div slot="header" style="background-color: #eee;">
                            This is the header area of a card. By default, it has no padding and is intended to be full filled with a background color or image. Text will work too of course. If using an image without text, add the <code>slot="header"</code> attritbute directly to the img tag for better control.
                        </div>

                        <p>This is the main content area of a card.</p>
                    </pi-card>

                </pi-feature-example-container>

            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-card-demo', PiCardDemo);
