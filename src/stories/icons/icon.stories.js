import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { PiIconHandler } from "../../components/icons/base/iconHandler";
import iconRegistry from '../../components/icons/base/iconRegistry.json'

export default {
    title: 'Components/Icons',
    component: 'pi-icon-handler',
    tags: ['autodocs'],
    argTypes: {
        iconString: {
            control: 'text',
            name: 'icon string',
            description: 'String label for icon',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            }
        },
    },
    args: {
        iconString: 'alert-triangle-dark'
    }
}

const Template = ({ iconString }) => html`
    <p>Sample icon (customizable in Controls)</p>
    <pi-icon-handler
    icon="${iconString}"
    style="width: 50px;height: 50px;"
    ></pi-icon-handler>

    <p>Full icon registry</p>

    <div style="display: block;">
        ${iconRegistry.map((item) => html`
            <div style="display: flex;">
                <div style="width: 10%;">
                    <pi-icon-handler
                    icon="${item.handlerCode}"
                    style="width: 25px;height: 25px;"
                    ></pi-icon-handler>
                </div>
                <div style="width: 90%;">
                    ${`<pi-icon-handler icon=\"${item.handlerCode}\"></pi-icon-handler>`}
                </div>
            </div>
        `)}
    </div>
`;

export const Default = Template.bind();
Default.args = {}