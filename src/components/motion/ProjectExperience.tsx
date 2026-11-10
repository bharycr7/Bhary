'use client';
import ProjectMotionScene from './ProjectMotionScene';
import {useState} from 'react';
import dynamic from 'next/dynamic';
import {caseStudies} from '../../../content/case-studies';
import InteractiveProductDemo from './InteractiveProductDemo';
const Film=dynamic(()=>import('./ProjectFilmPlayer'),{ssr:false,loading:()=> <p>Loading the walkthrough…</p>});
const titles=['Try the product','Story & decisions','Watch the film'];
export default function ProjectExperience({slug}:{slug:string}){
 const[tab,setTab]=useState(0);const c=caseStudies.find(c=>c.slug===slug)!;
 return <div className="project-experience"><div className="experience-intro"><span>{c.category}</span><h2>{c.name}</h2><p>{c.headline}</p></div><div className="experience-tabs" role="tablist" aria-label={c.name+' experience'}>{titles.map((title,i)=><button key={title} id={'experience-tab-'+i} role="tab" aria-selected={tab===i} aria-controls={'experience-panel-'+i} tabIndex={tab===i?0:-1} onClick={()=>setTab(i)} onKeyDown={e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?2:(tab+(e.key==='ArrowRight'?1:2))%3;setTab(next);document.getElementById('experience-tab-'+next)?.focus()}}}>{title}</button>)}</div><div role="tabpanel" id={'experience-panel-'+tab} aria-labelledby={'experience-tab-'+tab} className="experience-panel">
 {tab===0?<><ProjectMotionScene slug={slug}/><InteractiveProductDemo slug={slug}/></>:tab===2?<Film slug={slug}/>:<div className="experience-story"><aside><span>MY ROLE</span><p>{c.role}</p><img src={'/projects/'+slug+'.svg'} alt={c.name+' workflow illustration'}/><small>Illustration of the documented workflow</small></aside><div>{[['01 / The starting point',c.problem],['02 / The product decision',c.decision],['03 / The tradeoff',c.tradeoff],['04 / What changed',c.outcome]].map(([title,copy])=><section key={title}><h3>{title}</h3><p>{copy}</p></section>)}<details><summary>Sources and scope</summary><p>{c.limit}</p><p>{c.source}</p></details></div></div>}
 </div></div>
}
