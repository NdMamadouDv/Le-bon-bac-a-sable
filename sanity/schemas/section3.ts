export default {
  name: 'section3',
  type: 'document',
  title: 'Section 3',
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
      name: 'h3_4',
      title: 'H3_4',
      type: 'string',
    },
    {
      name: 'h3_5',
      title: 'H3_5',
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
    {name: 'text_4', title: 'Text_4', type: 'text'},
    {name: 'text_5', title: 'Text_5', type: 'text'},
    {
      name: 'section3image',
      title: 'section3Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'section3image2',
      title: 'section3Image2',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'section3image3',
      title: 'section3Image3',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'section3image4',
      title: 'section3Image4',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'section3image5',
      title: 'section3Image5',
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
