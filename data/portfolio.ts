/**
 * Single source of truth for all site content.
 * Edit this file to update copy, links, projects and experience.
 */

/* ---------------------------------- Types --------------------------------- */

export type StorePlatform = "ios" | "android";

export interface StoreLink {
  platform: StorePlatform;
  url: string;
}

export interface AppListing {
  /** e.g. "Renter", "Owner". Omit for single-app products. */
  label?: string;
  links: StoreLink[];
}

/** Abstract UI drawn inside the phone placeholder. Swap for `screenshot` when you have real captures. */
export type MockupVariant = "marketplace" | "chat" | "finance" | "video" | "calendar" | "commerce";

export interface Mockup {
  label: string;
  variant: MockupVariant;
  /** Optional path in /public, e.g. "/shots/wealthygen.png" (9:19.5 portrait). */
  screenshot?: string;
}

/** One column in the architecture strip. Columns are connected left → right. */
export interface ArchColumn {
  layer: string;
  nodes: string[];
}

export interface SpecRow {
  key: string;
  value: string;
}

/** Real product artwork shown instead of the drawn phone placeholder. Files live in /public/work. */
export interface Cover {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  spec: SpecRow[];
  built: string[];
  highlights: string[];
  stack: string[];
  architecture: ArchColumn[];
  apps: AppListing[];
  mockups: Mockup[];
  cover?: Cover;
  status: "Live" | "Archived";
}

export interface CompactProject {
  name: string;
  type: string;
  mockup: MockupVariant;
  cover?: Cover;
  links: StoreLink[];
}

export interface ArchiveEntry {
  name: string;
  type: string;
  stack: string[];
}

export interface Role {
  title: string;
  company: string;
  start: string;
  end: string;
  summary: string;
  current?: boolean;
  minor?: boolean;
}

export interface CapabilityGroup {
  layer: string;
  items: string[];
}

export interface Principle {
  title: string;
  body: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  body: string;
}

/* --------------------------------- Content -------------------------------- */

export const profile = {
  name: "Mussab Yaqoob",
  handle: "mussab-yaqoob",
  title: "Software Engineer",
  discipline: "Mobile & Full Stack",
  location: "Karachi, PK",
  locationNote: "works with global teams",
  headline: "I take products from concept to production.",
  intro:
    "Software engineer with 7+ years building web and mobile products end to end, from requirements and architecture to App Store and Play Store releases. 10+ mobile apps built, several live in production today.",
  email: "yaqoobmussab@gmail.com",
  phone: "+92 334 1894162",
  whatsapp: "https://wa.me/923341894162",
  linkedin: "https://linkedin.com/in/muhammad-mussab-77640a10b",
  github: "https://github.com/mussaaab",
  /** Drop your résumé at /public/resume.pdf */
  resume: "/resume.pdf",
  education: "Intermediate, Abdullah Haroon Govt. College",
  languages: [
    { name: "English", level: "professional" },
    { name: "Urdu", level: "native" },
  ],
  description:
    "Mussab Yaqoob is a software engineer (mobile & full stack) who owns products end to end: requirements, architecture, React Native and React development, Node and Firebase backends, and App Store / Play Store releases.",
} as const;

export const terminal = {
  focus: "mobile (React Native) · web (React) · backend (Node, Express, MongoDB, Firebase)",
  shipped: ["neighbors-trailer", "wealthygen", "one-minute", "rx-calendar", "distinct-you"],
  status: "open to new products and roles",
};

export const proof: string[] = [
  "7+ years engineering",
  "10+ mobile apps built",
  "6 live store listings",
  "iOS + Android + Web",
  "Frontend + Backend",
];

export const lifecycle: { steps: ProcessStep[]; caption: string } = {
  steps: [
    { id: "01", title: "Discover", body: "Understand requirements, users and constraints." },
    { id: "02", title: "Architect", body: "Choose the stack, data model and integrations." },
    { id: "03", title: "Build", body: "Frontend, backend, payments, real-time features." },
    { id: "04", title: "Ship", body: "App Store and Google Play releases." },
    { id: "05", title: "Iterate", body: "Continuous functional improvements after launch." },
  ],
  caption: "One engineer accountable for the whole lifecycle, not just tickets.",
};

