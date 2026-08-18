'use client';

export default function AvailabilityDataPanel() {
  return (
    <div className="availabilityV2Wrap">
      <a className="availabilityV2Banner" href="#contact">
        <span className="availabilityV2Search" aria-hidden="true">
          <svg viewBox="0 0 32 32"><circle cx="13" cy="13" r="8"/><path d="m19 19 8 8"/></svg>
        </span>
        <strong>Disponible pour une alternance en cybersécurité</strong>
        <span className="availabilityV2Arrow" aria-hidden="true">›</span>
      </a>

      <div className="availabilityV2Dashboard" aria-label="Aperçu cybersécurité">
        <div className="availabilityV2Card">
          <div className="availabilityV2PlotSlot">
            <div className="availabilityV2BarArea">
              <div className="availabilityV2Bars"><i/><i/><i/><i/></div>
            </div>
          </div>
          <div className="availabilityV2Months"><small>Réseau</small><small>SIEM</small><small>Linux</small><small>AD</small></div>
        </div>

        <div className="availabilityV2Card">
          <div className="availabilityV2PlotSlot">
            <svg className="availabilityV2Trend" viewBox="0 0 180 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <line x1="12" y1="100" x2="168" y2="100"/>
              <line x1="12" y1="68" x2="168" y2="68"/>
              <line x1="12" y1="36" x2="168" y2="36"/>
              <polyline points="20,88 52,72 84,59 116,42 150,24"/>
              <circle cx="20" cy="88" r="4"/><circle cx="52" cy="72" r="4"/><circle cx="84" cy="59" r="4"/><circle cx="116" cy="42" r="4"/><circle cx="150" cy="24" r="4"/>
            </svg>
          </div>
          <div className="availabilityV2Weeks"><small>Logs</small><small>Tri</small><small>Analyse</small><small>Réponse</small><small>Suivi</small></div>
        </div>

        <div className="availabilityV2Card availabilityV2DonutCard">
          <div className="availabilityV2PlotSlot">
            <div className="availabilityV2DonutRow">
              <div className="availabilityV2Donut" aria-hidden="true" />
              <div className="availabilityV2Legend">
                <span><i className="availabilityV2Green"/>Réseau</span>
                <span><i className="availabilityV2Blue"/>SIEM</span>
                <span><i className="availabilityV2Dark"/>Systèmes</span>
              </div>
            </div>
          </div>
          <div className="availabilityV2BottomSpacer" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
