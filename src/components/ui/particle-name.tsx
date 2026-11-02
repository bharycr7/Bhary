'use client';
import {useEffect,useRef,useState} from 'react';

/** A responsive dot-matrix signature with spring-based pointer displacement. */
export default function ParticleName({paused=false}:{paused?:boolean}){
 const root=useRef<HTMLDivElement>(null),canvas=useRef<HTMLCanvasElement>(null);
 const[reduced,setReduced]=useState<boolean|null>(null);
 useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setReduced(media.matches);sync();media.addEventListener('change',sync);return()=>media.removeEventListener('change',sync)},[]);
 useEffect(()=>{
  const hostNode=root.current,canvasNode=canvas.current;if(!hostNode||!canvasNode||reduced===null)return;const host=hostNode,el=canvasNode;
  const ctx=el.getContext('2d');if(!ctx)return;
  const mask=document.createElement('canvas'),ink=mask.getContext('2d',{willReadFrequently:true});if(!ink)return;
  type Dot={ox:number;oy:number;x:number;y:number;vx:number;vy:number;heat:number};
  let dots:Dot[]=[],width=0,height=0,dpr=1,radius=1.4,raf=0,last=0,visible=false,disposed=false;
  let pointer={x:-1000,y:-1000,active:false},sweepStart=0,introduced=false;
  const stop=()=>{cancelAnimationFrame(raf);raf=0;host.dataset.running='false'};
  function paint(){
   if(!ctx)return;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,width,height);
   for(const p of dots){const h=Math.min(1,p.heat);ctx.fillStyle=h>.02?`rgb(${Math.round(235+20*h)},${Math.round(232-89*h)},${Math.round(219-144*h)})`:'#ebe8db';ctx.beginPath();ctx.arc(p.x,p.y,radius,0,Math.PI*2);ctx.fill()}
  }
  function frame(now:number){
   raf=0;if(disposed||!visible||document.hidden||paused||reduced){stop();return}
   const dt=Math.min(2,Math.max(.1,(now-last)/16.667||1));last=now;
   const progress=Math.max(0,now-sweepStart)/2400,ghost=!pointer.active&&progress>=0&&progress<1;
   const px=pointer.active?pointer.x:width*(.08+.84*progress),py=pointer.active?pointer.y:height*(.5+.1*Math.sin(progress*Math.PI*2));
   const reach=Math.min(115,Math.max(60,width*.095));let unsettled=ghost||pointer.active;
   for(const p of dots){
    const dx=p.x-px,dy=p.y-py,distance=Math.hypot(dx,dy);
    let force=0;if((pointer.active||ghost)&&distance<reach){force=(1-distance/reach)*2.7;p.vx+=(dx/(distance||1))*force*dt;p.vy+=(dy/(distance||1))*force*dt}
    p.vx+=(p.ox-p.x)*.065*dt;p.vy+=(p.oy-p.y)*.065*dt;p.vx*=Math.pow(.79,dt);p.vy*=Math.pow(.79,dt);p.x+=p.vx*dt;p.y+=p.vy*dt;
    p.heat+=(Math.min(1,force*.8+Math.hypot(p.x-p.ox,p.y-p.oy)/36)-p.heat)*.15*dt;
    if(Math.abs(p.vx)+Math.abs(p.vy)>.025||p.heat>.01)unsettled=true;
   }
   paint();if(unsettled){host.dataset.running='true';raf=requestAnimationFrame(frame)}else stop();
  }
  function start(){if(raf||disposed||!visible||document.hidden||paused||reduced)return;last=performance.now();host.dataset.running='true';raf=requestAnimationFrame(frame)}
  function resize(){
   const rect=host!.getBoundingClientRect();const w=Math.round(rect.width),h=Math.round(rect.height);if(w<1||h<1||w===width&&h===height)return;
   width=w;height=h;dpr=Math.min(devicePixelRatio||1,2);el!.width=Math.round(w*dpr);el!.height=Math.round(h*dpr);mask.width=w;mask.height=h;
   const lines=w<620?['Bharath','Raju KB']:['Bharath Raju KB'];ink!.font='800 100px Arial';const widest=Math.max(...lines.map(line=>ink!.measureText(line).width));
   const size=Math.min((w-12)*100/widest,h/(lines.length*1.14));ink!.font=`800 ${size}px Arial`;ink!.textBaseline='middle';ink!.textAlign='center';ink!.fillStyle='#fff';
   lines.forEach((line,i)=>ink!.fillText(line,w/2,h/2+(i-(lines.length-1)/2)*size*1.05));
   const pixels=ink!.getImageData(0,0,w,h).data,step=w<620?4:5;radius=w<620?1.25:1.6;dots=[];
   for(let y=0;y<h;y+=step)for(let x=0;x<w;x+=step)if(pixels[(y*w+x)*4+3]>128)dots.push({ox:x,oy:y,x,y,vx:0,vy:0,heat:0});
   paint();host!.dataset.ready='true';start();
  }
  const move=(event:PointerEvent)=>{if(paused||reduced||event.pointerType==='touch')return;const rect=host.getBoundingClientRect();pointer={x:event.clientX-rect.left,y:event.clientY-rect.top,active:true};start()};
  const leave=()=>{pointer.active=false;start()};
  const visibility=()=>{if(document.hidden)stop();else start()};
  const ro=new ResizeObserver(resize);ro.observe(host);resize();
  const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible){if(!introduced){sweepStart=performance.now();introduced=true}start()}else{pointer.active=false;stop()}});io.observe(host);
  host.addEventListener('pointermove',move,{passive:true});host.addEventListener('pointerleave',leave);document.addEventListener('visibilitychange',visibility);host.dataset.running='false';
  return()=>{disposed=true;stop();ro.disconnect();io.disconnect();host.removeEventListener('pointermove',move);host.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',visibility)};
 },[paused,reduced]);
 return <div ref={root} className="dot-signature" role="img" aria-label="Bharath Raju KB"><canvas ref={canvas} aria-hidden="true"/><span className="signature-fallback" aria-hidden="true">Bharath Raju KB</span></div>
}
