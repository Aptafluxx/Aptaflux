export type WorkArtKey = "DoctorHunt" | "DripsWater" | "TaskFlow" | "EmberFig";
export type ProjectSlug =
  | "doctor-hunt"
  | "ember-fig"
  | "drips-water-app"
  | "task-flow";

type ProjectType = "portfolio" | "client";

export type WorkProject = {
  slug: ProjectSlug;
  name: string;
  type: ProjectType;
  featured: boolean;
  client: string;
  services: string[];
  stack: string[];
  category: string;
  summary: string;
  challenge: string;
  approach: string;
  results: string[];
  cover: WorkArtKey;
  gallery?: WorkArtKey[];
  next: ProjectSlug;
};

export const workPageContent = {
  metadataTitle: "Work",
  introduction: "Real projects. Practical thinking. Purposeful execution.",
  metadataDescription:
    "Ideas turned into digital products by Aptaflux.",
  ariaLabels: {
    projects: "Selected projects",
    projectDetails: "Project details",
    projectStory: "Project story",
    projectGallery: "Project gallery",
  },
  projectLabels: {
    type: "Portfolio project",
    category: "Category",
    services: "Services",
    stack: "Technologies",
    projectLink: "Explore Project →",
    challenge: "Challenge",
    approach: "Approach",
    results: "Results",
    nextProject: "Next project",
  },
} as const;

export const work: WorkProject[] = [
  {
    slug: "doctor-hunt",
    name: "Doctor Hunt",
    type: "portfolio",
    featured: true,
    client: "Portfolio project",
    services: ["Mobile Development", "Firebase", "AI Integration"],
    stack: ["Mobile Development", "Firebase", "AI Integration"],
    category: "Healthcare platform",
    summary:
      "A healthcare experience connecting patients with doctors through appointment booking, pharmacy features, and AI-assisted symptom guidance.",
    // TODO(copy): Replace with an approved project challenge.
    challenge: "Project challenge to be added.",
    // TODO(copy): Replace with an approved project approach.
    approach: "Project approach to be added.",
    // TODO(copy): Add verified project results only.
    // TODO(copy): Replace with verified results when available.
    results: ["Results to be added."],
    cover: "DoctorHunt",
    gallery: [],
    next: "ember-fig",
  },
  {
    slug: "ember-fig",
    name: "Ember & Fig",
    type: "portfolio",
    featured: true,
    client: "Portfolio project",
    services: ["Web Development", "Responsive Design", "UI/UX"],
    stack: ["Web Development", "Responsive Design", "UI/UX"],
    category: "Restaurant digital experience",
    summary:
      "An editorial-style restaurant website designed to present the brand, showcase its food, and make essential customer information accessible.",
    // TODO(copy): Replace with an approved project challenge.
    challenge: "Project challenge to be added.",
    // TODO(copy): Replace with an approved project approach.
    approach: "Project approach to be added.",
    // TODO(copy): Add verified project results only.
    // TODO(copy): Replace with verified results when available.
    results: ["Results to be added."],
    cover: "EmberFig",
    gallery: [],
    next: "drips-water-app",
  },
  {
    slug: "drips-water-app",
    name: "Drips Water",
    type: "portfolio",
    featured: true,
    client: "Portfolio project",
    services: ["Flutter", "Firebase", "Business Automation"],
    stack: ["Flutter", "Firebase", "Business Automation"],
    category: "Business management system",
    summary:
      "A digital water delivery solution combining customer-facing features, operational management, and role-based administration.",
    // TODO(copy): Replace with an approved project challenge.
    challenge: "Project challenge to be added.",
    // TODO(copy): Replace with an approved project approach.
    approach: "Project approach to be added.",
    // TODO(copy): Add verified project results only.
    // TODO(copy): Replace with verified results when available.
    results: ["Results to be added."],
    cover: "DripsWater",
    gallery: [],
    next: "task-flow",
  },
  {
    slug: "task-flow",
    name: "Task Flow",
    type: "portfolio",
    featured: false,
    client: "Portfolio project",
    services: ["Product strategy", "Experience design", "Development"],
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    category: "Productivity",
    summary: "A calmer workspace for teams to get things done.",
    // TODO(copy): Replace with an approved project challenge.
    challenge: "Project challenge to be added.",
    // TODO(copy): Replace with an approved project approach.
    approach: "Project approach to be added.",
    // TODO(copy): Add verified project results only.
    // TODO(copy): Replace with verified results when available.
    results: ["Results to be added."],
    cover: "TaskFlow",
    gallery: [],
    next: "doctor-hunt",
  },
];
