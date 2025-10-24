import{x as a}from"./lit-element-Rv6HkL07.js";import{r as i}from"./registerWebComp-xWpx6Xkx.js";import{a as p}from"./index-Br0BFi8U.js";import"./iconXLogo-wd1NX9XZ.js";import{P as r,a as l,b as m}from"./textInput-D3o0PP1B.js";import{P as u,a as s,b as c}from"./gridRow-CmMBURRA.js";/* empty css              */import"./label-B4rynypE.js";import{P as d}from"./button-BOBJE-_P.js";import{P as b}from"./selectInput-DDizFH8J.js";import{P as g}from"./checkboxInput-0uXweIWG.js";import{P as f,a as w}from"./radioInputGroup-2nst8SSk.js";import{P as x}from"./toggleSwitch-Bi2fp7d5.js";import{P as y}from"./textAreaInput-CIlRUaP7.js";import"./card-yLocHZea.js";import"./paginator-CWwSxXN6.js";import"./table-DdY3P1Jp.js";import"./tabs-CJumrZMp.js";import"./chip-BYNiX30g.js";import"./headerBar-DZ0q1dNX.js";import"./navDrawer-DElHHZe8.js";import"./notifications-1UJDinW3.js";import"./v4-CtRu48qb.js";import"./directive-CJw_OlP2.js";import"./defaultCss-BUBpELKw.js";import"./common-Bdu-62Ky.js";import"./class-map-KOhBCLCh.js";import"./directive-helpers-CnTqk2HR.js";import"./iconBase-D6R8-dG5.js";i("pi-form",r);i("pi-form-group",l);i("pi-grid",u);i("pi-col",s);i("pi-row",c);i("pi-text-input",m);i("pi-text-area-input",y);i("pi-select-input",b);i("pi-checkbox-input",g);i("pi-radio-input",f);i("pi-radio-input-group",w);i("pi-toggle-switch",x);i("pi-button",d);const h=[{name:"Alice",age:30,country:"USA",income:"$100,000",rawIncome:"100000"},{name:"Bob",age:25,country:"UK",income:"$50,000",rawIncome:"50000"},{name:"Charlie",age:35,country:"Canada",income:"$200,000",rawIncome:"200000"},{name:"David",age:32,country:"Spain",income:"$70,000",rawIncome:"70000"},{name:"Edward",age:27,country:"New Zealand",income:"$150,000",rawIncome:"150000"}],Y={title:"Components/Forms",component:"pi-form",tags:["autodocs"],argTypes:{},args:{}},N=({})=>a`
    <pi-form
    @formSubmitted=${t=>p("Form submitted")(t.detail)}
    @formDataUpdated=${t=>p("Form data changed")(t.detail)}
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
`,P=({})=>a`
    <pi-form
    @formSubmitted=${t=>p("Form submitted")(t.detail)}
    @formDataUpdated=${t=>p("Form data changed")(t.detail)}
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
`,S=({})=>a`
    <pi-form
    @formSubmitted=${t=>p("Form submitted")(t.detail)}
    @formDataUpdated=${t=>p("Form data changed")(t.detail)}
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
                    .options="${h}"
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
`,o=N.bind();o.args={};const n=P.bind();n.args={};const e=S.bind();e.args={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({}) => html\`
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
\``,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({}) => html\`
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
\``,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({}) => html\`
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
\``,...e.parameters?.docs?.source}}};const ii=["Default","Groups","MultiInputs"];export{o as Default,n as Groups,e as MultiInputs,ii as __namedExportsOrder,Y as default};
