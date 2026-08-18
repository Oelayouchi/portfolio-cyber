'use client';

import { useLanguage } from './language-context';

const awardData = {
  fr:[
    {title:'1er prix au Hackathon Electrodays 3.0',issuer:'ENSA Khouribga',date:'Avril 2019',imagePath:'/awards/hackathon-electrodays-3/award.jpg'},
    {title:'1er prix à la Compétition Robotique Cromek 3.0',issuer:'ENSA Khouribga',date:'Avril 2019',imagePath:'/awards/cromek-3-first/award.jpg'},
    {title:'3e prix à la Compétition Robotique Cromek 3.0',issuer:'ENSA Khouribga',date:'Avril 2019',imagePath:'/awards/cromek-3-third/award.jpg'},
    {title:'2e prix à la Compétition Africaine de Robotique',issuer:'ENSET Rabat',date:'Mars 2019',imagePath:'/awards/african-robotics-second/award.jpg'}
  ],
  en:[
    {title:'1st Prize — Electrodays 3.0 Hackathon',issuer:'ENSA Khouribga',date:'April 2019',imagePath:'/awards/hackathon-electrodays-3/award.jpg'},
    {title:'1st Prize — Cromek 3.0 Robotics Competition',issuer:'ENSA Khouribga',date:'April 2019',imagePath:'/awards/cromek-3-first/award.jpg'},
    {title:'3rd Prize — Cromek 3.0 Robotics Competition',issuer:'ENSA Khouribga',date:'April 2019',imagePath:'/awards/cromek-3-third/award.jpg'},
    {title:'2nd Prize — African Robotics Competition',issuer:'ENSET Rabat',date:'March 2019',imagePath:'/awards/african-robotics-second/award.jpg'}
  ],
  ar:[
    {title:'المرتبة الأولى — هاكاثون Electrodays 3.0',issuer:'ENSA خريبكة',date:'أبريل 2019',imagePath:'/awards/hackathon-electrodays-3/award.jpg'},
    {title:'المرتبة الأولى — مسابقة الروبوتيك Cromek 3.0',issuer:'ENSA خريبكة',date:'أبريل 2019',imagePath:'/awards/cromek-3-first/award.jpg'},
    {title:'المرتبة الثالثة — مسابقة الروبوتيك Cromek 3.0',issuer:'ENSA خريبكة',date:'أبريل 2019',imagePath:'/awards/cromek-3-third/award.jpg'},
    {title:'المرتبة الثانية — المسابقة الإفريقية للروبوتيك',issuer:'ENSET الرباط',date:'مارس 2019',imagePath:'/awards/african-robotics-second/award.jpg'}
  ],
  es:[
    {title:'1.er premio — Hackathon Electrodays 3.0',issuer:'ENSA Khouribga',date:'Abril de 2019',imagePath:'/awards/hackathon-electrodays-3/award.jpg'},
    {title:'1.er premio — Competición de Robótica Cromek 3.0',issuer:'ENSA Khouribga',date:'Abril de 2019',imagePath:'/awards/cromek-3-first/award.jpg'},
    {title:'3.er premio — Competición de Robótica Cromek 3.0',issuer:'ENSA Khouribga',date:'Abril de 2019',imagePath:'/awards/cromek-3-third/award.jpg'},
    {title:'2.º premio — Competición Africana de Robótica',issuer:'ENSET Rabat',date:'Marzo de 2019',imagePath:'/awards/african-robotics-second/award.jpg'}
  ],
  de:[
    {title:'1. Preis — Electrodays 3.0 Hackathon',issuer:'ENSA Khouribga',date:'April 2019',imagePath:'/awards/hackathon-electrodays-3/award.jpg'},
    {title:'1. Preis — Robotikwettbewerb Cromek 3.0',issuer:'ENSA Khouribga',date:'April 2019',imagePath:'/awards/cromek-3-first/award.jpg'},
    {title:'3. Preis — Robotikwettbewerb Cromek 3.0',issuer:'ENSA Khouribga',date:'April 2019',imagePath:'/awards/cromek-3-third/award.jpg'},
    {title:'2. Preis — Afrikanischer Robotikwettbewerb',issuer:'ENSET Rabat',date:'März 2019',imagePath:'/awards/african-robotics-second/award.jpg'}
  ]
};

export default function AwardsSection(){
  const {language,t}=useLanguage();
  const awards=awardData[language]||awardData.fr;
  return <section id="awards" className="section shell awardsSection"><h2>{t('awards').toUpperCase()}</h2><div className="awardsGrid">{awards.map(award=><article className="awardCard" key={award.title}><div className="awardImagePlaceholder"><img src={award.imagePath} alt={award.title} loading="lazy" /></div><div className="awardContent"><h3>{award.title}</h3><p>{award.issuer}</p><span>{award.date}</span></div></article>)}</div></section>;
}
