'use client';

import { useLanguage } from './language-context';

export default function AvailabilityDataPanel() {
  const { t } = useLanguage();
  return (
    <div className="availabilityV2Wrap">
      <a className="availabilityV2Banner" href="#contact">
        <span className="availabilityV2Search" aria-hidden="true">
          <svg viewBox="0 0 32 32"><circle cx="13" cy="13" r="8"/><path d="m19 19 8 8"/></svg>
        </span>
        <strong>{t('available')}</strong>
        <span className="availabilityV2Arrow" aria-hidden="true">›</span>
      </a>

      <div className="availabilityV2Dashboard cyberDashboard" aria-label="Cybersecurity overview">
        <div className="availabilityV2Card cyberVisualCard">
          <div className="cyberVisualTitle">NETWORK & DETECTION</div>
          <div className="networkMap" aria-hidden="true">
            <span className="networkNode nodeInternet">WAN</span><span className="networkLine lineOne"/><span className="networkNode nodeFirewall">FW</span><span className="networkLine lineTwo"/><span className="networkNode nodeSoc">SOC</span><span className="networkBranch branchOne"/><span className="networkBranch branchTwo"/><span className="networkNode nodePc">PC</span><span className="networkNode nodeServer">SRV</span>
          </div>
          <div className="cyberVisualFooter"><span>TCP/IP</span><span>Wireshark</span><span>IDS/IPS</span></div>
        </div>

        <div className="availabilityV2Card cyberVisualCard">
          <div className="cyberVisualTitle">SOC / SIEM</div>
          <div className="socConsole" aria-hidden="true">
            <div className="socConsoleTop"><i/><i/><i/><span>security-events.log</span></div>
            <p><b>[INFO]</b> Auth success — 10.0.0.12</p><p><b>[WARN]</b> Multiple failed logins</p><p className="socAlert"><b>[ALERT]</b> Suspicious PowerShell</p><p><b>[MITRE]</b> T1059 · Command Shell</p>
          </div>
          <div className="cyberVisualFooter"><span>Wazuh</span><span>Splunk</span><span>Logs</span></div>
        </div>

        <div className="availabilityV2Card cyberVisualCard">
          <div className="cyberVisualTitle">SYSTEMS & IDENTITIES</div>
          <div className="shieldScene" aria-hidden="true">
            <svg className="shieldIcon" viewBox="0 0 100 116"><path d="M50 5 91 20v31c0 29-17 49-41 59C26 100 9 80 9 51V20L50 5Z"/><path d="m30 57 13 13 28-31"/></svg>
            <span className="shieldTag tagAd">AD</span><span className="shieldTag tagLinux">Linux</span><span className="shieldTag tagWin">Windows</span>
          </div>
          <div className="cyberVisualFooter"><span>IAM</span><span>GPO</span><span>Hardening</span></div>
        </div>
      </div>
    </div>
  );
}
