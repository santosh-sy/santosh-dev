import { education, profile } from '../data';
import { useWordProgress } from '../hooks';
import { Reveal } from './ui';

const words = profile.statement.split(' ');

export function About() {
  const [ref, lit] = useWordProgress(words.length);

  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>

        <p className="statement" ref={ref} aria-label={profile.statement}>
          {words.map((w, i) => (
            <span key={i} className={`w ${i < lit ? 'on' : ''}`} aria-hidden="true">
              {w}{' '}
            </span>
          ))}
        </p>

        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 90}>
              <div className="edu card">
                <p className="edu-date">{e.date}</p>
                <h3>{e.school}</h3>
                <p className="edu-degree">{e.degree}</p>
                <p className="edu-detail">{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
