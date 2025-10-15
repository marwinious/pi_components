import{LitElement as a,html as i,css as r}from"lit";class l extends a{static get properties(){return{selectedTab:{type:String},tabList:{type:Array}}}constructor(){super(),this.selectedTab="",this.tabList=[]}render(){return i`
            <slot @slotchange=${this.updateTabList}></slot>
        `}handleTabClick(t){this.selectedTab=t.getAttribute("value"),this.updateSelectedTab()}updateSelectedTab(){this.tabList.forEach(e=>{e.getAttribute("value")===this.selectedTab?e.setAttribute("selected",!0):e.removeAttribute("selected")});const t=new CustomEvent("tabSelected",{detail:this.selectedTab,bubbles:!0,composed:!0});this.dispatchEvent(t)}updateTabList(){this.shadowRoot.querySelector("slot").assignedElements().forEach(s=>{s.tagName=="PI-TAB"&&(this.tabList.push(s),this.assignTabListener(s))}),this.initSelectedTab()}initSelectedTab(){!this.selectedTab&&this.tabList.length>0&&(this.selectedTab=this.tabList[0].getAttribute("value"),this.updateSelectedTab())}assignTabListener(t){t.addEventListener("click",()=>this.handleTabClick(t))}static styles=[r`
            :host {
                display: flex;
                border-top: var(--pi-tabs-tab-header-border-top, none);
                border-right: var(--pi-tabs-tab-header-border-right, none);
                border-bottom: var(--pi-tabs-tab-header-border-bottom, 1px solid #ddd);
                border-left: var(--pi-tabs-tab-header-border-left, none);
            }
        `]}export{l as PiTabList};
//# sourceMappingURL=piTabList.js.map
