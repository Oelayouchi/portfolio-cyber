import Link from 'next/link';
import { projects } from '../data/portfolio';
import ProjectShowcaseCard from './project-showcase-card';

const cyberProject = {
  title: 'Analyse réseau avec Wireshark',
  period: '2026',
  institution: 'Projet cybersécurité personnel',
  objective: 'Capturer et analyser du trafic réseau afin d’identifier les protocoles utilisés et repérer des communications inhabituelles.',
  tasks: [
    'Capture et analyse du trafic réseau avec Wireshark.',
    'Identification des protocoles TCP/IP, DNS et HTTP.',
    'Observation et détection de communications réseau inhabituelles.',
  ],
  stack: ['Wireshark', 'TCP/IP', 'DNS', 'HTTP'],
};

const featuredProjects = [cyberProject, ...projects.slice(0, 2)];
const projectSlugs = ['analyse-reseau-wireshark', 'tolerance-aux-fautes', 'balance-numerique'];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section shell projectShowcaseSection">
      <div className="projectShowcaseHeading">
        <span className="eyebrow">PORTFOLIO</span>
        <h2>PROJETS</h2>
        <p>Une sélection de projets autour de la cybersécurité, de la fiabilité, du développement et des systèmes embarqués.</p>
      </div>
      <div className="projectShowcaseGrid">
        {featuredProjects.map((project, index) => (
          <ProjectShowcaseCard key={project.title} project={project} slug={projectSlugs[index]} />
        ))}
      </div>
      <div className="projectShowcaseAllWrap">
        <Link className="projectShowcaseAllButton" href="/projects">VOIR TOUS LES PROJETS<span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
