import { html } from "lit";
import { register } from "../../registerWebComp";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { ifDefined } from "lit/directives/if-defined.js";
import '../../components/icons/index'
import { PiGrid } from "../../components/grid/components/gridContainer";
import { PiGridColumn } from "../../components/grid/components/gridColumn";
import { PiGridRow } from "../../components/grid/components/gridRow";

register('pi-grid', PiGrid);
register('pi-col', PiGridColumn);
register('pi-row', PiGridRow);

const generateDemoGridCell = (cols) => {
    return `<pi-col cols=${cols} style="background-color: #eee; text-align: center;padding: 0.5rem 0;">${cols}</pi-col>
            `
}

export default {
    title: 'Components/Grid',
    component: 'pi-grid',
    tags: ['autodocs'],
    argTypes: {
        gutter: {
            control: 'select',
            name: 'gutter (optional)',
            description: 'Change the gutter size for the grid',
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            }
        },
    },
    args: {
        gutter: 'md'
    }
}

const Template = ({ gutter }) => html`
    <pi-grid
    gutter=${ifDefined(gutter != '' ? gutter : undefined)}
    >
        <pi-row>
            ${Array.from({ length: 12 }, (_, i) => unsafeHTML(generateDemoGridCell(1)))}
        </pi-row>
        <pi-row>
            ${Array.from({ length: 6 }, (_, i) => unsafeHTML(generateDemoGridCell(2)))}
        </pi-row>
        <pi-row>
            ${Array.from({ length: 3 }, (_, i) => unsafeHTML(generateDemoGridCell(4)))}
        </pi-row>
        <pi-row>
            ${Array.from({ length: 1 }, (_, i) => unsafeHTML(generateDemoGridCell(12)))}
        </pi-row>
        <pi-row>
            ${Array.from({ length: 1 }, (_, i) => unsafeHTML(generateDemoGridCell(10)))}
        </pi-row>
        <pi-row>
            ${Array.from({ length: 1 }, (_, i) => unsafeHTML(generateDemoGridCell(8)))}
        </pi-row>
        <pi-row>
            ${Array.from({ length: 1 }, (_, i) => unsafeHTML(generateDemoGridCell(6)))}
        </pi-row>
        <pi-row>
            ${Array.from({ length: 1 }, (_, i) => unsafeHTML(generateDemoGridCell(4)))}
        </pi-row>
        <pi-row>
            ${Array.from({ length: 1 }, (_, i) => unsafeHTML(generateDemoGridCell(2)))}
        </pi-row>
    </pi-grid>
`;

const TemplateBrief = ({ gutter }) => html`
    <pi-grid
    gutter=${ifDefined(gutter != '' ? gutter : undefined)}
    >
        <pi-row>
            ${Array.from({ length: 3 }, (_, i) => unsafeHTML(generateDemoGridCell(4)))}
        </pi-row>
        <pi-row>
            ${Array.from({ length: 3 }, (_, i) => unsafeHTML(generateDemoGridCell(4)))}
        </pi-row>
    </pi-grid>
`;

export const Default = Template.bind();
Default.args = {}

export const SmallGutter = TemplateBrief.bind();
SmallGutter.args = {
    gutter: 'sm'
}

export const LargeGutter = TemplateBrief.bind();
LargeGutter.args = {
    gutter: 'lg'
}
