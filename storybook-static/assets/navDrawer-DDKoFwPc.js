import{r as e,x as r,i as t}from"./lit-element-qJpPW6A9.js";import{d as o}from"./defaultCss-aEcf2KJM.js";class a extends e{static get properties(){return{showDrawer:{type:Boolean,reflect:!0}}}constructor(){super(),this.showDrawer=!1}render(){return r`
            <div class="close_container">
                <span @click="${this.closeDrawer}">x</span>
            </div>

            <div class="content_container">
                <slot>
                    <p>
                        The drawer is controlled by the showDrawer boolean attribute on this component. Change that value from the parent to control the drawer's visbility. 
                    </p>
                    <p>
                        Alternatively, you may select this component from a querySelector and call closeDrawer(), openDrawer(), or toggleDrawer() on that element.
                    </p>
                    <p>
                        There is an default slot in the drawer where you can pass in content to override this message.
                    </p>
                </slot>
            </div>
        `}closeDrawer(){this.showDrawer=!1}openDrawer(){this.showDrawer=!0}toggleDrawer(){this.showDrawer=!this.showDrawer}static styles=[o,t`
            :host {
                box-sizing: border-box;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1000;
                height: 100%;
                width: 256px;
                min-width: 256px;
                transform: translateX(-260px);
                transition: all 0.25s ease-in-out;
                background: var(--pi-nav-drawer-bg-color, #FFF);
                box-shadow: var(--pi-nav-drawer-box-shadow, 1px 1px 2px #666);
                padding: var(--pi-nav-drawer-padding, 1.2rem);
            }

            :host([showDrawer]) {
                transform: translateX(0px);
            }

            .close_container {
                box-sizing: border-box;
                position: absolute;
                top: 0px;
                right: 0px;
                cursor: pointer;
                font-size: 1.4rem;
                user-select: none;
                padding: var(--pi-nav-drawer-padding, 0.2rem 0.4rem);
                color: var(--pi-nav-drawer-close-color, #333);
            }
        `]}customElements.get("pi-nav-drawer")||customElements.define("pi-nav-drawer",a);
