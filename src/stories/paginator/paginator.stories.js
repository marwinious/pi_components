import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { action } from '@storybook/addon-actions'
import '../../components/icons/index'
import { PiPaginator } from "../../components/paginators/components/paginator";

export default {
    title: 'Components/Paginator',
    component: 'pi-paginator',
    tags: ['autodocs'],
    argTypes: {
        rows: { 
            control: 'number', 
            name: 'rows',
            description: 'Rows per page',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        totalRecords: { 
            control: 'number', 
            name: 'totalRecords',
            description: 'Total number of rows/records in dataset',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        useStartEndLinks: { 
            control: 'boolean', 
            name: 'useStartEndLinks',
            description: 'Show start/end jump link buttons',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        useNextPrevLinks: { 
            control: 'boolean', 
            name: 'useNextPrevLinks',
            description: 'Show next/prev page link buttons',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
        useNumericLinks: { 
            control: 'boolean', 
            name: 'useNumericLinks',
            description: 'Show numbered page link buttons',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: ''}
            } 
        },
    },
    args: {
        rows: 10,
        totalRecords: 100,
        useStartEndLinks: true,
        useNextPrevLinks: true,
        useNumericLinks: true
    }
}

const Template = ({ rows, totalRecords, useStartEndLinks, useNextPrevLinks, useNumericLinks }) => html`
    <pi-paginator 
    rows=${rows}
    totalRecords=${totalRecords}
    @navClick="${(e) => action('Pager nav clicked')(e.detail)}"
    .useStartEndLinks=${useStartEndLinks} 
    .useNextPrevLinks=${useNextPrevLinks}
    .useNumericLinks=${useNumericLinks}
    ></pi-paginator>
`;

export const Default = Template.bind();
Default.args = {}

export const NumberOnly = Template.bind();
NumberOnly.args = {
    useStartEndLinks: false,
    useNextPrevLinks: false
}

export const NextPrevOnly = Template.bind();
NextPrevOnly.args = {
    useStartEndLinks: false,
    useNextPrevLinks: true,
    useNumericLinks: false
}

export const StartEndOnly = Template.bind();
StartEndOnly.args = {
    useStartEndLinks: true,
    useNextPrevLinks: false,
    useNumericLinks: false
}