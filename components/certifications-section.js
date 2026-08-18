'use client';

import { useLanguage } from './language-context';

const base=[
  {key:'powerbi',meta:'33,5 h · Udemy · Sébastien Daviot',image:'/certifications/power-bi.png'},
  {key:'autosar',meta:'4,5 h · Udemy · Prakash Kumar',image:'/certifications/autosar.png'},
  {key:'matlab',meta:'8 h · Udemy',image:'/certifications/matlab-simulink.png'},
  {key:'iso',meta:'4 h · Udemy · Paul Danci',image:'/certifications/iso-26262.png'}
];

const content={
  fr:{powerbi:['Power BI — Formation complète 2026','Power BI Desktop · Power Query · DAX · Power BI Service · Visualisation de données'],autosar:['Architecture AUTOSAR — Learn from Scratch with Demo','Classic AUTOSAR · Architecture · Démonstration logicielle'],matlab:['MATLAB / SIMULINK — Zero to Hero','MATLAB · Simulink · Modélisation · Projets pratiques'],iso:['ISO 26262 — Functional Safety Mastery','ISO 26262 · Sûreté de fonctionnement · HARA · ASIL · FMEDA']},
  en:{powerbi:['Power BI — Complete Course 2026','Power BI Desktop · Power Query · DAX · Power BI Service · Data Visualisation'],autosar:['AUTOSAR Architecture — Learn from Scratch with Demo','Classic AUTOSAR · Architecture · Software Demo'],matlab:['MATLAB / SIMULINK — Zero to Hero','MATLAB · Simulink · Modelling · Practical Projects'],iso:['ISO 26262 — Functional Safety Mastery','ISO 26262 · Functional Safety · HARA · ASIL · FMEDA']},
  ar:{powerbi:['Power BI — دورة كاملة 2026','Power BI Desktop · Power Query · DAX · Power BI Service · تصور البيانات'],autosar:['معمارية AUTOSAR — من الأساسيات إلى التطبيق','Classic AUTOSAR · المعمارية · عرض برمجي'],matlab:['MATLAB / SIMULINK — من الصفر إلى الاحتراف','MATLAB · Simulink · النمذجة · مشاريع تطبيقية'],iso:['ISO 26262 — إتقان السلامة الوظيفية','ISO 26262 · السلامة الوظيفية · HARA · ASIL · FMEDA']},
  es:{powerbi:['Power BI — Curso completo 2026','Power BI Desktop · Power Query · DAX · Power BI Service · Visualización de datos'],autosar:['Arquitectura AUTOSAR — Learn from Scratch with Demo','Classic AUTOSAR · Arquitectura · Demostración de software'],matlab:['MATLAB / SIMULINK — Zero to Hero','MATLAB · Simulink · Modelado · Proyectos prácticos'],iso:['ISO 26262 — Functional Safety Mastery','ISO 26262 · Seguridad funcional · HARA · ASIL · FMEDA']},
  de:{powerbi:['Power BI — Komplettkurs 2026','Power BI Desktop · Power Query · DAX · Power BI Service · Datenvisualisierung'],autosar:['AUTOSAR-Architektur — Learn from Scratch with Demo','Classic AUTOSAR · Architektur · Software-Demo'],matlab:['MATLAB / SIMULINK — Zero to Hero','MATLAB · Simulink · Modellierung · Praxisprojekte'],iso:['ISO 26262 — Functional Safety Mastery','ISO 26262 · Funktionale Sicherheit · HARA · ASIL · FMEDA']}
};

export default function CertificationsSection(){
  const {language,t}=useLanguage();
  return <section id="certifications" className="section shell"><h2>{t('certifications').toUpperCase()}</h2><div className="grid certs">{base.map(item=>{const [title,skills]=content[language][item.key];return <article className="cert" key={item.key}><img src={item.image} alt={title} loading="lazy"/><div><h3>{title}</h3><p className="meta">{item.meta}</p><p>{skills}</p></div></article>})}</div></section>;
}
