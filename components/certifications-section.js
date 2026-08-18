// ============================================================================
// Certifications
// ----------------------------------------------------------------------------
// Certifications cohérentes avec le parcours ingénieur / safety / cyber.
// ============================================================================

const certifications = [
  {
    title: 'AUTOSAR Architecture — Learn from Scratch with Demo',
    meta: '4,5 h · Udemy · Prakash Kumar',
    image: '/certifications/autosar.png',
    skills: 'Classic AUTOSAR · Architecture · Démonstration logicielle',
  },
  {
    title: 'MATLAB / SIMULINK — Zero to Hero',
    meta: '8 h · Udemy',
    image: '/certifications/matlab-simulink.png',
    skills: 'MATLAB · Simulink · Modélisation · Projets pratiques',
  },
  {
    title: 'ISO 26262 — Functional Safety Mastery',
    meta: '4 h · Udemy · Paul Danci',
    image: '/certifications/iso-26262.png',
    skills: 'ISO 26262 · Functional Safety · HARA · ASIL · FMEDA',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section shell">
      <h2>CERTIFICATIONS</h2>
      <div className="grid certs">
        {certifications.map((certification) => (
          <article className="cert" key={certification.title}>
            <img src={certification.image} alt={`Certificat ${certification.title}`} loading="lazy" />
            <div>
              <h3>{certification.title}</h3>
              <p className="meta">{certification.meta}</p>
              <p>{certification.skills}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
