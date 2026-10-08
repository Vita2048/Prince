// Run with: node tests/combat-effects.cjs (no external dependencies).
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))new vm.Script(m[1]);
function source(name){
  const start=html.indexOf('function '+name+'('),nl=html.indexOf('\n',start);
  assert(start>=0,name);return html.slice(start,html.slice(start,nl).trimEnd().endsWith('}')?nl:html.indexOf('\n}',nl)+2);
}
let seed=29;const math=Object.create(Math);math.random=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);
const c={Math:math,particles:[],bloodMarks:[],impactBursts:[],hitStop:0,combatInput:{},pressed:{},torches:[],kid:{},guards:[],LH:6,TH:63,
  rowOf:y=>Math.floor((y-1)/63),colOf:x=>Math.floor(x/32),floorY:r=>r*63+56,ground:(col,r)=>r===2,inRoomVol:()=>1};
vm.createContext(c);
for(const n of ['blood','updateParticles','updateCombatEffects','combatImpact','clearCombatEffects','update'])vm.runInContext(source(n),c);
c.blood(80,120,1,12);
assert.equal(c.particles.length,12);assert(new Set(c.particles.map(p=>p.size)).size>1);
assert(c.particles.every(p=>p.vx>0));
for(let i=0;i<120;i++)c.updateParticles(1/60);
assert(c.bloodMarks.length>0);assert(c.bloodMarks.every(p=>p.y===182));
for(let i=0;i<10;i++)c.blood(80,120,-1,100);
assert(c.particles.length<=400);
for(let i=0;i<120;i++)c.updateParticles(1/60);
assert(c.bloodMarks.length<=100);
c.updateCombatEffects(30);assert.equal(c.bloodMarks.length,0);
c.combatImpact(80,120,true);assert.equal(c.hitStop,.035);
c.pressed.strike=true;c.update(.016);assert(c.combatInput.strike);assert(c.hitStop>0);
c.combatImpact(80,120,false);assert.equal(c.hitStop,.055);
c.kid.swordTrail=[{life:.01}];c.updateCombatEffects(.1);assert.equal(c.kid.swordTrail.length,0);
c.kid.lastSword={};c.clearCombatEffects();assert.equal(c.hitStop,0);assert.equal(c.impactBursts.length,0);assert.equal(c.kid.lastSword,null);
console.log('PASS: syntax, directional blood, floor collision, caps, fading, impact pause/input buffering, trail expiry, reset.');
