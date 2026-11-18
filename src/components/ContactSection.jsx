import React from 'react';
import Arrow from './Arrow.jsx';

const contactDetails = [
  { label: 'Call our team', value: '+91 62808 85499', href: 'tel:+916280885499', symbol: '↗' },
  { label: 'Email', value: 'sainienterprise1991@gmail.com', href: 'mailto:sainienterprise1991@gmail.com', symbol: '↗' },
  { label: 'Website', value: 'prosaini.com', href: 'https://prosaini.com', symbol: '↗' },
  { label: 'Instagram', value: '@pro.saini_', href: 'https://www.instagram.com/pro.saini_/', symbol: '↗' },
];

export default function ContactSection() {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-section__inner">
        <div className="contact-section__topline">
          <div className="section-eyebrow"><span /> Contact Pro Saini</div>
          <span className="contact-section__descriptor">Industrial Automation & Engineering</span>
        </div>

        <div className="contact-section__main">
          <div className="contact-section__intro">
            <h2>Let’s work<br /><span>together.</span></h2>
            <p>Discuss your automation, engineering, or project requirements with our team.</p>
            <a className="contact-section__cta" href="mailto:sainienterprise1991@gmail.com?subject=Project%20enquiry">Get in touch <Arrow /></a>
          </div>

          <div className="contact-details">
            {contactDetails.map((detail) => (
              <a className="contact-detail" href={detail.href} key={detail.label} target={detail.href.startsWith('https://') ? '_blank' : undefined} rel={detail.href.startsWith('https://') ? 'noreferrer' : undefined}>
                <span className="contact-detail__label">{detail.label}</span>
                <span className="contact-detail__value">{detail.value}</span>
                <span className="contact-detail__arrow" aria-hidden="true">{detail.symbol}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-section__bottom">
          <a className="contact-brand" href="/#top" aria-label="Pro Saini, back to top">
            <span className="brand__logo-window"><img className="brand__logo" src="/assets/prosaini-logo.jpeg" alt="Pro Saini" /></span>
            <span>Industrial Automation & Engineering</span>
          </a>
          <span className="contact-section__copyright">© {new Date().getFullYear()} Pro Saini. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
