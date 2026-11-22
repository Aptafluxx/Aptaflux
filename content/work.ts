export type WorkArtKey = "EmberFig" | "ProjectCover";
export type ProjectSlug =
  | "ember-fig"
  | "madang"
  | "wristsync"
  | "silver-cedar"
  | "travel"
  | "gymnestic";

type ProjectType = "portfolio" | "client";

export type WorkProject = {
  slug: ProjectSlug;
  name: string;
  type: ProjectType;
  client: string;
  featured: boolean;
  year?: string;
  platform: string;
  spotlight?: boolean;
  facts?: { value: string; label: string }[];
  kind: "website" | "mobile";
  liveUrl?: string;
  services: string[];
  stack: string[];
  category: string;
  summary: string;
  challenge: string;
  approach: string;
  results: string[];
  story?: {
    challenge: { headline: string; points: string[] };
    approach: {
      headline: string;
      steps: { title: string; text: string }[];
    };
    outcome: { headline: string; points: string[] };
    note?: string;
  };
  features?: string[];
  cover: WorkArtKey;
  images?: { cover?: string; mobile?: string; gallery?: string[] };
  galleryCaptions?: { title: string; text: string }[];
  next: ProjectSlug;
};

export const workPageContent = {
  metadataTitle: "Portfolio",
  introduction:
    "Websites and mobile apps we've designed and built, from restaurant reservations to Bluetooth wearables.",
  metadataDescription:
    "Websites and mobile apps we've designed and built, from restaurant reservations to Bluetooth wearables.",
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
    portfolioProject: "Portfolio project",
    featuredProject: "Featured project",
    readCaseStudy: "Read the case study →",
    allWork: "All projects",
    projectOverview: "Project overview",
    servicesBehind: "Services behind this project",
    platform: "Platform",
    year: "Year",
    projectCover: "Project cover",
    projectStory: "Project story",
    liveDemo: "Live demo",
    moreWebsites: "More Websites",
    moreMobileApps: "More Mobile apps",
    moreProjects: "More projects",
    backToAllWork: "Back to all projects",
    keyFeatures: "Key features",
    whatWeBuilt: "What we built",
  },
  pageHeading: {
    badge: "Our portfolio",
    title: "Projects that speak",
    accent: "louder than words",
  },
  closing: {
    eyebrow: "Let's build something",
    title: "Have a project in mind?",
    text: "Tell us what you want to build and we'll show you the best way to get there.",
    primaryLabel: "Start a conversation",
    secondaryLabel: "Explore services",
    secondaryHref: "/services",
    replyNote: "Reply by email · No obligation",
  },
} as const;

