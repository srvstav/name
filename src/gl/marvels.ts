// The hero reel: engineering marvels drawn in dots. Each builder lays out real structure (cylinders in a 65° V,
// a Starship stack beside its tower, 18 + 12 dishes on a plateau...) and spends the dot budget by part.
// Motion (Shape.mo) gives each one a life after it settles: pistons pump, exhaust streams, aurora ripples.
import { type RGB, type Shape } from './field';
import { build, line, box, tone, mix, lerp3, GOLD, BONE, STEEL, type Part, type V3, type V4, type View } from './shapes';

const TAU = Math.PI * 2;
const shade = (c: RGB, k: number): RGB => [c[0] * k, c[1] * k, c[2] * k];
const norm = (v: V3): V3 => { const l = Math.hypot(...v) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const add = (a: V3, b: V3, k = 1): V3 => [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k];
/** Point on a circle of radius R around `axis`, through `c`. */
const ring = (c: V3, axis: V3, R: number, ang: number): V3 => {
  const u = norm(Math.abs(axis[1]) > .9 ? cross(axis, [1, 0, 0]) : cross(axis, [0, 1, 0])), w = cross(axis, u);
  return add(add(c, u, Math.cos(ang) * R), w, Math.sin(ang) * R);
};
/** Quadratic Bézier sampler — for pipes and whiskers. */
const curve = (a: V3, b: V3, c: V3, jit = .02) => (r: () => number): V3 => {
  const t = r(), p = lerp3(lerp3(a, b, t), lerp3(b, c, t), t);
  return [p[0] + (r() - .5) * jit, p[1] + (r() - .5) * jit, p[2] + (r() - .5) * jit];
};

// ---------- Ferrari 12Cilindri: a 65° V12 ----------
// Not certain — verify against Ferrari's spec sheet: 6.5 L naturally aspirated V12, 9,500 rpm.
export function v12(n: number, view: View): Shape {
  const half = (65 / 2) * Math.PI / 180, banks: V3[] = [[0, Math.cos(half), -Math.sin(half)], [0, Math.cos(half), Math.sin(half)]];
  const cyl = (k: number) => { const bank = k % 2, i = Math.floor(k / 2); return { bank, i, base: [-1.75 + i * .7 + bank * .18, 0, 0] as V3, axis: banks[bank] }; };
  const firing = [0, 6, 4, 10, 2, 8, 1, 7, 5, 11, 3, 9]; // 12 cylinders, 60° apart in crank angle
  const walls: Part = { share: .15, sample: (r) => { const c = cyl(Math.floor(r() * 12)); return ring(add(c.base, c.axis, .35 + r() * 1.15), c.axis, .27, r() * TAU); }, color: tone([.5, .52, .56], [.7, .72, .76], .45) };
  const pistons: Part = {
    share: .11,
    sample: (r) => { const c = cyl(Math.floor(r() * 12)); return ring(add(c.base, c.axis, .95), c.axis, .24 * Math.sqrt(r()), r() * TAU); },
    color: (r) => shade(BONE, .8 + r() * .2),
    motion: (_r, p) => { // find which cylinder this point belongs to → pump along its axis, in firing order
      const bank = p[2] < 0 ? 0 : 1, i = Math.round((p[0] - bank * .18 + 1.75) / .7), k = i * 2 + bank;
      const a = banks[bank]; return [a[0] * .3, a[1] * .3, a[2] * .3, (firing.indexOf(k) / 12) * TAU];
    },
  };
  const covers: Part = { // the red cam covers — Ferrari's signature
    share: .2,
    sample: (r) => { const bank = r() < .5 ? 0 : 1, a = banks[bank], c = add([bank * .18, 0, 0], a, 1.68); const u: V3 = [1, 0, 0], w = norm(cross(a, u)); const x = (r() * 2 - 1) * 2.15, s = (r() * 2 - 1) * .32, h = r() < .7 ? .12 : (r() * 2 - 1) * .12; return add(add(add(c, u, x), w, s), a, h); },
    color: (r) => shade([.92, .09, .08], .6 + r() * .4),
  };
  const block: Part = { share: .16, sample: box([0, -.55, 0], [2.25, .55, .78]), color: tone([.36, .37, .4], [.5, .5, .54], .5) };
  const crank: Part = { share: .06, sample: (r) => r() < .5 ? line([-2.4, -.35, 0], [2.4, -.35, 0], .06)(r) : ring([-2.45, -.35, 0], [1, 0, 0], .95 * Math.sqrt(r()), r() * TAU), color: tone(STEEL, BONE, .5) };
  const trumpets: Part = { // 12 velocity stacks rising out of the V
    share: .13,
    sample: (r) => { const k = Math.floor(r() * 12), x = -1.75 + Math.floor(k / 2) * .7 + .09, z = (k % 2 ? 1 : -1) * .16, t = r(); return ring([x, 1.25 + t * .75, z], [0, 1, 0], .1 + t * t * .1, r() * TAU); },
    color: (r) => shade([.86, .88, .92], .55 + r() * .45),
  };
  const exhaust: Part = {
    share: .1,
    sample: (r) => { const c = cyl(Math.floor(r() * 12)), side = c.bank ? 1 : -1, s = add(c.base, c.axis, 1.2); return curve(add(s, [0, 0, side], .3), [s[0], -.1, side * 1.7], [s[0] * .6, -1.05, side * 1.25], .05)(r); },
    color: (r) => mix([.75, .45, .25], [.45, .35, .7], r()).map((v) => v * (.55 + r() * .4)) as RGB,
  };
  return build(n, view, 41, [walls, pistons, covers, block, crank, trumpets, exhaust], [.42, -.62, 0], [6.4, 4.6], -.15);
}

// ---------- Starship on the pad, beside the tower that catches it ----------
export function starship(n: number, view: View): Shape {
  const R = .45, rise: V4 = [0, 0, 0, 20];
  const light = (p: V3) => .45 + .55 * Math.max(0, Math.cos(Math.atan2(p[2], p[0]) - 2.4)); // lit from the front-left
  const skin = (y0: number, y1: number, tiles: boolean): Part['sample'] => (r) => { const a = r() * TAU, y = y0 + r() * (y1 - y0); return [Math.cos(a) * R, y, Math.sin(a) * R] as V3; };
  const steel = (r: () => number, p: V3): RGB => { const weld = (p[1] * 3.2) % 1 < .06 ? .7 : 1; return shade([.8, .82, .86], light(p) * weld * (.75 + r() * .25)); };
  const booster: Part = { share: .2, sample: skin(-3.2, .4, false), color: steel, motion: () => rise };
  const ship: Part = { share: .15, sample: skin(.45, 2.7, true), color: (r, p) => (Math.atan2(p[2], p[0]) > -.3 && Math.atan2(p[2], p[0]) < 2.6 ? shade([.12, .12, .13], .6 + r() * .5) : steel(r, p)), motion: () => rise }; // black heat-shield tiles on one side
  const nose: Part = { share: .05, sample: (r) => { const t = r(), y = 2.7 + t * .95, rr = R * Math.sqrt(1 - t * t * .96), a = r() * TAU; return [Math.cos(a) * rr, y, Math.sin(a) * rr]; }, color: steel, motion: () => rise };
  const flaps: Part = {
    share: .035,
    sample: (r) => { const fwd = r() < .4, side = r() < .5 ? -1 : 1, y = fwd ? 2.95 + r() * .45 : .55 + r() * .7, out = R + r() * (fwd ? .28 : .4); return [side * out, y, (r() - .5) * .05]; },
    color: (r) => shade([.15, .15, .16], 1 + r()), motion: () => rise,
  };
  const fins: Part = { share: .02, sample: (r) => { const a = Math.floor(r() * 4) * TAU / 4 + .78, d = R + r() * .32; return [Math.cos(a) * d, .1 + r() * .28, Math.sin(a) * d]; }, color: tone(STEEL, BONE), motion: () => rise };
  const engines: Part = { share: .02, sample: (r) => { const a = r() * TAU, rr = R * Math.sqrt(r()); return [Math.cos(a) * rr, -3.25, Math.sin(a) * rr]; }, color: () => [1, .85, .6], motion: () => rise };
  const plume: Part = { // exhaust leaves the 33 engines and widens as it falls; it rides up with the rocket
    share: .22,
    sample: (r) => { const a = r() * TAU, rr = R * .9 * Math.sqrt(r()); return [Math.cos(a) * rr, -3.3, Math.sin(a) * rr]; },
    color: (r) => { const k = r(); return k < .35 ? [1, .95, .8] : k < .75 ? [1, .62, .22] : [.9, .35, .12]; },
    motion: (r, p) => [p[0] * 2.2 + (r() - .5) * .5, -3.4 - r() * .8, p[2] * 2.2 + (r() - .5) * .5, 10 + r()],
  };
  const steam: Part = { share: .06, sample: (r) => { const x = (r() * 2 - 1) * 3.2, h = Math.exp(-Math.abs(x) * .7) * .9; return [x, -3.6 + r() * h, (r() - .5) * 1.6]; }, color: (r) => shade(BONE, .25 + r() * .3), motion: (r) => [(r() - .5) * .2, .12, 0, r() * TAU] };
  const tx = -1.45;
  const tower: Part = { // the launch tower: four legs, rungs, cross braces, and the two "chopsticks" arms
    share: .1,
    sample: (r) => {
      const k = r(), y = -3.4 + r() * 7.2;
      if (k < .45) { const c = Math.floor(r() * 4); return [tx + (c & 1 ? .28 : -.28), y, c & 2 ? .28 : -.28]; }
      if (k < .75) { const yy = -3.4 + Math.floor(r() * 18) * .4, s = r() * 2 - 1; return r() < .5 ? [tx + s * .28, yy + Math.abs(s) * .4, .28] : [tx + .28, yy + Math.abs(s) * .4, s * .28]; }
      const arm = r() < .5 ? -1 : 1; return [tx + .3 + r() * 1.05, 2.15 + (r() - .5) * .08, arm * (.32 + r() * .04)];
    },
    color: tone([.3, .31, .35], [.48, .49, .53], .5),
  };
  const mount: Part = { share: .03, sample: (r) => r() < .6 ? ring([0, -3.35, 0], [0, 1, 0], R + .1 + r() * .35, r() * TAU) : line([(r() - .5) * 1.4, -3.4, (r() - .5) * 1.4], [(r() - .5) * 1.4, -3.85, (r() - .5) * 1.4])(r), color: tone([.3, .3, .32], [.45, .45, .48]) };
  return build(n, view, 42, [booster, ship, nose, flaps, fins, engines, plume, steam, tower, mount], [.06, -.3, 0], [5, 8.4], .2);
}

// ---------- The exosphere: Earth's edge at sunrise, seen from orbit ----------
export function exosphere(n: number, view: View): Shape {
  const R = 16, C: V3 = [0, -19.4, -2], arc = .56, sunA = .3;
  const onArc = (a: number, h: number): V3 => [Math.sin(a) * (R + h), C[1] + Math.cos(a) * (R + h), C[2] + (Math.random() - .5) * .4];
  const surface: Part = {
    share: .38,
    sample: (r) => { const a = (r() * 2 - 1) * arc, d = -Math.pow(r(), 2.2) * 2.6; return onArc(a, d); },
    color: (r, p) => {
      const a = Math.asin(p[0] / R), day = Math.max(0, Math.min(1, (sunA + .32 - a) / .35));
      if (day < .25 && r() < .05) return [1, .65, .3]; // city lights on the night side
      const cloud = r() < .35 ? 1 : 0, base = mix([.08, .25, .6], [.85, .9, .95], cloud * .8);
      return shade(base, .06 + day * .85 * (.7 + r() * .3));
    },
  };
  const air: Part = { share: .15, sample: (r) => onArc((r() * 2 - 1) * arc, r() * .2), color: (r, p) => { const a = Math.asin(p[0] / R), k = .3 + .7 * Math.max(0, 1 - Math.abs(a - sunA) * 1.6); return shade([.35, .7, 1], k * (.7 + r() * .3)); } };
  const airglow: Part = { share: .05, sample: (r) => onArc((r() * 2 - 1) * arc, .46 + (r() - .5) * .05), color: (r) => shade([.35, .95, .5], .35 + r() * .2) };
  const exo: Part = { share: .12, sample: (r) => onArc((r() * 2 - 1) * arc, .55 + -Math.log(1 - r() * .97) * .9), color: (r) => shade([.45, .5, 1], .1 + r() * .25), motion: (r) => [(r() - .5) * .25, (r() - .5) * .25, 0, r() * TAU] };
  const sunC = onArc(sunA, .05);
  const sun: Part = {
    share: .1,
    sample: (r) => {
      const k = r();
      if (k < .45) { const a = r() * TAU, d = Math.pow(r(), 2) * .45; return [sunC[0] + Math.cos(a) * d, sunC[1] + Math.sin(a) * d, sunC[2] + .2]; }
      if (k < .75) { const a = Math.floor(r() * 8) * TAU / 8 + .2, d = r() ** 1.6 * 2.8; return [sunC[0] + Math.cos(a) * d, sunC[1] + Math.sin(a) * d, sunC[2] + .2]; }
      return onArc(sunA + (r() - .5) * .3 * r(), .1 + r() * .15); // glare along the limb
    },
    color: (r) => mix([1, .97, .9], [1, .75, .35], r() * .6),
  };
  return build(n, view, 43, [surface, air, airglow, exo, sun], [0, 0, 0], [12.5, 6.6], .9);
}

// ---------- ALMA: 66 antennas on the Chajnantor plateau, under the Milky Way ----------
export function alma(n: number, view: View): Shape {
  const ground = -1.4, el = .62, az = -.35, dir = norm([Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)]);
  const rnd = (() => { let a = 7; return () => (a = (a * 16807) % 2147483647) / 2147483647; })();
  const sites: V3[] = [];
  for (let i = 0; i < 34; i++) { const tight = i < 22, x = tight ? (rnd() * 2 - 1) * 3.6 : (rnd() * 2 - 1) * 6.5, z = tight ? -.8 - rnd() * 4.2 : -1 - rnd() * 6; sites.push([x, ground + .95, z]); }
  const dishes: Part = {
    share: .19,
    sample: (r) => {
      const c = sites[Math.floor(r() * sites.length)], a = r() * TAU, rr = .46 * Math.sqrt(r()), depth = (rr / .46) ** 2 * .16;
      if (r() < .12) return line(ring(c, dir, .4, Math.floor(r() * 4) * TAU / 4 + .4), add(c, dir, .45), .01)(r); // the four struts to the subreflector
      return add(ring(c, dir, rr, a), dir, depth);
    },
    color: (r) => shade([.95, .95, .97], .3 + r() * .45),
  };
  const mounts: Part = { share: .07, sample: (r) => { const c = sites[Math.floor(r() * sites.length)]; return r() < .6 ? ring([c[0], ground + r() * .78, c[2]], [0, 1, 0], .1, r() * TAU) : box([c[0], ground + .82, c[2]], [.16, .1, .12])(r); }, color: tone([.7, .7, .72], [.9, .9, .92], .5) };
  const plateau: Part = { share: .12, sample: (r) => [(r() * 2 - 1) * 7.5, ground + (r() - .5) * .05, 2.5 - Math.pow(r(), .7) * 10], color: (r) => shade([.42, .32, .24], .25 + r() * .25) };
  const ridge = (x: number) => .5 + .45 * Math.sin(x * .9) + .25 * Math.sin(x * 2.3 + 1) + 2.6 * Math.max(0, 1 - Math.abs(x - 3.6) / 1.6); // with Licancabur's cone
  const mountains: Part = { share: .09, sample: (r) => { const x = (r() * 2 - 1) * 8, top = ground + ridge(x), y = r() < .4 ? top : ground + r() * (top - ground); return [x, y, -8.5]; }, color: (r, p) => shade([.32, .22, .33], .25 + .35 * (p[1] > ground + ridge(p[0]) - .05 ? 1 : r() * .5)) };
  const galaxy: Part = { // the Milky Way: a dense band, a dark dust lane, and a bright core
    share: .26,
    sample: (r) => {
      const t = r(), core = r() < .25, a: V3 = [-8, 6.2, -9.5], b: V3 = [8, 1.4, -9.5], p = lerp3(a, b, core ? .62 + (r() - .5) * .18 : t);
      p[1] += Math.sin((core ? .62 : t) * Math.PI) * 1.2; // a gentle arc
      let off = (r() + r() + r() - 1.5) * (core ? 1.5 : 1.05);
      if (Math.abs(off - .1) < .12 && r() < .8) off += .3; // dust lane
      return [p[0] - off * .29, p[1] + off * .96, p[2]];
    },
    color: (r) => r() < .2 ? shade([1, .82, .55], .4 + r() * .5) : shade([.75, .78, 1], .2 + r() * .5),
  };
  const clouds: Part = { share: .02, sample: (r) => { const c: V3 = r() < .6 ? [-5.2, 4.6, -9] : [-3.9, 5.3, -9]; const a = r() * TAU, d = r() * .45; return [c[0] + Math.cos(a) * d, c[1] + Math.sin(a) * d * .7, c[2]]; }, color: (r) => shade([.8, .82, 1], .3 + r() * .3) };
  return build(n, view, 44, [dishes, mounts, plateau, mountains, galaxy, clouds], [.3, 0, 0], [12, 7.4], -.9);
}

