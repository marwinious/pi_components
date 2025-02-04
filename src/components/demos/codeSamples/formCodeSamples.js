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
@formSubmitted="${(e) => this.child[0].handleCallbackData(e.detail)}"
@formDataUpdated="${(e) => this.child[0].handleCallbackData(e.detail)}"
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
    <pi-button slot="submitButton" @click="${(e) => this.submitFormById(e, 'pi-form-1')}">Submit</pi-button>
</pi-form>

submitFormById(e, formId) {
    this.shadowRoot.querySelector(\`pi-form[id='\${formId}']\`)._handleSubmit(e)
}`

export const groupFormSample = `<pi-form
@formSubmitted="${(e) => this.child[2].handleCallbackData(e.detail)}"
@formDataUpdated="${(e) => this.child[2].handleCallbackData(e.detail)}"
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