import{html as o,css as n}from"lit";import{register as l}from"./src/registerWebComp.js";import r from"./src/css/defaultCss.js";import{PiBaseFormElement as s}from"./src/components/inputs/base/baseFormElement.js";import{PiLabel as d}from"./piLabel.js";l("pi-base-form-element",s);l("pi-label",d);class f extends s{static get properties(){return{label:{type:String},name:{type:String},value:{type:String},radios:{type:Array},disabled:{type:Boolean}}}constructor(){super(),this.label="",this.name="",this.value="",this.radios=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("radio-change",e=>this._handleRadioElementChange(e))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("radio-change",e=>this._handleRadioElementChange(e))}render(){return o`
            <pi-label 
            text=${this.label}
            block
            no-padding
            ?hidden=${this.label==""}
            ></pi-label>
            
            <slot @slotchange=${this._handleSlotChange}></slot>
        `}_handleRadioElementChange(e){this.disabled||(typeof e.detail?.value<"u"&&(this.value=e.detail.value,this._dispatchChangeEvent(e.detail.value)),this.syncCheckedRadio())}syncCheckedRadio(){this.radios.forEach(e=>{e.value!==this.value&&(e.checked=!1)})}_collectRadioData(){const e=this.querySelectorAll("[name]");let t="";return e.forEach(i=>{const a=i.closest("pi-radio-input");a?a.checked&&(t=a.getValue()):t=i.value}),t}_handleSlotChange(){this.radios=this.querySelectorAll("pi-radio-input"),this.disabled&&this.radios.forEach(t=>{t.disabled=!0});const e=this._collectRadioData();this.value=e}static styles=[r,n`
            :host {
                display: block;
                position: relative;
                box-sizing: border-box;
            }
        `]}export{f as PiRadioInputGroup};
//# sourceMappingURL=piInputRadioGroup.js.map
