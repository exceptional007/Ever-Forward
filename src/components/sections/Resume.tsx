import React, { memo, useRef, useState } from "react";
import { Download, Scissors, ExternalLink, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import {
  profile,
  experiences,
  projects,
  skillGroups,
  certifications,
  achievements,
  RESUME_URL,
} from "@/data/portfolio";

/**
 * Paper craft geometry constants matching shashwa7-dev/portfolio:
 * - Scalloped wave cuts on top & bottom edges (WAVE = 10)
 * - Semicircular bite-out notches on side edges (NOTCH = 22, R = 11)
 * - Perforation line with dash/gap pattern at tear-off stub (FOOT = 4rem)
 * - Stacked drop shadows matching paper silhouette (drop-shadow filter)
 */
const WAVE = 10;
const NOTCH = 22;
const R = NOTCH / 2;
const FOOT = "4rem";

const DASH = 8;
const GAP = 8;
const PERFORATION = `repeating-linear-gradient(to right, rgba(255,255,255,0.2) 0 ${DASH}px, transparent ${DASH}px ${DASH + GAP}px)`;

const LAP = 2;
const NOTCH_H = NOTCH + LAP * 2;
const NOTCH_Y = `calc(${FOOT} - ${R + LAP - WAVE}px)`;

const WAVE_TROUGH = (WAVE * 3) / 4;
const WAVE_LAP = WAVE_TROUGH + 0.5;

const STUB_H = `calc(${FOOT} - ${R + WAVE_LAP - WAVE}px)`;
const BODY_H = `calc(100% - ${FOOT} - ${WAVE + WAVE_LAP + R}px)`;

const svg = (viewBox: string, d: string) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='${viewBox}' preserveAspectRatio='none'%3E%3Cpath d='${d}' fill='%23000'/%3E%3C/svg%3E")`;

const SOLID = "linear-gradient(#000, #000)";
const WAVEBOX = "0 0 40 12";
const NOTCHBOX = `0 0 ${NOTCH} ${NOTCH_H}`;

const layers = [
  {
    image: svg(WAVEBOX, "M0 6 Q10 0 20 6 T40 6 L40 12 L0 12 Z"),
    size: `40px ${WAVE}px`,
    position: "top left",
    repeat: "repeat-x",
  },
  {
    image: svg(WAVEBOX, "M0 6 Q10 12 20 6 T40 6 L40 0 L0 0 Z"),
    size: `40px ${WAVE}px`,
    position: "bottom left",
    repeat: "repeat-x",
  },
  {
    image: SOLID,
    size: `100% ${BODY_H}`,
    position: `left 0px top ${WAVE_LAP}px`,
    repeat: "no-repeat",
  },
  {
    image: svg(
      NOTCHBOX,
      `M0 0 H${NOTCH} V${NOTCH_H} H0 L0 ${LAP + NOTCH} A${R} ${R} 0 0 0 0 ${LAP} Z`,
    ),
    size: `${NOTCH}px ${NOTCH_H}px`,
    position: `left 0px bottom ${NOTCH_Y}`,
    repeat: "no-repeat",
  },
  {
    image: svg(
      NOTCHBOX,
      `M${NOTCH} 0 H0 V${NOTCH_H} H${NOTCH} L${NOTCH} ${LAP + NOTCH} A${R} ${R} 0 0 1 ${NOTCH} ${LAP} Z`,
    ),
    size: `${NOTCH}px ${NOTCH_H}px`,
    position: `right 0px bottom ${NOTCH_Y}`,
    repeat: "no-repeat",
  },
  {
    image: SOLID,
    size: `calc(100% - ${(NOTCH - LAP) * 2}px) ${NOTCH_H}px`,
    position: `left ${NOTCH - LAP}px bottom ${NOTCH_Y}`,
    repeat: "no-repeat",
  },
  {
    image: SOLID,
    size: `100% ${STUB_H}`,
    position: `left 0px bottom ${WAVE_LAP}px`,
    repeat: "no-repeat",
  },
];

const join = (key: keyof (typeof layers)[number]) => layers.map((l) => l[key]).join(", ");

const sheetMask = {
  WebkitMaskImage: join("image"),
  maskImage: join("image"),
  WebkitMaskSize: join("size"),
  maskSize: join("size"),
  WebkitMaskPosition: join("position"),
  maskPosition: join("position"),
  WebkitMaskRepeat: join("repeat"),
  maskRepeat: join("repeat"),
  paddingBottom: WAVE,
} as const;

// Paper noise SVG texture
const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.12'/%3E%3C/svg%3E")`;

// Web Audio API synthesized paper tear sound generator
const playPaperTearSound = () => {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    const duration = 0.75;
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Paper crispness & tactile crackle texture envelope
      const crackle =
        Math.random() > 0.8 ? (Math.random() * 2 - 1) * 1.2 : (Math.random() * 2 - 1) * 0.35;
      data[i] = crackle * Math.exp(-i / (bufferSize * 0.85));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 2200;
    filter.Q.value = 1.2;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.008, ctx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
  } catch (e) {
    // Audio autoplay fail-safe
  }
};

