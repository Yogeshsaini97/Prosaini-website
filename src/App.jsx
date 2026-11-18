import HeroSection from './components/HeroSection.jsx';
import TopicsSection from './components/TopicsSection.jsx';
import CoreSection from './components/CoreSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import HowWeWorkSection from './components/HowWeWorkSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import React from 'react';

export default function App() {
  return (
    <main>
      <HeroSection />
      <TopicsSection />
      <CoreSection />
      <ServicesSection />
      <ProjectsSection />
      <HowWeWorkSection />
      <ContactSection />
    </main>
  );
}
