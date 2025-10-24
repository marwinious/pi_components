import{html as o,css as a}from"lit";import{register as e}from"./src/registerWebComp.js";import l from"./src/css/defaultCss.js";import{PiBaseFormElement as i}from"./src/components/inputs/base/baseFormElement.js";import{PiLabel as n}from"./piLabel.js";e("pi-base-form-element",i);e("pi-label",n);class b extends i{static get properties(){return{placeholder:{type:String},showLabel:{type:Boolean,attribute:!1},value:{type:String},disabled:{type:Boolean,reflect:!0},label:{type:String},checked:{type:Boolean,reflect:!0},name:{type:String}}}constructor(){super(),this.placeholder="",this.showLabel=!1,this.value="",this.disabled=!1,this.label="",this.checked=!1,this._group=[],this.name=""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return o`
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
            
        `}_handleInputChange(r){this.value=r.target.value,this.checked=!this.checked;const t=new CustomEvent("radio-change",{detail:{name:this.name,value:this.value,group:null},bubbles:!0,composed:!0});this.dispatchEvent(t)}static styles=[l,a`
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

        `]}export{b as PiRadioInput};
//# sourceMappingURL=piInputRadio.js.map
