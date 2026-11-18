import React from 'react';
import Arrow from './Arrow.jsx';

export default function PageHero({ eyebrow, title, accent, description, actionLabel = 'Discuss your project', actionHref = '/contact' }) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        <div className="eyebrow"><span className="eyebrow__line" />{eyebrow}</div>
        <h1>{title}<br /><span>{accent}</span></h1>
        <p>{description}</p>
        <a className="button button--primary" href={actionHref}>{actionLabel} <Arrow /></a>
      </div>
      <div className="page-hero__index" aria-hidden="true">PRO<br /><span>SAINI</span></div>
    </section>
  );
}
