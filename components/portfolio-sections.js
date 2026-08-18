'use client';

import { useLanguage } from './language-context';

export function Footer() {
  const { language } = useLanguage();
  const label = {
    fr:'Portfolio Cybersécurité',
    en:'Cybersecurity Portfolio',
    ar:'ملف أعمال الأمن السيبراني',
    es:'Portfolio de Ciberseguridad',
    de:'Cybersecurity-Portfolio'
  }[language];
  return <footer className="footer shell"><span>© 2026 Oussama EL AYOUCHI</span><span>{label}</span></footer>;
}
