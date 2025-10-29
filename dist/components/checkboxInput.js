import{html as o,css as c}from"lit";import{register as e}from"../utils/registerWebComp.js";import i from"./defaultCss.js";import{PiBaseFormElement as r}from"./baseFormElement.js";import{PiLabel as t}from"./label.js";e("pi-base-form-element",r);e("pi-label",t);class p extends r{static get properties(){return{checked:{type:Boolean,reflect:!0},label:{type:String},value:{type:Boolean}}}constructor(){super(),this.checked=!1,this.label="",this.value=!1}renderInput(){return o`
            <div 
            class="checkbox-container" 
            @click=${this._handleInputChange}
            >
                <div class="checkmark"></div>
            </div>

            <pi-label
            text=${this.label}
            ?hidden=${this.label==""}
            @click=${this._handleInputChange}
            no-margin
            ></pi-label>
        `}_handleInputChange(){this.disabled||(this.checked=!this.checked,this.value=this.checked,this._dispatchChangeEvent(this.value))}static styles=[i,c`
            :host {
                display: inline-flex; /* Use inline-flex for label alignment */
                align-items: center; /* Vertically align checkbox and label */
                cursor: pointer;
                user-select: none;
            }

            .checkbox-container {
                position: relative; /* For positioning the checkmark */
                width: var(--pi-checkbox-input-inner-width, 20px); /* Adjust size as needed */
                height: var(--pi-checkbox-input-inner-height, 20px);
                border-width: var(--pi-checkbox-border-width, 2px); /* Or your preferred border style */
                border-style: var(--pi-checkbox-border-style, solid); /* Or your preferred border style */
                border-color: var(--pi-checkbox-border-color); /* Or your preferred border style */
                border-radius: var(--pi-checkbox-border-radius, 3px); /* Optional rounded corners */
                background-color: var(--pi-checkbox-background-color, #fff); /* Default background color */
            }

            .checkmark {
                position: absolute;
                top: 0.48rem;
                left: 0.48rem;
                transform: translate(-50%, -50%);
                width: var(--pi-checkbox-input-width, 12px); /* Adjust checkmark size */
                height: var(--pi-checkbox-input-height, 12px);
                background-color: var(--pi-checkbox-input-fill-color-true, #74c1d6); /* Or your checkmark color */
                border-radius: var(--pi-checkbox-input-border-radius, 2px); /* Optional rounded checkmark */
                opacity: 0; /* Initially hidden */
                transition: opacity 0.2s ease; /* Smooth appearance */
            }

            :host([checked]) .checkmark { /* Show checkmark when checked */
                opacity: 1;
            }

            /* Optional: Style the container on hover */
            .checkbox-container:hover {
                border-color: var(--pi-checkbox-input-fill-color-true, #74c1d6);
            }

            /* Optional: Style the container when checked */
            :host([checked]) .checkbox-container {
                background-color: var(--pi-checkbox-input-fill-color-false, #ccc); /* Or your checked background color */
            }

            :host([disabled]) {
                cursor: default;

                .checkbox-container {
                    background-color: var(--pi-input-bg-color-disabled);
                }
            }
        `]}export{p as PiCheckboxInput};
//# sourceMappingURL=checkboxInput.js.map
