import Logo from './Logo';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="logo">
          <div className="logo-mark">
            <Logo />
          </div>
          <div className="logo-text">GS MUN</div>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#schedule">Schedule</a>
          </li>
          <li>
            <a href="#committees">Committees</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <a href="#register" className="nav-cta">
          Register →
        </a>
        <button className="menu-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
