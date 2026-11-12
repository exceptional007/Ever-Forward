import { achievements } from "@/data/portfolio";
export function Achievements() {
  return (
    <section id="achievements" className="editorial-section" aria-labelledby="awards-heading">
      <div className="editorial-heading">
        <div>
          <p className="eyebrow">04 / RECOGNITION</p>
          <h2 id="awards-heading">A few milestones.</h2>
        </div>
      </div>
      <div className="award-list">
        {achievements.slice(0, 3).map((award) => (
          <div className="award-row" key={award.title}>
            <span className="award-rank">
              {award.award === "1st Position" ? "01" : "02"}
              <small>{award.award === "1st Position" ? "PLACE" : "RUNNER UP"}</small>
            </span>
            <h3>{award.title}</h3>
            <span className="eyebrow">{award.period}</span>
          </div>
        ))}
      </div>
      <div className="cert-line">
        <span>
          NPTEL · IIT Roorkee / OOPs <strong>82%</strong>
        </span>
        <span>Cloud Mastery / 2024</span>
      </div>
    </section>
  );
}
