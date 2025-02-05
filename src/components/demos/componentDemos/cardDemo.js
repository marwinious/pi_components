import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicCardSample,
    headerCardSample,
    titleCardSample,
    subtitleCardSample,
    footerCardSample,
    allSlotsCardSample,
} from '../codeSamples/cardCodeSamples';
import { PiCard } from '../../cards/components/card';

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
                            This is the header area of a card. By default, it has no padding and is intended to be full filled with a background color or image. Text will work too of course. If using an image without text, add the <code>slot="header"</code> attritbute directly to the img tag for better control. The background-color on this demo was added as an example and is not there by default.
                        </div>

                        <p>This is the main content area of a card.</p>
                    </pi-card>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Title"
                .sampleCode=${titleCardSample}
                >

                    <pi-card>
                        <span slot="title">Some card title</span>

                        <p>A card title adds some context for the content of the card itself.</p>
                    </pi-card>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Sub Title"
                .sampleCode=${subtitleCardSample}
                >

                    <pi-card>
                        <span slot="title">Some card title</span>
                        <span slot="subTitle">A smaller subtitle</span>

                        <p>The subtitle of a card can add a nice touch to the main title as well as additional context of the card's content.</p>
                    </pi-card>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Footer"
                .sampleCode=${footerCardSample}
                >

                    <pi-card>
                        <p>Similar to a card header, a footer is largely unstyled and can support just about any content or component.</p>

                        <span slot="footer">Some footer content here.</span>
                    </pi-card>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="All slots"
                .sampleCode=${allSlotsCardSample}
                >

                    <pi-card>
                        <div slot="header" style="display: flex;align-items: center;background-image: url('https://picsum.photos/600/40');width: 100%;padding: 1rem; color: yellow;text-shadow: 1px 1px 2px #000;font-size: 30px;">
                            A fancy header
                        </div>
                        
                        <span slot="title">Our Company</span>
                        <span slot="subTitle">Our mission, values, and standards</span>

                        <p>Our company is a great place to work with generous healthcare options, 401K, and paid time off.</p>

                        <p>To apply, visit our website.</p>

                        <p>We have spots open around the world.</p>

                        <div slot="footer" style="padding: 1rem;font-size: 11px;">&#169; 1982, all rights reserved. If texting had been invented, you could text us your resume. Looking forward to the future.</div>
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
