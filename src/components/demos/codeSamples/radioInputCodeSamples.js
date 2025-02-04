export const basicRadioInputSample = `<pi-radio-input
name="ageRange"
label="18-24"
value="18_24"
@change="\${(e) => this.child[0].handleCallbackData(e.detail)}"
></pi-radio-input>

<pi-radio-input
name="ageRange"
label="25-29"
value="25_29"
@change="\${(e) => this.child[0].handleCallbackData(e.detail)}"
></pi-radio-input>

<pi-radio-input
name="ageRange"
label="30-35"
value="30_35"
@change="\${(e) => this.child[0].handleCallbackData(e.detail)}"
></pi-radio-input>`

export const preselectedRadioInputSample = `<pi-radio-input
name="ageRange2"
label="18-24"
value="18_24"
@change="\${(e) => this.child[1].handleCallbackData(e.detail)}"
></pi-radio-input>

<pi-radio-input
name="ageRange2"
label="25-29"
value="25_29"
checked
@change="\${(e) => this.child[1].handleCallbackData(e.detail)}"
></pi-radio-input>

<pi-radio-input
name="ageRange2"
label="30-35"
value="30_35"
@change="\${(e) => this.child[1].handleCallbackData(e.detail)}"
></pi-radio-input>`