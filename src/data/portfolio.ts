import resumeAsset from "@/assets/resume.pdf.asset.json";

export const RESUME_URL = resumeAsset.url;

export const profile = {
  name: "Akshhat Srivastava",
  initials: "AS",
  role: "Software Engineer · AI Engineer",
  tagline: "I build AI-integrated production systems, end to end.",
  summary:
    "Full-stack engineer shipping AI-integrated production systems across React/TypeScript, .NET Web API and FastAPI. I own features end to end: layered backend architecture, REST API design, RAG pipelines, vector search and CI-ready test automation.",
  longSummary:
    "I'm a final-year CSE (Data Science) student at Buddha Institute of Technology, Gorakhpur, currently working as an AI Engineer Intern at String AI India. My work sits where product engineering meets applied AI: multilingual NLP pipelines, retrieval-augmented investigation tooling, and layered .NET/FastAPI services that hold up in production.",
  focus:
    "Right now I'm deep in retrieval systems (embeddings, vector stores and evaluation) while keeping strong CS fundamentals sharp through daily DSA practice.",
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
    title: "AI Engineer Intern at String AI India",
    meta: "Apr 2026 – Jul 2026 · Remote",
    body: "Multilingual safety pipelines, an AI fraud investigation portal, and a layered React + ASP.NET Core platform.",
  },
  {
    year: "2026",
    title: "Software Developer Intern at String AI India",
    meta: "Jan 2026 – Apr 2026 · Remote",
    body: "RAG document assistant on Qdrant Cloud, Celery/Redis job offloading, Docker + Azure deployments.",
  },
  {
    year: "2023",
    title: "B.Tech CSE (Data Science) at Buddha Institute of Technology",
    meta: "2023 – Present · Gorakhpur, India",
    body: "82.27% through the 6th semester. IEEE Student Branch member and active hackathon competitor.",
  },
  {
    year: "2022",
    title: "Intermediate (PCM), CBSE at Divine Public School",
    meta: "2022 – 2023 · 89.5%",
    body: "Physics, Chemistry and Mathematics: where the programming habit started.",
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
  logo: string;
};

