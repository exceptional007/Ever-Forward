import { memo, useMemo, useState } from "react";
import {
  ExternalLinkIcon,
  GithubIcon,
  ArrowUpRightIcon,
  CheckCircle2Icon,
  VideoIcon,
} from "lucide-react";
import { projectFilters, projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/layout/Section";
import { SectionBackground } from "@/components/layout/SectionBackground";
import { SkillIcon } from "@/components/common/SkillIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function ProjectCard({ project }: { project: Project }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const primaryHref = project.links.live ?? project.links.github ?? "#";

  return (
    <div className="group/card relative flex flex-1 flex-col gap-3 p-4 sm:p-5">
      {/* Resend Code Window Shell */}
      <div className="relative overflow-hidden rounded-lg border border-transparent bg-[#06060a] transition-all duration-300 group-hover/card:border-white/30">
        {/* Code Window Header Bar with Traffic Light Dots */}
        <div className="flex items-center justify-between border-b border-transparent group-hover/card:border-white/14 bg-[#0a0a0c] px-3.5 py-2.5 transition-colors">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff2047]" />
            <span className="size-2.5 rounded-full bg-[#ffc53d]" />
            <span className="size-2.5 rounded-full bg-[#11ff99]" />
          </div>
          <span className="font-mono text-2xs text-[#a1a4a5]">{project.slug}.ts</span>
        </div>

        {/* Media Preview Box */}
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden focus-visible:outline-none"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover/card:scale-[1.03] sm:h-48"
            />
          ) : (
            <div className="flex h-44 w-full items-center justify-center font-mono text-xs text-[#a1a4a5] sm:h-48">
              {project.title}
            </div>
          )}
        </a>
      </div>

      {/* Header & Links */}
      <div className="flex items-center justify-between gap-3 mt-1">
        <h3 className="min-w-0 truncate text-sm sm:text-base font-semibold leading-snug">
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fcfdff] hover:text-[#3b9eff] transition-colors"
          >
            {project.title}
          </a>
        </h3>

        <div className="flex shrink-0 items-center gap-1.5">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-transparent bg-[#101012] px-2.5 py-0.5 font-mono text-xs font-medium text-[#3b9eff] hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <VideoIcon className="size-3 shrink-0" />
              Demo
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-transparent bg-[#101012] px-2.5 py-0.5 font-mono text-xs font-medium text-[#fcfdff] hover:bg-white/10 hover:border-white/30 transition-all"
            >
              Live
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-transparent bg-[#101012] px-2.5 py-0.5 font-mono text-xs font-medium text-[#fcfdff] hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <GithubIcon className="size-3 shrink-0" />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Tagline & One-line Description */}
      <p className="text-xs text-[#a1a4a5] line-clamp-2 leading-relaxed">{project.description}</p>

      {/* Stack Chips & Case Study Dialog Button */}
      <div className="flex items-center justify-between gap-2 mt-auto pt-2">
        <ul className="flex flex-wrap gap-1.5 items-center">
          {project.stack.map((tech) => (
            <li key={tech}>
              <SkillIcon name={tech} size="sm" showLabel={false} />
            </li>
          ))}
        </ul>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              size="xs"
              variant="ghost"
              className="text-xs h-6 px-2 text-[#a1a4a5] hover:text-[#fcfdff]"
            >
              <span>Details</span>
              <ArrowUpRightIcon className="size-3 ml-1" />
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto bg-[#0a0a0c] border border-white/14 text-[#fcfdff]">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="default" className="font-mono text-2xs">
                  {project.period}
                </Badge>
                {project.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-2xs">
                    {t}
                  </Badge>
                ))}
              </div>
              <DialogTitle className="text-lg font-bold text-[#fcfdff]">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-xs text-[#3b9eff] font-medium">
                {project.tagline}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4 py-2 text-xs text-[#a1a4a5] leading-relaxed">
              <div>
                <h4 className="font-mono text-xs font-bold text-[#fcfdff] uppercase mb-1">
                  My Role
                </h4>
                <p className="text-[#fcfdff]">{project.role}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-[#fcfdff] uppercase mb-1.5">
                  Key Features
                </h4>
                <ul className="flex flex-col gap-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2Icon className="size-3.5 text-[#11ff99] shrink-0 mt-0.5" />
                      <span className="text-[#fcfdff]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-[#fcfdff] uppercase mb-1">
                  Engineering Challenge
                </h4>
                <p className="rounded-md bg-[#101012] border border-white/14 p-3 text-[#fcfdff]">
                  {project.challenge}
                </p>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-2 pt-2 border-t border-white/14">
              {project.links.github && (
                <Button size="xs" variant="ghost" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="size-3" />
                    GitHub Repository
                  </a>
                </Button>
              )}
              {project.links.live && (
                <Button size="xs" variant="default" asChild>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="size-3" />
                    Live Application
                  </a>
                </Button>
              )}
              {project.links.demo && (
                <Button
                  size="xs"
                  variant="secondary"
                  asChild
                  className="bg-[#3b9eff]/15 text-[#3b9eff] hover:bg-[#3b9eff]/25"
                >
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <VideoIcon className="size-3" />
                    Demo Video
                  </a>
                </Button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export const Projects = memo(function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const visibleProjects = useMemo(() => {
    return projects.filter((p) => (filter === "All" ? true : p.tags.includes(filter)));
  }, [filter]);

  return (
    <section
      aria-labelledby="projects-heading"
      id="projects"
      className="relative overflow-hidden w-full py-6"
    >
      <SectionBackground variant="projects" />
      <div className="relative z-10">
        <SectionHeading
          id="projects-heading"
          action={
            <ToggleGroup
              type="single"
              value={filter}
              onValueChange={(v) => v && setFilter(v)}
              className="gap-0.5"
            >
              {projectFilters.map((f) => (
                <ToggleGroupItem
                  key={f}
                  value={f}
                  className="text-xs px-2.5 py-0.5 h-6 rounded-full border border-white/14 bg-[#101012] text-[#a1a4a5] data-[state=on]:bg-[#fcfdff] data-[state=on]:text-[#000000]"
                >
                  {f}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          }
        >
          Projects
        </SectionHeading>

        {/* 2-Column Grid Bounded by Translucent Hairline Divider */}
        <div className="relative border-b border-white/06">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 hidden w-px bg-white/06 sm:block"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
