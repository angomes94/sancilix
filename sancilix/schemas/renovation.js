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
        name: 'imagePairs',
        title: 'Image Pairs',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'before',
                title: 'Before',
                type: 'image',
                
              },
              {
                name: 'after',
                title: 'After',
                type: 'image',
                
              },
            ],
          },
        ],
      },
    ],
  };