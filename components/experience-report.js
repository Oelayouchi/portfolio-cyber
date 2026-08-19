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
  fr:{view:'Voir le rapport',title:'RAPPORT DE STAGE',close:'Fermer',report:'Rapport'},
  en:{view:'View report',title:'INTERNSHIP REPORT',close:'Close',report:'Report'},
  ar:{view:'عرض التقرير',title:'تقرير التدريب',close:'إغلاق',report:'تقرير'},
  es:{view:'Ver informe',title:'INFORME DE PRÁCTICAS',close:'Cerrar',report:'Informe'},
  de:{view:'Bericht ansehen',title:'PRAKTIKUMSBERICHT',close:'Schließen',report:'Bericht'}
};

export default function ExperienceReport({ experienceId, title }) {
  const { language }=useLanguage();
  const text=labels[language];
  const [open,setOpen]=useState(false);
  const report=REPORTS[experienceId];
  if(!report)return null;

  const modal=open&&typeof document!=='undefined'?createPortal(
    <div className="projectModal" role="dialog" aria-modal="true" aria-label={`${text.report} ${title}`} onClick={()=>setOpen(false)}>
      <div className="projectModalContent reportModal" onClick={event=>event.stopPropagation()}>
        <div className="reportModalHeader"><div><span>{text.title}</span><strong>{title}</strong></div><button className="projectModalClose" type="button" onClick={()=>setOpen(false)} aria-label={text.close}>×</button></div>
        <PdfViewer src={report} title={`${text.report} ${title}`} />
      </div>
    </div>,
    document.body
  ):null;

  return <>
    <button className="projectReportButton experienceReportButton" type="button" onClick={()=>setOpen(true)}><span aria-hidden="true">◉</span>{text.view}</button>
    {modal}
  </>;
}
