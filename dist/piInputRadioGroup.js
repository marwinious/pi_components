import{html as l,css as s}from"lit";import o from"./css/defaultCss.js";import{PiBaseFormElement as n}from"./components/inputs/base/baseFormElement.js";import"./piLabel.js";class u extends n{static get properties(){return{label:{type:String},name:{type:String},value:{type:String},radios:{type:Array},disabled:{type:Boolean}}}constructor(){super(),this.label="",this.name="",this.value="",this.radios=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("radio-change",e=>this._handleRadioElementChange(e))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("radio-change",e=>this._handleRadioElementChange(e))}render(){return l`
            <pi-label 
            text=${this.label}
            block
            no-padding
            ?hidden=${this.label==""}
            ></pi-label>
            
            <slot @slotchange=${this._handleSlotChange}></slot>
        `}_handleRadioElementChange(e){this.disabled||(typeof e.detail?.value<"u"&&(this.value=e.detail.value,this._dispatchChangeEvent(e.detail.value)),this.syncCheckedRadio())}syncCheckedRadio(){this.radios.forEach(e=>{e.value!==this.value&&(e.checked=!1)})}_collectRadioData(){const e=this.querySelectorAll("[name]");let t="";return e.forEach(i=>{const a=i.closest("pi-radio-input");a?a.checked&&(t=a.getValue()):t=i.value}),t}_handleSlotChange(){this.radios=this.querySelectorAll("pi-radio-input"),this.disabled&&this.radios.forEach(t=>{t.disabled=!0});const e=this._collectRadioData();this.value=e}static styles=[o,s`
            :host {
                display: block;
                position: relative;
                box-sizing: border-box;
            }
        `]}export{u as PiRadioInputGroup};
//# sourceMappingURL=piInputRadioGroup.js.map
