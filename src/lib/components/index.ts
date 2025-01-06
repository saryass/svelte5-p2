export {default as HeroSection} from './sections/HeroSection.svelte'; // REMEMBER: "the 1st letter of the name you set for {default as Name} must be Capital ;)
export { default as Button } from "./Button.svelte";
export { default as SectionHeadline } from "./SectionHeadline.svelte";
export { default as AboutMeSection } from "./sections/AboutMeSection.svelte";
export { default as ExperienceTable } from "./ExperienceTable.svelte";

// ***************************************************
      //This above line does three things at once:
// ***************************************************

// 1- It imports the default export from HeroSection.svelte
// 2- It renames this default export to "HeroSection"
// 3- It re-exports it as a named export



// the error  i have  here "Cannot find module './sections/HeroSection.svelte' or its corresponding type declarations. ts(2307)"
// is solved  in the  lecture of 45. by doing "npm run check" in terminal

