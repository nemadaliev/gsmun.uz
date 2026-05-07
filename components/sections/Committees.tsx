'use client';

import { useReveal } from '@/lib/useReveal';

const committees = [
  {
    code: 'UNGA · ALL LEVELS',
    title: 'General Assembly',
    desc: 'The flagship committee — every member state, one vote. Designed for delegates who want the broadest stage and the largest debate floor.',
    topic: 'Global cooperation on AI governance and emerging technologies',
  },
  {
    code: 'UNSC · ADVANCED',
    title: 'Security Council',
    desc: 'Fifteen seats, five vetoes, one table. Fast-paced crisis simulation reserved for experienced delegates aged 16+.',
    topic: 'Cybersecurity threats and state sovereignty in the digital age',
  },
  {
    code: 'ECOSOC · INTERMEDIATE',
    title: 'Economic & Social Council',
    desc: 'Where development meets policy. Delegates negotiate on poverty, education, climate finance, and the SDGs.',
    topic: 'Bridging the digital divide in emerging economies',
  },
  {
    code: 'UNHRC · INTERMEDIATE',
    title: 'Human Rights Council',
    desc: 'Forty-seven member states debating the most pressing human rights questions of our time.',
    topic: 'Protection of digital rights and freedom of expression online',
  },
  {
    code: 'UNICEF · BEGINNER',
    title: 'UNICEF',
    desc: 'Made for younger delegates (10–14). Approachable topics, attentive chairs, and the same procedure as the big tables.',
    topic: 'Quality education and child welfare in conflict zones',
  },
  {
    code: 'WHO · INTERMEDIATE',
    title: 'World Health Organization',
    desc: 'Public health policy under pressure. Pandemic preparedness, equitable access, and the politics of medicine.',
    topic: 'Strengthening global pandemic response frameworks',
  },
];

export default function Committees() {
  useReveal();

  return (
    <section id="committees" className="committees">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-num">— 03</div>
            <h2 className="section-title">
              The <span className="italic">committees.</span>
            </h2>
          </div>
          <p className="section-sub">
            Six tracks across age tiers. Pick the table that matches your level
            — or one that pushes you.
          </p>
        </div>
        <div className="committees-grid">
          {committees.map((c, i) => (
            <div
              key={c.code}
              className="committee reveal"
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <span className="committee-code">{c.code}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="committee-topic">{c.topic}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
