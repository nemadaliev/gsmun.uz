import Logo from '../Logo';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="container hero-content">
        <div>
          <div className="eyebrow">
            <span className="dot"></span> Registration Open · Tashkent 2026
          </div>
          <h1>
            Diplomacy
            <br />
            <span className="italic">in motion.</span>
            <span className="accent-line">Voices that shape</span>
            tomorrow.
          </h1>
          <p className="lead">
            GS Model United Nations gathers more than 300 youngs, ages 10 to
            25, for a single day of negotiation, debate, and global
            problem-solving. Step into the shoes of world leaders. Find your
            voice.
          </p>
          <div className="hero-actions">
            <a href="#register" className="btn btn-primary">
              Reserve your seat <span className="btn-arrow">→</span>
            </a>
            <a href="#schedule" className="btn btn-secondary">
              View schedule
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">300+</div>
              <div className="stat-label">Delegates</div>
            </div>
            <div>
              <div className="stat-num">12h</div>
              <div className="stat-label">9AM → 9PM</div>
            </div>
            <div>
              <div className="stat-num">10–25</div>
              <div className="stat-label">Age Range</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="hero-emblem">
            <Logo />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">Scroll to explore</div>
    </header>
  );
}
