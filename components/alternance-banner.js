'use client';

import { useState } from 'react';

export default function AlternanceBanner() {
  const [minimized, setMinimized] = useState(false);

  if (minimized) {
    return (
      <button className="alternanceMini" type="button" aria-label="Afficher ma recherche d'alternance" title="Je recherche une alternance en cybersécurité" onClick={() => setMinimized(false)}>
        <span className="alternanceMiniDot" />
      </button>
    );
  }

  return (
    <aside className="alternanceBanner" aria-label="Recherche d'alternance">
      <button className="alternanceMinimize" type="button" aria-label="Réduire la fenêtre" title="Réduire" onClick={() => setMinimized(true)}>−</button>
      <div className="alternancePulse" aria-hidden="true"><span /></div>
      <div className="alternanceContent">
        <span className="alternanceEyebrow">OPPORTUNITÉ RECHERCHÉE</span>
        <strong>Alternance Cybersécurité</strong>
        <p>Disponible dès septembre 2026 pour une alternance en cybersécurité, avec un rythme de 3 semaines en entreprise / 1 semaine à l’école.</p>
      </div>
      <a className="alternanceCta" href="#contact">Me contacter<span aria-hidden="true">↗</span></a>
    </aside>
  );
}
