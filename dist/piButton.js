import{LitElement as i,html as o,unsafeCSS as r,css as p}from"lit";import n from"./css/common.css.js";import{classMap as e}from"lit/directives/class-map.js";import m from"./components/buttons/css/buttonSeverityCss.js";import a from"./components/buttons/css/buttonVariantCss.js";import s from"./components/buttons/css/buttonIconsCss.js";import c from"./components/buttons/css/buttonBadgeCss.js";import"./components/icons/base/iconBase.js";import"./components/icons/base/iconHandler.js";import"./components/icons/components/iconLeftArrowCircled.js";import"./components/icons/components/iconChainLink.js";import"./components/icons/components/iconAlertTriangleDark.js";import"./components/icons/components/iconAlertTriangleLight.js";import"./components/icons/components/iconAreaChartStand.js";import"./components/icons/components/iconAvatarGenericLight.js";import"./components/icons/components/iconCloseSquareDark.js";import"./components/icons/components/iconEditImage.js";import"./components/icons/components/iconEditPageFilled.js";import"./components/icons/components/iconEditVideo.js";import"./components/icons/components/iconGearSolid.js";import"./components/icons/components/iconInfoChatBubbleDark.js";import"./components/icons/components/iconInfoChatBubbleLight.js";import"./components/icons/components/iconInfoFilled.js";import"./components/icons/components/iconInfoLight.js";import"./components/icons/components/iconInfoRoundedDark.js";import"./components/icons/components/iconInfoRoundedLight.js";import"./components/icons/components/iconInfoSimpleDark.js";import"./components/icons/components/iconInfoSimpleLight.js";import"./components/icons/components/iconLogout.js";import"./components/icons/components/iconMagnifyText.js";import"./components/icons/components/iconNotificationBoxDark.js";import"./components/icons/components/iconNotificationBoxLight.js";import"./components/icons/components/iconPaperAirplaneSolid.js";import"./components/icons/components/iconSlackLogoSlanted.js";import"./components/icons/components/iconStopExDark.js";import"./components/icons/components/iconStopExLight.js";import"./components/icons/components/iconThumbsDownDark.js";import"./components/icons/components/iconThumbsDownLight.js";import"./components/icons/components/iconThumbsUpDark.js";import"./components/icons/components/iconThumbsUpLight.js";import"./components/icons/components/iconToggleOff.js";import"./components/icons/components/iconToggleOn.js";import"./components/icons/components/iconUserRoundedDark.js";import"./components/icons/components/iconUserRoundedLight.js";import"./components/icons/components/iconGridLight.js";import"./components/icons/components/iconGridDark.js";import"./components/icons/components/iconLayoutLight.js";import"./components/icons/components/iconLayoutDark.js";import"./components/icons/components/iconFilePaperLight.js";import"./components/icons/components/iconFilePaperDark.js";import"./components/icons/components/iconCaretCircleDownDark.js";import"./components/icons/components/iconCaretCircleDownLight.js";import"./components/icons/components/iconCaretCircleLeftDark.js";import"./components/icons/components/iconCaretCircleLeftLight.js";import"./components/icons/components/iconCaretCircleRightDark.js";import"./components/icons/components/iconCaretCircleRightLight.js";import"./components/icons/components/iconCaretCircleUpDark.js";import"./components/icons/components/iconCaretCircleUpLight.js";import"./components/icons/components/iconCaretDownDark.js";import"./components/icons/components/iconCaretDownLight.js";import"./components/icons/components/iconCaretLeftDark.js";import"./components/icons/components/iconCaretLeftLight.js";import"./components/icons/components/iconCaretRightDark.js";import"./components/icons/components/iconCaretRightLight.js";import"./components/icons/components/iconCaretUpDark.js";import"./components/icons/components/iconCaretUpLight.js";import"./components/icons/components/iconCoinDark.js";import"./components/icons/components/iconCoinLight.js";import"./components/icons/components/iconFlagDark.js";import"./components/icons/components/iconFlagLight.js";import"./components/icons/components/iconFlagFancyDark.js";import"./components/icons/components/iconFlagFancyLight.js";import"./components/icons/components/iconFlagWavyDark.js";import"./components/icons/components/iconFlagWavyLight.js";import"./components/icons/components/iconGlobeDark.js";import"./components/icons/components/iconGlobeLight.js";import"./components/icons/components/iconListBulletsLight.js";import"./components/icons/components/iconListSquaresDark.js";import"./components/icons/components/iconListSquaresLight.js";import"./components/icons/components/iconPaperDark.js";import"./components/icons/components/iconPaperLight.js";import"./components/icons/components/iconPaperSquareLight.js";import"./components/icons/components/iconPaperStackFancyDark.js";import"./components/icons/components/iconPaperStackFancyLight.js";import"./components/icons/components/iconStarDark.js";import"./components/icons/components/iconStarLight.js";import"./components/icons/components/iconStarHalfFilled.js";import"./components/icons/components/iconTagDark.js";import"./components/icons/components/iconTagLight.js";import"./components/icons/components/iconTagStackDark.js";import"./components/icons/components/iconTagStackLight.js";import"./components/icons/components/iconWebGlobeDark.js";import"./components/icons/components/iconWebGlobeLight.js";import"./components/icons/components/iconMenuDotHorizontalCircledLight.js";import"./components/icons/components/iconMenuDotHorizontalCircledDark.js";import"./components/icons/components/iconMenuDotHorizontalSolid.js";import"./components/icons/components/iconMenuDotVerticalSolid.js";import"./components/icons/components/iconMenuDotHorizontalThick.js";import"./components/icons/components/iconMenuDotVerticalThick.js";import"./components/icons/components/iconMenuDotHorizontalThin.js";import"./components/icons/components/iconMenuDotVerticalThin.js";import"./components/icons/components/iconMenuHamburgerRounded.js";import"./components/icons/components/iconMenuHamburgerCorners.js";import"./components/icons/components/iconMenuHamburgerCornersThick.js";import"./components/icons/components/iconMenuHamburgerCircledLight.js";import"./components/icons/components/iconMenuHamburgerCircledDark.js";import"./components/icons/components/iconMagnifyingGlass.js";import"./components/icons/components/iconCheckmarkCircleDark.js";import"./components/icons/components/iconCheckmarkCircleLight.js";import"./components/icons/components/iconCheckmarkCircleLight2.js";import"./components/icons/components/iconCheckmarkCommentDark.js";import"./components/icons/components/iconCheckmarkCommentLight.js";import"./components/icons/components/iconCheckmarkLight.js";import"./components/icons/components/iconCheckmarkLight2.js";import"./components/icons/components/iconCheckmarkLight3.js";import"./components/icons/components/iconCheckmarkSquareDark.js";import"./components/icons/components/iconCheckmarkSquareDark2.js";import"./components/icons/components/iconCheckmarkSquareLight.js";import"./components/icons/components/iconCheckmarkSquareLight2.js";import"./components/icons/components/iconCheckmarkSquareLight3.js";import"./components/icons/components/iconCheckmarkSquareLight4.js";import"./components/icons/components/iconAvatarHandLight.js";import"./components/icons/components/iconAvatarHandDark.js";import"./components/icons/components/iconVideoCameraLight.js";import"./components/icons/components/iconVideoCameraDark.js";import"./components/icons/components/iconVideoFilmStripLight.js";import"./components/icons/components/iconVideoFilmStripDark.js";import"./components/icons/components/iconEmailCircledLight.js";import"./components/icons/components/iconEmailCircledDark.js";import"./components/icons/components/iconPlayCircledLight.js";import"./components/icons/components/iconPlayCircledDark.js";import"./components/icons/components/iconFacebookMessengarCircledLight.js";import"./components/icons/components/iconFacebookMessengarCircledDark.js";import"./components/icons/components/iconFacebookDark.js";import"./components/icons/components/iconFacebookLetter.js";import"./components/icons/components/iconFacebookCircledLight.js";import"./components/icons/components/iconFacebookCircledDark.js";import"./components/icons/components/iconFacebookThumbsUpCircledLight.js";import"./components/icons/components/iconFacebookThumbsUpCircledDark.js";import"./components/icons/components/iconInstagramCircledLight.js";import"./components/icons/components/iconInstagramCircledDark.js";import"./components/icons/components/iconYoutubePlayCircledLight.js";import"./components/icons/components/iconYoutubePlayCircledDark.js";import"./components/icons/components/iconYoutubePlayButton.js";import"./components/icons/components/iconLinkedinCircledLight.js";import"./components/icons/components/iconLinkedinCircledDark.js";import"./components/icons/components/iconXLogo.js";import"./piBadge.js";class Zo extends i{static get properties(){return{disabled:{type:Boolean},icon:{type:String},severity:{type:String},raised:{type:Boolean},rounded:{type:Boolean},squared:{type:Boolean},variant:{type:String},badge:{type:String},type:{type:String}}}constructor(){super(),this.disabled=!1,this.icon="",this.severity="",this.raised=!1,this.rounded=!1,this.squared=!1,this.variant=!1,this.badge=null,this.type="button"}render(){const t={[`btn_severity_${this.severity}`]:!0,[`btn_variant_${this.variant}`]:!0,raised:this.raised===!0,rounded:this.rounded===!0,squared:this.squared===!0};return o`
            <button 
            type="${this.type}"
            class=${e(t)}
            ?disabled=${this.disabled}
            @click=${this._handleClick}
            >

                <span class="button_content_container">
                    <!-- Optional icon -->
                    <span class="button_icon_container">
                        <pi-icon-handler .icon=${this.icon}></pi-icon-handler>
                    </span>

                    <!-- Button text -->
                    ${this.variant!="iconOnly"?o`
                        <slot></slot>
                    `:null}
                    

                    <!-- Optional Badge -->
                    <pi-badge>${this.badge}</pi-badge>
                </span>
                
            </button>
        `}_handleClick(t){t.stopPropagation(),this.type!=="submit"?this.dispatchEvent(new CustomEvent("click",{detail:t})):this.dispatchEvent(new CustomEvent("pi-submit",{detail:t,composed:!0,bubbles:!0}))}static styles=[m,a,s,c,r(n),p`
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

        `]}export{Zo as PiButton};
//# sourceMappingURL=piButton.js.map