// ---------- Halley VI, Antarctica: modules on legs and skis, under the aurora ----------
export function halley(n: number, view: View): Shape {
  const mods = Array.from({ length: 8 }, (_, i) => ({ x: -3.6 + i * 1.03, red: i === 4 }));
  const dims = (m: { red: boolean }) => (m.red ? [.56, .5, .36] : [.46, .3, .3]) as V3; // half-extents
  const modules: Part = {
    share: .34,
    sample: (r) => {
      const m = mods[Math.floor(r() * mods.length)], h = dims(m), c: V3 = [m.x, h[1], 0];
      if (m.red && r() < .25) { const t = r(); return [m.x + (r() * 2 - 1) * h[0], 2 * h[1] + t * .22, (r() * 2 - 1) * h[2] * (1 - t)]; } // roof
      return box(c, h)(r);
    },
    color: (r, p) => { const m = mods.reduce((a, b) => (Math.abs(b.x - p[0]) < Math.abs(a.x - p[0]) ? b : a)); return shade(m.red ? [.88, .14, .1] : [.16, .42, .88], .55 + r() * .45); },
  };
  const windows: Part = { share: .04, sample: (r) => { const m = mods[Math.floor(r() * mods.length)], h = dims(m); return [m.x + Math.round((r() * 2 - 1) * 3) * h[0] / 4, h[1] * (m.red ? 1.2 : 1.05), h[2] + .01]; }, color: () => [1, .85, .5] };
  const legs: Part = {
    share: .1,
    sample: (r) => {
      const m = mods[Math.floor(r() * mods.length)], h = dims(m), cx = m.x + (r() < .5 ? -1 : 1) * h[0] * .7, cz = (r() < .5 ? -1 : 1) * h[2] * .8;
      return r() < .7 ? line([cx, 0, cz], [cx, -1.25, cz], .02)(r) : line([cx - .22, -1.27, cz], [cx + .22, -1.27, cz], .02)(r); // leg, then ski
    },
    color: tone([.3, .3, .32], [.55, .55, .58], .5),
  };
  const links: Part = { share: .03, sample: (r) => { const i = Math.floor(r() * 7), x = mods[i].x + .5; return box([x, .28, 0], [.08, .12, .12])(r); }, color: tone([.4, .4, .44], [.6, .6, .62]) };
  const ice: Part = { share: .12, sample: (r) => [(r() * 2 - 1) * 7.5, -1.3 + (r() - .5) * .04, 3 - Math.pow(r(), .7) * 9], color: (r) => shade([.8, .88, 1], .15 + r() * .25) };
  const aurora: Part = { // curtains: bright green at the foot, fading to violet; they ripple sideways
    share: .3,
    sample: (r) => { const band = Math.floor(r() * 3), x = (r() * 2 - 1) * 7.5, z = -4 - band * 1.6 + Math.sin(x * .45 + band) * 1.4, foot = 1.4 + band * .3 + .3 * Math.sin(x * .8), h = Math.pow(r(), 1.8) * (1.8 + .9 * Math.sin(x * .6 + band * 2)); return [x, foot + h, z]; },
    color: (r, p) => { const t = Math.min(1, Math.max(0, (p[1] - 1.5) / 2.4)); return shade(mix([.25, 1, .5], [.62, .3, .95], t * t), (.75 - t * .45) * (.5 + r() * .5)); },
    motion: (_r, p) => [.18, 0, .25, ((p[0] * 1.3) % TAU + TAU) % TAU],
  };
  return build(n, view, 45, [modules, windows, legs, links, ice, aurora], [.14, -.35, 0], [9.6, 6.2], -.3);
}

