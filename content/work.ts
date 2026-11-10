export type WorkArtKey = "DoctorHunt" | "DripsWater" | "TaskFlow";
type ProjectSlug = "doctor-hunt" | "drips-water-app" | "task-flow";

type ProjectResult = {
  // TODO(copy): Replace this placeholder with a client-approved result statement.
  label: string;
  // Add only a verified numeric metric; keep this undefined otherwise.
  value?: string;
};

export type WorkProject = {
  slug: ProjectSlug;
  // TODO(copy): Replace the project name with approved copy.
  name: string;
  // TODO(copy): Replace the project client with approved copy.
  client: string;
  // TODO(verify): Replace the placeholder project year with the verified year.
  year: string;
  // TODO(verify): Replace placeholder services with the verified services.
  services: string[];
  // TODO(verify): Replace placeholder technologies with the verified stack.
  stack: string[];
  // TODO(verify): Replace the placeholder role with the verified project role.
  role: string;
  // TODO(copy): Replace the project category with approved copy.
  category: string;
  // TODO(copy): Replace this project summary with approved copy.
  summary: string;
  // TODO(copy): Replace this project challenge with approved copy.
  challenge: string;
  // TODO(copy): Replace this project approach with approved copy.
  approach: string;
  results: ProjectResult[];
  cover: WorkArtKey;
  gallery?: WorkArtKey[];
  next: ProjectSlug;
};

export const workPageContent = {
  // TODO(copy): Replace the work page introduction with approved copy.
  introduction: "A selection of ideas brought to life with ambitious teams.",
  ariaLabels: {
    // TODO(copy): Replace this accessibility label if needed.
    projects: "Selected projects",
    // TODO(copy): Replace this accessibility label if needed.
    projectDetails: "Project details",
    // TODO(copy): Replace this accessibility label if needed.
    projectStory: "Project story",
    // TODO(copy): Replace this accessibility label if needed.
    projectGallery: "Project gallery",
  },
  projectLabels: {
    // TODO(copy): Replace this metadata label if needed.
    client: "Client",
    // TODO(copy): Replace this metadata label if needed.
    services: "Services",
    // TODO(copy): Replace this metadata label if needed.
    stack: "Stack",
    // TODO(copy): Replace this metadata label if needed.
    year: "Year",
    // TODO(copy): Replace this story label if needed.
    challenge: "Challenge",
    // TODO(copy): Replace this story label if needed.
    approach: "Approach",
    // TODO(copy): Replace this story label if needed.
    results: "Results",
    // TODO(copy): Replace this navigation label if needed.
    nextProject: "Next project",
  },
} as const;

export const work: WorkProject[] = [
  {
    slug: "doctor-hunt",
    // TODO(copy): Replace this project name with the approved project name.
    name: "Doctor Hunt",
    // TODO(copy): Replace this client name with the approved client name.
    client: "Doctor Hunt",
    // TODO(verify): Replace with the verified project year.
    year: "2025",
    services: [
      // TODO(verify): Replace with a verified service.
      "Product strategy",
      // TODO(verify): Replace with a verified service.
      "Experience design",
      // TODO(verify): Replace with a verified service.
      "Development",
    ],
    stack: [
      // TODO(verify): Replace with a verified technology.
      "Next.js",
      // TODO(verify): Replace with a verified technology.
      "TypeScript",
      // TODO(verify): Replace with a verified technology.
      "Node.js",
    ],
    // TODO(verify): Replace with the verified project role.
    role: "Product strategy, design and development",
    // TODO(copy): Replace with the approved project category.
    category: "Healthcare",
    // TODO(copy): Replace with the approved project summary.
    summary: "A simpler way for patients to find trusted care.",
    // TODO(copy): Replace with the approved project challenge.
    challenge:
      "Patients needed a clearer way to discover the right care and understand their options.",
    // TODO(copy): Replace with the approved project approach.
    approach:
      "We brought discovery, provider details and appointment planning into one straightforward experience.",
    results: [
      {
        // TODO(copy): Replace with an approved project result.
        label: "A more confident path from searching for care to booking a visit.",
      },
    ],
    cover: "DoctorHunt",
    gallery: [],
    next: "drips-water-app",
  },
  {
    slug: "drips-water-app",
    // TODO(copy): Replace this project name with the approved project name.
    name: "Drips Water App",
    // TODO(copy): Replace this client name with the approved client name.
    client: "Drips",
    // TODO(verify): Replace with the verified project year.
    year: "2025",
    services: [
      // TODO(verify): Replace with a verified service.
      "Brand identity",
      // TODO(verify): Replace with a verified service.
      "Product design",
      // TODO(verify): Replace with a verified service.
      "Development",
    ],
    stack: [
      // TODO(verify): Replace with a verified technology.
      "React Native",
      // TODO(verify): Replace with a verified technology.
      "TypeScript",
      // TODO(verify): Replace with a verified technology.
      "Firebase",
    ],
    // TODO(verify): Replace with the verified project role.
    role: "Brand, product design and development",
    // TODO(copy): Replace with the approved project category.
    category: "Lifestyle",
    // TODO(copy): Replace with the approved project summary.
    summary: "A refreshing digital home for everyday hydration.",
    // TODO(copy): Replace with the approved project challenge.
    challenge:
      "The brand needed a welcoming digital experience that made hydration feel simple and engaging.",
    // TODO(copy): Replace with the approved project approach.
    approach:
      "We shaped a clear visual language and an easy-to-use mobile experience for daily routines.",
    results: [
      {
        // TODO(copy): Replace with an approved project result.
        label: "A cohesive product experience that makes everyday hydration feel intuitive.",
      },
    ],
    cover: "DripsWater",
    gallery: [],
    next: "task-flow",
  },
  {
    slug: "task-flow",
    // TODO(copy): Replace this project name with the approved project name.
    name: "Task Flow",
    // TODO(copy): Replace this client name with the approved client name.
    client: "Task Flow",
    // TODO(verify): Replace with the verified project year.
    year: "2026",
    services: [
      // TODO(verify): Replace with a verified service.
      "Product strategy",
      // TODO(verify): Replace with a verified service.
      "Experience design",
      // TODO(verify): Replace with a verified service.
      "Development",
    ],
    stack: [
      // TODO(verify): Replace with a verified technology.
      "Next.js",
      // TODO(verify): Replace with a verified technology.
      "TypeScript",
      // TODO(verify): Replace with a verified technology.
      "PostgreSQL",
    ],
    // TODO(verify): Replace with the verified project role.
    role: "Product strategy, design and development",
    // TODO(copy): Replace with the approved project category.
    category: "Productivity",
    // TODO(copy): Replace with the approved project summary.
    summary: "A calmer workspace for teams to get things done.",
    // TODO(copy): Replace with the approved project challenge.
    challenge:
      "Teams needed one shared space to organize work without adding process overhead.",
    // TODO(copy): Replace with the approved project approach.
    approach:
      "We designed a focused workspace that helps teams see priorities and keep work moving.",
    results: [
      {
        // TODO(copy): Replace with an approved project result.
        label: "A calmer way for teams to bring their plans and daily work together.",
      },
    ],
    cover: "TaskFlow",
    gallery: [],
    next: "doctor-hunt",
  },
];
