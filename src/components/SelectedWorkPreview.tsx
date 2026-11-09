'use client';
import {useState} from 'react';
import ProjectExperienceDialog from './motion/ProjectExperienceDialog';
export default function SelectedWorkPreview(){const[open,setOpen]=useState<string|null>(null);return <section className="selected-work-preview" aria-labelledby="selected-work-title"><div><span className="summary-kicker">SELECTED WORK</span><h2 id="selected-work-title">The product. The thinking behind it.</h2><a href="/work">Explore the collection →</a></div><div className="selected-work-grid">{[
{slug:'aexvion',title:'Aexvion',text:'Connecting evidence, human approval, and agent execution.'},
{slug:'data-state-intelligence',title:'Data State Intelligence',text:'Moving from job status to end-to-end data readiness.'}
].map(p=><button key={p.slug} onClick={()=>setOpen(p.slug)} aria-label={'Open '+p.title+' demo and story'}><img src={'/projects/'+p.slug+'.svg'} alt={p.title+' workflow illustration'} width="1100" height="740" loading="lazy"/><div><h3>{p.title}</h3><p>{p.text}</p><span>Open the experience ↗</span></div></button>)}</div><ProjectExperienceDialog slug={open} onClose={()=>setOpen(null)}/></section>}
