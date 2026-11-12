import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile, RESUME_URL } from "@/data/portfolio";
export function Hero() {
  return (
    <section id="hero" className="editorial-hero" aria-labelledby="hero-heading">
      <div className="hero-topline">
        <span className="eyebrow">EVER FORWARD / AKSHHAT SRIVASTAVA</span>
        <span className="eyebrow hero-location">GORAKHPUR, INDIA</span>
      </div>
      <div className="hero-composition">
        <div>
          <p className="hero-role">Software Engineer · AI Engineer</p>
          <h1 id="hero-heading">
            <span className="hero-line hero-line-primary">Building</span>
            <span className="hero-line hero-line-primary">intelligent systems.</span>
            <span className="hero-line">Moving ideas forward.</span>
          </h1>
          <p className="hero-caption">Full-stack products. Applied AI. Measurable impact.</p>
          <div className="editorial-actions">
            <a className="primary-action" href="#projects">
              View work <ArrowDownRight size={17} />
            </a>
            <a className="text-action" href={RESUME_URL} target="_blank" rel="noreferrer">
              Resume <ArrowUpRight size={16} />
            </a>
            <a aria-label="GitHub" href={profile.socials.github} target="_blank" rel="noreferrer">
              <Github size={19} />
            </a>
            <a
              aria-label="LinkedIn"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </div>
        <figure className="portrait">
          <img
            src="/avatar.png"
            alt="Akshhat Srivastava"
            width="420"
            height="520"
            fetchPriority="high"
          />
          <figcaption>
            <span>01 / THE ENGINEER</span>
            <span>Unbroken. Unstoppable. Unfinished.</span>
          </figcaption>
        </figure>
      </div>
      <div className="hero-baseline">
        <p>
          <span className="availability-dot" />
          {profile.availability}
        </p>
        <a href="#projects">
          SCROLL TO EXPLORE <ArrowDownRight size={15} />
        </a>
      </div>
      <div className="proof-strip">
        {[
          ["6", "months of internships"],
          ["22", "Indian languages"],
          ["261", "automated tests"],
          ["190+", "LeetCode problems"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
