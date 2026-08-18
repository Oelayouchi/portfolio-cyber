'use client';

import { experiences } from '../data/portfolio';
import { Tags } from './ui';
import ExperienceReport from './experience-report';
import { useLanguage } from './language-context';
import { localizeExperience } from './content-translations';

const additionalExperiences = [
  { id:'experience-ocp-2019', company:'OCP', logo:'/companies/ocp.png', department:'Office Chérifien des Phosphates — Laverie BA', role:'Stage Ingénieur', period:'Juillet 2019 – Août 2019', place:'Khouribga, Maroc', objectives:['Amélioration de la gestion et du contrôle du site Beni Amir.'], tasks:['Étude et communication de l’analyseur OUTOTEC avec le système de contrôle DCS.','Amélioration des boucles de régulation de l’unité de flottation par l’outil Matlab-Simulink.'], stack:['DCS','OUTOTEC','Matlab','Simulink','Régulation industrielle'] },
  { id:'experience-onda-2018', company:'Office National des Aéroports', logo:'/companies/onda.png', department:'Office National des Aéroports', role:'Stage Ingénieur d’initiation', period:'Juillet 2018 – Août 2018', place:'Casablanca, Maroc', objectives:['Étude d’installation d’une ligne de convoyage pour traitement des bagages.'], tasks:['Description générale de l’installation de traitement de bagages de l’arrivée et de correspondance.','Automatisation d’une nouvelle ligne de convoyage de traitement de bagages.'], stack:['Automatisation','Convoyage','Traitement des bagages','Systèmes industriels'] },
];

function getExperienceDisplayName(experience){if(experience.id==='experience-alstom')return'ALSTOM';if(experience.id==='experience-continental')return'CONTINENTAL';if(experience.id.startsWith('experience-parcelhome'))return'ParcelHome';if(experience.id==='experience-ocp'||experience.id==='experience-ocp-2019')return'OCP';if(experience.id==='experience-onda-2018')return'ONDA';return experience.company;}

export default function ExperienceSection(){
  const { language } = useLanguage();
  const labels = {
    fr:{title:'EXPÉRIENCES PROFESSIONNELLES',objectives:'Objectifs',achievements:'Réalisations',environment:'Environnement technique'},
    en:{title:'PROFESSIONAL EXPERIENCE',objectives:'Objectives',achievements:'Achievements',environment:'Technical environment'},
    ar:{title:'الخبرات المهنية',objectives:'الأهداف',achievements:'الإنجازات',environment:'البيئة التقنية'},
    es:{title:'EXPERIENCIA PROFESIONAL',objectives:'Objetivos',achievements:'Realizaciones',environment:'Entorno técnico'},
    de:{title:'BERUFSERFAHRUNG',objectives:'Ziele',achievements:'Leistungen',environment:'Technisches Umfeld'}
  }[language];

  const allExperiences=[...experiences,...additionalExperiences].map(item=>localizeExperience(item,language));

  return <section id="experience" className="section shell">
    <h2>{labels.title}</h2>
    <div className="timeline">
      {allExperiences.map(experience=>{
        const displayName=getExperienceDisplayName(experience);
        return <article className="experience experienceRefined" id={experience.id} key={experience.id}>
          <div className="experienceBody">
            <div className="experienceTopRow">
              <div className="experienceIdentity">
                <div className="experienceLogoInline"><img src={experience.logo} alt={`Logo ${displayName}`} loading="lazy"/></div>
                <div><h3>{displayName}</h3><p className="experienceDepartment">{experience.department}</p></div>
              </div>
              <div className="experienceTopActions">
                <div className="experienceMetaTop"><strong>{experience.period}</strong><span>{experience.place}</span></div>
                <ExperienceReport experienceId={experience.id} title={displayName}/>
              </div>
            </div>
            <h4>{experience.role}</h4>
            <div className="experienceBlock"><h5>{labels.objectives}</h5><ul>{experience.objectives.map((objective,index)=><li key={`${experience.id}-o-${index}`}>{objective}</li>)}</ul></div>
            <div className="experienceBlock"><h5>{labels.achievements}</h5><ul>{experience.tasks.map((task,index)=><li key={`${experience.id}-t-${index}`}>{task}</li>)}</ul></div>
            <div className="experienceBlock"><h5>{labels.environment}</h5><Tags items={experience.stack}/></div>
          </div>
        </article>;
      })}
    </div>
  </section>;
}
