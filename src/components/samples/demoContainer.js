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

                let cleanString = '';
                cleanString = this.removeLeadingWhiteSpace(slottedHtml.trim());
                this.demoCode = cleanString;
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
        // console.log('lastNonEmptyLine: ', lastNonEmptyLine);
        
        const lastLineIndentation = lastNonEmptyLine ? lastNonEmptyLine.match(/^(\s*)/) : null;
        // console.log('lastLineIndentation: ', lastLineIndentation);

        if (lastLineIndentation) {
            const lastWhitespaceToRemove = lastLineIndentation[1].length; // Count the number of tabs or spaces
            // console.log('lastWhitespaceToRemove: ', lastWhitespaceToRemove);
            
            // Step 2: Adjust the indentation and filter out lines with only whitespace
            const adjustedLines = lines.map(line => {
                if (line.trim() !== '') {
                    // Remove up to the detected leading whitespace
                    return line.replace(new RegExp(`^\\s{0,${lastWhitespaceToRemove}}`), '');
                }
                return ''; // Normalize whitespace-only lines to empty strings
            });

            // Step 3: Rebuild the code string, preserving meaningful line breaks
            return adjustedLines
                .filter((line, index, arr) => line !== '' || (index > 0 && arr[index - 1] !== ''))
                .join('\n');
        }

        // If no indentation is found, return the original code string
        return codeString;
    }

    /* removeEmptyLines(str) {
        return str.split('\n').filter(line => line.trim() !== '').join('\n');
    } */

    static styles = [
        css`
            
        `
    ]
    
}
customElements.define('pi-demo-container', PiDemoContainer);
