import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
export function Contact() {
  return (
    <section
      id="contact"
      className="editorial-section contact-editorial"
      aria-labelledby="contact-heading"
    >
      <p className="eyebrow">06 / WHAT’S NEXT</p>
      <h2 id="contact-heading">
        Let’s build
        <br />
        <span>something that matters.</span>
      </h2>
      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
        <ArrowUpRight />
      </a>
      <div className="contact-bottom">
        <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a>
        <div>
          <a href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={profile.socials.leetcode} target="_blank" rel="noreferrer">
            LeetCode ↗
          </a>
        </div>
      </div>
    </section>
  );
}