export const experiences: Experience[] = [
  {
    role: "AI Engineer Intern",
    company: "String AI India",
    period: "Apr 2026 – Jul 2026",
    location: "Remote",
    type: "Internship",
    logo: "/stringaiindialogo.png",
    summary:
      "Owned multilingual AI safety tooling and two full-stack AI products from architecture through release.",
    highlights: [
      "Architected a Unicode-aware multilingual text processing pipeline for 22 Indian languages (normalization, script-specific tokenization, Indic digit conversion and pattern matching), improving AI safety classification accuracy.",
      "Extended NLP preprocessing across multiple Indic scripts and language-specific lexical patterns, increasing detection coverage for multilingual user-generated content.",
      "Architected an AI-powered Fraud Detection & Investigation Portal covering OCR document intake, entity extraction, RAG investigation chat, audit logging and role-based access for admin, investigator and auditor roles.",
      "Designed a Patient & Farmer Management System on a layered architecture with the Repository pattern and EF Core (Code-First); shipped AI medical summaries and crop advisory via the OpenAI API.",
      "Built a Playwright API test suite over auth and CRUD flows, catching regressions before release.",
      "Built a reusable React component library adopted across internal projects, cutting duplicate UI work.",
    ],
    stack: [
      "FastAPI",
      "Streamlit",
      "PostgreSQL",
      "Qdrant",
      "OpenAI",
      "React",
      "ASP.NET Core",
      "JWT",
      "Playwright",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "String AI India",
    period: "Jan 2026 – Apr 2026",
    location: "Remote",
    type: "Internship",
    logo: "/stringaiindialogo.png",
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
    role: "Python Full Stack Developer (Training Internship)",
    company: "10-week program",
    period: "Jan 2026 – Mar 2026",
    location: "Remote",
    type: "Training",
    logo: "/eduskills-logo.png",
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
    logo: "/ieee-logo.webp",
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
  image?: string;
  links: { github?: string; live?: string; demo?: string };
};

export const projects: Project[] = [
  {
    slug: "vardha-voice",
    title: "Vardha AI Voice Calling Agent",
    period: "2026",
    tagline: "Autonomous outbound AI voice agent grounded in custom Knowledge Bases.",
    role: "Full-stack & AI Engineer (System Architecture, Real-Time Audio Streaming)",
    description:
      "Autonomous outbound voice calling platform that conducts real-time, Knowledge Base–grounded spoken dialogues over Twilio Voice, records calls, and automatically generates chat transcripts and AI summaries.",
    features: [
      "Bi-directional WebSocket media streaming via Twilio Voice, Deepgram STT, Gemini 1.5 Flash & OpenAI TTS",
      "Knowledge Base CRUD repository & searchable context selection for outbound calls",
      "WhatsApp-style waveform audio player with 36 interactive amplitude bars & speed controls",
      "Real-time call tracking dashboard, iMessage-style speaker chat transcripts & AI executive summaries",
    ],
    challenge:
      "Achieving sub-second voice round-trip latency while processing bi-directional audio streams, real-time transcription, and RAG Knowledge Base retrieval without audio buffering artifacts.",
    stack: ["React", "TypeScript", "FastAPI", "Twilio", "Deepgram", "OpenAI", "PostgreSQL"],
    tags: ["AI/ML", "Full-stack"],
    featured: true,
    links: {
      github: "https://github.com/exceptional007/Vardha-Links-Voice-Calling-Agent.git",
      live: "https://vardha-links-voice-calling-agent.vercel.app",
      demo: "https://youtu.be/yVIfLpLRI9Q",
    },
    image: "/vardha-voice.png",
  },
  {
    slug: "autopay",
    title: "AutoPay: Daily Auto Expense Tracker",
    period: "2026",
    tagline: "Commute expense tracker with budget analytics & Google GenAI insights.",
    role: "Lead Full-stack Developer (React, Firebase, GenAI SDK, Tailwind CSS)",
    description:
      "A robust, responsive web application engineered to track daily auto commute expenses, featuring budget tracking, automated PDF export reports, interactive expense analytics, and Google GenAI insights.",
    features: [
      "Firebase Auth & Firestore database real-time cloud synchronization",
      "Monthly budget configuration, spending thresholds & real-time expense analytics",
      "One-click automated PDF export generation via jsPDF & jsPDF-AutoTable",
      "AI-assisted spending analysis and optimization using Google GenAI SDK",
    ],
    challenge:
      "Implementing real-time cloud sync and atomic expense aggregations in Firestore while supporting offline fallback and instant client-side date-range filtering.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "Google GenAI",
      "jsPDF",
    ],
    tags: ["Full-stack", "AI/ML"],
    featured: true,
    links: {
      github: "https://github.com/exceptional007/autopay.git",
      live: "https://autopay-37278.web.app/",
    },
    image: "/autopay.png",
  },
  {
    slug: "inca",
    title: "INCA: Intelligent Campus Assistant",
    period: "Jul 2026 – Present",
    tagline: "An AI operating layer for an entire campus.",
    role: "Lead developer (architecture, AI modules, frontend)",
    description:
      "AI-powered campus management platform unifying attendance, notices, AI tutoring, lost & found and analytics into a single web application. Runner-up at Tech-Yuva 10.0.",
    features: [
      "Smart attendance with vision-assisted verification",
      "AI tutoring chatbot grounded in course material",
      "AI-vision Lost & Found matching",
      "Notice distribution and campus analytics dashboards",
    ],
    challenge:
      "Keeping several AI subsystems inside one coherent product surface without letting latency or cost blow up: solved with cached embeddings and task-specific model routing.",
    stack: ["React", "FastAPI", "PostgreSQL", "OpenAI", "Vector search"],
    tags: ["AI/ML", "Full-stack"],
    featured: true,
    links: {
      github: "https://github.com/exceptional007/inca-intelligent-campus-assistant.git",
      live: "https://incaweb.netlify.app/",
    },
    image: "/inca.png",
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
    image: "/smartinvestigation.png",
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
      "Two very different domains shared one platform: resolved with a strict service boundary per domain over a common persistence layer.",
    stack: ["React", "ASP.NET Core", "EF Core", "PostgreSQL", "JWT", "OpenAI"],
    tags: ["Full-stack", "Backend"],
    featured: true,
    links: {},
    image: "/patientfarmer.png",
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
    links: {
      github: "https://github.com/exceptional007/Project-Camp-Backend.git",
      live: "https://www.youtube.com/watch?v=vRuK1ZM_fWI&feature=youtu.be",
    },
    image: "/projectmanagement.jpg",
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
    links: {
      github: "https://github.com/exceptional007/TalentTagger.git",
      live: "https://talent-tagger.netlify.app/",
    },
    image: "/talenttagger.png",
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
      "Delivering relevant results with no geo service: pincode adjacency tables gave locality without a maps dependency.",
    stack: ["Django", "PostgreSQL", "AWS S3", "HTML/CSS"],
    tags: ["Full-stack"],
    featured: false,
    links: {
      github: "https://github.com/exceptional007/Find-My-Worker.git",
      live: "https://find-my-worker-fmy.vercel.app/",
    },
    image: "/fmy.png",
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
    title: "Fundamentals of OOPs: Elite Certificate",
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
      "Built INCA, an AI-powered campus app: engineered smart attendance, the AI chatbot and AI-vision Lost & Found. Buddha Institute of Technology, Gorakhpur.",
  },
  {
    title: "Turbo AI Challenge: AKTU Tech Fest (Zonal)",
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
      "He shipped the fraud investigation portal with audit logging and role separation done properly the first time, rare for an intern.",
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

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What engineering roles are you currently looking for?",
    answer:
      "I am actively seeking Software Engineer (SWE) and AI Engineer full-time / internship opportunities. I specialize in backend API development (.NET Core, FastAPI), AI integration (RAG, vector search, multilingual NLP), and full-stack React applications.",
  },
  {
    question: "What is your primary tech stack?",
    answer:
      "My primary backend stack consists of Python (FastAPI, Django) and C# (.NET Core Web API, EF Core). On the frontend, I work heavily with React.js, TypeScript, and Tailwind CSS. For AI/RAG data engineering, I rely on Qdrant, PostgreSQL, Celery/Redis, and OpenAI APIs.",
  },
  {
    question: "What was your biggest impact at String AI India?",
    answer:
      "I architected a Unicode-aware multilingual NLP processing pipeline covering 22 Indian languages to improve AI safety classification. I also built an AI-powered Fraud Detection & Investigation Portal featuring OCR document intake, RAG investigation chat, and immutable audit logs.",
  },
  {
    question: "Are you open to relocation or remote work?",
    answer:
      "Yes, I am fully available for remote roles as well as relocation across tech hubs in India (Bangalore, NCR, Hyderabad, Pune, etc.) or internationally.",
  },
];

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "cv", label: "CV" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;
