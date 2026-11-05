'use client';
export default function CredentialSculpture({id,mark}:{id:string;mark:string}){
 return <span className={'honor-sculpture honor-'+id} aria-hidden="true">
  <span className="honor-orbit orbit-one"/><span className="honor-orbit orbit-two"/>
  <span className="honor-object"><span className="honor-depth"/><span className="honor-face">
   <svg viewBox="0 0 180 180" focusable="false">
    <circle cx="90" cy="90" r="79" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 5"/>
    {id==='cornell'?<g fill="none" stroke="currentColor" strokeWidth="3"><path d="M42 67L90 40L138 67ZM45 133H135M48 140H132M54 78V124M77 78V124M103 78V124M126 78V124M48 73H132"/><path d="M65 78V124M115 78V124" opacity=".4"/></g>:<>
     <path d="M57 137C21 111 33 69 48 48M123 137C159 111 147 69 132 48" fill="none" stroke="currentColor" strokeWidth="2"/>
     {[0,1,2,3,4].map(i=><g key={i} fill="currentColor"><ellipse cx={39+i*1.5} cy={63+i*14} rx="4" ry="9" transform={'rotate(-35 '+(39+i*1.5)+' '+(63+i*14)+')'}/><ellipse cx={141-i*1.5} cy={63+i*14} rx="4" ry="9" transform={'rotate(35 '+(141-i*1.5)+' '+(63+i*14)+')'}/></g>)}
     <path d="M90 32L93 39L101 40L95 46L97 54L90 50L83 54L85 46L79 40L87 39Z" fill="currentColor"/>
     <text x="90" y="107" textAnchor="middle" fill="currentColor" fontSize={id==='marquis'?56:32} fontFamily="Georgia,serif">{mark}</text>
    </>}
   </svg>
  </span></span><span className="honor-plinth"/>
 </span>;
}
