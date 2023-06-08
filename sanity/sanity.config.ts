import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// const sanity = 
export default defineConfig({
  name: 'default',
  title: 'template_test',
  projectId: `${process.env.SANITY_STUDIO_PROJECT_ID}`,
  dataset: `${process.env.SANITY_STUDIO_DATASET}`,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
