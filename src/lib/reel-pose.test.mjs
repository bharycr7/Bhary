import {test} from 'node:test';import assert from 'node:assert/strict';import {reelScene,reelPose,dealPose,wrap} from './reel-pose.mjs';
test('scene endpoints match the entrance contract',()=>{assert.deepEqual(reelScene(0),{radius:460,perspective:1000,tilt:-22,roll:-20,scale:.52});assert.equal(reelScene(1).radius,1800);assert.equal(reelScene(1).scale,2.3)});
test('all fully formed cards land on the cylinder',()=>{for(let a=-180;a<180;a+=22.5){const p=reelPose(a,1,reelScene(1));assert.ok(Math.abs(Math.hypot(p.x,p.z)-1800)<1e-8);assert.equal(p.appear,1)}});
test('undealt cards never expose the waiting stack',()=>{for(let a=-180;a<180;a+=22.5)assert.equal(reelPose(a,0,reelScene(0)).appear,0)});
test('camera rejects foreground cards while far centre remains visible',()=>{assert.equal(reelPose(0,1,reelScene(1)).behindCamera,false);assert.equal(reelPose(180,1,reelScene(1)).behindCamera,true)});
test('wrapping is continuous across multiple turns',()=>{assert.equal(wrap(720),0);assert.equal(wrap(-721),-1)});
test('wheel formation ends face up and conceals the bottom arc',()=>{const p=dealPose(0,1,1);assert.equal(p.flip,0);assert.equal(p.radius,-1010);assert.equal(p.visible,true);assert.equal(dealPose(150,1,1).visible,false)});