export const caseStudies: CaseStudy[] = [
  {
    id: "neighbors-trailer",
    name: "Neighbors Trailer",
    tagline: "A two-sided trailer rental marketplace.",
    problem:
      "Renters and trailer owners need different tools: one side searches and books, the other lists and manages. Product: separate Renter and Owner apps, both live on iOS and Android.",
    status: "Live",
    spec: [
      { key: "Platform", value: "iOS · Android" },
      { key: "Product", value: "2 apps · Renter + Owner" },
      { key: "Type", value: "Two-sided marketplace" },
    ],
    built: [
      "Trailer registration",
      "Bookings and reservations",
      "Claims, tolls and offers",
      "Real-time user and support chat",
      "Identity verification via ClearMe",
      "Social login (Google, Facebook, Apple)",
    ],
    highlights: [
      "Two-sided marketplace across two separate apps",
      "Real-time chat between users and support",
      "Third-party identity verification",
      "Time-sensitive notifications that break through Do Not Disturb mode",
    ],
    stack: ["React Native", "Redux", "Google Maps", "Firebase", "Push Notifications"],
    architecture: [
      { layer: "Clients", nodes: ["Renter app", "Owner app"] },
      { layer: "App layer", nodes: ["React Native", "Redux"] },
      { layer: "Backend", nodes: ["Firebase", "Real-time chat"] },
      { layer: "Services", nodes: ["Google Maps", "ClearMe", "Push · DND"] },
    ],
    apps: [
      {
        label: "Renter",
        links: [
          { platform: "ios", url: "https://apps.apple.com/us/app/neighbors-trailer-renter/id1667852500" },
          { platform: "android", url: "https://play.google.com/store/apps/details?id=com.neighbourRental" },
        ],
      },
      {
        label: "Owner",
        links: [
          { platform: "ios", url: "https://apps.apple.com/us/app/neighbors-trailer-owner/id1667847016" },
          { platform: "android", url: "https://play.google.com/store/apps/details?id=com.neighbourstrailerowner" },
        ],
      },
    ],
    mockups: [
      { label: "Renter", variant: "marketplace" },
      { label: "Owner", variant: "chat" },
    ],
    cover: { src: "/work/neighbors-trailer.png", width: 1062, height: 768, alt: "Neighbors Trailer renter app screens: discover, search and filter, flexible booking, ratings and in-app chat" },
  },
  {
    id: "wealthygen",
    name: "WealthyGen",
    tagline: "Personal wealth management.",
    problem:
      "People track money across income, spending, goals and assets. WealthyGen brings those into one app, with a subscription model to sustain it.",
    status: "Live",
    spec: [
      { key: "Platform", value: "iOS · Android" },
      { key: "Product", value: "Consumer finance app" },
      { key: "Model", value: "Subscription" },
    ],
    built: [
      "Income and Expense modules",
      "Saving Goals and Budget",
      "Net Worth tracking",
      "Data-visualization charts",
    ],
    highlights: [
      "Subscription monetization with Stripe and in-app purchases",
      "Financial data modules with charting",
      "Social login",
    ],
    stack: ["React Native", "Redux", "Charts", "Stripe", "In-App Purchases", "Push Notifications"],
    architecture: [
      { layer: "Client", nodes: ["React Native", "Redux"] },
      { layer: "Modules", nodes: ["Income · Expense", "Goals · Budget", "Net Worth"] },
      { layer: "Billing", nodes: ["Stripe", "In-App Purchases"] },
      { layer: "Engagement", nodes: ["Push", "Social login"] },
    ],
    apps: [
      {
        links: [
          { platform: "ios", url: "https://apps.apple.com/us/app/wealthygen-money-budget-app/id1633621020" },
          { platform: "android", url: "https://play.google.com/store/apps/details?id=com.wealthygen" },
        ],
      },
    ],
    mockups: [{ label: "WealthyGen", variant: "finance" }],
    cover: { src: "/work/wealthygen.png", width: 1570, height: 1136, alt: "WealthyGen app screens: dashboard, expense tracking, net worth, savings goals and budgets" },
  },
  {
    id: "one-minute",
    name: "One Minute",
    tagline: "A subscription video app.",
    problem:
      "Short-form video behind weekly and monthly subscriptions, for an audience spread across five languages, including right-to-left Arabic.",
    status: "Live",
    spec: [
      { key: "Platform", value: "iOS · Android" },
      { key: "Product", value: "Subscription video" },
      { key: "Locales", value: "EN · FR · ES · DE · AR (RTL)" },
    ],
    built: [
      "Video playback",
      "Weekly / monthly subscription access",
      "Comments and reporting",
      "Bookmarking",
    ],
    highlights: [
      "In-app purchase subscriptions",
      "Deep linking",
      "5-language localization including RTL Arabic (English, French, Spanish, German, Arabic)",
    ],
    stack: ["React Native", "Redux", "In-App Purchases", "Deep Linking", "Push Notifications"],
    architecture: [
      { layer: "Client", nodes: ["React Native", "Redux"] },
      { layer: "Access", nodes: ["In-App Purchases", "Weekly · Monthly"] },
      { layer: "Reach", nodes: ["Deep Linking", "Push"] },
      { layer: "Locale", nodes: ["5 languages", "RTL Arabic"] },
    ],
    apps: [
      {
        links: [
          { platform: "ios", url: "https://apps.apple.com/us/app/one-minute-invitation/id6738841429" },
          { platform: "android", url: "https://play.google.com/store/apps/details?id=com.oneminuteinvitation" },
        ],
      },
    ],
    mockups: [{ label: "One Minute", variant: "video" }],
    cover: { src: "/work/one-minute.png", width: 1544, height: 872, alt: "One Minute Invitation app screens: splash, sign in, categories, video playback and my videos" },
  },
];

