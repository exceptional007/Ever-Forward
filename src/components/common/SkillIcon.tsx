import { memo, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export type SkillIconProps = {
  name: string;
  category?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

// Skill Icon Mapping containing Devicon CDN slugs or Custom SVGs
type IconMeta = {
  url?: string;
  svg?: JSX.Element;
  glowColor: string;
  brightFilter?: boolean;
};

const normalizeName = (name: string): string => {
  return name.trim().toLowerCase();
};

const getSkillIconMeta = (name: string): IconMeta => {
  const cdnBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
  const n = normalizeName(name);

  // Languages & Core Runtimes
  if (n === "python") {
    return {
      url: `${cdnBase}/python/python-original.svg`,
      glowColor: "rgba(55, 118, 171, 0.4)",
    };
  }
  if (n.includes("typescript") || n.includes("javascript")) {
    return {
      url: `${cdnBase}/typescript/typescript-original.svg`,
      glowColor: "rgba(49, 120, 198, 0.4)",
    };
  }
  if (n === "c#" || n === "csharp") {
    return {
      url: `${cdnBase}/csharp/csharp-original.svg`,
      glowColor: "rgba(155, 79, 150, 0.4)",
    };
  }
  if (n === "java") {
    return {
      url: `${cdnBase}/java/java-original.svg`,
      glowColor: "rgba(224, 45, 41, 0.4)",
    };
  }
  if (n === "c") {
    return {
      url: `${cdnBase}/c/c-original.svg`,
      glowColor: "rgba(40, 58, 154, 0.4)",
    };
  }
  if (n === "sql") {
    return {
      url: `${cdnBase}/postgresql/postgresql-original.svg`,
      glowColor: "rgba(51, 103, 145, 0.4)",
    };
  }

  // Frontend
  if (n.includes("react")) {
    return {
      url: `${cdnBase}/react/react-original.svg`,
      glowColor: "rgba(97, 218, 251, 0.4)",
    };
  }
  if (n.includes("tailwind")) {
    return {
      url: `${cdnBase}/tailwindcss/tailwindcss-original.svg`,
      glowColor: "rgba(56, 189, 248, 0.4)",
    };
  }
  if (n.includes("streamlit")) {
    return {
      url: `${cdnBase}/streamlit/streamlit-original.svg`,
      glowColor: "rgba(255, 75, 75, 0.4)",
    };
  }
  if (n.includes("component") || n.includes("storybook")) {
    return {
      url: `${cdnBase}/storybook/storybook-original.svg`,
      glowColor: "rgba(255, 71, 133, 0.4)",
    };
  }
  if (n.includes("bootstrap")) {
    return {
      url: `${cdnBase}/bootstrap/bootstrap-original.svg`,
      glowColor: "rgba(121, 82, 179, 0.4)",
    };
  }
  if (n.includes("html")) {
    return {
      url: `${cdnBase}/html5/html5-original.svg`,
      glowColor: "rgba(227, 76, 38, 0.4)",
    };
  }

  // Backend
  if (n.includes("fastapi")) {
    return {
      url: `${cdnBase}/fastapi/fastapi-original.svg`,
      glowColor: "rgba(5, 153, 139, 0.4)",
    };
  }
  if (n.includes(".net") || n.includes("asp.net") || n.includes("ef core")) {
    return {
      url: `${cdnBase}/dotnetcore/dotnetcore-original.svg`,
      glowColor: "rgba(81, 43, 212, 0.4)",
    };
  }
  if (n.includes("node") || n.includes("express")) {
    return {
      url: `${cdnBase}/nodejs/nodejs-original.svg`,
      glowColor: "rgba(104, 160, 99, 0.4)",
    };
  }
  if (n.includes("django")) {
    return {
      glowColor: "rgba(68, 183, 139, 0.4)",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="size-full">
          <path
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5c-1.8.4-3.2.1-4.1-.7-.9-.8-1.3-2.1-1.3-3.8 0-1.8.5-3.2 1.4-4.1.9-.9 2.2-1.3 3.8-1.3h.2V5h3v11.5zm-3-4.3c-.8 0-1.4.3-1.8.8-.4.5-.6 1.3-.6 2.4 0 1.1.2 1.8.6 2.3.4.5 1 .7 1.8.7v-6.2z"
            fill="#44B78B"
          />
        </svg>
      ),
    };
  }
  if (n.includes("celery") || n.includes("redis")) {
    return {
      url: `${cdnBase}/redis/redis-original.svg`,
      glowColor: "rgba(220, 56, 45, 0.4)",
    };
  }

  // Databases
  if (n.includes("postgres")) {
    return {
      url: `${cdnBase}/postgresql/postgresql-original.svg`,
      glowColor: "rgba(51, 103, 145, 0.4)",
    };
  }
  if (n.includes("mongo")) {
    return {
      url: `${cdnBase}/mongodb/mongodb-original.svg`,
      glowColor: "rgba(71, 162, 72, 0.4)",
    };
  }
  if (n.includes("mysql")) {
    return {
      url: `${cdnBase}/mysql/mysql-original.svg`,
      glowColor: "rgba(0, 97, 138, 0.4)",
    };
  }
  if (n.includes("qdrant")) {
    return {
      glowColor: "rgba(227, 27, 83, 0.4)",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="size-full">
          <rect width="24" height="24" rx="5" fill="#DC2626" />
          <path d="M7 7H17V17H7V7Z" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="2.5" fill="#67E8F9" />
        </svg>
      ),
    };
  }
  if (n.includes("chroma")) {
    return {
      glowColor: "rgba(245, 158, 11, 0.4)",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="size-full">
          <circle cx="12" cy="12" r="9" stroke="url(#chroma-grad)" strokeWidth="3.5" />
          <defs>
            <linearGradient id="chroma-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      ),
    };
  }

  // AI / ML
  if (n.includes("rag")) {
    return {
      glowColor: "rgba(168, 85, 247, 0.4)",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="size-full">
          <circle cx="6" cy="6" r="3" fill="#A855F7" />
          <circle cx="18" cy="6" r="3" fill="#3B82F6" />
          <circle cx="12" cy="18" r="3" fill="#10B981" />
          <path d="M7.5 8L10.5 16M16.5 8L13.5 16M8.5 6H15.5" stroke="#94A3B8" strokeWidth="1.5" />
        </svg>
      ),
    };
  }
  if (n.includes("openai")) {
    return {
      glowColor: "rgba(16, 163, 127, 0.4)",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="size-full">
          <path
            d="M22.28 9.82a6 6 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 5 4.18a6 6 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 6 6 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 6 6 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zm-9.66-4.13a4.47 4.47 0 0 1-.54-3.01l.14.08 4.79 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65zM2.25 6.95a4.47 4.47 0 0 1 2.34-1.97v5.67a.79.79 0 0 0 .39.68l5.84 3.37-2.02 1.16a.08.08 0 0 1-.07 0L3.9 13.07a4.5 4.5 0 0 1-1.65-6.12zm15.85 3.17l-5.84-3.37 2.01-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.67 8.1v-5.68a.79.79 0 0 0-.4-.68zm2.01-3.02l-.14-.09-4.78-2.75a.77.77 0 0 0-.78 0L8.87 6.63V4.3a.08.08 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.37 4.67zM8.3 12.86l-2.01-1.16a.08.08 0 0 1-.04-.06V6.06a4.5 4.5 0 0 1 7.37-3.45l-.14.08-4.78 2.75a.79.79 0 0 0-.39.68v6.74z"
            fill="#10B981"
          />
        </svg>
      ),
    };
  }
  if (n.includes("vector") || n.includes("embedding")) {
    return {
      glowColor: "rgba(59, 130, 246, 0.4)",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="size-full">
          <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#3B82F6" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#6366F1" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#06B6D4" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#8B5CF6" />
        </svg>
      ),
    };
  }
  if (n.includes("pandas") || n.includes("numpy")) {
    return {
      url: `${cdnBase}/pandas/pandas-original.svg`,
      glowColor: "rgba(21, 4, 90, 0.4)",
    };
  }
  if (n.includes("ocr") || n.includes("nlp")) {
    return {
      glowColor: "rgba(245, 158, 11, 0.4)",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="size-full">
          <rect
            x="4"
            y="3"
            width="16"
            height="18"
            rx="2"
            stroke="#F59E0B"
            strokeWidth="2"
            fill="#18181B"
          />
          <line
            x1="8"
            y1="8"
            x2="16"
            y2="8"
            stroke="#FCD34D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="8"
            y1="12"
            x2="14"
            y2="12"
            stroke="#FCD34D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="8"
            y1="16"
            x2="12"
            y2="16"
            stroke="#FCD34D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    };
  }

  // Cloud & DevOps
  if (n.includes("azure")) {
    return {
      url: `${cdnBase}/azure/azure-original.svg`,
      glowColor: "rgba(0, 127, 255, 0.4)",
    };
  }
  if (n.includes("docker")) {
    return {
      url: `${cdnBase}/docker/docker-original.svg`,
      glowColor: "rgba(36, 150, 237, 0.4)",
    };
  }
  if (n.includes("git")) {
    return {
      url: `${cdnBase}/git/git-original.svg`,
      glowColor: "rgba(240, 80, 50, 0.4)",
    };
  }
  if (n.includes("vercel")) {
    return {
      glowColor: "rgba(255, 255, 255, 0.5)",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="size-full">
          <path d="M12 1L24 22H0L12 1Z" fill="#FFFFFF" />
        </svg>
      ),
    };
  }
  if (n.includes("render")) {
    return {
      glowColor: "rgba(0, 229, 153, 0.4)",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="size-full">
          <path
            d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8.4 12 12 4.8 8.4 12 4.8zM4 10.2l7 3.5v7l-7-3.5v-7zm9 10.5v-7l7-3.5v7l-7 3.5z"
            fill="#00E599"
          />
        </svg>
      ),
    };
  }
  if (n.includes("aws") || n.includes("s3")) {
    return {
      url: `${cdnBase}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
      glowColor: "rgba(255, 153, 0, 0.4)",
    };
  }

  // Tooling & QA
  if (n.includes("playwright")) {
    return {
      url: `${cdnBase}/playwright/playwright-original.svg`,
      glowColor: "rgba(46, 173, 70, 0.4)",
    };
  }
  if (n.includes("postman")) {
    return {
      url: `${cdnBase}/postman/postman-original.svg`,
      glowColor: "rgba(255, 108, 55, 0.4)",
    };
  }
  if (n.includes("dbeaver")) {
    return {
      url: `${cdnBase}/dbeaver/dbeaver-original.svg`,
      glowColor: "rgba(55, 47, 45, 0.4)",
      brightFilter: true,
    };
  }
  if (n.includes("jwt")) {
    return {
      glowColor: "rgba(236, 72, 153, 0.4)",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="size-full">
          <path
            d="M12 2L3 7V12C3 17.5 7 21 12 22C17 21 21 17.5 21 12V7L12 2Z"
            fill="#EC4899"
            fillOpacity="0.2"
            stroke="#EC4899"
            strokeWidth="2"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="#F472B6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    };
  }
  if (n.includes("cloudinary")) {
    return {
      glowColor: "rgba(52, 144, 247, 0.4)",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" className="size-full">
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
            fill="#3490F7"
          />
        </svg>
      ),
    };
  }

  return {
    url: `${cdnBase}/javascript/javascript-original.svg`,
    glowColor: "rgba(247, 223, 30, 0.4)",
  };
};

export const SkillIcon = memo(function SkillIcon({
  name,
  category,
  showLabel = false,
  size = "md",
  className = "",
}: SkillIconProps) {
  const [imgError, setImgError] = useState(false);
  const meta = getSkillIconMeta(name);

  // Slightly reduced container & icon sizes for cleaner proportion & spacing
  const containerSizeMap = {
    sm: "size-6.5 sm:size-7.5 p-1",
    md: "size-9.5 sm:size-10.5 p-2",
    lg: "size-12 sm:size-13 p-2.5",
  };

  const iconSizeMap = {
    sm: "size-3.5 sm:size-4",
    md: "size-5 sm:size-5.5",
    lg: "size-7 sm:size-7.5",
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={`group relative flex items-center justify-center rounded-xl border border-transparent bg-[#101012] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-[#161619] cursor-pointer select-none ${
            showLabel ? "px-3.5 py-2.5 gap-3" : containerSizeMap[size]
          } ${className}`}
        >
          {/* Subtle Glow Backdrop on Hover */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${meta.glowColor}, transparent 70%)`,
            }}
          />

          {/* Icon Container with Scale-Up effect */}
          <div
            className={`relative z-10 flex shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-110 ${
              iconSizeMap[size]
            }`}
          >
            {meta.svg ? (
              meta.svg
            ) : meta.url && !imgError ? (
              <img
                src={meta.url}
                alt={`${name} icon`}
                className={`size-full object-contain filter drop-shadow-sm transition-all group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] ${
                  meta.brightFilter ? "brightness-150 contrast-125" : ""
                }`}
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex size-full items-center justify-center rounded-md bg-white/10 text-2xs font-mono font-bold text-white">
                {name.charAt(0)}
              </div>
            )}
          </div>

          {/* Optional Text Label */}
          {showLabel && (
            <span className="relative z-10 font-mono text-xs text-[#fcfdff] font-medium tracking-tight group-hover:text-white transition-colors truncate">
              {name}
            </span>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="bg-[#18181b] border border-white/14 text-[#fcfdff] font-mono text-xs shadow-xl"
      >
        <p className="font-semibold text-white">{name}</p>
        {category && <p className="text-2xs text-[#a1a4a5]">{category}</p>}
      </TooltipContent>
    </Tooltip>
  );
});
