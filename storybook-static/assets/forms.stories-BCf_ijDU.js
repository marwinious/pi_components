import{a as c,x as r,i as d}from"./lit-element-SFUTxaLj.js";import{r as o}from"./registerWebComp-C8LEvlHW.js";import{a as s}from"./index-Br0BFi8U.js";import{P as b,a as g,b as f}from"./gridRow-D7D5W-yJ.js";import{P as h}from"./baseFormElement-Bl0ftjGa.js";import{P as w}from"./textInput-D-EzcMNl.js";import{P as x}from"./textAreaInput-CV4v9jty.js";import{P as y}from"./selectInput-XMrolFjn.js";import{P as N}from"./checkboxInput-CzhhLfVo.js";import{P,a as S}from"./radioInputGroup-Bo0ks10Y.js";import{P as v}from"./toggleSwitch-B_MOMjSW.js";import{P as I}from"./button-BoLlYXrc.js";import"./v4-CtRu48qb.js";import"./defaultCss-fIp2nCNg.js";import"./common-Bdu-62Ky.js";import"./class-map-Kvqtb11j.js";import"./directive-CJw_OlP2.js";o("pi-base-form-element",h);class D extends c{static get properties(){return{formData:{type:Object},showReset:{type:Boolean},showSubmit:{type:Boolean}}}constructor(){super(),this.formData={},this.showReset=!1,this.showSubmit=!0}connectedCallback(){super.connectedCallback(),this.addEventListener("change",i=>this._handleFormElementChange(i)),this.addEventListener("pi-submit",i=>this._handleSubmit(i))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",i=>this._handleFormElementChange(i)),this.removeEventListener("pi-submit",i=>this._handleSubmit(i))}render(){return r`
            <form @submit=${this._handleSubmit} @reset=${this._handleReset}>
                <slot @slotchange=${this._handleSlotChange}></slot>

                <div class="button_row">
                    
                    ${this.showSubmit?r`
                        <slot name="submitButton">
                            <button type="submit">Submit</button>
                        </slot>
                    `:null}
                        
                    ${this.showReset?r`
                        <slot name="resetButton">
                            <button type="reset">Reset</button>
                        </slot>
                    `:null}
                    
                </div>
                
            </form>
        `}_handleFormElementChange(i){i.detail?.group?(typeof this.formData[i.detail.group]>"u"&&(this.formData[i.detail.group]={}),this.formData[i.detail.group][i.detail.name]=i.detail.value):this.formData={...this.formData,[i.detail.name]:i.detail.value};const n=new CustomEvent("formDataUpdated",{detail:this.formData,bubbles:!0,composed:!0});this.dispatchEvent(n)}_handleSubmit(i){i.preventDefault();const n=this._collectFormData(),t=new CustomEvent("formSubmitted",{detail:n,bubbles:!0,composed:!0});this.dispatchEvent(t)}_collectFormData(){const i=this.querySelectorAll("[name]"),n={};return i.forEach(t=>{const a=t.closest("pi-form-group")?.name;if(a){n[a]||(n[a]={});const p=t.closest("pi-base-form-element")||t.closest("pi-text-input")||t.closest("pi-select-input")||t.closest("pi-checkbox-input")||t.closest("pi-toggle-switch")||t.closest("pi-radio-input-group")||t.closest("pi-text-area-input");p?p.tagName=="PI-RADIO-INPUT-GROUP"||(n[a][p.name]=p.getValue()):t.tagName!="PI-FORM-GROUP"&&(n[a][t.name]=t.value)}else{const p=t.closest("pi-base-form-element")||t.closest("pi-text-input")||t.closest("pi-select-input")||t.closest("pi-checkbox-input")||t.closest("pi-toggle-switch")||t.closest("pi-radio-input-group")||t.closest("pi-text-area-input");p?p.tagName=="PI-RADIO-INPUT"||(n[p.name]=p.getValue()):n[t.name]=t.value}}),n}_handleReset(i){i.preventDefault(),this.querySelectorAll("[name]").forEach(t=>{const a=t.closest("pi-base-form-element")||t.closest("pi-text-input")||t.closest("pi-select-input")||t.closest("pi-checkbox-input")||t.closest("pi-toggle-switch")||t.closest("pi-radio-input-group")||t.closest("pi-text-area-input");a?a.setValue(""):(t.tagName==="PI-TEXT-INPUT"||t.tagName==="PI-SELECT-INPUT"||t.tagName==="PI-TEXT-AREA-INPUT"||t.tagName==="PI-TOGGLE-INPUT"||t.tagName==="PI-RADIO-INPUT"||t.tagName==="PI-CHECKBOX-INPUT")&&(t.value="")}),this.formData={}}_handleSlotChange(){const i=this._collectFormData();this.formData=i}static styles=[d`
            .button_row {
                margin: var(--pi-form-button-row-margin, 1rem 0);
            }
        `]}class E extends c{static get properties(){return{name:{type:String}}}constructor(){super(),this.name=""}render(){return r`
            <slot></slot>
        `}static styles=[d`
            
        `]}o("pi-form",D);o("pi-form-group",E);o("pi-grid",b);o("pi-col",g);o("pi-row",f);o("pi-text-input",w);o("pi-text-area-input",x);o("pi-select-input",y);o("pi-checkbox-input",N);o("pi-radio-input",P);o("pi-radio-input-group",S);o("pi-toggle-switch",v);o("pi-button",I);const F=[{name:"Alice",age:30,country:"USA",income:"$100,000",rawIncome:"100000"},{name:"Bob",age:25,country:"UK",income:"$50,000",rawIncome:"50000"},{name:"Charlie",age:35,country:"Canada",income:"$200,000",rawIncome:"200000"},{name:"David",age:32,country:"Spain",income:"$70,000",rawIncome:"70000"},{name:"Edward",age:27,country:"New Zealand",income:"$150,000",rawIncome:"150000"}],z={title:"Components/Forms",component:"pi-form",tags:["autodocs"],argTypes:{},args:{}},C=({})=>r`
    <pi-form
    @formSubmitted=${e=>s("Form submitted")(e.detail)}
    @formDataUpdated=${e=>s("Form data changed")(e.detail)}
    >
    
        <pi-grid>
            <pi-row>
                <pi-col cols=3>
                    <pi-text-input
                    name="firstName"
                    label="First Name"
                    ></pi-text-input>
                </pi-col>
                <pi-col cols=3>
                    <pi-text-input
                    name="lastName"
                    label="Last Name"
                    ></pi-text-input>
                </pi-col>
            </pi-row>
        </pi-grid>

        <pi-button slot="submitButton" type="submit">Submit</pi-button>

    </pi-form>
`,_=({})=>r`
    <pi-form
    @formSubmitted=${e=>s("Form submitted")(e.detail)}
    @formDataUpdated=${e=>s("Form data changed")(e.detail)}
    >
    
        <pi-grid>
            <pi-row>
                <pi-col cols=3>
                    <pi-form-group
                    name="person"
                    >
                        <pi-text-input
                        name="firstName"
                        label="First Name"
                        ></pi-text-input>
                    </pi-form-group>
                </pi-col>
                <pi-col cols=3>
                    <pi-form-group
                    name="person"
                    >
                        <pi-text-input
                        name="lastName"
                        label="Last Name"
                        ></pi-text-input>
                    </pi-form-group>
                </pi-col>
            </pi-row>
            <pi-row>
                <pi-col cols=3>
                    <pi-text-input
                    name="company"
                    label="Company"
                    ></pi-text-input>
                </pi-col>
                <pi-col cols=3>
                    <pi-text-input
                    name="planet"
                    label="Planet"
                    ></pi-text-input>
                </pi-col>
            </pi-row>
        </pi-grid>

        <pi-button slot="submitButton" type="submit">Submit</pi-button>

    </pi-form>
`,$=({})=>r`
    <pi-form
    @formSubmitted=${e=>s("Form submitted")(e.detail)}
    @formDataUpdated=${e=>s("Form data changed")(e.detail)}
    >
    
        <pi-grid>
            <pi-row>
                <pi-col cols=3>
                    <pi-form-group
                    name="person"
                    >
                        <pi-text-input
                        name="firstName"
                        label="First Name"
                        ></pi-text-input>
                    </pi-form-group>
                </pi-col>
                <pi-col cols=3>
                    <pi-form-group
                    name="person"
                    >
                        <pi-text-input
                        name="lastName"
                        label="Last Name"
                        ></pi-text-input>
                    </pi-form-group>
                </pi-col>
            </pi-row>
            <pi-row>
                <pi-col cols=3>
                    <pi-text-input
                    name="company"
                    label="Company"
                    ></pi-text-input>
                </pi-col>
                <pi-col cols=3>
                    <pi-select-input
                    .options="${F}"
                    labelKey="country"
                    valueKey="country"
                    label="Country"
                    name="country"
                    ></pi-select-input>
                </pi-col>
            </pi-row>
            <pi-row>
                <pi-col cols=12>
                    <pi-radio-input-group 
                    label="Age Range"
                    name="ageRange"
                    >
                        <pi-radio-input
                        label="18-24"
                        value="18_24"
                        checked
                        ></pi-radio-input>
                        <pi-radio-input
                        label="25-29"
                        value="25_29"
                        ></pi-radio-input>
                        <pi-radio-input
                        label="30-35"
                        value="30_35"
                        ></pi-radio-input>
                    </pi-radio-input-group>
                </pi-col>
            </pi-row>
            <pi-row>
                <pi-col cols=12>
                    <pi-checkbox-input
                    name="subscribeNewsletter"
                    label="Subscribe to our newsletter"
                    ></pi-checkbox-input>
                </pi-col>
            </pi-row>
            <pi-row>
                <pi-col cols=12>
                    <div>
                        <pi-toggle-switch
                        name="enableAlerts"
                        label="Enable Alerts"
                        ></pi-toggle-switch>
                    </div>
                </pi-col>
            </pi-row>
            <pi-row>
                <pi-col cols=6>
                    <pi-text-area-input
                    style="width: 100%"
                    name="shortBio"
                    label="Short Bio"
                    ></pi-text-area-input>
                </pi-col>
            </pi-row>
        </pi-grid>

        <pi-button slot="submitButton" type="submit">Submit</pi-button>

    </pi-form>
`,l=C.bind();l.args={};const m=_.bind();m.args={};const u=$.bind();u.args={};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({}) => html\`
    <pi-form
    @formSubmitted=\${e => action('Form submitted')(e.detail)}
    @formDataUpdated=\${e => action('Form data changed')(e.detail)}
    >
    
        <pi-grid>
            <pi-row>
                <pi-col cols=3>
                    <pi-text-input
                    name="firstName"
                    label="First Name"
                    ></pi-text-input>
                </pi-col>
                <pi-col cols=3>
                    <pi-text-input
                    name="lastName"
                    label="Last Name"
                    ></pi-text-input>
                </pi-col>
            </pi-row>
        </pi-grid>

        <pi-button slot="submitButton" type="submit">Submit</pi-button>

    </pi-form>
\``,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({}) => html\`
    <pi-form
    @formSubmitted=\${e => action('Form submitted')(e.detail)}
    @formDataUpdated=\${e => action('Form data changed')(e.detail)}
    >
    
        <pi-grid>
            <pi-row>
                <pi-col cols=3>
                    <pi-form-group
                    name="person"
                    >
                        <pi-text-input
                        name="firstName"
                        label="First Name"
                        ></pi-text-input>
                    </pi-form-group>
                </pi-col>
                <pi-col cols=3>
                    <pi-form-group
                    name="person"
                    >
                        <pi-text-input
                        name="lastName"
                        label="Last Name"
                        ></pi-text-input>
                    </pi-form-group>
                </pi-col>
            </pi-row>
            <pi-row>
                <pi-col cols=3>
                    <pi-text-input
                    name="company"
                    label="Company"
                    ></pi-text-input>
                </pi-col>
                <pi-col cols=3>
                    <pi-text-input
                    name="planet"
                    label="Planet"
                    ></pi-text-input>
                </pi-col>
            </pi-row>
        </pi-grid>

        <pi-button slot="submitButton" type="submit">Submit</pi-button>

    </pi-form>
\``,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({}) => html\`
    <pi-form
    @formSubmitted=\${e => action('Form submitted')(e.detail)}
    @formDataUpdated=\${e => action('Form data changed')(e.detail)}
    >
    
        <pi-grid>
            <pi-row>
                <pi-col cols=3>
                    <pi-form-group
                    name="person"
                    >
                        <pi-text-input
                        name="firstName"
                        label="First Name"
                        ></pi-text-input>
                    </pi-form-group>
                </pi-col>
                <pi-col cols=3>
                    <pi-form-group
                    name="person"
                    >
                        <pi-text-input
                        name="lastName"
                        label="Last Name"
                        ></pi-text-input>
                    </pi-form-group>
                </pi-col>
            </pi-row>
            <pi-row>
                <pi-col cols=3>
                    <pi-text-input
                    name="company"
                    label="Company"
                    ></pi-text-input>
                </pi-col>
                <pi-col cols=3>
                    <pi-select-input
                    .options="\${sampleData}"
                    labelKey="country"
                    valueKey="country"
                    label="Country"
                    name="country"
                    ></pi-select-input>
                </pi-col>
            </pi-row>
            <pi-row>
                <pi-col cols=12>
                    <pi-radio-input-group 
                    label="Age Range"
                    name="ageRange"
                    >
                        <pi-radio-input
                        label="18-24"
                        value="18_24"
                        checked
                        ></pi-radio-input>
                        <pi-radio-input
                        label="25-29"
                        value="25_29"
                        ></pi-radio-input>
                        <pi-radio-input
                        label="30-35"
                        value="30_35"
                        ></pi-radio-input>
                    </pi-radio-input-group>
                </pi-col>
            </pi-row>
            <pi-row>
                <pi-col cols=12>
                    <pi-checkbox-input
                    name="subscribeNewsletter"
                    label="Subscribe to our newsletter"
                    ></pi-checkbox-input>
                </pi-col>
            </pi-row>
            <pi-row>
                <pi-col cols=12>
                    <div>
                        <pi-toggle-switch
                        name="enableAlerts"
                        label="Enable Alerts"
                        ></pi-toggle-switch>
                    </div>
                </pi-col>
            </pi-row>
            <pi-row>
                <pi-col cols=6>
                    <pi-text-area-input
                    style="width: 100%"
                    name="shortBio"
                    label="Short Bio"
                    ></pi-text-area-input>
                </pi-col>
            </pi-row>
        </pi-grid>

        <pi-button slot="submitButton" type="submit">Submit</pi-button>

    </pi-form>
\``,...u.parameters?.docs?.source}}};const J=["Default","Groups","MultiInputs"];export{l as Default,m as Groups,u as MultiInputs,J as __namedExportsOrder,z as default};