export const alsoShipped: CompactProject[] = [
  {
    name: "Rx Calendar",
    type: "Doctor appointment app",
    mockup: "calendar",
    cover: { src: "/work/rx-calendar.png", width: 1336, height: 972, alt: "RxCalendar app screens: splash, today's medication status and calendar" },
    links: [
      { platform: "ios", url: "https://apps.apple.com/us/app/rxcalendar/id1631110058" },
      { platform: "android", url: "https://play.google.com/store/apps/details?id=com.rxcalendar" },
    ],
  },
  {
    name: "Distinct You",
    type: "E-commerce app",
    mockup: "commerce",
    links: [
      { platform: "ios", url: "https://apps.apple.com/us/app/distinct-you/id6737195201" },
      { platform: "android", url: "https://play.google.com/store/apps/details?id=com.distinctyou" },
    ],
  },
];

export const archive: ArchiveEntry[] = [
  {
    name: "Next Network",
    type: "Social platform (Instagram-style)",
    stack: ["React Native", "Redux", "Stripe", "Pusher", "Push", "Social Login"],
  },
  {
    name: "GoStreamIT",
    type: "Live streaming",
    stack: ["React Native", "Redux", "Google Maps", "Firebase", "Pusher", "Stripe"],
  },
  {
    name: "People Stay",
    type: "Hotel booking (Airbnb-style)",
    stack: ["React Native", "Redux", "Google Maps", "Firebase", "Pusher"],
  },
  {
    name: "Realtors",
    type: "Realtor booking",
    stack: ["React Native", "Redux", "Mapbox", "Firebase", "Pusher", "Social Login"],
  },
  {
    name: "Blood Donation",
    type: "Full stack (MERN)",
    stack: ["React Native", "Redux", "Node.js", "Express.js", "MongoDB"],
  },
];

export const experience: Role[] = [
  {
    title: "Assistant Manager, React Native",
    company: "Logicose",
    start: "04/2022",
    end: "Present",
    current: true,
    summary:
      "Own mobile products from requirements through design, development and deployment to the App Store and Google Play.",
  },
  {
    title: "React Native Developer",
    company: "Appicoders Inc.",
    start: "12/2019",
    end: "03/2022",
    summary: "Designed and developed mobile applications across multiple client products, delivered on schedule.",
  },
  {
    title: "Web Developer (React.js)",
    company: "Isekai Technologies",
    start: "11/2018",
    end: "07/2019",
    summary: "Built responsive web interfaces and integrated REST APIs.",
  },
  {
    title: "Warehouse Incharge & Data Entry Operator",
    company: "Ghani Tools",
    start: "01/2018",
    end: "10/2018",
    minor: true,
    summary: "",
  },
];

export const capabilities: CapabilityGroup[] = [
  {
    layer: "Mobile",
    items: [
      "React Native",
      "Redux",
      "Push notifications",
      "In-app purchases & subscriptions",
      "Deep linking",
      "Localization",
      "App Store & Play Store release",
    ],
  },
  {
    layer: "Web",
    items: ["React.js", "JavaScript", "HTML", "CSS", "Responsive UI"],
  },
  {
    layer: "Backend & Data",
    items: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"],
  },
  {
    layer: "Real-time & Integrations",
    items: [
      "Pusher",
      "Real-time chat",
      "Stripe",
      "Google Maps",
      "Mapbox",
      "ClearMe",
      "Google / Facebook / Apple auth",
    ],
  },
];

export const principles: Principle[] = [
  { title: "Ship to production", body: "A product isn't done until real users have it." },
  { title: "Own the whole stack", body: "UI, API, data, payments, release." },
  { title: "Build for change", body: "Clean, maintainable code that's easy to iterate on." },
  { title: "Communicate clearly", body: "Requirements first, no surprises." },
];

export const contact = {
  headline: "Have a product to build, or a team that needs an engineer who ships?",
  sub: "I work with founders, product teams and companies worldwide.",
};

export const nav = [
  { id: "process", label: "Process" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
