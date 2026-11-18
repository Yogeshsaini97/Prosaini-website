import React from 'react';
import useLazyVideo from '../hooks/useLazyVideo.js';
import Arrow from './Arrow.jsx';

export default function CoreCard({ item }) {
  const mediaRef = useLazyVideo(item.video, 0.15);

  return (
    <a className="core-card" href="#services">
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
