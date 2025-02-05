export const basicSwitchSample = `<pi-toggle-switch 
@toggleChanged="\${(e) => this.handleInput(e.detail.value, 0)}"
></pi-toggle-switch>`

export const presetSwitchSample = `<pi-toggle-switch 
?value="\${true}"
@toggleChanged="\${(e) => this.handleInput(e.detail.value, 1)}"
></pi-toggle-switch>`