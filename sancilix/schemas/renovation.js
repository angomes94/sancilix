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