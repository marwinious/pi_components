import { LitElement, html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { classMap } from 'lit/directives/class-map.js';

class PiIconBase extends LitElement {

    static get properties() {
        return {
            viewBox: {
                type: String
            },
            pathData: {
                type: String
            },
            fillRule:  {
                type: String
            },
            clipRule: {
                type: String
            },
            strokeLineJoin: {
                type: String
            },
            strokeMiterLimit: {
                type: String
            },
            pathFillRule: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.viewBox = '0 0 24 24';
        this.pathData = '';
        this.fillRule = '';
        this.clipRule = '';
        this.strokeLineJoin = '';
        this.strokeMiterLimit = '';
        this.pathFillRule = '';
    }

    render() {
        return html`
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="${this.viewBox}" 
            role="img"
            fill-rule=${this.fillRule}
            clip-rule=${this.clipRule}
            stroke-linejoin=${this.strokeLineJoin}
            stroke-miterlimit=${this.strokeMiterLimit}
            >
                <path 
                d="${this.pathData}"
                fill-rule=${this.pathFillRule}
                ></path>
            </svg>
        `;
    }

    static styles = [
        css`
            :host {
                display: inline-flex;
                /* width: 100%;
                height: 100%; */
            }

            svg {
                width: 100%;
                height: 100%;
            }
        `
    ]
}
customElements.define('pi-icon-base', PiIconBase);

class PiIconHandler extends LitElement {

    static get properties() {
        return {
            icon: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.icon = '';
    }

    render() {
        return html`
            <div class="icon">${unsafeHTML('<icon-'+this.icon+'></icon-'+this.icon)}</div>
        `;
    }

    static styles = [
        css`
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 100%;
            }

            .icon {
                display: inline-flex;
                height: 100%;

                * {
                    display: inline-flex;
                    height: 100%;
                }
            }
        `
    ]
}
customElements.define('pi-icon-handler', PiIconHandler);

const iconData$y = {
    iconLabel: 'icon-left-arrow-circled',
    className: 'IconLeftArrowCircled'
};

class IconLeftArrowCircled extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "m12.017 1.995c5.517 0 9.997 4.48 9.997 9.998s-4.48 9.998-9.997 9.998c-5.518 0-9.998-4.48-9.998-9.998s4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.498-8.497-8.498zm-1.528 4.715s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            pathFillRule="nonzero"
            strokeMiterLimit=2
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$y.iconLabel, IconLeftArrowCircled);

const iconData$x = {
    iconLabel: 'icon-chain-link',
    className: 'IconChainLink'
};

class IconChainLink extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z";
    }

    render() {
        return html`
            <pi-icon-base pathData=${this.pathData}></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$x.iconLabel, IconChainLink);

const iconData$w = {
    iconLabel: 'icon-alert-triangle-dark',
    className: 'IconAlertTriangleDark'
};

class IconAlertTriangleDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$w.iconLabel, IconAlertTriangleDark);

const iconData$v = {
    iconLabel: 'icon-alert-triangle-light',
    className: 'IconAlertTriangleLight'
};

class IconAlertTriangleLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$v.iconLabel, IconAlertTriangleLight);

const iconData$u = {
    iconLabel: 'icon-area-chart-stand',
    className: 'IconAreaChartStand'
};

class IconAreaChartStand extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M19.902 24h-2.627l-3.42-4h2.633l3.414 4zm-9.773-4l-3.42 4h-2.627l3.414-4h2.633zm2.871 4h-2v-4h2v4zm9-8v-14h-9v-2h-2v2h-9v14h-1v2h22v-2h-1zm-2 0h-16v-12h16v12zm-14-7.608v-1.392l2 2 2.5-3 4.5 3.939 3-1.961v1.218l-3.088 1.995-4.3-3.764-2.545 3.054-2.067-2.089zm9.455 3.639l-.634.409-.567-.497-3.529-3.089-1.889 2.267-.705.846-.774-.783-1.357-1.371v4.187h12v-3.613l-2.545 1.644z";
    }

    render() {
        return html`
            <pi-icon-base pathData=${this.pathData}></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$u.iconLabel, IconAreaChartStand);

const iconData$t = {
    iconLabel: 'icon-avatar-generic-light',
    className: 'IconAvatarGenericLight'
};

class IconAvatarGenericLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$t.iconLabel, IconAvatarGenericLight);

const iconData$s = {
    iconLabel: 'icon-close-square-dark',
    className: 'IconCloseSquareDark'
};

class IconCloseSquareDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-8.991 6.932 2.717-2.718c.146-.146.338-.219.53-.219.405 0 .751.325.751.75 0 .193-.073.384-.219.531l-2.718 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.531-.219l-2.728-2.728-2.728 2.728c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$s.iconLabel, IconCloseSquareDark);

const iconData$r = {
    iconLabel: 'icon-edit-image',
    className: 'IconEditImage'
};

class IconEditImage extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M15.562 20.22l-3.562.718.719-3.562 2.843 2.844zm-2.136-3.552l2.844 2.845 7.73-7.73-2.845-2.845-7.729 7.73zm-2.91.332l4.51-4.76-2.026-3.24-2.52 4-2.48-1.96-4 5.96h6.516zm-3.516-8.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5zm3.352 10.5h-8.352v-14h18v2.312h2v-4.312h-22v18h9.969l.383-2z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$r.iconLabel, IconEditImage);

const iconData$q = {
    iconLabel: 'icon-edit-page-filled',
    className: 'IconEditPageFilled'
};