// ---------- Sphere, Las Vegas: the eyeball, on 1.2 million LED pucks ----------
// Not certain — verify the puck count against Sphere Entertainment's figures.
export function sphereVegas(n: number, view: View): Shape {
  const R = 2.3, C: V3 = [0, .45, 0], eye = norm([0, .08, 1]), M = 9000;
  const lattice = (k: number): V3 => { const y = 1 - (k + .5) / M * 2, rr = Math.sqrt(1 - y * y), th = k * 2.399963; return [Math.cos(th) * rr, y, Math.sin(th) * rr]; };
  const up: V3 = [0, 1, 0], ex = norm(cross(up, eye)), ey = cross(eye, ex);
  const shell: Part = {
    share: .82,
    sample: (r) => { const d = lattice(Math.floor(r() * M)); return [C[0] + d[0] * R, C[1] + d[1] * R, C[2] + d[2] * R]; },
    color: (r, p) => {
      const d = norm([p[0] - C[0], p[1] - C[1], p[2] - C[2]]), a = Math.acos(Math.max(-1, Math.min(1, d[0] * eye[0] + d[1] * eye[1] + d[2] * eye[2])));
      const phi = Math.atan2(d[0] * ey[0] + d[1] * ey[1] + d[2] * ey[2], d[0] * ex[0] + d[1] * ex[1] + d[2] * ex[2]);
      const hl = Math.hypot(a * Math.cos(phi) + .22, a * Math.sin(phi) - .22);
      if (hl < .1) return [1, 1, 1]; // the wet highlight
      if (a < .27) return [.03, .03, .05]; // pupil
      if (a < .72) { const streak = .7 + .3 * Math.sin(phi * 38 + Math.sin(phi * 7) * 2); return shade(mix([1, .72, .25], [.2, .7, 1], (a - .27) / .45), streak * 1.5); } // iris
      if (a < .79) return [.05, .1, .2]; // limbal ring
      const vein = a > .95 && Math.sin(phi * 9 + a * 11) > .985 ? 1 : 0;
      const back = a > 1.35 ? .06 : 1; // the far side stays dim so it doesn't wash out the eye
      return shade(vein ? [.85, .16, .16] : [.96, .95, .92], back * (.5 + r() * .2));
    },
  };
  const base: Part = { share: .06, sample: (r) => r() < .5 ? ring([0, C[1] - R + .05, 0], [0, 1, 0], 1.6 + r() * .2, r() * TAU) : [(r() * 2 - 1) * 5, C[1] - R, (r() * 2 - 1) * 3], color: (r) => shade([.6, .6, .7], .15 + r() * .3) };
  const strip: Part = { share: .06, sample: (r) => { const x = (r() < .5 ? -1 : 1) * (3.3 + r() * 2.5), top = C[1] - R + 1 + Math.abs(Math.sin(x * 3.1)) * 3; return [Math.round(x * 6) / 6, C[1] - R + r() * (top - (C[1] - R)), -3.5]; }, color: (r) => r() < .15 ? [1, .8, .45] : shade([.4, .45, .7], .15 + r() * .25) };
  return build(n, view, 46, [shell, base, strip], [0, 0, 0], [6.6, 6.4], -.2);
}

