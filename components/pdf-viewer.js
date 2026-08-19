'use client';

import { useEffect, useRef, useState } from 'react';

const PDFJS_URL='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
const PDFJS_WORKER='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

let loaderPromise;
function loadPdfJs(){
  if(typeof window==='undefined')return Promise.reject(new Error('Browser only'));
  if(window.pdfjsLib)return Promise.resolve(window.pdfjsLib);
  if(loaderPromise)return loaderPromise;
  loaderPromise=new Promise((resolve,reject)=>{
    const existing=document.querySelector(`script[src="${PDFJS_URL}"]`);
    const done=()=>{
      if(!window.pdfjsLib){reject(new Error('PDF.js unavailable'));return;}
      window.pdfjsLib.GlobalWorkerOptions.workerSrc=PDFJS_WORKER;
      resolve(window.pdfjsLib);
    };
    if(existing){existing.addEventListener('load',done,{once:true});existing.addEventListener('error',()=>reject(new Error('PDF.js load failed')),{once:true});return;}
    const script=document.createElement('script');
    script.src=PDFJS_URL;
    script.async=true;
    script.onload=done;
    script.onerror=()=>reject(new Error('PDF.js load failed'));
    document.head.appendChild(script);
  });
  return loaderPromise;
}

export default function PdfViewer({src,title}){
  const hostRef=useRef(null);
  const renderId=useRef(0);
  const [status,setStatus]=useState('loading');

  useEffect(()=>{
    let cancelled=false;
    let resizeObserver;
    let resizeTimer;
    let pdfDoc;

    const render=async()=>{
      const host=hostRef.current;
      if(!host)return;
      const current=++renderId.current;
      setStatus('loading');
      try{
        const pdfjs=await loadPdfJs();
        if(cancelled)return;
        if(!pdfDoc)pdfDoc=await pdfjs.getDocument(src).promise;
        if(cancelled||current!==renderId.current)return;
        const width=Math.max(240,host.clientWidth-12);
        const fragment=document.createDocumentFragment();
        for(let pageNumber=1;pageNumber<=pdfDoc.numPages;pageNumber+=1){
          const page=await pdfDoc.getPage(pageNumber);
          if(cancelled||current!==renderId.current)return;
          const base=page.getViewport({scale:1});
          const cssScale=width/base.width;
          const dpr=Math.min(window.devicePixelRatio||1,2);
          const viewport=page.getViewport({scale:cssScale*dpr});
          const canvas=document.createElement('canvas');
          canvas.className='pdfPageCanvas';
          canvas.width=Math.floor(viewport.width);
          canvas.height=Math.floor(viewport.height);
          canvas.style.width=`${Math.floor(viewport.width/dpr)}px`;
          canvas.style.height=`${Math.floor(viewport.height/dpr)}px`;
          canvas.setAttribute('aria-label',`${title} — page ${pageNumber}`);
          const ctx=canvas.getContext('2d',{alpha:false});
          await page.render({canvasContext:ctx,viewport}).promise;
          fragment.appendChild(canvas);
        }
        if(cancelled||current!==renderId.current)return;
        host.replaceChildren(fragment);
        setStatus('ready');
      }catch(error){
        if(cancelled)return;
        host.replaceChildren();
        setStatus('error');
      }
    };

    render();
    if(typeof ResizeObserver!=='undefined'){
      resizeObserver=new ResizeObserver(()=>{
        clearTimeout(resizeTimer);
        resizeTimer=setTimeout(render,180);
      });
      if(hostRef.current)resizeObserver.observe(hostRef.current);
    }
    return()=>{
      cancelled=true;
      clearTimeout(resizeTimer);
      resizeObserver?.disconnect();
      renderId.current+=1;
    };
  },[src,title]);

  return <div className="projectReportViewport pdfCanvasViewport">
    {status==='loading'&&<div className="pdfViewerStatus" aria-live="polite">Chargement du PDF…</div>}
    {status==='error'&&<div className="pdfViewerStatus">Impossible d’afficher le PDF.</div>}
    <div className="pdfPages" ref={hostRef}/>
  </div>;
}
