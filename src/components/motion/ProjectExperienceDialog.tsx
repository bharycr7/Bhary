'use client';
import {useEffect,useRef} from 'react';
import dynamic from 'next/dynamic';
const Experience=dynamic(()=>import('./ProjectExperience'),{loading:()=> <p>Opening the product experience…</p>});
export default function ProjectExperienceDialog({slug,onClose}:{slug:string|null;onClose:()=>void}){
 const ref=useRef<HTMLDialogElement>(null);const opener=useRef<HTMLElement|null>(null);
 useEffect(()=>{if(slug){opener.current=document.activeElement as HTMLElement;ref.current?.showModal();ref.current?.scrollTo(0,0)}else if(ref.current?.open){ref.current.close();opener.current?.focus()}},[slug]);
 return <dialog ref={ref} className="project-experience-dialog" aria-label="Project demo and story" onCancel={onClose} onClose={onClose} onClick={e=>{if(e.target===ref.current)onClose()}}>{slug&&<><div className="experience-window-bar"><span>PROJECT EXPERIENCE</span><div><a href={'/work/'+slug} target="_blank" rel="noreferrer">Open in new tab ↗</a><button autoFocus onClick={onClose} aria-label="Close project experience">Close ✕</button></div></div><Experience key={slug} slug={slug}/></>}</dialog>
}
