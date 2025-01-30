import { LitElement, css, html } from 'lit'

/*
EXAMPLE USAGE:

<select-field
.options=${this.sampleData}
labelKey="testLabel"
valueKey="testValue"
defaultText="Pick an option below"
@selectionChanged=${this.handleSelection}
.selectedObject=${this.selectedObject}
></select-field>

*/

export class PiSelectInput extends LitElement {

    static get properties() {
        return {
            options: { type: Array },
            selectedIndex: { type: Number },
            defaultText: { type: String },
            labelKey: { type: String },
            valueKey: { type: String },
            selectedObject: { type: Object },
            disabled: { type: Boolean }
        }
    }

    constructor() {
        super()
        this.defaultText = 'Choose an option';
        this.options = [];
        this.selectedIndex = -1;
        this.labelKey = '';
        this.valueKey = '';
        this.selectedObject = {};
        this.disabled = false;
    }

    // willUpdate hook: Detect property changes before re-render
    willUpdate(changedProperties) {
        if(changedProperties.has('selectedObject')) {
            this.selectedIndex = this.determineDefaultSelectedIndex(this.options, this.selectedObject);  
        }
    }

    render() {
        return html`
            <select 
            @change=${this.handleSelectionChange} 
            .value="${this.selectedIndex}"
            ?disabled="${this.disabled}"
            >
                ${this.defaultText != '' ? html`
                    <option disabled selected>${this.defaultText}</option>
                ` : html``}
                    
                ${this.options.length > 0 ? html`
                    ${this.options.map((item, index) => html`
                        <option value="${index}" ?selected="${this.selectedIndex === index}">${item[this.labelKey]}</option>
                    `)}
                ` : html``}
            </select>
        `;
    }

    determineDefaultSelectedIndex(optionsAry, targetObj) {
        if(optionsAry.length > 0) {
            const lookupLabel = this.labelKey;
            const valueLookup = this.valueKey;
            let foundIndex = -1;

            optionsAry.some((item, index) => {
                if(
                    item[lookupLabel] == targetObj[lookupLabel] 
                    && item[valueLookup] == targetObj[valueLookup]
                ) {
                    foundIndex = index;      
                }
            }) 

            return foundIndex;
        }

        return -1
    }

    handleSelectionChange(e) {
        const selectedIndex = e.target.value;
        
        const selectedItem = {
            index: selectedIndex,
            value: this.options[selectedIndex]
        }
        
        const event = new CustomEvent('selectionChanged', {
            detail: {selectedItem},
            bubbles: true, 
            composed: true
        });

        this.dispatchEvent(event);
    }

    static styles = [
        css`
            :host {
                width: var(--pi-select-input-width, 100%);
                display: var(--pi-select-input-display, inline-block);
            }

            select {
                font-size: var(--pi-select-input-font-size, 16px);
                padding: var(--pi-select-input-padding, 5px 7px);
                background-color: var(--pi-select-input-bg-color, #fff);
                border-radius: var(--pi-select-input-border-radius, 5px);
                border-style: var(--pi-select-input-border-style, solid);
                border-width: var(--pi-select-input-border-width, 1px);
                border-color: var(--pi-select-input-border-color, #aaa);
                color: var(--pi-select-input-text-color, #555);
                box-shadow: var(--pi-select-input-box-shadow, none);
                width: var(--pi-select-input-width, 100%);
                transition: background 0.3s ease, 
                            box-shadow 0.3s ease,
                            border-color 0.3s ease;

                &:disabled {
                    background-color: var(--pi-select-input-bg-color-disabled, #eee);
                    color: var(--pi-select-input-text-color-disabled, #888);
                }

                &:focus {
                    background: var(--pi-select-input-bg-color-focus, #f2fcff);
                    outline: none;
                    border-style: var(--pi-select-input-border-style-focus, solid);
                    border-width: var(--pi-select-input-border-width-focus, 1px);
                    border-color: var(--pi-select-input-border-color-focus, #aaa);
                    box-shadow: var(--pi-select-input-box-shadow-focus, 1px 1px 1px #ddd);
                }
            }
        `
    ]
}
customElements.define('pi-select-input', PiSelectInput);
