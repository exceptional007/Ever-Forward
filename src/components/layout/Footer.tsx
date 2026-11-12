import { scrollToSection } from "@/lib/gsap-motion";
import { ArrowUp } from "lucide-react";
export function Footer() {
  return (
    <footer className="minimal-footer">
      <span>© {new Date().getFullYear()} Akshhat Srivastava</span>
      <span>EVER FORWARD.</span>
      <button aria-label="Back to top" onClick={() => scrollToSection("hero")}>
        <ArrowUp size={16} />
      </button>
    </footer>
  );
}