class IconEditPageFilled extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.75c0-.414.336-.75.75-.75s.75.336.75.75v9.25c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm-2.011 6.526c-1.045 3.003-1.238 3.45-1.238 3.84 0 .441.385.626.627.626.272 0 1.108-.301 3.829-1.249zm.888-.889 3.22 3.22 8.408-8.4c.163-.163.245-.377.245-.592 0-.213-.082-.427-.245-.591-.58-.578-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$q.iconLabel, IconEditPageFilled);

const iconData$p = {
    iconLabel: 'icon-edit-video',
    className: 'IconEditVideo'
};

class IconEditVideo extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M4 5v18h20v-18h-20zm4 16h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm10 12h-8v-6h8v6zm0-8h-8v-6h8v6zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm-1-6h-19v17h-2v-19h21v2z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$p.iconLabel, IconEditVideo);

const iconData$o = {
    iconLabel: 'icon-gear-solid',
    className: 'IconGearSolid'
};

class IconGearSolid extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$o.iconLabel, IconGearSolid);

const iconData$n = {
    iconLabel: 'icon-info-chat-bubble-dark',
    className: 'IconInfoChatBubbleDark'
};

class IconInfoChatBubbleDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm1 15h-2v-6h2v6zm-1-7.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$n.iconLabel, IconInfoChatBubbleDark);

const iconData$m = {
    iconLabel: 'icon-info-chat-bubble-light',
    className: 'IconInfoChatBubbleLight'
};

class IconInfoChatBubbleLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M13 16h-2v-6h2v6zm-1-10.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm0-2.75c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$m.iconLabel, IconInfoChatBubbleLight);

const iconData$l = {
    iconLabel: 'icon-info-filled',
    className: 'IconInfoFilled'
};

class IconInfoFilled extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$l.iconLabel, IconInfoFilled);

const iconData$k = {
    iconLabel: 'icon-info-light',
    className: 'IconInfoLight'
};

class IconInfoLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$k.iconLabel, IconInfoLight);

const iconData$j = {
    iconLabel: 'icon-info-rounded-dark',
    className: 'IconInfoRoundedDark'
};

class IconInfoRoundedDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.351 6.493c-.08-.801.55-1.493 1.351-1.493s1.431.692 1.351 1.493l-.801 8.01c-.029.282-.266.497-.55.497s-.521-.215-.55-.498l-.801-8.009zm1.351 12.757c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$j.iconLabel, IconInfoRoundedDark);

const iconData$i = {
    iconLabel: 'icon-info-rounded-light',
    className: 'IconInfoRoundedLight'
};

class IconInfoRoundedLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$i.iconLabel, IconInfoRoundedLight);

const iconData$h = {
    iconLabel: 'icon-info-sample-dark',
    className: 'IconInfoSimpleDark'
};

class IconInfoSimpleDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$h.iconLabel, IconInfoSimpleDark);

const iconData$g = {
    iconLabel: 'icon-info-simple-light',
    className: 'IconInfoSimpleLight'
};

class IconInfoSimpleLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$g.iconLabel, IconInfoSimpleLight);

const iconData$f = {
    iconLabel: 'icon-logout',
    className: 'IconLogout'
};

class IconLogout extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$f.iconLabel, IconLogout);

const iconData$e = {
    iconLabel: 'icon-magnify-text',
    className: 'IconMagnifyText'
};

class IconMagnifyText extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$e.iconLabel, IconMagnifyText);

const iconData$d = {
    iconLabel: 'icon-notification-box-dark',
    className: 'IconNotificationBoxDark'
};

class IconNotificationBoxDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "m2 4v16.002c0 .385.22.735.567.902.346.166.758.119 1.058-.121l4.725-3.781h12.65c.552 0 1-.448 1-1v-12.002c0-.552-.448-1-1-1h-18c-.552 0-1 .448-1 1zm9.998 5.002c.414 0 .75.336.75.75v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75zm.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$d.iconLabel, IconNotificationBoxDark);

const iconData$c = {
    iconLabel: 'icon-notification-box-light',
    className: 'IconNotificationBoxLight'
};

class IconNotificationBoxLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "m2 4v16.002c0 .385.22.735.567.902.346.166.758.119 1.058-.121l4.725-3.781h12.65c.552 0 1-.448 1-1v-12.002c0-.552-.448-1-1-1h-18c-.552 0-1 .448-1 1zm18.5 11.502h-12.677l-4.323 3.46v-14.462h17zm-8.502-6.5c.414 0 .75.336.75.75v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75zm.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$c.iconLabel, IconNotificationBoxLight);

const iconData$b = {
    iconLabel: 'icon-paper-airplane-solid',
    className: 'IconPaperAirplaneSolid'
};

class IconPaperAirplaneSolid extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$b.iconLabel, IconPaperAirplaneSolid);

const iconData$a = {
    iconLabel: 'icon-slack-logo-slanted',
    className: 'IconSlackLogoSlanted'
};

