import { defineType } from "sanity";

export default defineType({
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            },
        },
        {
            name: "mainImage",
            title: "Main Image",
            type: "image",
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "text",
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent", // This should match the name defined in blockContent.ts
        },
        {
            name: "author",
            title: "Author",
            type: "reference",
            to: [{ type: "author" }],
        },
        {
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
        },
    ],
});