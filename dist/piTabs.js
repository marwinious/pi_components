import{LitElement as a,html as l,css as i}from"lit";import n from"./css/defaultCss.js";class r extends a{static get properties(){return{selectedTab:{type:String},tabListEl:{type:Object},panelListEl:{type:Object}}}constructor(){super(),this.selectedTab="",this.tabListEl={},this.panelListEl={}}render(){return l`
            <slot @slotchange=${this.handleSlotChange}></slot>
        `}handleTabListSelection(e){this.selectedTab=e.detail,this.panelListEl.updateSelectedTab(this.selectedTab)}handleSlotChange(){this.shadowRoot.querySelector("slot").assignedElements({flatten:!0}).forEach(t=>{t.tagName=="PI-TAB-LIST"&&(t.addEventListener("tabSelected",s=>this.handleTabListSelection(s)),this.tabListEl=t),t.tagName=="PI-TAB-PANELS"&&(this.panelListEl=t)})}static styles=[n,i`
            :host {
                display: block;
            }
        `]}export{r as PiTabs};
//# sourceMappingURL=piTabs.js.map
