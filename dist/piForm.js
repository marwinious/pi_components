import{LitElement as r,html as i,css as n}from"lit";import{register as l}from"./src/registerWebComp.js";import{PiBaseFormElement as c}from"./src/components/inputs/base/baseFormElement.js";l("pi-base-form-element",c);class d extends r{static get properties(){return{formData:{type:Object},showReset:{type:Boolean},showSubmit:{type:Boolean}}}constructor(){super(),this.formData={},this.showReset=!1,this.showSubmit=!0}connectedCallback(){super.connectedCallback(),this.addEventListener("change",s=>this._handleFormElementChange(s)),this.addEventListener("pi-submit",s=>this._handleSubmit(s))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",s=>this._handleFormElementChange(s)),this.removeEventListener("pi-submit",s=>this._handleSubmit(s))}render(){return i`
            <form @submit=${this._handleSubmit} @reset=${this._handleReset}>
                <slot @slotchange=${this._handleSlotChange}></slot>

                <div class="button_row">
                    
                    ${this.showSubmit?i`
                        <slot name="submitButton">
                            <button type="submit">Submit</button>
                        </slot>
                    `:null}
                        
                    ${this.showReset?i`
                        <slot name="resetButton">
                            <button type="reset">Reset</button>
                        </slot>
                    `:null}
                    
                </div>
                
            </form>
        `}_handleFormElementChange(s){s.detail?.group?(typeof this.formData[s.detail.group]>"u"&&(this.formData[s.detail.group]={}),this.formData[s.detail.group][s.detail.name]=s.detail.value):this.formData={...this.formData,[s.detail.name]:s.detail.value};const e=new CustomEvent("formDataUpdated",{detail:this.formData,bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleSubmit(s){s.preventDefault();const e=this._collectFormData(),t=new CustomEvent("formSubmitted",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}_collectFormData(){const s=this.querySelectorAll("[name]"),e={};return s.forEach(t=>{const a=t.closest("pi-form-group")?.name;if(a){e[a]||(e[a]={});const o=t.closest("pi-base-form-element")||t.closest("pi-text-input")||t.closest("pi-select-input")||t.closest("pi-checkbox-input")||t.closest("pi-toggle-switch")||t.closest("pi-radio-input-group")||t.closest("pi-text-area-input");o?o.tagName=="PI-RADIO-INPUT-GROUP"||(e[a][o.name]=o.getValue()):t.tagName!="PI-FORM-GROUP"&&(e[a][t.name]=t.value)}else{const o=t.closest("pi-base-form-element")||t.closest("pi-text-input")||t.closest("pi-select-input")||t.closest("pi-checkbox-input")||t.closest("pi-toggle-switch")||t.closest("pi-radio-input-group")||t.closest("pi-text-area-input");o?o.tagName=="PI-RADIO-INPUT"||(e[o.name]=o.getValue()):e[t.name]=t.value}}),e}_handleReset(s){s.preventDefault(),this.querySelectorAll("[name]").forEach(t=>{const a=t.closest("pi-base-form-element")||t.closest("pi-text-input")||t.closest("pi-select-input")||t.closest("pi-checkbox-input")||t.closest("pi-toggle-switch")||t.closest("pi-radio-input-group")||t.closest("pi-text-area-input");a?a.setValue(""):(t.tagName==="PI-TEXT-INPUT"||t.tagName==="PI-SELECT-INPUT"||t.tagName==="PI-TEXT-AREA-INPUT"||t.tagName==="PI-TOGGLE-INPUT"||t.tagName==="PI-RADIO-INPUT"||t.tagName==="PI-CHECKBOX-INPUT")&&(t.value="")}),this.formData={}}_handleSlotChange(){const s=this._collectFormData();this.formData=s}static styles=[n`
            .button_row {
                margin: var(--pi-form-button-row-margin, 1rem 0);
            }
        `]}export{d as PiForm};
//# sourceMappingURL=piForm.js.map
