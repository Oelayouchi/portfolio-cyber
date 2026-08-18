'use client';

import { SectionLabel } from './ui';
import { useLanguage } from './language-context';

function CyberIcon({ type }) {
  const common = { viewBox: '0 0 48 48', fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' };
  if (type === 'observe') return <svg {...common}><circle cx="20" cy="20" r="11"/><path d="m28 28 10 10"/><path d="M14 20h12M20 14v12"/></svg>;
  if (type === 'detect') return <svg {...common}><path d="M24 5 39 11v11c0 10-6.4 16.7-15 20-8.6-3.3-15-10-15-20V11l15-6Z"/><path d="m17 24 5 5 10-12"/></svg>;
  if (type === 'analyse') return <svg {...common}><rect x="7" y="8" width="34" height="28" rx="3"/><path d="m13 18 6 5-6 5M23 29h10M15 41h18"/></svg>;
  return <svg {...common}><path d="M24 5 39 11v11c0 10-6.4 16.7-15 20-8.6-3.3-15-10-15-20V11l15-6Z"/><path d="M18 24h12M24 18v12"/></svg>;
}

export default function DataSection() {
  const { t } = useLanguage();
  const steps = [
    { number: '01', type: 'observe', tone: 'collect', title: t('observe'), tools: <>Wireshark · TCP/IP<br />DNS · HTTP</> },
    { number: '02', type: 'detect', tone: 'prepare', title: t('detect'), tools: <>Wazuh · Splunk<br />IDS/IPS · EDR</> },
    { number: '03', type: 'analyse', tone: 'analyse', title: t('analyse'), tools: <>Logs · Vulnerabilities<br />MITRE ATT&CK</> },
    { number: '04', type: 'respond', tone: 'visualise', title: t('respond'), tools: <>Incidents · Hardening<br />Remediation</> },
  ];

  return (
    <section id="data" className="section shell dataPanel">
      <div className="dataPanelHeader">
        <SectionLabel>{t('cyberLabel')}</SectionLabel>
        <h2>{t('cyberTitle')}</h2>
      </div>
      <div className="dataPanelBody">
        <div className="dataPanelCopy"><p>{t('cyberCopy')}</p></div>
        <div className="dataFlow" aria-label="Cybersecurity process">
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
          <div className="dataFlowCaption">◉ {t('cyberCaption')}</div>
        </div>
      </div>
    </section>
  );
}
