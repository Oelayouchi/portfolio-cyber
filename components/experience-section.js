import { experiences } from '../data/portfolio';
import { Tags } from './ui';
import ExperienceReport from './experience-report';

const additionalExperiences = [
  {
    id: 'experience-ocp-2019',
    company: 'OCP',
    logo: '/companies/ocp.png',
    department: 'Office Chérifien des Phosphates — Laverie BA',
    role: 'Stage Ingénieur',
    period: 'Juillet 2019 – Août 2019',
    place: 'Khouribga, Maroc',
    objectives: ['Amélioration de la gestion et du contrôle du site Beni Amir.'],
    tasks: [
      'Étude et communication de l’analyseur OUTOTEC avec le système de contrôle DCS.',
      'Amélioration des boucles de régulation de l’unité de flottation par l’outil Matlab-Simulink.',
    ],
    stack: ['DCS', 'OUTOTEC', 'Matlab', 'Simulink', 'Régulation industrielle'],
  },
  {
    id: 'experience-onda-2018',
    company: 'Office National des Aéroports',
    logo: '/companies/onda.png',
    department: 'Office National des Aéroports',
    role: 'Stage Ingénieur d’initiation',
    period: 'Juillet 2018 – Août 2018',
    place: 'Casablanca, Maroc',
    objectives: ['Étude d’installation d’une ligne de convoyage pour traitement des bagages.'],
    tasks: [
      'Description générale de l’installation de traitement de bagages de l’arrivée et de correspondance.',
      'Automatisation d’une nouvelle ligne de convoyage de traitement de bagages.',
    ],
    stack: ['Automatisation', 'Convoyage', 'Traitement des bagages', 'Systèmes industriels'],
  },
];

function getExperienceDisplayName(experience) {
  if (experience.id === 'experience-alstom') return 'ALSTOM';
  if (experience.id === 'experience-continental') return 'CONTINENTAL';
  if (experience.id.startsWith('experience-parcelhome')) return 'ParcelHome';
  if (experience.id === 'experience-ocp' || experience.id === 'experience-ocp-2019') return 'OCP';
  if (experience.id === 'experience-onda-2018') return 'ONDA';
  return experience.company;
}

function getExperiencePeriod(experience) {
  if (experience.id === 'experience-alstom') return 'Juillet 2024 – Octobre 2025';
  return experience.period;
}

function ParcelHomeAchievements() {
  return (
    <ul className="achievementList achievementListMain">
      <li>Conception et développement des programmes et applications informatiques.<ul className="achievementSubList"><li>Conception d’un banc de test automatisé en Python/Raspberry Pi pour valider les fonctionnalités.</li><li>Mise en place d’une checklist complète équivalente à un catalogue d’essais.</li></ul></li>
      <li>Élaboration et rédaction des spécifications techniques.</li>
      <li>Réalisation des tests techniques et fonctionnels des logiciels et applications.</li>
      <li>Analyse des problèmes techniques, fonctionnels et proposition de corrections.</li>
      <li>Interface régulière avec les responsables et l’équipe projet afin de présenter les résultats et de suivre la mise en œuvre des corrections.</li>
      <li>Interventions chez les utilisateurs à domicile :<ul className="achievementSubList"><li>Traitement des mails pour identifier les problèmes et besoins, suivi de la satisfaction client.</li><li>Élaboration d’un fichier Excel pour centraliser les informations liées aux interventions.</li><li>Réparation des boîtes, remplacement de cartes électroniques, mise à jour logicielle, changement de panneaux solaires et de batteries.</li><li>Rédaction sur place de rapports d’intervention.</li></ul></li>
      <li>Collaboration avec les équipes de développement mobile :<ul className="achievementSubList"><li>Explication du fonctionnement de la boîte et de la construction des trames de données.</li><li>Réalisation de tests de l’application mobile.</li><li>Rédaction de rapports de tests destinés aux développeurs.</li></ul></li>
    </ul>
  );
}

function ParcelHomeStageAchievements() {
  return (
    <div className="parcelSubjects">
      <div className="parcelSubject"><h6>Sujet 1 : Réalisation d’un banc de test :</h6><ul className="achievementList"><li>Analyse des spécifications techniques et cahier des charges.</li><li>Création d’une interface graphique capable d’interagir avec la boîte à colis intelligente via BLE, développée en Python sur Raspberry Pi.</li><li>Génération automatique d’une check-list et rédaction d’un rapport de test.</li><li>Acquisition des données et décryptage avec Protobuf.</li><li>Récupération des logs et envoi au serveur.</li><li>Test des services de l’API et de la communication avec la boîte.</li></ul></div>
      <div className="parcelSubject"><h6>Sujet 2 : Identification d’une solution hardware capable de contrôler en ligne l’équipement de l’entreprise :</h6><ul className="achievementList"><li>Identification d’une solution hardware pour contrôler la boîte en ligne.</li><li>Réalisation d’un prototype de passerelle Wi-Fi / Bluetooth.</li><li>Établissement de la connexion Bluetooth avec la boîte intelligente.</li><li>Création d’une page web contenant toutes les commandes de la boîte intelligente.</li><li>Configuration des paramètres Wi-Fi via Bluetooth à l’aide d’une application mobile.</li></ul></div>
    </div>
  );
}

function ExperienceAchievements({ experience }) {
  if (experience.id === 'experience-parcelhome') return <ParcelHomeAchievements />;
  if (experience.id === 'experience-parcelhome-stage') return <ParcelHomeStageAchievements />;
  return <ul>{experience.tasks.map((task) => <li key={task}>{task}</li>)}</ul>;
}

export default function ExperienceSection() {
  const allExperiences = [...experiences, ...additionalExperiences];
  return (
    <section id="experience" className="section shell">
      <h2>EXPÉRIENCES PROFESSIONNELLES</h2>
      <div className="timeline">
        {allExperiences.map((experience) => {
          const displayName = getExperienceDisplayName(experience);
          const displayPeriod = getExperiencePeriod(experience);
          return (
            <article className="experience experienceRefined" id={experience.id} key={experience.id}>
              <div className="experienceBody">
                <div className="experienceTopRow">
                  <div className="experienceIdentity"><div className="experienceLogoInline"><img src={experience.logo} alt={`Logo ${displayName}`} loading="lazy" /></div><div><h3>{displayName}</h3><p className="experienceDepartment">{experience.department}</p></div></div>
                  <div className="experienceTopActions"><div className="experienceMetaTop"><strong>{displayPeriod}</strong><span>{experience.place}</span></div><ExperienceReport experienceId={experience.id} title={displayName} /></div>
                </div>
                <h4>{experience.role}</h4>
                <div className="experienceBlock"><h5>Objectifs</h5><ul>{experience.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul></div>
                <div className="experienceBlock"><h5>Réalisations</h5><ExperienceAchievements experience={experience} /></div>
                <div className="experienceBlock"><h5>Environnement technique</h5><Tags items={experience.stack} /></div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
