import{html as i,css as l}from"lit";import{register as e}from"../utils/registerWebComp.js";import o from"./defaultCss.js";import{PiBaseFormElement as t}from"./baseFormElement.js";import{PiLabel as r}from"./label.js";e("pi-base-form-element",t);e("pi-label",r);class p extends t{static get properties(){return{checked:{type:Boolean,reflect:!0},value:{type:Boolean},label:{type:String}}}constructor(){super(),this.checked=!1,this.value=!1,this.label=""}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleInputChange),this.checked&&(this.value=this.checked)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleInputChange)}renderInput(){return i`
            <div 
            class="toggle_container" 
            >
                <div class="slider"></div>
            </div>

            <pi-label
            text=${this.label}
            ?hidden=${this.label==""}
            no-margin
            ></pi-label>
        `}_handleInputChange(){this.disabled||(this.checked=!this.checked,this.value=this.checked,this._dispatchChangeEvent(this.value))}static styles=[o,l`
            :host {
                display: inline-flex;
                align-items: center;
                cursor: pointer;
            }

            :host([checked]) .toggle_container {
                background-color: var(--pi-checkbox-input-fill-color-true, #74c1d6); 
            }

            .toggle_container {
                display: inline-block;
                width: 40px;
                height: 20px;
                border-radius: 10px;
                background-color: var(--pi-toggle-switch-input-fill-color-false, #aaa);
                position: relative;
            }

            .slider {
                position: absolute;
                top: 4px;
                left: 4px;
                right: 4px;
                bottom: 4px;
                border-radius: 9px;
                width: 13px;
                /* height: 15px; */
                background-color: var(--pi-toggle-switch-input-slider-color, #fff);
                transition: transform 0.3s ease-in-out;
            }

            :host([checked]) .slider {
                transform: translateX(19px); 
            }

            :host([disabled]) {
                cursor: default;
                user-select: none;
                
                .toggle_container {
                    background-color: var(--pi-input-bg-color-disabled)
                }
            }
        `]}export{p as PiToggleSwitch};
//# sourceMappingURL=toggleSwitch.js.map
