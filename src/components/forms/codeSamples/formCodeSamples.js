export const basicFormSample = `<pi-form
@formSubmitted="\${(e) => this.handleInput(e.detail, 0)}"
@formDataUpdated="\${(e) => this.handleInput(e.detail.formData, 0)}"
>
    <pi-text-input name="firstName" label="First Name"></pi-text-input>
</pi-form>`

export const groupFormSample = `<pi-form
@formSubmitted="${(e) => this.handleInput(e.detail, 1)}"
@formDataUpdated="${(e) => this.handleInput(e.detail.formData, 1)}"
>
    <pi-form-group name="person">                                    
        <pi-text-input name="firstName" label="First Name"></pi-text-input>
        <pi-text-input name="lastName" label="Last Name"></pi-text-input>
    </pi-form-group>

    <div>
        <pi-text-input name="house" label="Duplex"></pi-text-input>
    </div>

    <pi-text-input name="car" label="Car"></pi-text-input>
</pi-form>`