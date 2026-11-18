import React, { useEffect, useState } from 'react';
import Arrow from './Arrow.jsx';

const services = [
  ['PLC, HMI & drive programming', '/services'],
  ['SCADA & industrial IoT', '/services'],
  ['Control & power panels', '/services'],
  ['Service, support & optimisation', '/services'],
];

const industries = [
  ['Discrete manufacturing', 'Machine control, production lines and upgrades'],
  ['Process industries', 'Monitoring, alarms and process visibility'],
  ['Metals & material handling', 'Reliable control for demanding operations'],
  ['Food & beverage', 'Automation designed around production needs'],
  ['Utilities & infrastructure', 'Connected systems and operational insight'],
  ['Machine builders & OEMs', 'Controls, interfaces and commissioning'],
];

export default function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveMenu(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenus = () => {
    setActiveMenu(null);
    setMenuOpen(false);
  };

  const toggleMenu = (menu) => setActiveMenu((current) => current === menu ? null : menu);
  const openMenuOnHover = (menu) => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setActiveMenu(menu);
  };

  return (
    <header className="site-header" onMouseLeave={() => setActiveMenu(null)}>
      <a className="brand" href="/#top" aria-label="Pro Saini home" onClick={closeMenus}>
        <span className="brand__logo-window">
          <img className="brand__logo" src="/assets/prosaini-logo.jpeg" alt="Pro Saini" />
        </span>
      </a>

      <nav className={`navigation${menuOpen ? ' navigation--open' : ''}`} aria-label="Main navigation">
        <div className={`navigation__item${activeMenu === 'services' ? ' navigation__item--active' : ''}`}>
          <button type="button" className="navigation__trigger" aria-haspopup="true" aria-expanded={activeMenu === 'services'} aria-controls="services-mega-menu" onMouseEnter={() => openMenuOnHover('services')} onClick={() => toggleMenu('services')}>
            Services <span className="navigation__chevron" aria-hidden="true" />
          </button>
          {activeMenu === 'services' && (
            <div className="mega-menu mega-menu--services" id="services-mega-menu">
              <div className="mega-menu__intro">
                <span className="mega-menu__eyebrow">ENGINEERED AROUND YOUR PROCESS</span>
                <h2>Practical automation.<br />Thoughtful delivery.</h2>
                <p>From control programming and monitoring to panel engineering and ongoing support, explore how Pro Saini can help.</p>
                <a className="mega-menu__all-link" href="/services" onClick={closeMenus}>Explore all services <Arrow /></a>
              </div>
              <div className="mega-menu__links">
                <span className="mega-menu__label">Our capabilities</span>
                {services.map(([label, href], index) => (
                  <a href={href} key={label} onClick={closeMenus}><span>0{index + 1}</span>{label}<Arrow /></a>
                ))}
              </div>
              <div className="mega-menu__aside">
                <span className="mega-menu__aside-mark" aria-hidden="true">P.</span>
                <p>One partner from first conversation through commissioning and care.</p>
                <a href="/contact" onClick={closeMenus}>Talk through your requirements <Arrow /></a>
              </div>
            </div>
          )}
        </div>

        <div className={`navigation__item${activeMenu === 'industries' ? ' navigation__item--active' : ''}`}>
          <button type="button" className="navigation__trigger" aria-haspopup="true" aria-expanded={activeMenu === 'industries'} aria-controls="industries-mega-menu" onMouseEnter={() => openMenuOnHover('industries')} onClick={() => toggleMenu('industries')}>
            Industries <span className="navigation__chevron" aria-hidden="true" />
          </button>
          {activeMenu === 'industries' && (
            <div className="mega-menu mega-menu--industries" id="industries-mega-menu">
              <div className="mega-menu__industry-heading">
                <span className="mega-menu__eyebrow">INDUSTRIES</span>
                <h2>Automation shaped for the work you do.</h2>
                <p>Every operation has its own constraints. We start with your process, equipment and goals.</p>
              </div>
              <div className="mega-menu__industry-list">
                {industries.map(([name, description]) => (
                  <a href="/industries" key={name} onClick={closeMenus}>
                    <span>{name}</span><small>{description}</small><Arrow />
                  </a>
                ))}
              </div>
              <div className="mega-menu__industry-footer">
                <span>Have a different application?</span><a href="/contact" onClick={closeMenus}>Tell us about it <Arrow /></a>
              </div>
            </div>
          )}
        </div>

        <a href="/solutions" onMouseEnter={() => setActiveMenu(null)} onClick={closeMenus}>Solutions</a>
        <a href="/projects" onMouseEnter={() => setActiveMenu(null)} onClick={closeMenus}>Projects</a>
        <a href="/about" onMouseEnter={() => setActiveMenu(null)} onClick={closeMenus}>About</a>
        <a href="/contact" onMouseEnter={() => setActiveMenu(null)} onClick={closeMenus}>Contact</a>
      </nav>

      <a className="header-cta" href="/contact" onClick={closeMenus}>Start a project <Arrow /></a>
      <button
        className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => { setMenuOpen((open) => !open); setActiveMenu(null); }}
      >
        <span /><span />
      </button>
    </header>
  );
}
