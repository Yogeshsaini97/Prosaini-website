import React, { useEffect, useState } from 'react';
import { services } from '../data/services.js';
import Arrow from './Arrow.jsx';

function ServiceCard({ service, onOpen }) {
  return (
    <article className="service-card">
      <button className="service-card__image-button" type="button" onClick={() => onOpen(service)} aria-label={`View ${service.category} overview`}>
        <img src={service.image} alt={service.imageAlt} loading="lazy" />
        <span className="service-card__image-action">View overview <span aria-hidden="true">↗</span></span>
      </button>
      <div className="service-card__content">
        <div className="service-card__category">{service.category}</div>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <ul>
          {service.offerings.map((offering) => <li key={offering}>{offering}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    if (!activeService) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveService(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.body.classList.add('has-open-lightbox');
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.classList.remove('has-open-lightbox');
    };
  }, [activeService]);

  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="services-section__inner">
        <div className="services-section__header">
          <div>
            <div className="section-eyebrow"><span /> Our services</div>
            <h2 id="services-title">Engineering for the<br /><span>way your plant works.</span></h2>
          </div>
          <p>From control and monitoring to ongoing care, our team brings the technology and practical support your operation needs.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => <ServiceCard key={service.id} service={service} onOpen={setActiveService} />)}
        </div>

        <div className="services-section__note">
          <span>Need a specific control system or equipment in mind?</span>
          <a href="#contact">Talk with our team <Arrow /></a>
        </div>
      </div>

      {activeService && (
        <div className="service-lightbox" role="dialog" aria-modal="true" aria-labelledby="service-lightbox-title" onClick={(event) => {
          if (event.target === event.currentTarget) setActiveService(null);
        }}>
          <div className="service-lightbox__panel">
            <div className="service-lightbox__header">
              <div>
                <div className="service-card__category">{activeService.category}</div>
                <h3 id="service-lightbox-title">{activeService.title}</h3>
              </div>
              <button type="button" onClick={() => setActiveService(null)} aria-label="Close service overview">×</button>
            </div>
            <img src={activeService.image} alt={activeService.imageAlt} />
          </div>
        </div>
      )}
    </section>
  );
}
