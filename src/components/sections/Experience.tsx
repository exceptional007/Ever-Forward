import { experiences } from "@/data/portfolio";
const outcomes = [
  [
    "82% → 94% safety accuracy · 5,000 samples · 22 languages",
    "120 API + 141 UI tests · 100% pass rate in recorded runs",
    "500+ investigation records · 92% OCR accuracy",
  ],
  [
    "100+ documents · 90% Recall@5 on 100 benchmark queries",
    "3 Docker services · 3 Azure targets · 4 supporting services",
    "100% feature parity · 5 modules · 3 migrated tables",
  ],
];
export function Experience() {
  return (
    <section id="experience" className="editorial-section" aria-labelledby="experience-heading">
      <div className="editorial-heading">
        <div>
          <p className="eyebrow">02 / EXPERIENCE</p>
          <h2 id="experience-heading">Built. Tested. Shipped.</h2>
        </div>
        <span className="section-note">6 MONTHS / STRING AI INDIA</span>
      </div>
      <div className="experience-list">
        {experiences.slice(0, 2).map((job, index) => (
          <article key={job.role} className="experience-row">
            <div className="experience-date">
              <span>{job.period}</span>
              <span>{job.location}</span>
            </div>
            <div>
              <div className="company-line">
                <img src={job.logo} alt="" width="28" height="28" />
                <span>{job.company}</span>
              </div>
              <h3>{job.role}</h3>
              <p className="work-description">
                {index === 0
                  ? "Multilingual safety, AI investigation and full-stack product engineering."
                  : "Retrieval systems, cloud deployments and a full-stack platform migration."}
              </p>
              <ul className="outcome-list">
                {outcomes[index]?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="work-stack">
                {job.stack.slice(0, 5).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
