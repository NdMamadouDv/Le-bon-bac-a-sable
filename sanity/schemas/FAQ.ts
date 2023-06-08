export default {
  name: 'faq',
  type: 'document',
  title: 'FAQ',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'titre de la section',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'FAQImage',
      title: 'FAQImage',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'question1',
      title: 'Question1',
      type: 'text',
    },
    {
      name: 'question2',
      title: 'Question2',
      type: 'text',
    },
    {
      name: 'question3',
      title: 'Question3',
      type: 'text',
    },
    {
      name: 'question4',
      title: 'Question4',
      type: 'text',
    },
    {
      name: 'question5',
      title: 'Question5',
      type: 'text',
    },
    {
      name: 'reponse1',
      title: 'Reponse1',
      type: 'text',
    },
    {
      name: 'reponse2',
      title: 'Reponse2',
      type: 'text',
    },
    {
      name: 'reponse3',
      title: 'Reponse3',
      type: 'text',
    },
    {
      name: 'reponse4',
      title: 'Reponse4',
      type: 'text',
    },
    {
      name: 'reponse5',
      title: 'Reponse5',
      type: 'text',
    },
    {
      name: 'CTA',
      title: 'CTA',
      type: 'array',
      of: [{type: 'reference', to: {type: 'CTA'}}],
    },
  ],
}
