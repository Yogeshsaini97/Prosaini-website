import React from 'react';
import Arrow from './Arrow.jsx';

const industries = [
  { number: '01', name: 'Discrete manufacturing', detail: 'Machine control, production lines, CNC and drive systems.', tags: ['PLC & HMI', 'Drives', 'Integration'] },
  { number: '02', name: 'Process industries', detail: 'Process visibility, data acquisition, alarms and operator control.', tags: ['SCADA', 'Monitoring', 'Reporting'] },
  { number: '03', name: 'Metals & material handling', detail: 'Automation and control for demanding equipment and plant workflows.', tags: ['Control systems', 'Panels', 'Support'] },
  { number: '04', name: 'Food & beverage', detail: 'Automation tailored to production equipment and operating requirements.', tags: ['PLC & HMI', 'System design', 'Service'] },
  { number: '05', name: 'Utilities & infrastructure', detail: 'Connected monitoring and control for distributed processes and equipment.', tags: ['SCADA', 'IoT', 'Data'] },
  { number: '06', name: 'Machine builders & OEMs', detail: 'Controls, operator interfaces, panels and commissioning for machines.', tags: ['Programming', 'Panels', 'Commissioning'] },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section" aria-labelledby="industries-title">
      <div className="industries-section__inner">
        <div className="industries-section__intro">
          <div>
            <div className="section-eyebrow"><span /> Industry applications</div>
            <h2 id="industries-title">Different industries.<br /><span>One thoughtful approach.</span></h2>
          </div>
          <p>We adapt automation and engineering to the process, equipment and operating needs in front of us. These are some of the environments our capabilities can support.</p>
        </div>
        <div className="industries-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.number}>
              <div className="industry-card__top"><span>{industry.number}</span><Arrow /></div>
              <h3>{industry.name}</h3>
              <p>{industry.detail}</p>
              <div className="industry-card__tags">{industry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="industries-section__footer"><span>Have a unique application or a legacy system to improve?</span><a href="/contact">Let’s discuss it <Arrow /></a></div>
      </div>
    </section>
  );
}
