import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import CodeInput from '@/sanity/components/CodeInput'
import {youTubeType} from '../schemaTypes/youTubeType'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
        defineArrayMember({
          type: 'youTube',
          title: 'YouTube Embed',
        }),
        defineArrayMember({
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'customSize',
              type: 'object',
              title: 'Custom Size',
              fields: [
                { name: 'width', type: 'number', title: 'Width' },
                { name: 'height', type: 'number', title: 'Height' },
              ],
            },
          ],
        }),

        defineArrayMember({
          name: 'code',
          type: 'object',
          title: 'Code Block',
          fields: [
            {
              name: 'filename',
              type: 'string',
              title: 'Filename',
            },
            {
              name: 'language',
              type: 'string',
              title: 'Language',
              initialValue: 'text',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'JavaScript', value: 'javascript' },
                  { title: 'TypeScript', value: 'typescript' },
                  { title: 'Python', value: 'python' },
                  { title: 'Bash', value: 'bash' },
                  { title: 'JSON', value: 'json' },
                  { title: 'HTML', value: 'html' },
                  { title: 'CSS', value: 'css' },
                  { title: 'YAML', value: 'yaml' },
                ],
              },
            },
            {
              name: 'code',
              type: 'text',
              title: 'Code',
              rows: 10,
              validation: Rule => Rule.required(),
            },
          ],
          preview: {
            select: {
              language: 'language',
              code: 'code',
              filename: 'filename',
            },
            prepare(selection) {
              const { language, code, filename } = selection;
              return {
                title: filename || language || 'Code Block',
                subtitle: code ? code.slice(0, 50) + '...' : 'No code',
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the post',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
