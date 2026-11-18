import React, { useState } from 'react';
import { projects } from '../data/projects.js';
import Arrow from './Arrow.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectsSection() {
  const [openProject, setOpenProject] = useState(null);

  return (
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
  );
}
