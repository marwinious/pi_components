(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lit'), require('lit/directives/class-map.js')) :
    typeof define === 'function' && define.amd ? define(['exports', 'lit', 'lit/directives/class-map.js'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.PiComponents = {}, global.lit, global.classMap_js));
})(this, (function (exports, lit, classMap_js) { 'use strict';

    class IconBase extends lit.LitElement {

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
            return lit.html`
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
            lit.css`
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
    customElements.define('icon-base', IconBase);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$1=globalThis,i$1=t$1.trustedTypes,s=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):undefined,e$2="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$1="?"+h,n=`<${o$1}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r.createTreeWalker(r,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return undefined!==s?s.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:undefined!==u[1]?c=_:undefined!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):undefined!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):undefined===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=undefined===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=undefined);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e$2+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$2)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$1)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=undefined!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?undefined:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),undefined===o?h=undefined:(h=new o(t),h._$AT(t,s,e)),undefined!==e?(s._$Co??=[])[e]=h:s._$Cl=h),undefined!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=undefined,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,true);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;undefined!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r,e}p(t){let i=0;for(const s of this._$AV) undefined!==s&&(undefined!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=undefined,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return undefined!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):undefined!==t._$litType$?this.$(t):undefined!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(undefined===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return undefined===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(false,true,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){ undefined===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=undefined,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(undefined===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?undefined:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=undefined,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$1.litHtmlPolyfillSupport;j?.(N,R),(t$1.litHtmlVersions??=[]).push("3.2.1");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class e extends i{constructor(i){if(super(i),this.it=E,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===E||null==r)return this._t=undefined,this.it=r;if(r===T)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

    class IconHandler extends lit.LitElement {

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
            return lit.html`
            <div class="icon">${o('<icon-'+this.icon+'></icon-'+this.icon)}</div>
        `;
        }

        static styles = [
            lit.css`
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
    customElements.define('icon-handler', IconHandler);

    const iconData$y = {
        iconLabel: 'icon-left-arrow-circled',
        className: 'IconLeftArrowCircled'
    };

    class IconLeftArrowCircled extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            pathFillRule="nonzero"
            strokeMiterLimit=2
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$y.iconLabel, IconLeftArrowCircled);

    const iconData$x = {
        iconLabel: 'icon-chain-link',
        className: 'IconChainLink'
    };

    class IconChainLink extends lit.LitElement {

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
            return lit.html`
            <icon-base pathData=${this.pathData}></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$x.iconLabel, IconChainLink);

    const iconData$w = {
        iconLabel: 'icon-alert-triangle-dark',
        className: 'IconAlertTriangleDark'
    };

    class IconAlertTriangleDark extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$w.iconLabel, IconAlertTriangleDark);

    const iconData$v = {
        iconLabel: 'icon-alert-triangle-light',
        className: 'IconAlertTriangleLight'
    };

    class IconAlertTriangleLight extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$v.iconLabel, IconAlertTriangleLight);

    const iconData$u = {
        iconLabel: 'icon-area-chart-stand',
        className: 'IconAreaChartStand'
    };

    class IconAreaChartStand extends lit.LitElement {

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
            return lit.html`
            <icon-base pathData=${this.pathData}></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$u.iconLabel, IconAreaChartStand);

    const iconData$t = {
        iconLabel: 'icon-avatar-generic-light',
        className: 'IconAvatarGenericLight'
    };

    class IconAvatarGenericLight extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$t.iconLabel, IconAvatarGenericLight);

    const iconData$s = {
        iconLabel: 'icon-close-square-dark',
        className: 'IconCloseSquareDark'
    };

    class IconCloseSquareDark extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$s.iconLabel, IconCloseSquareDark);

    const iconData$r = {
        iconLabel: 'icon-edit-image',
        className: 'IconEditImage'
    };

    class IconEditImage extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$r.iconLabel, IconEditImage);

    const iconData$q = {
        iconLabel: 'icon-edit-page-filled',
        className: 'IconEditPageFilled'
    };

    class IconEditPageFilled extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$q.iconLabel, IconEditPageFilled);

    const iconData$p = {
        iconLabel: 'icon-edit-video',
        className: 'IconEditVideo'
    };

    class IconEditVideo extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$p.iconLabel, IconEditVideo);

    const iconData$o = {
        iconLabel: 'icon-gear-solid',
        className: 'IconGearSolid'
    };

    class IconGearSolid extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$o.iconLabel, IconGearSolid);

    const iconData$n = {
        iconLabel: 'icon-info-chat-bubble-dark',
        className: 'IconInfoChatBubbleDark'
    };

    class IconInfoChatBubbleDark extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$n.iconLabel, IconInfoChatBubbleDark);

    const iconData$m = {
        iconLabel: 'icon-info-chat-bubble-light',
        className: 'IconInfoChatBubbleLight'
    };

    class IconInfoChatBubbleLight extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$m.iconLabel, IconInfoChatBubbleLight);

    const iconData$l = {
        iconLabel: 'icon-info-filled',
        className: 'IconInfoFilled'
    };

    class IconInfoFilled extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$l.iconLabel, IconInfoFilled);

    const iconData$k = {
        iconLabel: 'icon-info-light',
        className: 'IconInfoLight'
    };

    class IconInfoLight extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$k.iconLabel, IconInfoLight);

    const iconData$j = {
        iconLabel: 'icon-info-rounded-dark',
        className: 'IconInfoRoundedDark'
    };

    class IconInfoRoundedDark extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$j.iconLabel, IconInfoRoundedDark);

    const iconData$i = {
        iconLabel: 'icon-info-rounded-light',
        className: 'IconInfoRoundedLight'
    };

    class IconInfoRoundedLight extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$i.iconLabel, IconInfoRoundedLight);

    const iconData$h = {
        iconLabel: 'icon-info-sample-dark',
        className: 'IconInfoSimpleDark'
    };

    class IconInfoSimpleDark extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$h.iconLabel, IconInfoSimpleDark);

    const iconData$g = {
        iconLabel: 'icon-info-simple-light',
        className: 'IconInfoSimpleLight'
    };

    class IconInfoSimpleLight extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$g.iconLabel, IconInfoSimpleLight);

    const iconData$f = {
        iconLabel: 'icon-logout',
        className: 'IconLogout'
    };

    class IconLogout extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$f.iconLabel, IconLogout);

    const iconData$e = {
        iconLabel: 'icon-magnify-text',
        className: 'IconMagnifyText'
    };

    class IconMagnifyText extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$e.iconLabel, IconMagnifyText);

    const iconData$d = {
        iconLabel: 'icon-notification-box-dark',
        className: 'IconNotificationBoxDark'
    };

    class IconNotificationBoxDark extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$d.iconLabel, IconNotificationBoxDark);

    const iconData$c = {
        iconLabel: 'icon-notification-box-light',
        className: 'IconNotificationBoxLight'
    };

    class IconNotificationBoxLight extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLineJoin="round"
            strokeMiterLimit="2"
            pathFillRule="nonzero"
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$c.iconLabel, IconNotificationBoxLight);

    const iconData$b = {
        iconLabel: 'icon-paper-airplane-solid',
        className: 'IconPaperAirplaneSolid'
    };

    class IconPaperAirplaneSolid extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$b.iconLabel, IconPaperAirplaneSolid);

    const iconData$a = {
        iconLabel: 'icon-slack-logo-slanted',
        className: 'IconSlackLogoSlanted'
    };

    class IconSlackLogoSlanted extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$a.iconLabel, IconSlackLogoSlanted);

    const iconData$9 = {
        iconLabel: 'icon-stop-ex-dark',
        className: 'IconStopExDark'
    };

    class IconStopExDark extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$9.iconLabel, IconStopExDark);

    const iconData$8 = {
        iconLabel: 'icon-stop-ex-light',
        className: 'IconStopExLight'
    };

    class IconStopExLight extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$8.iconLabel, IconStopExLight);

    const iconData$7 = {
        iconLabel: 'icon-thumbs-down-dark',
        className: 'IconThumbsDownDark'
    };

    class IconThumbsDownDark extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$7.iconLabel, IconThumbsDownDark);

    const iconData$6 = {
        iconLabel: 'icon-thumbs-down-light',
        className: 'IconThumbsDownLight'
    };

    class IconThumbsDownLight extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$6.iconLabel, IconThumbsDownLight);

    const iconData$5 = {
        iconLabel: 'icon-thumbs-up-dark',
        className: 'IconThumbsUpDark'
    };

    class IconThumbsUpDark extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$5.iconLabel, IconThumbsUpDark);

    const iconData$4 = {
        iconLabel: 'icon-thumbs-up-light',
        className: 'IconThumbsUpLight'
    };

    class IconThumbsUpLight extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$4.iconLabel, IconThumbsUpLight);

    const iconData$3 = {
        iconLabel: 'icon-toggle-off',
        className: 'IconToggleOff'
    };

    class IconToggleOff extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`

        `
        ]
    }
    customElements.define(iconData$3.iconLabel, IconToggleOff);

    const iconData$2 = {
        iconLabel: 'icon-toggle-on',
        className: 'IconToggleOn'
    };

    class IconToggleOn extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            fillRule="evenodd"
            clipRule="evenodd"
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$2.iconLabel, IconToggleOn);

    const iconData$1 = {
        iconLabel: 'icon-user-rounded-dark',
        className: 'IconUserRoundedDark'
    };

    class IconUserRoundedDark extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData$1.iconLabel, IconUserRoundedDark);

    const iconData = {
        iconLabel: 'icon-user-rounded-light',
        className: 'IconUserRoundedLight'
    };

    class IconUserRoundedLight extends lit.LitElement {

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
            return lit.html`
            <icon-base 
            pathData=${this.pathData}
            ></icon-base>
        `;
        }

        static styles = [
            lit.css`
            
        `
        ]
    }
    customElements.define(iconData.iconLabel, IconUserRoundedLight);

    const commonCss = ".raised {\r\n    box-shadow: var(--pi-raised-box-shadow, 0px 1px 2px 1px #aaa);\r\n}\r\n\r\n.rounded {\r\n    border-radius: var(--pi-rounded-border-radius, 2rem);\r\n}";

    const severityCss = lit.css`

    .btn_severity_primary {
        --pi-button-bg-color: var(--pi-button-bg-color-primary);
        --pi-button-border: var(--pi-button-border-primary);
        --pi-button-text-color: var(--pi-button-text-color-primary);
        --pi-button-hover-bg-color: var(--pi-button-hover-bg-color-primary);
        --pi-button-hover-text-color: var(--pi-button-hover-bg-color-primary);
        --pi-button-hover-border-color: var(--pi-button-hover-border-color-primary);
        --pi-button-active-bg-color: var(--pi-button-active-bg-color-primary);
        --pi-button-active-text-color: var(--pi-button-active-text-color-primary);
        --pi-button-active-border-color: var(--pi-button-active-border-color-primary);
    }

    .btn_severity_secondary {
        --pi-button-bg-color: var(--pi-button-bg-color-secondary);
        --pi-button-border: var(--pi-button-border-secondary);
        --pi-button-text-color: var(--pi-button-text-color-secondary);
        --pi-button-hover-bg-color: var(--pi-button-hover-bg-color-secondary);
        --pi-button-hover-text-color: var(--pi-button-hover-bg-color-secondary);
        --pi-button-hover-border-color: var(--pi-button-hover-border-color-secondary);
        --pi-button-active-bg-color: var(--pi-button-active-bg-color-secondary);
        --pi-button-active-text-color: var(--pi-button-active-text-color-secondary);
        --pi-button-active-border-color: var(--pi-button-active-border-color-secondary);
    }

    .btn_severity_success {
        --pi-button-bg-color: var(--pi-button-bg-color-success);
        --pi-button-border: var(--pi-button-border-success);
        --pi-button-text-color: var(--pi-button-text-color-success);
        --pi-button-hover-bg-color: var(--pi-button-hover-bg-color-success);
        --pi-button-hover-text-color: var(--pi-button-hover-bg-color-success);
        --pi-button-hover-border-color: var(--pi-button-hover-border-color-success);
        --pi-button-active-bg-color: var(--pi-button-active-bg-color-success);
        --pi-button-active-text-color: var(--pi-button-active-text-color-success);
        --pi-button-active-border-color: var(--pi-button-active-border-color-success);
    }

    .btn_severity_info {
        --pi-button-bg-color: var(--pi-button-bg-color-info);
        --pi-button-border: var(--pi-button-border-info);
        --pi-button-text-color: var(--pi-button-text-color-info);
        --pi-button-hover-bg-color: var(--pi-button-hover-bg-color-info);
        --pi-button-hover-text-color: var(--pi-button-hover-bg-color-info);
        --pi-button-hover-border-color: var(--pi-button-hover-border-color-info);
        --pi-button-active-bg-color: var(--pi-button-active-bg-color-info);
        --pi-button-active-text-color: var(--pi-button-active-text-color-info);
        --pi-button-active-border-color: var(--pi-button-active-border-color-info);
    }

    .btn_severity_warn {
        --pi-button-bg-color: var(--pi-button-bg-color-warn);
        --pi-button-border: var(--pi-button-border-warn);
        --pi-button-text-color: var(--pi-button-text-color-warn);
        --pi-button-hover-bg-color: var(--pi-button-hover-bg-color-warn);
        --pi-button-hover-text-color: var(--pi-button-hover-bg-color-warn);
        --pi-button-hover-border-color: var(--pi-button-hover-border-color-warn);
        --pi-button-active-bg-color: var(--pi-button-active-bg-color-warn);
        --pi-button-active-text-color: var(--pi-button-active-text-color-warn);
        --pi-button-active-border-color: var(--pi-button-active-border-color-warn);
    }

    .btn_severity_help {
        --pi-button-bg-color: var(--pi-button-bg-color-help);
        --pi-button-border: var(--pi-button-border-help);
        --pi-button-text-color: var(--pi-button-text-color-help);
        --pi-button-hover-bg-color: var(--pi-button-hover-bg-color-help);
        --pi-button-hover-text-color: var(--pi-button-hover-bg-color-help);
        --pi-button-hover-border-color: var(--pi-button-hover-border-color-help);
        --pi-button-active-bg-color: var(--pi-button-active-bg-color-help);
        --pi-button-active-text-color: var(--pi-button-active-text-color-help);
        --pi-button-active-border-color: var(--pi-button-active-border-color-help);
    }

    .btn_severity_danger {
        --pi-button-bg-color: var(--pi-button-bg-color-danger);
        --pi-button-border: var(--pi-button-border-danger);
        --pi-button-text-color: var(--pi-button-text-color-danger);
        --pi-button-hover-bg-color: var(--pi-button-hover-bg-color-danger);
        --pi-button-hover-text-color: var(--pi-button-hover-bg-color-danger);
        --pi-button-hover-border-color: var(--pi-button-hover-border-color-danger);
        --pi-button-active-bg-color: var(--pi-button-active-bg-color-danger);
        --pi-button-active-text-color: var(--pi-button-active-text-color-danger);
        --pi-button-active-border-color: var(--pi-button-active-border-color-danger);
    }

`;

    const variantCss = lit.css`

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
    }

    .btn_variant_text.btn_severity_secondary {
        --pi-button-text-color: var(--pi-button-text-color-secondary);
    }

    .btn_variant_text.btn_severity_success {
        --pi-button-text-color: var(--pi-button-bg-color-success);
    }

    .btn_variant_text.btn_severity_info {
        --pi-button-text-color: var(--pi-button-bg-color-info);
    }

    .btn_variant_text.btn_severity_warn {
        --pi-button-text-color: var(--pi-button-bg-color-warn);
    }

    .btn_variant_text.btn_severity_help {
        --pi-button-text-color: var(--pi-button-bg-color-help);
    }

    .btn_variant_text.btn_severity_danger {
        --pi-button-text-color: var(--pi-button-bg-color-danger);
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
    }

    .btn_variant_outlined.btn_severity_secondary {
        --pi-button-text-color: var(--pi-button-text-color-secondary);
    }

    .btn_variant_outlined.btn_severity_success {
        --pi-button-text-color: var(--pi-button-bg-color-success);
    }

    .btn_variant_outlined.btn_severity_info {
        --pi-button-text-color: var(--pi-button-bg-color-info);
    }

    .btn_variant_outlined.btn_severity_warn {
        --pi-button-text-color: var(--pi-button-bg-color-warn);
    }

    .btn_variant_outlined.btn_severity_help {
        --pi-button-text-color: var(--pi-button-bg-color-help);
    }

    .btn_variant_outlined.btn_severity_danger {
        --pi-button-text-color: var(--pi-button-bg-color-danger);
    }

    .btn_variant_outlined[disabled] {
        --pi-button-disabled-bg-color: transparent;
        --pi-button-disabled-text-color: var(--pi-button-bg-color-disabled);
    }
`;

    const iconsCss = lit.css`

    .btn_variant_iconOnly.rounded {
        border-radius: 50%;
        padding: 0.5rem;
    }

    .btn_severity_primary {
        .button_icon_container {
            fill: var(--pi-button-text-color-primary);
        }
    }

    .btn_severity_secondary {
        .button_icon_container {
            fill: var(--pi-button-text-color-secondary);
        }
    }

    .btn_severity_success {
        .button_icon_container {
            fill: var(--pi-button-text-color-success);
        }
    }

    .btn_severity_info {
        .button_icon_container {
            fill: var(--pi-button-text-color-info);
        }
    }

    .btn_severity_warn {
        .button_icon_container {
            fill: var(--pi-button-text-color-warn);
        }
    }

    .btn_severity_help {
        .button_icon_container {
            fill: var(--pi-button-text-color-help);
        }
    }

    .btn_severity_danger {
        .button_icon_container {
            fill: var(--pi-button-text-color-danger);
        }
    }

`;

    // commonCss = css`${unsafeCSS(commonCss)}`;

    class PiButton extends lit.LitElement {

        static get properties() {
            return {
                disabled: { type: Boolean },
                icon: { type: String },
                severity: { type: String },
                raised: { type: Boolean },
                rounded: { type: Boolean },
                variant: { type: String },
                badge: { type: [Number, String] },
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
        }

        /* <div class="icon">${unsafeHTML(this.icon)}</div> */

        render() {

            const buttonClasses = {
                [`btn_severity_${this.severity}`]: true,
                [`btn_variant_${this.variant}`]: true,
                'raised': this.raised === true,
                'rounded': this.rounded === true,
                /* 'btn_severity_primary': this.severity === 'primary',
                'btn_severity_secondary': this.severity === 'secondary',
                'btn_severity_success': this.severity === 'success',
                'btn_severity_info': this.severity === 'info',
                'btn_severity_warn': this.severity === 'warn',
                'btn_severity_help': this.severity === 'help',
                'btn_severity_danger': this.severity === 'danger', */
            };

            return lit.html`
            <button 
            type="button"
            class=${classMap_js.classMap(buttonClasses)}
            ?disabled=${this.disabled}
            >

                <span class="button_content_container">
                    <!-- Optional icon -->
                    <span class="button_icon_container">
                        <icon-handler .icon=${this.icon}></icon-handler>
                    </span>

                    <!-- Button text -->
                    ${this.variant != 'iconOnly' ? lit.html`
                        <slot></slot>
                    ` : null}
                    

                    <!-- Optional Badge -->
                    <span class="button_badge">${this.badge}</span>
                    ${this.badge ? lit.html`
                        <!-- <span class="button_badge">${this.badge}</span> -->
                    ` : null}
                </span>
                
            </button>
        `;
        }

        static styles = [
            severityCss,
            variantCss,
            iconsCss,
            lit.unsafeCSS(commonCss),
            lit.css`
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
                transition: background-color 0.5s ease, border 0.5s ease, color 0.5s ease;
                background: var(--pi-button-bg-color, #333);
                border: var(--pi-button-border, solid 1px #333);
                color: var(--pi-button-text-color, #FFF);

                &:hover {
                    background: var(--pi-button-hover-bg-color, #0a486a);
                    border-color: var(--pi-button-hover-border-color, #0a486a);
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

            .button_badge {
                display: none;
                width: 10px;
                height: 10px;
                font-size: 0.75rem;
                border-radius: 50%;
                background: rgba(0,0,0,0.25);
                padding: 0.27rem;
            }

            :host([badge]) .button_badge {
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

        `
        ]
        
    }
    customElements.define('pi-button', PiButton);

    exports.IconAlertTriangleDark = IconAlertTriangleDark;
    exports.IconAlertTriangleLight = IconAlertTriangleLight;
    exports.IconAreaChartStand = IconAreaChartStand;
    exports.IconAvatarGenericLight = IconAvatarGenericLight;
    exports.IconBase = IconBase;
    exports.IconChainLink = IconChainLink;
    exports.IconCloseSquareDark = IconCloseSquareDark;
    exports.IconEditImage = IconEditImage;
    exports.IconEditPageFilled = IconEditPageFilled;
    exports.IconEditVideo = IconEditVideo;
    exports.IconGearSolid = IconGearSolid;
    exports.IconHandler = IconHandler;
    exports.IconInfoChatBubbleDark = IconInfoChatBubbleDark;
    exports.IconInfoChatBubbleLight = IconInfoChatBubbleLight;
    exports.IconInfoFilled = IconInfoFilled;
    exports.IconInfoLight = IconInfoLight;
    exports.IconInfoRoundedDark = IconInfoRoundedDark;
    exports.IconInfoRoundedLight = IconInfoRoundedLight;
    exports.IconInfoSimpleDark = IconInfoSimpleDark;
    exports.IconInfoSimpleLight = IconInfoSimpleLight;
    exports.IconLeftArrowCircled = IconLeftArrowCircled;
    exports.IconLogout = IconLogout;
    exports.IconMagnifyText = IconMagnifyText;
    exports.IconNotificationBoxDark = IconNotificationBoxDark;
    exports.IconNotificationBoxLight = IconNotificationBoxLight;
    exports.IconPaperAirplaneSolid = IconPaperAirplaneSolid;
    exports.IconSlackLogoSlanted = IconSlackLogoSlanted;
    exports.IconStopExDark = IconStopExDark;
    exports.IconStopExLight = IconStopExLight;
    exports.IconThumbsDownDark = IconThumbsDownDark;
    exports.IconThumbsDownLight = IconThumbsDownLight;
    exports.IconThumbsUpDark = IconThumbsUpDark;
    exports.IconThumbsUpLight = IconThumbsUpLight;
    exports.IconToggleOff = IconToggleOff;
    exports.IconToggleOn = IconToggleOn;
    exports.IconUserRoundedDark = IconUserRoundedDark;
    exports.IconUserRoundedLight = IconUserRoundedLight;
    exports.PiButton = PiButton;

    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

}));
//# sourceMappingURL=pi_components.umd.cjs.map
