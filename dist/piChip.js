import{LitElement as i,html as e,unsafeCSS as s,css as r}from"lit";import t from"./css/defaultCss.js";import l from"./css/common.css.js";class c extends i{static get properties(){return{label:{type:String},removable:{type:Boolean},isVisible:{type:Boolean}}}constructor(){super(),this.label="",this.removable=!1,this.isVisible=!0}render(){return e`
            <!-- <div class="icon"></div> -->
            <!-- <div class="image"></div> -->
            <div class="label">${this.label}</div>

            ${this.removable?e`
                <div class="remove_icon" @click=${this.closeChip}>X</div>
            `:null}
        `}closeChip(){this.isVisible=!1,this.toggleAttribute("hidden",!this.isVisible)}static styles=[t,s(l),r`
            :host {
                display: inline-flex;
                background: #eee;
                border-radius: 16px;
                padding: 0.5rem 0.75rem;
                align-items: center;
                gap: 0.5rem;
            }

            :host([hidden]) {
                display: none;
            }

            .label {
                color: #444;
                font-size: 14px;
            }

            .remove_icon {
                border: solid 1px #444;
                border-radius: 50%;
                font-size: 8px;
                padding: 0.15rem 0.25rem;
                cursor: pointer;
                user-select: none;
            }
        `]}export{c as PiChip};
//# sourceMappingURL=piChip.js.map
