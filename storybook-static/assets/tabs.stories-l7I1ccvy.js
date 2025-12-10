import{a as r,x as s,i as l}from"./lit-element-SFUTxaLj.js";import{r as o}from"./registerWebComp-C8LEvlHW.js";import{d as p}from"./defaultCss-fIp2nCNg.js";class d extends r{static properties={};constructor(){super()}render(){return s`<slot></slot>`}static styles=l`
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
    `}class c extends r{static get properties(){return{selectedTab:{type:String},tabList:{type:Array}}}constructor(){super(),this.selectedTab="",this.tabList=[]}render(){return s`
            <slot @slotchange=${this.updateTabList}></slot>
        `}handleTabClick(t){this.selectedTab=t.getAttribute("value"),this.updateSelectedTab()}updateSelectedTab(){this.tabList.forEach(a=>{a.getAttribute("value")===this.selectedTab?a.setAttribute("selected",!0):a.removeAttribute("selected")});const t=new CustomEvent("tabSelected",{detail:this.selectedTab,bubbles:!0,composed:!0});this.dispatchEvent(t)}updateTabList(){this.shadowRoot.querySelector("slot").assignedElements().forEach(e=>{e.tagName=="PI-TAB"&&(this.tabList.push(e),this.assignTabListener(e))}),this.initSelectedTab()}initSelectedTab(){!this.selectedTab&&this.tabList.length>0&&(this.selectedTab=this.tabList[0].getAttribute("value"),this.updateSelectedTab())}assignTabListener(t){t.addEventListener("click",()=>this.handleTabClick(t))}static styles=[l`
            :host {
                display: flex;
                border-top: var(--pi-tabs-tab-header-border-top, none);
                border-right: var(--pi-tabs-tab-header-border-right, none);
                border-bottom: var(--pi-tabs-tab-header-border-bottom, 1px solid #ddd);
                border-left: var(--pi-tabs-tab-header-border-left, none);
            }
        `]}class h extends r{static properties={};constructor(){super()}render(){return s`<slot></slot>`}static styles=l`
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
    `}class u extends r{static get properties(){return{selectedTab:{type:String},panelList:{type:Array}}}constructor(){super(),this.selectedTab="",this.panelList=[]}render(){return s`
            <slot @slotchange=${this.updatePanelList}></slot>
        `}updateSelectedTab(t){this.selectedTab=t,this.setActivePanel(this.selectedTab)}setActivePanel(t){this.panelList.forEach(a=>{a.getAttribute("value")===t?a.setAttribute("active",!0):a.removeAttribute("active")})}updatePanelList(){this.shadowRoot.querySelector("slot").assignedElements().forEach(e=>{e.tagName=="PI-TAB-PANEL"&&this.panelList.push(e)}),this.setActivePanel(this.selectedTab)}static styles=[l`
            
        `]}class g extends r{static get properties(){return{selectedTab:{type:String},tabListEl:{type:Object},panelListEl:{type:Object}}}constructor(){super(),this.selectedTab="",this.tabListEl={},this.panelListEl={}}render(){return s`
            <slot @slotchange=${this.handleSlotChange}></slot>
        `}handleTabListSelection(t){this.selectedTab=t.detail,this.panelListEl.updateSelectedTab(this.selectedTab)}handleSlotChange(){this.shadowRoot.querySelector("slot").assignedElements({flatten:!0}).forEach(e=>{e.tagName=="PI-TAB-LIST"&&(e.addEventListener("tabSelected",b=>this.handleTabListSelection(b)),this.tabListEl=e),e.tagName=="PI-TAB-PANELS"&&(this.panelListEl=e)})}static styles=[p,l`
            :host {
                display: block;
            }
        `]}o("pi-tab",d);o("pi-tab-list",c);o("pi-tabs",g);o("pi-tab-panels",u);o("pi-tab-panel",h);const L={title:"Components/Tabs",component:"pi-tabs",tags:["autodocs"],argTypes:{},args:{}},T=({})=>s`
    <pi-tabs>
        <pi-tab-list>
            <pi-tab value="tab1">Tab 1</pi-tab>
            <pi-tab value="tab2">Tab 2</pi-tab>
            <pi-tab value="tab3">Tab 3</pi-tab>
        </pi-tab-list>
        <pi-tab-panels>
            <pi-tab-panel value="tab1">
                <p>Content for tab 1</p>
            </pi-tab-panel>
            <pi-tab-panel value="tab2">
                <ul>
                    <li>Content</li>
                    <li>for</li>
                    <li>tab</li>
                    <li>2</li>
                </ul>
            </pi-tab-panel>
            <pi-tab-panel value="tab3">
                <h5>Content for tab 3</h5>
            </pi-tab-panel>
        </pi-tab-panels>
    </pi-tabs>
`,i=T.bind();i.args={};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({}) => html\`
    <pi-tabs>
        <pi-tab-list>
            <pi-tab value="tab1">Tab 1</pi-tab>
            <pi-tab value="tab2">Tab 2</pi-tab>
            <pi-tab value="tab3">Tab 3</pi-tab>
        </pi-tab-list>
        <pi-tab-panels>
            <pi-tab-panel value="tab1">
                <p>Content for tab 1</p>
            </pi-tab-panel>
            <pi-tab-panel value="tab2">
                <ul>
                    <li>Content</li>
                    <li>for</li>
                    <li>tab</li>
                    <li>2</li>
                </ul>
            </pi-tab-panel>
            <pi-tab-panel value="tab3">
                <h5>Content for tab 3</h5>
            </pi-tab-panel>
        </pi-tab-panels>
    </pi-tabs>
\``,...i.parameters?.docs?.source}}};const E=["Default"];export{i as Default,E as __namedExportsOrder,L as default};
