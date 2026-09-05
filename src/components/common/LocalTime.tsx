import { memo, useEffect, useState } from "react";
import { ClockIcon, MapPinIcon } from "lucide-react";

export const LocalTime = memo(function LocalTime() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTimeString(now.toLocaleTimeString("en-US", options) + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 rounded-[18px] border border-border bg-muted/40 px-3 py-1 text-xs font-mono text-muted-foreground">
      <span className="flex items-center gap-1 text-foreground">
        <MapPinIcon className="size-3 text-muted-foreground" />
        <span>Gorakhpur, UP</span>
      </span>
      <span aria-hidden className="text-border">
        •
      </span>
      <span className="flex items-center gap-1">
        <ClockIcon className="size-3 text-muted-foreground" />
        <span className="tabular-nums">{timeString || "12:00:00 AM IST"}</span>
      </span>
    </div>
  );
});
