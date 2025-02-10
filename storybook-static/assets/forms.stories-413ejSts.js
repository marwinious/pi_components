import{r as c,x as a,i as u}from"./lit-element-CIbSzfXw.js";import{a as r}from"./chunk-D5ZWXAHU-BihnyLEY.js";import"./iconUserRoundedLight-D36zYM6r.js";import"./label-C_mcLEiD.js";import"./gridRow-BhLv2sol.js";/* empty css              */import"./button-pjHN6GD3.js";import"./textInput-EgJjYZ2v.js";import"./selectInput-BpJ8ug0a.js";import"./checkboxInput-CdQO_DLy.js";import"./radioInput-DmYT9yqH.js";import"./toggleSwitch-YtaylxhS.js";import"./textAreaInput-BudRh6ee.js";import"./v4-CtRu48qb.js";import"./directive-CF8sV3Lr.js";import"./class-map-CB0bDZon.js";import"./defaultCss-CkMoNE8s.js";class d extends c{static get properties(){return{formData:{type:Object},showReset:{type:Boolean},showSubmit:{type:Boolean}}}constructor(){super(),this.formData={},this.showReset=!1,this.showSubmit=!0}connectedCallback(){super.connectedCallback(),this.addEventListener("change",i=>this._handleFormElementChange(i)),this.addEventListener("pi-submit",i=>this._handleSubmit(i))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",i=>this._handleFormElementChange(i)),this.removeEventListener("pi-submit",i=>this._handleSubmit(i))}render(){return a`
            <form @submit=${this._handleSubmit} @reset=${this._handleReset}>
                <slot @slotchange=${this._handleSlotChange}></slot>

                <div class="button_row">
                    
                        <slot name="submitButton">
                            <button type="submit">Submit</button>
                        </slot>
                    
                    
                    ${this.showReset?a`
                        <slot name="resetButton">
                            <button type="reset">Reset</button>
                        </slot>
                    `:null}
                    
                </div>
                
            </form>
        `}_handleFormElementChange(i){i.detail?.group?(typeof this.formData[i.detail.group]>"u"&&(this.formData[i.detail.group]={}),this.formData[i.detail.group][i.detail.name]=i.detail.value):this.formData={...this.formData,[i.detail.name]:i.detail.value};const e=new CustomEvent("formDataUpdated",{detail:this.formData,bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleSubmit(i){i.preventDefault();const e=this._collectFormData(),t=new CustomEvent("formSubmitted",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}_collectFormData(){const i=this.querySelectorAll("[name]"),e={};return i.forEach(t=>{const p=t.closest("pi-form-group")?.name;if(p){e[p]||(e[p]={});const n=t.closest("pi-base-form-element")||t.closest("pi-text-input")||t.closest("pi-select-input")||t.closest("pi-checkbox-input")||t.closest("pi-toggle-switch")||t.closest("pi-radio-input-group")||t.closest("pi-text-area-input");n?n.tagName=="PI-RADIO-INPUT-GROUP"||(e[p][n.name]=n.getValue()):t.tagName!="PI-FORM-GROUP"&&(e[p][t.name]=t.value)}else{const n=t.closest("pi-base-form-element")||t.closest("pi-text-input")||t.closest("pi-select-input")||t.closest("pi-checkbox-input")||t.closest("pi-toggle-switch")||t.closest("pi-radio-input-group")||t.closest("pi-text-area-input");n?n.tagName=="PI-RADIO-INPUT"||(e[n.name]=n.getValue()):e[t.name]=t.value}}),e}_handleReset(i){i.preventDefault(),this.querySelectorAll("[name]").forEach(t=>{const p=t.closest("pi-base-form-element")||t.closest("pi-text-input")||t.closest("pi-select-input")||t.closest("pi-checkbox-input")||t.closest("pi-toggle-switch")||t.closest("pi-radio-input-group")||t.closest("pi-text-area-input");p?p.setValue(""):(t.tagName==="PI-TEXT-INPUT"||t.tagName==="PI-SELECT-INPUT"||t.tagName==="PI-TEXT-AREA-INPUT"||t.tagName==="PI-TOGGLE-INPUT"||t.tagName==="PI-RADIO-INPUT"||t.tagName==="PI-CHECKBOX-INPUT")&&(t.value="")}),this.formData={}}_handleSlotChange(){const i=this._collectFormData();this.formData=i}static styles=[u`
            .button_row {
                margin: var(--pi-form-button-row-margin, 1rem 0);
            }
        `]}customElements.define("pi-form",d);class b extends c{static get properties(){return{name:{type:String}}}constructor(){super(),this.name=""}render(){return a`
            <slot></slot>
        `}static styles=[u`
            
        `]}customElements.define("pi-form-group",b);const g=[{name:"Alice",age:30,country:"USA",income:"$100,000",rawIncome:"100000"},{name:"Bob",age:25,country:"UK",income:"$50,000",rawIncome:"50000"},{name:"Charlie",age:35,country:"Canada",income:"$200,000",rawIncome:"200000"},{name:"David",age:32,country:"Spain",income:"$70,000",rawIncome:"70000"},{name:"Edward",age:27,country:"New Zealand",income:"$150,000",rawIncome:"150000"}],A={title:"Components/Forms",component:"pi-form",tags:["autodocs"],argTypes:{},args:{}},f=({})=>a`
    <pi-form
    @formSubmitted=${o=>r("Form submitted")(o.detail)}
    @formDataUpdated=${o=>r("Form data changed")(o.detail)}
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
`,h=({})=>a`
    <pi-form
    @formSubmitted=${o=>r("Form submitted")(o.detail)}
    @formDataUpdated=${o=>r("Form data changed")(o.detail)}
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
`,w=({})=>a`
    <pi-form
    @formSubmitted=${o=>r("Form submitted")(o.detail)}
    @formDataUpdated=${o=>r("Form data changed")(o.detail)}
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
                    .options="${g}"
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
`,s=f.bind();s.args={};const l=h.bind();l.args={};const m=w.bind();m.args={};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({}) => html\`
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
\``,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({}) => html\`
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
\``,...m.parameters?.docs?.source}}};const k=["Default","Groups","MultiInputs"];export{s as Default,l as Groups,m as MultiInputs,k as __namedExportsOrder,A as default};
