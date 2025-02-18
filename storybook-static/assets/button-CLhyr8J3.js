import{a as e,i as o,r as i,x as r}from"./lit-element-qJpPW6A9.js";import{e as a}from"./class-map-yYL26NNl.js";import"./iconUserRoundedLight-DAA4Ng5V.js";const b=".raised{box-shadow:var(--pi-raised-box-shadow, 0px 1px 2px 1px #aaa)}.rounded{border-radius:var(--pi-rounded-border-radius, 2rem)}.squared{border-radius:var(--pi-squared-border-radius, 0rem)}",c=["primary","secondary","success","info","warn","help","danger"],l=()=>c.map(t=>`
    .btn_severity_${t} {
        --pi-button-bg-color: var(--pi-button-bg-color-${t});
        --pi-button-text-color: var(--pi-button-text-color-${t});
        --pi-button-border: var(--pi-button-border-${t});
        --pi-button-hover-bg-color: var(--pi-button-hover-bg-color-${t});
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-${t}, #FFF);
        --pi-button-hover-border-color: var(--pi-button-hover-border-color-${t});
        --pi-button-active-bg-color: var(--pi-button-active-bg-color-${t});
        --pi-button-active-text-color: var(--pi-button-active-text-color-${t});
        --pi-button-active-border-color: var(--pi-button-active-border-color-${t});
    }
`).join(""),s=o`

    ${e(l())}


`,u=o`

    /**
    TEXT VARIANT
     */
    .btn_variant_text {
        --pi-button-bg-color: transparent;
        --pi-button-border: none;
        --pi-button-hover-bg-color: #eee;
        --pi-button-text-color: var(--pi-button-bg-color-default);
    }

    .btn_variant_text.btn_severity_primary {
        --pi-button-text-color: var(--pi-button-bg-color-primary);
        --pi-button-hover-text-color: var(--pi-button-bg-color-primary);
    }

    .btn_variant_text.btn_severity_secondary {
        --pi-button-text-color: var(--pi-button-text-color-secondary);
        --pi-button-hover-text-color: var(--pi-button-text-color-secondary);
    }

    .btn_variant_text.btn_severity_success {
        --pi-button-text-color: var(--pi-button-bg-color-success);
        --pi-button-hover-text-color: var(--pi-button-bg-color-success);
    }

    .btn_variant_text.btn_severity_info {
        --pi-button-text-color: var(--pi-button-bg-color-info);
        --pi-button-hover-text-color: var(--pi-button-bg-color-info);
    }

    .btn_variant_text.btn_severity_warn {
        --pi-button-text-color: var(--pi-button-bg-color-warn);
        --pi-button-hover-text-color: var(--pi-button-bg-color-warn);
    }

    .btn_variant_text.btn_severity_help {
        --pi-button-text-color: var(--pi-button-bg-color-help);
        --pi-button-hover-text-color: var(--pi-button-bg-color-help);
    }

    .btn_variant_text.btn_severity_danger {
        --pi-button-text-color: var(--pi-button-bg-color-danger);
        --pi-button-hover-text-color: var(--pi-button-bg-color-danger);
    }

    .btn_variant_text[disabled] {
        --pi-button-disabled-bg-color: transparent;
        --pi-button-disabled-text-color: var(--pi-button-bg-color-disabled);
    }

    /**
    OUTLINED VARIANT
     */
    .btn_variant_outlined {
        --pi-button-bg-color: transparent;
        --pi-button-text-color: var(--pi-button-bg-color-default);
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-default-outlined);
        --pi-button-hover-bg-color: #eee;
        
    }

    .btn_variant_outlined.btn_severity_primary {
        --pi-button-text-color: var(--pi-button-bg-color-primary);
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-primary);
        --pi-button-hover-bg-color: var(--pi-button-bg-color-primary);
    }

    .btn_variant_outlined.btn_severity_secondary {
        --pi-button-text-color: var(--pi-button-text-color-secondary);
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-secondary);
        --pi-button-hover-bg-color: var(--pi-button-bg-color-secondary);
    }

    .btn_variant_outlined.btn_severity_success {
        --pi-button-text-color: var(--pi-button-bg-color-success);
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-success);
        --pi-button-hover-bg-color: var(--pi-button-bg-color-success);
    }

    .btn_variant_outlined.btn_severity_info {
        --pi-button-text-color: var(--pi-button-bg-color-info);
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-info);
        --pi-button-hover-bg-color: var(--pi-button-bg-color-info);
    }

    .btn_variant_outlined.btn_severity_warn {
        --pi-button-text-color: var(--pi-button-bg-color-warn);
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-warn);
        --pi-button-hover-bg-color: var(--pi-button-bg-color-warn);
    }

    .btn_variant_outlined.btn_severity_help {
        --pi-button-text-color: var(--pi-button-bg-color-help);
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-help);
        --pi-button-hover-bg-color: var(--pi-button-bg-color-help);
    }

    .btn_variant_outlined.btn_severity_danger {
        --pi-button-text-color: var(--pi-button-bg-color-danger);
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-danger);
        --pi-button-hover-bg-color: var(--pi-button-bg-color-danger);
    }

    .btn_variant_outlined[disabled] {
        --pi-button-disabled-bg-color: transparent;
        --pi-button-disabled-text-color: var(--pi-button-bg-color-disabled);
    }

    
`,d=o`

    .btn_variant_iconOnly.rounded {
        border-radius: 50%;
        padding: 0.5rem;
    }

    :host([icon]) .btn_variant_outlined .button_icon_container,
    :host([icon]) .btn_variant_text .button_icon_container {
        fill: var(--pi-button-bg-color-default);
    }

    .btn_severity_primary .button_icon_container {
        fill: var(--pi-button-text-color-primary);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_primary .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_primary .button_icon_container {
        fill: var(--pi-button-bg-color-primary);
    }

    .btn_severity_secondary .button_icon_container {
        fill: var(--pi-button-text-color-secondary);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_secondary .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_secondary .button_icon_container {
        fill: var(--pi-button-text-color-secondary);
    }

    .btn_severity_success .button_icon_container {
        fill: var(--pi-button-text-color-success);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_success .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_success .button_icon_container {
        fill: var(--pi-button-bg-color-success);
    }

    .btn_severity_info .button_icon_container {
        fill: var(--pi-button-text-color-info);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_info .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_info .button_icon_container {
        fill: var(--pi-button-bg-color-info);
    }

    .btn_severity_warn .button_icon_container {
        fill: var(--pi-button-text-color-warn);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_warn .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_warn .button_icon_container {
        fill: var(--pi-button-bg-color-warn);
    }

    .btn_severity_help .button_icon_container {
        fill: var(--pi-button-text-color-help);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_help .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_help .button_icon_container {
        fill: var(--pi-button-bg-color-help);
    }

    .btn_severity_danger .button_icon_container {
        fill: var(--pi-button-text-color-danger);
    }

    :host([icon]) .btn_variant_outlined.btn_severity_danger .button_icon_container,
    :host([icon]) .btn_variant_text.btn_severity_danger .button_icon_container {
        fill: var(--pi-button-bg-color-danger);
    }

    button[disabled].btn_variant_outlined .button_icon_container,
    button[disabled].btn_variant_text .button_icon_container {
        fill: var(--pi-button-bg-color-disabled) !important;
    }

`,p=o`

    :host([badge]) .btn_variant_text pi-badge {
        background-color: var(--pi-button-bg-color-default);
    }

    :host([badge]) .btn_variant_text.btn_severity_primary pi-badge,
    :host([badge]) .btn_variant_outlined.btn_severity_primary pi-badge {
        background-color: var(--pi-button-bg-color-primary);
    }

    :host([badge]) .btn_variant_text.btn_severity_secondary pi-badge,
    :host([badge]) .btn_variant_outlined.btn_severity_secondary pi-badge {
        background-color: var(--pi-button-text-color-secondary);
    }

    :host([badge]) .btn_variant_text.btn_severity_success pi-badge,
    :host([badge]) .btn_variant_outlined.btn_severity_success pi-badge {
        background-color: var(--pi-button-bg-color-success);
    }

    :host([badge]) .btn_variant_text.btn_severity_info pi-badge,
    :host([badge]) .btn_variant_outlined.btn_severity_info pi-badge {
        background-color: var(--pi-button-bg-color-info);
    }

    :host([badge]) .btn_variant_text.btn_severity_warn pi-badge,
    :host([badge]) .btn_variant_outlined.btn_severity_warn pi-badge {
        background-color: var(--pi-button-bg-color-warn);
    }

    :host([badge]) .btn_variant_text.btn_severity_help pi-badge,
    :host([badge]) .btn_variant_outlined.btn_severity_help pi-badge {
        background-color: var(--pi-button-bg-color-help);
    }

    :host([badge]) .btn_variant_text.btn_severity_danger pi-badge,
    :host([badge]) .btn_variant_outlined.btn_severity_danger pi-badge {
        background-color: var(--pi-button-bg-color-danger);
    }

    button[disabled].btn_variant_outlined pi-badge,
    button[disabled].btn_variant_text pi-badge {
        background-color: var(--pi-button-bg-color-disabled) !important;
    }

`;class _ extends i{static get properties(){return{}}constructor(){super()}render(){return r`
            <slot></slot>
        `}static styles=[o`
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: var(--pi-badge-width, 10px);
                height: var(--pi-badge-height, 10px);
                font-size: var(--pi-badge-font-size, 0.75rem);
                border-radius: var(--pi-badge-border-radius, 50%);
                background: var(--pi-badge-background-color, rgba(0,0,0,0.25));
                padding: var(--pi-badge-padding, 0.27rem);
                color: #FFF;
            }
        `]}customElements.get("pi-badge")||customElements.define("pi-badge",_);class v extends i{static get properties(){return{disabled:{type:Boolean},icon:{type:String},severity:{type:String},raised:{type:Boolean},rounded:{type:Boolean},squared:{type:Boolean},variant:{type:String},badge:{type:[Number,String]},type:{type:String}}}constructor(){super(),this.disabled=!1,this.icon="",this.severity="",this.raised=!1,this.rounded=!1,this.squared=!1,this.variant=!1,this.badge=null,this.type="button"}render(){const n={[`btn_severity_${this.severity}`]:!0,[`btn_variant_${this.variant}`]:!0,raised:this.raised===!0,rounded:this.rounded===!0,squared:this.squared===!0};return r`
            <button 
            type=${this.type}
            class=${a(n)}
            ?disabled=${this.disabled}
            @click=${this._handleClick}
            >

                <span class="button_content_container">
                    <!-- Optional icon -->
                    <span class="button_icon_container">
                        <pi-icon-handler .icon=${this.icon}></pi-icon-handler>
                    </span>

                    <!-- Button text -->
                    ${this.variant!="iconOnly"?r`
                        <slot></slot>
                    `:null}
                    

                    <!-- Optional Badge -->
                    <pi-badge>${this.badge}</pi-badge>
                </span>
                
            </button>
        `}_handleClick(n){this.type!=="submit"?this.dispatchEvent(new CustomEvent("click",{detail:n})):this.dispatchEvent(new CustomEvent("pi-submit",{detail:n,composed:!0,bubbles:!0}))}static styles=[s,u,d,p,e(b),o`
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
                align-items: center;
                justify-content: center;
                width: 0;
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

        `]}customElements.define("pi-button",v);
