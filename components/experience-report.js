'use client';

import { useState } from 'react';

const REPORTS = {
  'experience-ocp': '/internships/ocp/report/rapport.pdf',
  'experience-parcelhome-stage': '/internships/parcelhome/report/rapport.pdf',
};

export default function ExperienceReport({ experienceId, title }) {
  const [open, setOpen] = useState(false);
  const report = REPORTS[experienceId];

  if (!report) return null;

  return (
    <>
      <button className="projectReportButton experienceReportButton" type="button" onClick={() => setOpen(true)}>
        <span aria-hidden="true">◉</span>
        Voir le rapport
      </button>

      {open && (
        <div className="projectModal" role="dialog" aria-modal="true" aria-label={`Rapport ${title}`} onClick={() => setOpen(false)}>
          <div className="projectModalContent reportModal" onClick={(event) => event.stopPropagation()}>
            <div className="reportModalHeader"><div><span>RAPPORT DE STAGE</span><strong>{title}</strong></div><button className="projectModalClose" type="button" onClick={() => setOpen(false)} aria-label="Fermer">×</button></div>
            <iframe className="projectReportFrame" src={`${report}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`} title={`Rapport ${title}`} />
            <p className="reportReadOnlyNote">Lecture intégrée au portfolio. Les contrôles de téléchargement sont masqués dans la visionneuse.</p>
          </div>
        </div>
      )}
    </>
  );
}
