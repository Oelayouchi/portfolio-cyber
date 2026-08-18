'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const projectVisuals = {
  'balance-numerique': '/projects/balance-numerique/images/image-01.png',
  'station-meteo': '/projects/station-meteo/images/image-01.png',
};

const availableReports = new Set([
  'balance-numerique',
  'station-meteo',
]);

export default function ProjectShowcaseCard({ project, slug }) {
  const [reportOpen, setReportOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const visual = projectVisuals[slug];
  const report = `/projects/${slug}/report/rapport.pdf`;
  const hasReport = availableReports.has(slug);
  const highlights = project.tasks.slice(0, 3);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!reportOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [reportOpen]);

  const modal = reportOpen && mounted ? createPortal(
    <div className="projectModal" role="dialog" aria-modal="true" aria-label={`Rapport du projet ${project.title}`} onClick={() => setReportOpen(false)}>
      <div className="projectModalContent reportModal" onClick={(event) => event.stopPropagation()}>
        <div className="reportModalHeader">
          <div><span>RAPPORT DU PROJET</span><strong>{project.title}</strong></div>
          <button className="projectModalClose" type="button" onClick={() => setReportOpen(false)} aria-label="Fermer">×</button>
        </div>
        {hasReport ? (
          <iframe className="projectReportFrame" src={`${report}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`} title={`Rapport ${project.title}`} />
        ) : (
          <div className="projectReportUnavailable" aria-hidden="true" />
        )}
        {hasReport && <p className="reportReadOnlyNote">Lecture intégrée au portfolio. Les contrôles de téléchargement sont masqués dans la visionneuse.</p>}
      </div>
    </div>,
    document.body,
  ) : null;

  return (
    <>
      <article className="projectShowcaseCard">
        <div className={`projectShowcaseVisual${visual ? ' hasImage' : ' isEmpty'}`}>
          {visual ? <img src={visual} alt={`Aperçu du projet ${project.title}`} loading="lazy" /> : null}
        </div>
        <div className="projectShowcaseContent">
          <div className="projectShowcaseTags" aria-label="Technologies utilisées">
            {project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="projectShowcaseTitleRow">
            <h3>{project.title}</h3>
            <button className="projectShowcaseButton" type="button" onClick={() => setReportOpen(true)}>
              <span className="projectReportPulse" aria-hidden="true" />
              VOIR LE RAPPORT
            </button>
          </div>
          <p className="projectShowcaseObjective">{project.objective}</p>
          <ul>{highlights.map((task) => <li key={task}>{task}</li>)}</ul>
          <div className="projectShowcaseMeta"><span>{project.period}</span><span>{project.institution}</span></div>
        </div>
      </article>
      {modal}
    </>
  );
}
