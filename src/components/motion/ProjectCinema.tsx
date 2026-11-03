'use client';
import dynamic from 'next/dynamic';
const Film=dynamic(()=>import('./ProjectFilmPlayer'),{ssr:false,loading:()=> <div className="film-loading">Preparing the product film…</div>});
export default function ProjectCinema({slug}:{slug:string}){return <section className="project-cinema"><div><span className="chapter-index">THE IDEA / IN MOTION</span><h2>See the workflow.</h2><p>Play, pause, or scrub through the product concept.</p></div><Film slug={slug}/>{slug==='aexvion'&&<a className="film-download" href="/reels/aexvion-product-film.mp4" download>Download the product film ↗</a>}</section>}
