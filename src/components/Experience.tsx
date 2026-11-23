import { experience } from '../data';
import { Reveal, Rich, SectionHeading } from './ui';

export function Experience() {
  return (
    <section className="section alt" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          lead="Four years in production."
          rest="From manufacturing floors to credit card onboarding."
        />

        <ol className="timeline">
          {experience.map((role) => (
            <li className="exp" key={`${role.company}-${role.period}`}>
              <Reveal className="exp-meta">
                <p className="exp-period">{role.period}</p>
                <p className="exp-loc">{role.location}</p>
              </Reveal>

              <Reveal className="exp-body" delay={80}>
                <article className="card exp-card">
                  <header>
                    <h3>{role.title}</h3>
                    <p className="exp-company">{role.company}</p>
                  </header>

                  {role.groups.map((g, gi) => (
                    <div className="exp-group" key={gi}>
                      {g.label && <p className="group-label">{g.label}</p>}
                      <ul>
                        {g.bullets.map((b, bi) => (
                          <li key={bi}>
                            <Rich text={b} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <ul className="chips" aria-label="Technologies">
                    {role.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
