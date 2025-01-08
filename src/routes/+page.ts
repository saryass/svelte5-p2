import type { PageLoad } from "./$types";
import sanityClient from "$lib/utils/sanity";
import type { DevExperience } from "$lib/types/sanity";

export const load: PageLoad = async () => {
    const workExperience: DevExperience[] = await sanityClient.fetch('*[_type == "devExperience"] | order(startDate desc)');

    return {
        workExperience
    }
}