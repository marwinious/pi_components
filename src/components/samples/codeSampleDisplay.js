import { LitElement, css, html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { codeToHtml } from 'shiki'

export class CodeDisplaySample extends LitElement {

    static get properties() {
        return {
            code: { type: String },
            prettyCode: { type: String },
            showCode: { type: Boolean }
        }
    }

    constructor() {
        super()
        this.code = '';
        this.prettyCode = '';
        this.showCode = false;
    }

    async firstUpdated() {

        // Only `javascript` and `nord` will be loaded when calling `codeToHtml`
        const html = await codeToHtml(this.code, {
            lang: 'html',
            theme: 'plastic'
        })

        this.prettyCode = html;
    }

    render() {
        return html`

            <button 
            type="button"
            ?hidden=${this.showCode}
            @click=${() => this.setShowCode(true)}
            >Show sample code</button>

            <button 
            type="button"
            ?hidden=${!this.showCode}
            @click=${() => this.setShowCode(false)}
            >Hide sample code</button>

            <div 
            class="code_block"
            ?hidden=${!this.showCode}
            >${ unsafeHTML(this.prettyCode) }</div>
            
        `;
    }

    setShowCode(newVal) {
        this.showCode = newVal;
    }

    static styles = [
        css`

            :host {
                display: block;
                margin: 1rem 0;
            }

            pre {
                padding: 0 1rem;
            }
        `
    ]
    
}
customElements.define('code-display-sample', CodeDisplaySample);
