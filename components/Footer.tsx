import Logo from './Logo';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <div className="logo-mark">
                <Logo />
              </div>
              <div className="logo-text">GS MUN</div>
            </a>
            <p>
              GS Model United Nations — a one-day diplomatic conference uniting
              more than 300 young leaders from across Uzbekistan and beyond.
            </p>
            <div className="social">
              <a
                href="https://instagram.com/gsmun.uz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://t.me/gsmun_uz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 3.5L2.5 10.8c-1 .4-1 .9.1 1.2l4.6 1.4 1.8 5.6c.2.6.5.7 1 .3l2.7-2.4 4.6 3.4c.9.5 1.5.2 1.7-.8L22.5 4.5c.3-1.2-.4-1.7-1.4-1zM9.4 14.7l-.5 4 .8-2.6 7.6-6.9c.3-.3 0-.5-.4-.3l-9.4 5.9 1.9.6z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Conference</h4>
            <ul>
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
                <a href="#register">Register</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:gsmun.uz@gmail.com">gsmun.uz@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 GS MUN. All rights reserved.</div>
          <div className="made">Built with care in Tashkent</div>
        </div>
      </div>
    </footer>
  );
}
