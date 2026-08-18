import { SectionLabel } from './ui';

export default function AboutCyberSection() {
  return (
    <section id="about" className="section shell split">
      <div>
        <SectionLabel>À PROPOS</SectionLabel>
        <h2>Un parcours technique construit autour des systèmes critiques.</h2>
      </div>
      <div className="copy">
        <p>
          Diplômé en génie électrique et systèmes embarqués, puis titulaire d’un Master 2 en Ingénierie des Systèmes Temps Réel, j’ai évolué de la conception embarquée vers la sûreté de fonctionnement automobile et ferroviaire.
        </p>
        <p>
          Mes expériences m’ont amené à travailler sur des systèmes connectés, des protocoles de communication, l’automatisation des tests, la traçabilité d’exigences Safety et l’analyse de défaillances. Aujourd’hui, je réalise une reconversion vers la cybersécurité afin de mettre cette rigueur d’ingénieur au service de la protection des systèmes d’information, des réseaux et des infrastructures.
        </p>
      </div>
    </section>
  );
}
