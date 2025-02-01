export const basicTextAreaSample = `<pi-form
@formSubmitted="\${(e) => this.handleInput(e.detail, 0)}"
@formDataUpdated="\${(e) => this.handleInput(e.detail.formData, 0)}"
>
    <pi-text-input name="firstName" label="First Name"></pi-text-input>
</pi-form>`