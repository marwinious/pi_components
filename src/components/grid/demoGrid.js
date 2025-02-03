import { LitElement, css, html } from 'lit'
import { CodeDisplaySample } from '../samples/codeSampleDisplay';
import { PiDemoContainer } from '../samples/demoContainer';
import { PiCard } from '../cards/components/card';
import { PiGrid } from './components/gridContainer';
import { PiGridRow } from './components/gridRow';
import { PiGridColumn } from './components/gridColumn';

export class PiDemoGrid extends LitElement {

    static get properties() {
        return {
            capturedInputs: { type: Array, attribute: false },
        }
    }

    constructor() {
        super();
        this.capturedInputs = [];
    }

    render() {
        return html`

            <pi-demo-container
            title="Grid"
            >

                <div>

                    <pi-card>
                        <div slot="title">Basic Grid</div>

                        <pi-grid>
                            <pi-row>
                                <pi-col>1</pi-col>
                                <pi-col>1</pi-col>
                                <pi-col>1</pi-col>
                                <pi-col>1</pi-col>
                                <pi-col>1</pi-col>
                                <pi-col>1</pi-col>
                                <pi-col>1</pi-col>
                                <pi-col>1</pi-col>
                                <pi-col>1</pi-col>
                                <pi-col>1</pi-col>
                                <pi-col>1</pi-col>
                                <pi-col>1</pi-col>
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

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[0] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[0]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${"test"}
                        ></code-display-sample>
                        
                    </pi-card>

                    <pi-card>
                        <div slot="title">Small Gutter</div>

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

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[0] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[0]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${"test"}
                        ></code-display-sample>
                        
                    </pi-card>

                    <pi-card>
                        <div slot="title">Large Gutter</div>

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

                        <div class="demoCapturedInput">
                            ${typeof this.capturedInputs[0] != 'undefined' ? html`
                                <strong>Captured input:</strong> ${this.capturedInputs[0]}
                            ` : null }
                        </div>

                        <code-display-sample
                        .code=${"test"}
                        ></code-display-sample>
                        
                    </pi-card>

                </div>

            </pi-demo-container>

        `;
    }

    handleInput(input, captureIndex) {
        this.capturedInputs[captureIndex] = JSON.stringify(input, null, 2);
        this.requestUpdate();
    }

    static styles = [
        css`
            .demoFlexContainer {
                width: 100%;
                display: flex;
                /* justify-content:space-around; */
                align-items: center;
            }

            .demoCapturedInput {
                margin-top: 1rem;
            }

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
customElements.define('pi-demo-grid', PiDemoGrid);
