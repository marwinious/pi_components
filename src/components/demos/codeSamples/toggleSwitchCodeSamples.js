export const basicSwitchSample = `<pi-toggle-switch 
name="basic_switch"
@change="\${(e) => this.child[0].handleCallbackData(e.detail)}"
></pi-toggle-switch>`

export const presetSwitchSample = `<pi-toggle-switch 
name="preset_switch"
checked
@change="\${(e) => this.child[1].handleCallbackData(e.detail)}"
></pi-toggle-switch>`