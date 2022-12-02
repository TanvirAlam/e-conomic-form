import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'eform',
    title: 'eform',
    type: 'document',
    fields: [
        defineField({
            name: 'sortNum',
            title: 'Arrangement Number',
            description: "1 to 5",
            type: "number",
            validation: (Rule) => Rule.min(1).max(6)
        }),
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string'
        }),
        defineField({
            name: 'inputOptions',
            title: 'Input Options',
            type: 'string',
            options: {
                list: [
                    { title: 'Text', value: 'text' },
                    { title: 'Phone', value: 'number' },
                    { title: 'Email', value: 'email' },
                    { title: 'Elinks', value: 'link' },
                    { title: 'Checkbox must', value: 'cMust' },
                    { title: 'Checkbox options', value: 'cNormal' },
                ],
            },
        }),
        defineField({
            name: 'error',
            title: 'Error Message',
            type: 'string',
        }),
        defineField({
            name: 'toolkit',
            title: 'Toolkit Message',
            type: 'string',
        }),
        defineField({
            name: 'openLinkText',
            title: 'Open Link Text',
            type: 'string',
        }),
        defineField({
            name: 'openLinkName',
            title: 'Open Link Name',
            type: 'string',
        }),
        defineField({
            name: 'openLinkUrl',
            title: 'Open Link Url',
            type: 'string',
        }),
        defineField({
            name: 'checkboxLinkText',
            title: 'Checkbox Link Text',
            type: 'string',
        }),
        defineField({
            name: 'checkboxLinkError',
            title: 'Checkbox Link Error Message',
            type: 'string',
        }),
        defineField({
            name: 'checkboxLinkName1',
            title: 'Open Link Name 1',
            type: 'string',
        }),
        defineField({
            name: 'checkboxLinkName1url',
            title: 'Open Link Name 1 Url',
            type: 'string',
        }),
        defineField({
            name: 'checkboxLinkName2',
            title: 'Open Link Name 2',
            type: 'string',
        }),
        defineField({
            name: 'checkboxLinkName2url',
            title: 'Open Link Name 2 url',
            type: 'string',
        }),
        defineField({
            name: 'checkboxNewsletterText',
            title: 'Checkbox Newsletter Text',
            type: 'string',
        }),
        defineField({
            name: 'checkboxNewsletterLinkName',
            title: 'Checkbox Newsletter Link Name',
            type: 'string',
        }),
        defineField({
            name: 'checkboxNewsletterLinkUrl',
            title: 'Checkbox Newsletter Link Url',
            type: 'string',
        }),
        defineField({
            name: 'newletter',
            title: 'Newsletter',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        }),
    ]
})