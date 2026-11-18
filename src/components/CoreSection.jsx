import React from 'react';
import { corePillars } from '../data/siteContent.js';
import CoreCard from './CoreCard.jsx';

export default function CoreSection() {
  return (
    <section className="core-section" aria-labelledby="core-title">
      <div className="core-section__heading">
        <div className="section-eyebrow"><span /> What we do</div>
        <h2 id="core-title">The core of what we do</h2>
        <p>Industrial automation, monitoring and engineering—planned around the way your operation works.</p>
      </div>
      <div className="core-grid">
        {corePillars.map((item) => <CoreCard item={item} key={item.number} />)}
      </div>
    </section>
  );
}
