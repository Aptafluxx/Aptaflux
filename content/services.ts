import { homeContent } from "@/content/home";

const serviceDetails = {
  "conversion-engine": {
    // TODO(copy): Replace this typical engagement placeholder with approved copy.
    typicalEngagement: "TODO(copy)",
    // TODO(copy): Replace service-specific process notes with approved copy.
    processLines: ["TODO(copy)", "TODO(copy)", "TODO(copy)", "TODO(copy)"],
    technologies: ["Next.js", "TypeScript", "Google Cloud"],
    // TODO(copy): Replace service FAQ placeholders with approved copy.
    faq: [
      { question: "TODO(copy)", answer: "TODO(copy)" },
      { question: "TODO(copy)", answer: "TODO(copy)" },
      { question: "TODO(copy)", answer: "TODO(copy)" },
    ],
  },
  "business-automation": {
    // TODO(copy): Replace this typical engagement placeholder with approved copy.
    typicalEngagement: "TODO(copy)",
    // TODO(copy): Replace service-specific process notes with approved copy.
    processLines: ["TODO(copy)", "TODO(copy)", "TODO(copy)", "TODO(copy)"],
    technologies: ["Node.js", "Google Cloud", "Firebase"],
    // TODO(copy): Replace service FAQ placeholders with approved copy.
    faq: [
      { question: "TODO(copy)", answer: "TODO(copy)" },
      { question: "TODO(copy)", answer: "TODO(copy)" },
      { question: "TODO(copy)", answer: "TODO(copy)" },
    ],
  },
  "digital-platforms": {
    // TODO(copy): Replace this typical engagement placeholder with approved copy.
    typicalEngagement: "TODO(copy)",
    // TODO(copy): Replace service-specific process notes with approved copy.
    processLines: ["TODO(copy)", "TODO(copy)", "TODO(copy)", "TODO(copy)"],
    technologies: ["Flutter", "Firebase", "Google Cloud"],
    // TODO(copy): Replace service FAQ placeholders with approved copy.
    faq: [
      { question: "TODO(copy)", answer: "TODO(copy)" },
      { question: "TODO(copy)", answer: "TODO(copy)" },
      { question: "TODO(copy)", answer: "TODO(copy)" },
    ],
  },
} as const;

export const servicesContent = {
  metadataTitle: "Services",
  ariaLabels: {
    services: "Services",
  },
  services: homeContent.services.solutions.map((solution) => {
    const details = serviceDetails[solution.slug];
    return {
      ...solution,
      deliverables: [
        ...solution.scope.replace(", and ", ", ").split(", "),
        // TODO(copy): Add an approved sixth deliverable for the six-card layout.
        "TODO(copy)",
      ],
      ...details,
    };
  }),
  capabilities: homeContent.capabilities.rows,
} as const;
