'use client';

import { useEffect } from 'react';

const windowSelectors = [
  '.experience',
  '.projectShowcaseCard',
  '.awardCard',
  '.cert',
  '.educationShowcaseCard',
  '.interestWrap',
  '.availabilityV2Card',
  '.dataFlowStep',
  '.contactFormPanel',
  '#about > div',
];

function animateCounter(node) {
  if (!node || node.dataset.counted === '1') return;
  const raw = node.textContent.trim();
  const match = raw.match(/^(\d+)(\+?)$/);
  if (!match) return;
  const target = Number(match[1]);
  const suffix = match[2] || '';
  const duration = 650;
  const start = performance.now();
  node.dataset.counted = '1';

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export default function CyberMotionEffects() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const windows = [...document.querySelectorAll(windowSelectors.join(','))];

    windows.forEach((node, index) => {
      node.classList.add('cyberWindowReveal');
      node.style.setProperty('--window-delay', `${Math.min(index % 3, 2) * 45}ms`);
    });

    if (reduced || !('IntersectionObserver' in window)) {
      windows.forEach((node) => node.classList.add('cyberWindowVisible'));
      document.querySelectorAll('.homeHighlightCard strong').forEach(animateCounter);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('cyberWindowVisible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -2% 0px' });

    windows.forEach((node) => observer.observe(node));

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target.querySelector('strong'));
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.homeHighlightCard').forEach((node) => counterObserver.observe(node));

    const timeline = document.querySelector('.timeline');
    let timelineObserver;
    if (timeline) {
      timeline.classList.add('cyberTimeline');
      timelineObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          timeline.classList.add('cyberTimelineActive');
          timelineObserver.disconnect();
        }
      }, { threshold: 0.05 });
      timelineObserver.observe(timeline);
    }

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
      timelineObserver?.disconnect();
    };
  }, []);

  return null;
}
