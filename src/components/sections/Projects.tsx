import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
const details: Record<string, { title: string; text: string; metric: string }> = {
  inca: {
    title: "INCA",
    text: "One campus. Six roles. Attendance, AI tutoring and everything in between.",
    metric: "6 user roles · Offline attendance + auto sync",
  },
  "fraud-portal": {
    title: "Smart Investigation",
    text: "From document intake to evidence-backed investigation with OCR and RAG.",
    metric: "500+ records · 92% OCR accuracy · 3 roles",
  },
  "patient-farmer": {
    title: "Patient & Farmer",
    text: "Two domains, one platform — with AI summaries built into the workflow.",
    metric: "12 REST endpoints · 1.5s average AI response",
  },
  autopay: {
    title: "AutoPay",
    text: "Daily expenses, budgets and AI insights in one real-time workspace.",
    metric: "7 features · 8+ users",
  },
  quizx: {
    title: "QuizX",
    text: "Contributed core features and AI question generation to a multi-tenant exam platform.",
    metric: "Multi-faculty assessments · Gemini-powered questions",
  },
};
function Work({ project, index }: { project: Project; index: number }) {
  const info = details[project.slug];
  return (
    <article className={`work-item ${index === 0 ? "work-featured" : ""}`}>
      <div className="work-image">
        <img
          src={project.image}
          alt={`${info?.title ?? project.title} application screenshot`}
          loading="lazy"
          decoding="async"
          width="1440"
          height="900"
        />
        {index === 0 && <span className="image-label">FEATURED / CAMPUS PLATFORM</span>}
      </div>
      <div className="work-meta">
        <div>
          <span className="eyebrow">
            {String(index + 1).padStart(2, "0")} / {project.period}
          </span>
          <h3>{info?.title ?? project.title}</h3>
        </div>
        <div className="work-links">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source code`}
            >
              <Github size={18} />
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer">
              {project.links.live.includes("youtube") ? "Demo" : "Live"}
              <ArrowUpRight size={16} />
            </a>
          )}
          {!project.links.live && !project.links.github && <span>Internal project</span>}
        </div>
      </div>
      <p className="work-description">{info?.text ?? project.tagline}</p>
      {info && <p className="work-result">{info.metric}</p>}
      <ul className="work-stack">
        {project.stack.slice(0, 5).map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}
export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const order = ["inca", "fraud-portal", "patient-farmer", "autopay", "quizx"];
  const selected = order.flatMap((slug) => projects.filter((p) => p.slug === slug));
  const more = projects.filter((p) => !order.includes(p.slug));
  return (
    <section id="projects" className="editorial-section" aria-labelledby="work-heading">
      <div className="editorial-heading">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2 id="work-heading">Ideas, engineered.</h2>
        </div>
        <span className="section-note">PRODUCTS & APPLIED AI / 2026</span>
      </div>
      <div className="work-grid">
        {[...selected, ...(expanded ? more : [])].map((project, index) => (
          <Work key={project.slug} project={project} index={index} />
        ))}
      </div>
      <button
        className="archive-toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? "Show selected work" : "Explore project archive"}
        <ArrowUpRight size={16} />
      </button>
    </section>
  );
}
