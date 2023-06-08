export default {
  name: 'section2',
  type: 'document',
  title: 'Section 2',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'titre de la section',
      type: 'string',
    },

    {
      name: 'h2',
      title: 'H2',
      type: 'string',
    },
    {
      name: 'h3_1',
      title: 'H3_1',
      type: 'string',
    },
    {
      name: 'h3_2',
      title: 'H3_2',
      type: 'string',
    },
    {
      name: 'h3_3',
      title: 'H3_3',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'text_1',
      title: 'Text_1',
      type: 'text',
    },

    {name: 'text_2', title: 'Text_2', type: 'text'},

    {name: 'text_3', title: 'Text_3', type: 'text'},
    {
      name: 'section2image',
      title: 'section2Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'section2image2',
      title: 'section2Image2',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'section2image3',
      title: 'section2Image3',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'CTA',
      title: 'CTA',
      type: 'array',
      of: [{type: 'reference', to: {type: 'CTA'}}],
    },
  ],
}
