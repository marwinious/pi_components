export const basicRadioInputSample = `<div>
    <pi-radio-input
    name="ageRange"
    label="18-24"
    value="18_24"
    @change="\${(e) => this.handleInput(e.detail, 0)}"
    ></pi-radio-input>
    <pi-radio-input
    name="ageRange"
    label="25-29"
    value="25_29"
    @change="\${(e) => this.handleInput(e.detail, 0)}"
    ></pi-radio-input>
    <pi-radio-input
    name="ageRange"
    label="30-35"
    value="30_35"
    @change="\${(e) => this.handleInput(e.detail, 0)}"
    ></pi-radio-input>
</div>`

export const preselectedRadioInputSample = `<div>
    <pi-radio-input
    name="ageRange"
    label="18-24"
    value="18_24"
    @change="\${(e) => this.handleInput(e.detail, 0)}"
    ></pi-radio-input>
    <pi-radio-input
    name="ageRange"
    label="25-29"
    value="25_29"
    checked
    @change="\${(e) => this.handleInput(e.detail, 0)}"
    ></pi-radio-input>
    <pi-radio-input
    name="ageRange"
    label="30-35"
    value="30_35"
    @change="\${(e) => this.handleInput(e.detail, 0)}"
    ></pi-radio-input>
</div>`