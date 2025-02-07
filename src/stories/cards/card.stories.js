import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiCard } from "../../components/cards/components/card";

const headerSample = html`
<div slot="header" style="background-color: #eee;">
    This is the header area of a card. By default, it has no padding and is intended to be full filled with a background color or image. Text will work too of course. If using an image without text, add the <code>slot="header"</code> attritbute directly to the img tag for better control. The background-color on this demo was added as an example and is not there by default.
</div>
`

console.log(headerSample);


export default {
    title: 'Components/Card',
    component: 'pi-card',
    tags: ['autodocs'],
    argTypes: {
        slotContent: { 
            control: 'text', 
            name: 'content slot',
            description: 'Main content area',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        headerSlot: { 
            control: 'text', 
            name: 'header slot (optional)',
            description: 'Unstyled header slot',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        titleSlot: { 
            control: 'text', 
            name: 'title slot (optional)',
            description: 'Title for card',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        }
    }
}

const Template = ({ slotContent, headerSlot }) => html`
    <pi-card>

        <div
        slot="header"
        >${headerSlot}</div>

        <slot>${slotContent}</slot>

    </pi-card>
`;

const TemplateTitle = ({ slotContent, titleSlot }) => html`
    <pi-card>

        <div
        slot="title"
        >${titleSlot}</div>

        <slot>${slotContent}</slot>


    </pi-card>
`;

export const Default = Template.bind();
Default.args = {
    slotContent: 'The contents of your card will show here via the default slot.',
}

export const Header = Template.bind();
Header.args = {
    slotContent: 'The contents of your card will show here via the default slot.',
    headerSlot: headerSample
}

export const Title = TemplateTitle.bind();
Title.args = {
    slotContent: 'The contents of your card will show here via the default slot.',
    titleSlot: 'Title for my card'
}