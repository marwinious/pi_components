export const basicFormSample = `<pi-form
@formSubmitted="\${(e) => this.child[0].handleCallbackData(e.detail)}"
@formDataUpdated="\${(e) => this.child[0].handleCallbackData(e.detail)}"
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
</pi-form>`

export const customSubmitFormSample = `<pi-form
id="pi-form-1"
@formSubmitted="\${(e) => this.child[0].handleCallbackData(e.detail)}"
@formDataUpdated="\${(e) => this.child[0].handleCallbackData(e.detail)}"
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
    <pi-button slot="submitButton" @click="\${(e) => this.submitFormById(e, 'pi-form-1')}">Submit</pi-button>
</pi-form>

submitFormById(e, formId) {
    this.shadowRoot.querySelector(\`pi-form[id='\${formId}']\`)._handleSubmit(e)
}`

export const groupFormSample = `<pi-form
@formSubmitted="\${(e) => this.child[2].handleCallbackData(e.detail)}"
@formDataUpdated="\${(e) => this.child[2].handleCallbackData(e.detail)}"
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
</pi-form>`

export const multiInputFormSample = `<pi-form
@formSubmitted="\${(e) => this.child[3].handleCallbackData(e.detail)}"
@formDataUpdated="\${(e) => this.child[3].handleCallbackData(e.detail)}"
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
                .options="\${this.sampleData}"
                labelKey="country"
                valueKey="country"
                label="Country"
                name="country"
                ></pi-select-input>
            </pi-col>
        </pi-row>
        <pi-row>
            <pi-col cols=12>
                <pi-radio-input-group label="Age Range">
                    <pi-radio-input
                    name="ageRange"
                    label="18-24"
                    value="18_24"
                    checked
                    ></pi-radio-input>
                    <pi-radio-input
                    name="ageRange"
                    label="25-29"
                    value="25_29"
                    ></pi-radio-input>
                    <pi-radio-input
                    name="ageRange"
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
                <label>Enable Alerts</label>
                <div>
                    <pi-toggle-switch
                    name="enableAlerts"
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
    
</pi-form>`