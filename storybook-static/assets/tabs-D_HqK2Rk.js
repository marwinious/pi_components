import{r as a,x as i,i as r}from"./lit-element-CIbSzfXw.js";import{d as n}from"./defaultCss-CkMoNE8s.js";class b extends a{static properties={};constructor(){super()}render(){return i`<slot></slot>`}static styles=r`
        :host {
            display: inline-block;
            padding: var(--pi-tabs-tab-padding, 0.5em 1em);
            cursor: var(--pi-tabs-tab-cursor, pointer);
            color: var(--pi-tabs-tab-text-color, #000);
            font-weight: var(--pi-tabs-tab-font-weight, normal);
            border-bottom: var(--pi-tabs-tab-border-bottom 2px solid transparent);
            background-color: var(--pi-tabs-tab-bg-color, #FFF);
            transition: background-color 0.5s ease, border 0.5s ease, color 0.5s ease;
            user-select: none;
        }

        :host([selected]) {
            font-weight: var(--pi-tabs-tab-font-weight-selected, normal);
            color: var(--pi-tabs-tab-text-color-selected, #000);
            background-color: var(--pi-tabs-tab-bg-color-selected, #DDD);
            border-bottom: var(--pi-tabs-tab-border-bottom-selected, #000);
        }
    `}customElements.get("pi-tab")||customElements.define("pi-tab",b);class d extends a{static get properties(){return{selectedTab:{type:String},tabList:{type:Array}}}constructor(){super(),this.selectedTab="",this.tabList=[]}render(){return i`
            <slot @slotchange=${this.updateTabList}></slot>
        `}handleTabClick(t){this.selectedTab=t.getAttribute("value"),this.updateSelectedTab()}updateSelectedTab(){this.tabList.forEach(s=>{s.getAttribute("value")===this.selectedTab?s.setAttribute("selected",!0):s.removeAttribute("selected")});const t=new CustomEvent("tabSelected",{detail:this.selectedTab,bubbles:!0,composed:!0});this.dispatchEvent(t)}updateTabList(){this.shadowRoot.querySelector("slot").assignedElements().forEach(e=>{e.tagName=="PI-TAB"&&(this.tabList.push(e),this.assignTabListener(e))}),this.initSelectedTab()}initSelectedTab(){!this.selectedTab&&this.tabList.length>0&&(this.selectedTab=this.tabList[0].getAttribute("value"),this.updateSelectedTab())}assignTabListener(t){t.addEventListener("click",()=>this.handleTabClick(t))}static styles=[r`
            :host {
                display: flex;
                border-top: var(--pi-tabs-tab-header-border-top, none);
                border-right: var(--pi-tabs-tab-header-border-right, none);
                border-bottom: var(--pi-tabs-tab-header-border-bottom, 1px solid #ddd);
                border-left: var(--pi-tabs-tab-header-border-left, none);
            }
        `]}customElements.get("pi-tab-list")||customElements.define("pi-tab-list",d);class c extends a{static properties={};constructor(){super()}render(){return i`<slot></slot>`}static styles=r`
        :host {
            display: none;
            color: var(--pi-tabs-panel-text-color, inherit);
            background-color: var(--pi-tabs-panel-bg-color, inherit);
            padding: var(--pi-tabs-panel-padding, 1rem);
            border-style: var(--pi-tabs-panel-border-style, solid);
            border-width: var(--pi-tabs-panel-border-width, 1px);
            border-color: var(--pi-tabs-panel-border-color, #ddd);
        }
        
        :host([active]) {
            display: block;
        }
    `}customElements.get("pi-tab-panel")||customElements.define("pi-tab-panel",c);class p extends a{static get properties(){return{selectedTab:{type:String},panelList:{type:Array}}}constructor(){super(),this.selectedTab="",this.panelList=[]}render(){return i`
            <slot @slotchange=${this.updatePanelList}></slot>
        `}updateSelectedTab(t){this.selectedTab=t,this.setActivePanel(this.selectedTab)}setActivePanel(t){this.panelList.forEach(s=>{s.getAttribute("value")===t?s.setAttribute("active",!0):s.removeAttribute("active")})}updatePanelList(){this.shadowRoot.querySelector("slot").assignedElements().forEach(e=>{e.tagName=="PI-TAB-PANEL"&&this.panelList.push(e)}),this.setActivePanel(this.selectedTab)}static styles=[r`
            
        `]}customElements.get("pi-tab-panels")||customElements.define("pi-tab-panels",p);class h extends a{static get properties(){return{selectedTab:{type:String},tabListEl:{type:Object},panelListEl:{type:Object}}}constructor(){super(),this.selectedTab="",this.tabListEl={},this.panelListEl={}}render(){return i`
            <slot @slotchange=${this.handleSlotChange}></slot>
        `}handleTabListSelection(t){this.selectedTab=t.detail,this.panelListEl.updateSelectedTab(this.selectedTab)}handleSlotChange(){this.shadowRoot.querySelector("slot").assignedElements({flatten:!0}).forEach(e=>{e.tagName=="PI-TAB-LIST"&&(e.addEventListener("tabSelected",l=>this.handleTabListSelection(l)),this.tabListEl=e),e.tagName=="PI-TAB-PANELS"&&(this.panelListEl=e)})}static styles=[n,r`
            :host {
                display: block;
            }
        `]}customElements.get("pi-tabs")||customElements.define("pi-tabs",h);
