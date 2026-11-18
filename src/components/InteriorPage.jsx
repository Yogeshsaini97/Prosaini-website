import React, { useEffect } from 'react';
import CoreSection from './CoreSection.jsx';
import ContactSection from './ContactSection.jsx';
import HowWeWorkSection from './HowWeWorkSection.jsx';
import IndustriesSection from './IndustriesSection.jsx';
import PageHero from './PageHero.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import ServicesSection from './ServicesSection.jsx';
import TopicsSection from './TopicsSection.jsx';

const pages = {
  '/services': {
    eyebrow: 'PRO SAINI · SERVICES',
    title: 'Engineering for',
    accent: 'your process.',
    description: 'Industrial automation, controls, panel engineering and ongoing support shaped around your equipment and requirements.',
    content: <ServicesSection />,
  },
  '/industries': {
    eyebrow: 'PRO SAINI · INDUSTRIES',
    title: 'Built around the',
    accent: 'way industry works.',
    description: 'Explore how our automation and engineering capabilities can adapt to different production environments and applications.',
    content: <IndustriesSection />,
  },
  '/solutions': {
    eyebrow: 'PRO SAINI · SOLUTIONS',
    title: 'Control systems',
    accent: 'that work together.',
    description: 'From PLC and HMI programming to SCADA, drives and integrated panels, build the solution your process needs.',
    content: <><TopicsSection /><CoreSection /></>,
  },
  '/projects': {
    eyebrow: 'PRO SAINI · PROJECTS',
    title: 'Work shaped by',
    accent: 'real requirements.',
    description: 'Explore project stories across automation programming, monitoring, panel engineering and support.',
    content: <ProjectsSection />,
  },
  '/about': {
    eyebrow: 'PRO SAINI · ABOUT',
    title: 'A clear process.',
    accent: 'Work that moves forward.',
    description: 'We work collaboratively, define the requirements clearly and keep delivery connected to the goals of your operation.',
    content: <><TopicsSection /><CoreSection /><HowWeWorkSection /></>,
  },
  '/contact': {
    eyebrow: 'PRO SAINI · CONTACT',
    title: 'Let’s talk about',
    accent: 'your next project.',
    description: 'Share your automation, engineering or project requirements with our team.',
    actionLabel: 'Email our team',
    actionHref: 'mailto:sainienterprise1991@gmail.com?subject=Project%20enquiry',
    content: null,
  },
};

export default function InteriorPage({ path }) {
  const page = pages[path];

  useEffect(() => {
    document.title = page ? `${page.eyebrow.split(' · ')[1]} | Pro Saini` : 'Page not found | Pro Saini';
  }, [page]);

  if (!page) {
    return <main><PageHero eyebrow="PRO SAINI" title="Page not found." accent="Let’s get you back." description="The page you’re looking for isn’t available. Visit our homepage to explore Pro Saini’s work." actionLabel="Back to homepage" actionHref="/" /><ContactSection /></main>;
  }

  return <main><PageHero {...page} /><div className="interior-page__content">{page.content}<ContactSection /></div></main>;
}
