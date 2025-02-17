import{r as t,x as e,i as o}from"./lit-element-CIbSzfXw.js";import{d as i}from"./defaultCss-CkMoNE8s.js";class s extends t{static get properties(){return{headerHasContent:{type:Boolean},titleHasContent:{type:Boolean},subTitleHasContent:{type:Boolean},footerHasContent:{type:Boolean}}}constructor(){super(),this.headerHasContent=!1,this.titleHasContent=!1,this.subTitleHasContent=!1,this.footerHasContent=!1}firstUpdated(){this.determineSlotContents()}render(){return e`

            <!-- Conditionally show header if slot is not empty -->
            <div 
            class="header" 
            ?hidden=${!this.headerHasContent}
            >
                <slot name="header"></slot>
            </div>

            <!-- Conditionally show title if slot is not empty -->
            <div 
            class="title" 
            ?hidden=${!this.titleHasContent}
            >
                <slot name="title"></slot>
            </div>

            <!-- Conditionally show title if slot is not empty -->
            <div 
            class="sub_title" 
            ?hidden=${!this.subTitleHasContent}
            >
                <slot name="subTitle"></slot>
            </div>

            <!-- Render default content slot -->
            <div class="content">
                <slot></slot>
            </div>

            <!-- Conditionally show footer if slot is not empty -->
            <div 
            class="footer"
            ?hidden=${!this.footerHasContent}
            >
                <slot name="footer"></slot>
            </div>

        `}determineSlotContents(){this.headerHasContent=this.shadowRoot?.querySelector('slot[name="header"]')?.assignedNodes()?.length>0,this.titleHasContent=this.shadowRoot?.querySelector('slot[name="title"]')?.assignedNodes()?.length>0,this.subTitleHasContent=this.shadowRoot?.querySelector('slot[name="subTitle"]')?.assignedNodes()?.length>0,this.footerHasContent=this.shadowRoot?.querySelector('slot[name="footer"]')?.assignedNodes()?.length>0}static styles=[i,o`
            :host {
                display: block;
                max-width: 100%;
                width: 100%;
                min-width: 0;
                line-height: var(--pi-card-line-height, 1.4rem);
                border: var(--pi-card-border, solid 1px #ccc);
                border-radius: var(--pi-card-border-radius, 4px);
                box-shadow: var(--pi-card-box-shadow, 1px 1px 1px #ddd);
                overflow: hidden;
                margin: var(--pi-card-margin, 0.5rem 0);
                background: var(--pi-card-background, #FFF);
            }

            slot {
                display: block;
            }

            .header {
                width: 100%;
                display: block;
                box-sizing: border-box;
                overflow: hidden;
            }

            .header ::slotted(img) {
                width: 100%;
                max-width: 100%;
                height: auto;
                display: block;
            }

            .title {
                padding: var(--pi-card-title-padding, 1rem 1rem 0rem 1rem);
                font-weight: var(--pi-card-title-font-weight, bold);
                color: var(--pi-card-title-color, #555);
                font-size: var(--pi-card-title-font-size, 1.2rem);
            }

            .sub_title {
                padding: var(--pi-card-sub-title-padding, 0.25rem 1rem 0rem 1rem);
                color: var(--pi-card-sub-title-color, #777);
                font-size: var(--pi-card-sub-title-font-size, 1rem);
            }

            .content {
                padding: var(--pi-card-content-padding, 1rem);
            }

            .footer {
                width: 100%;
                display: block;
                box-sizing: border-box;
                overflow: hidden;
                /* padding: var(--pi-card-footer-padding, 0.5rem 1rem 1rem 1rem); */
            }
        `]}customElements.get("pi-card")||customElements.define("pi-card",s);
