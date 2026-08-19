'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from './language-context';
import PdfViewer from './pdf-viewer';

const REPORTS = {
  'experience-ocp': '/internships/ocp/report/rapport.pdf',
  'experience-parcelhome-stage': '/internships/parcelhome/report/rapport.pdf',
};

const labels={
  fr:{view:'Voir le rapport',title:'RAPPORT DE STAGE',close:'Fermer',report:'Rapport',unavailable:'Rapport non disponible pour cette expérience.'},
  en:{view:'View report',title:'INTERNSHIP REPORT',close:'Close',report:'Report',unavailable:'No report is available for this experience.'},
  ar:{view:'عرض التقرير',title:'تقرير التدريب',close:'إغلاق',report:'تقرير',unavailable:'لا يوجد تقرير متاح لهذه التجربة.'},
  es:{view:'Ver informe',title:'INFORME DE PRÁCTICAS',close:'Cerrar',report:'Informe',unavailable:'No hay informe disponible para esta experiencia.'},
  de:{view:'Bericht ansehen',title:'PRAKTIKUMSBERICHT',close:'Schließen',report:'Bericht',unavailable:'Für diese Erfahrung ist kein Bericht verfügbar.'}
};

export default function ExperienceReport({ experienceId, title }) {
  const { language }=useLanguage();
  const text=labels[language];
  const [open,setOpen]=useState(false);
  const report=REPORTS[experienceId];

  const modal=open&&typeof document!=='undefined'?createPortal(
    <div className="projectModal" role="dialog" aria-modal="true" aria-label={`${text.report} ${title}`} onClick={()=>setOpen(false)}>
      <div className="projectModalContent reportModal" onClick={event=>event.stopPropagation()}>
        <div className="reportModalHeader"><div><span>{text.title}</span><strong>{title}</strong></div><button className="projectModalClose" type="button" onClick={()=>setOpen(false)} aria-label={text.close}>×</button></div>
        {report ? <PdfViewer src={report} title={`${text.report} ${title}`} /> : <div className="experienceReportUnavailable"><span>◉</span><p>{text.unavailable}</p></div>}
      </div>
    </div>,
    document.body
  ):null;

  return <>
    <button className="projectReportButton experienceReportButton" type="button" onClick={()=>setOpen(true)}><span aria-hidden="true">◉</span>{text.view}</button>
    {modal}
  </>;
}
