import resumeAsset from "@/assets/resume.pdf.asset.json";

export const RESUME_URL = resumeAsset.url;

export const profile = {
  name: "Akshhat Srivastava",
  initials: "AS",
  role: "Software Engineer · AI Engineer",
  tagline: "I build AI-integrated production systems, end to end.",
  summary:
    "Full-stack engineer shipping AI-integrated production systems across React/TypeScript, .NET Web API and FastAPI. I own features end to end — layered backend architecture, REST API design, RAG pipelines, vector search and CI-ready test automation.",
  longSummary:
    "I'm a final-year CSE (Data Science) student at Buddha Institute of Technology, Gorakhpur, currently working as an AI Engineer Intern at String AI India. My work sits where product engineering meets applied AI: multilingual NLP pipelines, retrieval-augmented investigation tooling, and layered .NET/FastAPI services that hold up in production.",
  focus:
    "Right now I'm deep in retrieval systems — embeddings, vector stores and evaluation — while keeping strong CS fundamentals sharp through daily DSA practice.",
  availability: "Open to SWE internship & new-grad roles",
  location: "Gorakhpur, Uttar Pradesh, India",
  email: "akshhatsri7843@gmail.com",
  phone: "+91 91701 74913",
  education: "B.Tech CSE (Data Science) · 4th Year",
  socials: {
    github: "https://github.com/exceptional007",
    linkedin: "https://www.linkedin.com/in/akshhat-srivastava-11a13530b",
    leetcode: "https://leetcode.com/u/akshhat007/",
  },
} as const;

export const stats = [
  { label: "Academic average", value: 82.27, suffix: "%" },
  { label: "Indian languages supported", value: 22, suffix: "" },
  { label: "Hackathon podiums", value: 3, suffix: "" },
  { label: "Months shipping in production", value: 7, suffix: "+" },
] as const;

export const timeline = [
  {
    year: "2026",
    title: "AI Engineer Intern — String AI India",
    meta: "Apr 2026 – Jul 2026 · Remote",
    body: "Multilingual safety pipelines, an AI fraud investigation portal, and a layered React + ASP.NET Core platform.",
  },
  {
    year: "2026",
    title: "Software Developer Intern — String AI India",
    meta: "Jan 2026 – Apr 2026 · Remote",
    body: "RAG document assistant on Qdrant Cloud, Celery/Redis job offloading, Docker + Azure deployments.",
  },
  {
    year: "2023",
    title: "B.Tech CSE (Data Science) — Buddha Institute of Technology",
    meta: "2023 – Present · Gorakhpur, India",
    body: "82.27% through the 6th semester. IEEE Student Branch member and active hackathon competitor.",
  },
  {
    year: "2022",
    title: "Intermediate (PCM), CBSE — Divine Public School",
    meta: "2022 – 2023 · 89.5%",
    body: "Physics, Chemistry and Mathematics — where the programming habit started.",
  },
] as const;

