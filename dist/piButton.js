import{LitElement as i,html as o,unsafeCSS as n,css as e}from"lit";import r from"./src/css/common.css.js";import{classMap as a}from"lit/directives/class-map.js";import s from"./src/components/buttons/css/buttonSeverityCss.js";import d from"./src/components/buttons/css/buttonVariantCss.js";import l from"./src/components/buttons/css/buttonIconsCss.js";import c from"./src/components/buttons/css/buttonBadgeCss.js";import{PiBadge as p}from"./piBadge.js";import{register as b}from"./src/registerWebComp.js";b("pi-badge",p);class w extends i{static get properties(){return{disabled:{type:Boolean},icon:{type:String},severity:{type:String},raised:{type:Boolean},rounded:{type:Boolean},squared:{type:Boolean},variant:{type:String},badge:{type:String},type:{type:String}}}constructor(){super(),this.disabled=!1,this.icon="",this.severity="",this.raised=!1,this.rounded=!1,this.squared=!1,this.variant=!1,this.badge=null,this.type="button"}render(){const t={[`btn_severity_${this.severity}`]:!0,[`btn_variant_${this.variant}`]:!0,raised:this.raised===!0,rounded:this.rounded===!0,squared:this.squared===!0};return o`
            <button 
            type="${this.type}"
            class=${a(t)}
            ?disabled=${this.disabled}
            @click=${this._handleClick}
            >

                <span class="button_content_container">
                    <!-- Optional icon -->
                    <span class="button_icon_container">
                        <slot name="icon"></slot>
                    </span>

                    <!-- Button text -->
                    ${this.variant!="iconOnly"?o`
                        <slot></slot>
                    `:null}
                    

                    <!-- Optional Badge -->
                    <pi-badge>${this.badge}</pi-badge>
                </span>
                
            </button>
        `}_handleClick(t){t.stopPropagation(),this.type!=="submit"?this.dispatchEvent(new CustomEvent("click",{detail:t})):this.dispatchEvent(new CustomEvent("pi-submit",{detail:t,composed:!0,bubbles:!0}))}static styles=[s,d,l,c,n(r),e`
            :host {
                display: inline-flex;
                align-items: flex-start;
                justify-content: center;
            }

            :host([fullWidth]) {
                width: 100%;
            }

            button {
                display: block;
                height: 100%;
                width: 100%;
                padding: 0;
                border-radius: var(--pi-button-border-radius, 5px);
                font-weight: var(--pi-button-font-weight, bold);
                font-size: var(--pi-button-font-size, 16px);
                cursor: var(--pi-button-cursor, pointer);
                user-select: none; 
                transition: background-color 0.2s ease, border 0.2s ease, color 0.2s ease;
                background: var(--pi-button-bg-color, #333);
                border: var(--pi-button-border, solid 1px #333);
                color: var(--pi-button-text-color, #FFF);

                &:hover {
                    background: var(--pi-button-hover-bg-color, #666);
                    border-color: var(--pi-button-hover-border-color, #666);
                    color: var(--pi-button-hover-text-color, #FFF);
                }

                &:active {
                    background: var(--pi-button-active-bg-color, #FFF);
                    color: var(--pi-button-active-text-color, #000);
                    border-color: var(--pi-button-active-border-color, #000);
                }

                &:disabled, &[disabled] {
                    background: var(--pi-button-disabled-bg-color, #bbb);
                    border-color: var(--pi-button-disabled-border-color, #bbb);
                    color: var(--pi-button-disabled-text-color, #fff);
                    cursor: not-allowed;
                    pointer-events: none;
                }
            }

            .button_content_container {
                display: flex;
                align-items: center;
                gap: 0;
                padding: var(--pi-button-padding, 7px 12px);
                justify-content: center;
            }

            :host([icon]:not([variant="iconOnly"])) .button_content_container,
            :host([badge]:not([variant="iconOnly"])) .button_content_container {
                gap: 5px;
            }

            :host([icon][variant="iconOnly"]) .button_content_container {
                padding: 0.5rem;
            }

            :host([icon][variant="iconOnly"][rounded]) .button_content_container {
                padding: 0.14rem;
            }

            .button_icon_container {
                display: inline-flex;
                gap: var(--pi-button-icon-gap, 5px);
                align-items: center;
                justify-content: center;
                width: var(--pi-button-icon-width, 15px);
                height: var(--pi-button-icon-height, 15px);
                fill: var(--pi-button-icon-fill-color, #FFF);
            }

            :host([icon]) .button_icon_container {
                width: var(--pi-button-icon-width, 15px);
            }

            pi-badge { 
                display: none;
            }

            :host([badge]) pi-badge {
                display: inline-flex;
            }

        `]}export{w as PiButton};
//# sourceMappingURL=piButton.js.map
