// configuring/creating/setting up a sanity client:

import {createClient, type ClientConfig} from '@sanity/client'

const config: ClientConfig = {
  projectId: '5vf9qrzx',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2025-01-07', // use current date (YYYY-MM-DD) to target the latest API version
}
const sanityClient = createClient(config);
export default sanityClient;