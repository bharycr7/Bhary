'use client';
import {useEffect, useRef, useState} from 'react';
import {usePathname} from 'next/navigation';
import type {createWizardScene} from './wizard-scene';

export default function WizardCompanion() {
  const canvas=useRef<HTMLCanvasElement>(null);
  const stage=useRef<HTMLDivElement>(null);const path=usePathname();
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
  useEffect(()=>{
    const el=stage.current;if(!el)return;let frame=0,x=0,target=0,last=0;
    const paint=(now:number)=>{frame=0;const dt=last?Math.min((now-last)/1000,.05):.016;last=now;x+=(target-x)*(1-Math.exp(-dt*7));el.style.transform=`translate3d(${x}px,${-Math.sin(Math.abs(x)/Math.max(1,innerWidth)*Math.PI)*24}px,0)`;if(Math.abs(target-x)>.3&&!document.hidden)frame=requestAnimationFrame(paint);};
    const update=()=>{if(paused||reduced)return;const range=Math.max(0,innerWidth-el.clientWidth-16);const progress=Math.min(1,Math.max(0,scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)));target=-range*progress;if(!frame&&!document.hidden){last=0;frame=requestAnimationFrame(paint)}};
    const visibility=()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0}else update()};
    if(paused||reduced)el.style.transform='none';else update();
    addEventListener('scroll',update,{passive:true});addEventListener('resize',update);document.addEventListener('visibilitychange',visibility);
    return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',update);removeEventListener('resize',update);document.removeEventListener('visibilitychange',visibility)};
  },[paused,reduced,path,ready]);
  function toggle(){setPaused(n=>{try{localStorage.setItem('bharath-magic-paused',String(!n));}catch{}return !n;});}
  if(failed)return null;
  return <aside className={'wizard-companion'+(ready?' wizard-ready':'')} aria-label="Harry Potter miniature scroll companion">
    <div ref={stage} className="wizard-stage" aria-hidden="true"><canvas ref={canvas}/></div>
    <button className="wizard-toggle" onClick={toggle} disabled={reduced} aria-pressed={paused||reduced} title="A miniature Harry Potter casts wand magic as you scroll">
      <span aria-hidden="true">✦</span> {reduced?'Magic off':paused?'Resume magic':'Pause magic'}
    </button>
  </aside>;
}
