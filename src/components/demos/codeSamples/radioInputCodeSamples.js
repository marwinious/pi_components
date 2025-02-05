export const basicRadioInputSample = `<pi-radio-input-group 
name="ageRange1"
@change="\${(e) => this.child[0].handleCallbackData(e.detail)}"
>
    <pi-radio-input
    label="18-24"
    value="18_24"
    ></pi-radio-input>
    <pi-radio-input
    label="25-29"
    value="25_29"
    ></pi-radio-input>
    <pi-radio-input
    label="30-35"
    value="30_35"
    ></pi-radio-input>
</pi-radio-input-group>`

export const preselectedRadioInputSample = `<pi-radio-input-group
name="ageRange2"
@change="\${(e) => this.child[1].handleCallbackData(e.detail)}"
>
    <pi-radio-input
    label="18-24"
    value="18_24"
    ></pi-radio-input>
    <pi-radio-input
    label="25-29"
    value="25_29"
    checked
    ></pi-radio-input>
    <pi-radio-input
    label="30-35"
    value="30_35"
    ></pi-radio-input>
</pi-radio-input-group>`

export const labeledRadioInputSample = `<pi-radio-input-group 
label="Age Range"
name="ageRange3"
@change="\${(e) => this.child[2].handleCallbackData(e.detail)}"
>
    <pi-radio-input
    label="18-24"
    value="18_24"
    ></pi-radio-input>
    <pi-radio-input
    label="25-29"
    value="25_29"
    ></pi-radio-input>
    <pi-radio-input
    label="30-35"
    value="30_35"
    ></pi-radio-input>
</pi-radio-input-group>`