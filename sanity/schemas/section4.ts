export default {
  name: 'section4',
  type: 'document',
  title: 'Section 4',
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
      name: 'section4image',
      title: 'section1Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'section4image2',
      title: 'section1Image2',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'section4image3',
      title: 'section1Image3',
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
