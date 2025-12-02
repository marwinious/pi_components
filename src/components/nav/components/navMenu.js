import { LitElement, css, html } from 'lit'
import { repeat } from 'lit/directives/repeat.js';
import defaultCss from '../../../css/defaultCss';

export class PiNavMenu extends LitElement {

    static get properties() {
        return {
            items: { type: Array },
            vertical: { type: Boolean },
            depth: { type: Number },
        }
    }

    connectedCallback() {
        super.connectedCallback();
        
        if (!this.hasAttribute('depth')) {
             this.setAttribute('depth', this.depth);
        }
    }

    firstUpdated() {
        // This runs once after the component has rendered for the first time
        if (this.depth === 0) {
            const style = document.createElement('style');
            const tagName = this.tagName.toLowerCase();
            
            style.textContent = `
                .nav_menu.horizontal > .menu_item:hover > ${tagName}[depth] {
                    visibility: visible !important;
                    opacity: 1 !important;
                }

                ${tagName}[depth] {
                    position: absolute;
                    top: 1rem;
                }
            `;
            // Append the dynamic style to the Shadow Root
            this.shadowRoot.appendChild(style); 
        }
    }

    constructor() {
        super()

        this.items = [];
        this.vertical = false;
        this.depth = 0;
    }

    // Helper function to create the recursive element imperatively
    renderRecursive(item) {
        if (!item.children) {
            return '';
        }

        // 1. Get the actual tag name used to instantiate THIS component
        const RecursiveTag = this.tagName.toLowerCase(); 

        // 2. Create the element using standard DOM API
        const subMenu = document.createElement(RecursiveTag);
        
        // 3. Set the required properties imperatively
        subMenu.items = item.children; 
        subMenu.depth = this.depth + 1;
        subMenu.vertical = true;

        // Explicitly set the depth ATTRIBUTE so the CSS selector can match immediately.
        subMenu.setAttribute('depth', subMenu.depth);
        
        // 4. Return the element instance for Lit to insert
        return subMenu;
    }

    render() {
        // Define the CSS class for the main menu based on the direction prop
        const menuClass = this.depth === 0 ? `nav_menu ${this.vertical ? `vertical` : `horizontal`}` : 'sub_nav_menu';

        return html`
            <ul class="${menuClass}">
                ${repeat(this.items, (item) => item.label, (item) => html`
                    <li class="menu_item">
                        <a href=${item.href}>${item.label}</a>
                        
                        ${this.renderRecursive(item)}
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

            /* Sub-menu positioning and hiding (applied to the host element) */
            :host([depth]:not([depth="0"])) {
                /* Apply to any instance where depth > 0 */
                position: absolute;
                top: 100%;
                left: 0;
                z-index: 10;
                visibility: hidden;
                opacity: 0;
                transition: all 0.5s; /* Optional smooth transition */
            }

            .nav_menu {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            /* --- HORIZONTAL ROOT MENU --- */
            .nav_menu.horizontal {
                display: flex; /* Lays out top-level items side-by-side */
            }

            .nav_menu.horizontal > .menu_item {
                position: relative;
                padding: 10px 15px;
            }

            /* --- sub_nav_menu (Default Vertical) --- */
            .sub_nav_menu {
                position: absolute; /* Allows it to 'fly out' over content */
                top: 100%; /* Positions it right below the parent item */
                left: 0;
                background: #f9f9f9;
                border: 1px solid #ccc;
                min-width: 150px;
                z-index: 10;
            }
            
            /* .nav_menu.horizontal > .menu_item:hover > pi-nav-menu[depth] {
                visibility: visible;
                opacity: 1;
            } */
            
            /* --- VERTICAL sub_nav_menu OVERRIDE --- */
            .sub_nav_menu .menu_item {
                display: block;
                padding: 8px 15px;
                white-space: nowrap;
            }
            
            /* Handle flyout for subsequent levels */
            .sub_nav_menu .menu_item:hover > .sub_nav_menu {
                top: 0; /* Align with parent sub-item */
                left: 100%; /* Fly out to the right */
            }
        `
    ]
    
}

// if(!customElements.get('pi-nav-menu')) { customElements.define('pi-nav-menu', PiNavMenu); }