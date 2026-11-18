import React from 'react';
import { workSteps } from '../data/siteContent.js';
import Arrow from './Arrow.jsx';

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="process-section" aria-labelledby="process-title">
      <div className="process-section__inner">
        <div className="process-section__header">
          <div>
            <div className="section-eyebrow"><span /> How we work</div>
            <h2 id="process-title">A clear process.<br /><span>Work that moves forward.</span></h2>
          </div>
          <p>Strong outcomes come from good collaboration. We keep the work transparent, the goals in view, and the right people involved at every stage.</p>
        </div>

        <div className="process-steps">
          {workSteps.map((step) => (
            <article className="process-step" key={step.number}>
              <div className="process-step__marker"><span>{step.number}</span><i aria-hidden="true" /></div>
              <div className="process-step__content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="process-step__detail">{step.detail}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="process-section__footer">
          <span>Every engagement is tailored to your goals, team, and timeline.</span>
          <a href="#contact">Start a conversation <Arrow /></a>
        </div>
      </div>
    </section>
  );
}
