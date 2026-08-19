'use client';

import { SectionLabel } from './ui';
import { useLanguage } from './language-context';

export default function EducationInterestsSection() {
  const { t, language } = useLanguage();

  const nexaBullets = {
    fr: [
      'Administration et sécurisation des réseaux : Cisco, fondamentaux TCP/IP, routage, commutation, Windows Server, Linux et virtualisation VMware.',
      'Cybersécurité et cloud : identification des menaces, cryptographie, hacking éthique, audits de vulnérabilités et sécurisation des environnements AWS, Azure et Google Cloud.',
      'Administration avancée et exploitation IT : DevOps, ITIL v4, supervision des infrastructures, automatisation des processus et sécurisation des systèmes de gestion de bases de données.'
    ],
    en: [
      'Network administration and security: Cisco, TCP/IP fundamentals, routing, switching, Windows Server, Linux and VMware virtualization.',
      'Cybersecurity and cloud: threat identification, cryptography, ethical hacking, vulnerability audits and securing AWS, Azure and Google Cloud environments.',
      'Advanced IT operations: DevOps, ITIL v4, infrastructure monitoring, process automation and database management system security.'
    ],
    ar: [
      'إدارة وتأمين الشبكات: Cisco وأساسيات TCP/IP والتوجيه والتحويل وWindows Server وLinux وافتراضية VMware.',
      'الأمن السيبراني والسحابة: تحديد التهديدات والتشفير والاختبار الأخلاقي للأنظمة وتدقيق الثغرات وتأمين بيئات AWS وAzure وGoogle Cloud.',
      'إدارة وتشغيل البنية التحتية: DevOps وITIL v4 والمراقبة والأتمتة وتأمين أنظمة إدارة قواعد البيانات.'
    ],
    es: [
      'Administración y seguridad de redes: Cisco, fundamentos TCP/IP, routing, switching, Windows Server, Linux y virtualización VMware.',
      'Ciberseguridad y cloud: identificación de amenazas, criptografía, hacking ético, auditorías de vulnerabilidades y seguridad en AWS, Azure y Google Cloud.',
      'Operación IT avanzada: DevOps, ITIL v4, supervisión de infraestructuras, automatización y seguridad de sistemas de gestión de bases de datos.'
    ],
    de: [
      'Netzwerkadministration und -sicherheit: Cisco, TCP/IP-Grundlagen, Routing, Switching, Windows Server, Linux und VMware-Virtualisierung.',
      'Cybersecurity und Cloud: Bedrohungserkennung, Kryptografie, Ethical Hacking, Schwachstellenanalysen sowie Absicherung von AWS, Azure und Google Cloud.',
      'Erweiterter IT-Betrieb: DevOps, ITIL v4, Infrastrukturüberwachung, Prozessautomatisierung und Absicherung von Datenbanksystemen.'
    ]
  };

  const education = [
    {
      year: '2026',
      degree: language === 'fr' ? 'Bachelor Cybersécurité' : language === 'ar' ? 'بكالوريوس الأمن السيبراني' : language === 'es' ? 'Bachelor en Ciberseguridad' : language === 'de' ? 'Bachelor Cybersecurity' : 'Bachelor Cybersecurity',
      institution: 'NEXA DIGITAL SCHOOL — LYON',
      logo: '/schools/nexa.svg',
      bullets: nexaBullets[language] || nexaBullets.en,
    },
    {
      year: '2022',
      degree: language === 'fr' ? 'Master 2 - Ingénierie des Systèmes Temps Réel' : language === 'ar' ? 'ماستر 2 - هندسة أنظمة الزمن الحقيقي' : language === 'es' ? 'Máster 2 - Ingeniería de Sistemas de Tiempo Real' : language === 'de' ? 'Master 2 - Echtzeitsystemtechnik' : 'Master 2 - Real-Time Systems Engineering',
      institution: 'UNIVERSITÉ PAUL SABATIER TOULOUSE III',
      logo: '/schools/universite-paul-sabatier.png',
      bullets: language === 'fr' ? ['Fiabilité des systèmes, sûreté de fonctionnement, vérification, validation et tolérance aux fautes.','Systèmes temps réel, Linux temps réel, réseaux CAN / Ethernet embarqué et conception orientée objet.','Conception et modélisation de systèmes de contrôle-commande.'] : language === 'ar' ? ['موثوقية الأنظمة والسلامة الوظيفية والتحقق والتصديق وتحمل الأعطال.','أنظمة الزمن الحقيقي وLinux الزمن الحقيقي وشبكات CAN / Ethernet المدمجة والتصميم كائني التوجه.','تصميم ونمذجة أنظمة التحكم والقيادة.'] : language === 'es' ? ['Fiabilidad de sistemas, seguridad funcional, verificación, validación y tolerancia a fallos.','Sistemas de tiempo real, Linux en tiempo real, redes CAN / Ethernet embebidas y diseño orientado a objetos.','Diseño y modelado de sistemas de control.'] : language === 'de' ? ['Systemzuverlässigkeit, funktionale Sicherheit, Verifikation, Validierung und Fehlertoleranz.','Echtzeitsysteme, Echtzeit-Linux, eingebettete CAN-/Ethernet-Netzwerke und objektorientierter Entwurf.','Entwurf und Modellierung von Steuerungssystemen.'] : ['System reliability, functional safety, verification, validation and fault tolerance.','Real-time systems, real-time Linux, embedded CAN / Ethernet networks and object-oriented design.','Design and modelling of control systems.'],
    },
    {
      year: '2020',
      degree: language === 'fr' ? 'Diplôme Ingénieur - Génie Electrique – Systèmes Embarqués' : language === 'ar' ? 'دبلوم مهندس - الهندسة الكهربائية والأنظمة المدمجة' : language === 'es' ? 'Título de Ingeniero - Ingeniería Eléctrica y Sistemas Embebidos' : language === 'de' ? 'Ingenieurabschluss - Elektrotechnik & Embedded Systems' : 'Engineering Degree - Electrical Engineering & Embedded Systems',
      institution: 'ÉCOLE NATIONALE DES SCIENCES APPLIQUÉES, MAROC',
      logo: '/schools/ensa.png',
      bullets: language === 'fr' ? ['Systèmes embarqués, FPGA, VHDL et architectures de processeurs.','Microcontrôleurs PIC / STM32, C embarqué et réseaux de capteurs sans fil.','Automatisation, électronique de puissance et systèmes numériques.'] : language === 'ar' ? ['الأنظمة المدمجة وFPGA وVHDL ومعماريات المعالجات.','متحكمات PIC / STM32 ولغة C المدمجة وشبكات المستشعرات اللاسلكية.','الأتمتة وإلكترونيات القدرة والأنظمة الرقمية.'] : language === 'es' ? ['Sistemas embebidos, FPGA, VHDL y arquitecturas de procesadores.','Microcontroladores PIC / STM32, C embebido y redes de sensores inalámbricos.','Automatización, electrónica de potencia y sistemas digitales.'] : language === 'de' ? ['Embedded Systems, FPGA, VHDL und Prozessorarchitekturen.','PIC-/STM32-Mikrocontroller, Embedded C und drahtlose Sensornetzwerke.','Automatisierung, Leistungselektronik und digitale Systeme.'] : ['Embedded systems, FPGA, VHDL and processor architectures.','PIC / STM32 microcontrollers, embedded C and wireless sensor networks.','Automation, power electronics and digital systems.'],
    },
  ];

  const interestCards = [
    { key: 'football', label: 'Football', icon: '⚽' },
    { key: 'taekwondo', label: 'Taekwondo', icon: '🥋' },
    { key: 'musculation', label: language === 'fr' ? 'Musculation' : language === 'ar' ? 'كمال الأجسام' : language === 'es' ? 'Musculación' : language === 'de' ? 'Krafttraining' : 'Strength training', icon: '🏋️' },
    { key: 'aviation', label: t('travel'), icon: '✈️' },
    { key: 'technologie', label: t('cyberWatch'), icon: '🛡️' },
  ];

  return (
    <section id="education" className="section shell educationInterestsShowcase">
      <div className="educationShowcaseHeader"><SectionLabel>{t('educationLabel')}</SectionLabel><h2>{t('degrees')}</h2></div>
      <div className="educationCardsGrid">
        {education.map((item) => (
          <article className="educationShowcaseCard" key={item.degree}>
            <div className="educationLogoPanel"><img src={item.logo} alt={`Logo ${item.institution}`} loading="lazy" /></div>
            <div className="educationShowcaseContent"><span className="educationYearBadge">{item.year}</span><h3>{item.degree}</h3><p className="educationInstitution">{item.institution}</p><div className="educationBullets">{item.bullets.map((bullet) => <p key={bullet}><span>•</span>{bullet}</p>)}</div></div>
          </article>
        ))}
      </div>
      <div className="interestsShowcase">
        <div className="interestsShowcaseHeader"><SectionLabel>{t('interests')}</SectionLabel><h2>{t('outside')}</h2></div>
        <div className="interestCardsGrid">{interestCards.map((interest) => <div className={`interestWrap interest-${interest.key}`} key={interest.key}><article className="interestCard"><div className="interestIcon" aria-hidden="true">{interest.icon}</div><strong>{interest.label}</strong></article></div>)}</div>
      </div>
    </section>
  );
}