class IconSlackLogoSlanted extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M22.994 8.7c-1.817-6.055-4.223-8.7-8.636-8.7-1.6 0-3.464.347-5.658 1.006-6.056 1.817-8.7 4.223-8.7 8.636 0 1.6.347 3.463 1.006 5.658 1.816 6.056 4.222 8.7 8.635 8.7 1.6 0 3.463-.347 5.659-1.006 6.055-1.817 8.7-4.222 8.7-8.635 0-1.6-.348-3.464-1.006-5.659m-4.164 5.353l-1.554.519.537 1.611c.211.652-.133 1.362-.786 1.573-.735.208-1.373-.206-1.574-.786l-.537-1.612-3.204 1.074.537 1.612c.212.653-.134 1.363-.786 1.573-.73.208-1.371-.201-1.573-.787l-.538-1.611-1.554.518c-.725.21-1.371-.203-1.574-.787-.21-.652.135-1.362.787-1.573l1.554-.518-1.036-3.089-1.554.518c-.729.207-1.37-.2-1.573-.787-.211-.652.134-1.362.786-1.573l1.555-.518-.538-1.611c-.211-.653.135-1.363.787-1.574.652-.211 1.362.134 1.573.787l.538 1.611 3.203-1.074-.536-1.612c-.212-.652.134-1.362.786-1.573.653-.211 1.363.134 1.574.787l.537 1.612 1.554-.519c.652-.211 1.362.135 1.573.787.212.652-.134 1.362-.786 1.573l-1.555.518 1.036 3.089 1.555-.518c.652-.211 1.362.134 1.573.787.211.652-.135 1.362-.787 1.573m-5.747-4.117l-3.202 1.073 1.035 3.092 3.202-1.072-1.035-3.093z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$a.iconLabel, IconSlackLogoSlanted);

const iconData$9 = {
    iconLabel: 'icon-stop-ex-dark',
    className: 'IconStopExDark'
};

class IconStopExDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M16.971 0h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-1.402 16.945l-3.554-3.521-3.518 3.568-1.418-1.418 3.507-3.566-3.586-3.472 1.418-1.417 3.581 3.458 3.539-3.583 1.431 1.431-3.535 3.568 3.566 3.522-1.431 1.43z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$9.iconLabel, IconStopExDark);

const iconData$8 = {
    iconLabel: 'icon-stop-ex-light',
    className: 'IconStopExLight'
};

class IconStopExLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M16.142 2l5.858 5.858v8.284l-5.858 5.858h-8.284l-5.858-5.858v-8.284l5.858-5.858h8.284zm.829-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-8.482 16.992l3.518-3.568 3.554 3.521 1.431-1.43-3.566-3.523 3.535-3.568-1.431-1.432-3.539 3.583-3.581-3.457-1.418 1.418 3.585 3.473-3.507 3.566 1.419 1.417z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$8.iconLabel, IconStopExLight);

const iconData$7 = {
    iconLabel: 'icon-thumbs-down-dark',
    className: 'IconThumbsDownDark'
};

class IconThumbsDownDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M5 14h-5v-12h5v12zm18.875-4.809c0-.646-.555-1.32-1.688-1.41-.695-.055-.868-.623-.031-.812.701-.159 1.098-.652 1.098-1.181 0-.629-.559-1.309-1.826-1.543-.766-.141-.842-.891-.031-.953.688-.053.96-.291.96-.626-.001-.931-1.654-2.666-4.852-2.666-4.16 0-6.123 2.067-10.505 2.768v10.878c2.375.869 4.466 2.644 5.688 6.886.478 1.661.781 3.468 2.374 3.468 2.375 0 2.594-5.125 1.688-8.781 1.312-.688 3.751-.936 4.979-.885 1.771.072 2.271-.818 2.271-1.49 0-1.011-.833-1.35-1.354-1.51-.609-.188-.889-.807-.031-.922.836-.112 1.26-.656 1.26-1.221z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$7.iconLabel, IconThumbsDownDark);

const iconData$6 = {
    iconLabel: 'icon-thumbs-down-light',
    className: 'IconThumbsDownLight'
};

class IconThumbsDownLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M24 11.936c0-1-.986-6.373-1.486-8.25-.714-2.689-2.471-3.686-5.009-3.686-2.283 0-4.079.617-5.336 1.158-2.05.883-3.791 1.519-6.169 1.746v-.904h-6v12h6v-.73c2.454.585 4.852 2.066 6.4 7.402.483 1.66.972 3.328 2.833 3.328 3.448 0 3.005-5.531 2.196-8.814 1.106-.466 2.767-.692 3.977-.744 1.426-.06 2.594-.858 2.594-2.506zm-20 .064h-2v-8h2v8zm15.755-1.302l1.394.167c1.075.129 1.105 1.525.051 1.584-2.749.154-5.06 1.013-6.12 1.556.43 1.748.92 3.463.92 5.534 0 2.505-.781 3.666-1.679.574-1.993-6.859-5.057-8.364-8.321-9.113v-6c2.521-.072 4.72-1.041 6.959-2.005 1.731-.745 4.849-1.495 6.416-.614 1.295.836 1.114 1.734.292 1.661l-.771-.032c-.815-.094-.92 1.068-.109 1.141 0 0 1.321.062 1.745.115.976.123 1.028 1.607-.04 1.551-.457-.024-1.143-.041-1.143-.041-.797-.031-.875 1.078-.141 1.172 0 0 .714.005 1.761.099s1.078 1.609-.004 1.563c-.868-.037-1.069-.027-1.069-.027-.75.005-.875 1.028-.141 1.115z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$6.iconLabel, IconThumbsDownLight);

const iconData$5 = {
    iconLabel: 'icon-thumbs-up-dark',
    className: 'IconThumbsUpDark'
};

class IconThumbsUpDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$5.iconLabel, IconThumbsUpDark);

const iconData$4 = {
    iconLabel: 'icon-thumbs-up-light',
    className: 'IconThumbsUpLight'
};

class IconThumbsUpLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$4.iconLabel, IconThumbsUpLight);

const iconData$3 = {
    iconLabel: 'icon-toggle-off',
    className: 'IconToggleOff'
};

class IconToggleOff extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M18 18h-12c-3.311 0-6-2.689-6-6s2.689-6 6-6h12.039c3.293.021 5.961 2.701 5.961 6 0 3.311-2.688 6-6 6zm-12-10c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`

        `
    ]
}
customElements.define(iconData$3.iconLabel, IconToggleOff);

