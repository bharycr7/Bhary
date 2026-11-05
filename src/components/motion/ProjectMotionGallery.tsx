'use client';
import {useEffect,useRef,useState} from 'react';
import {motionProjects} from '../../../content/motion-projects';
import {projectSummaries} from '../../../content/project-summaries';
import {caseStudies} from '../../../content/case-studies';
import ProjectVideoDialog from './ProjectVideoDialog';

/** Vertical chapters follow normal page scrolling; the active chapter is explicit. */
export default function ProjectMotionGallery(){
 const root=useRef<HTMLDivElement>(null),imageDialog=useRef<HTMLDialogElement>(null);
 const[active,setActive]=useState(0),[video,setVideo]=useState<string|null>(null),[image,setImage]=useState<string|null>(null);
 const[paused,setPaused]=useState(false),[reduced,setReduced]=useState(true);
 useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setReduced(media.matches);sync();media.addEventListener('change',sync);return()=>media.removeEventListener('change',sync)},[]);
 useEffect(()=>{
  let frame=0;
  const update=()=>{frame=0;const chapters=root.current?.querySelectorAll<HTMLElement>('.product-chapter');if(!chapters)return;let closest=0,distance=Infinity;
   chapters.forEach((chapter,i)=>{const r=chapter.getBoundingClientRect();const d=Math.abs(r.top-innerHeight*.25);if(d<distance){distance=d;closest=i;}
    const progress=Math.max(0,Math.min(1,(innerHeight-r.top)/(innerHeight*.8)));
    chapter.style.setProperty('--chapter-reveal',String(paused||reduced?1:progress));
   });setActive(closest);
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
  update();addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);
  return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule)};
 },[paused,reduced]);
 useEffect(()=>{if(image)imageDialog.current?.showModal();else imageDialog.current?.close()},[image]);
 return <div ref={root} className="product-stories" data-motion={paused||reduced?'off':'on'}>
  <div className="product-chapter-nav"><nav aria-label="Project chapters">{motionProjects.map((p,i)=><a key={p.slug} href={'#story-'+p.slug} aria-current={i===active?'step':undefined}><span>0{i+1}</span>{p.title}</a>)}</nav><button onClick={()=>setPaused(v=>!v)} disabled={reduced} aria-pressed={paused||reduced}>{reduced?'Motion off':paused?'Resume motion':'Pause motion'}</button></div>
  {motionProjects.map((p,i)=>{const summary=projectSummaries[p.slug],story=caseStudies.find(c=>c.slug===p.slug)!;return <article className="product-chapter" key={p.slug} id={'story-'+p.slug}>
   <div className="product-chapter-visual"><div className="product-image-frame"><button onClick={()=>setImage(p.slug)} aria-label={'Enlarge '+p.title+' workflow image'}><img src={'/projects/'+p.slug+'.svg'} alt={p.title+' illustrated workflow: '+p.stages.join(', ')} width="1100" height="740" loading={i===0?'eager':'lazy'}/><span className="product-enlarge">View image ↗</span></button></div><p className="product-visual-caption">Workflow illustration · Based on the project story</p><ol className="product-flow">{p.stages.map((s,n)=><li key={s}><span>0{n+1}</span>{s}</li>)}</ol></div>
   <div className="product-chapter-copy"><span className="product-eyebrow">0{i+1} / {p.category}</span><h3>{p.title}</h3><p className="product-hook">{story.headline}</p><dl><div><dt>The problem</dt><dd>{summary.problem}</dd></div><div><dt>My decision</dt><dd>{summary.decision}</dd></div></dl><p className="product-role"><strong>My role</strong>{story.role}</p><div className="product-story-actions"><a href={'/work/'+p.slug}>Read the full story <span aria-hidden="true">↗</span></a><button onClick={()=>setVideo(p.slug)}>▶ Play walkthrough</button></div></div>
  </article>})}
  <ProjectVideoDialog slug={video} onClose={()=>setVideo(null)}/>
  <dialog ref={imageDialog} className="product-image-dialog" aria-label="Product workflow image" onCancel={()=>setImage(null)} onClose={()=>setImage(null)} onClick={e=>{if(e.target===imageDialog.current)setImage(null)}}>{image&&<><button autoFocus onClick={()=>setImage(null)} aria-label="Close product image">Close ✕</button><img src={'/projects/'+image+'.svg'} alt={motionProjects.find(p=>p.slug===image)?.title+' workflow illustration'}/><p>Illustrative interface based on the documented workflow.</p></>}</dialog>
 </div>;
}
