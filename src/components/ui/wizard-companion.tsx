'use client';
import {useEffect, useRef, useState} from 'react';
import type {createWizardScene} from './wizard-scene';

export default function WizardCompanion() {
  const canvas=useRef<HTMLCanvasElement>(null);
  const engine=useRef<ReturnType<typeof createWizardScene>|null>(null);
  const [paused,setPaused]=useState(false),[reduced,setReduced]=useState(true),[ready,setReady]=useState(false),[failed,setFailed]=useState(false);
  useEffect(()=>{
    const media=matchMedia('(prefers-reduced-motion: reduce)');
    const sync=()=>setReduced(media.matches);sync();media.addEventListener('change',sync);
    try{setPaused(localStorage.getItem('bharath-magic-paused')==='true');}catch{}
    let disposed=false;
    import('./wizard-scene').then(({createWizardScene})=>{
      if(disposed||!canvas.current)return;
      try{engine.current=createWizardScene(canvas.current);engine.current.setMotion(false,media.matches);setReady(true);}catch{setFailed(true);}
    }).catch(()=>{if(!disposed)setFailed(true);});
    return()=>{disposed=true;engine.current?.dispose();engine.current=null;media.removeEventListener('change',sync);};
  },[]);
  useEffect(()=>{engine.current?.setMotion(paused,reduced);},[paused,reduced,ready]);
  function toggle(){setPaused(n=>{try{localStorage.setItem('bharath-magic-paused',String(!n));}catch{}return !n;});}
  if(failed)return null;
  return <aside className={'wizard-companion'+(ready?' wizard-ready':'')} aria-label="Harry Potter miniature scroll companion">
    <div className="wizard-stage" aria-hidden="true"><canvas ref={canvas}/></div>
    <button className="wizard-toggle" onClick={toggle} disabled={reduced} aria-pressed={paused||reduced} title="A miniature Harry Potter casts wand magic as you scroll">
      <span aria-hidden="true">✦</span> {reduced?'Magic off':paused?'Resume magic':'Pause magic'}
    </button>
  </aside>;
}
