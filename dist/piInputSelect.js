import{html as i,css as p}from"lit";import{register as r}from"./src/registerWebComp.js";import c from"./src/css/defaultCss.js";import{PiBaseFormElement as d}from"./src/components/inputs/base/baseFormElement.js";import{PiLabel as u}from"./piLabel.js";r("pi-base-form-element",d);r("pi-label",u);class g extends d{static get properties(){return{options:{type:Array},selectedIndex:{type:Number},defaultText:{type:String},labelKey:{type:String},valueKey:{type:String},selectedObject:{type:Object},disabled:{type:Boolean},value:{type:String},label:{type:String},preventDefaultSelection:{type:Boolean}}}constructor(){super(),this.defaultText="Choose an option",this.options=[],this.selectedIndex=-1,this.labelKey="",this.valueKey="",this.selectedObject={},this.disabled=!1,this.value="",this.label="",this.preventDefaultSelection=!1}willUpdate(t){t.has("selectedObject")&&(this.selectedIndex=this.determineDefaultSelectedIndex(this.options,this.selectedObject))}renderInput(){return i`
            <pi-label 
            text=${this.label}
            ?hidden=${this.label==""}
            ></pi-label>

            <select 
            @change=${this._handleInputChange} 
            value="${this.selectedIndex}"
            ?disabled="${this.disabled}"
            >
                ${this.defaultText!=""?i`
                    <option 
                    value=""
                    ?disabled="${this.preventDefaultSelection}"
                    ?selected="${this.value==""}">${this.defaultText}</option>
                `:i``}
                    
                ${this.options.length>0?i`
                    ${this.options.map((t,e)=>i`
                        <option 
                        value="${e}" 
                        ?selected="${this.selectedIndex===e}">${t[this.labelKey]}</option>
                    `)}
                `:i``}
            </select>
        `}determineDefaultSelectedIndex(t,e){if(t.length>0){const s=this.labelKey,l=this.valueKey;let o=-1;return t.some((a,n)=>{a[s]==e[s]&&a[l]==e[l]&&(o=n)}),o}return-1}_handleInputChange(t){const e=t.target.value;this.valueKey!=""?typeof this.options[e]<"u"?this.value=this.options[e][this.valueKey]:this.value="":this.value=this.options[e],this._dispatchChangeEvent(this.value)}static styles=[c,p`
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
        `]}export{g as PiSelectInput};
//# sourceMappingURL=piInputSelect.js.map
