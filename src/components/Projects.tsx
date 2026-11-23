import { projects } from '../data';
import { Reveal, SectionHeading, SpotlightCard } from './ui';

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          lead="Selected work."
          rest="Applied AI, research and full-stack products."
        />

        <div className="bento">
          {projects.map((p, i) => (
            <Reveal key={p.title} className={`bento-cell ${p.span}`} delay={(i % 2) * 90}>
              <SpotlightCard className={`project hue-${p.hue}`}>
                <div className="project-glow" aria-hidden="true" />
                <p className="kicker">{p.kicker}</p>
                <h3>{p.title}</h3>
                <p className="blurb">{p.blurb}</p>
                <ul className="highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="chips" aria-label="Technologies">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
