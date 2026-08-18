'use client';

import { useState } from 'react';
import { useLanguage } from './language-context';

export default function AlternanceBanner() {
  const { t } = useLanguage();
  const [minimized, setMinimized] = useState(false);

  if (minimized) {
    return (
      <button className="alternanceMini" type="button" aria-label={t('altCyber')} title={t('altCyber')} onClick={() => setMinimized(false)}>
        <span className="alternanceMiniDot" />
      </button>
    );
  }

  return (
    <aside className="alternanceBanner" aria-label={t('altCyber')}>
      <button className="alternanceMinimize" type="button" aria-label="Minimize" title="Minimize" onClick={() => setMinimized(true)}>−</button>
      <div className="alternancePulse" aria-hidden="true"><span /></div>
      <div className="alternanceContent">
        <span className="alternanceEyebrow">{t('opportunity')}</span>
        <strong>{t('altCyber')}</strong>
        <p>{t('altText')}</p>
      </div>
      <a className="alternanceCta" href="#contact">{t('contactMe')}<span aria-hidden="true">↗</span></a>
    </aside>
  );
}
