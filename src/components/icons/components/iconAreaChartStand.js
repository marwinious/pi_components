import { LitElement, css, html } from 'lit'

const iconData = {
    iconLabel: 'pi-icon-area-chart-stand',
    className: 'PiIconAreaChartStand'
}

export class PiIconAreaChartStand extends LitElement {

    static get properties() {
        return {
            pathData: {
                type: String
            }
        }
    }

    constructor() {
        super()
        this.pathData = "M19.902 24h-2.627l-3.42-4h2.633l3.414 4zm-9.773-4l-3.42 4h-2.627l3.414-4h2.633zm2.871 4h-2v-4h2v4zm9-8v-14h-9v-2h-2v2h-9v14h-1v2h22v-2h-1zm-2 0h-16v-12h16v12zm-14-7.608v-1.392l2 2 2.5-3 4.5 3.939 3-1.961v1.218l-3.088 1.995-4.3-3.764-2.545 3.054-2.067-2.089zm9.455 3.639l-.634.409-.567-.497-3.529-3.089-1.889 2.267-.705.846-.774-.783-1.357-1.371v4.187h12v-3.613l-2.545 1.644z"
    }

    render() {
        return html`
            <pi-icon-base pathData=${this.pathData}></pi-icon-base>
        `;
    }

    static styles = [
        css`
            
        `
    ]
}

if(!customElements.get(iconData.iconLabel)) { customElements.define(iconData.iconLabel, PiIconAreaChartStand); }