import { profile } from '../data';
import { Reveal } from './ui';

export function Contact() {
  return (
    <section className="section alt contact" id="contact">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="contact-title">
            Let’s build something <span className="grad">worth shipping.</span>
          </h2>
          <p className="contact-copy">
            Open to software engineering roles and interesting problems in backend systems and
            applied AI.
          </p>
          <div className="cta-row center">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <span aria-hidden="true">›</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
