import HeroSection from './components/HeroSection.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import TopicsSection from './components/TopicsSection.jsx';
import CoreSection from './components/CoreSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import HowWeWorkSection from './components/HowWeWorkSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import InteriorPage from './components/InteriorPage.jsx';
import React from 'react';

const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

export default function App() {
  if (currentPath !== '/') {
    return <><SiteHeader /><InteriorPage path={currentPath} /></>;
  }

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TopicsSection />
        <CoreSection />
        <ServicesSection />
        <ProjectsSection />
        <HowWeWorkSection />
        <ContactSection />
      </main>
    </>
  );
}