// ---------- Sydney Opera House: shells cut from one sphere ----------
export function opera(n: number, view: View): Shape {
  type Shell = { x: number; z: number; H: number; wd: number; face: number };
  const hall = (z: number, k: number, dx: number): Shell[] => [[-2.4, 2.3, 1.55, -1], [-1.45, 2.05, 1.4, -1], [-.6, 1.7, 1.2, -1], [.05, 1.05, .9, 1]].map(([x, H, wd, face]) => ({ x: x * k + dx, z, H: H * k, wd: wd * k, face }));
  const shells = [...hall(0, 1, 0), ...hall(-2.25, .86, .35), { x: -3.6, z: 1.9, H: .85, wd: .45, face: -1 }, { x: -3.15, z: 1.9, H: .6, wd: .35, face: 1 }];
  const area = shells.map((s) => s.H * s.wd), total = area.reduce((a, b) => a + b, 0);
  const pick = (r: () => number) => { let u = r() * total; for (let i = 0; i < shells.length; i++) if ((u -= area[i]) < 0) return shells[i]; return shells[0]; };
  const sail = (r: () => number, s: Shell): V3 => {
    const edge = r() < .3, u = Math.pow(r(), .8), v = edge ? (r() < .66 ? (r() < .5 ? -1 : 1) : 0) : r() * 2 - 1;
    const w = s.wd * Math.pow(1 - u, .55), bulge = .3 * s.H * (1 - v * v) * Math.sin(Math.PI * u * .9);
    return [s.x + s.face * (s.H * .42 * Math.pow(u, 1.6) + bulge), u * s.H * (1 - .22 * v * v), s.z + v * w];
  };
  const tiles: Part = {
    share: .6,
    sample: (r) => sail(r, pick(r)),
    color: (r, p) => shade([.98, .96, .9], (.62 + .3 * (((p[1] * 9 + Math.abs(p[2]) * 6) % 1) > .5 ? 1 : 0)) * (.8 + r() * .2)), // chevron tile sheen
  };
  const podium: Part = { share: .15, sample: (r) => r() < .7 ? box([-1.1, -.32, -.2], [2.8, .32, 3.1])(r) : [1.7 + r() * .9, -.64 + r() * .64 * (1 - r()), (r() * 2 - 1) * 2.4], color: tone([.58, .45, .33], [.75, .6, .45], .45) };
  const water: Part = {
    share: .14,
    sample: (r) => { if (r() < .55) { const s = sail(r, pick(r)); return [s[0] + (r() - .5) * .12, -1.3 - s[1] * .55, s[2] + 1.6]; } return [(r() * 2 - 1) * 7, -.7 - r() * 1.6, 3.5 - r() * 8]; }, // reflections, then the harbour
    color: (r, p) => (p[1] < -.75 && r() < .5 ? shade([.6, .65, .75], .12 + r() * .15) : shade([.15, .3, .55], .1 + r() * .2)),
    motion: (r) => [.06, 0, 0, r() * TAU],
  };
  return build(n, view, 47, [tiles, podium, water], [.24, 1.05, 0], [8, 5.8], -.2);
}

