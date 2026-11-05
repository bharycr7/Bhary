'use client';
import {useEffect, useRef, useState} from 'react';
import {reels} from '../../content/reels';
import './reel-gallery.css';

export default function ReelCorridor() {
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState<number|null>(null);
  const [reduced, setReduced] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const rail = useRef<HTMLDivElement>(null);
  const scene = useRef<HTMLElement>(null);
  const travel = useRef(4);
  const resumeAt = useRef(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement|null>(null);

  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(media.matches);
    sync(); media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  function positionCards() {
    rail.current?.querySelectorAll<HTMLElement>('.corridor-card').forEach((card, i) => {
      const position = ((i - travel.current + 4.5) % 9 + 9) % 9 - 4.5;
      card.style.setProperty('--position', String(position));
      card.style.setProperty('--distance', String(Math.abs(position)));
      card.style.setProperty('--edge-opacity', String(Math.min(1, (4.5 - Math.abs(position)) * 5)));
    });
  }

  // Stable card nodes preserve keyboard focus and video identity as they move.
  useEffect(() => {
    let frame = 0, previous = 0, visible = true, direction = 1, pan = -1;
    const media = matchMedia('(max-width: 700px)');
    const active = !paused && !reduced && !interacting && open === null;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting; schedule();
    });
    if (scene.current) observer.observe(scene.current);
    const tick = (now:number) => {
      frame = 0;
      const dt = previous ? Math.min((now - previous) / 1000, .05) : 0;
      previous = now;
      if (now > resumeAt.current) {
        if (media.matches && rail.current) {
          const el = rail.current, max = el.scrollWidth - el.clientWidth;
          if (el.scrollLeft >= max - 1) direction = -1;
          if (el.scrollLeft <= 1) direction = 1;
          if (pan < 0 || Math.abs(el.scrollLeft - pan) > 2) pan = el.scrollLeft;
          pan = Math.max(0, Math.min(max, pan + dt * 26 * direction));
          el.scrollLeft = pan;
        } else {
          travel.current = (travel.current + dt * .19) % 9;
          positionCards();
        }
      }
      if (active && visible && !document.hidden) frame = requestAnimationFrame(tick);
    };
    function schedule() {
      cancelAnimationFrame(frame); frame = 0; previous = 0;
      if (active && visible && !document.hidden) frame = requestAnimationFrame(tick);
    }
    document.addEventListener('visibilitychange', schedule);
    schedule();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); document.removeEventListener('visibilitychange', schedule); };
  }, [paused, reduced, interacting, open]);

  function browse(direction:number) {
    resumeAt.current = performance.now() + 5000;
    const el = rail.current;
    if (el && matchMedia('(max-width: 700px)').matches) {
      const max = el.scrollWidth - el.clientWidth;
      const next = direction > 0 && el.scrollLeft >= max - 2 ? 0 : direction < 0 && el.scrollLeft <= 2 ? max : el.scrollLeft + direction * 184;
      el.scrollTo({left:next, behavior:reduced ? 'instant' : 'smooth'});
    } else { travel.current += direction; positionCards(); }
  }

  useEffect(() => {
    if (open !== null) dialog.current?.showModal();
    else if (dialog.current?.open) { dialog.current.close(); opener.current?.focus(); }
  }, [open]);
  const close = () => setOpen(null);
  const moving = !paused && !reduced && !interacting && open === null;
  return <section ref={scene} className={'reel-sky-scene reel-auto-scene' + (moving ? ' scene-moving' : '')} aria-label="Original reels by Bharath">
    <div className="scene-clouds" aria-hidden="true"/>
    <div className="scene-heading"><span>BHARATH RAJU KB / IDEAS IN MOTION</span><span>Original reels · @ask_bharath</span></div>
    <div className="reel-corridor" ref={rail} role="region" aria-label="Browse original reels"
      onPointerEnter={e => {if (e.pointerType === 'mouse') setInteracting(true);}}
      onPointerLeave={() => setInteracting(false)}
      onTouchStart={() => {resumeAt.current = performance.now() + 8000;}}
      onTouchMove={() => {resumeAt.current = performance.now() + 8000;}}
      onWheel={() => {resumeAt.current = performance.now() + 5000;}}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={e => {if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false);}}>
      {reels.slice(0,9).map((r, i) => <button key={r.id} className="corridor-card" style={{'--position':i-4, '--distance':Math.abs(i-4)} as React.CSSProperties}
        aria-label={'Watch ' + r.title} onClick={e => {opener.current = e.currentTarget; setOpen(i);}}>
        <img src={'/reels/' + r.id + '.jpg'} alt="" loading="eager"/>
        <span className="corridor-card-title">{r.shortTitle ?? r.title}</span><span className="corridor-play" aria-hidden="true">▶</span>
      </button>)}
    </div>
    <div className="scene-controls">
      <button aria-label="Previous reels" onClick={() => browse(-1)}>←</button>
      <a href="/brand#videos">Watch the stories ↗</a>
      <button aria-label="Next reels" onClick={() => browse(1)}>→</button>
      <button className="scene-motion" disabled={reduced} aria-pressed={paused || reduced} onClick={() => setPaused(n => !n)}>{reduced ? 'Motion off' : paused ? 'Resume reels' : 'Pause reels'}</button>
    </div>
    <dialog ref={dialog} className="reel-dialog corridor-dialog" aria-label="Original reel" onCancel={close} onClose={close} onClick={e => {if (e.target === dialog.current) close();}}>
      {open !== null && <div className="reel-dialog-inner"><button className="reel-close" aria-label="Close reel" onClick={close}>×</button>
        <video src={'/reels/'+reels[open].id+'.mp4'} poster={'/reels/'+reels[open].id+'.jpg'} controls playsInline autoPlay preload="metadata"/>
        <div className="reel-dialog-copy"><h2>{reels[open].title}</h2><p>{reels[open].summary}</p><a href="/brand#videos">All original reels ↗</a></div>
      </div>}
    </dialog>
  </section>;
}
