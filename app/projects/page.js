'use client';

import Link from 'next/link';
import { projects } from '../../data/portfolio';
import ProjectShowcaseCard from '../../components/project-showcase-card';
import ThemeController from '../../components/theme-controller';
import { useLanguage } from '../../components/language-context';

const projectSlugs = ['tolerance-aux-fautes','balance-numerique','station-meteo','convoyeur-ascenseur','parking-vhdl','machines-electriques'];

const copy = {
  fr:{title:'TOUS LES PROJETS',description:'Projets techniques réalisés autour de la cybersécurité, du développement, de l’automatisation et des systèmes embarqués.',back:'RETOUR AU PORTFOLIO'},
  en:{title:'ALL PROJECTS',description:'Technical projects covering cybersecurity, development, automation and embedded systems.',back:'BACK TO PORTFOLIO'},
  ar:{title:'جميع المشاريع',description:'مشاريع تقنية في الأمن السيبراني والتطوير والأتمتة والأنظمة المدمجة.',back:'العودة إلى ملف الأعمال'},
  es:{title:'TODOS LOS PROYECTOS',description:'Proyectos técnicos de ciberseguridad, desarrollo, automatización y sistemas embebidos.',back:'VOLVER AL PORTFOLIO'},
  de:{title:'ALLE PROJEKTE',description:'Technische Projekte aus Cybersecurity, Entwicklung, Automatisierung und Embedded Systems.',back:'ZURÜCK ZUM PORTFOLIO'}
};

export default function ProjectsPage() {
  const { language } = useLanguage();
  const text = copy[language];
  return (
    <main className="allProjectsPage">
      <ThemeController />
      <section className="shell allProjectsShell">
        <div className="allProjectsHeader">
          <div><span className="eyebrow">PORTFOLIO</span><h1>{text.title}</h1><p>{text.description}</p></div>
          <Link className="allProjectsBack" href="/#projects"><span aria-hidden="true">←</span>{text.back}</Link>
        </div>
        <div className="projectShowcaseGrid allProjectsGrid">
          {projects.map((project,index)=><ProjectShowcaseCard key={project.title} project={project} slug={projectSlugs[index] || `projet-${index + 1}`} />)}
        </div>
      </section>
    </main>
  );
}
