export interface SiteProfile {
  fullName: string;
  displayName: string;
  title: string;
  location: string;
  careerStartDate: string;
  tagline: string;
  heroIntro: string;
  aboutBio: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  ogImageUrl: string;
  faviconUrl: string;
  profileImageUrl: string;
  heroBgUrl: string;
  cvUrl: string;
}

export interface SkillItem {
  name: string;
  category: "core" | "framework" | "tool" | "domain";
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  periodStart: string;
  periodEnd: string | null;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  periodStart: string;
  periodEnd: string | null;
  achievements: string[];
}

export interface ProjectItem {
  title: string;
  summary: string;
  category: string;
  tags: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  imageUrl: string | null;
  featured: boolean;
}

export const siteProfile: SiteProfile = {
  fullName: "Hein Htet Aung",
  displayName: "Hein Htet (Zest) Aung",
  title: "Senior Full Stack Software Engineer",
  location: "Yangon, Myanmar",
  careerStartDate: "2018-06-01",
  tagline:
    "Crafting efficient, scalable enterprise web applications and FinTech solutions.",
  heroIntro:
    "Software Engineer building enterprise web applications and services across FinTech, ERP, and e-commerce systems.",
  aboutBio:
    "I am a Software Engineer with professional experience specializing in enterprise web application and service development.\n\nI thrive in collaborative, cross-functional environments and focus on transforming complex business requirements into robust technical solutions. Beyond writing clean and maintainable code, I bring strong capabilities in team management, cross-team collaboration, and rapid troubleshooting to ensure successful delivery.",
  email: "heinhtaung@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/hnhtag",
  githubUrl: "https://github.com/hnhtag",
};

export const siteSettings: SiteSettings = {
  siteTitle: "Hein Htet Aung - Senior Full Stack Software Engineer",
  siteDescription:
    "Portfolio of Hein Htet Aung, senior full stack software engineer.",
  ogImageUrl: "",
  faviconUrl: "/favicon.ico",
  profileImageUrl: "/hein-htet-aung.webp",
  heroBgUrl: "",
  cvUrl: "",
};

export const skills: SkillItem[] = [
  { name: "HTML", category: "core" },
  { name: "CSS", category: "core" },
  { name: "SASS", category: "core" },
  { name: "JavaScript", category: "core" },
  { name: "TypeScript", category: "core" },
  { name: "C#", category: "core" },
  { name: "Vue.js", category: "framework" },
  { name: "Nuxt.js", category: "framework" },
  { name: "React.js", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "Nest.js", category: "framework" },
  { name: ".Net", category: "framework" },
  { name: "Git", category: "tool" },
  { name: "Agile and Scrum", category: "tool" },
  { name: "Storybook", category: "tool" },
  { name: "Responsive web design", category: "tool" },
  { name: "SEO", category: "tool" },
  { name: "Unit testing (Vitest, Jest)", category: "tool" },
  { name: "FinTech", category: "domain" },
  { name: "ERP", category: "domain" },
  { name: "E-commerce", category: "domain" },
];

export const experiences: ExperienceItem[] = [
  {
    company: "KBZ Bank",
    location: "Yangon, Myanmar",
    role: "Senior Full Stack Software Engineer",
    periodStart: "2025-03",
    periodEnd: null,
    highlights: [
      "Developing service integrations between telco platforms and KBZPay for financial transaction flows.",
      "Building and maintaining banking-related operational portals used by internal business and operations teams.",
      "Contributing to CI/CD improvements and supporting Apigee taskforce work for API delivery and platform operations.",
    ],
  },
  {
    company: "AA Medical Products Ltd.",
    location: "Yangon, Myanmar",
    role: "Software Developer",
    periodStart: "2024-07",
    periodEnd: "2025-03",
    highlights: [
      "Designed goods issue and receipt workflows to optimize warehouse operations.",
      "Deployed and customized Rocket.Chat and Jitsi Meet for team communication.",
      "Built a waypoint mapping demo for clinics using OpenStreetMap and OSRM.",
    ],
  },
  {
    company: "Quantech Co., Ltd.",
    location: "Yangon, Myanmar",
    role: "Senior Frontend Developer",
    periodStart: "2024-01",
    periodEnd: "2024-06",
    highlights: [
      "Led a team of 5 developers to deliver projects successfully.",
      "Collaborated with local and international cross-functional teams.",
      "Improved UX through performance optimization and testing.",
    ],
  },
  {
    company: "Cyber King Co., Ltd.",
    location: "Yangon, Myanmar",
    role: "Team Lead / E-commerce Lead / Frontend Developer",
    periodStart: "2018-06",
    periodEnd: "2023-12",
    highlights: [
      "Delivered a broad portfolio of products including e-procurement, global sourcing, import/export, e-commerce, CMS, expo, order and delivery, POS, warehouse, LMS, and training systems.",
      "Contributed major improvements across ERP and business platforms, including store management, sales flow, barcode features, retail shift assignment, and warehouse product/category modules.",
      "Supported strategic product initiatives beyond delivery work, including Myanmar ethnic Unicode font development and mentoring within long-running platform teams.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "University of Computer Studies (Maubin)",
    degree: "B.C.Sc",
    field: "Computer Science",
    periodStart: "2015-01",
    periodEnd: "2023-01",
    achievements: [
      "Second Prize (Myanmar Skills 2016 - Web Design)",
      "Honorable Mention for Smart Restaurant Project (Products Show 2019)",
    ],
  },
  {
    institution: "University of Yangon",
    degree: "Postgraduate Degree",
    field: "Dip. in Computer Science",
    periodStart: "2025-02",
    periodEnd: "2026-02",
    achievements: [],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Warehouse Issue and Delivery Order Form Management Portal",
    summary:
      "Built a warehouse issue and delivery order form management portal that improved request accuracy, tracking visibility, and day-to-day warehouse operations.",
    category: "Warehouse Operations",
    tags: ["Forms", "Warehouse", "Operations"],
    githubUrl: null,
    liveUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "Hanwha NxMD E-Procurement and Import/Export",
    summary:
      "Delivered procurement and import/export workflows that streamlined cross-team operations and reduced manual processing overhead.",
    category: "Enterprise Platform",
    tags: ["Vue.js", "Workflow", "Operations"],
    githubUrl: null,
    liveUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "ECPlaza Global Sourcing and E-Procurement",
    summary:
      "Built sourcing and procurement capabilities for enterprise buyers and suppliers, improving sourcing speed and procurement traceability.",
    category: "B2B Commerce",
    tags: ["E-Procurement", "Sourcing", "Platform"],
    githubUrl: null,
    liveUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "JUDO E-Commerce and Order Delivery Ecosystem",
    summary:
      "Scaled key e-commerce and order delivery journeys across catalog, checkout, and fulfillment flows to support day-to-day business growth.",
    category: "E-commerce",
    tags: ["Checkout", "Order Flow", "Fulfillment"],
    githubUrl: null,
    liveUrl: null,
    imageUrl: null,
    featured: true,
  },
  {
    title: "ERP and Retail Operations Improvements",
    summary:
      "Improved ERP, POS, and warehouse modules including sales, barcode, and shift-assignment features to increase operational efficiency.",
    category: "ERP and Retail",
    tags: ["ERP", "POS", "Warehouse"],
    githubUrl: null,
    liveUrl: null,
    imageUrl: null,
    featured: true,
  },
];
