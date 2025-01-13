// configuring/creating/setting up a sanity client:

import {createClient, type ClientConfig} from '@sanity/client';
import imageUrlbuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: '5vf9qrzx',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2025-01-07', // use current date (YYYY-MM-DD) to target the latest API version
}
const sanityClient = createClient(config);
export default sanityClient;



export function processProjectEntries(rawProject: sanityProject) {
  // -------------------------------------------------------------------------
  // processing the independent image field of the (project.ts) from sanity repo) i mean we have two images, one as a independent field, the other inside the "content field"
  const builder = imageUrlbuilder(sanityClient);
  const projectImageUrl = builder.image(rawProject.image).url();
  // -------------------------------------------------------------------------
  const ProcessedProject: ProcessedProject = {
    name: rawProject.name,
    company: rawProject.company,
    dateAccomplished: rawProject.dateAccomplished,
    stack: rawProject.stack, // an array of string
    slug: rawProject.slug,
    projectImageUrl,
    content: rawProject.content.map(processProjectContent),  // this  content process is done in below "processProjectContent" function
  };

  return ProcessedProject;
 }


// -------------------------------------------------------------------------
// function used for processing  (content) field of the (sanityProject) schema ;)
// -------------------------------------------------------------------------
function processProjectContent (content: RawTextContent | RawImageContent){
  if(content._type === 'block') {
    //processing text content/RawTextContent (processing the text of the text editor {type: 'block'},which is a part of the content field array in (project.ts) from sanity repo)
    const ProcessedTextContent: ProcessedTextContent = {
      type: 'text',
      style: content.style,
      textToRender: content.children.map(x => x.text).join("\n"),
    };
    return ProcessedTextContent;
  } else {
    //processing image content/RawImageContent (processing image {type: 'image'} which is a part of the content field array in (project.ts) from sanity repo)
    const builder = imageUrlbuilder(sanityClient);
    const projectImageUrl = builder.image(content).url();
    
    const processedImage: ProcessedImageContent = {
      type: "image",
      url: projectImageUrl,
    };
    return processedImage;
  }
}