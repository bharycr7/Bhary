import * as THREE from 'three';

// An original, locally generated miniature. No remote models or textures.
export function createWizardScene(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true, powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-2.5,2.5,3.5,-2.3,.1,40);
  camera.position.set(0,1,12); camera.lookAt(0,.6,0);
  scene.add(new THREE.HemisphereLight(0xfff3d1,0x566a9e,2.8));
  const key = new THREE.DirectionalLight(0xffe7bf,4); key.position.set(-3,5,6); scene.add(key);
  const rim = new THREE.DirectionalLight(0x8bbaff,3); rim.position.set(4,2,-2); scene.add(rim);
  const model = new THREE.Group(); model.position.set(.4,-.5,0); scene.add(model);
  const mat = (color:string, metalness=0) => new THREE.MeshStandardMaterial({color,roughness:.58,metalness});
  const skin=mat('#e7b285'), hair=mat('#211916'), robe=mat('#202331'), lining=mat('#73283a'), gold=mat('#e9b04f',.25), black=mat('#161720'), shirt=mat('#e7dfcd'), wood=mat('#714a2b');
  function mesh(geo:THREE.BufferGeometry, material:THREE.Material, x:number,y:number,z:number,parent:THREE.Object3D=model) {
    const m=new THREE.Mesh(geo,material);m.position.set(x,y,z);parent.add(m);return m;
  }
  function ball(material:THREE.Material,x:number,y:number,z:number,sx:number,sy=sx,sz=sx,parent:THREE.Object3D=model) {
    const b=mesh(new THREE.SphereGeometry(1,20,16),material,x,y,z,parent);b.scale.set(sx,sy,sz);return b;
  }
  mesh(new THREE.ConeGeometry(.65,1.5,24),robe,0,-.42,0);
  mesh(new THREE.ConeGeometry(.39,1.2,3),lining,0,-.4,.31).rotation.y=Math.PI;
  mesh(new THREE.BoxGeometry(.39,.46,.1),shirt,0,.08,.38);
  mesh(new THREE.BoxGeometry(.08,.4,.11),gold,0,.05,.45).rotation.z=-.12;
  ball(black,-.26,-1.2,.12,.22,.13,.37);ball(black,.26,-1.2,.12,.22,.13,.37);
  const head = new THREE.Group();head.position.y=.85;model.add(head);
  ball(skin,0,0,0,.63,.66,.53,head);
  ball(skin,-.64,-.02,0,.12,.17,.1,head);ball(skin,.64,-.02,0,.12,.17,.1,head);
  const cap=mesh(new THREE.SphereGeometry(.65,24,16,0,Math.PI*2,0,Math.PI*.5),hair,0,.1,-.04,head);cap.scale.z=.88;
  for(let i=0;i<7;i++) {
    const tuft=ball(hair,-.48+i*.155,.42+Math.sin(i*1.8)*.07,.34,.17,.25,.16,head);
    tuft.rotation.z=-.4+i*.13;
  }
  for(const side of [-1,1]) {
    mesh(new THREE.TorusGeometry(.235,.027,8,32),black,side*.27,.02,.50,head);
    ball(black,side*.26,.02,.515,.047,.065,.025,head);
    ball(shirt,side*.25,.045,.538,.015,.02,.009,head);
  }
  mesh(new THREE.BoxGeometry(.09,.025,.035),black,0,.04,.53,head);
  ball(skin,0,-.13,.51,.07,.09,.07,head);
  const mouth=new THREE.EllipseCurve(0,0,.11,.035,Math.PI,Math.PI*2,false,0);
  const mouthGeo=new THREE.BufferGeometry().setFromPoints(mouth.getPoints(16).map(p=>new THREE.Vector3(p.x,p.y-.28,.48)));
  head.add(new THREE.Line(mouthGeo,new THREE.LineBasicMaterial({color:'#7d3f39'})));
  const scarGeo=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(.18,.39,.5),new THREE.Vector3(.10,.27,.53),new THREE.Vector3(.20,.28,.53),new THREE.Vector3(.12,.16,.54)]);
  head.add(new THREE.Line(scarGeo,new THREE.LineBasicMaterial({color:'#9e4b35'})));
  mesh(new THREE.TorusGeometry(.33,.12,8,28),lining,0,.29,0).rotation.x=Math.PI/2;
  mesh(new THREE.BoxGeometry(.2,.72,.12),lining,-.21,-.05,.49).rotation.z=-.1;
  for(let i=0;i<4;i++) mesh(new THREE.BoxGeometry(.21,.065,.13),gold,-.21-i*.006,.18-i*.17,.5);
  const left=ball(robe,-.49,-.13,0,.2,.52,.22);left.rotation.z=-.3;
  ball(skin,-.64,-.49,.03,.13);
  const arm = new THREE.Group();arm.position.set(.43,.12,0);model.add(arm);
  const sleeve=ball(robe,.18,.04,0,.2,.42,.22,arm);sleeve.rotation.z=-.8;
  ball(skin,.42,.27,.04,.14,.14,.14,arm);
  const wand = new THREE.Group();wand.position.set(.43,.30,.08);wand.rotation.z=-.52;arm.add(wand);
  mesh(new THREE.CylinderGeometry(.019,.035,.94,10),wood,0,.4,0,wand);
  const tip=ball(new THREE.MeshBasicMaterial({color:'#fff3b1'}),0,.9,0,.055,.055,.055,wand);
  const glow=new THREE.PointLight(0xffc454,0,5);wand.add(glow);glow.position.y=.9;
  const pedestal=mesh(new THREE.TorusGeometry(.67,.018,8,64),gold,0,-1.35,0);pedestal.rotation.x=Math.PI/2;

  const count=100,positions=new Float32Array(count*3);
  const particleGeo=new THREE.BufferGeometry();particleGeo.setAttribute('position',new THREE.BufferAttribute(positions,3));
  const dots=document.createElement('canvas');dots.width=dots.height=32;
  const ctx=dots.getContext('2d')!;
  const gradient=ctx.createRadialGradient(16,16,0,16,16,16);gradient.addColorStop(0,'#fff');gradient.addColorStop(.25,'#fff3b0');gradient.addColorStop(1,'#ffffff00');ctx.fillStyle=gradient;ctx.fillRect(0,0,32,32);
  const texture=new THREE.CanvasTexture(dots);
  const particleMat=new THREE.PointsMaterial({color:'#ffd477',map:texture,size:.12,transparent:true,depthWrite:false,opacity:0});
  const particles=new THREE.Points(particleGeo,particleMat);scene.add(particles);
  const ribbonGeo=new THREE.BufferGeometry();const ribbonPoints=new Float32Array(64*3);ribbonGeo.setAttribute('position',new THREE.BufferAttribute(ribbonPoints,3));
  const ribbonMat=new THREE.LineBasicMaterial({color:'#e8a12f',transparent:true,opacity:0});
  scene.add(new THREE.Line(ribbonGeo,ribbonMat));
  let frame=0,last=0,energy=0,phase=0,paused=false,reduced=false,oldScroll=scrollY,lookX=0,lookY=0;
  const origin=new THREE.Vector3();
  const resize=()=>{const r=canvas.getBoundingClientRect();renderer.setSize(r.width,r.height,false);render(performance.now());};
  function render(now:number) {
    const dt=last?Math.min((now-last)/1000,.05):0;last=now;
    if(!paused&&!reduced) { phase+=dt;energy=Math.max(0,energy-dt*.52); }
    const magic=paused||reduced?0:energy;
    model.rotation.y=Math.sin(phase*.65)*.1+lookX*.18;
    model.position.y=-.5+(paused||reduced?0:Math.sin(phase*1.7)*.045);
    head.rotation.y=lookX*.2;head.rotation.x=lookY*.1;
    arm.rotation.z=.05+magic*(.3+Math.sin(phase*8)*.22);
    tip.scale.setScalar(.055*(.7+magic*2));glow.intensity=magic*3;
    model.updateMatrixWorld(true);tip.getWorldPosition(origin);
    particleMat.opacity=magic;ribbonMat.opacity=magic*.75;
    for(let i=0;i<count;i++) {
      const t=((i/count)+phase*.45)%1,angle=i*2.399+phase*1.8;
      const radius=t*(.7+magic*.5);
      positions[i*3]=origin.x-Math.sin(t*Math.PI)*1.6+Math.cos(angle)*radius*.55;
      positions[i*3+1]=origin.y+t*2+Math.sin(angle)*radius*.4;
      positions[i*3+2]=origin.z+Math.cos(angle)*radius*.35;
    }
    for(let i=0;i<64;i++) {const t=i/63;ribbonPoints[i*3]=origin.x-Math.sin(t*Math.PI)*1.6;ribbonPoints[i*3+1]=origin.y+t*2+Math.sin(t*9+phase*5)*.14*t;ribbonPoints[i*3+2]=origin.z;}
    particleGeo.attributes.position.needsUpdate=true;ribbonGeo.attributes.position.needsUpdate=true;
    canvas.dataset.casting=magic>.05?'true':'false';
    renderer.render(scene,camera);
  }
  function tick(now:number) {frame=0;render(now);if(!document.hidden&&!paused&&!reduced)frame=requestAnimationFrame(tick);}
  function schedule() {cancelAnimationFrame(frame);last=0;render(performance.now());if(!document.hidden&&!paused&&!reduced)frame=requestAnimationFrame(tick);}
  const scroll=()=>{const delta=Math.abs(scrollY-oldScroll);oldScroll=scrollY;if(!paused&&!reduced&&!document.hidden&&delta>1)energy=Math.min(1,energy+delta*.012);};
  const pointer=(e:PointerEvent)=>{if(e.pointerType==='mouse'){lookX=(e.clientX/innerWidth-.5)*2;lookY=(e.clientY/innerHeight-.5)*2;}};
  const observer=new ResizeObserver(resize);observer.observe(canvas);
  window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('pointermove',pointer,{passive:true});document.addEventListener('visibilitychange',schedule);
  resize();schedule();
  return {
    setMotion(stopped:boolean,reduce:boolean){paused=stopped;reduced=reduce;energy=0;schedule();},
    dispose(){cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',scroll);window.removeEventListener('pointermove',pointer);document.removeEventListener('visibilitychange',schedule);scene.traverse(obj=>{if(obj instanceof THREE.Mesh||obj instanceof THREE.Line||obj instanceof THREE.Points){obj.geometry.dispose();for(const m of Array.isArray(obj.material)?obj.material:[obj.material])m.dispose();}});texture.dispose();renderer.dispose();renderer.forceContextLoss();}
  };
}
