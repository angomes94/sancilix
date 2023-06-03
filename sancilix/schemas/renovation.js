export default {
    name: 'renovation',
    title: 'Renovation',
    type: 'document',
    fields: [
      {
        name: 'namePT',
        title: 'Name PT',
        type: 'string',
        validation: (Rule) => Rule.required().max(100),
      },{
        name: 'nameEN',
        title: 'Name EN',
        type: 'string',
        validation: (Rule) => Rule.required().max(100),
      },
      {
        name: 'descriptionPT',
        title: 'Description PT',
        type: 'text',
        validation: (Rule) => Rule.required().max(500),
      },{
        name: 'descriptionEN',
        title: 'Description EN',
        type: 'text',
        validation: (Rule) => Rule.required().max(500),
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
        validation: (Rule) => Rule.required().min(1),
      },
    ],
  };