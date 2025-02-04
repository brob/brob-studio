
export const schemaTypes = [
    {
        name: 'newsletter',
        title: 'Newsletter',
        type: 'document',
        fields: [
            {
                name: 'title',
                title: 'Subject Line',
                type: 'string'
            },
            {
                title: 'Opening',
                name: 'opening',
                type: 'array',
                of: [{type: 'block'}]
            },
            {
                title: 'Bookmarks',
                name: 'bookmarks',
                type: 'array',
                of: [
                    {
                        type: 'reference',
                        to: [
                            {type: 'bookmark'},
                        ],
                    },
                    
                ],
            },
        ]
    },
    {  
        name: 'bookmark',
        title: 'Bookmarks',
        type: 'document',
        fields: [
          {
            name: 'pageTitle',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'url',
            title: 'URL',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          },
          {
            title: 'Save Date',
            name: 'time',
            type: 'datetime',
            options: {
              dateFormat: 'YYYY-MM-DD',
              timeFormat: 'HH:mm',
              timeStep: '15',
              calendarTodayLabel: 'today',
            },
          },
          
        ]
      },
    
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
                name: 'canonical',
                type: 'url',
                title: 'Canonical URL',
                validation: Rule => Rule.uri()
                
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
