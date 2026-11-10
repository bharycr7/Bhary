'use client';
import {useEffect,useRef,useState} from 'react';
import {motionProjects} from '../../../content/motion-projects';
const captions:Record<string,string[]>={
'aexvion':['Turn source material into evidence.','Connect requirements to a plan.','Keep the decision with a human.','Return a package with receipts.'],
'data-state-intelligence':['Every source has a story.','Follow the dependency chain.','Bring quality signals together.','Understand readiness in context.'],
'test-data-platform':['Start with the structure.','Choose deliberate generation rules.','Assemble a useful test dataset.','Put the output through review.'],
'usage-analytics':['Begin with a product question.','Find the right path through the data.','Prepare a useful, bounded export.','Turn the result into a decision.']};
export default function ProjectMotionScene({slug,compact=false,paused=false}:{slug:string;compact?:boolean;paused?:boolean}){
 const p=motionProjects.find(p=>p.slug===slug)!;const[step,setStep]=useState(0),[playing,setPlaying]=useState(true),[visible,setVisible]=useState(false),[reduced,setReduced]=useState(true);const host=useRef<HTMLDivElement>(null);
 useEffect(()=>{const m=matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setReduced(m.matches);sync();m.addEventListener('change',sync);const o=new IntersectionObserver(([e])=>setVisible(e.isIntersecting));if(host.current)o.observe(host.current);return()=>{o.disconnect();m.removeEventListener('change',sync)}},[]);
 const running=playing&&visible&&!reduced&&!paused;
 useEffect(()=>{if(!running)return;const t=setInterval(()=>{if(!document.hidden)setStep(s=>(s+1)%4)},2400);return()=>clearInterval(t)},[running]);
 return <div ref={host} className={'motion-story-scene '+(compact?'scene-compact ':'')+(running?'story-running':'story-still')} data-step={step} data-project={slug}>
 <div className="motion-story-meta"><span>{compact?'WORKFLOW IN MOTION':'HOW IT WORKS / ANIMATED WORKFLOW'}</span><span>0{step+1} / 04</span></div>
 <svg viewBox="0 0 640 320" role="img" aria-label={p.title+': '+p.stages[step]}>
 <g className="scene-grid" stroke="currentColor" opacity=".08">{Array.from({length:13},(_,i)=><path key={i} d={'M'+i*54+' 0V320 M0 '+i*32+'H640'}/>)}</g>
 <path className="signal-track" d="M70 160H570"/>
 {[0,1,2,3].map(i=><g key={i} className={'signal-node '+(step>=i?'node-lit':'')} style={{'--node':i} as React.CSSProperties} transform={'translate('+(80+i*160)+' 160)'}><circle className="node-orbit" r="43"/><rect className="node-surface" x="-31" y="-31" width="62" height="62" rx="17"/><text textAnchor="middle" y="7">{['01','02','03','04'][i]}</text></g>)}
 <circle className="signal-packet" r="5" cy="204" cx={80+step*160}/>
 {slug==='aexvion'&&<g className="evidence-sheets">{[0,1,2].map(i=><g key={i} style={{'--node':i} as React.CSSProperties} transform={'translate('+(110+i*160)+' 65)'}><rect width="62" height="40" rx="6"/><path d="M12 12H48 M12 21H38 M12 30H28"/></g>)}</g>}
 {slug==='data-state-intelligence'&&<g className="lineage-branches">{[0,1,2].map(i=><path key={i} d={'M40 '+(35+i*35)+' Q160 30 240 160 M400 160 Q490 240 600 '+(235+i*25)}/>)}</g>}
 {slug==='test-data-platform'&&<g className="dataset-tiles">{Array.from({length:12},(_,i)=><rect key={i} x={160+i%6*53} y={225+Math.floor(i/6)*35} width="42" height="24" rx="5" style={{'--node':i} as React.CSSProperties}/>)}</g>}
 {slug==='usage-analytics'&&<g className="query-bars">{[32,58,41,82,65,96,76].map((h,i)=><rect key={i} x={165+i*46} y={128-h} width="26" height={h} rx="5" style={{'--node':i} as React.CSSProperties}/>)}</g>}
 </svg><div className="motion-story-stages">{p.stages.map((s,i)=>compact?<span key={s} data-active={step===i}>{s}</span>:<button key={s} aria-pressed={step===i} onClick={()=>{setStep(i);setPlaying(false)}}>{s}</button>)}</div>
 {!compact&&<div className="motion-story-caption"><p>{captions[slug][step]}</p><button onClick={()=>setPlaying(x=>!x)} disabled={reduced} aria-pressed={!playing||reduced}>{reduced?'Motion off':playing?'Pause animation':'Play animation'}</button></div>}
 </div>
}
