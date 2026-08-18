'use client';

import { useEffect } from 'react';

const STORAGE_KEY='portfolio-cyber-theme';

export default function ThemeController() {
  useEffect(() => {
    const toggle = document.querySelector('.themeToggle');
    if (!toggle) return undefined;

    const moon = toggle.children[0];
    const sun = toggle.children[1];

    const applyTheme = (theme) => {
      const resolved=theme==='light'?'light':'dark';
      document.documentElement.dataset.theme = resolved;
      window.localStorage.setItem(STORAGE_KEY,resolved);
      moon?.classList.toggle('themeActive', resolved === 'dark');
      sun?.classList.toggle('themeActive', resolved === 'light');
      toggle.setAttribute('aria-label', resolved === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre');
    };

    applyTheme(window.localStorage.getItem(STORAGE_KEY) || 'dark');

    const handleClick = (event) => {
      const clickedMoon = event.target.closest('.themeToggle > span:first-child');
      const clickedSun = event.target.closest('.themeToggle > span:last-child');
      if (clickedMoon) applyTheme('dark');
      if (clickedSun) applyTheme('light');
    };

    toggle.addEventListener('click', handleClick);
    toggle.style.cursor = 'pointer';
    return () => toggle.removeEventListener('click', handleClick);
  }, []);

  return null;
}
