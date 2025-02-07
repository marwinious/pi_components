import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiForm } from "../../components/forms/form";
import { PiFormGroup } from "../../components/forms/formGroup";
import { PiGrid } from "../../components/grid/components/gridContainer";
import { PiGridColumn } from "../../components/grid/components/gridColumn";
import { PiGridRow } from "../../components/grid/components/gridRow";
import { PiTextInput } from "../../main";
import { PiTextAreaInput } from "../../main";
import { PiSelectInput } from "../../main";
import { PiCheckboxInput } from "../../main";
import { PiRadioInput } from "../../main";
import { PiToggleSwitch } from "../../main";
import { PiButton } from "../../main";

export default {
    title: 'Components/Forms',
    component: 'pi-form',
    tags: ['autodocs'],
    argTypes: {
        slotContent: { 
            control: 'text', 
            name: 'content slot',
            description: 'Main content area',
            defaultValue: 'The contents of your card will show here via the default slot.',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
    },
    args: {
        
    }
}

const Template = ({ slotContent, headerSlot, footerSlot }) => html`
    <pi-form>
    
    </pi-form>
`;

export const Default = Template.bind();
Default.args = {
    
}
