'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from './language-context';
import { localizeProject } from './content-translations';

const projectVisuals = {
  'balance-numerique': '/projects/balance-numerique/images/image-01.png',
  'station-meteo': '/projects/station-meteo/images/image-01.png',
};

const availableReports = new Set(['balance-numerique','station-meteo']);

const labels = {
  fr:{report:'VOIR LE RAPPORT',reportTitle:'RAPPORT DU PROJET',close:'Fermer',read:'Lecture intégrée au portfolio. Les contrôles de téléchargement sont masqués dans la visionneuse.',tech:'Technologies utilisées',preview:'Aperçu du projet'},
  en:{report:'VIEW REPORT',reportTitle:'PROJECT REPORT',close:'Close',read:'Embedded reading in the portfolio. Download controls are hidden in the viewer.',tech:'Technologies used',preview:'Project preview'},
  ar:{report:'عرض التقرير',reportTitle:'تقرير المشروع',close:'إغلاق',read:'قراءة مدمجة داخل ملف الأعمال. عناصر تنزيل الملف مخفية في العارض.',tech:'التقنيات المستخدمة',preview:'معاينة المشروع'},
  es:{report:'VER INFORME',reportTitle:'INFORME DEL PROYECTO',close:'Cerrar',read:'Lectura integrada en el portfolio. Los controles de descarga están ocultos.',tech:'Tecnologías utilizadas',preview:'Vista previa del proyecto'},
  de:{report:'BERICHT ANSEHEN',reportTitle:'PROJEKTBERICHT',close:'Schließen',read:'Der Bericht ist im Portfolio eingebettet. Download-Steuerelemente sind ausgeblendet.',tech:'Verwendete Technologien',preview:'Projektvorschau'}
};

export default function ProjectShowcaseCard({ project, slug }) {
  const { language } = useLanguage();
  const text = labels[language];
  const localized = localizeProject(project, language);
  const [reportOpen, setReportOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const visual = projectVisuals[slug];
  const report = `/projects/${slug}/report/rapport.pdf`;
  const hasReport = availableReports.has(slug);
  const highlights = localized.tasks.slice(0, 3);

  useEffect(() => { setMounted(true); return () => setMounted(false); }, []);
  useEffect(() => {
    if (!reportOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [reportOpen]);

  const modal = reportOpen && mounted ? createPortal(
    <div className="projectModal" role="dialog" aria-modal="true" aria-label={`${text.reportTitle} ${localized.title}`} onClick={() => setReportOpen(false)}>
      <div className="projectModalContent reportModal" onClick={(event) => event.stopPropagation()}>
        <div className="reportModalHeader"><div><span>{text.reportTitle}</span><strong>{localized.title}</strong></div><button className="projectModalClose" type="button" onClick={() => setReportOpen(false)} aria-label={text.close}>×</button></div>
        {hasReport ? <iframe className="projectReportFrame" src={`${report}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`} title={`${text.reportTitle} ${localized.title}`} /> : <div className="projectReportUnavailable" aria-hidden="true" />}
        {hasReport && <p className="reportReadOnlyNote">{text.read}</p>}
      </div>
    </div>, document.body
  ) : null;

  return <>
    <article className="projectShowcaseCard">
      <div className={`projectShowcaseVisual${visual ? ' hasImage' : ' isEmpty'}`}>{visual ? <img src={visual} alt={`${text.preview} ${localized.title}`} loading="lazy" /> : null}</div>
      <div className="projectShowcaseContent">
        <div className="projectShowcaseTags" aria-label={text.tech}>{localized.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
        <div className="projectShowcaseTitleRow"><h3>{localized.title}</h3><button className="projectShowcaseButton" type="button" onClick={() => setReportOpen(true)}><span className="projectReportPulse" aria-hidden="true" />{text.report}</button></div>
        <p className="projectShowcaseObjective">{localized.objective}</p>
        <ul>{highlights.map((task,index) => <li key={index}>{task}</li>)}</ul>
        <div className="projectShowcaseMeta"><span>{localized.period}</span><span>{localized.institution}</span></div>
      </div>
    </article>
    {modal}
  </>;
}