export const Resume = memo(function Resume() {
  const stubRef = useRef<HTMLAnchorElement>(null);
  const tearLineRef = useRef<HTMLDivElement>(null);
  const scissorsIconRef = useRef<SVGSVGElement>(null);

  const [isAnimating, setIsAnimating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handlePaperTear = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAnimating) return;
    setIsAnimating(true);
    playPaperTearSound();

    const stub = stubRef.current;
    const tearLine = tearLineRef.current;
    const scissors = scissorsIconRef.current;

    if (!stub || !tearLine) return;

    // Reset previous GSAP properties
    gsap.killTweensOf([stub, tearLine, scissors]);

    const tl = gsap.timeline({
      onComplete: () => {
        // Trigger actual file download
        const link = document.createElement("a");
        link.href = RESUME_URL;
        link.target = "_blank";
        link.download = "Akshhat_Srivastava_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloadSuccess(true);

        // Reset paper stub smoothly after pause
        setTimeout(() => {
          setDownloadSuccess(false);
          gsap.to(stub, {
            y: 0,
            x: 0,
            rotateX: 0,
            rotateY: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            onComplete: () => {
              setIsAnimating(false);
              gsap.set(tearLine, { width: "0%" });
            },
          });
        }, 2800);
      },
    });

    // Phase 1: Smooth, tactile tear across perforation line left-to-right (0.0s -> 0.75s)
    tl.to(tearLine, {
      width: "100%",
      duration: 0.75,
      ease: "power2.inOut",
    });

    if (scissors) {
      tl.to(
        scissors,
        {
          x: 240,
          rotation: 35,
          duration: 0.75,
          ease: "power2.inOut",
        },
        0,
      );
    }

    // Gentle realistic tilt & separation during tear
    tl.to(
      stub,
      {
        y: 6,
        rotation: 2.2,
        skewX: -2,
        duration: 0.75,
        ease: "power1.inOut",
      },
      0,
    );

    // Phase 2: Smooth 3D Paper Folding Effect (0.75s -> 1.6s)
    tl.to(stub, {
      y: 40,
      rotation: -6,
      scaleY: 0.5,
      scaleX: 0.92,
      rotateX: 165,
      rotateY: -12,
      transformPerspective: 800,
      transformOrigin: "center top",
      boxShadow: "0 30px 60px rgba(0,0,0,0.9)",
      duration: 0.85,
      ease: "power3.out",
    });

    // Phase 3: Elegant Floating Glide to Downloads (1.6s -> 2.5s)
    tl.to(stub, {
      y: 280,
      rotation: -10,
      scale: 0.12,
      opacity: 0,
      duration: 0.9,
      ease: "power2.inOut",
    });
  };

  return (
    <section aria-label="Curriculum Vitae" id="cv" className="w-full py-8 md:py-12 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Top Header & Primary Action Bar */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <p className="font-mono text-2xs uppercase tracking-label text-subtle">
            Curriculum Vitae
          </p>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-[#fcfdff] px-4 py-2 text-xs font-semibold text-[#000000] shadow-md transition-all duration-150 ease-out hover:bg-white hover:scale-105 active:scale-95"
          >
            <Download aria-hidden className="h-4 w-4" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Download Success Floating Toast Notification */}
        {downloadSuccess && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl border border-[#11ff99]/30 bg-[#0a0a0c]/95 px-4 py-3 text-xs font-semibold text-[#11ff99] shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-4">
            <CheckCircle2 className="size-4 text-[#11ff99]" />
            <span>Akshhat_Srivastava_Resume.pdf downloaded to your device!</span>
          </div>
        )}

        {/* Paper Sheet Container with Triple Drop Shadow Silhouette */}
        <div className="[filter:drop-shadow(0_0_0.5px_rgba(255,255,255,0.15))_drop-shadow(0_4px_12px_rgba(0,0,0,0.6))_drop-shadow(0_20px_40px_rgba(0,0,0,0.8))]">
          <article
            style={sheetMask}
            className="relative bg-[#0c0c0e] border border-white/10 text-[#d1d5db] px-6 pt-10 sm:px-9 sm:pt-12 md:px-12 overflow-hidden"
          >
            {/* Paper Texture Overlay */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light"
              style={{
                backgroundImage: GRAIN_SVG,
                backgroundSize: "200px 200px",
              }}
            />

            {/* Header Block: Name, Role, Contact Metadata & Profile Avatar */}
            <div className="relative flex items-start justify-between gap-4 sm:gap-6 border-b border-white/10 pb-6">
              <div className="min-w-0 flex-1">
                <h1 className="text-2xl font-bold tracking-tight text-[#fcfdff] sm:text-3xl font-mono uppercase">
                  {profile.name}
                </h1>
                <p className="mt-1 text-sm font-medium text-[#a1a4a5]">{profile.role}</p>

                <div className="mt-3 space-y-1 font-mono text-2xs text-[#8e9194]">
                  <p>
                    {profile.location} &nbsp;|&nbsp; {profile.phone} &nbsp;|&nbsp;{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-[#d1d5db] hover:text-[#fcfdff] underline underline-offset-2 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </p>
                  <p className="flex flex-wrap gap-x-2 gap-y-1">
                    <a
                      href={profile.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#fcfdff] transition-colors"
                    >
                      github.com/exceptional007
                    </a>
                    <span>|</span>
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#fcfdff] transition-colors"
                    >
                      linkedin.com/in/akshhat-srivastava
                    </a>
                  </p>
                </div>
              </div>

              <div className="relative size-16 sm:size-20 shrink-0 rounded-xl border border-white/15 bg-[#101012] overflow-hidden shadow-md">
                <div className="absolute inset-0 flex items-center justify-center font-mono text-sm font-bold text-[#fcfdff]">
                  {profile.initials}
                </div>
                <img
                  src="/avatar.png"
                  alt={profile.name}
                  className="relative z-10 size-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
            </div>

            {/* CV Main Body Sections */}
            <div className="relative space-y-8 pt-6 pb-4">
              {/* Section: SUMMARY */}
              <div>
                <h2 className="border-b border-white/10 pb-1.5 font-mono text-2xs uppercase tracking-label text-subtle font-semibold">
                  Summary
                </h2>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#cbd5e1]">
                  <strong className="font-semibold text-[#fcfdff]">
                    Full-stack Software & AI Engineer
                  </strong>{" "}
                  with hands-on experience shipping production applications across{" "}
                  <strong className="font-semibold text-[#fcfdff]">
                    React/TypeScript, .NET Core Web API, and FastAPI
                  </strong>
                  . Architected a{" "}
                  <strong className="font-semibold text-[#fcfdff]">
                    multilingual NLP pipeline covering 22 Indian languages
                  </strong>{" "}
                  and an{" "}
                  <strong className="font-semibold text-[#fcfdff]">
                    AI Fraud Detection & Investigation Portal with RAG chat
                  </strong>{" "}
                  at String AI India. Final-year CSE (Data Science) student maintaining an{" "}
                  <strong className="font-semibold text-[#fcfdff]">
                    82.27% academic aggregate
                  </strong>{" "}
                  with multiple hackathon podium wins.
                </p>
              </div>

              {/* Section: EXPERIENCE */}
              <div>
                <h2 className="border-b border-white/10 pb-1.5 font-mono text-2xs uppercase tracking-label text-subtle font-semibold">
                  Experience
                </h2>
                <div className="mt-4 space-y-6">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          {exp.logo && (
                            <div className="size-6 shrink-0 rounded-md bg-[#121216] overflow-hidden">
                              <img
                                src={exp.logo}
                                alt={exp.company}
                                className="size-full object-cover rounded-md"
                              />
                            </div>
                          )}
                          <h3 className="text-sm font-semibold tracking-tight text-[#fcfdff] truncate">
                            {exp.role} —{" "}
                            <span className="font-normal text-[#a1a4a5]">{exp.company}</span>
                          </h3>
                        </div>
                        <span className="font-mono text-2xs text-[#8e9194] shrink-0">
                          {exp.period} | {exp.location}
                        </span>
                      </div>
                      <p className="text-xs text-[#a1a4a5]">{exp.summary}</p>
                      <ul className="mt-2 space-y-1.5 pl-4 list-disc text-xs text-[#cbd5e1]">
                        {exp.highlights.slice(0, 3).map((item, hIdx) => (
                          <li key={hIdx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: FEATURED PROJECTS */}
              <div>
                <h2 className="border-b border-white/10 pb-1.5 font-mono text-2xs uppercase tracking-label text-subtle font-semibold">
                  Featured Projects
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projects.slice(0, 4).map((proj, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/08 bg-[#121215] p-4 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-xs sm:text-sm text-[#fcfdff]">
                          {proj.title}
                        </h3>
                        {proj.links.live && (
                          <a
                            href={proj.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-2xs text-[#3b9eff] hover:underline"
                          >
                            Live <ExternalLink className="size-3" />
                          </a>
                        )}
                      </div>
                      <p className="font-mono text-2xs text-[#8e9194]">{proj.period}</p>
                      <p className="text-xs text-[#cbd5e1] leading-relaxed line-clamp-3">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {proj.stack.map((st, stIdx) => (
                          <span
                            key={stIdx}
                            className="font-mono text-2xs px-1.5 py-0.5 rounded bg-white/06 text-[#94a3b8]"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: TECHNICAL SKILLS */}
              <div>
                <h2 className="border-b border-white/10 pb-1.5 font-mono text-2xs uppercase tracking-label text-subtle font-semibold">
                  Technical Skills
                </h2>
                <dl className="mt-3 divide-y divide-white/10 border-b border-white/10">
                  {skillGroups.map((grp, idx) => (
                    <div key={idx} className="py-2.5 sm:flex sm:gap-5">
                      <dt className="shrink-0 font-mono text-2xs uppercase tracking-label text-[#fcfdff] sm:w-44">
                        {grp.category}
                      </dt>
                      <dd className="mt-1 text-xs text-[#cbd5e1] sm:mt-0">
                        {grp.items.map((i) => i.name).join(", ")}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Section: EDUCATION & HACKATHONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <h2 className="border-b border-white/10 pb-1.5 font-mono text-2xs uppercase tracking-label text-subtle font-semibold">
                    Education & Certifications
                  </h2>
                  <div className="mt-3 space-y-3 text-xs">
                    <div>
                      <p className="font-semibold text-[#fcfdff]">B.Tech CSE (Data Science)</p>
                      <p className="font-mono text-2xs text-[#8e9194]">
                        Buddha Institute of Technology · 2022–2026
                      </p>
                      <p className="text-2xs text-[#3b9eff] font-mono mt-0.5 font-semibold">
                        82.27% Aggregate Average
                      </p>
                    </div>
                    {certifications.slice(0, 2).map((cert, cIdx) => (
                      <div key={cIdx}>
                        <p className="font-semibold text-[#fcfdff]">{cert.title}</p>
                        <p className="font-mono text-2xs text-[#8e9194]">
                          {cert.issuer} · {cert.period}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="border-b border-white/10 pb-1.5 font-mono text-2xs uppercase tracking-label text-subtle font-semibold">
                    Honors & Hackathons
                  </h2>
                  <div className="mt-3 space-y-2.5 text-xs">
                    {achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex justify-between items-start gap-2">
                        <div>
                          <p className="font-semibold text-[#fcfdff]">{ach.title}</p>
                          <p className="text-2xs text-[#8e9194]">{ach.detail}</p>
                        </div>
                        <span className="font-mono text-2xs font-bold px-1.5 py-0.5 rounded bg-[#11ff99]/15 text-[#11ff99] border border-[#11ff99]/30 shrink-0">
                          {ach.award}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Perforation Rip Progress Indicator */}
            <div
              ref={tearLineRef}
              className="absolute left-0 bottom-[calc(4rem-11px)] h-[2px] bg-gradient-to-r from-[#11ff99] via-[#3b9eff] to-[#11ff99] shadow-[0_0_14px_#11ff99] z-30 pointer-events-none"
              style={{ width: "0%" }}
            />

            {/* Interactive Paper Tear-Off Stub */}
            <a
              ref={stubRef}
              href={RESUME_URL}
              onClick={handlePaperTear}
              className="group relative -mx-6 mt-8 flex items-center justify-center gap-2 font-mono text-2xs uppercase tracking-label text-subtle transition-colors duration-200 ease-out hover:text-[#fcfdff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/40 sm:-mx-9 md:-mx-12 cursor-pointer z-20"
              style={{
                height: FOOT,
                backgroundImage: PERFORATION,
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left",
              }}
            >
              <Scissors
                ref={scissorsIconRef}
                aria-hidden
                className="h-3.5 w-3.5 group-hover:animate-snip text-[#11ff99] transition-transform"
              />
              <span className="select-none font-bold">Tear off a copy (PDF)</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
});
