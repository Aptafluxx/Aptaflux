import { homeContent } from "@/content/home";

// PLACEHOLDER: replace later
const serviceDetails = {
  "conversion-engine": {
    typicalEngagement: "A focused project, scoped after discovery.",
    goodFirstStep:
      "A discovery call and a review of your current website.",
    deliverables: [
      "Websites",
      "Landing pages",
      "SEO foundations",
      "Inquiry systems",
      "Booking integrations",
      "Analytics and tracking setup",
    ],
    processLines: [
      "We learn about your customers, offer and current online presence.",
      "We define pages, messaging and conversion goals.",
      "We design and develop a fast, responsive site with clear calls to action.",
      "We launch, measure results and refine what matters.",
    ],
    technologies: ["Next.js", "TypeScript", "Google Cloud"],
    faq: [
      {
        question: "What is included in a website project?",
        answer:
          "Design, development, SEO foundations and the inquiry or booking flow your business needs, agreed in the proposal.",
      },
      {
        question: "Can you improve my existing website?",
        answer:
          "Yes. We can audit what you have and recommend improvements before any rebuild.",
      },
      {
        question: "Will I be able to update content myself?",
        answer:
          "Where it makes sense, yes. We agree on how content is managed during scoping.",
      },
    ],
  },
  "business-automation": {
    typicalEngagement: "Project-based, with optional ongoing support.",
    goodFirstStep:
      "A workflow review to find the tasks worth automating.",
    deliverables: [
      "AI assistants",
      "Workflow automation",
      "API integrations",
      "Dashboards",
      "Notifications",
      "Team handover and documentation",
    ],
    processLines: [
      "We map your current workflows and find repetitive work.",
      "We decide what to automate and how the tools connect.",
      "We build and test the automations and integrations.",
      "We roll out, monitor and adjust as your needs change.",
    ],
    technologies: ["Node.js", "Google Cloud", "Firebase"],
    faq: [
      {
        question: "What can be automated?",
        answer:
          "Repetitive tasks such as inquiries, follow-ups, reporting and data entry between your tools.",
      },
      {
        question: "Do you build AI assistants?",
        answer:
          "Yes. We design assistants around specific tasks and connect them to your existing systems.",
      },
      {
        question: "How do you decide what to automate first?",
        answer:
          "We start with the work that costs the most time and is the easiest to standardise.",
      },
    ],
  },
  "digital-platforms": {
    typicalEngagement: "Phased delivery with clear milestones.",
    goodFirstStep:
      "A scoping session to map users, features and priorities.",
    deliverables: [
      "Mobile applications",
      "Web portals",
      "Admin dashboards",
      "Backend systems",
      "Integrations",
      "Maintenance and support plan",
    ],
    processLines: [
      "We understand your users, operations and requirements.",
      "We define features, architecture and delivery milestones.",
      "We design and build the apps, portals and backend.",
      "We release in stages, support your team and keep improving.",
    ],
    technologies: ["Flutter", "Firebase", "Google Cloud"],
    faq: [
      {
        question: "Do you build for both iOS and Android?",
        answer:
          "Yes. We build mobile applications that run on both platforms.",
      },
      {
        question: "Can you connect the app to our existing systems?",
        answer: "Yes. We plan integrations and APIs during scoping.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. Support and maintenance can be arranged through an agreed plan.",
      },
    ],
  },
} as const;

export const servicesContent = {
  metadataTitle: "Services",
  ariaLabels: {
    services: "Services",
  },
  comparison: {
    title: "Which solution is right for you?",
    rowLabels: ["Best for", "What you get", "Good first step"],
    linkLabel: "Explore solution",
  },
  cta: {
    eyebrow: "FIND YOUR NEXT STEP",
    title: "Not sure which solution fits?",
    text: "Tell us what you are trying to achieve and we will recommend the right starting point.",
    buttonLabel: "Talk to us",
    href: "/contact",
  },
  services: homeContent.services.solutions.map((solution) => {
    const details = serviceDetails[solution.slug];
    return {
      ...solution,
      ...details,
    };
  }),
  capabilities: homeContent.capabilities.rows,
} as const;
