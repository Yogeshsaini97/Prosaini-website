import React, { useEffect, useState } from 'react';

const videos = Array.from({ length: 12 }, (_, i) => `/assets/video-${String(i + 1).padStart(2, '0')}.mp4`);

const slides = [
  {
    kicker: 'PROJECT DELIVERY',
    headline: <>We build around<br />your business.</>,
    description: 'Every project starts with a business requirement. We work with your team to turn that requirement into a practical, scalable solution.',
    story: 'Technology built around your requirements.',
    services: 'Consulting  ·  Delivery  ·  Collaboration',
  },
  {
    kicker: 'DIGITAL PRODUCTS',
    headline: <>Technology that<br />works for business.</>,
    description: 'We design and build digital products that simplify operations, connect teams and create better customer experiences.',
    story: 'Digital products with a purpose.',
    services: 'Web  ·  Applications  ·  Platforms',
  },
  {
    kicker: 'ENGINEERING & AUTOMATION',
    headline: <>We connect technology<br />with operations.</>,
    description: 'We combine software, automation and connected systems to solve practical operational challenges.',
    story: 'Connected systems. Practical outcomes.',
    services: 'Automation  ·  Integration  ·  Monitoring',
  },
  {
    kicker: 'PROJECT EXECUTION',
    headline: <>From requirement<br />to delivery.</>,
    description: 'We take projects from discovery and architecture through development, integration, deployment and support.',
    story: 'One team from start to finish.',
    services: 'Discover  ·  Build  ·  Integrate  ·  Deliver',
  },
];

const navigation = [
  ['What we do', '#what-we-do'],
  ['Solutions', '#solutions'],
  ['Projects', '#projects'],
  ['Industries', '#industries'],
  ['Capabilities', '#capabilities'],
  ['About us', '#about'],
  ['Contact', '#contact'],
];

const deliveryStages = [
  {
    number: '01',
    title: 'Understand the need',
    description: 'We listen, ask the right questions and get clear on the outcomes that matter to your business.',
    tags: 'Discovery · Planning',
    icon: 'compass',
  },
  {
    number: '02',
    title: 'Shape the solution',
    description: 'We turn requirements into a thoughtful plan, with the people, technology and milestones to match.',
    tags: 'Strategy · Design',
    icon: 'layers',
  },
  {
    number: '03',
    title: 'Build with care',
    description: 'Our team works alongside yours to create, integrate and refine a solution ready for real use.',
    tags: 'Engineering · Delivery',
    icon: 'build',
  },
  {
    number: '04',
    title: 'Keep it moving',
    description: 'After launch, we help you support, improve and grow the work as your needs evolve.',
    tags: 'Launch · Ongoing support',
    icon: 'spark',
  },
];

function Arrow({ direction = 'right' }) {
  return <span aria-hidden="true" className={`arrow-glyph arrow-glyph--${direction}`}>{direction === 'left' ? '←' : '→'}</span>;
}

function StageIcon({ type }) {
  const paths = {
    compass: <><circle cx="12" cy="12" r="8.5" /><path d="m15.7 8.3-2.5 5-4.9 2.4 2.4-4.9 5-2.5Z" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    build: <><path d="m14.5 6.5 3-3 3 3-3 3M13 8l-8.5 8.5a2.1 2.1 0 0 0 3 3L16 11" /><path d="m4.5 4.5 5 5M3 8l5-5" /></>,
    spark: <><path d="m12 3 1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6L12 3Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const slide = slides[slideIndex];

  const changeSlide = (step) => {
    setSlideIndex((current) => (current + step + slides.length) % slides.length);
    setVideoIndex((current) => (current + 1) % videos.length);
  };

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => changeSlide(1), 9500);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <main>
    <section id="top" className="hero" aria-label="Pro Saini introduction">
      <div className="hero__media" aria-hidden="true">
        <video key={videos[videoIndex]} className="hero__video" autoPlay muted loop playsInline preload="auto">
          <source src={videos[videoIndex]} type="video/mp4" />
        </video>
      </div>
      <div className="hero__veil" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pro Saini home" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark" aria-hidden="true"><span /></span>
          <span className="brand__name">PRO SAINI</span>
        </a>

        <nav className={`navigation${menuOpen ? ' navigation--open' : ''}`} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Start a project <Arrow />
        </a>
        <button className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`} type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
      </header>

      <section className="hero__content" key={slideIndex}>
        <div className="eyebrow"><span className="eyebrow__line" />{slide.kicker}</div>
        <h1>{slide.headline}</h1>
        <p className="hero__description">{slide.description}</p>
        <div className="hero__actions">
          <a className="button button--outline" href="#about">Discover Pro Saini</a>
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
          <button type="button" className="carousel-controls__play" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Resume carousel' : 'Pause carousel'} title={paused ? 'Resume carousel' : 'Pause carousel'}>
            {paused ? <span aria-hidden="true">▶</span> : <span aria-hidden="true">Ⅱ</span>}
          </button>
          <button type="button" className="carousel-controls__arrow" onClick={() => changeSlide(-1)} aria-label="Previous slide"><Arrow direction="left" /></button>
          <button type="button" className="carousel-controls__arrow" onClick={() => changeSlide(1)} aria-label="Next slide"><Arrow /></button>
        </div>
      </div>

      <div className="scroll-cue"><span />Scroll to explore</div>
    </section>

    <section id="what-we-do" className="delivery-section" aria-labelledby="delivery-title">
      <div className="delivery-section__inner">
        <div className="delivery-section__intro">
          <div className="section-eyebrow"><span /> How we work</div>
          <div className="delivery-section__heading">
            <h2 id="delivery-title">A clear path from<br /><span>need to outcome.</span></h2>
            <p>Every client and every challenge is different. We bring the right people around your requirements, then stay accountable through each step of delivery.</p>
          </div>
        </div>

        <div className="delivery-grid">
          {deliveryStages.map((stage) => (
            <article className="delivery-card" key={stage.number}>
              <div className="delivery-card__top"><span className="delivery-card__number">{stage.number}</span><span className="delivery-card__icon"><StageIcon type={stage.icon} /></span></div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <div className="delivery-card__tags">{stage.tags}</div>
            </article>
          ))}
        </div>

        <div className="delivery-section__footer">
          <span>One accountable team, from first conversation to what comes next.</span>
          <a href="#contact">Tell us what you’re working on <Arrow /></a>
        </div>
      </div>
    </section>
    </main>
  );
}
