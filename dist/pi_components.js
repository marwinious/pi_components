import { LitElement as a, html as e, css as o, unsafeCSS as b } from "lit";
import { unsafeHTML as ce } from "lit/directives/unsafe-html.js";
import { classMap as m } from "lit/directives/class-map.js";
import { repeat as u } from "lit/directives/repeat.js";
import { styleMap as le } from "lit/directives/style-map.js";
class pe extends a {
  static get properties() {
    return {
      viewBox: {
        type: String
      },
      pathData: {
        type: String
      },
      fillRule: {
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
    };
  }
  constructor() {
    super(), this.viewBox = "0 0 24 24", this.pathData = "", this.fillRule = "", this.clipRule = "", this.strokeLineJoin = "", this.strokeMiterLimit = "", this.pathFillRule = "";
  }
  render() {
    return e`
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
    o`
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
  ];
}
customElements.get("pi-icon-base") || customElements.define("pi-icon-base", pe);
class de extends a {
  static get properties() {
    return {
      icon: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.icon = "";
  }
  render() {
    return e`
            <div class="icon">${ce("<pi-icon-" + this.icon + "></pi-icon-" + this.icon)}</div>
        `;
  }
  static styles = [
    o`
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
  ];
}
customElements.get("pi-icon-handler") || customElements.define("pi-icon-handler", de);
const v = {
  iconLabel: "pi-icon-left-arrow-circled"
};
class he extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m12.017 1.995c5.517 0 9.997 4.48 9.997 9.998s-4.48 9.998-9.997 9.998c-5.518 0-9.998-4.48-9.998-9.998s4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.498-8.497-8.498zm-1.528 4.715s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z";
  }
  render() {
    return e`
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
    o`
            
        `
  ];
}
customElements.get(v.iconLabel) || customElements.define(v.iconLabel, he);
const f = {
  iconLabel: "pi-icon-chain-link"
};
class ue extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z";
  }
  render() {
    return e`
            <pi-icon-base pathData=${this.pathData}></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(f.iconLabel) || customElements.define(f.iconLabel, ue);
const y = {
  iconLabel: "pi-icon-alert-triangle-dark"
};
class be extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(y.iconLabel) || customElements.define(y.iconLabel, be);
const x = {
  iconLabel: "pi-icon-alert-triangle-light"
};
class me extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(x.iconLabel) || customElements.define(x.iconLabel, me);
const D = {
  iconLabel: "pi-icon-area-chart-stand"
};
class ge extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M19.902 24h-2.627l-3.42-4h2.633l3.414 4zm-9.773-4l-3.42 4h-2.627l3.414-4h2.633zm2.871 4h-2v-4h2v4zm9-8v-14h-9v-2h-2v2h-9v14h-1v2h22v-2h-1zm-2 0h-16v-12h16v12zm-14-7.608v-1.392l2 2 2.5-3 4.5 3.939 3-1.961v1.218l-3.088 1.995-4.3-3.764-2.545 3.054-2.067-2.089zm9.455 3.639l-.634.409-.567-.497-3.529-3.089-1.889 2.267-.705.846-.774-.783-1.357-1.371v4.187h12v-3.613l-2.545 1.644z";
  }
  render() {
    return e`
            <pi-icon-base pathData=${this.pathData}></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(D.iconLabel) || customElements.define(D.iconLabel, ge);
const L = {
  iconLabel: "pi-icon-avatar-generic-light"
};
class ve extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(L.iconLabel) || customElements.define(L.iconLabel, ve);
const k = {
  iconLabel: "pi-icon-close-square-dark"
};
class fe extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-8.991 6.932 2.717-2.718c.146-.146.338-.219.53-.219.405 0 .751.325.751.75 0 .193-.073.384-.219.531l-2.718 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.531-.219l-2.728-2.728-2.728 2.728c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z";
  }
  render() {
    return e`
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
    o`
            
        `
  ];
}
customElements.get(k.iconLabel) || customElements.define(k.iconLabel, fe);
const z = {
  iconLabel: "pi-icon-edit-image"
};
class ye extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M15.562 20.22l-3.562.718.719-3.562 2.843 2.844zm-2.136-3.552l2.844 2.845 7.73-7.73-2.845-2.845-7.729 7.73zm-2.91.332l4.51-4.76-2.026-3.24-2.52 4-2.48-1.96-4 5.96h6.516zm-3.516-8.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5zm3.352 10.5h-8.352v-14h18v2.312h2v-4.312h-22v18h9.969l.383-2z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(z.iconLabel) || customElements.define(z.iconLabel, ye);
const _ = {
  iconLabel: "pi-icon-edit-page-filled"
};
class xe extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.75c0-.414.336-.75.75-.75s.75.336.75.75v9.25c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm-2.011 6.526c-1.045 3.003-1.238 3.45-1.238 3.84 0 .441.385.626.627.626.272 0 1.108-.301 3.829-1.249zm.888-.889 3.22 3.22 8.408-8.4c.163-.163.245-.377.245-.592 0-.213-.082-.427-.245-.591-.58-.578-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245z";
  }
  render() {
    return e`
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
    o`
            
        `
  ];
}
customElements.get(_.iconLabel) || customElements.define(_.iconLabel, xe);
const w = {
  iconLabel: "pi-icon-edit-video"
};
class De extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M4 5v18h20v-18h-20zm4 16h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm10 12h-8v-6h8v6zm0-8h-8v-6h8v6zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm-1-6h-19v17h-2v-19h21v2z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(w.iconLabel) || customElements.define(w.iconLabel, De);
const E = {
  iconLabel: "pi-icon-gear-solid"
};
class Le extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(E.iconLabel) || customElements.define(E.iconLabel, Le);
const $ = {
  iconLabel: "pi-icon-info-chat-bubble-dark"
};
class ke extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm1 15h-2v-6h2v6zm-1-7.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get($.iconLabel) || customElements.define($.iconLabel, ke);
const S = {
  iconLabel: "pi-icon-info-chat-bubble-light"
};
class ze extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M13 16h-2v-6h2v6zm-1-10.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm0-2.75c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(S.iconLabel) || customElements.define(S.iconLabel, ze);
const P = {
  iconLabel: "pi-icon-info-filled"
};
class _e extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(P.iconLabel) || customElements.define(P.iconLabel, _e);
const C = {
  iconLabel: "pi-icon-info-light"
};
class we extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(C.iconLabel) || customElements.define(C.iconLabel, we);
const R = {
  iconLabel: "pi-icon-info-rounded-dark"
};
class Ee extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.351 6.493c-.08-.801.55-1.493 1.351-1.493s1.431.692 1.351 1.493l-.801 8.01c-.029.282-.266.497-.55.497s-.521-.215-.55-.498l-.801-8.009zm1.351 12.757c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(R.iconLabel) || customElements.define(R.iconLabel, Ee);
const I = {
  iconLabel: "pi-icon-info-rounded-light"
};
class $e extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(I.iconLabel) || customElements.define(I.iconLabel, $e);
const N = {
  iconLabel: "pi-icon-info-sample-dark"
};
class Se extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z";
  }
  render() {
    return e`
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
    o`
            
        `
  ];
}
customElements.get(N.iconLabel) || customElements.define(N.iconLabel, Se);
const M = {
  iconLabel: "pi-icon-info-simple-light"
};
class Pe extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z";
  }
  render() {
    return e`
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
    o`
            
        `
  ];
}
customElements.get(M.iconLabel) || customElements.define(M.iconLabel, Pe);
const T = {
  iconLabel: "pi-icon-logout"
};
class Ce extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(T.iconLabel) || customElements.define(T.iconLabel, Ce);
const F = {
  iconLabel: "pi-icon-magnify-text"
};
class Re extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(F.iconLabel) || customElements.define(F.iconLabel, Re);
const A = {
  iconLabel: "pi-icon-notification-box-dark"
};
class Ie extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m2 4v16.002c0 .385.22.735.567.902.346.166.758.119 1.058-.121l4.725-3.781h12.65c.552 0 1-.448 1-1v-12.002c0-.552-.448-1-1-1h-18c-.552 0-1 .448-1 1zm9.998 5.002c.414 0 .75.336.75.75v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75zm.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z";
  }
  render() {
    return e`
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
    o`
            
        `
  ];
}
customElements.get(A.iconLabel) || customElements.define(A.iconLabel, Ie);
const B = {
  iconLabel: "pi-icon-notification-box-light"
};
class Ne extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m2 4v16.002c0 .385.22.735.567.902.346.166.758.119 1.058-.121l4.725-3.781h12.65c.552 0 1-.448 1-1v-12.002c0-.552-.448-1-1-1h-18c-.552 0-1 .448-1 1zm18.5 11.502h-12.677l-4.323 3.46v-14.462h17zm-8.502-6.5c.414 0 .75.336.75.75v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75zm.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z";
  }
  render() {
    return e`
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
    o`
            
        `
  ];
}
customElements.get(B.iconLabel) || customElements.define(B.iconLabel, Ne);
const O = {
  iconLabel: "pi-icon-paper-airplane-solid"
};
class Me extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(O.iconLabel) || customElements.define(O.iconLabel, Me);
const J = {
  iconLabel: "pi-icon-slack-logo-slanted"
};
class Te extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M22.994 8.7c-1.817-6.055-4.223-8.7-8.636-8.7-1.6 0-3.464.347-5.658 1.006-6.056 1.817-8.7 4.223-8.7 8.636 0 1.6.347 3.463 1.006 5.658 1.816 6.056 4.222 8.7 8.635 8.7 1.6 0 3.463-.347 5.659-1.006 6.055-1.817 8.7-4.222 8.7-8.635 0-1.6-.348-3.464-1.006-5.659m-4.164 5.353l-1.554.519.537 1.611c.211.652-.133 1.362-.786 1.573-.735.208-1.373-.206-1.574-.786l-.537-1.612-3.204 1.074.537 1.612c.212.653-.134 1.363-.786 1.573-.73.208-1.371-.201-1.573-.787l-.538-1.611-1.554.518c-.725.21-1.371-.203-1.574-.787-.21-.652.135-1.362.787-1.573l1.554-.518-1.036-3.089-1.554.518c-.729.207-1.37-.2-1.573-.787-.211-.652.134-1.362.786-1.573l1.555-.518-.538-1.611c-.211-.653.135-1.363.787-1.574.652-.211 1.362.134 1.573.787l.538 1.611 3.203-1.074-.536-1.612c-.212-.652.134-1.362.786-1.573.653-.211 1.363.134 1.574.787l.537 1.612 1.554-.519c.652-.211 1.362.135 1.573.787.212.652-.134 1.362-.786 1.573l-1.555.518 1.036 3.089 1.555-.518c.652-.211 1.362.134 1.573.787.211.652-.135 1.362-.787 1.573m-5.747-4.117l-3.202 1.073 1.035 3.092 3.202-1.072-1.035-3.093z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(J.iconLabel) || customElements.define(J.iconLabel, Te);
const q = {
  iconLabel: "pi-icon-stop-ex-dark"
};
class Fe extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M16.971 0h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-1.402 16.945l-3.554-3.521-3.518 3.568-1.418-1.418 3.507-3.566-3.586-3.472 1.418-1.417 3.581 3.458 3.539-3.583 1.431 1.431-3.535 3.568 3.566 3.522-1.431 1.43z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(q.iconLabel) || customElements.define(q.iconLabel, Fe);
const H = {
  iconLabel: "pi-icon-stop-ex-light"
};
class Ae extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M16.142 2l5.858 5.858v8.284l-5.858 5.858h-8.284l-5.858-5.858v-8.284l5.858-5.858h8.284zm.829-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-8.482 16.992l3.518-3.568 3.554 3.521 1.431-1.43-3.566-3.523 3.535-3.568-1.431-1.432-3.539 3.583-3.581-3.457-1.418 1.418 3.585 3.473-3.507 3.566 1.419 1.417z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(H.iconLabel) || customElements.define(H.iconLabel, Ae);
const U = {
  iconLabel: "pi-icon-thumbs-down-dark"
};
class Be extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M5 14h-5v-12h5v12zm18.875-4.809c0-.646-.555-1.32-1.688-1.41-.695-.055-.868-.623-.031-.812.701-.159 1.098-.652 1.098-1.181 0-.629-.559-1.309-1.826-1.543-.766-.141-.842-.891-.031-.953.688-.053.96-.291.96-.626-.001-.931-1.654-2.666-4.852-2.666-4.16 0-6.123 2.067-10.505 2.768v10.878c2.375.869 4.466 2.644 5.688 6.886.478 1.661.781 3.468 2.374 3.468 2.375 0 2.594-5.125 1.688-8.781 1.312-.688 3.751-.936 4.979-.885 1.771.072 2.271-.818 2.271-1.49 0-1.011-.833-1.35-1.354-1.51-.609-.188-.889-.807-.031-.922.836-.112 1.26-.656 1.26-1.221z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(U.iconLabel) || customElements.define(U.iconLabel, Be);
const j = {
  iconLabel: "pi-icon-thumbs-down-light"
};
class Oe extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M24 11.936c0-1-.986-6.373-1.486-8.25-.714-2.689-2.471-3.686-5.009-3.686-2.283 0-4.079.617-5.336 1.158-2.05.883-3.791 1.519-6.169 1.746v-.904h-6v12h6v-.73c2.454.585 4.852 2.066 6.4 7.402.483 1.66.972 3.328 2.833 3.328 3.448 0 3.005-5.531 2.196-8.814 1.106-.466 2.767-.692 3.977-.744 1.426-.06 2.594-.858 2.594-2.506zm-20 .064h-2v-8h2v8zm15.755-1.302l1.394.167c1.075.129 1.105 1.525.051 1.584-2.749.154-5.06 1.013-6.12 1.556.43 1.748.92 3.463.92 5.534 0 2.505-.781 3.666-1.679.574-1.993-6.859-5.057-8.364-8.321-9.113v-6c2.521-.072 4.72-1.041 6.959-2.005 1.731-.745 4.849-1.495 6.416-.614 1.295.836 1.114 1.734.292 1.661l-.771-.032c-.815-.094-.92 1.068-.109 1.141 0 0 1.321.062 1.745.115.976.123 1.028 1.607-.04 1.551-.457-.024-1.143-.041-1.143-.041-.797-.031-.875 1.078-.141 1.172 0 0 .714.005 1.761.099s1.078 1.609-.004 1.563c-.868-.037-1.069-.027-1.069-.027-.75.005-.875 1.028-.141 1.115z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(j.iconLabel) || customElements.define(j.iconLabel, Oe);
const G = {
  iconLabel: "pi-icon-thumbs-up-dark"
};
class Je extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(G.iconLabel) || customElements.define(G.iconLabel, Je);
const V = {
  iconLabel: "pi-icon-thumbs-up-light"
};
class qe extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(V.iconLabel) || customElements.define(V.iconLabel, qe);
const K = {
  iconLabel: "pi-icon-toggle-off"
};
class He extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M18 18h-12c-3.311 0-6-2.689-6-6s2.689-6 6-6h12.039c3.293.021 5.961 2.701 5.961 6 0 3.311-2.688 6-6 6zm-12-10c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`

        `
  ];
}
customElements.get(K.iconLabel) || customElements.define(K.iconLabel, He);
const X = {
  iconLabel: "pi-icon-toggle-on"
};
class Ue extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M6 18h12c3.311 0 6-2.689 6-6s-2.689-6-6-6h-12.039c-3.293.021-5.961 2.701-5.961 6 0 3.311 2.688 6 6 6zm12-10c-2.208 0-4 1.792-4 4s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(X.iconLabel) || customElements.define(X.iconLabel, Ue);
const W = {
  iconLabel: "pi-icon-user-rounded-dark"
};
class je extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(W.iconLabel) || customElements.define(W.iconLabel, je);
const Y = {
  iconLabel: "pi-icon-user-rounded-light"
};
class Ge extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Y.iconLabel) || customElements.define(Y.iconLabel, Ge);
const Z = {
  iconLabel: "pi-icon-grid-light"
};
class Ve extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-12.5 15.5h-4v-4h4zm1.5-4h4v4h-4zm9.5 0v4h-4v-4zm-15-5.5h4v4h-4zm5.5 0h4v4h-4zm5.5 0h4v4h-4zm-11-5.5h4v4h-4zm5.5 0h4v4h-4zm5.5 0h4v4h-4z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Z.iconLabel) || customElements.define(Z.iconLabel, Ve);
const Q = {
  iconLabel: "pi-icon-grid-dark"
};
class Ke extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m8 16h-5v4c0 .621.52 1 1 1h4zm6.6 5v-5h-5.2v5zm6.4-5h-5v5h4c.478 0 1-.379 1-1zm0-1.4v-5.2h-5v5.2zm-18-5.2v5.2h5v-5.2zm11.6 0h-5.2v5.2h5.2zm1.4-6.4v5h5v-4c0-.478-.379-1-1-1zm-8 5v-5h-4c-.62 0-1 .519-1 1v4zm6.6-5h-5.2v5h5.2z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Q.iconLabel) || customElements.define(Q.iconLabel, Ke);
const tt = {
  iconLabel: "pi-icon-layout-light"
};
class Xe extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-10 .5v15h-6.5v-15zm1.5 8h7v7h-7zm7-8v6.5h-7v-6.5z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(tt.iconLabel) || customElements.define(tt.iconLabel, Xe);
const et = {
  iconLabel: "pi-icon-layout-dark"
};
class We extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m11 3h-7c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h7zm10 9.4h-8.6v8.6h7.6c.478 0 1-.379 1-1zm-8.6-9.4v8h8.6v-7c0-.478-.379-1-1-1z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(et.iconLabel) || customElements.define(et.iconLabel, We);
const it = {
  iconLabel: "pi-icon-file-paper-light"
};
class Ye extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm-3 3h-7v1h7v-1z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(it.iconLabel) || customElements.define(it.iconLabel, Ye);
const ot = {
  iconLabel: "pi-icon-file-paper-dark"
};
class Ze extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm.256 11h-8v-1h8v1zm4-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(ot.iconLabel) || customElements.define(ot.iconLabel, Ze);
const at = {
  iconLabel: "pi-icon-caret-circle-down-dark"
};
class Qe extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm4.843 8.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(at.iconLabel) || customElements.define(at.iconLabel, Qe);
const st = {
  iconLabel: "pi-icon-caret-circle-down-light"
};
class ti extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497 8.497-3.807 8.497-8.497-3.807-8.498-8.497-8.498zm4.845 6.711c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291zm-7.564.289h5.446l-2.718 3.522z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(st.iconLabel) || customElements.define(st.iconLabel, ti);
const nt = {
  iconLabel: "pi-icon-caret-circle-left-dark"
};
class ei extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-8.211-4.843c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(nt.iconLabel) || customElements.define(nt.iconLabel, ei);
const rt = {
  iconLabel: "pi-icon-caret-circle-left-light"
};
class ii extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-1.5 0c0 4.69-3.808 8.498-8.498 8.498s-8.497-3.808-8.497-8.498 3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497zm-6.711-4.845c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591zm-.289 7.564v-5.446l-3.522 2.718z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(rt.iconLabel) || customElements.define(rt.iconLabel, ii);
const ct = {
  iconLabel: "pi-icon-caret-circle-right-dark"
};
class oi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(ct.iconLabel) || customElements.define(ct.iconLabel, oi);
const lt = {
  iconLabel: "pi-icon-caret-circle-right-light"
};
class ai extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm1.5 0c0 4.69 3.808 8.498 8.498 8.498s8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497-8.498 3.807-8.498 8.497zm6.711-4.845c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.564v-5.446l3.523 2.718z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(lt.iconLabel) || customElements.define(lt.iconLabel, ai);
const pt = {
  iconLabel: "pi-icon-caret-circle-up-dark"
};
class si extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m11.998 21.995c5.517 0 9.997-4.48 9.997-9.997 0-5.518-4.48-9.998-9.997-9.998-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997zm4.843-8.211c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(pt.iconLabel) || customElements.define(pt.iconLabel, si);
const dt = {
  iconLabel: "pi-icon-caret-circle-up-light"
};
class ni extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m11.998 21.995c5.517 0 9.997-4.48 9.997-9.997 0-5.518-4.48-9.998-9.997-9.998-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997zm0-1.5c-4.69 0-8.498-3.807-8.498-8.497s3.808-8.498 8.498-8.498 8.497 3.808 8.497 8.498-3.807 8.497-8.497 8.497zm4.845-6.711c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291zm-7.564-.289h5.446l-2.718-3.522z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(dt.iconLabel) || customElements.define(dt.iconLabel, ni);
const ht = {
  iconLabel: "pi-icon-caret-down-dark"
};
class ri extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(ht.iconLabel) || customElements.define(ht.iconLabel, ri);
const ut = {
  iconLabel: "pi-icon-caret-down-light"
};
class ci extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291zm-7.564.289h5.446l-2.718 3.522z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(ut.iconLabel) || customElements.define(ut.iconLabel, ci);
const bt = {
  iconLabel: "pi-icon-caret-left-dark"
};
class li extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(bt.iconLabel) || customElements.define(bt.iconLabel, li);
const mt = {
  iconLabel: "pi-icon-caret-left-light"
};
class pi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591zm-.289 7.563v-5.446l-3.522 2.719z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(mt.iconLabel) || customElements.define(mt.iconLabel, pi);
const gt = {
  iconLabel: "pi-icon-caret-right-dark"
};
class di extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(gt.iconLabel) || customElements.define(gt.iconLabel, di);
const vt = {
  iconLabel: "pi-icon-caret-right-light"
};
class hi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(vt.iconLabel) || customElements.define(vt.iconLabel, hi);
const ft = {
  iconLabel: "pi-icon-caret-up-dark"
};
class ui extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291 1.002 1.299 3.044 3.945 4.243 5.498z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(ft.iconLabel) || customElements.define(ft.iconLabel, ui);
const yt = {
  iconLabel: "pi-icon-caret-up-light"
};
class bi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291zm-7.564-.289h5.446l-2.718-3.522z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(yt.iconLabel) || customElements.define(yt.iconLabel, bi);
const xt = {
  iconLabel: "pi-icon-coin-dark"
};
class mi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.947v1.053h-1v-.998c-1.035-.018-2.106-.265-3-.727l.455-1.644c.956.371 2.229.765 3.225.54 1.149-.26 1.384-1.442.114-2.011-.931-.434-3.778-.805-3.778-3.243 0-1.363 1.039-2.583 2.984-2.85v-1.067h1v1.018c.724.019 1.536.145 2.442.42l-.362 1.647c-.768-.27-1.617-.515-2.443-.465-1.489.087-1.62 1.376-.581 1.916 1.712.805 3.944 1.402 3.944 3.547.002 1.718-1.343 2.632-3 2.864z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(xt.iconLabel) || customElements.define(xt.iconLabel, mi);
const Dt = {
  iconLabel: "pi-icon-coin-light"
};
class gi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 14.083c0-2.145-2.232-2.742-3.943-3.546-1.039-.54-.908-1.829.581-1.916.826-.05 1.675.195 2.443.465l.362-1.647c-.907-.276-1.719-.402-2.443-.421v-1.018h-1v1.067c-1.945.267-2.984 1.487-2.984 2.85 0 2.438 2.847 2.81 3.778 3.243 1.27.568 1.035 1.75-.114 2.011-.997.226-2.269-.168-3.225-.54l-.455 1.644c.894.462 1.965.708 3 .727v.998h1v-1.053c1.657-.232 3.002-1.146 3-2.864z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Dt.iconLabel) || customElements.define(Dt.iconLabel, gi);
const Lt = {
  iconLabel: "pi-icon-flag-dark"
};
class vi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M4 24h-2v-24h2v24zm18-22h-16v12h16l-4-5.969 4-6.031z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Lt.iconLabel) || customElements.define(Lt.iconLabel, vi);
const kt = {
  iconLabel: "pi-icon-flag-light"
};
class fi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M16 7.553l6 7.447h-19v9h-1v-23h20l-6 6.553zm-13-5.553v12h16.91l-5.228-6.489 5.046-5.511h-16.728z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(kt.iconLabel) || customElements.define(kt.iconLabel, fi);
const zt = {
  iconLabel: "pi-icon-flag-fancy-dark"
};
class yi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M4 24h-2v-24h2v24zm18-21.387s-1.621 1.43-3.754 1.43c-3.361 0-3.436-2.895-7.337-2.895-2.108 0-4.075.98-4.909 1.694v12.085c1.183-.819 2.979-1.681 4.922-1.681 3.685 0 4.201 2.754 7.485 2.754 2.121 0 3.593-1.359 3.593-1.359-1.742-1.253-3.071-2.954-3.778-4.932 1.464-1.278 3.508-4.962 3.778-7.096z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(zt.iconLabel) || customElements.define(zt.iconLabel, yi);
const _t = {
  iconLabel: "pi-icon-flag-fancy-light"
};
class xi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M17.222 9.709c1.464-1.278 3.508-4.962 3.778-7.096 0 0-1.621 1.43-3.754 1.43-3.361 0-3.436-2.895-7.337-2.895-2.116 0-3.701.8-4.909 1.625v-2.773h-2v24h2v-9.084c1.415-.86 2.891-1.669 4.922-1.669 3.685 0 4.201 2.754 7.485 2.754 2.121-.001 3.593-1.36 3.593-1.36-1.742-1.253-3.071-2.953-3.778-4.932zm-2.186 3.327c-1.096-.755-2.597-1.79-5.114-1.79-1.978 0-3.704.676-4.922 1.338v-7.465c3.687-2.73 5.9-2.24 7.65-.869 1 .784 2.409 1.881 4.863 1.787-.637 1.442-1.512 2.338-2.633 3.063.309 1.338.98 3.035 2.522 4.9-.969-.001-1.496-.364-2.366-.964z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(_t.iconLabel) || customElements.define(_t.iconLabel, xi);
const wt = {
  iconLabel: "pi-icon-flag-wavy-dark"
};
class Di extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M4 24h-2v-24h2v24zm18-21.387s-1.621 1.43-3.754 1.43c-3.36 0-3.436-2.895-7.337-2.895-2.108 0-4.075.98-4.909 1.694v12.085c1.184-.819 2.979-1.681 4.923-1.681 3.684 0 4.201 2.754 7.484 2.754 2.122 0 3.593-1.359 3.593-1.359v-12.028z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(wt.iconLabel) || customElements.define(wt.iconLabel, Di);
const Et = {
  iconLabel: "pi-icon-flag-wavy-light"
};
class Li extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M17.246 4.042c-3.36 0-3.436-2.895-7.337-2.895-2.108 0-4.075.98-4.909 1.694v-2.841h-2v24h2v-9.073c1.184-.819 2.979-1.681 4.923-1.681 3.684 0 4.201 2.754 7.484 2.754 2.122 0 3.593-1.359 3.593-1.359v-12.028s-1.621 1.429-3.754 1.429zm1.754 9.544c-.4.207-.959.414-1.593.414-.972 0-1.498-.363-2.371-.964-1.096-.755-2.596-1.79-5.113-1.79-1.979 0-3.71.679-4.923 1.339v-7.488c1.019-.902 2.865-1.949 4.909-1.949 1.333 0 1.894.439 2.741 1.103.966.756 2.288 1.792 4.596 1.792.627 0 1.215-.086 1.754-.223v7.766z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Et.iconLabel) || customElements.define(Et.iconLabel, Li);
const $t = {
  iconLabel: "pi-icon-globe-dark"
};
class ki extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.567 9.098c-.059-.058-.127-.108-.206-.138-.258-.101-1.35.603-1.515.256-.108-.231-.327.148-.578.008-.121-.067-.459-.52-.611-.465-.312.112.479.974.694 1.087.203-.154.86-.469 1.002-.039.271.812-.745 1.702-1.264 2.171-.775.702-.63-.454-1.159-.86-.277-.213-.274-.667-.555-.824-.125-.071-.7-.732-.694-.821l-.017.167c-.095.072-.297-.27-.319-.325 0 .298.485.772.646 1.011.273.409.42 1.005.756 1.339.179.18.866.923 1.045.908l.921-.437c.649.154-1.531 3.237-1.738 3.619-.171.321.139 1.112.114 1.49-.029.437-.374.579-.7.817-.35.255-.268.752-.562.934-.521.321-.897 1.366-1.639 1.361-.219-.001-1.151.364-1.273.007-.095-.258-.223-.455-.356-.71-.131-.25-.015-.51-.175-.731-.11-.154-.479-.502-.513-.684-.002-.157.118-.632.283-.715.231-.118.044-.462.016-.663-.048-.357-.27-.652-.535-.859-.393-.302-.189-.542-.098-.974 0-.206-.126-.476-.402-.396-.57.166-.396-.445-.812-.417-.299.021-.543.211-.821.295-.349.104-.707-.083-1.053-.126-1.421-.179-1.885-1.804-1.514-2.976.037-.192-.115-.547-.048-.696.159-.352.485-.752.768-1.021.16-.152.365-.113.553-.231.29-.182.294-.558.578-.789.404-.328.956-.321 1.482-.392.281-.037 1.35-.268 1.518-.06 0 .039.193.611-.019.578.438.023 1.061.756 1.476.585.213-.089.135-.744.573-.427.265.19 1.45.275 1.696.07.152-.125.236-.939.053-1.031.117.116-.618.125-.686.099-.122-.044-.235.115-.43.025.117.055-.651-.358-.22-.674-.181.132-.349-.037-.544.109-.135.109.062.181-.13.277-.305.155-.535-.53-.649-.607-.118-.077-1.024-.713-.777-.298l.797.793c-.04.026-.209-.289-.209-.059.053-.136.02.585-.105.35-.056-.09.091-.14.006-.271 0-.085-.23-.169-.275-.228-.126-.157-.462-.502-.644-.585-.05-.024-.771.088-.832.111-.071.099-.131.203-.181.314-.149.055-.29.127-.423.216l-.159.356c-.068.061-.772.294-.776.303.03-.076-.492-.172-.457-.324.038-.167.215-.687.169-.877-.048-.199 1.085.287 1.158-.238.029-.227.047-.492-.316-.531.069.008.702-.249.807-.364.148-.169.486-.447.731-.447.286 0 .225-.417.356-.622.133.053-.071.38.088.512-.01-.104.45.057.494.033.105-.056.691-.023.601-.299-.101-.28.052-.197.183-.255-.02.008.248-.458.363-.456-.104-.089-.398.112-.516.103-.308-.024-.177-.525-.061-.672.09-.116-.246-.258-.25-.036-.006.332-.314.633-.243 1.075.109.666-.743-.161-.816-.115-.283.172-.515-.216-.368-.449.149-.238.51-.226.659-.48.104-.179.227-.389.388-.524.541-.454.689-.091 1.229-.042.526.048.178.125.105.327-.07.192.289.261.413.1.071-.092.232-.326.301-.499.07-.175.578-.2.527-.365 2.72 1.148 4.827 3.465 5.694 6.318zm-11.113-3.779l.068-.087.073-.019c.042-.034.086-.118.151-.104.043.009.146.095.111.148-.037.054-.066-.049-.081.101-.018.169-.188.167-.313.222-.087.037-.175-.018-.09-.104l.088-.108-.007-.049zm.442.245c.046-.045.138-.008.151-.094.014-.084.078-.178-.008-.335-.022-.042.116-.082.051-.137l-.109.032s.155-.668.364-.366l-.089.103c.135.134.172.47.215.687.127.066.324.078.098.192.117-.02-.618.314-.715.178-.072-.083.317-.139.307-.173-.004-.011-.317-.02-.265-.087zm1.43-3.547l-.356.326c-.36.298-1.28.883-1.793.705-.524-.18-1.647.667-1.826.673-.067.003.002-.641.36-.689-.141.021.993-.575 1.185-.805.678-.146 1.381-.227 2.104-.227l.326.017zm-5.086 1.19c.07.082.278.092-.026.288-.183.11-.377.809-.548.809-.51.223-.542-.439-1.109.413-.078.115-.395.158-.644.236.685-.688 1.468-1.279 2.327-1.746zm-5.24 8.793c0-.541.055-1.068.139-1.586l.292.185c.113.135.113.719.169.911.139.482.484.751.748 1.19.155.261.414.923.332 1.197.109-.179 1.081.824 1.259 1.033.418.492.74 1.088.061 1.574-.219.158.334 1.14.049 1.382l-.365.094c-.225.138-.235.397-.166.631-1.562-1.765-2.518-4.076-2.518-6.611zm14.347-5.823c.083-.01-.107.167-.107.167.033.256.222.396.581.527.437.157.038.455-.213.385-.139-.039-.854-.255-.879.025 0 .167-.679.001-.573-.175.073-.119.05-.387.186-.562.193-.255.38-.116.386.032-.001.394.398-.373.619-.399z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get($t.iconLabel) || customElements.define($t.iconLabel, ki);
const St = {
  iconLabel: "pi-icon-globe-light"
};
class zi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(St.iconLabel) || customElements.define(St.iconLabel, zi);
const Pt = {
  iconLabel: "pi-icon-list-bullets-light"
};
class _i extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m3.3 15.4c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.85c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6.55c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.3c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7.75c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Pt.iconLabel) || customElements.define(Pt.iconLabel, _i);
const Ct = {
  iconLabel: "pi-icon-list-squares-dark"
};
class wi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m10.5 17.25c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75zm-1.5-3.55c0-.53-.47-1-1-1h-5c-.53 0-1 .47-1 1v4.3c0 .53.47 1 1 1h5c.53 0 1-.47 1-1zm1.5-1.7c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75zm-1.5-6c0-.53-.47-1-1-1h-5c-.53 0-1 .47-1 1v4.3c0 .53.47 1 1 1h5c.53 0 1-.47 1-1zm1.5.75c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Ct.iconLabel) || customElements.define(Ct.iconLabel, wi);
const Rt = {
  iconLabel: "pi-icon-list-squares-light"
};
class Ei extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m10.5 17.25c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75zm-1.5-3.55c0-.53-.47-1-1-1h-5c-.53 0-1 .47-1 1v4.3c0 .53.47 1 1 1h5c.53 0 1-.47 1-1zm-5.5.5h4v3.3h-4zm7-2.2c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75zm-1.5-6c0-.53-.47-1-1-1h-5c-.53 0-1 .47-1 1v4.3c0 .53.47 1 1 1h5c.53 0 1-.47 1-1zm-5.5.5h4v3.3h-4zm7 .25c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Rt.iconLabel) || customElements.define(Rt.iconLabel, Ei);
const It = {
  iconLabel: "pi-icon-paper-dark"
};
class $i extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(It.iconLabel) || customElements.define(It.iconLabel, $i);
const Nt = {
  iconLabel: "pi-icon-paper-light"
};
class Si extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Nt.iconLabel) || customElements.define(Nt.iconLabel, Si);
const Mt = {
  iconLabel: "pi-icon-square-paper-light"
};
class Pi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M16 0h-14v24h20v-18l-6-6zm0 3l3 3h-3v-3zm-12 19v-20h10v6h6v14h-16z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Mt.iconLabel) || customElements.define(Mt.iconLabel, Pi);
const Tt = {
  iconLabel: "pi-icon-paper-stack-fancy-dark"
};
class Ci extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M15.602 4.075c2.201 1.174 4.904 3.254 6.398 5.252-1.286-.9-3.011-1.027-5.058-.549.222-1.469-.185-3.535-1.34-4.703zm-.825 6.925s1.522-7-3.335-7h-5.442v20h16v-10.629c0-3.42-4.214-3.116-7.223-2.371zm-.318-8l-1.459-1h-9v20h1v-19h9.459zm-2.443-2l-1.5-1h-8.516v20h1v-19h9.016z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Tt.iconLabel) || customElements.define(Tt.iconLabel, Ci);
const Ft = {
  iconLabel: "pi-icon-paper-stack-fancy-light"
};
class Ri extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M13 6c3.469 0 2 5 2 5s5-1.594 5 2v9h-12v-16h5zm.827-2h-7.827v20h16v-11.842c0-2.392-5.011-8.158-8.173-8.158zm.632-1l-1.459-1h-9v20h1v-19h9.459zm-2.443-2l-1.5-1h-8.516v20h1v-19h9.016z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Ft.iconLabel) || customElements.define(Ft.iconLabel, Ri);
const At = {
  iconLabel: "pi-icon-star-dark"
};
class Ii extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(At.iconLabel) || customElements.define(At.iconLabel, Ii);
const Bt = {
  iconLabel: "pi-icon-star-light"
};
class Ni extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44zm.678 2.033-2.361 4.792-5.246.719 3.848 3.643-.948 5.255 4.707-2.505 4.707 2.505-.951-5.236 3.851-3.662-5.314-.756z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Bt.iconLabel) || customElements.define(Bt.iconLabel, Ni);
const Ot = {
  iconLabel: "pi-icon-star-half-filled"
};
class Mi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44zm.678 2.033v11.904l4.707 2.505-.951-5.236 3.851-3.662-5.314-.756z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            fillRule="nonzero"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Ot.iconLabel) || customElements.define(Ot.iconLabel, Mi);
const Jt = {
  iconLabel: "pi-icon-tag-dark"
};
class Ti extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M10.605 0h-10.605v10.609l13.391 13.391 10.609-10.604-13.395-13.396zm-4.191 6.414c-.781.781-2.046.781-2.829.001-.781-.783-.781-2.048 0-2.829.782-.782 2.048-.781 2.829-.001.782.782.781 2.047 0 2.829z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Jt.iconLabel) || customElements.define(Jt.iconLabel, Ti);
const qt = {
  iconLabel: "pi-icon-tag-light"
};
class Fi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M14.101 24l-14.101-14.105v-9.895h9.855l14.145 14.101c-3.3 3.299-6.6 6.599-9.899 9.899zm-4.659-23h-8.442v8.481l13.101 13.105 8.484-8.484c-4.381-4.368-8.762-8.735-13.143-13.102zm-1.702 3.204c.975.976.975 2.56 0 3.536-.976.975-2.56.975-3.536 0-.976-.976-.976-2.56 0-3.536s2.56-.976 3.536 0zm-.708.707c.586.586.586 1.536 0 2.121-.585.586-1.535.586-2.121 0-.585-.585-.585-1.535 0-2.121.586-.585 1.536-.585 2.121 0z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(qt.iconLabel) || customElements.define(qt.iconLabel, Fi);
const Ht = {
  iconLabel: "pi-icon-tag-stack-dark"
};
class Ai extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M10.773 21.585l-1.368 1.415-10.405-10.429v-8.571h2v7.719l9.773 9.866zm1.999-20.585h-9.772v9.772l12.074 12.228 9.926-9.85-12.228-12.15zm-4.772 7c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Ht.iconLabel) || customElements.define(Ht.iconLabel, Ai);
const Ut = {
  iconLabel: "pi-icon-tag-stack-light"
};
class Bi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12.434 22.586l7.859-7.858.707.707-8.565 8.565-.001-.001v.001l-12.434-12.434.707-.707 11.727 11.727zm-.033-1.7l-12.401-12.405v-8.481h8.441l12.445 12.401-8.485 8.485zm-4.373-19.886h-7.028v7.067l11.401 11.405 7.07-7.07s-7.534-7.506-11.443-11.402zm-1.598 2.594c.78.78.78 2.048 0 2.828-.781.781-2.048.781-2.829 0-.78-.78-.78-2.048 0-2.828.781-.781 2.048-.781 2.829 0zm-.707.707c.39.39.39 1.024 0 1.414-.391.39-1.024.39-1.414 0-.391-.39-.391-1.024 0-1.414.39-.39 1.023-.39 1.414 0z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Ut.iconLabel) || customElements.define(Ut.iconLabel, Bi);
const jt = {
  iconLabel: "pi-icon-web-globe-dark"
};
class Oi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(jt.iconLabel) || customElements.define(jt.iconLabel, Oi);
const Gt = {
  iconLabel: "pi-icon-web-globe-light"
};
class Ji extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Gt.iconLabel) || customElements.define(Gt.iconLabel, Ji);
const Vt = {
  iconLabel: "pi-icon-menu-dot-horizontal-circled-light"
};
class qi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497 8.497-3.807 8.497-8.497-3.807-8.498-8.497-8.498zm2.502 8.495c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-3.75 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-3.75 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Vt.iconLabel) || customElements.define(Vt.iconLabel, qi);
const Kt = {
  iconLabel: "pi-icon-menu-dot-horizontal-circled-dark"
};
class Hi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm2.498 9.995c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-3.75 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm-3.75 0c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Kt.iconLabel) || customElements.define(Kt.iconLabel, Hi);
const Xt = {
  iconLabel: "pi-icon-menu-dot-horizontal-solid"
};
class Ui extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Xt.iconLabel) || customElements.define(Xt.iconLabel, Ui);
const Wt = {
  iconLabel: "pi-icon-menu-dot-vertical-solid"
};
class ji extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m12 16.495c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Wt.iconLabel) || customElements.define(Wt.iconLabel, ji);
const Yt = {
  iconLabel: "pi-icon-menu-dot-horizontal-thick"
};
class Gi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m16.5 11.998c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25c0 1.241-1.008 2.25-2.25 2.25s-2.25-1.009-2.25-2.25zm1.5 0c0-.414.336-.75.75-.75s.75.336.75.75-.336.75-.75.75-.75-.336-.75-.75zm-8.25 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25c0 1.241-1.008 2.25-2.25 2.25s-2.25-1.009-2.25-2.25zm1.5 0c0-.414.336-.75.75-.75s.75.336.75.75-.336.75-.75.75-.75-.336-.75-.75zm-8.25 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25c0 1.241-1.008 2.25-2.25 2.25s-2.25-1.009-2.25-2.25zm1.5 0c0-.414.336-.75.75-.75s.75.336.75.75-.336.75-.75.75-.75-.336-.75-.75z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Yt.iconLabel) || customElements.define(Yt.iconLabel, Gi);
const Zt = {
  iconLabel: "pi-icon-menu-dot-vertical-thick"
};
class Vi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m12 16.495c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0 1.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm0-8.25c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0 1.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm0-8.25c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0 1.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Zt.iconLabel) || customElements.define(Zt.iconLabel, Vi);
const Qt = {
  iconLabel: "pi-icon-menu-dot-horizontal-thin"
};
class Ki extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M16 12c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-8 0c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm1 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(Qt.iconLabel) || customElements.define(Qt.iconLabel, Ki);
const te = {
  iconLabel: "pi-icon-menu-dot-vertical-thin"
};
class Xi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 16c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(te.iconLabel) || customElements.define(te.iconLabel, Xi);
const ee = {
  iconLabel: "pi-icon-menu-hamburger-rounded"
};
class Wi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(ee.iconLabel) || customElements.define(ee.iconLabel, Wi);
const ie = {
  iconLabel: "pi-icon-menu-hamburger-corners"
};
class Yi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(ie.iconLabel) || customElements.define(ie.iconLabel, Yi);
const oe = {
  iconLabel: "pi-icon-menu-hamburger-corners-thick"
};
class Zi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(oe.iconLabel) || customElements.define(oe.iconLabel, Zi);
const ae = {
  iconLabel: "pi-icon-menu-hamburger-circled-light"
};
class Qi extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(ae.iconLabel) || customElements.define(ae.iconLabel, Qi);
const se = {
  iconLabel: "pi-icon-menu-hamburger-circled-dark"
};
class to extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(se.iconLabel) || customElements.define(se.iconLabel, to);
const ne = {
  iconLabel: "pi-icon-magnifying-glass"
};
class eo extends a {
  static get properties() {
    return {
      pathData: {
        type: String
      }
    };
  }
  constructor() {
    super(), this.pathData = "m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z";
  }
  render() {
    return e`
            <pi-icon-base 
            pathData=${this.pathData}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            ></pi-icon-base>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get(ne.iconLabel) || customElements.define(ne.iconLabel, eo);
class io extends a {
  static get properties() {
    return {
      text: { type: String }
    };
  }
  constructor() {
    super(), this.text = "";
  }
  render() {
    return e`
            ${this.text}
        `;
  }
  static styles = [
    o`
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
  ];
}
customElements.get("pi-label") || customElements.define("pi-label", io);
class oo extends a {
  static get properties() {
    return {};
  }
  constructor() {
    super();
  }
  render() {
    return e`
            <slot></slot>
        `;
  }
  static styles = [
    o`
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
  ];
}
customElements.get("pi-badge") || customElements.define("pi-badge", oo);
const re = ".raised{box-shadow:var(--pi-raised-box-shadow, 0px 1px 2px 1px #aaa)}.rounded{border-radius:var(--pi-rounded-border-radius, 2rem)}.squared{border-radius:var(--pi-squared-border-radius, 0rem)}", ao = [
  "primary",
  "secondary",
  "success",
  "info",
  "warn",
  "help",
  "danger"
], so = () => ao.map((i) => `
    .btn_severity_${i} {
        --pi-button-bg-color: var(--pi-button-bg-color-${i});
        --pi-button-text-color: var(--pi-button-text-color-${i});
        --pi-button-border: var(--pi-button-border-${i});
        --pi-button-hover-bg-color: var(--pi-button-hover-bg-color-${i});
        --pi-button-hover-text-color: var(--pi-button-hover-text-color-${i}, #FFF);
        --pi-button-hover-border-color: var(--pi-button-hover-border-color-${i});
        --pi-button-active-bg-color: var(--pi-button-active-bg-color-${i});
        --pi-button-active-text-color: var(--pi-button-active-text-color-${i});
        --pi-button-active-border-color: var(--pi-button-active-border-color-${i});
    }
`).join(""), no = o`

    ${b(so())}


`, ro = o`

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

    
`, co = o`

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

`, lo = o`

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
class po extends a {
  static get properties() {
    return {
      disabled: { type: Boolean },
      icon: { type: String },
      severity: { type: String },
      raised: { type: Boolean },
      rounded: { type: Boolean },
      squared: { type: Boolean },
      variant: { type: String },
      badge: { type: [Number, String] },
      type: { type: String }
    };
  }
  constructor() {
    super(), this.disabled = !1, this.icon = "", this.severity = "", this.raised = !1, this.rounded = !1, this.squared = !1, this.variant = !1, this.badge = null, this.type = "button";
  }
  /* <div class="icon">${unsafeHTML(this.icon)}</div> */
  render() {
    const t = {
      [`btn_severity_${this.severity}`]: !0,
      [`btn_variant_${this.variant}`]: !0,
      raised: this.raised === !0,
      rounded: this.rounded === !0,
      squared: this.squared === !0
    };
    return e`
            <button 
            type=${this.type}
            class=${m(t)}
            ?disabled=${this.disabled}
            @click=${this._handleClick}
            >

                <span class="button_content_container">
                    <!-- Optional icon -->
                    <span class="button_icon_container">
                        <pi-icon-handler .icon=${this.icon}></pi-icon-handler>
                    </span>

                    <!-- Button text -->
                    ${this.variant != "iconOnly" ? e`
                        <slot></slot>
                    ` : null}
                    

                    <!-- Optional Badge -->
                    <pi-badge>${this.badge}</pi-badge>
                </span>
                
            </button>
        `;
  }
  _handleClick(t) {
    t.stopPropagation(), this.type !== "submit" ? this.dispatchEvent(new CustomEvent("click", {
      detail: t
    })) : this.dispatchEvent(new CustomEvent("pi-submit", {
      detail: t,
      composed: !0,
      bubbles: !0
    }));
  }
  static styles = [
    no,
    ro,
    co,
    lo,
    b(re),
    o`
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

        `
  ];
}
customElements.define("pi-button", po);
class d extends a {
  static get properties() {
    return {
      disabled: { type: Boolean },
      name: { type: String }
    };
  }
  constructor() {
    super(), this.disabled = !1, this.name = "";
  }
  render() {
    return e`${this.renderInput()}`;
  }
  // Abstract method to render the form element (implement in child classes)
  renderInput() {
    throw new Error("renderInput() must be implemented in child class");
  }
  // Method to dispatch the 'change' event
  _dispatchChangeEvent(t) {
    const n = new CustomEvent("change", {
      detail: {
        name: this.name,
        value: t,
        group: this.closest("pi-form-group")?.name || null
      },
      // Include name for easy identification
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(n);
  }
  // Example input change handler (override in child classes if needed)
  _handleInputChange(t) {
    this.value = t.target.value, this._dispatchChangeEvent(this.value);
  }
  // Get value (for form submit)
  getValue() {
    return this.value;
  }
  // Set value (for form reset and initial value)
  setValue(t) {
    this.value = t, this._dispatchChangeEvent(this.value);
  }
  static styles = [
    o`
            :host { 
                display: inline-block;
            }
        `
  ];
}
customElements.get("pi-base-form-element") || customElements.define("pi-base-form-element", d);
const l = o`

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
class ho extends d {
  static get properties() {
    return {
      placeholder: { type: String },
      value: { type: String },
      disabled: { type: Boolean },
      label: { type: String }
    };
  }
  constructor() {
    super(), this.placeholder = "", this.value = "", this.disabled = !1, this.label = "";
  }
  render() {
    return e`
            <pi-label 
            text=${this.label}
            ?hidden=${this.label == ""}
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
    l,
    o`
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
  ];
}
customElements.get("pi-text-input") || customElements.define("pi-text-input", ho);
class uo extends d {
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
      label: { type: String },
      preventDefaultSelection: { type: Boolean }
    };
  }
  constructor() {
    super(), this.defaultText = "Choose an option", this.options = [], this.selectedIndex = -1, this.labelKey = "", this.valueKey = "", this.selectedObject = {}, this.disabled = !1, this.value = "", this.label = "", this.preventDefaultSelection = !1;
  }
  // willUpdate hook: Detect property changes before re-render
  willUpdate(t) {
    t.has("selectedObject") && (this.selectedIndex = this.determineDefaultSelectedIndex(this.options, this.selectedObject));
  }
  renderInput() {
    return e`
            <pi-label 
            text=${this.label}
            ?hidden=${this.label == ""}
            ></pi-label>

            <select 
            @change=${this._handleInputChange} 
            .value="${this.selectedIndex}"
            ?disabled="${this.disabled}"
            >
                ${this.defaultText != "" ? e`
                    <option 
                    value=""
                    ?disabled="${this.preventDefaultSelection}"
                    ?selected="${this.value == ""}">${this.defaultText}</option>
                ` : e``}
                    
                ${this.options.length > 0 ? e`
                    ${this.options.map((t, n) => e`
                        <option 
                        value="${n}" 
                        ?selected="${this.selectedIndex === n}">${t[this.labelKey]}</option>
                    `)}
                ` : e``}
            </select>
        `;
  }
  determineDefaultSelectedIndex(t, n) {
    if (t.length > 0) {
      const s = this.labelKey, r = this.valueKey;
      let c = -1;
      return t.some((p, h) => {
        p[s] == n[s] && p[r] == n[r] && (c = h);
      }), c;
    }
    return -1;
  }
  _handleInputChange(t) {
    const n = t.target.value;
    this.valueKey != "" ? typeof this.options[n] < "u" ? this.value = this.options[n][this.valueKey] : this.value = "" : this.value = this.options[n], this._dispatchChangeEvent(this.value);
  }
  static styles = [
    l,
    o`
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
  ];
}
customElements.get("pi-select-input") || customElements.define("pi-select-input", uo);
class bo extends d {
  static get properties() {
    return {
      checked: { type: Boolean, reflect: !0 },
      label: { type: String },
      value: { type: Boolean }
    };
  }
  constructor() {
    super(), this.checked = !1, this.label = "", this.value = !1;
  }
  renderInput() {
    return e`
            <div 
            class="checkbox-container" 
            @click=${this._handleInputChange}
            >
                <div class="checkmark"></div>
            </div>

            <pi-label
            text=${this.label}
            ?hidden=${this.label == ""}
            @click=${this._handleInputChange}
            no-margin
            ></pi-label>
        `;
  }
  _handleInputChange() {
    this.disabled || (this.checked = !this.checked, this.value = this.checked, this._dispatchChangeEvent(this.value));
  }
  static styles = [
    l,
    o`
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
  ];
}
customElements.get("pi-checkbox-input") || customElements.define("pi-checkbox-input", bo);
class mo extends d {
  static get properties() {
    return {
      placeholder: { type: String },
      showLabel: { type: Boolean, attribute: !1 },
      value: { type: String },
      disabled: { type: Boolean, reflect: !0 },
      label: { type: String },
      checked: { type: Boolean, reflect: !0 },
      name: { type: String }
    };
  }
  constructor() {
    super(), this.placeholder = "", this.showLabel = !1, this.value = "", this.disabled = !1, this.label = "", this.checked = !1, this._group = [], this.name = "";
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  render() {
    return e`
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
  _handleInputChange(t) {
    this.value = t.target.value, this.checked = !this.checked;
    const n = new CustomEvent("radio-change", {
      detail: {
        name: this.name,
        value: this.value,
        group: null
      },
      // Include name for easy identification
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(n);
  }
  static styles = [
    l,
    o`
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
  ];
}
customElements.get("pi-radio-input") || customElements.define("pi-radio-input", mo);
class go extends d {
  static get properties() {
    return {
      label: { type: String },
      name: { type: String },
      value: { type: String },
      radios: { type: Array },
      disabled: { type: Boolean }
    };
  }
  constructor() {
    super(), this.label = "", this.name = "", this.value = "", this.radios = [], this.disabled = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("radio-change", (t) => this._handleRadioElementChange(t));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("radio-change", (t) => this._handleRadioElementChange(t));
  }
  render() {
    return e`
            <pi-label 
            text=${this.label}
            block
            no-padding
            ?hidden=${this.label == ""}
            ></pi-label>
            
            <slot @slotchange=${this._handleSlotChange}></slot>
        `;
  }
  _handleRadioElementChange(t) {
    this.disabled || (typeof t.detail?.value < "u" && (this.value = t.detail.value, this._dispatchChangeEvent(t.detail.value)), this.syncCheckedRadio());
  }
  syncCheckedRadio() {
    this.radios.forEach((t) => {
      t.value !== this.value && (t.checked = !1);
    });
  }
  _collectRadioData() {
    const t = this.querySelectorAll("[name]");
    let n = "";
    return t.forEach((s) => {
      const r = s.closest("pi-radio-input");
      r ? r.checked && (n = r.getValue()) : n = s.value;
    }), n;
  }
  _handleSlotChange() {
    this.radios = this.querySelectorAll("pi-radio-input"), this.disabled && this.radios.forEach((n) => {
      n.disabled = !0;
    });
    const t = this._collectRadioData();
    this.value = t;
  }
  static styles = [
    l,
    o`
            :host {
                display: block;
                position: relative;
                box-sizing: border-box;
            }
        `
  ];
}
customElements.get("pi-radio-input-group") || customElements.define("pi-radio-input-group", go);
class vo extends d {
  static get properties() {
    return {
      checked: { type: Boolean, reflect: !0 },
      value: { type: Boolean },
      label: { type: String }
    };
  }
  constructor() {
    super(), this.checked = !1, this.value = !1, this.label = "";
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", this._handleInputChange), this.checked && (this.value = this.checked);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("click", this._handleInputChange);
  }
  renderInput() {
    return e`
            <div 
            class="toggle_container" 
            >
                <div class="slider"></div>
            </div>

            <pi-label
            text=${this.label}
            ?hidden=${this.label == ""}
            no-margin
            ></pi-label>
        `;
  }
  _handleInputChange() {
    this.disabled || (this.checked = !this.checked, this.value = this.checked, this._dispatchChangeEvent(this.value));
  }
  static styles = [
    l,
    o`
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
  ];
}
customElements.get("pi-toggle-switch") || customElements.define("pi-toggle-switch", vo);
class fo extends d {
  static get properties() {
    return {
      label: { type: String },
      value: { type: String },
      placeholder: { type: String }
    };
  }
  constructor() {
    super(), this.label = "", this.value = "", this.placeholder = "";
  }
  render() {
    return e`
            <pi-label 
            text=${this.label}
            ?hidden=${this.label == ""}
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
    l,
    o`
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
  ];
}
customElements.get("pi-text-area-input") || customElements.define("pi-text-area-input", fo);
class yo extends a {
  static get properties() {
    return {
      headerHasContent: { type: Boolean },
      titleHasContent: { type: Boolean },
      subTitleHasContent: { type: Boolean },
      footerHasContent: { type: Boolean }
    };
  }
  constructor() {
    super(), this.headerHasContent = !1, this.titleHasContent = !1, this.subTitleHasContent = !1, this.footerHasContent = !1;
  }
  firstUpdated() {
    this.determineSlotContents();
  }
  render() {
    return e`

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
    this.headerHasContent = this.shadowRoot?.querySelector('slot[name="header"]')?.assignedNodes()?.length > 0, this.titleHasContent = this.shadowRoot?.querySelector('slot[name="title"]')?.assignedNodes()?.length > 0, this.subTitleHasContent = this.shadowRoot?.querySelector('slot[name="subTitle"]')?.assignedNodes()?.length > 0, this.footerHasContent = this.shadowRoot?.querySelector('slot[name="footer"]')?.assignedNodes()?.length > 0;
  }
  static styles = [
    l,
    o`
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

            :host([autoWidth]) {
                display: inline-block;
                width: auto;
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

                slot {
                    /* border-bottom: solid 1px #ddd; */
                }
            }

            .sub_title {
                padding: var(--pi-card-sub-title-padding, 0.25rem 1rem 0rem 1rem);
                color: var(--pi-card-sub-title-color, #777);
                font-size: var(--pi-card-sub-title-font-size, 1rem);
            }

            .content {
                padding: 0.5rem var(--pi-card-content-padding, 1rem);
            }

            .footer {
                width: 100%;
                display: block;
                box-sizing: border-box;
                overflow: hidden;
                /* padding: var(--pi-card-footer-padding, 0.5rem 1rem 1rem 1rem); */
            }
        `
  ];
}
customElements.get("pi-card") || customElements.define("pi-card", yo);
class xo extends a {
  static get properties() {
    return {
      formData: { type: Object },
      showReset: { type: Boolean },
      showSubmit: { type: Boolean }
    };
  }
  constructor() {
    super(), this.formData = {}, this.showReset = !1, this.showSubmit = !0;
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("change", (t) => this._handleFormElementChange(t)), this.addEventListener("pi-submit", (t) => this._handleSubmit(t));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("change", (t) => this._handleFormElementChange(t)), this.removeEventListener("pi-submit", (t) => this._handleSubmit(t));
  }
  render() {
    return e`
            <form @submit=${this._handleSubmit} @reset=${this._handleReset}>
                <slot @slotchange=${this._handleSlotChange}></slot>

                <div class="button_row">
                    
                    ${this.showSubmit ? e`
                        <slot name="submitButton">
                            <button type="submit">Submit</button>
                        </slot>
                    ` : null}
                        
                    ${this.showReset ? e`
                        <slot name="resetButton">
                            <button type="reset">Reset</button>
                        </slot>
                    ` : null}
                    
                </div>
                
            </form>
        `;
  }
  _handleFormElementChange(t) {
    t.detail?.group ? (typeof this.formData[t.detail.group] > "u" && (this.formData[t.detail.group] = {}), this.formData[t.detail.group][t.detail.name] = t.detail.value) : this.formData = { ...this.formData, [t.detail.name]: t.detail.value };
    const n = new CustomEvent("formDataUpdated", {
      detail: this.formData,
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(n);
  }
  _handleSubmit(t) {
    t.preventDefault();
    const n = this._collectFormData(), s = new CustomEvent("formSubmitted", {
      detail: n,
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(s);
  }
  _collectFormData() {
    const t = this.querySelectorAll("[name]"), n = {};
    return t.forEach((s) => {
      const r = s.closest("pi-form-group")?.name;
      if (r) {
        n[r] || (n[r] = {});
        const c = s.closest("pi-base-form-element") || s.closest("pi-text-input") || s.closest("pi-select-input") || s.closest("pi-checkbox-input") || s.closest("pi-toggle-switch") || s.closest("pi-radio-input-group") || s.closest("pi-text-area-input");
        c ? c.tagName == "PI-RADIO-INPUT-GROUP" || (n[r][c.name] = c.getValue()) : s.tagName != "PI-FORM-GROUP" && (n[r][s.name] = s.value);
      } else {
        const c = s.closest("pi-base-form-element") || s.closest("pi-text-input") || s.closest("pi-select-input") || s.closest("pi-checkbox-input") || s.closest("pi-toggle-switch") || s.closest("pi-radio-input-group") || s.closest("pi-text-area-input");
        c ? c.tagName == "PI-RADIO-INPUT" || (n[c.name] = c.getValue()) : n[s.name] = s.value;
      }
    }), n;
  }
  _handleReset(t) {
    t.preventDefault(), this.querySelectorAll("[name]").forEach((s) => {
      const r = s.closest("pi-base-form-element") || s.closest("pi-text-input") || s.closest("pi-select-input") || s.closest("pi-checkbox-input") || s.closest("pi-toggle-switch") || s.closest("pi-radio-input-group") || s.closest("pi-text-area-input");
      r ? r.setValue("") : (s.tagName === "PI-TEXT-INPUT" || s.tagName === "PI-SELECT-INPUT" || s.tagName === "PI-TEXT-AREA-INPUT" || s.tagName === "PI-TOGGLE-INPUT" || s.tagName === "PI-RADIO-INPUT" || s.tagName === "PI-CHECKBOX-INPUT") && (s.value = "");
    }), this.formData = {};
  }
  _handleSlotChange() {
    const t = this._collectFormData();
    this.formData = t;
  }
  static styles = [
    o`
            .button_row {
                margin: var(--pi-form-button-row-margin, 1rem 0);
            }
        `
  ];
}
customElements.get("pi-form") || customElements.define("pi-form", xo);
class Do extends a {
  static get properties() {
    return {
      name: { type: String }
    };
  }
  constructor() {
    super(), this.name = "";
  }
  render() {
    return e`
            <slot></slot>
        `;
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get("pi-form-group") || customElements.define("pi-form-group", Do);
class Lo extends a {
  static get properties() {
    return {
      cols: { type: Number }
    };
  }
  constructor() {
    super(), this.cols = 0;
  }
  render() {
    return this.cols > 0 && (this.style.gridColumn = `span ${this.cols}`), e`
            <slot></slot>
        `;
  }
  static styles = [
    o`
            :host {
                display: block;
                grid-column: auto;
                width: 100%;
                min-width: 0;
                box-sizing: border-box;
            }
        `
  ];
}
customElements.get("pi-col") || customElements.define("pi-col", Lo);
class ko extends a {
  static get properties() {
    return {
      gutter: { type: String, reflect: !0 }
    };
  }
  constructor() {
    super(), this.gutter = "md";
  }
  render() {
    return e`
            <slot></slot>
        `;
  }
  static styles = [
    o`
            :host {
                display: flex;
                flex-direction: column; /* Ensures rows stack properly */
                gap: var(--pi-grid-row-gap, 1rem); /* Adjust spacing between rows */
                width: 100%;
                box-sizing: border-box;
            }

            :host([gutter="sm"]) { gap: var(--pi-grid-gap-gutter-sm, 0.5rem) }
            :host([gutter="md"]) { gap: var(--pi-grid-gap-gutter-md, 1rem) }
            :host([gutter="lg"]) { gap: var(--pi-grid-gap-gutter-lg, 2rem) }

            ::slotted(pi-row) { gap: var(--pi-grid-column-gap, 1rem); /* Space between columns */ }
            :host([gutter="sm"]) ::slotted(pi-row) { gap: var(--pi-grid-gap-gutter-sm, 0.5rem); }
            :host([gutter="md"]) ::slotted(pi-row) { gap: var(--pi-grid-gap-gutter-md, 1rem); }
            :host([gutter="lg"]) ::slotted(pi-row) { gap: var(--pi-grid-gap-gutter-lg, 2rem); }

            @media (max-width: 768px) {
                :host {
                    gap: var(--pi-grid-row-gap-mw-768, 0.5rem);
                }
            }
        `
  ];
}
customElements.get("pi-grid") || customElements.define("pi-grid", ko);
class zo extends a {
  static get properties() {
    return {};
  }
  constructor() {
    super();
  }
  render() {
    return e`
            <slot></slot>
        `;
  }
  static styles = [
    o`
            :host {
                display: grid;
                grid-template-columns: var(--pi-grid-template-columns, repeat(12, 1fr)); /* 12-column layout */
                /* gap: 16px; Space between columns */
                width: 100%;
                box-sizing: border-box;
            }

            @media (max-width: 768px) {
                :host {
                    grid-template-columns: var(--pi-grid-template-columns-mw-768, repeat(6, 1fr)); /* Switch to 6 columns */
                }
            }

            @media (max-width: 480px) {
                :host {
                    grid-template-columns: var(--pi-grid-template-columns-mw-480, repeat(2, 1fr)); /* Switch to 6 columns */
                }
            }
        `
  ];
}
customElements.get("pi-row") || customElements.define("pi-row", zo);
class _o extends a {
  static get properties() {
    return {
      disabled: { type: Boolean },
      value: { type: String }
    };
  }
  constructor() {
    super(), this.disabled = !1, this.value = "";
  }
  render() {
    return e`
            <slot>${this.value}</slot>
        `;
  }
  static styles = [
    o`
            :host {
                display: block;
                padding: var(--pi-paginator-nav-item-padding, 5px 10px);
                cursor: pointer;
                color: var(--pi-paginator-nav-item-text-color, #777);
                user-select: none;

                &:hover {
                    color: var(--pi-paginator-nav-item-text-color-hover, #000);
                }
            }

            :host([disabled]) {
                pointer-events: none;
                opacity: 0.6;
            }

            :host([active]) {
                color: var(--pi-paginator-nav-item-text-color-active, #000);
                font-weight: var(--pi-paginator-nav-item-font-weight-active, bold);
            }
        `
  ];
}
customElements.get("pi-paginator-nav-item") || customElements.define("pi-paginator-nav-item", _o);
class wo extends a {
  static get properties() {
    return {
      rows: { type: Number },
      totalRecords: { type: Number },
      totalPages: { type: Number },
      rowsPerPageOptions: { type: Array },
      currentPage: { type: Number, attribute: !1 },
      pagerNavNumberStart: { type: Number, attribute: !1 },
      pagerNavNumberStop: { type: Number, attribute: !1 },
      pagerNavNumberCount: { type: Number, attribute: !1 },
      useStartEndLinks: { type: Boolean },
      useNextPrevLinks: { type: Boolean },
      useNumericLinks: { type: Boolean },
      template: { type: Object, attribute: !1 }
    };
  }
  /*
  TODO: Refactor template generation
      - Seems like re-generating the entire template on nav click isn't efficient
      - Seems like having one large set of templates in generateTemplate isn't ideal
  TODO: Add nav item type to paginatorNavItem?
      - We might want to support custom styling of numbers vs. other nav items
      - This isn't supported in the current component
  TODO: Add specific button that was clicked to the emit
      - It currently shows pageNumber and index clicked
      - Should also show "button: 1" or "button: FirstItem" or "button: NextPage", etc.
  */
  constructor() {
    super(), this.rows = 0, this.totalRecords = 0, this.totalPages = 0, this.rowsPerPageOptions = [], this.currentPage = 0, this.pagerNavNumberStart = 0, this.pagerNavNumberStop = 3, this.pagerNavNumberCount = 3, this.useStartEndLinks = !0, this.useNextPrevLinks = !0, this.useNumericLinks = !0, this.template = {};
  }
  connectedCallback() {
    super.connectedCallback(), this.updatePagerNav(), this.generateTemplate();
  }
  updatePagerNav() {
    const t = this.currentPage > 0 ? this.currentPage - 1 : 0, n = t + this.pagerNavNumberCount, s = Math.ceil(this.totalRecords / this.rows);
    this.pagerNavNumberStart = t, this.pagerNavNumberStop = n, this.totalPages = s;
  }
  handlePageNavNumberClick(t) {
    t < 0 && (t = 0), t > this.pageCount && (t = this.pageCount), this.currentPage = t, this.updatePagerNav(), this.generateTemplate();
    const n = new CustomEvent("navClick", {
      detail: {
        navIndex: t,
        pageNumber: t + 1
      },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(n);
  }
  generateTemplate() {
    const t = [];
    if (this.useStartEndLinks && t.push(e`
                <pi-paginator-nav-item 
                @click="${() => this.handlePageNavNumberClick(0)}"
                ?disabled=${this.currentPage == 0}
                value="&lt;&lt;"
                ></pi-paginator-nav-item>
            `), this.useNextPrevLinks && t.push(e`
                <pi-paginator-nav-item 
                @click="${() => this.handlePageNavNumberClick(this.currentPage - 1)}"
                ?disabled=${this.currentPage - 1 < 0}
                value="&lt;"
                ></pi-paginator-nav-item>
            `), this.useNumericLinks)
      for (let n = this.pagerNavNumberStart, s = this.pagerNavNumberStop; n < s; n++)
        n < this.totalPages && t.push(e`
                        <pi-paginator-nav-item 
                        @click="${() => this.handlePageNavNumberClick(n)}"
                        ?active=${n === this.currentPage}
                        .value=${n + 1}
                        ></pi-paginator-nav-item>
                    `);
    this.useNextPrevLinks && t.push(e`
                <pi-paginator-nav-item 
                @click="${() => this.handlePageNavNumberClick(this.currentPage + 1)}"
                ?disabled=${this.currentPage + 1 >= this.totalPages}
                value="&gt;"
                ></pi-paginator-nav-item>
            `), this.useStartEndLinks && t.push(e`
                <pi-paginator-nav-item 
                @click="${() => this.handlePageNavNumberClick(this.totalPages - 1)}"
                ?disabled=${this.currentPage + 1 >= this.totalPages}
                value="&gt;&gt;"
                ></pi-paginator-nav-item>
            `), this.template = t;
  }
  render() {
    return e`
            ${this.template}
        `;
  }
  static styles = [
    l,
    o`
            :host {
                display: flex;
                width: 100%;
                justify-content: center;
                margin: var(--pi-paginator-margin, 1rem 0 0 0);
                gap: var(--pi-paginator-gap, 10px);
            }
        `
  ];
}
customElements.get("pi-paginator") || customElements.define("pi-paginator", wo);
function Eo(i, t) {
  const n = [];
  for (let s = 0; s < i.length; s += Number(t))
    n.push(i.slice(s, s + Number(t)));
  return n;
}
class $o extends a {
  static get properties() {
    return {
      rows: { type: Array },
      rowsPerPage: { type: [Number, String] },
      activeRows: { type: Array, attribute: !1 },
      pages: { type: Array, attribute: !1 },
      activePageIndex: { type: Number, attribute: !1 }
    };
  }
  constructor() {
    super(), this.rows = [], this.rowsPerPage = -1, this.activeRows = [], this.pages = [], this.activePageIndex = 0;
  }
  willUpdate(t) {
    t.has("rows") && this.initPagination();
  }
  render() {
    return e`
            <pi-paginator
            .rows=${this.rowsPerPage}
            .totalRecords=${this.rows.length}
            @navClick=${(t) => this.handlePagerNavClick(t.detail)}
            ></pi-paginator>
        `;
  }
  initPagination() {
    if (this.rowsPerPage > 0) {
      const t = Eo(this.rows, this.rowsPerPage);
      this.pages = t, this.handlePaginationChange();
    }
  }
  handlePaginationChange() {
    this.emitPageRows(this.pages[this.activePageIndex]);
  }
  emitPageRows(t) {
    const n = new CustomEvent("updatedPageRows", {
      detail: {
        rows: t
      },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(n);
  }
  handlePagerNavClick(t) {
    Number(t.navIndex * this.rowsPerPage) + Number(this.rowsPerPage), this.activePageIndex = t.navIndex, this.handlePaginationChange();
  }
  static styles = [
    o`
            :host {
                display: block;
                width: 100%;
            }
        `
  ];
}
customElements.get("pi-table-paginator") || customElements.define("pi-table-paginator", $o);
class So extends a {
  static get properties() {
    return {
      item: { type: Object },
      columns: { type: Array },
      rowIndex: { type: Number }
    };
  }
  constructor() {
    super(), this.item = {}, this.columns = [], this.rowIndex = -1;
  }
  render() {
    return e`
            ${u(this.columns, (t) => t.key, (t) => e`
                <td role="cell">
                    ${// If a render function is provided for the column, use it.
    // Otherwise, display the data directly from the item.
    t.render ? t.render(this.item, this.rowIndex) : this.item[t.key]}
                </td>
            `)}
        `;
  }
  static styles = [
    o`
            :host {
                display: table-row;
            }

            td {
                padding: var(--pi-table-cell-padding, 0.75em);
                border-top: var(--pi-table-cell-border-top, 1px solid #ddd);
                border-right: var(--pi-table-cell-border-right, 1px solid #ddd);
                border-bottom: var(--pi-table-cell-border-bottom, 1px solid #ddd);
                border-left: var(--pi-table-cell-border-left, 1px solid #ddd);
                background-color: var(--pi-table-cell-bg-color, #f4f4f4);
                color: var(--pi-table-cell-text-color);
                text-align: var(--pi-table-cell-text-align, left);
                font-weight: var(--pi-table-cell-font-weight, bold);
                transition: var(--pi-table-cell-transition, background-color 0.5s ease, border 0.5s ease, color 0.5s ease);
            }
        `
  ];
}
customElements.get("pi-table-row") || customElements.define("pi-table-row", So);
class Po extends a {
  static get properties() {
    return {
      sortDirection: { type: String }
    };
  }
  constructor() {
    super(), this.sortDirection = "";
  }
  render() {
    return e`
            ${this.sortDirection === "asc" ? "▲" : this.sortDirection === "desc" ? "▼" : "↕"}
        `;
  }
  static styles = [
    o`
            :host {
                margin: var(--pi-table-sort-icon-margin, 0 0 0 0.5em);
                font-size: var(--pi-table-sort-icon-font-size, 0.8em);
                color: var(--pi-table-sort-icon-color, #666);
            }

            :host([data-active="true"]) {
                color: var(--pi-table-sort-icon-active-color, #000);
            }
        `
  ];
}
customElements.get("pi-table-sort-icon") || customElements.define("pi-table-sort-icon", Po);
class Co extends a {
  static get properties() {
    return {
      sortable: { type: Boolean },
      sortDirection: { type: String },
      key: { type: String },
      label: { type: String }
    };
  }
  constructor() {
    super(), this.sortable = !1, this.sortDirection = "", this.key = "", this.label = "";
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("updateSorter", (t) => this.handleUpdateSorter(t.detail));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("updateSorter", (t) => this.handleUpdateSorter(t.detail));
  }
  render() {
    const t = {
      isSortable: this.sortable
    };
    return e`
            <div 
            class="table_th ${m(t)}"
            @click=${this.handleSortClick}
            >
                ${this.label}
                ${this.sortable ? e`
                    <pi-table-sort-icon
                    .sortDirection=${this.sortDirection}
                    ></pi-table-sort-icon>
                ` : null}
            </div>
            
        `;
  }
  handleUpdateSorter(t) {
    t.sortKey != this.key ? this.sortDirection = "" : this.sortDirection = t.sortDirection;
  }
  handleSortClick(t) {
    if (this.sortable == !0) {
      const n = this.sortDirection, s = n == "asc" ? "desc" : "asc", r = new CustomEvent("sortRequested", {
        detail: {
          key: this.key,
          label: this.label,
          currentSortDirection: n,
          newSortDirection: s
        },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(r), this.sortDirection = s;
    }
  }
  static styles = [
    o`
            :host {
                display: table-cell;
                padding: var(--pi-table-th-padding, 0.75em);
                border-top: var(--pi-table-th-border-top, 1px solid #ddd);
                border-right: var(--pi-table-th-border-right, 1px solid #ddd);
                border-bottom: var(--pi-table-th-border-bottom, 1px solid #ddd);
                border-left: var(--pi-table-th-border-left, 1px solid #ddd);
                background-color: var(--pi-table-th-bg-color, #f4f4f4);
                color: var(--pi-table-th-text-color, #555);
                text-align: var(--pi-table-th-text-align, left);
                position: relative;
                font-weight: var(--pi-table-th-font-weight, bold);
                transition: var(--pi-table-th-transition, background-color 0.5s ease, border 0.5s ease, color 0.5s ease);

                &[data-active="true"] {
                    background-color: var(--pi-table-th-bg-color-active, color-mix(in srgb, var(--pi-table-th-bg-color, #f4f4f4), black 20%));
                }
            }

            .table_th {
                &.isSortable {
                    cursor: pointer;
                }
            }

            @media (max-width: 768px) {
                :host {
                    font-size: var(--pi-table-th-font-size-sm, 0.9em);
                }
            }
        `
  ];
}
customElements.get("pi-table-column") || customElements.define("pi-table-column", Co);
function Ro(i, t, n) {
  return [...i].sort((r, c) => {
    const p = r[t], h = c[t], g = typeof p == "string" && typeof h == "string" ? p.localeCompare(h, void 0, { numeric: !0 }) : Number(p) - Number(h);
    return n === "asc" ? g : -g;
  });
}
class Io extends a {
  static get properties() {
    return {
      rows: { type: Array },
      sortedRows: { type: Array },
      activeRows: { type: Array },
      columns: { type: Array },
      striped: { type: Boolean },
      compact: { type: Boolean },
      gridlines: { type: Boolean },
      defaultSortKey: { type: String },
      defaultSortDirection: { type: String },
      paginate: { type: Boolean },
      rowsPerPage: { type: Number | String }
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.initTable(), this.addEventListener("sortRequested", (t) => this.handleSortRequest(t.detail.key, t.detail.newSortDirection));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("sortRequested", (t) => this.handleSortRequest(t.detail.key, t.detail.newSortDirection));
  }
  firstUpdated() {
    this.handleDefaultSort();
  }
  constructor() {
    super(), this.rows = [], this.sortedRows = [], this.activeRows = [], this.columns = void 0, this.striped = !1, this.compact = !1, this.gridlines = !1, this.defaultSortKey = null, this.defaultSortDirection = null, this.paginate = !1, this.rowsPerPage = 5;
  }
  initTable() {
    this.activeRows = [...this.rows], this.sortedRows = [...this.rows];
  }
  resolveColumns() {
    return this.columns && this.columns.length > 0 ? this.columns : this.rows && this.rows.length > 0 ? Object.keys(this.rows[0]).map((t) => ({
      key: t,
      header: t.charAt(0).toUpperCase() + t.slice(1).replace(/([A-Z])/g, " $1")
      // Basic capitalization
    })) : [];
  }
  handleSortRequest(t, n) {
    this.sortedRows = Ro(this.rows, t, n), this.updateColumnSorters(t, n), this.paginate || (this.activeRows = [...this.sortedRows]);
  }
  handleDefaultSort() {
    this.defaultSortKey != null && this.defaultSortDirection != null && this.handleSortRequest(this.defaultSortKey, this.defaultSortDirection);
  }
  updateColumnSorters(t, n) {
    this.shadowRoot.querySelectorAll("pi-table-column").forEach((r) => {
      r.dispatchEvent(new CustomEvent("updateSorter", {
        detail: { sortKey: t, sortDirection: n },
        bubbles: !0,
        composed: !0
      }));
    });
  }
  handleUpdatedPageRows(t) {
    this.activeRows = [...t];
  }
  render() {
    const t = this.resolveColumns(), n = {
      striped: this.striped,
      gridlines: this.gridlines
    };
    return !this.rows || this.rows.length === 0 ? e`<div class="empty-table-message">No data to display.</div>` : e`
            <table role="table" aria-label="Customizable Data Table">
                <thead role="rowgroup">
                    <tr role="row">
                        ${u(t, (s) => s.key, (s) => e`
                            <pi-table-column
                            ?sortable=${s.sortable && s.sortKey}
                            .label=${s.header}
                            .key=${s.key}
                            .sortKey=${s.sortKey}
                            >${s.header}</pi-table-column>
                        `)}
                    </tr>
                </thead>
                <tbody role="rowgroup">
                    ${u(this.activeRows, (s, r) => s.id || r, (s, r) => e`
                        <pi-table-row
                        class=${m(n)}
                        .item=${s}
                        .columns=${t}
                        .rowIndex=${r}
                        ></pi-table-row>
                    `)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan=10000>
                            <slot name="tfoot"></slot>
                        </td>
                    </tr>
                </tfoot>
            </table>

            ${this.paginate ? e`
                <pi-table-paginator
                .rows=${this.sortedRows}
                .rowsPerPage=${this.rowsPerPage}
                @updatedPageRows=${(s) => this.handleUpdatedPageRows(s.detail.rows)}
                ></pi-table-paginator>
            ` : null}
        `;
  }
  static styles = [
    l,
    o`
            :host {
                display: block;
                /* font-family: 'Inter', sans-serif;
                --table-border-color: #e0e0e0;
                --table-header-bg: #f5f5f5;
                --table-row-hover-bg: #f9f9f9;
                --table-stripe-bg: #f2f2f2;
                --table-text-color: #333;
                --table-header-text-color: #555;
                --table-cell-padding: 12px;
                --table-compact-cell-padding: 8px; */
            }

            table {
                overflow-x: var(--pi-table-overflow-x, auto);
                overflow-y: var(--pi-table-overflow-y, visible);
                width: var(--pi-table-width, 100%);
                border-collapse: var(--pi-table-border-collapse, collapse);
                text-align: var(--pi-table-text-align, left);
                white-space: var(--pi-table-white-space, nowrap);
            }

            tfoot {
                white-space: wrap;
            }

            .striped:nth-child(even) {
                background-color: var(--pi-table-row-bg-color-striped-even, #f8f8f8);
            }

            .striped:nth-child(odd) {
                background-color: var(--pi-table-row-bg-color-striped-odd, #fff);
            }

            .gridlines {
                --pi-table-cell-border-right: var(--pi-table-cell-border-top, 1px solid #ddd);
                --pi-table-cell-border-left: var(--pi-table-cell-border-top, 1px solid #ddd);
            }

            th, td {
                border: 1px solid var(--table-border-color);
                padding: var(--table-cell-padding);
                text-align: left;
            }

            /* Compact styling */
            :host([compact]) th,
            :host([compact]) td {
                padding: var(--table-compact-cell-padding);
            }

            thead {
                background-color: var(--table-header-bg);
            }

            th {
                font-weight: 600;
                color: var(--table-header-text-color);
                text-transform: uppercase;
                font-size: 0.85em;
            }

            tbody tr:hover {
                background-color: var(--table-row-hover-bg);
                transition: background-color 0.2s ease-in-out;
            }

            /* Striped rows styling */
            :host([striped]) tbody tr:nth-child(even) {
                background-color: var(--table-stripe-bg);
            }

            /* For empty state */
            .empty-table-message {
                text-align: center;
                padding: 40px;
                color: #666;
                font-style: italic;
            }
        `
  ];
}
customElements.get("pi-table") || customElements.define("pi-table", Io);
class No extends a {
  static properties = {};
  constructor() {
    super();
  }
  render() {
    return e`<slot></slot>`;
  }
  static styles = o`
        :host {
            display: inline-block;
            padding: var(--pi-tabs-tab-padding, 0.5em 1em);
            cursor: var(--pi-tabs-tab-cursor, pointer);
            color: var(--pi-tabs-tab-text-color, #000);
            font-weight: var(--pi-tabs-tab-font-weight, normal);
            border-bottom: var(--pi-tabs-tab-border-bottom 2px solid transparent);
            background-color: var(--pi-tabs-tab-bg-color, #FFF);
            transition: background-color 0.5s ease, border 0.5s ease, color 0.5s ease;
            user-select: none;
        }

        :host([selected]) {
            font-weight: var(--pi-tabs-tab-font-weight-selected, normal);
            color: var(--pi-tabs-tab-text-color-selected, #000);
            background-color: var(--pi-tabs-tab-bg-color-selected, #DDD);
            border-bottom: var(--pi-tabs-tab-border-bottom-selected, #000);
        }
    `;
}
customElements.get("pi-tab") || customElements.define("pi-tab", No);
class Mo extends a {
  static get properties() {
    return {
      selectedTab: { type: String },
      tabList: { type: Array }
    };
  }
  constructor() {
    super(), this.selectedTab = "", this.tabList = [];
  }
  render() {
    return e`
            <slot @slotchange=${this.updateTabList}></slot>
        `;
  }
  handleTabClick(t) {
    this.selectedTab = t.getAttribute("value"), this.updateSelectedTab();
  }
  updateSelectedTab() {
    this.tabList.forEach((n) => {
      n.getAttribute("value") === this.selectedTab ? n.setAttribute("selected", !0) : n.removeAttribute("selected");
    });
    const t = new CustomEvent("tabSelected", {
      detail: this.selectedTab,
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t);
  }
  updateTabList() {
    this.shadowRoot.querySelector("slot").assignedElements().forEach((s) => {
      s.tagName == "PI-TAB" && (this.tabList.push(s), this.assignTabListener(s));
    }), this.initSelectedTab();
  }
  initSelectedTab() {
    !this.selectedTab && this.tabList.length > 0 && (this.selectedTab = this.tabList[0].getAttribute("value"), this.updateSelectedTab());
  }
  assignTabListener(t) {
    t.addEventListener("click", () => this.handleTabClick(t));
  }
  static styles = [
    o`
            :host {
                display: flex;
                border-top: var(--pi-tabs-tab-header-border-top, none);
                border-right: var(--pi-tabs-tab-header-border-right, none);
                border-bottom: var(--pi-tabs-tab-header-border-bottom, 1px solid #ddd);
                border-left: var(--pi-tabs-tab-header-border-left, none);
            }
        `
  ];
}
customElements.get("pi-tab-list") || customElements.define("pi-tab-list", Mo);
class To extends a {
  static properties = {};
  constructor() {
    super();
  }
  render() {
    return e`<slot></slot>`;
  }
  static styles = o`
        :host {
            display: none;
            color: var(--pi-tabs-panel-text-color, inherit);
            background-color: var(--pi-tabs-panel-bg-color, inherit);
            padding: var(--pi-tabs-panel-padding, 1rem);
            border-style: var(--pi-tabs-panel-border-style, solid);
            border-width: var(--pi-tabs-panel-border-width, 1px);
            border-color: var(--pi-tabs-panel-border-color, #ddd);
        }
        
        :host([active]) {
            display: block;
        }
    `;
}
customElements.get("pi-tab-panel") || customElements.define("pi-tab-panel", To);
class Fo extends a {
  static get properties() {
    return {
      selectedTab: { type: String },
      panelList: { type: Array }
    };
  }
  constructor() {
    super(), this.selectedTab = "", this.panelList = [];
  }
  render() {
    return e`
            <slot @slotchange=${this.updatePanelList}></slot>
        `;
  }
  updateSelectedTab(t) {
    this.selectedTab = t, this.setActivePanel(this.selectedTab);
  }
  setActivePanel(t) {
    this.panelList.forEach((n) => {
      n.getAttribute("value") === t ? n.setAttribute("active", !0) : n.removeAttribute("active");
    });
  }
  updatePanelList() {
    this.shadowRoot.querySelector("slot").assignedElements().forEach((s) => {
      s.tagName == "PI-TAB-PANEL" && this.panelList.push(s);
    }), this.setActivePanel(this.selectedTab);
  }
  static styles = [
    o`
            
        `
  ];
}
customElements.get("pi-tab-panels") || customElements.define("pi-tab-panels", Fo);
class Ao extends a {
  static get properties() {
    return {
      selectedTab: { type: String },
      tabListEl: { type: Object },
      panelListEl: { type: Object }
    };
  }
  constructor() {
    super(), this.selectedTab = "", this.tabListEl = {}, this.panelListEl = {};
  }
  render() {
    return e`
            <slot @slotchange=${this.handleSlotChange}></slot>
        `;
  }
  handleTabListSelection(t) {
    this.selectedTab = t.detail, this.panelListEl.updateSelectedTab(this.selectedTab);
  }
  handleSlotChange() {
    this.shadowRoot.querySelector("slot").assignedElements({ flatten: !0 }).forEach((s) => {
      s.tagName == "PI-TAB-LIST" && (s.addEventListener("tabSelected", (r) => this.handleTabListSelection(r)), this.tabListEl = s), s.tagName == "PI-TAB-PANELS" && (this.panelListEl = s);
    });
  }
  static styles = [
    l,
    o`
            :host {
                display: block;
            }
        `
  ];
}
customElements.get("pi-tabs") || customElements.define("pi-tabs", Ao);
class Bo extends a {
  static get properties() {
    return {
      label: { type: String },
      removable: { type: Boolean },
      isVisible: { type: Boolean }
    };
  }
  constructor() {
    super(), this.label = "", this.removable = !1, this.isVisible = !0;
  }
  render() {
    return e`
            <!-- <div class="icon"></div> -->
            <!-- <div class="image"></div> -->
            <div class="label">${this.label}</div>

            ${this.removable ? e`
                <div class="remove_icon" @click=${this.closeChip}>X</div>
            ` : null}
        `;
  }
  closeChip() {
    this.isVisible = !1, this.toggleAttribute("hidden", !this.isVisible);
  }
  static styles = [
    l,
    b(re),
    o`
            :host {
                display: inline-flex;
                background: #eee;
                border-radius: 16px;
                padding: 0.5rem 0.75rem;
                align-items: center;
                gap: 0.5rem;
            }

            :host([hidden]) {
                display: none;
            }

            .label {
                color: #444;
                font-size: 14px;
            }

            .remove_icon {
                border: solid 1px #444;
                border-radius: 50%;
                font-size: 8px;
                padding: 0.15rem 0.25rem;
                cursor: pointer;
                user-select: none;
            }
        `
  ];
}
customElements.get("pi-chip") || customElements.define("pi-chip", Bo);
class Oo extends a {
  static get properties() {
    return {
      sticky: { type: Boolean },
      showNavIcon: { type: Boolean },
      title: { type: String }
    };
  }
  constructor() {
    super(), this.sticky = !1, this.showNavIcon = !1, this.title = "";
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  render() {
    return e`
            <div class="prepend_container">
                <slot name="prepend">
                    ${this.showNavIcon ? e`
                        <div 
                        class="nav_icon"
                        @click=${this.handleNavIconClick}
                        >
                            <pi-icon-handler icon="menu-hamburger-rounded"></pi-icon-handler>
                        </div>
                    ` : null}
                </slot>
            </div>

            <div class="header_content">
                <div class="header_title">
                    ${this.title}
                </div>
            </div>

            <div class="append_container">
                <slot name="append"></slot>
            </div>
        `;
  }
  handleNavIconClick() {
    const t = new CustomEvent("navIconClick", {
      detail: !1,
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t);
  }
  static styles = [
    l,
    o`
            :host {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                /* border: solid 1px blue; */
                padding: var(--pi-header-bar-padding, 0.8rem);
                box-shadow: var(--pi-header-bar-box-shadow, 0px 1px 2px #666);
                gap: 1.2rem;
                background-color: var(--pi-header-bar-background-color, #fff);
                width: 100%;
                z-index: 9999;
            }

            :host([sticky]) {
                position: fixed;
                top: 0;
                left: 0;
            }

            .nav_icon {
                width: 25px;
                height: 25px;
                cursor: pointer;
                border-radius: 50%;
                padding: 5px;
                transition: all 0.25s ease-in-out;
                fill: var(--pi-header-bar-nav-icon-color, #333);

                &:hover {
                    background: var(--pi-header-bar-nav-icon-hover-bg-color, rgba(0,0,0,0.1));
                    fill: var(--pi-header-bar-nav-icon-hover-color, #333);
                }
            }

            .header_content {
                font-size: var(--pi-header-bar-content-font-size, 1.4rem);
                flex-grow: 1;
                color: var(--pi-header-bar-content-text-color, #333);
            }

            .append_container {
                /* margin-left: auto; */
            }
        `
  ];
}
customElements.get("pi-header-bar") || customElements.define("pi-header-bar", Oo);
class Jo extends a {
  static get properties() {
    return {
      showDrawer: { type: Boolean, reflect: !0 }
    };
  }
  constructor() {
    super(), this.showDrawer = !1;
  }
  render() {
    return e`
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
        `;
  }
  closeDrawer() {
    this.showDrawer = !1;
    const t = new CustomEvent("drawerClosed", {
      detail: this.showDrawer,
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t);
  }
  openDrawer() {
    this.showDrawer = !0;
    const t = new CustomEvent("drawerOpened", {
      detail: this.showDrawer,
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t);
  }
  toggleDrawer() {
    this.showDrawer ? this.closeDrawer() : this.openDrawer();
  }
  static styles = [
    l,
    o`
            :host {
                box-sizing: border-box;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 10000;
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
        `
  ];
}
customElements.get("pi-nav-drawer") || customElements.define("pi-nav-drawer", Jo);
class qo extends a {
  static get properties() {
    return {
      title: { type: String },
      message: { type: String },
      severity: { type: String },
      position: { type: String },
      offset: { type: Number },
      icon: { type: String },
      iconColor: { type: String },
      closeIcon: { type: String },
      autoCloseDuration: { type: Number },
      visible: { type: Boolean, reflect: !0 }
      // For animation control
    };
  }
  constructor() {
    super(), this.title = "", this.message = "", this.severity = "", this.position = "top-right", this.offset = 0, this.icon = "", this.iconColor = "", this.closeIcon = "", this.autoCloseDuration = 5e3, this.visible = !1;
  }
  render() {
    const t = this.iconColor == "" ? "var(--pi-notification-icon-color, #333)" : this.iconColor, n = {
      color: t,
      fill: t
    };
    return e`
            ${this.icon == "" ? null : e`
                <div class="pi_notification_icon" style=${le(n)}>
                    <pi-icon-handler icon=${this.icon}></pi-icon-handler>
                </div>
            `}
            <div class="pi_notification_group">
                <div class="pi_notification_title">${this.title}</div>
                <div class="pi_notification_message">${this.message}</div>
            </div>
            <div 
            class="pi_notification_close_icon"
            @click=${this._handleCloseClick}
            >
                <pi-icon-handler icon="close-square-dark"></pi-icon-handler>
            </div>
        `;
  }
  _handleCloseClick() {
    const t = new CustomEvent("removeNotification", {
      detail: {
        title: this.title
      },
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t);
  }
  static styles = [
    l,
    o`
            :host {
                /* width: 100%; */
                background: var(--pi-notification-bg-color, #FFF);
                display: flex;
                gap: 5px;
                margin: 0.5rem 0;
                justify-content: space-between;
                padding: var(--pi-notification-padding, 1rem);
                border-radius: var(--pi-notification-border-radius, 7px);
                box-sizing: border-box;
                border: var(--pi-notification-border, 1px solid #eee);
                box-shadow: var(--pi-notification-box-shadow, 0 0 12px rgba(0, 0, 0, 0.12));
                position: fixed;
                z-index: 10000;
                width: var(--pi-notification-width, 330px);

                opacity: 0; /* Initially invisible for fade-in */
                transform: translateY(-20px); /* Initial position slightly off for slide-in */
                transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, top 0.3s ease-in-out, bottom 0.3s ease-in-out, right 0.3s ease-in-out, left 0.3s ease-in-out; /* Apply transition to relevant properties */
            }

            :host(.visible) {
                opacity: 1;
                transform: translateY(0); /* Slide into final position */
            }

            .pi_notification_icon {
                width: var(--pi-notification-icon-size, 24px);
                color: var(--pi-notification-icon-color, #333);
            }

            .pi_notification_group {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                margin: var(--pi-notification-content-margin, 0 8px 0 13px);
            }

            .pi_notification_title {
                font-size: var(--pi-notification-title-font-size, 16px);
                font-weight: bold;
                color: var(--pi-notification-title-text-color, #333);
                line-height: var(--pi-notification-title-line-height, 24px);
            }

            .pi_notification_message {
                font-size: var(--pi-notification-content-font-size, 14px);
                color: var(--pi-notification-content-text-color, #666);
                line-height: var(--pi-notification-content-line-height, 24px);
            }

            .pi_notification_close_icon {
                width: var(--pi-notification-close-icon-size, 20px);
                color: var(--pi-notification-close-icon-color, #999);
                cursor: pointer;

                pi-icon-handler {
                    width: var(--pi-notification-close-icon-size, 20px);
                    height: auto;
                    fill: #ccc;

                    &:hover {
                        fill: #888;
                    }
                }
            }

        `
  ];
}
customElements.get("pi-notification-item") || customElements.define("pi-notification-item", qo);
class Ho extends a {
  static get properties() {
    return {
      notificationsByPosition: { type: Object }
    };
  }
  constructor() {
    super(), this.notificationsByPosition = {
      "top-left": [],
      "top-right": [],
      "bottom-left": [],
      "bottom-right": [],
      top: [],
      bottom: []
    }, this._renderedNotifications = {};
  }
  addNotification(t) {
    const n = crypto.randomUUID();
    t.id = n, this.notificationsByPosition[t.position] ? (this.notificationsByPosition = {
      ...this.notificationsByPosition,
      [t.position]: [
        ...this.notificationsByPosition[t.position],
        { ...t }
      ]
    }, this._renderNotifications()) : console.warn(`Invalid notification position: ${t.position}`), t.autoCloseDuration > 0 && this.autoCloseNotification(n, t.autoCloseDuration, t.position);
  }
  _handleNotificationClosed(t, n) {
    this.notificationsByPosition = {
      ...this.notificationsByPosition,
      [n]: this.notificationsByPosition[n].filter((s) => s.id !== t)
    }, this._renderNotifications();
  }
  autoCloseNotification(t, n, s) {
    setTimeout(() => {
      this._handleNotificationClosed(t, s);
    }, n);
  }
  _renderNotifications() {
    const t = Object.values(this.notificationsByPosition).flat(), n = new Set(Object.keys(this._renderedNotifications)), s = new Set(t.map((r) => r.id));
    for (const r of n)
      if (!s.has(r)) {
        const c = this._renderedNotifications[r];
        c && c.parentNode === document.body ? (c.classList.remove("visible"), setTimeout(() => {
          document.body.removeChild(c), delete this._renderedNotifications[r];
        }, 300)) : c && delete this._renderedNotifications[r];
      }
    for (const r of t)
      if (this._renderedNotifications[r.id]) {
        const c = this._renderedNotifications[r.id], p = this._calculatePositionStyles(r.position, this._getOffsetForPosition(r.position, r.id));
        Object.assign(c.style, p), this._applyNotificationData(c, r);
      } else {
        const c = document.createElement("pi-notification-item");
        this._applyNotificationData(c, r);
        const p = this._calculatePositionStyles(r.position, this._getOffsetForPosition(r.position, r.id));
        Object.assign(c.style, p), c.addEventListener(
          "removeNotification",
          (h) => this._handleNotificationClosed(r.id, r.position)
        ), document.body.appendChild(c), this._renderedNotifications[r.id] = c, c.offsetHeight, requestAnimationFrame(() => c.classList.add("visible"));
      }
  }
  _applyNotificationData(t, n) {
    t.setAttribute("title", n.title), t.setAttribute("message", n.message), t.setAttribute("icon", n.icon), t.setAttribute("iconColor", n.iconColor), t.setAttribute("severity", n.severity), t.setAttribute("position", n.position), t.setAttribute("offset", n.offset), t.setAttribute("autoCloseDuration", n.autoCloseDuration), t.setAttribute("closeIcon", n.closeIcon), t.setAttribute("data-id", n.id), t.classList.add(n.position);
  }
  _getOffsetForPosition(t, n) {
    const s = this.notificationsByPosition[t];
    let r = 15;
    for (const c of s) {
      if (c.id === n)
        return `${r}px`;
      r += 90;
    }
    return `${r}px`;
  }
  _calculatePositionStyles(t, n) {
    const s = {};
    switch (t) {
      case "top-left":
        s.top = n, s.left = "15px";
        break;
      case "top-right":
        s.top = n, s.right = "15px";
        break;
      case "bottom-left":
        s.bottom = n, s.left = "15px";
        break;
      case "bottom-right":
        s.bottom = n, s.right = "15px";
        break;
      case "top":
        s.top = n, s.left = "50%", s.transform = "translateX(-50%)";
        break;
      case "bottom":
        s.bottom = n, s.left = "50%", s.transform = "translateX(-50%)";
        break;
    }
    return s;
  }
  render() {
    return e`<slot></slot>`;
  }
  static styles = [
    o`
            :host {
                display: none; /* The center itself might not need to be visible */
                position: fixed;
                top: 0;
                right: 15px;
                z-index: 10000;
            }
        `
  ];
}
customElements.get("pi-notification-center") || customElements.define("pi-notification-center", Ho);
class Uo extends a {
  static get properties() {
    return {
      notificationCenter: { type: Object }
    };
  }
  constructor() {
    super(), this.notificationCenter = null, this.initNotifications(), this.severityMap = {
      primary: {
        icon: "flag-wavy-dark",
        color: "var(--pi-severity-bg-color-primary, #117ab4)"
      },
      secondary: {
        icon: "star-dark",
        color: "var(--pi-severity-bg-color-secondary, #ccc)"
      },
      success: {
        icon: "thumbs-up-dark",
        color: "var(--pi-severity-bg-color-success, #208c39)"
      },
      info: {
        icon: "info-sample-dark",
        color: "var(--pi-severity-bg-color-info, #17A2B9)"
      },
      warn: {
        icon: "alert-triangle-dark",
        color: "var(--pi-severity-bg-color-warn, #d28809)"
      },
      help: {
        icon: "globe-dark",
        color: "var(--pi-severity-bg-color-help, #A855F8)"
      },
      danger: {
        icon: "stop-ex-dark",
        color: "var(--pi-severity-bg-color-danger, #F04544)"
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  initNotifications() {
    if (!document.querySelector("pi-notification-center")) {
      const t = document.createElement("pi-notification-center");
      document.body.appendChild(t);
    }
    this.notificationCenter = document.querySelector("pi-notification-center");
  }
  create(t) {
    const n = this.finalizeNotificationData(t);
    document.querySelector("pi-notification-center").addNotification(n);
  }
  finalizeNotificationData(t) {
    return typeof t.severity < "u" && typeof this.severityMap[t.severity] < "u" && (t.icon == "" || typeof t.icon > "u") && (t.icon = this.severityMap[t.severity].icon, t.iconColor = this.severityMap[t.severity].color), t;
  }
  render() {
    return e`
            
        `;
  }
  static styles = [
    o`

        `
  ];
}
customElements.get("pi-notifications") || customElements.define("pi-notifications", Uo);
export {
  oo as PiBadge,
  po as PiButton,
  yo as PiCard,
  bo as PiCheckboxInput,
  Bo as PiChip,
  xo as PiForm,
  Do as PiFormGroup,
  ko as PiGrid,
  Lo as PiGridColumn,
  zo as PiGridRow,
  Oo as PiHeaderBar,
  pe as PiIconBase,
  de as PiIconHandler,
  io as PiLabel,
  Jo as PiNavDrawer,
  Ho as PiNotificationCenter,
  qo as PiNotificationItem,
  Uo as PiNotifications,
  wo as PiPaginator,
  _o as PiPaginatorNavItem,
  mo as PiRadioInput,
  go as PiRadioInputGroup,
  uo as PiSelectInput,
  No as PiTab,
  Mo as PiTabList,
  To as PiTabPanel,
  Fo as PiTabPanels,
  Io as PiTable,
  Co as PiTableColumn,
  $o as PiTablePaginator,
  So as PiTableRow,
  Po as PiTableSortIcon,
  Ao as PiTabs,
  fo as PiTextAreaInput,
  ho as PiTextInput,
  vo as PiToggleSwitch
};
//# sourceMappingURL=pi_components.js.map