export const work: WorkProject[] = [
  {
    slug: "ember-fig",
    name: "Ember & Fig",
    type: "portfolio",
    client: "Portfolio project",
    featured: true,
    spotlight: true,
    platform: "Web",
    facts: [{ value: "4", label: "Pages" }],
    kind: "website",
    liveUrl: "https://ember-and-fig.vercel.app/",
    category: "Restaurant website",
    services: ["Web design", "Web development", "Reservation flow"],
    stack: ["Next.js", "React", "TypeScript"],
    summary: "A cinematic, editorial restaurant website with a seasonal menu and a reservation flow.",
    challenge: "A live-fire restaurant needs its atmosphere to come through before guests arrive, along with a menu they can browse and a simple way to request a table.",
    approach: "A cinematic, editorial landing page, a seasonal menu organized by course, a reservation form with validation and a clear confirmation, plus contact details and location. Metadata, sitemap and social previews are set up from the start.",
    results: ["A complete four-page restaurant website (home, menu, reservations, contact), responsive from phone to desktop.", "A portfolio project. The reservation form is a front-end demonstration."],
    story: {
      challenge: {
        headline: "A restaurant's atmosphere has to show up before guests do.",
        points: [
          "Atmosphere must come through online",
          "The menu needs to be easy to browse",
          "Requesting a table should take seconds",
        ],
      },
      approach: {
        headline: "An editorial site built around the table.",
        steps: [
          { title: "Brand-first landing page", text: "Cinematic, editorial typography." },
          { title: "Seasonal menu", text: "Dishes grouped by course and season." },
          { title: "Reservation flow", text: "Validated form with a clear confirmation." },
          { title: "Ready to be found", text: "SEO and social metadata, sitemap, robots." },
        ],
      },
      outcome: {
        headline: "A complete four-page restaurant website.",
        points: [
          "Home, menu, reservations and contact",
          "Responsive from phone to desktop",
          "Reveal animations and polished transitions",
        ],
      },
      note: "Portfolio project. The reservation form is a front-end demonstration.",
    },
    features: [
      "Cinematic landing page with editorial typography",
      "Seasonal menu organized by course",
      "Reservation form with validation and a clear confirmation",
      "Contact and location details",
      "SEO and social metadata, sitemap and robots",
      "Responsive navigation with reveal animations",
    ],
    cover: "EmberFig",
    next: "madang",
    images: {
      cover: "/work/ember-fig/cover.webp",
      mobile: "/work/ember-fig/mobile.webp",
      gallery: [
        "/work/ember-fig/gallery-1.webp",
        "/work/ember-fig/gallery-2.webp",
        "/work/ember-fig/gallery-3.webp",
      ],
    },
    galleryCaptions: [
      { title: "Seasonal menu", text: "Dishes grouped by course and season." },
      { title: "Reservation request", text: "A validated form with a clear confirmation." },
      { title: "Contact and location", text: "Address, hours and map details in one place." },
    ],
  },
  {
    slug: "madang",
    name: "Madang",
    type: "portfolio",
    client: "Portfolio project",
    featured: true,
    spotlight: true,
    platform: "Android and iOS",
    facts: [{ value: "2", label: "Platforms" }],
    kind: "mobile",
    category: "Restaurant ordering app",
    services: ["Mobile design", "Mobile development", "Authentication and data"],
    stack: ["Flutter", "GetX", "Firebase Auth", "Cloud Firestore"],
    summary: "A restaurant app for ordering food and booking tables.",
    challenge: "Restaurant guests want to browse the menu, order, and reserve a table without calling or queuing.",
    approach: "Email sign-in, onboarding and profiles, categories, recommendations and search, a cart with quantities, checkout with multiple payment options, order history and confirmation, and table browsing and booking. Local preferences and cached images keep it fast.",
    results: ["A full ordering and table-booking journey for Android and iOS from one codebase, set up for signed Android release builds.", "A portfolio project. Ordering and table booking work end to end; payment is simulated because no payment gateway is connected."],
    story: {
      challenge: {
        headline: "Guests want to order and book without calling or queuing.",
        points: [
          "Browse the menu and order",
          "Reserve a table",
          "Keep track of past orders",
        ],
      },
      approach: {
        headline: "One app for ordering and table booking.",
        steps: [
          { title: "Sign in and profile", text: "Firebase email sign-in and onboarding." },
          { title: "Discover and order", text: "Categories, search, cart and checkout." },
          { title: "Book a table", text: "Browse tables and reserve one." },
          { title: "Stay informed", text: "Order history and confirmation." },
        ],
      },
      outcome: {
        headline: "A full ordering and table-booking journey.",
        points: [
          "Android and iOS from one codebase",
          "Cached images and saved preferences",
          "Set up for signed Android release builds",
        ],
      },
      note: "Portfolio project. Ordering and table booking work end to end; payment is simulated because no payment gateway is connected.",
    },
    features: [
      "Email and password sign-in with Firebase",
      "Onboarding and customer profile",
      "Food categories, recommendations and search",
      "Cart with quantity management",
      "Checkout with multiple payment options (payment simulated)",
      "Order history and order confirmation",
      "Table browsing and booking",
      "Cached images and saved preferences",
    ],
    cover: "ProjectCover",
    next: "wristsync",
    images: {
      cover: "/work/madang/screen-01.webp",
      gallery: [
        "/work/madang/screen-01.webp",
        "/work/madang/screen-02.webp",
        "/work/madang/screen-03.webp",
        "/work/madang/screen-04.webp",
        "/work/madang/screen-05.webp",
        "/work/madang/screen-06.webp",
        "/work/madang/screen-07.webp",
        "/work/madang/screen-08.webp",
        "/work/madang/screen-09.webp",
      ],
    },
    galleryCaptions: [
      { title: "Cart", text: "Quantities and totals at a glance." },
      { title: "Order confirmation", text: "Clear confirmation after checkout." },
      { title: "Table booking", text: "Browse tables and reserve one." },
    ],
  },
  {
    slug: "wristsync",
    name: "WristSync",
    type: "portfolio",
    client: "Portfolio project",
    featured: true,
    platform: "Android",
    facts: [
      { value: "3", label: "Architecture layers" },
      { value: "2", label: "Device views" },
    ],
    kind: "mobile",
    category: "Smartwatch companion app",
    services: ["Mobile development", "Bluetooth integration"],
    stack: ["Flutter", "GetX", "flutter_blue_plus", "Clean Architecture"],
    summary: "A smartwatch companion app that handles the full Bluetooth pairing lifecycle.",
    challenge: "Pairing a wearable is where companion apps usually fail: confusing permissions, flaky scans and unclear connection states.",
    approach: "Permission handling for Android 12 and older versions, a live Bluetooth scan sorted by signal strength, device connection with fallback and disconnect monitoring, and two views of each device: name, connection and battery for users, and MAC address, packet size and services for diagnostics. The code is split into presentation, a persistent Bluetooth service and a shared design system.",
    results: ["A complete pairing lifecycle from first launch to disconnect. Bluetooth scanning requires a physical Android device.", "A portfolio project built to demonstrate our approach."],
    story: {
      challenge: {
        headline: "Pairing a wearable is where companion apps fail.",
        points: [
          "Confusing permission prompts",
          "Flaky Bluetooth scans",
          "Unclear connection states",
        ],
      },
      approach: {
        headline: "A complete pairing lifecycle, built to be reliable.",
        steps: [
          { title: "Permissions", text: "Android 12+ and older versions." },
          { title: "Live scan", text: "Devices sorted by signal strength." },
          { title: "Connection", text: "GATT with fallback and disconnect monitoring." },
          { title: "Two device views", text: "User info and system diagnostics." },
        ],
      },
      outcome: {
        headline: "From first launch to a clean disconnect.",
        points: [
          "Disconnect resets the app state safely",
          "Clean Architecture in three layers",
          "Shared design system of reusable components",
        ],
      },
      note: "Portfolio project. Bluetooth scanning requires a physical Android device.",
    },
    features: [
      "Splash and run-once onboarding",
      "Runtime permission handling for Android 12+ and older versions",
      "Live Bluetooth scanning sorted by signal strength",
      "GATT connection with fallback and disconnect monitoring",
      "User view: device name, connection badge and battery",
      "Diagnostics view: MAC address, packet size and services",
      "Clean disconnect that resets app state",
    ],
    cover: "ProjectCover",
    next: "silver-cedar",
    images: {
      cover: "/work/wrist-sync/screen-01.webp",
      gallery: [
        "/work/wrist-sync/screen-01.webp",
        "/work/wrist-sync/screen-02.webp",
        "/work/wrist-sync/screen-03.webp",
        "/work/wrist-sync/screen-04.webp",
        "/work/wrist-sync/screen-05.webp",
        "/work/wrist-sync/screen-06.webp",
        "/work/wrist-sync/screen-07.webp",
        "/work/wrist-sync/screen-08.webp",
        "/work/wrist-sync/screen-09.webp",
        "/work/wrist-sync/screen-10.webp",
      ],
    },
    galleryCaptions: [
      { title: "Connected device", text: "Name, connection badge and battery." },
      { title: "Diagnostics", text: "MAC address, packet size and services." },
      { title: "Permissions", text: "Runtime Bluetooth permission prompt." },
    ],
  },
  {
    slug: "silver-cedar",
    name: "Silver & Cedar",
    type: "portfolio",
    client: "Portfolio project",
    featured: false,
    platform: "Web",
    facts: [{ value: "4", label: "Service offerings" }],
    kind: "website",
    liveUrl: "https://silver-and-cedar.vercel.app/",
    category: "Barbershop website",
    services: ["Web design", "Web development", "Booking experience"],
    stack: ["Next.js", "React", "TypeScript"],
    summary: "A premium barbershop website with transparent pricing and a booking flow.",
    challenge: "A neighborhood barbershop that competes on craft needs a site as considered as the shop itself, one that makes booking a chair easy.",
    approach: "An editorial brand identity, a clear service menu with transparent pricing, and a booking flow where guests choose a service, barber, date and time, with shop details and a contact form close by.",
    results: ["A polished single-page experience that moves visitors from first impression to a booking request.", "A portfolio project. Booking and contact are front-end demonstrations, ready to connect to a booking platform or backend."],
    story: {
      challenge: {
        headline: "A neighborhood barbershop that competes on craft.",
        points: [
          "A brand as considered as the shop",
          "Clear services and honest pricing",
          "Booking a chair without friction",
        ],
      },
      approach: {
        headline: "An editorial identity with booking built in.",
        steps: [
          { title: "Brand identity", text: "Premium, Brooklyn-inspired styling." },
          { title: "Service menu", text: "Haircut, beard trim, shave and bundles." },
          { title: "Transparent pricing", text: "A clean, editorial price list." },
          { title: "Booking dialog", text: "Pick service, barber, date and time." },
        ],
      },
      outcome: {
        headline: "One polished single-page experience.",
        points: [
          "From first impression to booking request",
          "Shop details and a contact form",
          "Responsive across devices",
        ],
      },
      note: "Portfolio project. Booking and contact are front-end demonstrations, ready to connect to a booking platform or backend.",
    },
    features: [
      "Hero with clear brand positioning and booking calls to action",
      "Service cards for haircut, beard trim, shave and bundles",
      "Transparent pricing list",
      "Booking modal: service, barber, date and time",
      "Shop details with address, hours and contact",
      "Contact form with a confirmation flow",
    ],
    cover: "ProjectCover",
    next: "travel",
    images: {
      cover: "/work/silver-cedar/cover.webp",
      mobile: "/work/silver-cedar/mobile.webp",
      gallery: [
        "/work/silver-cedar/gallery-1.webp",
        "/work/silver-cedar/gallery-2.webp",
        "/work/silver-cedar/gallery-3.webp",
      ],
    },
    galleryCaptions: [
      { title: "Services and pricing", text: "Transparent prices for every service." },
      { title: "Booking dialog", text: "Pick a service, barber, date and time." },
      { title: "Shop details", text: "Address, hours and a contact form." },
    ],
  },
  {
    slug: "travel",
    name: "Travel",
    type: "portfolio",
    client: "Portfolio project",
    featured: false,
    platform: "Web",
    facts: [
      { value: "8", label: "Destinations" },
      { value: "4", label: "Trip categories" },
    ],
    kind: "website",
    liveUrl: "https://aptaflux-travel.vercel.app/",
    category: "Travel website",
    services: ["Web design", "Web development", "Booking-request flow"],
    stack: ["Next.js", "React", "CSS"],
    summary: "A travel website that takes visitors from inspiration to a booking request.",
    challenge: "Travelers want inspiration and a clear next step: where to go, for how long, and roughly what it costs.",
    approach: "A full-width hero with destination, date and traveler search; eight destinations filterable by mountain, coast, city and jungle, with trip lengths and starting prices; and a booking-request dialog with date validation, a guest selector and an estimated total, followed by a confirmation summary. Journal and newsletter sections support discovery.",
    results: ["A complete discovery-to-request flow in one responsive site.", "A portfolio project. Requests are stored in the browser for demonstration; payments, availability and email would connect to booking services in production."],
    story: {
      challenge: {
        headline: "Travelers want inspiration and a clear next step.",
        points: [
          "Where to go",
          "For how long",
          "Roughly what it costs",
        ],
      },
      approach: {
        headline: "From search to a booking request in one flow.",
        steps: [
          { title: "Search hero", text: "Destination, date and traveler search." },
          { title: "Curated destinations", text: "Eight trips across four categories." },
          { title: "Booking request", text: "Dates, guests and an estimated total." },
          { title: "Confirmation", text: "A reference number and trip summary." },
        ],
      },
      outcome: {
        headline: "Discovery and request in a single site.",
        points: [
          "Filtering with date-range validation",
          "Journal and newsletter for inspiration",
          "Reveal animations with reduced-motion support",
        ],
      },
      note: "Portfolio project. Requests are stored in the browser for demonstration; payments, availability and email would connect to booking services in production.",
    },
    features: [
      "Full-width hero with destination, date and traveler search",
      "Eight curated destinations across mountain, coast, city and jungle",
      "Destination filtering with date-range validation",
      "Booking-request dialog with guest selector and estimated total",
      "Confirmation with a request reference and trip summary",
      "Experiences, journal and newsletter sections",
      "Reveal animations with reduced-motion support",
    ],
    cover: "ProjectCover",
    next: "gymnestic",
    images: {
      cover: "/work/travel/cover.webp",
      mobile: "/work/travel/mobile.webp",
      gallery: [
        "/work/travel/gallery-1.webp",
        "/work/travel/gallery-2.webp",
        "/work/travel/gallery-3.webp",
      ],
    },
    galleryCaptions: [
      { title: "Destination grid", text: "Eight destinations, filterable by category." },
      { title: "Booking request", text: "Dates, travelers and an estimated total." },
      { title: "Confirmation", text: "A reference number and trip summary." },
    ],
  },
  {
    slug: "gymnestic",
    name: "Gymnestic",
    type: "portfolio",
    client: "Portfolio project",
    featured: false,
    platform: "Android and iOS",
    facts: [
      { value: "8", label: "Feature modules" },
      { value: "3", label: "Account flows" },
    ],
    kind: "mobile",
    category: "Fitness app",
    services: ["Mobile design", "Mobile development", "Authentication and data"],
    stack: ["Flutter", "GetX", "Firebase Auth", "Cloud Firestore", "FL Chart"],
    summary: "A fitness app that keeps training, goals and progress in one place.",
    challenge: "Fitness apps lose people when tracking feels like work. Users need a clear plan for today and visible progress over time.",
    approach: "A guided first-run flow, sign-up, login and password reset, a personalized dashboard of programs, daily goal checklists, progress charts, a profile, and articles on healthier habits, all in a dark design with red accents.",
    results: ["A complete training companion in a single dark-mode experience, with accounts and data stored in Firebase.", "A portfolio project built to demonstrate our approach."],
    story: {
      challenge: {
        headline: "Tracking fitness shouldn't feel like work.",
        points: [
          "A clear plan for today",
          "Visible progress over time",
          "Habits that stick",
        ],
      },
      approach: {
        headline: "Plan, track and learn in one dark-mode app.",
        steps: [
          { title: "Guided onboarding", text: "A first-run flow for new users." },
          { title: "Daily plan", text: "Programs and goal checklists." },
          { title: "Progress insights", text: "Charts and weekly metrics." },
          { title: "Learn and improve", text: "Articles on healthier habits." },
        ],
      },
      outcome: {
        headline: "A training companion in a single app.",
        points: [
          "Login, sign-up and password reset",
          "Accounts and data stored in Firebase",
          "A custom dark design with red accents",
        ],
      },
      note: "Portfolio project built to demonstrate our approach.",
    },
    features: [
      "Guided onboarding for first-time users",
      "Sign-up, login and password reset with Firebase",
      "Personalized dashboard with programs",
      "Daily goal checklists and workout progress",
      "Performance insights with charts and weekly metrics",
      "Profile management",
      "Fitness articles for healthier habits",
      "Dark design system with red accents",
    ],
    cover: "ProjectCover",
    next: "ember-fig",
    images: {
      cover: "/work/gymnestic/screen-01.webp",
      gallery: [
        "/work/gymnestic/screen-01.webp",
        "/work/gymnestic/screen-02.webp",
        "/work/gymnestic/screen-03.webp",
        "/work/gymnestic/screen-04.webp",
        "/work/gymnestic/screen-05.webp",
        "/work/gymnestic/screen-06.webp",
        "/work/gymnestic/screen-07.webp",
        "/work/gymnestic/screen-08.webp",
      ],
    },
    galleryCaptions: [
      { title: "Progress charts", text: "Weekly metrics and activity trends." },
      { title: "Daily goals", text: "A checklist for today's training." },
      { title: "Profile", text: "Bio, skills and progress overview." },
    ],
  },
];
