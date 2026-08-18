const awards = [
  {
    title: '1er prix au Hackathon Electrodays 3.0',
    issuer: 'ENSA Khouribga',
    date: 'Avril 2019',
    imagePath: '/awards/hackathon-electrodays-3/award.jpg',
  },
  {
    title: '1er prix à la Compétition Robotique Cromek 3.0',
    issuer: 'ENSA Khouribga',
    date: 'Avril 2019',
    imagePath: '/awards/cromek-3-first/award.jpg',
  },
  {
    title: '3e prix à la Compétition Robotique Cromek 3.0',
    issuer: 'ENSA Khouribga',
    date: 'Avril 2019',
    imagePath: '/awards/cromek-3-third/award.jpg',
  },
  {
    title: '2e prix à la Compétition Africaine de Robotique',
    issuer: 'ENSET Rabat',
    date: 'Mars 2019',
    imagePath: '/awards/african-robotics-second/award.jpg',
  },
];

export default function AwardsSection() {
  return (
    <section id="awards" className="section shell awardsSection">
      <h2>PRIX & DISTINCTIONS</h2>
      <div className="awardsGrid">
        {awards.map((award, index) => (
          <article className="awardCard" key={award.title}>
            <div className="awardImagePlaceholder" aria-label={`Emplacement image ${index + 1}`}>
              <span>{index + 1}</span>
              <small>Image à ajouter</small>
            </div>
            <div className="awardContent">
              <h3>{award.title}</h3>
              <p>{award.issuer}</p>
              <span>{award.date}</span>
              <code>{award.imagePath}</code>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
