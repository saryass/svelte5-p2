import type { PageLoad } from "./$types";
import sanityClient, { processProjectEntries } from "$lib/utils/sanity";


export const load: PageLoad = async () => {
    // *********************************************************************************
    // fetching data for work experience section from (devExperience) schema type
    // ********************************************************************************
    const workExperience: sanityWorkExperience[] = await sanityClient.fetch('*[_type == "devExperience"] | order(startDate desc)');

    // ********************************************************************************
    // fetching data for  MY Work section from (projects) schema type
    // ******************************************************************************** 
    const rawProjects: sanityProject[] = await sanityClient.fetch('*[_type == "project"] | order(dateAccomplished desc)');

const projects = rawProjects.map(processProjectEntries) // applying the processing 

// **********************************************************
// **********************************************************
// console.log('FETCHED IMAGE BEFORE PROCESSING:')
// console.log(rawProjects[0].image);    // raw (image of the independent image field) before processing


// console.log('FETCHED IMAGE AFTER PROCESSING:')
// console.log(projects[0].projectImageUrl)  // processed (image of the independent image field) after processing which gives as the image url only, and that is what we need  only from the image in sanity ;)
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log('BEFORE TRANSFORMATION')  
// console.log (rawProjects[0].content) 


// console.log('AFTER TRANSFORMATION')
// console.log(projects[0])
// **********************************************************

    // ********************************************************************************
    // fetching data for  My skills section from (skills) schema type
    // ******************************************************************************** 
const skills: sanitySkill[] = await sanityClient.fetch('*[_type == "skills"][0].skillsList');


    return {
        workExperience,
        projects,
        skills,
    }
};