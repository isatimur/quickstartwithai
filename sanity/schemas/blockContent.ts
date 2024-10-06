import { defineType } from "sanity";

export default defineType({
    name: "blockContent",
    title: "Block Content",
    type: "array",
    of: [
        {
            type: "block",
            // Optionally, customize how portable text editor appears in Sanity Studio
            // styles: [{ title: 'Normal', value: 'normal' }, { title: 'Heading', value: 'h2' }],
            // marks: {
            //   decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
            //   annotations: [
            //     {
            //       name: 'link',
            //       type: 'object',
            //       title: 'External Link',
            //       fields: [
            //         {
            //           name: 'href',
            //           type: 'url',
            //           title: 'URL',
            //         },
            //       ],
            //     },
            //   ],
            // },
        },
        {
            type: "image",
            fields: [
                {
                    name: "caption",
                    type: "string",
                    title: "Caption",
                    options: { isHighlighted: true },
                },
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                    options: { isHighlighted: true },
                },
            ],
        },
        {
            type: "code",
            title: "Code Block",
            options: {
                withFilename: true,
                languageAlternatives: [
                    { title: "JavaScript", value: "javascript" },
                    { title: "TypeScript", value: "typescript" },
                    { title: "Python", value: "python" },
                    // Add more languages as needed
                ],
            },
        },
    ],
});