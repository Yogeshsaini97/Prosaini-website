import React from 'react';

export default function Arrow({ direction = 'right' }) {
  return (
    <span aria-hidden="true" className={`arrow-glyph arrow-glyph--${direction}`}>
      {direction === 'left' ? '←' : '→'}
    </span>
  );
}
