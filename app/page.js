const skills = [
  'Linux', 'Windows Server', 'Active Directory', 'Wireshark', 'Wazuh', 'Splunk',
  'TCP/IP', 'DNS', 'HTTP/HTTPS', 'SIEM', 'SOC', 'IDS/IPS', 'EDR', 'MITRE ATT&CK', 'Python'
];

const experiences = [
  {
    company: 'ALSTOM',
    role: 'Ingénieur en sécurité ferroviaire',
    period: 'Juil. 2024 — Oct. 2024',
    text: 'Vérification de traçabilité Safety, exigences hardware/FPGA, scénarios de test et conformité EN 50129.'
  },
  {
    company: 'CONTINENTAL',
    role: 'Ingénieur sécurité logicielle automobile',
    period: 'Août 2023 — Juil. 2024',
    text: 'Analyse de sûreté logicielle, ISO 26262, AUTOSAR, DOORS, traçabilité des exigences et analyse de défaillances.'
  },
  {
    company: 'PARCELHOME',
    role: 'Développeur électronique & logiciel',
    period: '2022 — 2023',
    text: 'Développement C/C++ et Python, Linux, BLE, Raspberry Pi, STM32, tests, logs et systèmes connectés.'
  }
];

const projects = [
  {
    title: 'Analyse réseau avec Wireshark',
    tag: 'Réseau / Blue Team',
    text: 'Capture et analyse de trafic TCP/IP, DNS, HTTP/HTTPS, identification de comportements suspects et lecture de trames.'
  },
  {
    title: 'Laboratoire SOC / SIEM',
    tag: 'SOC / SIEM',
    text: 'Environnement de détection et corrélation de logs avec Wazuh/Splunk, alertes, triage et investigation d’incidents.'
  },
  {
    title: 'Active Directory & durcissement',
    tag: 'Systèmes',
    text: 'Administration Windows Server, utilisateurs/groupes, GPO, principes de moindre privilège et sécurisation d’un environnement AD.'
  }
];

