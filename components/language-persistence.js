'use client';

import { useEffect } from 'react';
import { useLanguage } from './language-context';

const STORAGE_KEY = 'portfolio-cyber-language';
const SUPPORTED = new Set(['fr', 'en', 'ar', 'es', 'de']);

export default function LanguagePersistence() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.has(saved) && saved !== language) setLanguage(saved);
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
