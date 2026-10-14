// The hero reel: the particle field keeps building marvels, one every few seconds, and lets people play.
// Drag turns it · click scatters it · hold gathers it · type and it spells · ← / → switches.
// Shapes are built ahead of time on idle (~20–40 ms each at 72k dots) and cached per layout.
import gsap from 'gsap';
import type { Field, Shape } from '../gl/field';
import { stage, text } from '../gl/shapes';
import { MARVEL_SHAPES, type MarvelId } from '../gl/marvels';
import type { Marvel } from '../content';

type Hooks = { onChange: (i: number, m: Marvel, ms: number) => void; /** phones: the free band (px) between the captions and the name */ gap: () => { top: number; bottom: number } };
const TAU = Math.PI * 2;
const idle = (f: () => void) => (window.requestIdleCallback ? window.requestIdleCallback(f, { timeout: 2500 }) : setTimeout(f, 300));

export function createReel(field: Field, list: readonly Marvel[], hooks: Hooks) {
  const cache = new Map<number, Shape>();
  let i = -1, nextAt = Infinity, holdUntil = 0, running = false, visible = true, typed = false, tSec = 0;
  let base = 0, drag = 0;
  let rise: gsap.core.Timeline | null = null;

  const layout = () => { // where marvels sit: right of centre above the name on wide screens, top half on phones
    const v = field.view(), wide = innerWidth >= 860;
    if (wide) { stage.k = .56; stage.ox = v.w * .14; stage.oy = v.h * .16; return; }
    const g = hooks.gap(), mid = (g.top + g.bottom) / 2 - scrollY * 0, px = Math.max(120, g.bottom - g.top);
    stage.k = Math.min(.9, (px * 1.05) / (innerHeight * .8)); stage.ox = 0; stage.oy = -(mid / innerHeight - .5) * v.h;
  };
  const shapeOf = (k: number) => {
    let s = cache.get(k);
    if (!s) { layout(); s = MARVEL_SHAPES[list[k].id as MarvelId](field.n, field.view()); stage.k = 1; stage.ox = stage.oy = 0; cache.set(k, s); }
    return s;
  };
  const prebuild = (k: number) => { const j = ((k % list.length) + list.length) % list.length; if (!cache.has(j)) idle(() => shapeOf(j)); };

  function go(k: number, dur = 1.6) {
    i = ((k % list.length) + list.length) % list.length;
    const m = list[i];
    rise?.kill(); rise = null;
    field.morph(shapeOf(i), dur, 1);
    field.u.uDoubt.value = .25; gsap.to(field.u.uDoubt, { value: .08, duration: dur * 1.4, overwrite: true });
    field.u.uMoRate.value = m.rate;
    const target = Math.round(base / TAU) * TAU; gsap.to({ v: base }, { v: target, duration: 1.2, ease: 'power3.inOut', onUpdate() { base = this.targets()[0].v; } });
    if (m.id === 'starship') { // engines light, the stack shudders, then it climbs out of frame
      rise = gsap.timeline({ delay: dur + .5 })
        .to(field.scene.position, { x: .03, duration: .05, repeat: 11, yoyo: true, ease: 'none' })
        .set(field.scene.position, { x: 0 })
        .to(field.u.uRise, { value: .5, duration: 1.3, ease: 'power1.in' }, '<')
        .to(field.u.uRise, { value: 16, duration: 2.6, ease: 'power3.in' });
    }
    nextAt = performance.now() + m.ms;
    hooks.onChange(i, m, m.ms);
    prebuild(i + 1);
  }

  const pauseAuto = (ms = 9000) => { holdUntil = performance.now() + ms; };

  return {
    start() { if (running) return; running = true; layout(); go(0, 2.2); for (let k = 1; k < list.length; k++) prebuild(k); },
    next() { pauseAuto(); go(i + 1); },
    prev() { pauseAuto(); go(i - 1); },
    to(k: number) { pauseAuto(); go(k); },
    get index() { return i; },
    setVisible(v: boolean) { visible = v; },
    /** pointer drag (px since last move) → spin with inertia */
    drag(dx: number) { drag += dx * .0045; pauseAuto(); },
    burst(px: number, py: number) {
      const w = field.toWorld(px, py); field.u.uBurstAt.value.set(w.x, w.y);
      gsap.timeline().to(field.u.uBurst, { value: 1, duration: .12, ease: 'power2.out', overwrite: true }).to(field.u.uBurst, { value: 0, duration: 1.7, ease: 'power3.out' });
      pauseAuto();
    },
    hold(on: boolean) { gsap.to(field.u.uHold, { value: on ? 1 : 0, duration: on ? .7 : 1.1, ease: on ? 'power2.out' : 'power3.inOut', overwrite: true }); if (on) pauseAuto(); },
    /** typed words take the stage; an empty string hands it back to the marvels */
    write(s: string) {
      const w = s.trim().slice(0, 16);
      if (!w) { if (typed) { typed = false; go(i, 1.3); } return; }
      typed = true; rise?.kill(); layout();
      const v = field.view(), shape = text(field.n, { w: v.w * stage.k * 1.2, h: v.h * stage.k * 1.2 }, [w], (p) => `600 ${p}px "Clash Display"`, [1, .72, .3], [.93, .91, .86], .85, 29);
      for (let j = 0; j < field.n; j++) { shape.pos[j * 3] += stage.ox; shape.pos[j * 3 + 1] += stage.oy; }
      stage.k = 1; stage.ox = stage.oy = 0;
      field.morph(shape, 1.1, .7); field.u.uMoRate.value = 1;
      gsap.to({ v: base }, { v: Math.round(base / TAU) * TAU, duration: .9, onUpdate() { base = this.targets()[0].v; } });
    },
    relayout() { cache.clear(); if (running) go(i, 1); },
    frame(t: number, dt: number) {
      if (!running) return;
      tSec = t;
      drag *= Math.pow(.04, dt); // inertia
      const m = list[i];
      if (!typed && m.spin === 'turn') base += .12 * dt;
      base += drag;
      const sway = typed ? 0 : m.spin === 'sway' ? Math.sin(tSec * .45) * .35 : m.spin === 'look' ? Math.sin(tSec * .7) * .3 + Math.sin(tSec * 1.9) * .05 : 0;
      field.spinSpeed = 0; field.u.uSpin.value = base + sway;
      const now = performance.now();
      if (visible && !typed && now > nextAt && now > holdUntil) go(i + 1);
      if (now < holdUntil && nextAt < holdUntil) nextAt = holdUntil + 1200;
    },
  };
}
export type Reel = ReturnType<typeof createReel>;
