
import { deskTool } from 'sanity/desk';
import {defineConfig} from 'sanity'
import { schemaTypes } from '@/schemas';


const sanity = process.env.NEXT_PUBLIC_SANITYID
const config = defineConfig({
    name: 'default',
    title: 'template_test',
    projectId: `${sanity}`,
    dataset: 'production',
    // basePath:"/admin",
    apiVersion:"2023-06-06",
    plugins: [deskTool()],
    schema: {
      types: schemaTypes,
    },
})


export default config