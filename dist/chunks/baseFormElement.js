import{LitElement as s,html as n,css as a}from"lit";class l extends s{static get properties(){return{disabled:{type:Boolean},name:{type:String}}}constructor(){super(),this.disabled=!1,this.name=""}render(){return n`${this.renderInput()}`}renderInput(){throw new Error("renderInput() must be implemented in child class")}_dispatchChangeEvent(e){const t=new CustomEvent("change",{detail:{name:this.name,value:e,group:this.closest("pi-form-group")?.name||null},bubbles:!0,composed:!0});this.dispatchEvent(t)}_handleInputChange(e){this.value=e.target.value,this._dispatchChangeEvent(this.value)}getValue(){return this.value}setValue(e){this.value=e,this._dispatchChangeEvent(this.value)}static styles=[a`
            :host { 
                display: inline-block;
            }
        `]}export{l as P};
//# sourceMappingURL=baseFormElement.js.map
