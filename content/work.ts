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
  cta: {
    eyebrow: "LET'S BUILD SOMETHING",
    title: "Have a project in mind?",
    text: "Let's talk about what you want to build.",
    buttonLabel: "Start a conversation",
    href: "/contact",
  },
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
    results: "Outcome",
    nextProject: "Next project",
    portfolioNote: "These are portfolio projects built to show our approach.",
  },
} as const;

// PLACEHOLDER: replace later
export const work: WorkProject[] = [
  {
    slug: "doctor-hunt",
    name: "Doctor Hunt",
    type: "portfolio",
    featured: true,
    client: "Portfolio project",
    services: ["Mobile app development", "Appointment booking", "AI-assisted guidance"],
    stack: ["Firebase"],
    category: "Healthcare platform",
    summary:
      "A healthcare experience connecting patients with doctors through appointment booking, pharmacy features, and AI-assisted symptom guidance.",
    challenge:
      "Finding the right doctor and booking a visit is fragmented: profiles, availability, pharmacy needs and early symptom questions live in different places.",
    approach:
      "A single mobile experience for doctor discovery, appointment booking, pharmacy features and AI-assisted symptom guidance, built with Firebase.",
    results: [
      "A complete patient journey from search to booking.",
      "A portfolio project built to demonstrate our approach.",
    ],
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
    services: ["Website design", "Responsive design", "Restaurant branding"],
    stack: [],
    category: "Restaurant digital experience",
    summary:
      "An editorial-style restaurant website designed to present the brand, showcase its food, and make essential customer information accessible.",
    challenge:
      "A restaurant website must express the brand and give guests what they look for, such as the menu, hours and location, without friction.",
    approach:
      "An editorial layout with strong typography and image-led sections, fully responsive, with essential information one tap away.",
    results: [
      "A polished, responsive restaurant website.",
      "A portfolio project built to demonstrate our approach.",
    ],
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
    services: ["Customer ordering", "Delivery operations", "Role-based administration"],
    stack: ["Flutter", "Firebase"],
    category: "Business management system",
    summary:
      "A digital water delivery solution combining customer-facing features, operational management, and role-based administration.",
    challenge:
      "Water delivery businesses juggle orders, deliveries and staff access across calls and spreadsheets.",
    approach:
      "A Flutter and Firebase solution combining customer ordering, operational management and role-based administration.",
    results: [
      "One connected system for customers, operations and administrators.",
      "A portfolio project built to demonstrate our approach.",
    ],
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
    challenge:
      "Teams lose time when tasks and plans are scattered across tools.",
    approach:
      "A calm workspace for planning and tracking work, designed around clarity and focus.",
    results: [
      "A simple, focused workspace for everyday team planning.",
      "A portfolio project built to demonstrate our approach.",
    ],
    cover: "TaskFlow",
    gallery: [],
    next: "doctor-hunt",
  },
];
