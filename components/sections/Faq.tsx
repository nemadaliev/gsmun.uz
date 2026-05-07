'use client';

import { useState } from 'react';
import { useReveal } from '@/lib/useReveal';

const faqs = [
  {
    q: 'Is this my first MUN — am I welcome?',
    a: 'Absolutely. Around 40% of GS MUN delegates are first-timers. Beginner-friendly committees (UNICEF) and a pre-conference orientation walk you through procedure, position papers, and what to expect.',
  },
  {
    q: 'What is the dress code?',
    a: 'Western Business Attire. Suits, blazers, dress shirts, ties; modest dresses or skirts; closed-toe shoes. The dress code is part of the experience — diplomats look like diplomats.',
  },
  {
    q: 'How do I prepare a position paper?',
    a: "Once registered, you'll receive a study guide for your committee with topic background, key questions, and a position-paper template. Position papers are due 7 days before the conference.",
  },
  {
    q: 'What languages will the conference run in?',
    a: 'English is the working language for all committees. Working knowledge sufficient for spoken debate is expected — fluency is not required.',
  },
  {
    q: 'Can my school send a group?',
    a: 'Yes, and we encourage it. Schools sending 10+ delegates qualify for group registration support and a dedicated chaperone briefing. Email gsmun.uz@gmail.com for group rates.',
  },
  {
    q: 'What happens if I need to cancel?',
    a: 'Refunds are available up to 14 days before the conference. After that, your registration may be transferred to another delegate from your school.',
  },
];

export default function Faq() {
  useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-num">— 05</div>
            <h2 className="section-title">
              Frequently <span className="italic">asked.</span>
            </h2>
          </div>
          <p className="section-sub">
            If you don&apos;t see your question, write to us at{' '}
            <a
              href="mailto:gsmun.uz@gmail.com"
              style={{ color: 'var(--secondary)', textDecoration: 'none' }}
            >
              gsmun.uz@gmail.com
            </a>
            .
          </p>
        </div>
        <div className="faq-grid">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item reveal visible${openIndex === i ? ' open' : ''}`}
              onClick={() => toggle(i)}
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <div className="faq-q">
                {item.q} <span className="toggle">+</span>
              </div>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
