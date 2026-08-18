import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Aether home">
          AETHER
        </a>
        <nav aria-label="Primary navigation">
          <a href="#systems">Systems</a>
          <a href="#mission">Mission</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-grid" />
        <div className="hero-copy">
          <p className="eyebrow">AUTONOMOUS AERIAL SYSTEMS / 01</p>
          <h1>Above the ordinary.</h1>
          <p className="lede">
            Intelligent aerial infrastructure for the places where precision,
            endurance and autonomy matter most.
          </p>
          <a className="button" href="#systems">Explore the systems <span>↗</span></a>
        </div>
        <div className="orbital" aria-hidden="true">
          <div className="orbital-ring ring-a" />
          <div className="orbital-ring ring-b" />
          <div className="orbital-core" />
        </div>
        <div className="hero-meta">
          <span>47° 32′ N</span>
          <span>008° 32′ E</span>
        </div>
      </section>

      <section id="systems" className="systems section">
        <div className="section-intro">
          <p className="eyebrow">THE AETHER PLATFORM / 02</p>
          <h2>Airborne intelligence, built for the real world.</h2>
        </div>
        <div className="system-grid">
          <article className="system-card card-large">
            <div className="card-visual drone-visual"><span>01</span><div className="drone" /></div>
            <div className="card-copy"><p>AE-01 / SCOUT</p><h3>See farther.</h3><p>Long-range autonomous inspection for infrastructure, terrain and critical assets.</p></div>
          </article>
          <article className="system-card">
            <div className="card-visual pulse-visual"><span>02</span><div className="pulse" /></div>
            <div className="card-copy"><p>AE-04 / SENTINEL</p><h3>Stay ahead.</h3><p>Persistent aerial awareness with adaptive routing and edge intelligence.</p></div>
          </article>
          <article className="system-card">
            <div className="card-visual mesh-visual"><span>03</span><div className="mesh" /></div>
            <div className="card-copy"><p>AE-N / NETWORK</p><h3>Think together.</h3><p>A distributed fleet that learns from every flight and every environment.</p></div>
          </article>
        </div>
      </section>

      <section id="mission" className="manifesto section">
        <div className="manifesto-line" />
        <p className="eyebrow">AUTONOMY / 03</p>
        <h2>We don't put people in the sky.<br /><em>We put intelligence there.</em></h2>
        <div className="manifesto-foot"><span>From first flight to full autonomy.</span><span>01—04 / AETHER LABS</span></div>
      </section>

      <section className="data section">
        <div className="data-heading"><p className="eyebrow">FLIGHT DATA / 04</p><h2>Designed around certainty.</h2></div>
        <div className="metrics">
          <div><strong>12.4</strong><span>HOURS / MAX ENDURANCE</span></div>
          <div><strong>48</strong><span>KM / AUTONOMOUS RANGE</span></div>
          <div><strong>0.7</strong><span>SEC / DECISION LATENCY</span></div>
          <div><strong>99.8</strong><span>% / SYSTEM AVAILABILITY</span></div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <p className="eyebrow">AETHER / 05</p>
        <h2>The next horizon<br />is already moving.</h2>
        <a className="button button-light" href="mailto:hello@aether.example">Start a conversation <span>↗</span></a>
      </section>

      <footer><span>AETHER © 2026</span><span>AUTONOMOUS AERIAL SYSTEMS</span><span>PRECISION / AUTONOMY / ALTITUDE</span></footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
);
