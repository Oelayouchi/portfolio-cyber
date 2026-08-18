'use client';

import { useEffect } from 'react';

export default function ThemeController() {
  useEffect(() => {
    const toggle = document.querySelector('.themeToggle');
    if (!toggle) return undefined;

    const moon = toggle.children[0];
    const sun = toggle.children[1];

    const applyTheme = (theme) => {
      document.documentElement.dataset.theme = theme;
      moon?.classList.toggle('themeActive', theme === 'dark');
      sun?.classList.toggle('themeActive', theme === 'light');
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre');
    };

    applyTheme('dark');

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
