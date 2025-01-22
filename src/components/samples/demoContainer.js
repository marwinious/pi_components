import { LitElement, css, html } from 'lit'
import { CodeDisplaySample } from '../samples/codeSampleDisplay';

export class PiDemoContainer extends LitElement {

    static get properties() {
        return {
            demoCode: { type: String },
            title: { type: String },
        }
    }

    constructor() {
        super()
        this.demoCode = '';
        this.title = '';
    }

    firstUpdated() {
        const demoCode = this.shadowRoot.querySelector('.demo_code');
        if(demoCode) {
            const slotElement = demoCode.querySelector('slot');
            
            if(slotElement) {
                const slotContents = slotElement.assignedNodes();
                const slottedHtml = slotContents.map(node => node.outerHTML || node.nodeValue || '').join('\n')

                this.demoCode = this.removeLeadingWhiteSpace(slottedHtml.trim());
            }
            
        }
    }

    render() {
        return html`
            <h4>${this.title}</h4>

            <div class="demo_code">
                <slot></slot>
            </div>

            <code-display-sample
            .code=${this.demoCode}
            ></code-display-sample>
        `;
    }

    removeLeadingWhiteSpace(codeString) {
        const lines = codeString.split('\n');

        // Step 1: Find the last non-empty line and calculate its leading whitespace
        const lastNonEmptyLine = [...lines].reverse().find(line => line.trim() !== '');
        const lastLineIndentation = lastNonEmptyLine ? lastNonEmptyLine.match(/^(\s*)/) : null;
        
        // If we find indentation in the last non-empty line, we proceed
        if (lastLineIndentation) {
            const lastWhitespaceToRemove = lastLineIndentation[1].length;  // Count the number of tabs or spaces

            // Step 2: Adjust the indentation by removing the same amount of whitespace
            const adjustedLines = lines.map((line, index) => {
                // Only remove indentation from lines that are not empty
                if (line.trim() !== '') {
                    return line.replace(new RegExp(`^\\s{0,${lastWhitespaceToRemove}}`), '');
                }
                return line; // Keep empty lines unchanged
            });

            // Step 3: Rebuild the code string with the adjusted lines
            return adjustedLines.join('\n');
        }

        // If no indentation is found, return the original code string
        return codeString;
    }

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-container', PiDemoContainer);