export type SkillGroup = {
  category: string;
  icon: string;
  items: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "Code2",
    items: [
      { name: "Python", level: 92 },
      { name: "JavaScript / TypeScript", level: 88 },
      { name: "C#", level: 78 },
      { name: "Java", level: 74 },
      { name: "C", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Frontend",
    icon: "MonitorSmartphone",
    items: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Streamlit", level: 82 },
      { name: "Component libraries", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "FastAPI", level: 90 },
      { name: ".NET Core Web API", level: 82 },
      { name: "Node.js / Express", level: 80 },
      { name: "Django", level: 78 },
      { name: "Celery / Redis", level: 76 },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 78 },
      { name: "MySQL", level: 80 },
      { name: "Qdrant", level: 84 },
      { name: "ChromaDB", level: 76 },
    ],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    items: [
      { name: "RAG pipelines", level: 88 },
      { name: "OpenAI API", level: 88 },
      { name: "Embeddings & vector search", level: 85 },
      { name: "Pandas / NumPy", level: 84 },
      { name: "OCR & entity extraction", level: 80 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    items: [
      { name: "Azure (App Service, ML, CLI)", level: 80 },
      { name: "Docker", level: 82 },
      { name: "Git / GitHub", level: 90 },
      { name: "Vercel / Render", level: 86 },
    ],
  },
  {
    category: "Tooling & QA",
    icon: "Wrench",
    items: [
      { name: "Playwright API testing", level: 82 },
      { name: "Postman", level: 88 },
      { name: "DBeaver", level: 80 },
      { name: "EF Core (Code-First)", level: 78 },
    ],
  },
];

export const techCloud = [
  "Python",
  "TypeScript",
  "React",
  "FastAPI",
  ".NET Core",
  "PostgreSQL",
  "Qdrant",
  "Docker",
  "Azure",
  "OpenAI",
  "Celery",
  "Redis",
  "Django",
  "Playwright",
  "EF Core",
  "Streamlit",
  "MongoDB",
  "ChromaDB",
] as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "AI Engineer Intern",
    company: "String AI India",
    period: "Apr 2026 – Jul 2026",
    location: "Remote",
    type: "Internship",
    summary:
      "Owned multilingual AI safety tooling and two full-stack AI products from architecture through release.",
    highlights: [
      "Architected a Unicode-aware multilingual text processing pipeline for 22 Indian languages — normalization, script-specific tokenization, Indic digit conversion and pattern matching — improving AI safety classification accuracy.",
      "Extended NLP preprocessing across multiple Indic scripts and language-specific lexical patterns, increasing detection coverage for multilingual user-generated content.",
      "Architected an AI-powered Fraud Detection & Investigation Portal covering OCR document intake, entity extraction, RAG investigation chat, audit logging and role-based access for admin, investigator and auditor roles.",
      "Designed a Patient & Farmer Management System on a layered architecture with the Repository pattern and EF Core (Code-First); shipped AI medical summaries and crop advisory via the OpenAI API.",
      "Built a Playwright API test suite over auth and CRUD flows, catching regressions before release.",
      "Built a reusable React component library adopted across internal projects, cutting duplicate UI work.",
    ],
    stack: ["FastAPI", "Streamlit", "PostgreSQL", "Qdrant", "OpenAI", "React", "ASP.NET Core", "JWT", "Playwright"],
  },
  {
    role: "Software Developer Intern",
    company: "String AI India",
    period: "Jan 2026 – Apr 2026",
    location: "Remote",
    type: "Internship",
    summary: "Built retrieval infrastructure and standardized deployments across environments.",
    highlights: [
      "Built a Retrieval-Augmented Generation document assistant with embeddings in Qdrant Cloud and metadata in PostgreSQL.",
      "Offloaded long-running jobs to Celery workers backed by Redis for predictable request latency.",
      "Containerized services with Docker and deployed to Azure (Azure ML, Azure CLI), standardizing dev and staging environments.",
      "Migrated a Medicine Inventory system from .NET/React/MS SQL Server to FastAPI/Streamlit/PostgreSQL with full feature parity.",
    ],
    stack: ["Python", "OpenAI", "Qdrant Cloud", "PostgreSQL", "Celery", "Redis", "Docker", "Azure"],
  },
  {
    role: "Python Full Stack Developer — Training Internship",
    company: "10-week program",
    period: "Jan 2026 – Mar 2026",
    location: "Remote",
    type: "Training",
    summary: "End-to-end web application development across the Python stack.",
    highlights: [
      "Hands-on delivery across HTML, CSS, Bootstrap, JavaScript, jQuery, Python, Django, SQL and Git.",
      "Built responsive interfaces, managed relational schemas and practiced version-controlled team workflows.",
    ],
    stack: ["Django", "Python", "JavaScript", "SQL", "Bootstrap"],
  },
  {
    role: "IEEE Student Branch Member",
    company: "Buddha Institute of Technology · ICICAT-2025",
    period: "Jan 2025 – Dec 2025",
    location: "Gorakhpur, India",
    type: "Leadership",
    summary: "Technology-driven events, collaborative projects and innovation initiatives.",
    highlights: [
      "Contributed to organizing technical events and the ICICAT-2025 conference effort.",
      "Led collaborative student projects while building professional networking and leadership experience.",
    ],
    stack: ["Community", "Events", "Mentoring"],
  },
];

