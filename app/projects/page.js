import Link from 'next/link';
import { projects } from '../../data/portfolio';
import ProjectShowcaseCard from '../../components/project-showcase-card';
import ThemeController from '../../components/theme-controller';

const projectSlugs = [
  'tolerance-aux-fautes',
  'balance-numerique',
  'station-meteo',
  'convoyeur-ascenseur',
  'parking-vhdl',
  'machines-electriques',
];

export const metadata = {
  title: 'Tous les projets — Oussama EL AYOUCHI',
  description: 'Découvrez l’ensemble des projets techniques et cybersécurité de Oussama EL AYOUCHI.',
};

export default function ProjectsPage() {
  return (
    <main className="allProjectsPage">
      <ThemeController />
      <section className="shell allProjectsShell">
        <div className="allProjectsHeader">
          <div>
            <span className="eyebrow">PORTFOLIO</span>
            <h1>TOUS LES PROJETS</h1>
            <p>Projets techniques réalisés autour de la cybersécurité, du développement, de l&apos;automatisation et des systèmes embarqués.</p>
          </div>
          <Link className="allProjectsBack" href="/#projects"><span aria-hidden="true">←</span>RETOUR AU PORTFOLIO</Link>
        </div>
        <div className="projectShowcaseGrid allProjectsGrid">
          {projects.map((project, index) => (
            <ProjectShowcaseCard key={project.title} project={project} slug={projectSlugs[index] || `projet-${index + 1}`} />
          ))}
        </div>
      </section>
    </main>
  );
}