// ---------- A Chinese drone show: a dragon of lights over a river city ----------
export function drones(n: number, view: View): Shape {
  const c = (t: number): V3 => [-5.4 + 10.8 * t, 1.5 + .85 * Math.sin(TAU * (1.4 * t + .1)), 1.3 * Math.sin(TAU * .9 * t) - 1];
  const frame = (t: number) => { const T = norm(add(c(Math.min(1, t + .002)), c(Math.max(0, t - .002)), -1)), N = norm(cross(T, [0, 1, 0])), B = cross(N, T); return { T, N, B }; };
  const rad = (t: number) => .1 + .27 * Math.pow(t, .6);
  // a fixed lattice: real drones hold grid positions, which is what makes a show read as a show
  const lattice: { p: V3; t: number; kind: number }[] = [];
  for (let i = 0; i < 150; i++) {
    const t = i / 149, { N, B } = frame(t), p = c(t), r = rad(t);
    for (let k = 0; k < 12; k++) { const a = (k / 12) * TAU; lattice.push({ p: add(add(p, N, Math.cos(a) * r), B, Math.sin(a) * r), t, kind: k < 6 ? 0 : 1 }); }
    if (i % 6 === 0 && i < 140) for (let f = 1; f <= 3; f++) lattice.push({ p: add(p, frame(t).B, r + f * .09), t, kind: 2 }); // spine fins
  }
  const head = c(1), hf = frame(1);
  for (let k = 0; k < 140; k++) { const y = 1 - (k + .5) / 70, rr = Math.sqrt(Math.max(0, 1 - y * y)), th = k * 2.4; lattice.push({ p: add(add(add(head, hf.T, .32 + rr * Math.cos(th) * .38), hf.B, y * .32), hf.N, rr * Math.sin(th) * .32), t: 1, kind: 3 }); }
  for (let k = 0; k < 40; k++) { const s = k / 39, side = k % 2 ? 1 : -1; lattice.push({ p: add(add(add(head, hf.T, .1 - s * .6), hf.B, .3 + s * .7), hf.N, side * .2), t: 1, kind: 4 }); } // horns
  for (let k = 0; k < 60; k++) { const s = k / 59, side = k % 2 ? 1 : -1; lattice.push({ p: add(add(add(head, hf.T, .65 + s * 1.2), hf.B, -.15 - Math.sin(s * 3) * .35), hf.N, side * (.25 + s * .5)), t: 1, kind: 4 }); } // whiskers
  for (const side of [-1, 1]) lattice.push({ p: add(add(add(head, hf.T, .55), hf.B, .12), hf.N, side * .2), t: 1, kind: 5 }); // eyes
  let picked = lattice[0];
  const dragon: Part = {
    share: .62,
    sample: (r) => { const d = (picked = lattice[Math.floor(r() * lattice.length)]); return [d.p[0] + (r() - .5) * .02, d.p[1] + (r() - .5) * .02, d.p[2] + (r() - .5) * .02]; },
    color: (r) => {
      const d = picked; // build() calls color() right after sample(), so this is the drone just placed — O(1)
      if (d.kind === 5) return [1, 1, 1];
      if (d.kind === 4) return [.4, .9, 1];
      if (d.kind === 2) return [1, .25, .15];
      const scale = d.kind === 1 ? .75 : 1; return shade(mix([1, .22, .14], [1, .78, .28], Math.min(1, d.t * 1.3)), scale * (.85 + r() * .15));
    },
    motion: (_r, p) => [0, .1, .06, ((p[0] + 5.4) / 10.8 * 18) % TAU], // a wave travels down the body
  };
  const skyline: Part = {
    share: .16,
    sample: (r) => { const x = Math.round(((r() * 2 - 1) * 7.5) * 5) / 5, top = -2.8 + 1.1 + Math.abs(Math.sin(x * 1.7) * Math.cos(x * .53)) * 2.4; return [x + (r() - .5) * .16, -2.8 + Math.round(r() * (top + 2.8) * 8) / 8, -4 - (Math.abs(Math.sin(x * 4.1)) * 1.5)]; },
    color: (r) => (r() < .3 ? shade([1, .85, .55], .5 + r() * .4) : shade([.4, .55, 1], .15 + r() * .3)),
  };
  const river: Part = {
    share: .12,
    sample: (r) => { const d = lattice[Math.floor(r() * lattice.length)]; return r() < .6 ? [d.p[0] + (r() - .5) * .3, -3.1 - (d.p[1] + 1.5) * .35, d.p[2] + 1] : [(r() * 2 - 1) * 7.5, -3.1 - r() * .9, 1 - r() * 4]; },
    color: (r) => (r() < .5 ? shade([1, .6, .25], .12 + r() * .15) : shade([.3, .45, .8], .08 + r() * .12)),
    motion: (r) => [.12, 0, 0, r() * TAU],
  };
  return build(n, view, 48, [dragon, skyline, river], [.05, .15, 0], [12.5, 7.6], .45);
}

export const MARVEL_SHAPES = { v12, starship, exosphere, alma, halley, sphere: sphereVegas, opera, drones } as const;
export type MarvelId = keyof typeof MARVEL_SHAPES;
