import { defineField, defineType } from "sanity";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { categoryType } from "./categoryType";

const youTubeType = defineType({
  name: "youTube",
  title: "YouTube video",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "Video URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
});
export const schemaTypes = [postType, authorType, categoryType, youTubeType];
