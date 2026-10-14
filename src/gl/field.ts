// One GPU particle field. Dots don't tween straight to a shape: they hesitate, huddle with neighbours
// heading the same way (quadratic Bézier through a shared "meeting point"), then commit — a few never quite do.
import * as THREE from 'three';

export type RGB = [number, number, number];
/** `mo` (optional, 4 per dot) gives a settled dot a life of its own: xyz = direction × amplitude, w = kind + phase.
 *  w < 0: still · 0 ≤ w < 10: oscillate (pistons, ripples) · 10 ≤ w < 20: stream + rise (exhaust) · w ≥ 20: rise (rocket body). */
export type Shape = { pos: Float32Array; col: Float32Array; mo?: Float32Array };

// Shared by shader and CPU (morph freezes in-flight positions) — keep both in sync.
const FLOW = /* glsl */ `
vec3 flow(vec3 p, float t){
  return vec3(sin(p.y*.9 + t*.31) + sin(p.z*1.7 - t*.23)*.5,
              sin(p.z*.8 - t*.27) + sin(p.x*1.5 + t*.19)*.5,
              sin(p.x*.7 + t*.29) + sin(p.y*1.9 - t*.21)*.5);
}`;
const flowJS = (x: number, y: number, z: number, t: number): [number, number, number] => [
  Math.sin(y * .9 + t * .31) + Math.sin(z * 1.7 - t * .23) * .5,
  Math.sin(z * .8 - t * .27) + Math.sin(x * 1.5 + t * .19) * .5,
  Math.sin(x * .7 + t * .29) + Math.sin(y * 1.9 - t * .21) * .5,
];

const vert = /* glsl */ `
attribute vec3 aTo; attribute vec3 aMid; attribute vec3 aCol; attribute vec3 aColTo; attribute float aR; attribute float aD; attribute vec4 aMo;
uniform float uP, uTime, uSize, uPx, uMR, uSpin, uDoubt, uFade, uVel, uAudio, uOnset, uRise, uMoRate, uHold, uBurst;
uniform vec2 uMouse, uBurstAt;
varying vec3 vC; varying float vA;
${FLOW}
vec3 motion(vec4 m, float t){
  if (m.w < 0.) return vec3(0.);
  if (m.w < 10.) return m.xyz*sin(t*uMoRate + m.w);
  if (m.w < 20.) return m.xyz*fract(t*uMoRate*.35 + m.w);
  return vec3(0.);
}
void main(){
  float d = aR*.38 + aD*.22;                       // late deciders start late
  float k = clamp((uP - d) / (1. - d), 0., 1.);
  k = clamp(k + sin(uTime*1.7 + aR*31.)*.12*k*(1.-k)*4.*uDoubt, 0., 1.); // step, doubt, step again
  float e = k*k*(3.-2.*k), ie = 1.-e, mid = 4.*e*ie;
  vec3 pos = ie*ie*position + 2.*ie*e*aMid + e*e*aTo;
  vec3 f = flow(pos*.45 + aR*.6, uTime);
  pos += f*(mid*.55 + .025 + uDoubt*.08*ie);
  pos += f*smoothstep(.92, 1., aD)*(.5 + .5*sin(uTime*.6 + aR*50.))*.7; // the ones who never quite agree
  pos += motion(aMo, uTime)*e;                                          // the shape's own life: pistons, exhaust, ripples
  pos.y += step(10., aMo.w)*uRise*e;                                    // lift-off
  pos += normalize(pos + 1e-4)*uOnset*.12*aR;                           // each note nudges the field outward
  float c = cos(uSpin), s = sin(uSpin);
  pos.xz = mat2(c, -s, s, c)*pos.xz;
  vec2 dm = pos.xy - uMouse; float fm = smoothstep(uMR, 0., length(dm))*(1. - uHold);
  pos.xy += normalize(dm + 1e-4)*fm*.6; pos.z += fm*.8;
  // hold: the dots conspire toward you, circling as they come
  vec2 toM = uMouse - pos.xy; float near = smoothstep(5.5, 0., length(toM))*uHold;
  pos.xy += toM*near*(.55 + .4*aR) + vec2(-toM.y, toM.x)*near*.25*sin(uTime*2.3 + aR*6.);
  pos.z *= 1. - near*.7;
  // click: a shockwave that throws them out; the morph maths pulls them home
  vec2 fb = pos.xy - uBurstAt; float bd = length(fb), bk = uBurst*exp(-bd*.32);
  pos.xy += normalize(fb + 1e-4)*bk*(1.4 + 2.6*aR); pos.z += bk*(aR - .5)*5.;
  pos.y += uVel*(aR - .5)*2.2;
  vec4 mv = modelViewMatrix*vec4(pos, 1.);
  gl_Position = projectionMatrix*mv;
  gl_PointSize = uSize*uPx*(.5 + aR*.9)/-mv.z*(1. + fm*1.2 + uAudio*.55*aR + uOnset*.4);
  vC = mix(aCol, aColTo, e) + fm*vec3(.95, .7, .25)*.5 + uOnset*vec3(.5, .36, .12)*aR + (near*.6 + bk*.5)*vec3(1., .72, .3);
  vA = (.45 + .55*aR)*uFade*(1. - mid*.3);
}`;
const frag = /* glsl */ `
varying vec3 vC; varying float vA;
void main(){
  float d = length(gl_PointCoord - .5);
  if (d > .5) discard;
  gl_FragColor = vec4(vC, smoothstep(.5, .05, d)*vA);
}`;

