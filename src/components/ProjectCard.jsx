import React from 'react';
import useLazyVideo from '../hooks/useLazyVideo.js';
import Arrow from './Arrow.jsx';

export default function ProjectCard({ project, index, isOpen, onToggle }) {
  const mediaRef = useLazyVideo(project.video, 0.2);
  const detailsId = `project-details-${project.id}`;

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