function CyberCharts() {
  return (
    <div className="cyberCharts">
      <div className="chartCard">
        <div className="bars"><span style={{height:'42%'}}/><span style={{height:'66%'}}/><span style={{height:'78%'}}/><span style={{height:'92%'}}/></div>
        <small>Réseau · SIEM · Linux · AD</small>
      </div>
      <div className="chartCard">
        <svg viewBox="0 0 180 100" aria-hidden="true"><polyline points="8,83 42,68 76,55 110,37 150,18"/><circle cx="8" cy="83" r="3"/><circle cx="42" cy="68" r="3"/><circle cx="76" cy="55" r="3"/><circle cx="110" cy="37" r="3"/><circle cx="150" cy="18" r="3"/></svg>
        <small>Détection → Analyse → Réponse</small>
      </div>
      <div className="chartCard donutWrap"><div className="donut"/><small>Blue Team · SOC · Systèmes</small></div>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <header className="nav"><a className="brand" href="#top">OE<span>.</span></a><nav><a href="#about">À propos</a><a href="#experience">Expérience</a><a href="#projects">Projets</a><a href="#cyber">Cyber</a><a href="#education">Diplômes</a><a href="#contact">Contact</a></nav></header>

      <section id="top" className="hero shell">
        <div className="heroCopy">
          <p className="eyebrow">INGÉNIEUR & CYBERSÉCURITÉ EN RECONVERSION</p>
          <h1>Oussama<br/><span>EL AYOUCHI</span></h1>
          <p className="lead">Ingénieur systèmes embarqués & Safety, actuellement en reconversion vers la <strong>cybersécurité</strong>.</p>
          <div className="actions"><a className="btn primary" href="#contact">Me contacter</a><a className="btn ghost" href="/documents/CV_Oussama_EL_AYOUCHI_Cyber.pdf">Télécharger mon CV Cyber</a></div>
          <div className="availability"><span className="pulse"/>Disponible pour une alternance en cybersécurité — dès septembre 2026</div>
        </div>
        <div className="heroPanel">
          <div className="identity"><div className="avatar">OE</div><div><strong>Oussama EL AYOUCHI</strong><span>Ingénieur systèmes embarqués & Safety</span></div></div>
          <p>Je transpose mon expérience des systèmes critiques, de la sûreté de fonctionnement et de l’analyse de défaillances vers la protection des systèmes d’information.</p>
          <CyberCharts />
        </div>
      </section>

      <section id="about" className="section shell split"><div><p className="eyebrow">À PROPOS</p><h2>Des systèmes critiques à la cybersécurité.</h2></div><div><p>Mon parcours m’a amené à travailler sur des systèmes embarqués, des environnements critiques, la traçabilité des exigences, l’analyse des défaillances et les tests. Ces bases sont directement utiles pour comprendre les risques, détecter les anomalies et sécuriser des infrastructures.</p><p>Aujourd’hui, je développe une spécialisation orientée Blue Team, SOC, réseau, SIEM, Linux, Windows Server et Active Directory.</p></div></section>

      <section id="experience" className="section shell"><p className="eyebrow">EXPÉRIENCE</p><h2>Expériences professionnelles</h2><div className="cards">{experiences.map((e)=><article className="card" key={e.company}><span>{e.period}</span><h3>{e.company}</h3><h4>{e.role}</h4><p>{e.text}</p></article>)}</div></section>

      <section id="projects" className="section shell"><p className="eyebrow">PORTFOLIO</p><h2>Projets cybersécurité</h2><div className="cards">{projects.map((p)=><article className="card project" key={p.title}><span>{p.tag}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></section>

      <section id="cyber" className="section shell cyberSection"><div><p className="eyebrow">RECONVERSION VERS LA CYBERSÉCURITÉ</p><h2>Observer. Détecter. Analyser. Répondre.</h2><p>Une approche structurée de la cybersécurité, issue de mon expérience en ingénierie Safety et systèmes critiques.</p></div><div className="flow"><div><b>01</b><strong>Observer</strong><span>Wireshark · TCP/IP · DNS</span></div><i>→</i><div><b>02</b><strong>Détecter</strong><span>Wazuh · Splunk · IDS/IPS</span></div><i>→</i><div><b>03</b><strong>Analyser</strong><span>Logs · Vulnérabilités · MITRE ATT&CK</span></div><i>→</i><div><b>04</b><strong>Répondre</strong><span>Incidents · Remédiation · Durcissement</span></div></div></section>

      <section className="section shell"><p className="eyebrow">COMPÉTENCES</p><h2>Technologies principales</h2><div className="skills">{skills.map(s=><span key={s}>{s}</span>)}</div></section>

      <section id="education" className="section shell"><p className="eyebrow">FORMATION</p><h2>Diplômes & spécialisation</h2><div className="education"><article><span>Depuis sept. 2026</span><h3>Bachelor Cybersécurité</h3><p>NEXA DIGITAL SCHOOL — LYON</p><small>Réseaux · SOC/SIEM · Linux · Windows Server · Active Directory · Sécurité des infrastructures</small></article><article><span>2022</span><h3>Master 2 — Ingénierie des Systèmes Temps Réel</h3><p>Université Toulouse III — Paul Sabatier</p></article><article><span>2020</span><h3>Diplôme d’ingénieur — Génie Électrique & Systèmes Embarqués</h3><p>ENSA Khouribga — Maroc</p></article></div></section>

      <section id="contact" className="section shell contact"><div><p className="eyebrow">CONTACT</p><h2>À la recherche d’une alternance en cybersécurité.</h2><p>Disponible pour échanger autour d’opportunités en SOC, cybersécurité des infrastructures, réseaux, systèmes ou Blue Team.</p></div><div className="contactBox"><a href="mailto:oussamaelayouchi@gmail.com">oussamaelayouchi@gmail.com</a><a href="https://www.linkedin.com/in/oelayouchi/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></section>

      <footer className="footer shell"><span>© 2026 Oussama EL AYOUCHI</span><span>Portfolio Cybersécurité</span></footer>
    </main>
  );
}