export class Field {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(35, 1, .1, 100);
  readonly n: number;
  readonly u = {
    uP: { value: 1 }, uTime: { value: 0 }, uSize: { value: 24 }, uPx: { value: 1 }, uMR: { value: 1 },
    uSpin: { value: 0 }, uDoubt: { value: 1 }, uFade: { value: 1 }, uVel: { value: 0 }, uAudio: { value: 0 }, uOnset: { value: 0 },
    uRise: { value: 0 }, uMoRate: { value: 2 }, uHold: { value: 0 }, uBurst: { value: 0 },
    uMouse: { value: new THREE.Vector2(99, 99) }, uBurstAt: { value: new THREE.Vector2(0, 0) },
  };
  private geo = new THREE.BufferGeometry();
  private rand: Float32Array;
  private doubt: Float32Array;
  private mouseTarget = new THREE.Vector2(99, 99);
  private morphStart = 0; private morphDur = 2.4; private morphing = false;
  spinSpeed = 0;

  constructor(canvas: HTMLCanvasElement, n: number, seed = 7) {
    this.n = n;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
    this.camera.position.z = 10;
    const rnd = prng(seed);
    this.rand = new Float32Array(n).map(() => rnd());
    this.doubt = new Float32Array(n).map(() => rnd());
    const start = scatter(n, { w: 30, h: 18 }, seed);
    const attr = (a: Float32Array, k: number) => new THREE.BufferAttribute(a, k);
    this.geo.setAttribute('position', attr(start.pos, 3));
    this.geo.setAttribute('aTo', attr(start.pos.slice(), 3));
    this.geo.setAttribute('aMid', attr(start.pos.slice(), 3));
    this.geo.setAttribute('aCol', attr(start.col, 3));
    this.geo.setAttribute('aColTo', attr(start.col.slice(), 3));
    this.geo.setAttribute('aR', attr(this.rand, 1));
    this.geo.setAttribute('aD', attr(this.doubt, 1));
    this.geo.setAttribute('aMo', attr(new Float32Array(n * 4).fill(-1), 4));
    const mat = new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms: this.u, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    const pts = new THREE.Points(this.geo, mat);
    pts.frustumCulled = false;
    this.scene.add(pts);
    this.resize();
    this.renderer.compile(this.scene, this.camera);
  }

  /** World point under a viewport pixel (on the z=0 plane). */
  toWorld(px: number, py: number) { const v = this.view(); return { x: (px / innerWidth - .5) * v.w, y: -(py / innerHeight - .5) * v.h }; }

