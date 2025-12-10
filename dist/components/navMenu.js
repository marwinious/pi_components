import{LitElement as l,html as a,css as r}from"lit";import{repeat as t}from"lit/directives/repeat.js";import u from"./defaultCss.js";class p extends l{static get properties(){return{items:{type:Array},vertical:{type:Boolean}}}connectedCallback(){super.connectedCallback()}constructor(){super(),this.items=[],this.vertical=!1}createSubnav(){}render(){return a`
            <ul class="nav_menu ${this.vertical?"vertical":"horizontal"}">
                ${t(this.items,e=>e.label,e=>a`
                    <li class="menu_item">
                        <a href=${e.href}>${e.label}</a>

                        ${e.children?a`
                            <ul class="sub_nav_menu">
                                ${t(e.children,n=>n.label,n=>a`
                                    <li class="menu_item">
                                        <a href=${n.href}>${n.label}</a>

                                        ${n.children?a`
                                            <ul class="sub_nav_menu">
                                                ${t(n.children,i=>i.label,i=>a`
                                                    <li class="menu_item">
                                                        <a href=${i.href}>${i.label}</a>
                                                    </li>
                                                `)}
                                            </ul>
                                        `:null}
                                    </li>
                                `)}
                            </ul>
                        `:null}
                    </li>
                `)}
            </ul>
        `}static styles=[u,r`
            :host {
                display: block;

            }

            .nav_menu {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            /* HORIZONTAL ROOT MENU */
            .nav_menu.horizontal {
                display: flex; /* Lays out top-level items side-by-side */
            }

            .menu_item {
                position: relative;
            }

            .nav_menu > .menu_item {
                position: relative;
                display: block;
            }

            .nav_menu > .menu_item a {
                padding: var(--pi-nav-menu-item-padding, 10px 15px);
                background: var(--pi-nav-menu-item-background, transparent);
                color: var(--pi-nav-menu-item-text-color, blue);
                display: block;
                text-decoration: var(--pi-nav-menu-item-text-decoration, none);
            }

            .nav_menu > .menu_item a:hover {
                background: var(--pi-nav-menu-item-hover-background, #ddd);
                color: var(--pi-nav-menu-item-text-hover-color, inherit);
            }

            /* GLOBAL SUB NAV MENU */
            .sub_nav_menu {
                list-style: none;
                padding: 0;
                margin: 0;
                visibility: hidden;
                opacity: 0;
                position: absolute; /* Allows it to 'fly out' over content */
                top: var(--pi-nav-menu-sub-nav-top, 100%); /* Positions it right below the parent item */
                left: var(--pi-nav-menu-sub-nav-left, 0);
                background: var(--pi-nav-menu-sub-nav-background, #f9f9f9);
                border: var(--pi-nav-menu-sub-nav-border, 1px solid #ccc);
                min-width: var(--pi-nav-menu-sub-nav-min-width, 150px);
                z-index: var(--pi-nav-menu-sub-nav-z-index, 10);
                transition: var(--pi-nav-menu-sub-nav-transition, opacity 0.5s);
            }

            .menu_item:hover > .sub_nav_menu {
                visibility: visible;
                opacity: 1;
            }

            .sub_nav_menu > .menu_item:hover > .sub_nav_menu {
                top: var(--pi-nav-menu-sub-sub-nav-top, 0);
                left: var(--pi-nav-menu-sub-sub-nav-left, 100%);
            }

            /* VERTICAL MENU */
            .nav_menu.vertical,
            .nav_menu.vertical > .menu_item a {
                display: inline-block;
            }

            .nav_menu.vertical .menu_item:hover > .sub_nav_menu {
                top: var(--pi-nav-menu-vertical-sub-nav-top, 0); /* Align with parent sub-item */
                left: var(--pi-nav-menu-vertical-sub-nav-left, 100%); /* Fly out to the right */
            }
        `]}export{p as PiNavMenu};
//# sourceMappingURL=navMenu.js.map
