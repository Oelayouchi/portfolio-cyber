'use client';

import { SectionLabel } from './ui';
import { useLanguage } from './language-context';

export default function AboutCyberSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="section shell split">
      <div>
        <SectionLabel>{t('about')}</SectionLabel>
        <h2>{t('aboutTitle')}</h2>
      </div>
      <div className="copy">
        <p>{t('aboutP1')}</p>
        <p>{t('aboutP2')}</p>
      </div>
    </section>
  );
}