  /** World-space size of the z=0 plane. */
  view() {
    const h = 2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) * this.camera.position.z;
    return { w: h * this.camera.aspect, h };
  }

  resize() {
    const w = innerWidth, h = innerHeight, px = Math.min(devicePixelRatio, 1.5); // additive points are fill-bound; 1.5× is visually identical
    this.renderer.setPixelRatio(px);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.u.uPx.value = px * (h / 900);
  }

  setMouse(nx: number, ny: number) { const v = this.view(); this.mouseTarget.set(nx * v.w / 2, ny * v.h / 2); }
  /** Fewer dots on slow GPUs: shapes sample per index at random, so any prefix is still a fair sample. */
  setBudget(k: number) { this.geo.setDrawRange(0, Math.floor(this.n * k)); }
  get budget() { return this.geo.drawRange.count === Infinity ? this.n : this.geo.drawRange.count; }

  /** Freeze in-flight positions (same maths as the shader, minus pointer), then aim at a new shape. O(n). */
  morph(shape: Shape, dur = 2.4, huddle = 1.1) {
    const A = this.geo.attributes;
    const pos = A.position.array as Float32Array, to = A.aTo.array as Float32Array, mid = A.aMid.array as Float32Array;
    const col = A.aCol.array as Float32Array, colTo = A.aColTo.array as Float32Array;
    const mo = A.aMo.array as Float32Array, rate = this.u.uMoRate.value, rise = this.u.uRise.value;
    const P = this.u.uP.value, t = this.u.uTime.value, D = this.u.uDoubt.value;
    for (let i = 0; i < this.n; i++) {
      const r = this.rand[i], d = r * .38 + this.doubt[i] * .22;
      let k = Math.min(1, Math.max(0, (P - d) / (1 - d)));
      k = Math.min(1, Math.max(0, k + Math.sin(t * 1.7 + r * 31) * .12 * k * (1 - k) * 4 * D));
      const e = k * k * (3 - 2 * k), ie = 1 - e, m = 4 * e * ie, j = i * 3;
      const x = ie * ie * pos[j] + 2 * ie * e * mid[j] + e * e * to[j];
      const y = ie * ie * pos[j + 1] + 2 * ie * e * mid[j + 1] + e * e * to[j + 1];
      const z = ie * ie * pos[j + 2] + 2 * ie * e * mid[j + 2] + e * e * to[j + 2];
      const f = flowJS(x * .45 + r * .6, y * .45 + r * .6, z * .45 + r * .6, t), a = m * .55 + .025 + D * .08 * ie;
      pos[j] = x + f[0] * a; pos[j + 1] = y + f[1] * a; pos[j + 2] = z + f[2] * a;
      const q = i * 4, w = mo[q + 3]; // keep the old shape's own motion + lift where it is right now
      if (w >= 0) {
        const kk = w < 10 ? Math.sin(t * rate + w) : w < 20 ? (t * rate * .35 + w) % 1 : 0;
        pos[j] += mo[q] * kk * e; pos[j + 1] += mo[q + 1] * kk * e + (w >= 10 ? rise * e : 0); pos[j + 2] += mo[q + 2] * kk * e;
      }
      for (let c = 0; c < 3; c++) col[j + c] += (colTo[j + c] - col[j + c]) * e;
    }
    to.set(shape.pos); colTo.set(shape.col);
    if (shape.mo) mo.set(shape.mo); else mo.fill(-1);
    this.u.uRise.value = 0;
    // Meeting points: dots bound for the same patch of the new shape gather together first (they "conspire").
    for (let i = 0; i < this.n; i++) {
      const j = i * 3, r = this.rand[i];
      for (let c = 0; c < 3; c++) {
        const cellTo = (Math.floor(to[j + c] / huddle) + .5) * huddle, cellFrom = (Math.floor(pos[j + c] / huddle) + .5) * huddle;
        mid[j + c] = cellFrom * .3 + cellTo * .7 + (r - .5) * .08;
      }
      mid[j + 2] += r * .8;
    }
    for (const k of ['position', 'aTo', 'aMid', 'aCol', 'aColTo', 'aMo']) A[k].needsUpdate = true;
    this.u.uP.value = 0; this.morphDur = dur; this.morphStart = t; this.morphing = true;
  }

  tick(t: number, dt: number, render = true) {
    this.u.uTime.value = t;
    if (this.morphing) {
      const k = Math.min(1, (t - this.morphStart) / this.morphDur);
      this.u.uP.value = 1 - Math.pow(1 - k, 2.2);
      if (k >= 1) this.morphing = false;
    }
    this.u.uSpin.value += this.spinSpeed * dt;
    this.u.uMouse.value.lerp(this.mouseTarget, .1);
    if (render) this.renderer.render(this.scene, this.camera);
  }

  dispose() { this.geo.dispose(); this.renderer.dispose(); }
}

/** Deterministic PRNG (mulberry32) — same sky every reload. */
export function prng(seed: number) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export function scatter(n: number, v: { w: number; h: number }, seed = 3, tint: RGB = [.5, .5, .55]): Shape {
  const r = prng(seed), pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    pos.set([(r() - .5) * v.w * 1.8, (r() - .5) * v.h * 1.8, -1 - r() * 14], i * 3);
    const b = .15 + r() ** 3 * .85, gold = r() < .04;
    col.set(gold ? [b, b * .72, b * .3] : [tint[0] * b, tint[1] * b, tint[2] * b], i * 3);
  }
  return { pos, col };
}
