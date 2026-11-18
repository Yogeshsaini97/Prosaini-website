import React from 'react';
import { topics } from '../data/siteContent.js';
import Arrow from './Arrow.jsx';

export default function TopicsSection() {
  return (
    <section id="what-we-do" className="topics-section" aria-labelledby="topics-title">
      <div className="topics-section__inner">
        <div className="topics-intro">
          <div className="topics-intro__copy">
            <div className="section-eyebrow"><span /> Pro Saini</div>
            <h2 id="topics-title">Industrial automation.<br />Engineered for your process.</h2>
            <p>Pro Saini delivers practical automation and engineering support for industrial operations—from control systems and process visibility to installation, maintenance and optimisation.</p>
          </div>
          <div className="topics-intro__aside" aria-hidden="true">
            <span className="topics-intro__orb"><span /></span>
            <span className="topics-intro__aside-label">Built around<br />your business.</span>
          </div>
        </div>

        <div className="topics-heading">
          <div>
            <div className="section-eyebrow"><span /> Explore our capabilities</div>
            <h3>Find your focus</h3>
          </div>
          <p>Explore the systems and services we bring together for your operation.</p>
        </div>

        <div className="topics-grid">
          {topics.map(([title, subtitle], index) => (
            <article className="topic-link" key={title}>
              <span className="topic-link__index">0{index + 1}</span>
              <span className="topic-link__copy"><span className="topic-link__title">{title}</span><span className="topic-link__subtitle">{subtitle}</span></span>
              <span className="topic-link__arrow"><Arrow /></span>
            </article>
          ))}
        </div>

        <div className="topics-footer">
          <span>Have a project in mind? We’d love to hear what you’re working on.</span>
          <span className="topics-footer__note">Start a conversation <Arrow /></span>
        </div>
      </div>
    </section>
  );
}
