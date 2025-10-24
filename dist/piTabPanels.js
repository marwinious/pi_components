import{LitElement as i,html as a,css as l}from"lit";class c extends i{static get properties(){return{selectedTab:{type:String},panelList:{type:Array}}}constructor(){super(),this.selectedTab="",this.panelList=[]}render(){return a`
            <slot @slotchange=${this.updatePanelList}></slot>
        `}updateSelectedTab(t){this.selectedTab=t,this.setActivePanel(this.selectedTab)}setActivePanel(t){this.panelList.forEach(e=>{e.getAttribute("value")===t?e.setAttribute("active",!0):e.removeAttribute("active")})}updatePanelList(){this.shadowRoot.querySelector("slot").assignedElements().forEach(s=>{s.tagName=="PI-TAB-PANEL"&&this.panelList.push(s)}),this.setActivePanel(this.selectedTab)}static styles=[l`
            
        `]}export{c as PiTabPanels};
//# sourceMappingURL=piTabPanels.js.map
