import{x as e}from"./lit-element-qJpPW6A9.js";import{a as t}from"./chunk-D5ZWXAHU-CUVymvc5.js";import"./iconUserRoundedLight-DAA4Ng5V.js";import"./textInput-BVBE0bKS.js";import"./gridRow-B9G3p6lS.js";/* empty css              */import"./label-Blmss6rD.js";import"./button-DpZ-4H4q.js";import"./selectInput-C3XGY4DD.js";import"./checkboxInput-CIYz59_W.js";import"./radioInputGroup-CJpdepT1.js";import"./toggleSwitch-DUJgR8Bh.js";import"./textAreaInput-BB_vpX0i.js";import"./card-BKqo6j5H.js";import"./paginator-B6elyfOC.js";import"./tableColumn-DbbijIEK.js";import"./tabs-BnVmsyvf.js";import"./v4-CtRu48qb.js";import"./defaultCss-aEcf2KJM.js";import"./class-map-yYL26NNl.js";const a=[{name:"Alice",age:30,country:"USA",income:"$100,000",rawIncome:"100000"},{name:"Bob",age:25,country:"UK",income:"$50,000",rawIncome:"50000"},{name:"Charlie",age:35,country:"Canada",income:"$200,000",rawIncome:"200000"},{name:"David",age:32,country:"Spain",income:"$70,000",rawIncome:"70000"},{name:"Edward",age:27,country:"New Zealand",income:"$150,000",rawIncome:"150000"}],A={title:"Components/Forms",component:"pi-form",tags:["autodocs"],argTypes:{},args:{}},r=({})=>e`
    <pi-form
    @formSubmitted=${i=>t("Form submitted")(i.detail)}
    @formDataUpdated=${i=>t("Form data changed")(i.detail)}
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
`,l=({})=>e`
    <pi-form
    @formSubmitted=${i=>t("Form submitted")(i.detail)}
    @formDataUpdated=${i=>t("Form data changed")(i.detail)}
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
`,m=({})=>e`
    <pi-form
    @formSubmitted=${i=>t("Form submitted")(i.detail)}
    @formDataUpdated=${i=>t("Form data changed")(i.detail)}
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
                    .options="${a}"
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
`,n=r.bind();n.args={};const p=l.bind();p.args={};const o=m.bind();o.args={};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({}) => html\`
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
\``,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({}) => html\`
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
\``,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({}) => html\`
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
\``,...o.parameters?.docs?.source}}};const I=["Default","Groups","MultiInputs"];export{n as Default,p as Groups,o as MultiInputs,I as __namedExportsOrder,A as default};
