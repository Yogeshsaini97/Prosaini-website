import React, { useEffect, useState } from 'react';
import Arrow from './Arrow.jsx';
import { heroSlides, navigation } from '../data/siteContent.js';

const videos = Array.from({ length: 5 }, (_, i) => `/assets/marketing/industrial-${String(i + 1).padStart(2, '0')}.mp4`);

export default function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const slide = heroSlides[slideIndex];

  const changeSlide = (step) => {
    setSlideIndex((current) => (current + step + heroSlides.length) % heroSlides.length);
    setVideoIndex((current) => (current + 1) % videos.length);
  };

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => changeSlide(1), 9500);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section id="top" className="hero" aria-label="Pro Saini introduction">
      <div className="hero__media" aria-hidden="true">
        <video key={videos[videoIndex]} className="hero__video" autoPlay muted loop playsInline preload="auto">
          <source src={videos[videoIndex]} type="video/mp4" />
        </video>
      </div>
      <div className="hero__veil" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pro Saini home" onClick={() => setMenuOpen(false)}>
          <span className="brand__logo-window">
            <img className="brand__logo" src="/assets/prosaini-logo.jpeg" alt="Pro Saini" />
          </span>
        </a>

        <nav className={`navigation${menuOpen ? ' navigation--open' : ''}`} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">Start a project <Arrow /></a>
        <button
          className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
      </header>

      <section className="hero__content" key={slideIndex}>
        <div className="eyebrow"><span className="eyebrow__line" />{slide.kicker}</div>
        <h1>{slide.headline[0]}<br />{slide.headline[1]}</h1>
        <p className="hero__description">{slide.description}</p>
        <div className="hero__actions">
          <a className="button button--outline" href="#what-we-do">Discover Pro Saini</a>
          <a className="button button--primary" href="#projects">View our projects <Arrow /></a>
        </div>
      </section>

      <div className="hero__footer">
        <div className="footer-label">Explore our work <Arrow /></div>
        <div className="slide-story" aria-live="polite">
          <div className="slide-story__title">{slide.story}</div>
          <div className="slide-story__services">{slide.services}</div>
        </div>
        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-controls__play"
            onClick={() => setPaused((value) => !value)}
            aria-label={paused ? 'Resume carousel' : 'Pause carousel'}
            title={paused ? 'Resume carousel' : 'Pause carousel'}
          >
            {paused ? <span aria-hidden="true">▶</span> : <span aria-hidden="true">Ⅱ</span>}
          </button>
          <button type="button" className="carousel-controls__arrow" onClick={() => changeSlide(-1)} aria-label="Previous slide"><Arrow direction="left" /></button>
          <button type="button" className="carousel-controls__arrow" onClick={() => changeSlide(1)} aria-label="Next slide"><Arrow /></button>
        </div>
      </div>

      <div className="scroll-cue"><span />Scroll to explore</div>
    </section>
  );
}
