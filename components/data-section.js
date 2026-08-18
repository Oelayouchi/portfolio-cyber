import { SectionLabel } from './ui';

function CyberIcon({ type }) {
  const common = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  if (type === 'observe') {
    return <svg {...common}><circle cx="20" cy="20" r="11"/><path d="m28 28 10 10"/><path d="M14 20h12M20 14v12"/></svg>;
  }
  if (type === 'detect') {
    return <svg {...common}><path d="M24 5 39 11v11c0 10-6.4 16.7-15 20-8.6-3.3-15-10-15-20V11l15-6Z"/><path d="m17 24 5 5 10-12"/></svg>;
  }
  if (type === 'analyse') {
    return <svg {...common}><rect x="7" y="8" width="34" height="28" rx="3"/><path d="m13 18 6 5-6 5M23 29h10M15 41h18"/></svg>;
  }
  return <svg {...common}><path d="M24 5 39 11v11c0 10-6.4 16.7-15 20-8.6-3.3-15-10-15-20V11l15-6Z"/><path d="M18 24h12M24 18v12"/></svg>;
}

const steps = [
  { number: '01', type: 'observe', tone: 'collect', title: 'Observer', tools: <>Wireshark · TCP/IP<br />DNS · HTTP</> },
  { number: '02', type: 'detect', tone: 'prepare', title: 'Détecter', tools: <>Wazuh · Splunk<br />IDS/IPS · EDR</> },
  { number: '03', type: 'analyse', tone: 'analyse', title: 'Analyser', tools: <>Logs · Vulnérabilités<br />MITRE ATT&CK</> },
  { number: '04', type: 'respond', tone: 'visualise', title: 'Répondre', tools: <>Incidents · Durcissement<br />Remédiation</> },
];

export default function DataSection() {
  return (
    <section id="data" className="section shell dataPanel">
      <div className="dataPanelHeader">
        <SectionLabel>RECONVERSION VERS LA CYBERSÉCURITÉ</SectionLabel>
        <h2>De la sûreté des systèmes à la protection des systèmes d’information.</h2>
      </div>

      <div className="dataPanelBody">
        <div className="dataPanelCopy">
          <p>
            Mon parcours d’ingénieur m’a appris à analyser des systèmes complexes, identifier les défaillances, vérifier la conformité et travailler avec des environnements critiques. Je transpose aujourd’hui cette rigueur vers la cybersécurité en développant mes compétences en analyse réseau, SIEM, gestion des incidents, Linux, Windows Server, Active Directory et sécurité des infrastructures.
          </p>
        </div>

        <div className="dataFlow" aria-label="Processus cybersécurité">
          <div className="dataFlowSteps">
            {steps.map((step, index) => (
              <div key={step.number} style={{ display: 'contents' }}>
                <div className={`dataFlowStep ${step.tone}`}>
                  <div className="dataFlowIcon"><CyberIcon type={step.type} /></div>
                  <span className="dataFlowNumber">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.tools}</p>
                </div>
                {index < steps.length - 1 && <div className="dataFlowArrow" aria-hidden="true">→</div>}
              </div>
            ))}
          </div>
          <div className="dataFlowCaption">◉ Comprendre, détecter et réduire les risques pour protéger les systèmes et les données.</div>
        </div>
      </div>
    </section>
  );
}
