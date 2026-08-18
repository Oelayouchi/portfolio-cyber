'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from './language-context';

const awardData={fr:[{title:'1er prix au Hackathon Electrodays 3.0',issuer:'ENSA Khouribga',date:'Avril 2019',folder:'/awards/hackathon-electrodays-3'},{title:'1er prix à la Compétition Robotique Cromek 3.0',issuer:'ENSA Khouribga',date:'Avril 2019',folder:'/awards/cromek-3-first'},{title:'3e prix à la Compétition Robotique Cromek 3.0',issuer:'ENSA Khouribga',date:'Avril 2019',folder:'/awards/cromek-3-third'},{title:'2e prix à la Compétition Africaine de Robotique',issuer:'ENSET Rabat',date:'Mars 2019',folder:'/awards/african-robotics-second'}],en:[{title:'1st Prize — Electrodays 3.0 Hackathon',issuer:'ENSA Khouribga',date:'April 2019',folder:'/awards/hackathon-electrodays-3'},{title:'1st Prize — Cromek 3.0 Robotics Competition',issuer:'ENSA Khouribga',date:'April 2019',folder:'/awards/cromek-3-first'},{title:'3rd Prize — Cromek 3.0 Robotics Competition',issuer:'ENSA Khouribga',date:'April 2019',folder:'/awards/cromek-3-third'},{title:'2nd Prize — African Robotics Competition',issuer:'ENSET Rabat',date:'March 2019',folder:'/awards/african-robotics-second'}],ar:[{title:'المرتبة الأولى — هاكاثون Electrodays 3.0',issuer:'ENSA خريبكة',date:'أبريل 2019',folder:'/awards/hackathon-electrodays-3'},{title:'المرتبة الأولى — مسابقة الروبوتيك Cromek 3.0',issuer:'ENSA خريبكة',date:'أبريل 2019',folder:'/awards/cromek-3-first'},{title:'المرتبة الثالثة — مسابقة الروبوتيك Cromek 3.0',issuer:'ENSA خريبكة',date:'أبريل 2019',folder:'/awards/cromek-3-third'},{title:'المرتبة الثانية — المسابقة الإفريقية للروبوتيك',issuer:'ENSET الرباط',date:'مارس 2019',folder:'/awards/african-robotics-second'}],es:[{title:'1.er premio — Hackathon Electrodays 3.0',issuer:'ENSA Khouribga',date:'Abril de 2019',folder:'/awards/hackathon-electrodays-3'},{title:'1.er premio — Competición de Robótica Cromek 3.0',issuer:'ENSA Khouribga',date:'Abril de 2019',folder:'/awards/cromek-3-first'},{title:'3.er premio — Competición de Robótica Cromek 3.0',issuer:'ENSA Khouribga',date:'Abril de 2019',folder:'/awards/cromek-3-third'},{title:'2.º premio — Competición Africana de Robótica',issuer:'ENSET Rabat',date:'Marzo de 2019',folder:'/awards/african-robotics-second'}],de:[{title:'1. Preis — Electrodays 3.0 Hackathon',issuer:'ENSA Khouribga',date:'April 2019',folder:'/awards/hackathon-electrodays-3'},{title:'1. Preis — Robotikwettbewerb Cromek 3.0',issuer:'ENSA Khouribga',date:'April 2019',folder:'/awards/cromek-3-first'},{title:'3. Preis — Robotikwettbewerb Cromek 3.0',issuer:'ENSA Khouribga',date:'April 2019',folder:'/awards/cromek-3-third'},{title:'2. Preis — Afrikanischer Robotikwettbewerb',issuer:'ENSET Rabat',date:'März 2019',folder:'/awards/african-robotics-second'}]};

function SmartAwardImage({folder,title,onAvailabilityChange}){
  const candidates=useMemo(()=>[
    `${folder}/award.png`,`${folder}/award.jpg`,`${folder}/award.jpeg`,`${folder}/award.webp`,
    `${folder}/image.png`,`${folder}/image.jpg`,`${folder}/image.jpeg`,`${folder}/image.webp`,
    `${folder}/image-01.png`,`${folder}/image-01.jpg`,`${folder}/image-01.jpeg`,`${folder}/image-01.webp`
  ],[folder]);
  const[src,setSrc]=useState(null);

  useEffect(()=>{
    let cancelled=false;
    setSrc(null);
    onAvailabilityChange(false);
    const tryCandidate=(index)=>{
      if(cancelled)return;
      if(index>=candidates.length){onAvailabilityChange(false);return;}
      const probe=new Image();
      probe.onload=()=>{if(!cancelled){setSrc(candidates[index]);onAvailabilityChange(true);}};
      probe.onerror=()=>tryCandidate(index+1);
      probe.src=`${candidates[index]}?asset-check=1`;
    };
    tryCandidate(0);
    return()=>{cancelled=true;};
  },[candidates,onAvailabilityChange]);

  if(!src)return null;
  return <img src={src} alt={title} loading="lazy" onError={()=>{setSrc(null);onAvailabilityChange(false);}}/>;
}

function AwardCard({award}){
  const[hasImage,setHasImage]=useState(false);
  return <article className={`awardCard${hasImage?' hasAwardImage':' noAwardImage'}`}>
    <div className={`awardImagePlaceholder${hasImage?'':' isHidden'}`}>
      <SmartAwardImage folder={award.folder} title={award.title} onAvailabilityChange={setHasImage}/>
    </div>
    <div className="awardContent"><h3>{award.title}</h3><p>{award.issuer}</p><span>{award.date}</span></div>
  </article>;
}

export default function AwardsSection(){
  const{language,t}=useLanguage();
  const awards=awardData[language]||awardData.fr;
  return <section id="awards" className="section shell awardsSection"><h2>{t('awards').toUpperCase()}</h2><div className="awardsGrid">{awards.map(award=><AwardCard award={award} key={award.folder}/>)}</div></section>;
}
