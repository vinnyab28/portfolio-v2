// Define the types for the profile
interface Profile {
    name: string;
    title: string;
    summary: string;
    profilePicture: string;
    links: Link[];
}

interface Link {
    logo: string;
    url: string;
    title?: string;
}

interface Skills {
    categoryName: string;
    skills: Skill[],
    bgColor: String;
    pillBgColor: String;
}

// Define the types for skills
interface Skill {
    name: string;
    logo?: string;
}

// Define the types for experience
interface Experience {
    name: string;
    position: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
    location: string;
    logo: string;
    summary: string[];
    themeColor: string;
}

// Define the types for education
interface Education {
    name: string;
    degree: string;
    course: string;
    startDate: string;
    endDate: string;
    currentlyStudying: boolean;
    location: string;
    logo: string;
    summary: string[];
}

// Define the types for recommendations
interface Recommendation {
    name: string;
    position: string;
    organization: string;
    url: string;
}

// Define the types for certifications
interface Certification {
    name: string;
    url: string;
    provider: string;
    completionDate: string;
}

// Define the types for projects
interface Project {
    title: string,
    description: string,
    technologies: string[],
    image: string,
    link: string,
    source: string,
    headerImage: string,
}

// Define the main structure that includes all the components
export default interface UserProfile {
    skills: Skills[];
    experience: Experience[];
    education: Education[];
    recommendations: Recommendation[];
    certifications: Certification[];
    projects: Project[]
}