export type Project = {
  slug: string;
  title: string;
  period: string;
  tagline: string;
  role: string;
  description: string;
  features: string[];
  challenge: string;
  stack: string[];
  tags: string[];
  featured: boolean;
  links: { github?: string; live?: string };
};

export const projects: Project[] = [
  {
    slug: "inca",
    title: "INCA — Intelligent Campus Assistant",
    period: "Jul 2026 – Present",
    tagline: "An AI operating layer for an entire campus.",
    role: "Lead developer — architecture, AI modules, frontend",
    description:
      "AI-powered campus management platform unifying attendance, notices, AI tutoring, lost & found and analytics into a single web application. Runner-up at Tech-Yuva 10.0.",
    features: [
      "Smart attendance with vision-assisted verification",
      "AI tutoring chatbot grounded in course material",
      "AI-vision Lost & Found matching",
      "Notice distribution and campus analytics dashboards",
    ],
    challenge:
      "Keeping several AI subsystems inside one coherent product surface without letting latency or cost blow up — solved with cached embeddings and task-specific model routing.",
    stack: ["React", "FastAPI", "PostgreSQL", "OpenAI", "Vector search"],
    tags: ["AI/ML", "Full-stack"],
    featured: true,
    links: { github: profile.socials.github },
  },
  {
    slug: "fraud-portal",
    title: "Fraud Detection & Investigation Portal",
    period: "2026 · String AI India",
    tagline: "RAG-driven investigation with a real audit trail.",
    role: "Architect & backend engineer",
    description:
      "End-to-end investigation portal: OCR document intake, entity extraction, retrieval-augmented investigation chat, audit logging and role-based access control across admin, investigator and auditor roles.",
    features: [
      "OCR intake with structured entity extraction",
      "RAG investigation chat over case documents",
      "Immutable audit logging for every action",
      "Three-tier role-based access control",
    ],
    challenge:
      "Investigation answers had to be traceable, so every generated claim carries retrieved-document provenance stored alongside the audit log.",
    stack: ["FastAPI", "Streamlit", "PostgreSQL", "Qdrant", "OpenAI"],
    tags: ["AI/ML", "Backend"],
    featured: true,
    links: {},
  },
  {
    slug: "patient-farmer",
    title: "Patient & Farmer Management System",
    period: "2026 · String AI India",
    tagline: "Layered .NET architecture with AI advisory built in.",
    role: "Full-stack engineer",
    description:
      "React + ASP.NET Core Web API platform on a layered architecture using the Repository pattern and EF Core (Code-First), with JWT auth, AI-generated medical summaries and crop-advisory features.",
    features: [
      "Repository pattern over EF Core Code-First migrations",
      "JWT authentication and role scoping",
      "AI medical summaries via the OpenAI API",
      "Crop advisory recommendations for farmer profiles",
    ],
    challenge:
      "Two very different domains shared one platform — resolved with a strict service boundary per domain over a common persistence layer.",
    stack: ["React", "ASP.NET Core", "EF Core", "PostgreSQL", "JWT", "OpenAI"],
    tags: ["Full-stack", "Backend"],
    featured: true,
    links: {},
  },
  {
    slug: "project-management",
    title: "Project Management Backend",
    period: "Nov 2025 – Present",
    tagline: "Secure task orchestration with real file handling.",
    role: "Backend engineer",
    description:
      "Backend for securely managing projects, tasks, subtasks, roles, notes and file uploads with JWT auth and role-based access control.",
    features: [
      "REST APIs for projects, members, tasks, subtasks and notes",
      "Role-based access control across project membership",
      "File uploads via Cloudinary + Multer",
      "Transactional email notifications through Mailtrap",
    ],
    challenge:
      "Nested permissions across projects, members and subtasks needed a single evaluation point rather than scattered checks in each route.",
    stack: ["Node.js", "Express", "MongoDB", "Cloudinary", "Mailtrap"],
    tags: ["Backend"],
    featured: false,
    links: { github: profile.socials.github },
  },
  {
    slug: "talent-tagger",
    title: "Talent-Tagger",
    period: "May 2025",
    tagline: "Resumes in, structured skill graphs out.",
    role: "Backend engineer & deployment",
    description:
      "Smart web app for automated skill extraction from resumes with real-time compatibility checks against job requirements. Backend on Render, frontend on Vercel.",
    features: [
      "Automated skill extraction from uploaded resumes",
      "Real-time job-requirement compatibility scoring",
      "Split deployment across Render and Vercel",
    ],
    challenge:
      "Resume formats vary wildly; normalizing them into a comparable skill vocabulary was most of the work.",
    stack: ["Python", "NLP", "Render", "Vercel"],
    tags: ["AI/ML", "Backend"],
    featured: false,
    links: { github: profile.socials.github },
  },
  {
    slug: "find-my-worker",
    title: "Find My Worker",
    period: "Aug 2024 – Feb 2025",
    tagline: "Hyperlocal worker discovery by pincode.",
    role: "Full-stack developer",
    description:
      "Django platform connecting customers to nearby workers, with pincode-based filtering, CRUD management of worker and customer records, and S3-backed static assets.",
    features: [
      "Pincode-based worker matching",
      "Full CRUD for worker and customer records",
      "AWS S3 static file storage",
      "PostgreSQL on Render with a Vercel frontend",
    ],
    challenge:
      "Delivering relevant results with no geo service — pincode adjacency tables gave locality without a maps dependency.",
    stack: ["Django", "PostgreSQL", "AWS S3", "HTML/CSS"],
    tags: ["Full-stack"],
    featured: false,
    links: { github: profile.socials.github },
  },
];

