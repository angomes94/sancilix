

export default {
    name: "slider",
    type: "document",
    title: "Home Page Slider",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Slider Title",
      },
      {
        name: "slides",
        type: "array",
        title: "Slides",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "image",
                type: "image",
                title: "Image",
                options: {
                  hotspot: true,
                },
              },
              {
                name: "caption",
                type: "text",
                title: "Caption",
              },
            ],
          },
        ],
      },
    ],
  };
  