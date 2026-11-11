import { homeContent } from "@/content/home";

export const servicesContent = {
  metadataTitle: "Services",
  ariaLabels: {
    services: "Services",
  },
  services: homeContent.services.solutions.map((solution) => ({
    ...solution,
    deliverables: solution.scope
      .replace(", and ", ", ")
      .split(", "),
  })),
  capabilities: homeContent.capabilities.rows,
} as const;
