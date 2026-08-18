'use client';

import Link from 'next/link';
import { projects } from '../../data/portfolio';
import ProjectShowcaseCard from '../../components/project-showcase-card';
import ThemeController from '../../components/theme-controller';
import { LanguageProvider, useLanguage } from '../../components/language-context';
import LanguagePersistence from '../../components/language-persistence';

const projectSlugs = ['tolerance-aux-fautes','balance-numerique','station-meteo','convoyeur-ascenseur','parking-vhdl','machines-electriques'];

const copy = {
  fr:{title:'TOUS LES PROJETS',description:'Projets techniques réalisés autour de la cybersécurité, du développement, de l’automatisation et des systèmes embarqués.',back:'RETOUR AU PORTFOLIO',language:'Langue'},
  en:{title:'ALL PROJECTS',description:'Technical projects covering cybersecurity, development, automation and embedded systems.',back:'BACK TO PORTFOLIO',language:'Language'},
  ar:{title:'جميع المشاريع',description:'مشاريع تقنية في الأمن السيبراني والتطوير والأتمتة والأنظمة المدمجة.',back:'العودة إلى ملف الأعمال',language:'اللغة'},
  es:{title:'TODOS LOS PROYECTOS',description:'Proyectos técnicos de ciberseguridad, desarrollo, automatización y sistemas embebidos.',back:'VOLVER AL PORTFOLIO',language:'Idioma'},
  de:{title:'ALLE PROJEKTE',description:'Technische Projekte aus Cybersecurity, Entwicklung, Automatisierung und Embedded Systems.',back:'ZURÜCK ZUM PORTFOLIO',language:'Sprache'}
};

function ThemeIcon({type}){
  if(type==='moon')return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z"/></svg>;
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
}

function ProjectsContent(){
  const { language, setLanguage } = useLanguage();
  const text = copy[language] || copy.fr;

  return (
    <main className="allProjectsPage">
      <LanguagePersistence />
      <ThemeController />
      <header className="navBar">
        <nav className="nav shell" aria-label="Portfolio navigation">
          <Link className="brand" href="/" aria-label="Portfolio home">OE<span>.</span></Link>
          <div className="navRight">
            <label className="languageSelector" aria-label={text.language}>
              <span className="languageGlobe" aria-hidden="true">🌐</span>
              <select value={language} onChange={(event)=>setLanguage(event.target.value)}>
                <option value="fr">FR</option><option value="en">EN</option><option value="ar">AR</option><option value="es">ES</option><option value="de">DE</option>
              </select>
            </label>
            <div className="themeToggle" aria-label="Theme">
              <span><ThemeIcon type="moon"/></span>
              <span><ThemeIcon type="sun"/></span>
            </div>
            <Link className="allProjectsBack" href="/#projects"><span aria-hidden="true">←</span>{text.back}</Link>
          </div>
        </nav>
      </header>

      <section className="shell allProjectsShell">
        <div className="allProjectsHeader">
          <div><h1>{text.title}</h1><p>{text.description}</p></div>
        </div>
        <div className="projectShowcaseGrid allProjectsGrid">
          {projects.map((project,index)=><ProjectShowcaseCard key={project.title} project={project} slug={projectSlugs[index] || `projet-${index + 1}`} />)}
        </div>
      </section>
    </main>
  );
}

export default function ProjectsPage(){
  return <LanguageProvider><ProjectsContent/></LanguageProvider>;
}
