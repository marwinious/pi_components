import{x as l,a as s}from"./lit-element-Rv6HkL07.js";import{r as a}from"./registerWebComp-xWpx6Xkx.js";import{d as n}from"./defaultCss-BUBpELKw.js";import{P as t,a as d}from"./label-B4rynypE.js";a("pi-base-form-element",t);a("pi-label",d);class g extends t{static get properties(){return{placeholder:{type:String},showLabel:{type:Boolean,attribute:!1},value:{type:String},disabled:{type:Boolean,reflect:!0},label:{type:String},checked:{type:Boolean,reflect:!0},name:{type:String}}}constructor(){super(),this.placeholder="",this.showLabel=!1,this.value="",this.disabled=!1,this.label="",this.checked=!1,this._group=[],this.name=""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return l`
            <div class="container">
                <input 
                type="radio" 
                placeholder=${this.placeholder} 
                @input=${this._handleInputChange}
                .value=${this.value}
                ?disabled=${this.disabled}
                tabindex="0"
                .checked=${this.checked}
                aria-checked=${this.checked}
                role="radio"
                >
                <div class="radio_indicator"></div>
                <!-- <label>${this.label}</label> -->
                <pi-label 
                text=${this.label} 
                no-padding 
                no-margin
                ></pi-label>
            </div>
            
        `}_handleInputChange(e){this.value=e.target.value,this.checked=!this.checked;const i=new CustomEvent("radio-change",{detail:{name:this.name,value:this.value,group:null},bubbles:!0,composed:!0});this.dispatchEvent(i)}static styles=[n,s`
            :host {
                display: inline-block;
                position: relative;
                cursor: pointer;
                box-sizing: border-box;
                -webkit-tap-highlight-color: transparent; /* Remove mobile tap highlight */
            }

            :host([block]) {
                display: block;

                .container {
                    margin-right: 0;
                }
            }

            .container {
                display: flex;
                align-items: center;
                margin-right: 0.75rem;
            }

            input {
                opacity: 0; /* Hide the default radio button */
                position: absolute;
                margin: 0;
                height: 20px;
                width: 20px;
                cursor: pointer;
            }

            .radio_indicator { /* The custom radio indicator */
                cursor: pointer;
                width: 18px;
                height: 18px;
                border-radius: 50%; /* Make it round */
                border: 2px solid var(--pi-radio-input-border-color, #ccc); /* Use a CSS variable for easy styling */
                background-color: var(--pi-radio-input-background-color, #fff);
                margin-right: var(--pi-radio-input-margin-right, 8px); /* Space between indicator and label */
                box-sizing: border-box; /* Include border in size */
                transition: background-color 0.4s ease, 
                            border-color 0.4s ease; /* Smooth transitions */
            }

            input:checked + .radio_indicator {
                background-color: var(--pi-radio-input-color-checked, #2196f3); /* Checked color */
                border-color: var(--pi-radio-input-color-checked, #2196f3);
            }

            input:checked + .radio_indicator::after { /* The inner circle when checked */
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: var(--pi-radio-input-background-color-checked, #FFF); /* Or use a CSS variable */
                position: absolute;
                top: 12px;
                left: 11px;
                transform: translate(-80%, -80%);
            }

            :host([disabled]) {
                input {
                    cursor: default;
                }

                .radio_indicator {
                    background-color: var(--pi-input-bg-color-disabled);
                }
            }

        `]}a("pi-base-form-element",t);a("pi-label",d);class k extends t{static get properties(){return{label:{type:String},name:{type:String},value:{type:String},radios:{type:Array},disabled:{type:Boolean}}}constructor(){super(),this.label="",this.name="",this.value="",this.radios=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("radio-change",e=>this._handleRadioElementChange(e))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("radio-change",e=>this._handleRadioElementChange(e))}render(){return l`
            <pi-label 
            text=${this.label}
            block
            no-padding
            ?hidden=${this.label==""}
            ></pi-label>
            
            <slot @slotchange=${this._handleSlotChange}></slot>
        `}_handleRadioElementChange(e){this.disabled||(typeof e.detail?.value<"u"&&(this.value=e.detail.value,this._dispatchChangeEvent(e.detail.value)),this.syncCheckedRadio())}syncCheckedRadio(){this.radios.forEach(e=>{e.value!==this.value&&(e.checked=!1)})}_collectRadioData(){const e=this.querySelectorAll("[name]");let i="";return e.forEach(r=>{const o=r.closest("pi-radio-input");o?o.checked&&(i=o.getValue()):i=r.value}),i}_handleSlotChange(){this.radios=this.querySelectorAll("pi-radio-input"),this.disabled&&this.radios.forEach(i=>{i.disabled=!0});const e=this._collectRadioData();this.value=e}static styles=[n,s`
            :host {
                display: block;
                position: relative;
                box-sizing: border-box;
            }
        `]}export{g as P,k as a};
