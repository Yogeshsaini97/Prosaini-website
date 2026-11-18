import { useEffect, useRef } from 'react';

export default function useLazyVideo(src, threshold = 0.2) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const startVideo = () => {
      if (!video.src) {
        video.src = src;
        video.load();
      }
      video.play().catch(() => {});
    };
    const stopVideo = () => video.pause();

    if (!('IntersectionObserver' in window)) {
      startVideo();
      return stopVideo;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) startVideo();
      else stopVideo();
    }, { threshold });

    observer.observe(video);
    return () => {
      observer.disconnect();
      stopVideo();
    };
  }, [src, threshold]);

  return videoRef;
}
