import { LitElement, css, html } from 'lit'
import { PiFeatureDemoContainer } from '../base/featureDemoContainer';
import { PiFeatureExampleContainer } from '../base/featureExampleContainer';
import { 
    basicGridSample,
    smGutterGridSample,
    lgGutterGridSample
} from '../codeSamples/gridCodeSamples';
import { PiGrid } from '../../grid/components/gridContainer';
import { PiGridColumn } from '../../grid/components/gridColumn';
import { PiGridRow } from '../../grid/components/gridRow';

export class PiGridDemo extends LitElement {

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
            label="Grid"
            >

                <pi-feature-example-container
                title="Basic Grid"
                .sampleCode=${basicGridSample}
                >

                    <pi-grid>
                        <pi-row>
                            <pi-col cols=1>1</pi-col>
                            <pi-col cols=1>1</pi-col>
                            <pi-col cols=1>1</pi-col>
                            <pi-col cols=1>1</pi-col>
                            <pi-col cols=1>1</pi-col>
                            <pi-col cols=1>1</pi-col>
                            <pi-col cols=1>1</pi-col>
                            <pi-col cols=1>1</pi-col>
                            <pi-col cols=1>1</pi-col>
                            <pi-col cols=1>1</pi-col>
                            <pi-col cols=1>1</pi-col>
                            <pi-col cols=1>1</pi-col>
                        </pi-row>
                        <pi-row>
                            <pi-col cols=2>2</pi-col>
                            <pi-col cols=2>2</pi-col>
                            <pi-col cols=2>2</pi-col>
                            <pi-col cols=2>2</pi-col>
                            <pi-col cols=2>2</pi-col>
                            <pi-col cols=2>2</pi-col>
                        </pi-row>
                        <pi-row>
                            <pi-col cols=4>4</pi-col>
                            <pi-col cols=4>4</pi-col>
                            <pi-col cols=4>4</pi-col>
                        </pi-row>
                        <pi-row>
                            <pi-col cols=12>12</pi-col>
                        </pi-row>
                        <pi-row>
                            <pi-col cols=10>10</pi-col>
                        </pi-row>
                        <pi-row>
                            <pi-col cols=8>8</pi-col>
                        </pi-row>
                        <pi-row>
                            <pi-col cols=6>6</pi-col>
                        </pi-row>
                        <pi-row>
                            <pi-col cols=4>4</pi-col>
                        </pi-row>
                        <pi-row>
                            <pi-col cols=2>2</pi-col>
                        </pi-row>
                    </pi-grid>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Small Gutter"
                .sampleCode=${smGutterGridSample}
                >

                    <pi-grid gutter="sm">
                        <pi-row>
                            <pi-col cols="4">4</pi-col>
                            <pi-col cols="4">4</pi-col>
                            <pi-col cols="4">4</pi-col>
                        </pi-row>
                        <pi-row>
                            <pi-col cols="4">4</pi-col>
                            <pi-col cols="4">4</pi-col>
                            <pi-col cols="4">4</pi-col>
                        </pi-row>
                    </pi-grid>

                </pi-feature-example-container>

                <pi-feature-example-container
                title="Large Gutter"
                .sampleCode=${lgGutterGridSample}
                >

                    <pi-grid gutter="lg">
                        <pi-row>
                            <pi-col cols="4">4</pi-col>
                            <pi-col cols="4">4</pi-col>
                            <pi-col cols="4">4</pi-col>
                        </pi-row>
                        <pi-row>
                            <pi-col cols="4">4</pi-col>
                            <pi-col cols="4">4</pi-col>
                            <pi-col cols="4">4</pi-col>
                        </pi-row>
                    </pi-grid>

                </pi-feature-example-container>

            </pi-feature-demo-container>
        `;
    }

    static styles = [
        css`
            pi-col {
                background: #eee;
                text-align: center;
            }

            pi-row: { 
                display: block;
            }
        `
    ]
    
}
customElements.define('pi-grid-demo', PiGridDemo);
