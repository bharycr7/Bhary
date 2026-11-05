'use client';
import {useEffect,useState} from 'react';
import {motion} from 'motion/react';
import ReelGallery from './ReelGallery';
import {CredentialsChapter} from './PersonalChapters';
import {profile} from '../../content/profile';
import './brand-experience.css';

export default function BrandExperience(){
 const[paused,setPaused]=useState(false);const[reduced,setReduced]=useState(true);const still=paused||reduced;
 useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setReduced(media.matches);sync();media.addEventListener('change',sync);return()=>media.removeEventListener('change',sync)},[]);
 return <div className="brand-experience" data-motion={still?'off':'on'}>
  <div className="brand-toolbar"><nav aria-label="Brand sections"><a href="#videos">The creator ↗</a><a href="#honors">The milestones ↗</a></nav><button onClick={()=>setPaused(p=>!p)} disabled={!!reduced} aria-pressed={still}>{reduced?'Motion off':paused?'Resume page motion':'Pause page motion'}</button></div>
  <section className="brand-studio" id="videos">
   <div className="brand-studio-heading"><div><span className="summary-kicker">THE CREATOR / @ASK_BHARATH</span><h2>Curiosity, <em>in motion.</em></h2></div><p>I test the tools, share the process, and make the useful parts easier to understand.</p></div>
   <div className="brand-orbit-grid" aria-hidden="true"><i/><i/><i/></div>
   <ReelGallery autoAdvance={!still} motionPaused={still}/>
  </section>
  <section className="brand-editorial" aria-label="What I create">
   <motion.div className="brand-audience" initial={false} whileInView={still?{}:{y:[24,0],opacity:[.5,1]}} viewport={{once:true}} transition={{duration:.7}}><span className="summary-kicker">A SHARED CURIOSITY</span><strong>50K<span>+</span></strong><p>people follow my writing and content across LinkedIn, Instagram, Facebook, and YouTube.</p><div><a href={profile.linkedin}>Read on LinkedIn ↗</a><a href={profile.instagram}>Watch on Instagram ↗</a></div></motion.div>
   <div className="brand-topics">{[
    ['01','Product, explained.','Agentic workflows, product decisions, and tools I put to the test.'],
    ['02','Careers, unpacked.','Job searching, interview preparation, and finding your next opportunity.'],
    ['03','Startups, explored.','What’s changing, what’s useful, and the ideas worth a closer look.']
   ].map(([n,title,copy],i)=><motion.article key={n} initial={false} whileInView={still?{}:{x:[30,0],opacity:[.4,1]}} viewport={{once:true,amount:.4}} transition={{duration:.6,delay:i*.08}}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div><b aria-hidden="true">↗</b></motion.article>)}</div>
  </section>
  <div className="brand-ribbon" aria-hidden="true"><div>{Array.from({length:4},(_,i)=><span key={i}>Build with curiosity <b>✦</b> Share what you learn <b>✦</b> Keep moving <b>✦</b></span>)}</div></div>
  <CredentialsChapter motionPaused={still}/>
 </div>;
}
