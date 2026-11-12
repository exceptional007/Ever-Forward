import { skillGroups } from "@/data/portfolio";
import { SkillIcon } from "@/components/common/SkillIcon";
export function Skills() {
  return (
    <section id="skills" className="editorial-section" aria-labelledby="skills-heading">
      <div className="editorial-heading">
        <div>
          <p className="eyebrow">03 / TOOLKIT</p>
          <h2 id="skills-heading">
            The right tools.
            <br />
            Thoughtfully applied.
          </h2>
        </div>
      </div>
      <div className="stack-rows">
        {skillGroups.map((group) => (
          <div className="stack-row" key={group.category}>
            <h3>{group.category}</h3>
            <div>
              {group.items.map((item) => (
                <SkillIcon key={item.name} name={item.name} showLabel size="sm" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
