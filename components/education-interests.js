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

  const masterBullets = {
    fr: [
      'Fiabilité des systèmes : sûreté de fonctionnement, vérification, validation, test logiciel et tolérance aux fautes.',
      'Systèmes temps réel : conception des systèmes temps réel, analyse d’ordonnançabilité et de sensibilité.',
      'Systèmes d’exploitation temps réel : Trampoline RTOS, norme OSEK/VDX et Linux temps réel (RTAI).',
      'Réseaux temps réel : CAN, FIP et Ethernet embarqué.',
      'Conception orientée objet : C++, Java et Python.',
      'Conception et modélisation des systèmes contrôle-commande, commande linéaire avancée, modélisation et mise en œuvre des commandes temps réel.',
      'Ingénierie systèmes et gestion d’entreprise.'
    ],
    en: [
      'System reliability: functional safety, verification, validation, software testing and fault tolerance.',
      'Real-time systems: real-time system design, schedulability analysis and sensitivity analysis.',
      'Real-time operating systems: Trampoline RTOS, OSEK/VDX standard and real-time Linux (RTAI).',
      'Real-time networks: CAN, FIP and embedded Ethernet.',
      'Object-oriented design: C++, Java and Python.',
      'Control-system design and modelling, advanced linear control, modelling and implementation of real-time control.',
      'Systems engineering and business management.'
    ],
    ar: [
      'موثوقية الأنظمة: السلامة الوظيفية، التحقق، التصديق، اختبار البرمجيات وتحمل الأعطال.',
      'أنظمة الزمن الحقيقي: تصميم أنظمة الزمن الحقيقي وتحليل قابلية الجدولة والحساسية.',
      'أنظمة تشغيل الزمن الحقيقي: Trampoline RTOS ومعيار OSEK/VDX وLinux في الزمن الحقيقي (RTAI).',
      'شبكات الزمن الحقيقي: CAN وFIP وEthernet مدمج.',
      'التصميم كائني التوجه: C++ وJava وPython.',
      'تصميم ونمذجة أنظمة التحكم، التحكم الخطي المتقدم، ونمذجة وتنفيذ أوامر الزمن الحقيقي.',
      'هندسة الأنظمة وإدارة المؤسسة.'
    ],
    es: [
      'Fiabilidad de sistemas: seguridad funcional, verificación, validación, pruebas de software y tolerancia a fallos.',
      'Sistemas de tiempo real: diseño, análisis de planificabilidad y análisis de sensibilidad.',
      'Sistemas operativos de tiempo real: Trampoline RTOS, norma OSEK/VDX y Linux en tiempo real (RTAI).',
      'Redes de tiempo real: CAN, FIP y Ethernet embebido.',
      'Diseño orientado a objetos: C++, Java y Python.',
      'Diseño y modelado de sistemas de control, control lineal avanzado e implementación de controles en tiempo real.',
      'Ingeniería de sistemas y gestión empresarial.'
    ],
    de: [
      'Systemzuverlässigkeit: funktionale Sicherheit, Verifikation, Validierung, Softwaretests und Fehlertoleranz.',
      'Echtzeitsysteme: Entwurf, Scheduling-Analyse und Sensitivitätsanalyse.',
      'Echtzeitbetriebssysteme: Trampoline RTOS, OSEK/VDX-Standard und Echtzeit-Linux (RTAI).',
      'Echtzeitnetzwerke: CAN, FIP und Embedded Ethernet.',
      'Objektorientierter Entwurf: C++, Java und Python.',
      'Entwurf und Modellierung von Regelungs- und Steuerungssystemen, fortgeschrittene lineare Regelung und Umsetzung von Echtzeitsteuerungen.',
      'Systems Engineering und Unternehmensführung.'
    ]
  };

  const ensaBullets = {
    fr: [
      'Système embarqué matériel et systèmes programmables sur puce : conception des systèmes numériques avec PLD et FPGA ; architecture des processeurs, Nios II, conception numérique VHDL et VHDL-AMS.',
      'Informatique industrielle : interfaçage des capteurs ; programmation des microcontrôleurs PIC et STM32 en C embarqué ; réseaux de capteurs sans fil.',
      'Machines électriques et électronique de puissance : électronique de puissance, machines à courant continu et convertisseurs statiques.'
    ],
    en: [
      'Embedded hardware and programmable systems-on-chip: digital system design with PLDs and FPGAs; processor architecture, Nios II, VHDL and VHDL-AMS digital design.',
      'Industrial computing: sensor interfacing; PIC and STM32 microcontroller programming in embedded C; wireless sensor networks.',
      'Electrical machines and power electronics: power electronics, DC machines and static converters.'
    ],
    ar: [
      'الأنظمة المدمجة المادية والأنظمة القابلة للبرمجة على الرقاقة: تصميم الأنظمة الرقمية باستخدام PLD وFPGA؛ معماريات المعالجات وNios II وتصميم VHDL وVHDL-AMS.',
      'المعلوماتية الصناعية: ربط الحساسات؛ برمجة متحكمات PIC وSTM32 بلغة C المدمجة؛ شبكات حساسات لاسلكية.',
      'الآلات الكهربائية وإلكترونيات القدرة: إلكترونيات القدرة، آلات التيار المستمر والمحولات الساكنة.'
    ],
    es: [
      'Hardware embebido y sistemas programables en chip: diseño de sistemas digitales con PLD y FPGA; arquitectura de procesadores, Nios II, diseño VHDL y VHDL-AMS.',
      'Informática industrial: interfaz de sensores; programación de microcontroladores PIC y STM32 en C embebido; redes inalámbricas de sensores.',
      'Máquinas eléctricas y electrónica de potencia: electrónica de potencia, máquinas de corriente continua y convertidores estáticos.'
    ],
    de: [
      'Embedded Hardware und programmierbare System-on-Chip-Lösungen: Digitaldesign mit PLD und FPGA; Prozessorarchitektur, Nios II, VHDL- und VHDL-AMS-Design.',
      'Industrieinformatik: Sensoranbindung; Programmierung von PIC- und STM32-Mikrocontrollern in Embedded C; drahtlose Sensornetzwerke.',
      'Elektrische Maschinen und Leistungselektronik: Leistungselektronik, Gleichstrommaschinen und statische Umrichter.'
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
      bullets: masterBullets[language] || masterBullets.en,
    },
    {
      year: '2020',
      degree: language === 'fr' ? 'Diplôme Ingénieur - Génie Electrique – Systèmes Embarqués' : language === 'ar' ? 'دبلوم مهندس - الهندسة الكهربائية والأنظمة المدمجة' : language === 'es' ? 'Título de Ingeniero - Ingeniería Eléctrica y Sistemas Embebidos' : language === 'de' ? 'Ingenieurabschluss - Elektrotechnik & Embedded Systems' : 'Engineering Degree - Electrical Engineering & Embedded Systems',
      institution: 'ÉCOLE NATIONALE DES SCIENCES APPLIQUÉES, MAROC',
      logo: '/schools/ensa.png',
      bullets: ensaBullets[language] || ensaBullets.en,
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
