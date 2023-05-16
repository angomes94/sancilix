
export default {
    name: "team",
    type: "document",
    title: "Team",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name",
      },
      {
        name: "member1",
        type: "image",
        title: "Member 1",
        options: {
          hotspot: true,
        },
      },
      {
        name: "member2",
        type: "image",
        title: "Member 2",
        options: {
          hotspot: true,
        },
      },
    ],
  };
  