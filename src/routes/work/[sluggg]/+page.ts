import type { PageLoad } from "./$types";
import sanityClient, { processProjectEntries } from "$lib/utils/sanity";  // function to fetch data from sanity
import { error } from "@sveltejs/kit";


export const load: PageLoad = async ({params}) => {
    const { sluggg } = params;    // sluggg, is the name of our dynamic route ;) so we need to equilized to the "params" ;)

   const rawProjects: sanityProject[] = await sanityClient.fetch(`*[_type == "project" && slug == $sluggg]` , {sluggg});


   if (rawProjects.length !== 1) {        //If no project or multiple projects are found, throws a 404 error.. Ensures exactly only one project matches the slug..                  
    throw error(404, "Project not found 😞");
   }

   const project = processProjectEntries(rawProjects[0])
   return {
    project
   }
} 