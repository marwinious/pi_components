import{r as t,x as n,i as s}from"./lit-element-CIbSzfXw.js";class a extends t{static get properties(){return{disabled:{type:Boolean},name:{type:String}}}constructor(){super(),this.disabled=!1,this.name=""}render(){return n`${this.renderInput()}`}renderInput(){throw new Error("renderInput() must be implemented in child class")}_dispatchChangeEvent(e){const i=new CustomEvent("change",{detail:{name:this.name,value:e,group:this.closest("pi-form-group")?.name||null},bubbles:!0,composed:!0});this.dispatchEvent(i)}_handleInputChange(e){this.value=e.target.value,this._dispatchChangeEvent(this.value)}getValue(){return this.value}setValue(e){this.value=e,this._dispatchChangeEvent(this.value)}static styles=[s`
            :host { 
                display: inline-block;
            }
        `]}customElements.define("pi-base-form-element",a);class l extends t{static get properties(){return{text:{type:String}}}constructor(){super(),this.text=""}render(){return n`
            ${this.text}
        `}static styles=[s`
            :host {
                display: inline-block;
                box-sizing: border-box;
                font-size: var(--pi-label-font-size, 1rem);
                text-transform: var(--pi-label-transform, none);
                color: var(--pi-label-color, #888);
                font-weight: var(--pi-label-font-weight, normal);
                padding: var(--pi-label-padding, 0 0 0 0.5rem);
                margin: var(--pi-label-margin, 0 0 0.25rem 0);
            }

            :host([block]) {
                display: block;
            }

            :host([no-padding]) {
                padding: 0;
            }

            :host([no-margin]) {
                margin: 0;
            }
        `]}customElements.define("pi-label",l);export{a as P};
