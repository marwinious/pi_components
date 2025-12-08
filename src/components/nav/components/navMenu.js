import { LitElement, css, html } from 'lit'
import { repeat } from 'lit/directives/repeat.js';
import defaultCss from '../../../css/defaultCss';

export class PiNavMenu extends LitElement {

    static get properties() {
        return {
            items: { type: Array },
            vertical: { type: Boolean },
        }
    }

    connectedCallback() {
        super.connectedCallback();
    }

    constructor() {
        super()

        this.items = [];
        this.vertical = false;
    }

    createSubnav() {

    }

    render() {
        return html`
            <ul class="nav_menu ${this.vertical ? `vertical` : `horizontal`}">
                ${repeat(this.items, (item) => item.label, (item) => html`
                    <li class="menu_item">
                        <a href=${item.href}>${item.label}</a>

                        ${item.children ? html`
                            <ul class="sub_nav_menu">
                                ${repeat(item.children, (item2) => item2.label, (item2) => html`
                                    <li class="menu_item">
                                        <a href=${item2.href}>${item2.label}</a>

                                        ${item2.children ? html`
                                            <ul class="sub_nav_menu">
                                                ${repeat(item2.children, (item3) => item3.label, (item3) => html`
                                                    <li class="menu_item">
                                                        <a href=${item3.href}>${item3.label}</a>
                                                    </li>
                                                `)}
                                            </ul>
                                        ` : null}
                                    </li>
                                `)}
                            </ul>
                        ` : null}
                    </li>
                `)}
            </ul>
        `;
    }

    static styles = [
        defaultCss,
        css`
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
        `
    ]
    
}

// if(!customElements.get('pi-nav-menu')) { customElements.define('pi-nav-menu', PiNavMenu); }