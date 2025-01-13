
  //Since the file name contains (.d), it means the types are globbaly available, so we do not need to export. ;)   Lec:57
 // ***********************************************************************************************************
  //  extracted data type of 1st schema, which is (DevExperience) inside (DevExperience.ts) from sanity repo. 
 // ***********************************************************************************************************
   type sanityWorkExperience = {         
    _id: string
    _type: 'devExperience'
    _createdAt: string
    _updatedAt: string
    _rev: string
    jobTitle: string
    company: string
    startDate: string
    endDate?: string
  }
  // *********************************************************************************************
  // extracted data type of 2nd schema, which is (project) inside (project.ts)  from sanity repo.
  // *********************************************************************************************
   type sanityProject = {  
    _id: string;
    _type: "project";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    company: string;
    slug: string;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    dateAccomplished: string;
    content: Array<RawTextContent| RawImageContent>;  // An array of (RawTextContent) and (RawImageContent) both are defined below.
    stack: Array<string>;   // An array of strings
  };


// The (content) field includes two main parts, which are "text content" and "image content", 
//so we created an interface for each of them for separation and organizing purpose. u must watch the lectures
// **********************************************************
// Defining RawTextContent interface
// **********************************************************
interface RawTextContent    
  {
    children: Array<{
      marks?: Array<string>;
      text: string;
      _type: "span";
      _key: string;
    }>;
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } 
// **********************************************************
// Defining RawImageContent interface
// **********************************************************
  interface RawImageContent {
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }

  // *********************************************************************************************************
  // Define the data type of our processedProject (how should our proccessedProject data type look like ;)
  // *********************************************************************************************************
  interface ProcessedProject {   
    name: string;      // title of the project
    company: string;
    dateAccomplished: string;
    stack: string[];  // An array of strings, which shows the different kinds of the technologies used for each project ;)
    projectImageUrl: string;
    slug: string;    // end of the URL, where we can find the details of the selected project ;)
    content: Array<ProcessedTextContent | ProcessedImageContent>; // An array of two elements, which are (ProcessedTextContent) and (ProcessedImageContent) ;)
  }

  interface ProcessedTextContent {
    type: 'text';
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    textToRender: string;
  }

  interface ProcessedImageContent {
    type: 'image';
    url: string;
  }



  // *********************************************************************************************
  // extracted data type of 3rd schema, which is (skills) inside (skill.ts)  from sanity repo.
  // *********************************************************************************************
  // type sanitySkills = {
  //   _id: string
  //   _type: 'skills'
  //   _createdAt: string
  //   _updatedAt: string
  //   _rev: string
  //   skillsList?: Array<{
  //     name?: string
  //     iconClass?: string
  //     _key: string
  //   }>
  // }

  interface sanitySkill { // in the course this name is "skills" not "sanitySkills" ;)
    name: string
      iconClass: string
      _key: string
  }