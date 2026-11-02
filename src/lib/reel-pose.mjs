export const clamp = n => Math.max(0, Math.min(1,n));
export const wrap = a => ((a+180)%360+360)%360-180;
export function reelScene(expansion){const e=clamp(expansion);return {radius:460+1340*e,perspective:1000-550*e,tilt:-22*(1-e),roll:-20*(1-e),scale:.52+1.78*e*e}}
export function reelPose(angle,formation,scene){const around=((angle+180)%360+360)%360,order=around/360;const t=clamp((formation-order*.7)/.3),dealt=1-(1-t)**3,placed=-180+around*dealt,r=placed*Math.PI/180,radius=scene.radius-(1-dealt)*order*24;const z=-Math.cos(r)*radius;return {x:-Math.sin(r)*radius,y:0,z,yaw:placed,scale:scene.scale,appear:Math.min(1,t*2.5),behindCamera:z>=scene.perspective-30}}
export function dealPose(angle,deal,lift){const a=wrap(angle),away=Math.abs(a),order=Math.min(away,100)/100,t=clamp((deal-order*.6)/.4),p=1-(1-t)**3;return {angle:a+(1-p)*70,pivot:500+314*lift,radius:-(580+430*lift)*p+(1-p)*140,flip:(1-p)*180,scale:(.7+.3*p)*(1+.35*lift),z:-away*.5,visible:p>0&&away<105}}
