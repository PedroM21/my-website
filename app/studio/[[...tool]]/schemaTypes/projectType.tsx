import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "photo",
      type: "image",
    }),
    defineField({
      name: "tags",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
