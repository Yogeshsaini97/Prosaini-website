import React, { useEffect, useState } from 'react';
import { projects } from './data/projects.js';

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

const topics = [
  ['Digital products', 'Websites, apps and platforms'],
  ['Project delivery', 'From brief to launch'],
  ['Automation', 'Smarter everyday workflows'],
  ['Systems integration', 'Technology that works together'],
  ['Discovery & strategy', 'Clarity before you build'],
  ['Custom engineering', 'Solutions shaped around you'],
  ['Client projects', 'A selection of our work'],
  ['Ongoing support', 'Built to keep getting better'],
];

const workSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We listen closely, learn your context, and get aligned on the challenge and the outcome you need.',
    detail: 'The right questions, first.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Together, we shape a practical scope, assemble the right team, and agree on milestones and priorities.',
    detail: 'A shared plan of action.',
  },
  {
    number: '03',
    title: 'Deliver',
    description: 'We build in close collaboration, sharing progress and gathering feedback as the work takes shape.',
    detail: 'Clear progress, together.',
  },
  {
    number: '04',
    title: 'Support',
    description: 'We help with launch, handover, and the next improvements as your needs and business evolve.',
    detail: 'Ready for what comes next.',
  },
];

const corePillars = [
  {
    number: '01',
    category: 'Digital products',
    title: 'Technology made useful.',
    summary: 'Websites, applications and platforms designed around the people who use them.',
    video: '/assets/video-02.mp4',
  },
  {
    number: '02',
    category: 'Connected operations',
    title: 'Better ways to work.',
    summary: 'Automation and integration shaped around your real business processes.',
    video: '/assets/video-04.mp4',
  },
  {
    number: '03',
    category: 'Project delivery',
    title: 'One team. Every step.',
    summary: 'A collaborative partner from first requirements through launch and support.',
    video: '/assets/video-06.mp4',
  },
];

function Arrow({ direction = 'right' }) {
  return <span aria-hidden="true" className={`arrow-glyph arrow-glyph--${direction}`}>{direction === 'left' ? '←' : '→'}</span>;
}

function ProjectCard({ project, index, isOpen, onToggle }) {
  const mediaRef = React.useRef(null);
  const detailsId = `project-details-${project.id}`;

  useEffect(() => {
    const video = mediaRef.current;
    if (!video || !project.video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const startVideo = () => {
      if (!video.src) {
        video.src = project.video;
        video.load();
      }
      video.play().catch(() => {});
    };
    const stopVideo = () => video.pause();

    if (!('IntersectionObserver' in window)) {
      startVideo();
      return () => video.pause();
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) startVideo();
      else stopVideo();
    }, { threshold: 0.2 });
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [project.video]);

  return (
    <article className={`project-card${index === 0 ? ' project-card--featured' : ''}${isOpen ? ' project-card--open' : ''}`}>
      <div className="project-card__media">
        <video ref={mediaRef} muted loop playsInline preload="none" aria-hidden="true" />
        <div className="project-card__wash" aria-hidden="true" />
        <span className="project-card__category">{project.category}</span>
        <span className="project-card__media-mark" aria-hidden="true"><Arrow /></span>
        <span className="project-card__number">PROJECT {project.number}</span>
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-card__bottom">
          <div className="project-card__scope">{project.scope?.join('  ·  ')}</div>
          <button className="project-card__toggle" type="button" aria-expanded={isOpen} aria-controls={detailsId} onClick={onToggle}>
            {isOpen ? 'Close summary' : 'Project summary'} <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
          </button>
        </div>
        {isOpen && (
          <div className="project-card__details" id={detailsId}>
            <div><span>Challenge</span><p>{project.challenge}</p></div>
            <div><span>Delivery</span><p>{project.delivery}</p></div>
            <div><span>Outcome</span><p>{project.outcome}</p></div>
          </div>
        )}
      </div>
    </article>
  );
}

function CoreCard({ item }) {
  const mediaRef = React.useRef(null);

  useEffect(() => {
    const video = mediaRef.current;
    if (!video || !item.video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const startVideo = () => {
      if (!video.src) {
        video.src = item.video;
        video.load();
      }
      video.play().catch(() => {});
    };
    if (!('IntersectionObserver' in window)) {
      startVideo();
      return () => video.pause();
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) startVideo();
      else video.pause();
    }, { threshold: 0.15 });
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [item.video]);

  return (
    <a className="core-card" href="#what-we-do">
      <video ref={mediaRef} className="core-card__video" muted loop playsInline preload="none" aria-hidden="true" />
      <span className="core-card__veil" aria-hidden="true" />
      <span className="core-card__number">{item.number}</span>
      <span className="core-card__arrow" aria-hidden="true"><Arrow /></span>
      <span className="core-card__content">
        <span className="core-card__category">{item.category}</span>
        <span className="core-card__title">{item.title}</span>
        <span className="core-card__summary">{item.summary}</span>
      </span>
    </a>
  );
}

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [openProject, setOpenProject] = useState(null);
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
          <span className="brand__logo-window">
            <img className="brand__logo" src="/assets/prosaini-logo.jpeg" alt="Pro Saini" />
          </span>
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

    <section id="what-we-do" className="topics-section" aria-labelledby="topics-title">
      <div className="topics-section__inner">
        <div className="topics-intro">
          <div className="topics-intro__copy">
            <div className="section-eyebrow"><span /> Pro Saini</div>
            <h2 id="topics-title">A capable partner for<br />your most important work.</h2>
            <p>We bring the right people and technology around your requirements. From a focused digital product to a complex, multi-stage project, we work alongside your team to deliver thoughtful solutions and lasting value.</p>
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
          <p>Whatever the challenge, let’s find the right way forward.</p>
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

        <div id="contact" className="topics-footer">
          <span>Have a project in mind? We’d love to hear what you’re working on.</span>
          <span className="topics-footer__note">Start a conversation <Arrow /></span>
        </div>
      </div>
    </section>

    <section className="core-section" aria-labelledby="core-title">
      <div className="core-section__heading">
        <div className="section-eyebrow"><span /> What we do</div>
        <h2 id="core-title">The core of what we do</h2>
        <p>Practical expertise, thoughtful technology, and delivery built around your business.</p>
      </div>
      <div className="core-grid">
        {corePillars.map((item) => <CoreCard item={item} key={item.number} />)}
      </div>
    </section>

    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="projects-section__inner">
        <div className="projects-section__header">
          <div>
          <div className="section-eyebrow"><span /> Project stories</div>
            <h2 id="projects-title">Different challenges.<br /><span>Thoughtful solutions.</span></h2>
          </div>
          <p>Each project has its own challenge, approach, and outcome. Explore a few of the stories behind the work.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isOpen={openProject === project.id}
              onToggle={() => setOpenProject((current) => current === project.id ? null : project.id)}
            />
          ))}
        </div>

        <div className="projects-section__footer">
          <span>Your next project has its own story to tell.</span>
          <a href="#contact">Let’s shape it together <Arrow /></a>
        </div>
      </div>
    </section>

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
    </main>
  );
}