const iconData$2 = {
    iconLabel: 'icon-toggle-on',
    className: 'IconToggleOn'
};

class IconToggleOn extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M6 18h12c3.311 0 6-2.689 6-6s-2.689-6-6-6h-12.039c-3.293.021-5.961 2.701-5.961 6 0 3.311 2.688 6 6 6zm12-10c-2.208 0-4 1.792-4 4s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$2.iconLabel, IconToggleOn);

const iconData$1 = {
    iconLabel: 'icon-user-rounded-dark',
    className: 'IconUserRoundedDark'
};

class IconUserRoundedDark extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData$1.iconLabel, IconUserRoundedDark);

const iconData = {
    iconLabel: 'icon-user-rounded-light',
    className: 'IconUserRoundedLight'
};

class IconUserRoundedLight extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super();
        this.pathData = "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z";
    }

    render() {
        return html`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}
customElements.define(iconData.iconLabel, IconUserRoundedLight);

const commonCss = ".raised {\r\n    box-shadow: var(--pi-raised-box-shadow, 0px 1px 2px 1px #aaa);\r\n}\r\n\r\n.rounded {\r\n    border-radius: var(--pi-rounded-border-radius, 2rem);\r\n}";

const severities = [
    'primary',
    'secondary',
    'success',
    'info',
    'warn',
    'help',
    'danger'
];

const generateSeverityStyles = () => severities.map(severity => `
    .btn_severity_${severity} {
        --pi-button-bg-color: var(--pi-button-bg-color-${severity});
        --pi-button-text-color: var(--pi-button-text-color-${severity});
        --pi-button-border: var(--pi-button-border-${severity});
        --pi-button-hover-bg-color: var(--pi-button-hover-bg-color-${severity});
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-${severity}, #FFF);
        --pi-button-hover-border-color: var(--pi-button-hover-border-color-${severity});
        --pi-button-active-bg-color: var(--pi-button-active-bg-color-${severity});
        --pi-button-active-text-color: var(--pi-button-active-text-color-${severity});
        --pi-button-active-border-color: var(--pi-button-active-border-color-${severity});
    }
`).join('');

const severityCss = css`

    ${unsafeCSS(generateSeverityStyles())}


`;

const variantCss = css`

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
    .btn_variant_outlined{
        --pi-button-bg-color: transparent;
        --pi-button-hover-bg-color: #eee;
        --pi-button-text-color: var(--pi-button-bg-color-default);
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

    
`;

const iconsCss = css`

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

`;

const badgeCss = css`

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

`;

class PiBadge extends LitElement {

    static get properties() {
        return {
            
        }
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

    static styles = [
        css`
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
        `
    ]
    
}
customElements.define('pi-badge', PiBadge);

// commonCss = css`${unsafeCSS(commonCss)}`;

class PiButton extends LitElement {

    static get properties() {
        return {
            disabled: { type: Boolean },
            icon: { type: String },
            severity: { type: String },
            raised: { type: Boolean },
            rounded: { type: Boolean },
            variant: { type: String },
            badge: { type: [Number, String] },
            type: { type: String }
        }
    }

    constructor() {
        super();
        this.disabled = false;
        this.icon = '';
        this.severity = '';
        this.raised = false;
        this.rounded = false;
        this.variant = false;
        this.badge = null;
        this.type = 'button';
    }

    /* <div class="icon">${unsafeHTML(this.icon)}</div> */

    render() {

        const buttonClasses = {
            [`btn_severity_${this.severity}`]: true,
            [`btn_variant_${this.variant}`]: true,
            'raised': this.raised === true,
            'rounded': this.rounded === true,
        };

        return html`
            <button 
            type=${this.type}
            class=${classMap(buttonClasses)}
            ?disabled=${this.disabled}
            @click=${this._handleClick}
            >

                <span class="button_content_container">
                    <!-- Optional icon -->
                    <span class="button_icon_container">
                        <pi-icon-handler .icon=${this.icon}></pi-icon-handler>
                    </span>

                    <!-- Button text -->
                    ${this.variant != 'iconOnly' ? html`
                        <slot></slot>
                    ` : null}
                    

                    <!-- Optional Badge -->
                    <pi-badge>${this.badge}</pi-badge>
                </span>
                
            </button>
        `;
    }

    _handleClick(e) {
        if (this.type !== 'submit') { // Only handle clicks for non-submit buttons
            this.dispatchEvent(new CustomEvent('click', { 
                detail: e
            }));
        }
        else {
            this.dispatchEvent(new CustomEvent('pi-submit', { 
                detail: e,
                composed: true,
                bubbles: true
            }));
        }
    }

    static styles = [
        severityCss,
        variantCss,
        iconsCss,
        badgeCss,
        unsafeCSS(commonCss),
        css`
            :host {
                display: inline-flex;
                align-items: flex-start;
                justify-content: center;
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
                    background: var(--pi-button-hover-bg-color, #0a486a);
                    border-color: var(--pi-button-hover-border-color, #0a486a);
                    color: var(--pi-button-hover-text-color, #FFF);
                }

                &:active {
                    background: var(--pi-button-active-bg-color, #FFF);
                    color: var(--pi-button-active-text-color, #0a486a);
                    border-color: var(--pi-button-active-border-color, #0a486a);
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

        `
    ]
    
}
customElements.define('pi-button', PiButton);

class PiBaseFormElement extends LitElement {

    static get properties() {
        return {
            disabled: { type: Boolean },
            name: { type: String },
        }
    }

    constructor() {
        super();
        this.disabled = false;
        this.name = '';
    }

    render() {
        return html`${this.renderInput()}`;
    }

    // Abstract method to render the form element (implement in child classes)
    renderInput() {
        throw new Error('renderInput() must be implemented in child class');
    }

    // Method to dispatch the 'change' event
    _dispatchChangeEvent(value) {
        const event = new CustomEvent('change', {
            detail: { 
                name: this.name, 
                value, 
                group: this.closest('pi-form-group')?.name || null }, // Include name for easy identification
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }

    // Example input change handler (override in child classes if needed)
    _handleInputChange(e) {
        this.value = e.target.value;
        this._dispatchChangeEvent(this.value);
    }

    // Get value (for form submit)
    getValue() { return this.value; }

    // Set value (for form reset and initial value)
    setValue(value) { 
        this.value = value; 
        this._dispatchChangeEvent(this.value); 
    }

    static styles = [
        css`
            :host { 
                display: inline-block;
            }
        `
    ]
    
}
customElements.define('pi-base-form-element', PiBaseFormElement);

class PiLabel extends LitElement {

    static get properties() {
        return {
            text: { type: String }
        }
    }

    constructor() {
        super();
        this.text = '';
    }

    render() {
        return html`
            ${this.text}
        `;
    }

    static styles = [
        css`
            :host {
                display: inline-block;
                box-sizing: border-box;
                font-size: var(--pi-label-font-size, 1rem);
                text-transform: var(--pi-label-transform, none);
                color: var(--pi-label-color, #888);
                font-weight: var(--pi-label-font-weight, normal);
                padding: var(--pi-label-padding, 0 0 0 0.5rem);
                margin: var(--pi-label-margin, 0 0 0.25rem 0);
            }

            :host([block]) {
                display: block;
            }

            :host([no-padding]) {
                padding: 0;
            }

            :host([no-margin]) {
                margin: 0;
            }
        `
    ]
    
}
customElements.define('pi-label', PiLabel);

const defaultCss = css`

    :host {
        color: var(--pi-text-color, #333);
        font-family: var(--pi-font-family, Arial, Helvetica, sans-serif);
        font-size: var(--pi-font-size, 1rem);
        font-weight: var(--pi-font-weight, normal);
        letter-spacing: var(--pi-letter-spacing, normal);
        line-height: var(--pi-line-height, normal);
        text-align: var(--pi-text-align, left);
        white-space: var(--pi-white-space, normal);
        word-spacing: var(--pi-word-spacing, normal);
        visibility: var(--pi-visibility, visible);
    }

`;

class PiTextInput extends PiBaseFormElement {

    static get properties() {
        return {
            placeholder: { type: String },
            value: { type: String },
            disabled: { type: Boolean },
            label: { type: String }
        }
    }

    constructor() {
        super();
        this.placeholder = '';
        this.value = '';
        this.disabled = false;
        this.label = '';
    }

    render() {
        return html`
            <pi-label 
            text=${this.label}
            ?hidden=${this.label==''}
            ></pi-label>
            
            <input 
            type="text" 
            placeholder=${this.placeholder} 
            @input=${this._handleInputChange}
            .value=${this.value}
            ?disabled=${this.disabled}
            >
        `;
    }

    static styles = [
        defaultCss,
        css`
            :host {
                display: block;
                width: 100%;
                min-width: 0;
                max-width: 100%;
                box-sizing: border-box;
            }

            input {
                box-sizing: border-box;
                font-size: var(--pi-text-input-font-size, 16px);
                padding: var(--pi-text-input-padding, 5px 7px);
                background-color: var(--pi-text-input-bg-color, #fff);
                border-radius: var(--pi-text-input-border-radius, 5px);
                border-style: var(--pi-text-input-border-style, solid);
                border-width: var(--pi-text-input-border-width, 1px);
                border-color: var(--pi-text-input-border-color, #aaa);
                color: var(--pi-text-input-text-color, #555);
                box-shadow: var(--pi-text-input-box-shadow, none);
                width: 100%;
                min-width: 0;
                max-width: 100%;
                transition: background 0.3s ease, 
                            box-shadow 0.3s ease,
                            border-color 0.3s ease;

                &::placeholder {
                    color: var(--pi-text-input-placeholder-text-color, #aaa);
                }

                &:disabled, &:disabled::placeholder {
                    background-color: var(--pi-text-input-bg-color-disabled, #eee);
                    color: var(--pi-text-input-text-color-disabled, #888);
                }

                &:focus {
                    background: var(--pi-text-input-bg-color-focus, #f2fcff);
                    outline: none;
                    border-style: var(--pi-text-input-border-style-focus, solid);
                    border-width: var(--pi-text-input-border-width-focus, 1px);
                    border-color: var(--pi-text-input-border-color-focus, #aaa);
                    box-shadow: var(--pi-text-input-box-shadow-focus, 1px 1px 1px #ddd);
                }
            }

        `
    ]
}
customElements.define('pi-text-input', PiTextInput);

class PiSelectInput extends PiBaseFormElement {

    static get properties() {
        return {
            options: { type: Array },
            selectedIndex: { type: Number },
            defaultText: { type: String },
            labelKey: { type: String },
            valueKey: { type: String },
            selectedObject: { type: Object },
            disabled: { type: Boolean },
            value: { type: String },
            label: { type: String }
            // resetAvailable: { type: Boolean }
        }
    }

    constructor() {
        super();
        this.defaultText = 'Choose an option';
        this.options = [];
        this.selectedIndex = -1;
        this.labelKey = '';
        this.valueKey = '';
        this.selectedObject = {};
        this.disabled = false;
        this.value = '';
        this.label = '';
        
        // this.resetAvailable = false;
    }

    /* firstUpdated() {
        console.log('firstupdated');
        this.resetAvailable = true;
    } */

    // willUpdate hook: Detect property changes before re-render
    willUpdate(changedProperties) {
        if(changedProperties.has('selectedObject')) {
            this.selectedIndex = this.determineDefaultSelectedIndex(this.options, this.selectedObject);  
        }
        /* if(changedProperties.has('value')) {
            if(this.value == '' && this.resetAvailable) {
                this._handleReset();
            } 
        } */
    }

    renderInput() {
        return html`
            <pi-label 
            text=${this.label}
            ?hidden=${this.label==''}
            ></pi-label>

            <select 
            @change=${this._handleInputChange} 
            .value="${this.selectedIndex}"
            ?disabled="${this.disabled}"
            >
                ${this.defaultText != '' ? html`
                    <option disabled ?selected="${this.value == ''}">${this.defaultText}</option>
                ` : html``}
                    
                ${this.options.length > 0 ? html`
                    ${this.options.map((item, index) => html`
                        <option value="${index}" ?selected="${this.selectedIndex === index}">${item[this.labelKey]}</option>
                    `)}
                ` : html``}
            </select>
        `;
    }

    determineDefaultSelectedIndex(optionsAry, targetObj) {
        if(optionsAry.length > 0) {
            const lookupLabel = this.labelKey;
            const valueLookup = this.valueKey;
            let foundIndex = -1;

            optionsAry.some((item, index) => {
                if(
                    item[lookupLabel] == targetObj[lookupLabel] 
                    && item[valueLookup] == targetObj[valueLookup]
                ) {
                    foundIndex = index;      
                }
            }); 

            return foundIndex;
        }

        return -1
    }

    /* _handleReset() {
        this.selectedIndex = -1;  
        this.selectedObject = {};
        this._dispatchChangeEvent(this.value);
    } */

    _handleInputChange(e) {
        const selectedIndex = e.target.value;

        // If a valueKey was provided, use that value from selected object
        if(this.valueKey != '') {
            this.value = this.options[selectedIndex][this.valueKey];
        }
        else {
            // Otherwise, use entire selected object
            this.value = this.options[selectedIndex];
        }
        

        this._dispatchChangeEvent(this.value);
    }

    static styles = [
        defaultCss,
        css`
            :host {
                width: var(--pi-select-input-width, 100%);
                display: var(--pi-select-input-display, inline-block);
            }

            select {
                font-size: var(--pi-select-input-font-size, 16px);
                padding: var(--pi-select-input-padding, 5px 7px);
                background-color: var(--pi-select-input-bg-color, #fff);
                border-radius: var(--pi-select-input-border-radius, 5px);
                border-style: var(--pi-select-input-border-style, solid);
                border-width: var(--pi-select-input-border-width, 1px);
                border-color: var(--pi-select-input-border-color, #aaa);
                color: var(--pi-select-input-text-color, #555);
                box-shadow: var(--pi-select-input-box-shadow, none);
                width: var(--pi-select-input-width, 100%);
                transition: background 0.3s ease, 
                            box-shadow 0.3s ease,
                            border-color 0.3s ease;

                &:disabled {
                    background-color: var(--pi-select-input-bg-color-disabled, #eee);
                    color: var(--pi-select-input-text-color-disabled, #888);
                }

                &:focus {
                    background: var(--pi-select-input-bg-color-focus, #f2fcff);
                    outline: none;
                    border-style: var(--pi-select-input-border-style-focus, solid);
                    border-width: var(--pi-select-input-border-width-focus, 1px);
                    border-color: var(--pi-select-input-border-color-focus, #aaa);
                    box-shadow: var(--pi-select-input-box-shadow-focus, 1px 1px 1px #ddd);
                }
            }
        `
    ]
}
customElements.define('pi-select-input', PiSelectInput);

class PiCheckboxInput extends PiBaseFormElement {

    static get properties() {
        return {
            checked: { type: Boolean, reflect: true },
            label: { type: String },
            value: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.checked = false;
        this.label = '';
        this.value = false;
    }

    renderInput() {
        return html`
            <div 
            class="checkbox-container" 
            @click=${this._handleInputChange}
            >
                <div class="checkmark"></div>
            </div>

            <pi-label
            text=${this.label}
            ?hidden=${this.label==''}
            @click=${this._handleInputChange}
            no-margin
            ></pi-label>
        `;
    }

    _handleInputChange() {
        if(!this.disabled) {
            this.checked = !this.checked; // Toggle the checked property
            this.value = this.checked;

            this._dispatchChangeEvent(this.value);
        }
    }

    static styles = [
        defaultCss,
        css`
            :host {
                display: inline-flex; /* Use inline-flex for label alignment */
                align-items: center; /* Vertically align checkbox and label */
                cursor: pointer;
                user-select: none;
            }

            .checkbox-container {
                position: relative; /* For positioning the checkmark */
                width: var(--pi-checkbox-input-inner-width, 20px); /* Adjust size as needed */
                height: var(--pi-checkbox-input-inner-height, 20px);
                border-width: var(--pi-checkbox-border-width, 2px); /* Or your preferred border style */
                border-style: var(--pi-checkbox-border-style, solid); /* Or your preferred border style */
                border-color: var(--pi-checkbox-border-color); /* Or your preferred border style */
                border-radius: var(--pi-checkbox-border-radius, 3px); /* Optional rounded corners */
                background-color: var(--pi-checkbox-background-color, #fff); /* Default background color */
            }

            .checkmark {
                position: absolute;
                top: 0.48rem;
                left: 0.48rem;
                transform: translate(-50%, -50%);
                width: var(--pi-checkbox-input-width, 12px); /* Adjust checkmark size */
                height: var(--pi-checkbox-input-height, 12px);
                background-color: var(--pi-checkbox-input-fill-color-true, #74c1d6); /* Or your checkmark color */
                border-radius: var(--pi-checkbox-input-border-radius, 2px); /* Optional rounded checkmark */
                opacity: 0; /* Initially hidden */
                transition: opacity 0.2s ease; /* Smooth appearance */
            }

            :host([checked]) .checkmark { /* Show checkmark when checked */
                opacity: 1;
            }

            /* Optional: Style the container on hover */
            .checkbox-container:hover {
                border-color: var(--pi-checkbox-input-fill-color-true, #74c1d6);
            }

            /* Optional: Style the container when checked */
            :host([checked]) .checkbox-container {
                background-color: var(--pi-checkbox-input-fill-color-false, #ccc); /* Or your checked background color */
            }

            :host([disabled]) {
                cursor: default;

                .checkbox-container {
                    background-color: var(--pi-input-bg-color-disabled);
                }
            }
        `
    ]
    
}
customElements.define('pi-checkbox-input', PiCheckboxInput);

class PiRadioInput extends PiBaseFormElement {

    static get properties() {
        return {
            placeholder: { type: String },
            showLabel: { type: Boolean, attribute: false },
            value: { type: String },
            disabled: { type: Boolean, reflect: true },
            label: { type: String },
            checked: { type: Boolean, reflect: true },
            name: { type: String }
        }
    }

    constructor() {
        super();
        this.placeholder = '';
        this.showLabel = false;
        this.value = '';
        this.disabled = false;
        this.label = '';
        this.checked = false;
        this._group = [];
        this.name = '';
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    render() {
        return html`
            <div class="container">
                <input 
                type="radio" 
                placeholder=${this.placeholder} 
                @input=${this._handleInputChange}
                .value=${this.value}
                ?disabled=${this.disabled}
                tabindex="0"
                .checked=${this.checked}
                aria-checked=${this.checked}
                role="radio"
                >
                <div class="radio_indicator"></div>
                <!-- <label>${this.label}</label> -->
                <pi-label 
                text=${this.label} 
                no-padding 
                no-margin
                ></pi-label>
            </div>
            
        `;
    }

    _handleInputChange(e) {
        this.value = e.target.value;
        this.checked = !this.checked;

        const event = new CustomEvent('radio-change', {
            detail: { 
                name: this.name, 
                value: this.value, 
                group: null 
            }, // Include name for easy identification
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }

    static styles = [
        defaultCss,
        css`
            :host {
                display: inline-block;
                position: relative;
                cursor: pointer;
                box-sizing: border-box;
                -webkit-tap-highlight-color: transparent; /* Remove mobile tap highlight */
            }

            :host([block]) {
                display: block;

                .container {
                    margin-right: 0;
                }
            }

            .container {
                display: flex;
                align-items: center;
                margin-right: 0.75rem;
            }

            input {
                opacity: 0; /* Hide the default radio button */
                position: absolute;
                margin: 0;
                height: 20px;
                width: 20px;
                cursor: pointer;
            }

            .radio_indicator { /* The custom radio indicator */
                cursor: pointer;
                width: 18px;
                height: 18px;
                border-radius: 50%; /* Make it round */
                border: 2px solid var(--pi-radio-input-border-color, #ccc); /* Use a CSS variable for easy styling */
                background-color: var(--pi-radio-input-background-color, #fff);
                margin-right: var(--pi-radio-input-margin-right, 8px); /* Space between indicator and label */
                box-sizing: border-box; /* Include border in size */
                transition: background-color 0.4s ease, 
                            border-color 0.4s ease; /* Smooth transitions */
            }

            input:checked + .radio_indicator {
                background-color: var(--pi-radio-input-color-checked, #2196f3); /* Checked color */
                border-color: var(--pi-radio-input-color-checked, #2196f3);
            }

            input:checked + .radio_indicator::after { /* The inner circle when checked */
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: var(--pi-radio-input-background-color-checked, #FFF); /* Or use a CSS variable */
                position: absolute;
                top: 12px;
                left: 11px;
                transform: translate(-80%, -80%);
            }

            :host([disabled]) {
                input {
                    cursor: default;
                }

                .radio_indicator {
                    background-color: var(--pi-input-bg-color-disabled);
                }
            }

        `
    ]
}
customElements.define('pi-radio-input', PiRadioInput);

class PiToggleSwitch extends PiBaseFormElement {

     static get properties() {
        return {
            checked: { type: Boolean, reflect: true },
            value: { type: Boolean },
            label: { type: String },
        }
    }

    constructor() {
        super();
        this.checked = false;
        this.value = false;
        this.label = '';
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', this._handleInputChange);
        if(this.checked) { this.value = this.checked; }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('click', this._handleInputChange);
    }

    renderInput() {
        return html`
            <div 
            class="toggle_container" 
            >
                <div class="slider"></div>
            </div>

            <pi-label
            text=${this.label}
            ?hidden=${this.label==''}
            no-margin
            ></pi-label>
        `;
    }

    _handleInputChange() {
        if(!this.disabled) {
            this.checked = !this.checked; // Toggle the checked property
            this.value = this.checked;

            this._dispatchChangeEvent(this.value);
        }
        
    }

    static styles = [
        defaultCss,
        css`
            :host {
                display: inline-flex;
                align-items: center;
                cursor: pointer;
            }

            :host([checked]) .toggle_container {
                background-color: var(--pi-checkbox-input-fill-color-true, #74c1d6); 
            }

            .toggle_container {
                display: inline-block;
                width: 40px;
                height: 20px;
                border-radius: 10px;
                background-color: var(--pi-toggle-switch-input-fill-color-false, #aaa);
                position: relative;
            }

            .slider {
                position: absolute;
                top: 4px;
                left: 4px;
                right: 4px;
                bottom: 4px;
                border-radius: 9px;
                width: 13px;
                /* height: 15px; */
                background-color: var(--pi-toggle-switch-input-slider-color, #fff);
                transition: transform 0.3s ease-in-out;
            }

            :host([checked]) .slider {
                transform: translateX(19px); 
            }

            :host([disabled]) {
                cursor: default;
                user-select: none;
                
                .toggle_container {
                    background-color: var(--pi-input-bg-color-disabled)
                }
            }
        `
    ]
}
customElements.define('pi-toggle-switch', PiToggleSwitch);

class PiTextAreaInput extends PiBaseFormElement {

    static get properties() {
        return {
            label: { type: String },
            value: { type: String },
            placeholder: { type: String }
        }
    }

    constructor() {
        super();
        this.label = '';
        this.value = '';
        this.placeholder = '';
    }

    render() {
        return html`
            <pi-label 
            text=${this.label}
            ?hidden=${this.label==''}
            ></pi-label>

            <textarea
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            @input=${this._handleInputChange}
            ></textarea>
        `;
    }

    static styles = [
        defaultCss,
        css`
            :host { 
                display: inline-block;
                min-width: 250px;
            }

            textarea {
                width: 100%;
                min-height: 80px;
                font-size: var(--pi-textarea-input-font-size, 16px);
                padding: var(--pi-textarea-input-padding, 5px 7px);
                background-color: var(--pi-textarea-input-bg-color, #fff);
                border-radius: var(--pi-textarea-input-border-radius, 5px);
                border-style: var(--pi-textarea-input-border-style, solid);
                border-width: var(--pi-textarea-input-border-width, 1px);
                border-color: var(--pi-textarea-input-border-color, #aaa);
                color: var(--pi-textarea-input-text-color, #555);
                box-shadow: var(--pi-textarea-input-box-shadow, none);
                transition: background 0.3s ease, 
                            box-shadow 0.3s ease,
                            border-color 0.3s ease;

                &::placeholder {
                    color: var(--pi-textarea-input-placeholder-text-color, #aaa);
                }

                &:disabled, &:disabled::placeholder {
                    background-color: var(--pi-textarea-input-bg-color-disabled, #eee);
                    color: var(--pi-textarea-input-text-color-disabled, #888);
                }

                &:focus {
                    background: var(--pi-textarea-input-bg-color-focus, #f2fcff);
                    outline: none;
                    border-style: var(--pi-textarea-input-border-style-focus, solid);
                    border-width: var(--pi-textarea-input-border-width-focus, 1px);
                    border-color: var(--pi-textarea-input-border-color-focus, #aaa);
                    box-shadow: var(--pi-textarea-input-box-shadow-focus, 1px 1px 1px #ddd);
                }
            }
        `
    ]
    
}
customElements.define('pi-text-area-input', PiTextAreaInput);

/*

<!-- <img slot="header" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" alt=""> -->
<!-- <span slot="title">Card Title Area</span> -->
<!-- <span slot="subTitle">Card Sub-Title Area</span> -->
<!-- <span slot="footer">Card Footer Area</span> -->

*/

class PiCard extends LitElement {

    static get properties() {
        return {
            headerHasContent: { type: Boolean },
            titleHasContent: { type: Boolean },
            subTitleHasContent: { type: Boolean },
            footerHasContent: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.headerHasContent = false;
        this.titleHasContent = false;
        this.subTitleHasContent = false;
        this.footerHasContent = false;
    }

    firstUpdated() {
        this.determineSlotContents();
    }
    
    render() {
        return html`

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

        `;
    }

    determineSlotContents() {
        // Get values for specific slots
        this.headerHasContent = this.shadowRoot?.querySelector('slot[name="header"]')?.assignedNodes()?.length > 0;
        this.titleHasContent = this.shadowRoot?.querySelector('slot[name="title"]')?.assignedNodes()?.length > 0;
        this.subTitleHasContent = this.shadowRoot?.querySelector('slot[name="subTitle"]')?.assignedNodes()?.length > 0;
        this.footerHasContent = this.shadowRoot?.querySelector('slot[name="footer"]')?.assignedNodes()?.length > 0;
    }

    static styles = [
        defaultCss,
        css`
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
        `
    ]
}
customElements.define('pi-card', PiCard);

export { IconAlertTriangleDark, IconAlertTriangleLight, IconAreaChartStand, IconAvatarGenericLight, IconChainLink, IconCloseSquareDark, IconEditImage, IconEditPageFilled, IconEditVideo, IconGearSolid, IconInfoChatBubbleDark, IconInfoChatBubbleLight, IconInfoFilled, IconInfoLight, IconInfoRoundedDark, IconInfoRoundedLight, IconInfoSimpleDark, IconInfoSimpleLight, IconLeftArrowCircled, IconLogout, IconMagnifyText, IconNotificationBoxDark, IconNotificationBoxLight, IconPaperAirplaneSolid, IconSlackLogoSlanted, IconStopExDark, IconStopExLight, IconThumbsDownDark, IconThumbsDownLight, IconThumbsUpDark, IconThumbsUpLight, IconToggleOff, IconToggleOn, IconUserRoundedDark, IconUserRoundedLight, PiButton, PiCard, PiCheckboxInput, PiIconBase, PiIconHandler, PiRadioInput, PiSelectInput, PiTextAreaInput, PiTextInput, PiToggleSwitch };
//# sourceMappingURL=pi_components.js.map
