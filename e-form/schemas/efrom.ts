import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'eform',
    title: 'eform',
    type: 'document',
    fields: [
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
                    { title: 'Checkbox', value: 'checkbox' },
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
        })
    ]
})