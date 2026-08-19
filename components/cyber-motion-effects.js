'use client';

import { useEffect } from 'react';

const revealSelectors = [
  '.section',
  '.experience',
  '.projectShowcaseCard',
  '.awardCard',
  '.cert',
  '.educationShowcaseCard',
  '.interestWrap',
  '.homeTool',
  '.dataFlowStep',
  '.availabilityV2Card',
];

function animateCounter(node) {
  if (!node || node.dataset.counted === '1') return;
  const raw = node.textContent.trim();
  const match = raw.match(/^(\d+)(\+?)$/);
  if (!match) return;
  const target = Number(match[1]);
  const suffix = match[2] || '';
  const duration = 850;
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
    const nodes = [...document.querySelectorAll(revealSelectors.join(','))];

    nodes.forEach((node, index) => {
      node.classList.add('cyberReveal');
      node.style.setProperty('--reveal-order', String(index % 6));
    });

    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('cyberVisible'));
      document.querySelectorAll('.homeHighlightCard strong').forEach(animateCounter);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('cyberVisible');
        if (entry.target.classList.contains('homeHighlightCard')) {
          animateCounter(entry.target.querySelector('strong'));
        }
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

    nodes.forEach((node) => observer.observe(node));
    document.querySelectorAll('.homeHighlightCard').forEach((node) => observer.observe(node));

    const timeline = document.querySelector('.timeline');
    let timelineObserver;
    if (timeline) {
      timeline.classList.add('cyberTimeline');
      timelineObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          timeline.classList.add('cyberTimelineActive');
          timelineObserver.disconnect();
        }
      }, { threshold: 0.08 });
      timelineObserver.observe(timeline);
    }

    return () => {
      observer.disconnect();
      timelineObserver?.disconnect();
    };
  }, []);

  return (
    <section className="cyberLab shell" aria-label="Cyber Lab">
      <div className="cyberLabHeader cyberReveal">
        <span>CYBER LAB</span>
        <h2>Interactive Security Lab</h2>
      </div>
      <div className="cyberLabGrid">
        <article className="cyberLabCard cyberReveal">
          <div className="cyberLabCardTop"><i></i><i></i><i></i><strong>network.scan</strong></div>
          <div className="packetLane" aria-hidden="true"><b></b><b></b><b></b></div>
          <h3>Network Analysis</h3>
          <p>TCP/IP · DNS · HTTP · Wireshark</p>
        </article>
        <article className="cyberLabCard cyberReveal">
          <div className="miniTerminal" aria-hidden="true">
            <span>&gt; monitoring events...</span>
            <span>[INFO] auth success</span>
            <span>[WARN] failed logins</span>
            <span className="terminalAlert">[ALERT] suspicious activity</span>
            <span>[MITRE] T1059</span>
          </div>
          <h3>SOC &amp; SIEM</h3>
          <p>Wazuh · Splunk · Logs · MITRE ATT&amp;CK</p>
        </article>
        <article className="cyberLabCard cyberReveal">
          <div className="hardeningShield" aria-hidden="true">✓</div>
          <div className="hardeningTags" aria-hidden="true"><span>Linux</span><span>AD</span><span>Windows</span></div>
          <h3>System Hardening</h3>
          <p>IAM · GPO · Linux · Windows Server</p>
        </article>
      </div>
    </section>
  );
}
