export default {
  name: 'ownerInfo',
  type: 'document',
  title: 'OwnerInfo',
  fields: [
    {
      name: 'owner',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'ownerPic',
      title: 'BwnerPic',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'titre',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    },
  ],
}
