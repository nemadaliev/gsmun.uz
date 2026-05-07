'use client';

import { useReveal } from '@/lib/useReveal';

const timeline = [
  {
    time: '08:30 — 09:00',
    title: 'Registration & Welcome Coffee',
    desc: 'Check-in, badge collection, committee placement confirmation, and opening refreshments in the main lobby.',
    highlight: false,
  },
  {
    time: '09:00 — 10:00',
    title: 'Opening Ceremony',
    desc: 'Welcome address from the Secretariat, keynote remarks, roll call of delegations, and the official gavel.',
    highlight: true,
  },
  {
    time: '10:15 — 12:30',
    title: 'Committee Session I',
    desc: 'Opening speeches, motion to set the agenda, and the first round of moderated and unmoderated caucuses.',
    highlight: false,
  },
  {
    time: '12:30 — 13:30',
    title: 'Lunch & Lobbying',
    desc: 'Catered lunch in the dining hall — and where most of the real diplomacy actually happens.',
    highlight: false,
  },
  {
    time: '13:30 — 16:00',
    title: 'Committee Session II',
    desc: 'Working papers merge into draft resolutions. Sponsors and signatories form blocs.',
    highlight: false,
  },
  {
    time: '16:00 — 16:30',
    title: 'Tea Break',
    desc: 'A moment to breathe, regroup, and rehearse closing arguments.',
    highlight: false,
  },
  {
    time: '16:30 — 19:00',
    title: 'Committee Session III',
    desc: 'Amendments, voting procedure, final speeches, and the adoption of resolutions.',
    highlight: false,
  },
  {
    time: '19:00 — 20:00',
    title: 'Dinner',
    desc: 'A celebratory meal with delegates, chairs, and the secretariat.',
    highlight: false,
  },
  {
    time: '20:00 — 21:00',
    title: 'Closing Ceremony & Awards',
    desc: 'Best Delegate, Outstanding Delegate, Honorable Mention, and Best Position Paper announced. Certificates distributed.',
    highlight: true,
  },
];

export default function Schedule() {
  useReveal();

  return (
    <section id="schedule">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-num">— 02</div>
            <h2 className="section-title">
              A day, <span className="italic">structured.</span>
            </h2>
          </div>
          <p className="section-sub">
            Twelve hours engineered for momentum — from gavel-down to closing
            ceremony.
          </p>
        </div>
        <div className="schedule-wrap">
          <div className="schedule-info reveal">
            <div className="day-label">Conference Day</div>
            <h3>
              09:00
              <br />→ 21:00
            </h3>
            <p>
              Doors open at 8:30 for check-in. Final delegates depart by 21:30.
              Snacks and refreshments provided throughout the day; lunch and
              dinner included in registration.
            </p>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`timeline-item reveal${item.highlight ? ' highlight' : ''}`}
                style={{ transitionDelay: `${(i % 6) * 60}ms` }}
              >
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
