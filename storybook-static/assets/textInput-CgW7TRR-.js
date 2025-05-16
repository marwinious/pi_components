import{r as n,x as a,i as r}from"./lit-element-qJpPW6A9.js";import{P as p}from"./label-Blmss6rD.js";import{d as u}from"./defaultCss-aEcf2KJM.js";class c extends n{static get properties(){return{formData:{type:Object},showReset:{type:Boolean},showSubmit:{type:Boolean}}}constructor(){super(),this.formData={},this.showReset=!1,this.showSubmit=!0}connectedCallback(){super.connectedCallback(),this.addEventListener("change",e=>this._handleFormElementChange(e)),this.addEventListener("pi-submit",e=>this._handleSubmit(e))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",e=>this._handleFormElementChange(e)),this.removeEventListener("pi-submit",e=>this._handleSubmit(e))}render(){return a`
            <form @submit=${this._handleSubmit} @reset=${this._handleReset}>
                <slot @slotchange=${this._handleSlotChange}></slot>

                <div class="button_row">
                    
                    ${this.showSubmit?a`
                        <slot name="submitButton">
                            <button type="submit">Submit</button>
                        </slot>
                    `:null}
                        
                    ${this.showReset?a`
                        <slot name="resetButton">
                            <button type="reset">Reset</button>
                        </slot>
                    `:null}
                    
                </div>
                
            </form>
        `}_handleFormElementChange(e){e.detail?.group?(typeof this.formData[e.detail.group]>"u"&&(this.formData[e.detail.group]={}),this.formData[e.detail.group][e.detail.name]=e.detail.value):this.formData={...this.formData,[e.detail.name]:e.detail.value};const o=new CustomEvent("formDataUpdated",{detail:this.formData,bubbles:!0,composed:!0});this.dispatchEvent(o)}_handleSubmit(e){e.preventDefault();const o=this._collectFormData(),t=new CustomEvent("formSubmitted",{detail:o,bubbles:!0,composed:!0});this.dispatchEvent(t)}_collectFormData(){const e=this.querySelectorAll("[name]"),o={};return e.forEach(t=>{const i=t.closest("pi-form-group")?.name;if(i){o[i]||(o[i]={});const s=t.closest("pi-base-form-element")||t.closest("pi-text-input")||t.closest("pi-select-input")||t.closest("pi-checkbox-input")||t.closest("pi-toggle-switch")||t.closest("pi-radio-input-group")||t.closest("pi-text-area-input");s?s.tagName=="PI-RADIO-INPUT-GROUP"||(o[i][s.name]=s.getValue()):t.tagName!="PI-FORM-GROUP"&&(o[i][t.name]=t.value)}else{const s=t.closest("pi-base-form-element")||t.closest("pi-text-input")||t.closest("pi-select-input")||t.closest("pi-checkbox-input")||t.closest("pi-toggle-switch")||t.closest("pi-radio-input-group")||t.closest("pi-text-area-input");s?s.tagName=="PI-RADIO-INPUT"||(o[s.name]=s.getValue()):o[t.name]=t.value}}),o}_handleReset(e){e.preventDefault(),this.querySelectorAll("[name]").forEach(t=>{const i=t.closest("pi-base-form-element")||t.closest("pi-text-input")||t.closest("pi-select-input")||t.closest("pi-checkbox-input")||t.closest("pi-toggle-switch")||t.closest("pi-radio-input-group")||t.closest("pi-text-area-input");i?i.setValue(""):(t.tagName==="PI-TEXT-INPUT"||t.tagName==="PI-SELECT-INPUT"||t.tagName==="PI-TEXT-AREA-INPUT"||t.tagName==="PI-TOGGLE-INPUT"||t.tagName==="PI-RADIO-INPUT"||t.tagName==="PI-CHECKBOX-INPUT")&&(t.value="")}),this.formData={}}_handleSlotChange(){const e=this._collectFormData();this.formData=e}static styles=[r`
            .button_row {
                margin: var(--pi-form-button-row-margin, 1rem 0);
            }
        `]}customElements.get("pi-form")||customElements.define("pi-form",c);class d extends n{static get properties(){return{name:{type:String}}}constructor(){super(),this.name=""}render(){return a`
            <slot></slot>
        `}static styles=[r`
            
        `]}customElements.get("pi-form-group")||customElements.define("pi-form-group",d);class h extends p{static get properties(){return{placeholder:{type:String},value:{type:String},disabled:{type:Boolean},label:{type:String}}}constructor(){super(),this.placeholder="",this.value="",this.disabled=!1,this.label=""}render(){return a`
            <pi-label 
            text=${this.label}
            ?hidden=${this.label==""}
            ></pi-label>
            
            <input 
            type="text" 
            placeholder=${this.placeholder} 
            @input=${this._handleInputChange}
            .value=${this.value}
            ?disabled=${this.disabled}
            >
        `}static styles=[u,r`
            :host {
                display: block;
                width: 100%;
                min-width: 0;
                max-width: 100%;
                box-sizing: border-box;
            }

            input {
                box-sizing: border-box;
                font-size: var(--pi-text-input-font-size, 16px);
                padding: var(--pi-text-input-padding, 5px 7px);
                background-color: var(--pi-text-input-bg-color, #fff);
                border-radius: var(--pi-text-input-border-radius, 5px);
                border-style: var(--pi-text-input-border-style, solid);
                border-width: var(--pi-text-input-border-width, 1px);
                border-color: var(--pi-text-input-border-color, #aaa);
                color: var(--pi-text-input-text-color, #555);
                box-shadow: var(--pi-text-input-box-shadow, none);
                width: 100%;
                min-width: 0;
                max-width: 100%;
                transition: background 0.3s ease, 
                            box-shadow 0.3s ease,
                            border-color 0.3s ease;

                &::placeholder {
                    color: var(--pi-text-input-placeholder-text-color, #aaa);
                }

                &:disabled, &:disabled::placeholder {
                    background-color: var(--pi-text-input-bg-color-disabled, #eee);
                    color: var(--pi-text-input-text-color-disabled, #888);
                }

                &:focus {
                    background: var(--pi-text-input-bg-color-focus, #f2fcff);
                    outline: none;
                    border-style: var(--pi-text-input-border-style-focus, solid);
                    border-width: var(--pi-text-input-border-width-focus, 1px);
                    border-color: var(--pi-text-input-border-color-focus, #aaa);
                    box-shadow: var(--pi-text-input-box-shadow-focus, 1px 1px 1px #ddd);
                }
            }

        `]}customElements.get("pi-text-input")||customElements.define("pi-text-input",h);
