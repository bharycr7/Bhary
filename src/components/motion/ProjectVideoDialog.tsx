'use client';
import {useEffect,useRef} from 'react';
import dynamic from 'next/dynamic';
import {motionProjects} from '../../../content/motion-projects';
const Film=dynamic(()=>import('./ProjectFilmPlayer'),{ssr:false,loading:()=> <p>Loading product video…</p>});
export default function ProjectVideoDialog({slug,onClose}:{slug:string|null;onClose:()=>void}){const dialog=useRef<HTMLDialogElement>(null);const p=motionProjects.find(p=>p.slug===slug);useEffect(()=>{if(slug)dialog.current?.showModal();else dialog.current?.close()},[slug]);return <dialog ref={dialog} className="product-video-dialog" aria-label={p?`${p.title} product video`:'Product video'} onCancel={onClose} onClose={onClose} onClick={e=>{if(e.target===dialog.current)onClose()}}>{p&&<><div className="video-dialog-heading"><h2>{p.title}</h2><button autoFocus onClick={onClose} aria-label="Close product video">Close ✕</button></div><Film key={p.slug} slug={p.slug} autoPlay/><div className="video-dialog-footer"><span>Product concept walkthrough</span><a href={'/work/'+p.slug}>Read the project story ↗</a></div></>}</dialog>}
