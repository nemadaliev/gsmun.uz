'use client';

import { useReveal } from '@/lib/useReveal';

const cards = [
  {
    num: '01',
    title: 'Real-world debate',
    desc: 'Delegates take on country roles, draft resolutions, and negotiate live — modeled on actual UN procedure and parliamentary rules.',
  },
  {
    num: '02',
    title: 'Public speaking craft',
    desc: 'From opening speeches to lobbying in the corridors, every minute sharpens articulation, persuasion, and presence.',
  },
  {
    num: '03',
    title: 'Awards & certificates',
    desc: 'Best Delegate, Outstanding Delegate, Honorable Mentions, and signed certificates of participation — credentials that travel.',
  },
  {
    num: '04',
    title: 'One day, full immersion',
    desc: '9AM to 9PM of structured ceremony, committee sessions, breaks, and a closing celebration. Built for momentum.',
  },
  {
    num: '05',
    title: 'Cross-age cohorts',
    desc: 'Age-tiered committees pair newcomers with veterans — middle schoolers, high schoolers, and university students each find their level.',
  },
  {
    num: '06',
    title: 'Network for life',
    desc: 'Meet delegates from across Tashkent and beyond. The friendships and contacts here often outlast the conference itself.',
  },
];

export default function About() {
  useReveal();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-num">— 01</div>
            <h2 className="section-title">
              Why <span className="italic">GS MUN</span>
            </h2>
          </div>
          <p className="section-sub">
            More than a conference — an arena where future ambassadors,
            policy-makers, and global thinkers test their ideas in front of
            their peers.
          </p>
        </div>
        <div className="about-grid">
          {cards.map((card, i) => (
            <div
              key={card.num}
              className="about-card reveal"
              style={{ transitionDelay: `${(i % 6) * 80}ms` }}
            >
              <div className="icon">{card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
