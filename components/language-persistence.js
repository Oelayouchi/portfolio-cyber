'use client';

import { useEffect } from 'react';
import { useLanguage } from './language-context';

const STORAGE_KEY = 'portfolio-cyber-language';
const SUPPORTED = new Set(['fr', 'en', 'ar', 'es', 'de']);

function detectBrowserLanguage() {
  if (typeof navigator === 'undefined') return 'en';
  const candidates = [...(navigator.languages || []), navigator.language].filter(Boolean);
  for (const locale of candidates) {
    const code = String(locale).toLowerCase().split('-')[0];
    if (SUPPORTED.has(code)) return code;
  }
  return 'en';
}

export default function LanguagePersistence() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const initial = saved && SUPPORTED.has(saved) ? saved : detectBrowserLanguage();
    if (initial !== language) setLanguage(initial);
    if (!saved) window.localStorage.setItem(STORAGE_KEY, initial);
  }, []);

  useEffect(() => {
    if (SUPPORTED.has(language)) window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return null;
}

export function saveCyberLanguage(language) {
  if (typeof window !== 'undefined' && SUPPORTED.has(language)) {
    window.localStorage.setItem(STORAGE_KEY, language);
  }
}
