import { memo, useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ExternalLink, Github, Search, Star } from "lucide-react";
import { projectFilters, projects, type Project } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animations/Reveal";
import { Tilt } from "@/components/animations/Tilt";
import { ease, springSnappy } from "@/lib/motion";

const ProjectCard = memo(function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((e) => !e), []);

  return (
    <Tilt className="h-full" max={4}>
      <article
        className={`group glass relative flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-all duration-500 hover:border-primary/40 hover:shadow-glow ${project.featured ? "" : ""}`}
      >
        <div
          aria-hidden
          className="relative h-40 overflow-hidden border-b border-border bg-surface-strong"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-b-[1.75rem] bg-slate-950/10 px-5 text-center text-sm text-muted-foreground">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-strong text-primary">
                <Search className="size-5" aria-hidden />
              </div>
              <div>
                <p className="font-semibold text-foreground">Project preview</p>
                <p className="mt-1 text-[0.72rem] text-muted-foreground">
                  Add a screenshot or illustration for this project later.
                </p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 grid-lines opacity-60 transition-transform duration-[1200ms] group-hover:scale-110" />
          <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
          <div className="absolute -top-8 -right-6 size-40 rounded-full bg-primary/20 blur-3xl transition-opacity duration-700 group-hover:opacity-100 sm:opacity-60" />
          <span className="absolute bottom-4 left-6 font-mono text-[0.65rem] tracking-[0.25em] text-primary uppercase">
            {project.period}
          </span>
          {project.featured && (
            <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-surface-strong px-2.5 py-1 text-[0.6rem] font-semibold tracking-wider text-primary uppercase">
              <Star className="size-2.5" aria-hidden />
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg leading-snug font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-1.5 text-[0.8rem] text-primary">{project.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.63rem] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-4 border-t border-border pt-5">
                  <div>
                    <p className="text-[0.63rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                      My role
                    </p>
                    <p className="mt-1.5 text-sm text-foreground">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-[0.63rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                      Key features
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {project.features.map((f) => (
                        <li key={f} className="relative pl-4 text-sm text-muted-foreground">
                          <span
                            aria-hidden
                            className="absolute top-2 left-0 size-1.5 rounded-full bg-primary/70"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[0.63rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                      Hardest problem
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {project.challenge}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
            <button
              onClick={toggle}
              aria-expanded={expanded}
              className="inline-flex min-h-9 items-center gap-1.5 rounded-full accent-gradient px-4 py-2 text-[0.75rem] font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              {expanded ? "Hide case study" : "Case study"}
              <ArrowUpRight className="size-3.5" aria-hidden />
            </button>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border px-4 py-2 text-[0.75rem] font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Github className="size-3.5" aria-hidden />
                Code
              </a>
            )}
            {((project.links.live || project.links.github) && (
              <a
                href={project.links.live ?? project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border px-4 py-2 text-[0.75rem] font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                aria-label={project.links.live ? `View live project ${project.title}` : `View project ${project.title}`}
              >
                <ExternalLink className="size-3.5" aria-hidden />
                {project.links.live ? "Live" : "View"}
              </a>
            ))}
          </div>
        </div>
      </article>
    </Tilt>
  );
});

export const Projects = memo(function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => (filter === "All" ? true : p.tags.includes(filter)))
      .filter((p) =>
        q
          ? [p.title, p.description, p.tagline, ...p.stack].join(" ").toLowerCase().includes(q)
          : true,
      )
      .sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [filter, query]);

  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Selected work"
      title={
        <>
          Systems I designed,{" "}
          <span className="bg-clip-text text-transparent accent-gradient">built and shipped</span>.
        </>
      }
      description="Six projects spanning applied AI, layered backends and full-stack products. Open a case study for role, features and the hardest problem."
    >
      <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className="relative min-h-9 rounded-full px-4 py-2 text-[0.78rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {filter === f && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-surface-strong"
                  transition={springSnappy}
                />
              )}
              <span className={`relative ${filter === f ? "text-foreground" : ""}`}>{f}</span>
            </button>
          ))}
        </div>

        <div className="glass flex items-center gap-2 rounded-full px-4 py-2 sm:w-64">
          <Search className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects"
            aria-label="Search projects"
            className="w-full bg-transparent text-[0.8rem] text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>
      </Reveal>

      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {!visible.length && (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No projects match that search.
        </p>
      )}
    </Section>
  );
});
