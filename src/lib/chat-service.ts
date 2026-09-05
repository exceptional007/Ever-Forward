import { profile, skillGroups, experiences, projects } from "@/data/portfolio";

export type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `You are Aksh, the official AI assistant representing Akshhat Srivastava on his portfolio website.
Your goal is to answer questions from recruiters, hiring managers, and visitors about Akshhat's work, experience, skills, and projects accurately and conversationally.

--- AKSHHAT'S VERIFIED PORTFOLIO DATA ---
Name: Akshhat Srivastava
Role: Software Engineer · AI Engineer
Location: Gorakhpur, Uttar Pradesh, India
Availability: Open to SWE internship & new-grad roles (Remote or Relocation across India/Global)
Email: akshhatsri7843@gmail.com | Phone: +91 91701 74913
Education: B.Tech CSE (Data Science), Buddha Institute of Technology, Gorakhpur (82.27% aggregate average through 6th semester). CBSE Intermediate 89.5%.

WORK EXPERIENCE:
1. AI Engineer Intern @ String AI India (Apr 2026 – Jul 2026):
   - Architected a Unicode-aware multilingual NLP processing pipeline covering 22 Indian languages (normalization, Indic digit conversion, tokenization).
   - Built an AI-powered Fraud Detection & Investigation Portal featuring OCR document intake, entity extraction, RAG investigation chat over case documents, and immutable audit logs.
   - Built a Patient & Farmer Management System on layered .NET/EF Core architecture with OpenAI API medical summaries and crop advisory.
   - Shipped Playwright API automation test suites over auth & CRUD flows.

2. Software Developer Intern @ String AI India (Jan 2026 – Apr 2026):
   - Built a Retrieval-Augmented Generation (RAG) document assistant with embeddings in Qdrant Cloud & metadata in PostgreSQL.
   - Offloaded long-running jobs to Celery workers backed by Redis.
   - Containerized services with Docker and deployed to Azure (Azure ML, Azure CLI).

3. Python Full Stack Developer Intern (Jan 2026 – Mar 2026):
   - Delivered web applications across Django, Python, SQL, JavaScript, HTML/CSS.

ACADEMIC & HACKATHON ACHIEVEMENTS:
- Runner-Up at Tech-Yuva 10.0 (Oct 2025) for INCA (Intelligent Campus Assistant).
- Runner-Up at AKTU Tech Fest Zonal (Nov 2024) for Plant Disease Recognition AI model.
- 1st Position at Tech-Wizard (Oct 2024) problem-solving competition.
- Active IEEE Student Branch Member.

FEATURED PROJECTS:
1. INCA (Intelligent Campus Assistant): AI campus OS unifying attendance, notice distribution, AI tutoring chatbot, and vision Lost & Found matching. Live at incaweb.netlify.app. Stack: React, FastAPI, PostgreSQL, OpenAI, Vector search.
2. Fraud Detection & Investigation Portal: RAG investigation chat, OCR intake, immutable audit logging. Stack: FastAPI, Streamlit, PostgreSQL, Qdrant, OpenAI.
3. Patient & Farmer Management System: Layered ASP.NET Core, EF Core Code-First, JWT auth, OpenAI API summaries.
4. Project Management Backend: Secure task orchestration, file uploads, role permissions. Stack: Node.js, Express, MongoDB.
5. Talent-Tagger: Resume skill extraction & compatibility scoring. Stack: Python, NLP, Render, Vercel.
6. Find My Worker: Hyperlocal worker discovery by pincode. Stack: Django, PostgreSQL, S3.

TECHNICAL SKILLS:
- Languages: Python (92%), JavaScript/TypeScript (88%), C# (78%), Java (74%), C (80%), SQL (85%).
- Frontend: React.js, Tailwind CSS, Streamlit.
- Backend: FastAPI, ASP.NET Core Web API, Node.js/Express, Django, Celery/Redis.
- Databases: PostgreSQL, MongoDB, MySQL, Qdrant Vector DB, ChromaDB.
- AI/ML: RAG pipelines, OpenAI API, Vector search & embeddings, Pandas/NumPy, OCR & entity extraction.
- Cloud & DevOps: Azure, Docker, Git/GitHub, Vercel, Render.
- Tooling & QA: Playwright API testing, Postman, DBeaver, EF Core.

--- GUIDELINES FOR YOUR RESPONSES ---
1. Tone: Friendly, professional, concise, and confident.
2. Scope Control: If the user asks something completely outside of Akshhat's background, work, skills, projects, or professional inquiry (e.g. general trivia, math homework, recipes, general news), politely respond:
   "That's outside what I can help with — feel free to reach out to Akshhat directly for that!"
3. Do not invent or hallucinate information about Akshhat that is not present in the verified portfolio data. Keep responses helpful and under 3-4 concise sentences when possible.`;

export async function sendMessageToAksh(messages: Message[]): Promise<string> {
  // Try sending request to serverless backend endpoint
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.reply) return data.reply;
    }
  } catch {
    // Ignore serverless endpoint failure and check client-side fallback
  }

  // Direct client API call if Groq key is present in environment
  const viteGroqKey =
    import.meta.env.VITE_GROQ_API_KEY ||
    import.meta.env.GROQ_API_KEY ||
    (typeof process !== "undefined" && process.env?.GROQ_API_KEY);

  if (viteGroqKey) {
    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${viteGroqKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "qwen/qwen3.8-27b",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          temperature: 0.5,
          max_tokens: 500,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        return data?.choices?.[0]?.message?.content || "I couldn't generate a response.";
      }
    } catch {
      // Ignore and proceed to smart fallback
    }
  }

  // Offline / missing key fallback smart response generator
  const lastUserMsg = messages[messages.length - 1]?.content.toLowerCase() || "";

  if (
    lastUserMsg.includes("skill") ||
    lastUserMsg.includes("stack") ||
    lastUserMsg.includes("python") ||
    lastUserMsg.includes("react")
  ) {
    return "Akshhat's core stack includes Python, TypeScript, React.js, FastAPI, ASP.NET Core Web API, PostgreSQL, and Qdrant vector DBs. He specializes in RAG pipelines and multilingual AI safety tooling!";
  }
  if (
    lastUserMsg.includes("project") ||
    lastUserMsg.includes("inca") ||
    lastUserMsg.includes("fraud")
  ) {
    return "Akshhat built INCA (Intelligent Campus Assistant, Tech-Yuva 10.0 Runner Up), an AI Fraud Detection & Investigation Portal with RAG chat, and a layered Patient & Farmer Management platform on .NET/React.";
  }
  if (
    lastUserMsg.includes("experience") ||
    lastUserMsg.includes("work") ||
    lastUserMsg.includes("intern")
  ) {
    return "Akshhat worked as an AI Engineer Intern & Software Developer Intern at String AI India, architecting 22 Indian language NLP pipelines and RAG document investigation tooling.";
  }
  if (
    lastUserMsg.includes("contact") ||
    lastUserMsg.includes("email") ||
    lastUserMsg.includes("hire") ||
    lastUserMsg.includes("reach")
  ) {
    return `You can reach out to Akshhat directly via email at ${profile.email} or on LinkedIn at ${profile.socials.linkedin}!`;
  }

  return "That's outside what I can help with — feel free to reach out to Akshhat directly for that!";
}
