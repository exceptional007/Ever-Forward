import { memo, useEffect, useState } from "react";
import { EyeIcon } from "lucide-react";

export const VisitorCounter = memo(function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchVisits() {
      try {
        // Primary zero-backend visitor counter API
        const res = await fetch("https://api.counterapi.dev/v1/akshhat-portfolio/visits/up");
        if (!res.ok) throw new Error("Primary counter failed");
        const data = await res.json();
        if (isMounted && typeof data.count === "number") {
          setCount(data.count);
          setLoading(false);
          return;
        }
      } catch (err) {
        // Fallback hit counter API
        try {
          const resFallback = await fetch(
            "https://api.countapi.xyz/hit/akshhat-portfolio-2026/visits",
          );
          if (resFallback.ok) {
            const dataFallback = await resFallback.json();
            if (isMounted && typeof dataFallback.value === "number") {
              setCount(dataFallback.value);
              setLoading(false);
              return;
            }
          }
        } catch {
          // Graceful fallback if both APIs fail or offline
        }
      }

      if (isMounted) {
        // Simulated fallback count based on local storage + baseline
        const stored = localStorage.getItem("akshhat_portfolio_visits");
        const baseVisits = stored ? parseInt(stored, 10) + 1 : 1420;
        localStorage.setItem("akshhat_portfolio_visits", baseVisits.toString());
        setCount(baseVisits);
        setLoading(false);
      }
    }

    fetchVisits();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#101014] px-3 py-1 text-2xs font-mono text-[#a1a4a5] shadow-inner select-none transition-colors hover:border-white/20 hover:text-[#fcfdff]"
      title="Total Portfolio Visits"
    >
      <span className="relative flex size-2 shrink-0">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#11ff99] opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-[#11ff99]" />
      </span>

      <EyeIcon className="size-3 text-[#a1a4a5]" />

      <span>{loading ? "..." : count !== null ? `${count.toLocaleString()} visits` : "Live"}</span>
    </div>
  );
});
