'use client';

import Link from 'next/link';
import { projects } from '../data/portfolio';
import ProjectShowcaseCard from './project-showcase-card';
import { useLanguage } from './language-context';

const projectSlugs = ['analyse-reseau-wireshark', 'tolerance-aux-fautes', 'balance-numerique'];

export default function ProjectsSection() {
  const { language, t } = useLanguage();
  const text = {
    fr:{title:'PROJETS',intro:'Une sélection de projets autour de la cybersécurité, de la fiabilité, du développement et des systèmes embarqués.',all:'VOIR TOUS LES PROJETS',cyberTitle:'Analyse réseau avec Wireshark',institution:'Projet cybersécurité personnel',objective:'Capturer et analyser du trafic réseau afin d’identifier les protocoles utilisés et repérer des communications inhabituelles.',tasks:['Capture et analyse du trafic réseau avec Wireshark.','Identification des protocoles TCP/IP, DNS et HTTP.','Observation et détection de communications réseau inhabituelles.']},
    en:{title:'PROJECTS',intro:'A selection of projects around cybersecurity, reliability, development and embedded systems.',all:'VIEW ALL PROJECTS',cyberTitle:'Network Analysis with Wireshark',institution:'Personal cybersecurity project',objective:'Capture and analyse network traffic to identify protocols and detect unusual communications.',tasks:['Capture and analyse network traffic with Wireshark.','Identify TCP/IP, DNS and HTTP protocols.','Observe and detect unusual network communications.']},
    ar:{title:'المشاريع',intro:'مجموعة من المشاريع في الأمن السيبراني والموثوقية والتطوير والأنظمة المدمجة.',all:'عرض جميع المشاريع',cyberTitle:'تحليل الشبكات باستخدام Wireshark',institution:'مشروع شخصي في الأمن السيبراني',objective:'التقاط وتحليل حركة الشبكة لتحديد البروتوكولات واكتشاف الاتصالات غير المعتادة.',tasks:['التقاط وتحليل حركة الشبكة باستخدام Wireshark.','تحديد بروتوكولات TCP/IP وDNS وHTTP.','مراقبة واكتشاف الاتصالات الشبكية غير المعتادة.']},
    es:{title:'PROYECTOS',intro:'Una selección de proyectos de ciberseguridad, fiabilidad, desarrollo y sistemas embebidos.',all:'VER TODOS LOS PROYECTOS',cyberTitle:'Análisis de red con Wireshark',institution:'Proyecto personal de ciberseguridad',objective:'Capturar y analizar tráfico de red para identificar protocolos y detectar comunicaciones inusuales.',tasks:['Captura y análisis del tráfico de red con Wireshark.','Identificación de protocolos TCP/IP, DNS y HTTP.','Observación y detección de comunicaciones de red inusuales.']},
    de:{title:'PROJEKTE',intro:'Eine Auswahl an Projekten aus Cybersecurity, Zuverlässigkeit, Entwicklung und Embedded Systems.',all:'ALLE PROJEKTE ANZEIGEN',cyberTitle:'Netzwerkanalyse mit Wireshark',institution:'Persönliches Cybersecurity-Projekt',objective:'Netzwerkverkehr erfassen und analysieren, um Protokolle zu identifizieren und ungewöhnliche Kommunikation zu erkennen.',tasks:['Netzwerkverkehr mit Wireshark erfassen und analysieren.','TCP/IP-, DNS- und HTTP-Protokolle identifizieren.','Ungewöhnliche Netzwerkkommunikation beobachten und erkennen.']}
  }[language];

  const cyberProject = { title:text.cyberTitle, period:'2026', institution:text.institution, objective:text.objective, tasks:text.tasks, stack:['Wireshark','TCP/IP','DNS','HTTP'] };
  const featuredProjects = [cyberProject, ...projects.slice(0, 2)];

  return (
    <section id="projects" className="section shell projectShowcaseSection">
      <div className="projectShowcaseHeading"><span className="eyebrow">PORTFOLIO</span><h2>{text.title}</h2><p>{text.intro}</p></div>
      <div className="projectShowcaseGrid">{featuredProjects.map((project,index)=><ProjectShowcaseCard key={`${project.title}-${index}`} project={project} slug={projectSlugs[index]} />)}</div>
      <div className="projectShowcaseAllWrap"><Link className="projectShowcaseAllButton" href="/projects">{text.all}<span aria-hidden="true">→</span></Link></div>
    </section>
  );
}
