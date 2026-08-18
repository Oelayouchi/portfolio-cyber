'use client';

import { useState } from 'react';
import { useLanguage } from './language-context';

const REPORTS = {
  'experience-ocp': '/internships/ocp/report/rapport.pdf',
  'experience-parcelhome-stage': '/internships/parcelhome/report/rapport.pdf',
};

const labels={
  fr:{view:'Voir le rapport',title:'RAPPORT DE STAGE',close:'Fermer',note:'Lecture intégrée au portfolio. Les contrôles de téléchargement sont masqués dans la visionneuse.',report:'Rapport'},
  en:{view:'View report',title:'INTERNSHIP REPORT',close:'Close',note:'Embedded reading in the portfolio. Download controls are hidden in the viewer.',report:'Report'},
  ar:{view:'عرض التقرير',title:'تقرير التدريب',close:'إغلاق',note:'القراءة مدمجة داخل ملف الأعمال، وعناصر التنزيل مخفية في العارض.',report:'تقرير'},
  es:{view:'Ver informe',title:'INFORME DE PRÁCTICAS',close:'Cerrar',note:'Lectura integrada en el portfolio. Los controles de descarga están ocultos.',report:'Informe'},
  de:{view:'Bericht ansehen',title:'PRAKTIKUMSBERICHT',close:'Schließen',note:'Der Bericht ist im Portfolio eingebettet. Download-Steuerelemente sind ausgeblendet.',report:'Bericht'}
};

export default function ExperienceReport({ experienceId, title }) {
  const { language }=useLanguage();
  const text=labels[language];
  const [open,setOpen]=useState(false);
  const report=REPORTS[experienceId];
  if(!report)return null;
  return <>
    <button className="projectReportButton experienceReportButton" type="button" onClick={()=>setOpen(true)}><span aria-hidden="true">◉</span>{text.view}</button>
    {open&&<div className="projectModal" role="dialog" aria-modal="true" aria-label={`${text.report} ${title}`} onClick={()=>setOpen(false)}>
      <div className="projectModalContent reportModal" onClick={event=>event.stopPropagation()}>
        <div className="reportModalHeader"><div><span>{text.title}</span><strong>{title}</strong></div><button className="projectModalClose" type="button" onClick={()=>setOpen(false)} aria-label={text.close}>×</button></div>
        <iframe className="projectReportFrame" src={`${report}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`} title={`${text.report} ${title}`} />
        <p className="reportReadOnlyNote">{text.note}</p>
      </div>
    </div>}
  </>;
}
