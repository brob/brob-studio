export const schemaTypes = [
    {
        name: 'blog',
        type: 'document',
        fields: [
            {
                name: 'title',
                type: 'string',
                title: 'Title',
                validation: Rule => Rule.required()
            },
            {
                name: 'slug',
                type: 'slug',
                title: 'Slug',
                validation: Rule => Rule.required(),
                options: {
                    source: 'title',
                    maxLength: 96
                }
            },
            {
                type: 'text',
                name: 'description',
                title: 'Description',
                validation: Rule => Rule.required()

            },
            {
                name: 'categories',
                type: 'array',
                title: 'Categories',
                of: [{type: 'string'}],
            },
            {
                name: 'featuredImg',
                type: 'image',
                title: 'Main image',
            },
            {
                type: 'boolean',
                name: 'featuredLarge',
                title: 'Featured Large',
            },
            {
                name: 'publishDate',
                type: 'datetime',
                title: 'Published at',
                validation: Rule => Rule.required()
            },
            {
                name: 'body',
                type: 'array',
                title: 'Body',
                of: [
                    {
                        type: 'block'
                    },
                    {
                        type: 'code'
                    },
                    {
                        type: 'object',
                        name: 'youtube',
                        fields: [
                            {
                                name: 'videoId',
                                type: 'string',
                                title: 'YouTube video ID',
                                validation: Rule => Rule.required()
                            }
                        ]
                    },
                    {
                        type: 'image',
                        fields: [
                            {
                                name: 'caption',
                                type: 'string',
                                title: 'Caption',
                                options: {
                                    isHighlighted: true
                                }
                            },
                            {
                                name: 'alt',
                                type: 'string',
                                title: 'Alternative text',
                                options: {
                                    isHighlighted: true
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
