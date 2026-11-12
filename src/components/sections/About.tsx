export function About() {
  return (
    <section id="about" className="editorial-section about-layout" aria-labelledby="about-heading">
      <div>
        <p className="eyebrow">05 / A LITTLE CONTEXT</p>
        <h2 id="about-heading">
          Curiosity, with
          <br />a compiler.
        </h2>
        <p className="about-copy">
          Final-year CSE–Data Science student, exploring retrieval systems, multilingual AI and
          thoughtful software design.
        </p>
        <p className="about-note">IEEE Student Branch · ICICAT-2025</p>
      </div>
      <div className="education-list">
        <div>
          <span className="eyebrow">2023 — PRESENT</span>
          <h3>Buddha Institute of Technology</h3>
          <p>B.Tech · CSE (Data Science)</p>
          <strong>
            82.27% <small>through semester 6</small>
          </strong>
        </div>
        <div>
          <span className="eyebrow">2022 — 2023</span>
          <h3>Divine Public School</h3>
          <p>CBSE · Intermediate (PCM)</p>
          <strong>89.5%</strong>
        </div>
      </div>
    </section>
  );
}
