import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const sanity = process.env.SANITY_ID
export default defineConfig({
  name: 'default',
  title: 'template_test',

  projectId: `${sanity}`,
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
