import { skills } from '../data';
import { Reveal, SectionHeading } from './ui';

export function Skills() {
  return (
    <section className="section band dark" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          lead="The toolkit."
          rest="Deep on the JVM, fluent across the stack."
        />

        <div className="skills-grid">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 80}>
              <div className="card skill-card">
                <h3>{g.title}</h3>
                <ul className="chips">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
