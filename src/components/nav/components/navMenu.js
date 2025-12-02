import { LitElement, css, html } from 'lit'
import defaultCss from '../../../css/defaultCss';

export class PiNavMenu extends LitElement {

    static get properties() {
        return {
            items: { type: Array },
            vertical: { type: Boolean },
            depth: { type: Number },
        }
    }

    constructor() {
        super()

        this.items = [];
        this.vertical = false;
        this.depth = 0;
    }

    render() {
        // Gets the tag name used to instantiate THIS component
        const RecursiveTag = this.tagName;

        // Define the CSS class for the main menu based on the direction prop
        const menuClass = this.depth === 0 ? `nav_menu ${this.vertical ? `vertical` : `horizontal`}` : 'sub_nav_menu';

        return html`
            <ul class="${menuClass}">
                ${this.items.map(item => html`
                    <li class="nav_menu_item">
                        <a href="${item.href}">${item.label}</a>

                        ${item.children ? html`
                            <${RecursiveTag}
                            .items=${item.children} 
                            .depth=${this.depth + 1}
                            direction="vertical" 
                            ></${RecursiveTag}>
                        ` : null}
                    </li>
                `)}
            </ul>
        `;
    }

    static styles = [
        defaultCss,
        css`
            .menu-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            /* --- HORIZONTAL ROOT MENU --- */
            .menu-list.horizontal {
                display: flex; /* Lays out top-level items side-by-side */
            }

            .menu-list.horizontal > .menu-item {
                position: relative;
                padding: 10px 15px;
            }

            /* --- SUB-MENUS (Default Vertical) --- */
            .sub-menu {
                position: absolute; /* Allows it to 'fly out' over content */
                top: 100%; /* Positions it right below the parent item */
                left: 0;
                background: #f9f9f9;
                border: 1px solid #ccc;
                min-width: 150px;
                z-index: 10;
                display: none; /* Hidden by default */
            }
            
            .menu-list.horizontal > .menu-item:hover > .sub-menu {
                display: block; /* Show sub-menu on hover */
            }
            
            /* --- VERTICAL SUB-MENU OVERRIDE --- */
            .sub-menu .menu-item {
                display: block;
                padding: 8px 15px;
                white-space: nowrap;
            }
            
            /* Handle flyout for subsequent levels */
            .sub-menu .menu-item:hover > .sub-menu {
                top: 0; /* Align with parent sub-item */
                left: 100%; /* Fly out to the right */
            }
        `
    ]
    
}

// if(!customElements.get('pi-nav-menu')) { customElements.define('pi-nav-menu', PiNavMenu); }