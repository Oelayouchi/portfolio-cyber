import { SectionLabel } from './ui';

const education = [
  {
    year: 'Depuis sept. 2026',
    degree: 'Bachelor Cybersécurité',
    institution: 'NEXA DIGITAL SCHOOL — LYON',
    logo: '/schools/nexa.svg',
    bullets: [
      'Formation en cybersécurité avec rythme d’alternance : 3 semaines en entreprise / 1 semaine à l’école.',
      'Développement de compétences en sécurité des systèmes, réseaux, supervision et gestion des incidents.',
      'Approfondissement de Linux, Windows Server, Active Directory, SIEM et analyse réseau.',
    ],
  },
  {
    year: '2022',
    degree: 'Master 2 - Ingénierie des Systèmes Temps Réel',
    institution: 'UNIVERSITÉ PAUL SABATIER TOULOUSE III',
    logo: '/schools/universite-paul-sabatier.png',
    bullets: [
      'Fiabilité des systèmes, sûreté de fonctionnement, vérification, validation et tolérance aux fautes.',
      'Systèmes temps réel, Linux temps réel, réseaux CAN / Ethernet embarqué et conception orientée objet.',
      'Conception et modélisation de systèmes de contrôle-commande.',
    ],
  },
  {
    year: '2020',
    degree: 'Diplôme Ingénieur - Génie Electrique – Systèmes Embarqués',
    institution: 'ÉCOLE NATIONALE DES SCIENCES APPLIQUÉES, MAROC',
    logo: '/schools/ensa.png',
    bullets: [
      'Systèmes embarqués, FPGA, VHDL et architectures de processeurs.',
      'Microcontrôleurs PIC / STM32, C embarqué et réseaux de capteurs sans fil.',
      'Automatisation, électronique de puissance et systèmes numériques.',
    ],
  },
];

const interestCards = [
  { key: 'football', label: 'Football', icon: '⚽' },
  { key: 'taekwondo', label: 'Taekwondo', icon: '🥋' },
  { key: 'musculation', label: 'Musculation', icon: '🏋️' },
  { key: 'aviation', label: 'Voyage', icon: '✈️' },
  { key: 'technologie', label: 'Veille cybersécurité', icon: '🛡️' },
];

export default function EducationInterestsSection() {
  return (
    <section id="education" className="section shell educationInterestsShowcase">
      <div className="educationShowcaseHeader">
        <SectionLabel>FORMATION</SectionLabel>
        <h2>Diplômes</h2>
      </div>
      <div className="educationCardsGrid">
        {education.map((item) => (
          <article className="educationShowcaseCard" key={item.degree}>
            <div className="educationLogoPanel"><img src={item.logo} alt={`Logo ${item.institution}`} loading="lazy" /></div>
            <div className="educationShowcaseContent">
              <span className="educationYearBadge">{item.year}</span>
              <h3>{item.degree}</h3>
              <p className="educationInstitution">{item.institution}</p>
              <div className="educationBullets">{item.bullets.map((bullet) => <p key={bullet}><span>•</span>{bullet}</p>)}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="interestsShowcase">
        <div className="interestsShowcaseHeader"><SectionLabel>CENTRES D’INTÉRÊT</SectionLabel><h2>En dehors du travail</h2></div>
        <div className="interestCardsGrid">
          {interestCards.map((interest) => (
            <div className={`interestWrap interest-${interest.key}`} key={interest.key}>
              <article className="interestCard"><div className="interestIcon" aria-hidden="true">{interest.icon}</div><strong>{interest.label}</strong></article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
