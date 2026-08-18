export const site = {
  name: "VisionBrew",
  tagline: "Where Ideas Become Digital Products.",
  domain: "visionbrew.in",
  email: "visionbrewtech@gmail.com",
  url: "https://visionbrew.in",
  description:
    "VisionBrew helps businesses transform ideas, manual processes, and complex requirements into powerful digital experiences and software solutions.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/visionbrew" },
  { label: "Instagram", href: "https://www.instagram.com/visionbrew" },
  { label: "GitHub", href: "https://github.com/visionbrew" },
] as const;

export const capabilities = [
  "PRODUCT DEVELOPMENT",
  "WEB APPLICATIONS",
  "AUTOMATION",
  "AI",
  "UI/UX",
  "DATA",
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  what: string;
  fits: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom Software",
    short:
      "Internal tools and products shaped around how your team already works — not the other way around.",
    summary:
      "We design and build software that replaces spreadsheets, scattered chats, and one-off workarounds with a system your people can actually use.",
    what: "From operations platforms to client-facing products, we take a business problem and turn it into a durable application: data model, workflows, permissions, and the interfaces around them.",
    fits: [
      "A process that lives in Excel, email, or WhatsApp and keeps breaking at scale",
      "A product idea that needs a first real version, not a slide deck",
      "Existing tools that no longer match how the business operates",
    ],
    outcomes: [
      "A single source of truth instead of competing files",
      "Workflows that match your actual operating rhythm",
      "Software you own and can keep evolving",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    short:
      "Fast, reliable web applications — public sites, portals, and platforms built to last.",
    summary:
      "We build web applications that feel considered: clear information architecture, solid engineering, and interfaces that hold up under real use.",
    what: "Marketing sites when they need to convert, product surfaces when they need to work. React, Next.js, Laravel, and Node — chosen for the problem, not the trend.",
    fits: [
      "A site that has to represent a serious brand",
      "A portal for customers, vendors, or internal teams",
      "A web product that needs performance, SEO, and maintainability",
    ],
    outcomes: [
      "Pages that load quickly and read clearly",
      "Frontends that stay maintainable as the product grows",
      "A codebase your team can continue without us",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short:
      "Interfaces that make complex work feel simple — research, structure, and craft.",
    summary:
      "We design products people can use without a training session. Structure first, then visual language, then the details that make software feel finished.",
    what: "Workshops, flows, wireframes, and high-fidelity UI. We stay close to engineering so the design that ships is the design that was intended.",
    fits: [
      "A product that is powerful but confusing",
      "A rebuild that needs a clearer information architecture",
      "A new product that should feel considered from day one",
    ],
    outcomes: [
      "Flows that map to real jobs-to-be-done",
      "A visual system that can scale beyond one screen",
      "Handoff that engineers can actually build from",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    short:
      "Remove repetitive work. Keep humans on judgment, exceptions, and decisions.",
    summary:
      "We automate the work that should never have been manual — and use AI where it actually reduces effort, not where it merely looks modern.",
    what: "Document intake, classification, routing, report generation, and LLM-backed assistants wired into your existing systems. Always with a human path for the cases that matter.",
    fits: [
      "Repetitive document or data handling across teams",
      "Handoffs that stall because someone has to copy information",
      "A need for AI inside a real workflow, not a chatbot demo",
    ],
    outcomes: [
      "Fewer hours spent on copy-paste and status chasing",
      "Consistent handling of routine cases",
      "AI that sits inside the product, not beside it",
    ],
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    short:
      "Dashboards and pipelines that answer the questions operations actually ask.",
    summary:
      "Disconnected sheets hide the business. We connect sources, define the metrics that matter, and put them in front of the people who decide.",
    what: "Data models, ETL, reporting, and operational dashboards. Built so numbers reconcile — and so leadership can see them without waiting for a weekly export.",
    fits: [
      "Reports assembled by hand every week",
      "Teams arguing over whose spreadsheet is right",
      "A need for live operational visibility",
    ],
    outcomes: [
      "One definition of each important metric",
      "Views for operators and leadership, not just analysts",
      "A foundation you can keep adding sources to",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    short:
      "Catalog, checkout, and operations — storefronts that connect to how you actually fulfill.",
    summary:
      "We build commerce systems that treat inventory, orders, and admin as first-class — not as an afterthought to a pretty homepage.",
    what: "Storefronts, product admin, order flows, and integrations with payment and fulfillment. Designed for brands that have outgrown a template and need control.",
    fits: [
      "A catalog that no longer fits a boxed platform",
      "Operations that break every time order volume spikes",
      "A need to own the customer and inventory experience",
    ],
    outcomes: [
      "Checkout that is clear and trustworthy",
      "Admin that matches how the team packs and ships",
      "Room to grow into wholesale, B2B, or custom rules",
    ],
  },
];

export const processSteps = [
  {
    id: "discover",
    title: "Discover",
    body: "We start with the work as it happens today — the tools, the bottlenecks, the people involved. No assumptions until we have seen the process.",
  },
  {
    id: "define",
    title: "Define",
    body: "We write down the problem, the users, and the smallest product that would actually help. Scope is a decision, not a wish list.",
  },
  {
    id: "design",
    title: "Design",
    body: "Flows, structure, and interface. We design for the job, then for the brand — so the product feels like yours and works on a Tuesday afternoon.",
  },
  {
    id: "build",
    title: "Build",
    body: "Engineering in the open. Regular builds, clear trade-offs, and a codebase you can keep. We choose the stack for the problem, not the resume.",
  },
  {
    id: "launch",
    title: "Launch",
    body: "Go-live, handover, and the first weeks of real use. We stay close until the system is in the workflow — then we plan what comes next.",
  },
] as const;

export const differentiators = [
  {
    title: "Business-first thinking",
    body: "We begin with the operating problem, not the framework. Technology is the means. If a simpler system will do, we say so.",
  },
  {
    title: "Built around your workflow",
    body: "Software that ignores how people actually work gets abandoned. We map the real path — exceptions included — and design for that.",
  },
  {
    title: "Modern technology",
    body: "Laravel, React, Next.js, Node, Python, and the data layer that fits. Chosen because it will still be maintainable in three years.",
  },
  {
    title: "Long-term partnership",
    body: "Launch is not the finish. Products change as the business does. We build so you can extend — with us, or with your own team.",
  },
] as const;

export const technologies = [
  "Laravel",
  "PHP",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Python",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "AI/LLM APIs",
] as const;

export const transformation = {
  before: [
    "Excel",
    "WhatsApp",
    "Paper",
    "Manual Reports",
    "Disconnected Data",
  ],
  after: [
    "Centralized Systems",
    "Automation",
    "Dashboards",
    "Real-time Insights",
    "Better Decisions",
  ],
} as const;

export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  type: string;
  year: string;
  overview: string;
  problem: string;
  solution: string;
  challenge: string;
  approach: string;
  features: string[];
  tech: string[];
  results: string[];
  visual: "ops" | "counsel" | "store" | "insight";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "opsledger",
    name: "OpsLedger",
    industry: "Manufacturing",
    type: "Operations platform",
    year: "2025",
    overview:
      "A production and inventory system for a mid-size manufacturer that had outgrown spreadsheets and group chats.",
    problem:
      "Orders, stock, and shop-floor status lived in Excel files and WhatsApp threads. Nobody could answer “what is in production?” without calling someone.",
    solution:
      "A centralized operations app for orders, inventory, and floor status — with roles for sales, stores, and production.",
    challenge:
      "The team had a working (if fragile) process. Replacing it with software that ignored exceptions would have made things worse. The system had to absorb how they already planned batches, handled shortages, and closed the day.",
    approach:
      "We sat with sales, stores, and the floor supervisor for two weeks. We mapped the real path of an order, including the shortcuts. Then we designed a data model around SKUs, batches, and locations — and a UI that a supervisor could use with gloves nearby.",
    features: [
      "Order intake with live stock checks",
      "Batch and location-level inventory",
      "Production status visible to sales without a phone call",
      "Role-based access for sales, stores, and floor",
      "End-of-day close that replaces the spreadsheet ritual",
    ],
    tech: ["Laravel", "MySQL", "Blade", "Alpine.js"],
    results: [
      "Replaced weekly spreadsheet reconciliation with a live stock view",
      "Sales can see production status without interrupting the floor",
      "Shortages surface at order time instead of at dispatch",
      "The team kept their language — batches, locations, closes — inside the product",
    ],
    visual: "ops",
  },
  {
    slug: "counselflow",
    name: "CounselFlow",
    industry: "Professional services",
    type: "Client portal",
    year: "2025",
    overview:
      "Intake, document tracking, and client communication for a multi-partner advisory firm.",
    problem:
      "New matters arrived by email. Documents sat in shared drives with unclear names. Clients asked for status; partners hunted through inboxes.",
    solution:
      "A matter workspace with structured intake, document checklists, and a client-facing status view — built on Next.js and PostgreSQL.",
    challenge:
      "Partners did not want another rigid practice-management suite. They needed something that matched their matter types, without forcing a methodology they do not use.",
    approach:
      "We defined three matter templates with the partners, then designed intake as a conversation with structure — not a 40-field form. Document requirements became checklists tied to matter stage, visible to both the firm and the client.",
    features: [
      "Structured intake per matter type",
      "Document checklists with client upload",
      "Partner and associate workspaces",
      "Client status without email chasing",
      "Audit trail of who saw what, and when",
    ],
    tech: ["Next.js", "PostgreSQL", "TypeScript", "AWS"],
    results: [
      "Intake no longer depends on a partner remembering an email thread",
      "Clients can see what is outstanding without calling the office",
      "Documents sit on the matter, not in a folder named “final_v3”",
      "The firm can add a matter type without rebuilding the product",
    ],
    visual: "counsel",
  },
  {
    slug: "storeline",
    name: "Storeline",
    industry: "D2C retail",
    type: "Commerce platform",
    year: "2024",
    overview:
      "Catalog, checkout, and operations admin for a growing direct-to-consumer brand that had outgrown its template store.",
    problem:
      "The storefront looked fine. Operations did not. Inventory drifted, wholesale orders were handled by hand, and the admin could not express how the team packed.",
    solution:
      "A custom storefront and admin: catalog, checkout, inventory, and packing flows that match the warehouse — React, Node, and MongoDB.",
    challenge:
      "The brand needed to keep the customer experience they had earned, while replacing the operations layer underneath. A full replatform in public is a risk. We had to migrate without a dark week.",
    approach:
      "We split the work: a new admin and inventory model first, storefront second, checkout last. Catalog data was cleaned before it moved. Packing rules were written with the warehouse lead, not guessed from analytics.",
    features: [
      "Catalog with variants the warehouse recognizes",
      "Checkout with clear shipping and returns copy",
      "Inventory that updates from packing, not from hope",
      "Wholesale orders in the same admin as D2C",
      "Packing lists that match how boxes actually go out",
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    results: [
      "Inventory no longer drifts from the storefront overnight",
      "Wholesale and D2C share one catalog and one stock number",
      "Packing follows a list the warehouse helped design",
      "The brand owns the checkout and can change it without a plugin maze",
    ],
    visual: "store",
  },
  {
    slug: "insightboard",
    name: "InsightBoard",
    industry: "Operations",
    type: "Reporting & dashboards",
    year: "2024",
    overview:
      "Live operational dashboards for a multi-site services company that assembled reports by hand every Monday.",
    problem:
      "Each site kept its own sheets. Headquarters stitched a weekly pack. By the time leadership saw the numbers, the week had already moved.",
    solution:
      "A pipeline into a single warehouse and a dashboard layer for site managers and leadership — Python, PostgreSQL, and AWS.",
    challenge:
      "The sheets were not wrong so much as local. Definitions of “active job” and “utilization” differed by site. A dashboard that ignored that would have been pretty and useless.",
    approach:
      "We sat with finance and two site managers to agree metric definitions first. Then we connected the sources we could trust, flagged the ones we could not, and designed views for the Monday meeting — not for a demo.",
    features: [
      "Agreed metric dictionary shared across sites",
      "Site-level and company-level views",
      "Daily refresh instead of a weekly stitch",
      "Export that still works for the board pack",
      "Clear lineage: where each number comes from",
    ],
    tech: ["Python", "PostgreSQL", "AWS", "Docker"],
    results: [
      "Monday reporting is a refresh, not a reconstruction",
      "Sites and headquarters argue less about whose sheet is right",
      "Leadership can see utilization without waiting for the pack",
      "New sources can be added without rebuilding the front end",
    ],
    visual: "insight",
  },
];

export const projectTypes = [
  "Custom software",
  "Web application",
  "UI/UX design",
  "AI & automation",
  "Data & analytics",
  "E-commerce",
  "Not sure yet",
] as const;

export const budgetRanges = [
  "Under ₹5L",
  "₹5L – ₹15L",
  "₹15L – ₹40L",
  "₹40L+",
  "Let’s discuss",
] as const;

export const about = {
  headline: "Good technology starts with a clear vision.",
  story: [
    "VisionBrew is a software and digital solutions studio. We work with businesses that have outgrown their tools — or have an idea that needs a first real product.",
    "We are not a volume shop. We take on a small number of engagements so we can stay close to the problem: how the work happens, who it happens for, and what “better” would actually look like on a busy day.",
  ],
  philosophy: [
    "Most software fails quietly. It ships, it looks finished, and then people go back to the spreadsheet because the product did not respect the workflow.",
    "We treat that as a design problem, not a training problem. If the system needs a manual to survive first contact, we have not finished.",
  ],
  approach: [
    "Listen before we propose a stack.",
    "Write the problem down in language the business uses.",
    "Ship something usable early, then tighten.",
    "Leave behind a codebase and a way of working, not a black box.",
  ],
  team: [
    {
      role: "Founding director",
      focus: "Client work, scope, and the shape of the product.",
    },
    {
      role: "Founding engineer",
      focus: "Architecture, delivery, and the quality of what ships.",
    },
    {
      role: "Design lead",
      focus: "Flows, interface, and the system that holds them together.",
    },
    {
      role: "Engineering",
      focus: "Application, data, and the unglamorous work that makes software last.",
    },
  ],
};

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