export const projectFilters = ["All", "AI/ML", "Full-stack", "Backend"] as const;

export type Certification = {
  title: string;
  issuer: string;
  period: string;
  detail: string;
};

export const certifications: Certification[] = [
  {
    title: "Fundamentals of OOPs — Elite Certificate",
    issuer: "NPTEL · IIT Roorkee",
    period: "Jan 2025 – Apr 2025",
    detail: "Elite certification with a score of 82%.",
  },
  {
    title: "Internship on Python Full Stack Development",
    issuer: "10-week industry program",
    period: "Jan 2026 – Mar 2026",
    detail: "HTML, CSS, Bootstrap, JavaScript, jQuery, Python, Django, SQL and Git.",
  },
  {
    title: "Internship on Python with Data Science",
    issuer: "Industry training program",
    period: "Jul 2025 – Aug 2025",
    detail: "Data ecosystem, ETL process, big data basics, gathering and cleaning for analysis.",
  },
  {
    title: "Cloud Mastery Workshop",
    issuer: "Hyper Cloud Digital Solutions",
    period: "Sep 2024",
    detail: "Three-day hands-on cloud computing workshop.",
  },
];

export type Achievement = {
  title: string;
  award: string;
  period: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    title: "Tech-Yuva 10.0",
    award: "Runner Up",
    period: "Oct 2025",
    detail:
      "Built INCA, an AI-powered campus app — engineered smart attendance, the AI chatbot and AI-vision Lost & Found. Buddha Institute of Technology, Gorakhpur.",
  },
  {
    title: "Turbo AI Challenge — AKTU Tech Fest (Zonal)",
    award: "Runner Up",
    period: "Nov 2024",
    detail: "2nd position for an image-based Plant Disease Recognition AI model.",
  },
  {
    title: "Tech-Wizard",
    award: "1st Position",
    period: "Oct 2024",
    detail: "Won the college annual problem-solving competition, acing the C MCQ round.",
  },
  {
    title: "IEEE Student Branch",
    award: "Active Member",
    period: "2025",
    detail:
      "Contributed to technology-driven events, collaborative projects and innovation initiatives including ICICAT-2025.",
  },
];

export const testimonials = [
  {
    quote:
      "Akshhat took the multilingual pipeline from a vague requirement to a tested, production-ready service. He asks the right questions before writing code.",
    name: "Engineering Mentor",
    role: "String AI India",
  },
  {
    quote:
      "He shipped the fraud investigation portal with audit logging and role separation done properly the first time — rare for an intern.",
    name: "Product Lead",
    role: "String AI India",
  },
  {
    quote:
      "During Tech-Yuva, Akshhat held the architecture of INCA in his head while three modules were being built in parallel. Calm under deadline.",
    name: "Faculty Coordinator",
    role: "Buddha Institute of Technology",
  },
];

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
] as const;
