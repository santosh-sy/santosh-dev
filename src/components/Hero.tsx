import { profile } from '../data';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="blobs" aria-hidden="true">
        <i className="blob b1" />
        <i className="blob b2" />
        <i className="blob b3" />
      </div>

      <div className="container hero-inner">
        <p className="pill hero-fade" style={{ animationDelay: '80ms' }}>
          <span className="dot" /> {profile.role} at SVATS · {profile.location}
        </p>
        <h1 className="hero-fade" style={{ animationDelay: '180ms' }}>
          {profile.name}.
        </h1>
        <p className="hero-sub hero-fade" style={{ animationDelay: '300ms' }}>
          <span className="grad">Backend at scale.</span> AI that ships.
        </p>
        <p className="hero-copy hero-fade" style={{ animationDelay: '400ms' }}>
          Event-driven systems, enterprise APIs and retrieval-powered products — engineered to be
          fast, reliable and quietly elegant.
        </p>
        <div className="cta-row hero-fade" style={{ animationDelay: '520ms' }}>
          <a className="btn primary" href="#projects">
            View my work
          </a>
          <a className="btn link" href="#contact">
            Get in touch <span aria-hidden="true">›</span>
          </a>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  );
}
