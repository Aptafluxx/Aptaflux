export const aboutContent = {
  metadataTitle: "About",
  metadataDescription:
    "Aptaflux is a digital agency that designs and builds websites and mobile apps. Learn how we work.",
  header: {
    badge: "About Aptaflux",
    titleLineOne: "Websites and apps for businesses",
    titleLineTwo: "ready to move ahead.",
    introduction:
      "Aptaflux is a digital agency that designs and builds websites and mobile apps, from restaurant booking to Bluetooth wearables.",
  },
  story: {
    eyebrow: "Our story",
    title: "Design and engineering, handled together.",
    paragraphs: [
      "We start with the business problem, then choose the technology that solves it, not the other way around.",
      "Every project in our portfolio was designed and built end to end. We keep scope, milestones and communication clear from the first conversation.",
    ],
  },
  glance: {
    heading: "At a glance",
    projectLabel: "Portfolio projects",
    website: "website",
    websites: "websites",
    mobileApp: "mobile app",
    mobileApps: "mobile apps",
    solutions: {
      value: "3",
      label: "Solutions",
      sub: "Conversion, automation, platforms",
    },
    toolkit: {
      value: "Flutter · Next.js · Firebase",
      label: "Core toolkit",
    },
  },
  services: {
    eyebrow: "What we do",
    title: "Three ways we help",
    linkLabel: "Learn more",
  },
  principles: {
    eyebrow: "Our principles",
    title: "What we believe",
    items: [
      {
        title: "Outcomes over outputs",
        text: "We judge our work by what it changes for your business, not by how many screens we deliver.",
      },
      {
        title: "Clarity over complexity",
        text: "Plain language, clear scope and simple plans, so you always know what happens next.",
      },
      {
        title: "Built to last",
        text: "Maintainable code, solid performance and room to grow.",
      },
    ],
  },
  process: {
    eyebrow: "Our process",
    title: "How we work",
    steps: [
      {
        number: "01",
        title: "Discover",
        text: "We learn your business, customers and goals.",
      },
      {
        number: "02",
        title: "Strategize",
        text: "We define the solution, scope and timeline.",
      },
      {
        number: "03",
        title: "Design & Build",
        text: "We design and build in clear milestones.",
      },
      {
        number: "04",
        title: "Launch & Improve",
        text: "We launch, measure and keep improving.",
      },
    ],
  },
  toolkit: {
    eyebrow: "Our toolkit",
    title: "Tools we build with",
    groups: [
      { title: "Mobile", technologies: ["Flutter", "Dart", "GetX"] },
      { title: "Web", technologies: ["Next.js", "React", "TypeScript"] },
      {
        title: "Data",
        technologies: ["Firebase Auth", "Cloud Firestore"],
      },
      {
        title: "Hardware",
        technologies: ["Bluetooth Low Energy"],
      },
    ],
  },
  selectedWork: {
    eyebrow: "Selected work",
    title: "Recent projects",
    linkLabel: "View all projects",
    href: "/portfolio",
  },
} as const;
