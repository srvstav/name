// Point-cloud builders for the intro: James Webb, Voyager 1, a microchip, text, and a fuzzy "huddle".
// Each builder spends its particle budget by area fraction, then rotates and scales to fit the viewport.
import { prng, type RGB, type Shape } from './field';

export type V3 = [number, number, number];
export type V4 = [number, number, number, number];
export type Part = { share: number; sample: (r: () => number) => V3; color: (r: () => number, p: V3) => RGB; motion?: (r: () => number, p: V3) => V4 };
export type View = { w: number; h: number };

/** Where objects sit on screen. The intro uses the whole frame; the hero reel uses a smaller stage above the name. */
export const stage = { k: 1, ox: 0, oy: 0 };

export const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
export const lerp3 = (a: V3, b: V3, t: number): V3 => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
export const GOLD: RGB = [1, .7, .26], DEEP_GOLD: RGB = [.8, .46, .12], BONE: RGB = [.93, .91, .86], STEEL: RGB = [.5, .52, .56];

export function rotate([x, y, z]: V3, rx: number, ry: number, rz = 0): V3 {
  let c = Math.cos(rz), s = Math.sin(rz); [x, y] = [x * c - y * s, x * s + y * c];
  c = Math.cos(ry); s = Math.sin(ry); [x, z] = [x * c + z * s, -x * s + z * c];
  c = Math.cos(rx); s = Math.sin(rx); [y, z] = [y * c - z * s, y * s + z * c];
  return [x, y, z];
}

/** Fill n points across parts by share; leftover becomes faint dust. `fit` = object width (or [width, height])
 *  in world units at scale 1. Parts with `motion` get their own life after they settle (see Shape.mo). */
export function build(n: number, view: View, seed: number, parts: Part[], rot: V3, fit: number | [number, number], oy = 0): Shape {
  const r = prng(seed), pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  const [fw, fh] = typeof fit === 'number' ? [fit, fit * .72] : fit;
  const s = Math.min(1, (view.w * .86) / fw, (view.h * .8) / fh) * stage.k;
  const moving = parts.some((p) => p.motion), mo = moving ? new Float32Array(n * 4).fill(-1) : undefined;
  const cum: number[] = []; parts.reduce((a, p) => (cum.push(a + p.share), a + p.share), 0);
  for (let i = 0; i < n; i++) {
    const u = r(), pi = cum.findIndex((c) => u < c);
    if (pi < 0) { // dust: the rest of the sky
      pos.set([(r() - .5) * view.w * 1.7, (r() - .5) * view.h * 1.7, -3 - r() * 8], i * 3);
      const b = .08 + r() * .14; col.set([b, b, b * 1.1], i * 3); continue;
    }
    const part = parts[pi], p = part.sample(r), c = part.color(r, p), q = rotate(p, rot[0], rot[1], rot[2]);
    pos.set([q[0] * s + stage.ox, (q[1] + oy) * s + stage.oy, q[2] * s], i * 3); col.set(c, i * 3);
    if (mo && part.motion) { const m = part.motion(r, p), d = rotate([m[0], m[1], m[2]], rot[0], rot[1], rot[2]); mo.set([d[0] * s, d[1] * s, d[2] * s, m[3]], i * 4); }
  }
  return { pos, col, mo };
}

export const line = (a: V3, b: V3, jit = .015) => (r: () => number): V3 => { const p = lerp3(a, b, r()); return [p[0] + (r() - .5) * jit, p[1] + (r() - .5) * jit, p[2] + (r() - .5) * jit]; };
export const box = (c: V3, h: V3) => (r: () => number): V3 => {
  const face = Math.floor(r() * 3), sign = r() < .5 ? -1 : 1, p: V3 = [(r() * 2 - 1) * h[0], (r() * 2 - 1) * h[1], (r() * 2 - 1) * h[2]];
  p[face] = sign * h[face];
  return [c[0] + p[0], c[1] + p[1], c[2] + p[2]];
};
export const tone = (a: RGB, b: RGB, lo = .6) => (r: () => number): RGB => { const k = lo + r() * (1 - lo); return mix(a, b, r()).map((v) => v * k) as RGB; };

// ---------- James Webb: 18 gold hexagons, three struts, a five-layer sunshield ----------
export function webb(n: number, view: View): Shape {
  const R = .52, g = .93, hexes: [number, number][] = [];
  for (let q = -2; q <= 2; q++) for (let rr = -2; rr <= 2; rr++) {
    const d = Math.max(Math.abs(q), Math.abs(rr), Math.abs(q + rr));
    if (d === 1 || d === 2) hexes.push([R * Math.sqrt(3) * (q + rr / 2), R * 1.5 * rr]); // 6 + 12 = 18
  }
  const lift = .55, sec: V3 = [0, lift, 2.5];
  const mirror: Part = {
    share: .52,
    sample: (r) => {
      const [cx, cy] = hexes[Math.floor(r() * hexes.length)];
      let x = 0, y = 0;
      do { x = (r() * 2 - 1) * R * g * .866; y = (r() * 2 - 1) * R * g; } while (Math.abs(y) + Math.abs(x) / Math.sqrt(3) > R * g);
      const px = cx + x, py = cy + y;
      return [px, py + lift, (px * px + py * py) * .045];
    },
    color: (r, p) => mix(GOLD, DEEP_GOLD, Math.min(1, Math.hypot(p[0], p[1] - lift) / 2.3 + r() * .25)).map((v) => v * (.75 + r() * .3)) as RGB,
  };
  const struts: Part = {
    share: .06,
    sample: (r) => { const ends: V3[] = [[0, lift + 2.15, .2], [-1.86, lift - 1.08, .2], [1.86, lift - 1.08, .2]]; return line(ends[Math.floor(r() * 3)], sec)(r); },
    color: tone(STEEL, BONE, .5),
  };
  const secondary: Part = { share: .02, sample: (r) => { const a = r() * 6.283, d = Math.sqrt(r()) * .2; return [sec[0] + Math.cos(a) * d, sec[1] + Math.sin(a) * d, sec[2]]; }, color: () => GOLD };
  const hexShield = [[-4.2, 0], [-2.3, 2], [2.3, 2], [4.2, 0], [2.3, -2], [-2.3, -2]];
  const inPoly = (x: number, z: number) => { let ins = false; for (let i = 0, j = 5; i < 6; j = i++) { const [xi, zi] = hexShield[i], [xj, zj] = hexShield[j]; if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) ins = !ins; } return ins; };
  const shield: Part = {
    share: .32,
    sample: (r) => { let x = 0, z = 0; do { x = (r() * 2 - 1) * 4.2; z = (r() * 2 - 1) * 2; } while (!inPoly(x, z)); const layer = Math.floor(r() * 5); return [x * (1 - layer * .03), -1.95 - layer * .1, z * (1 - layer * .03) - .2]; },
    color: (r) => mix([.62, .5, .62], [.82, .72, .8], r()).map((v) => v * (.35 + r() * .3)) as RGB,
  };
  const bus: Part = { share: .06, sample: (r) => box([0, -1.35, -.3], [.45, .55, .35])(r), color: tone([.35, .33, .3], [.55, .5, .42]) };
  return build(n, view, 11, [mirror, struts, secondary, shield, bus], [.38, -.55, 0], 8.6, .1);
}

// ---------- Voyager 1: the dish, a ten-sided bus, three booms, the golden record ----------
export function voyager(n: number, view: View): Shape {
  const D = 1.85, depth = .55;
  const dish: Part = {
    share: .44,
    sample: (r) => { const a = r() * 6.283, rr = D * Math.sqrt(r()); return [Math.cos(a) * rr, Math.sin(a) * rr, depth * (rr / D) ** 2]; },
    color: (r, p) => BONE.map((v) => v * (.5 + .5 * (1 - Math.hypot(p[0], p[1]) / D * .6) * (.7 + r() * .3))) as RGB,
  };
  const rim: Part = { share: .05, sample: (r) => { const a = r() * 6.283; return [Math.cos(a) * D, Math.sin(a) * D, depth + (r() - .5) * .03]; }, color: () => BONE };
  const feed: Part = {
    share: .03,
    sample: (r) => { const a = Math.floor(r() * 3) * 2.094 + .5; return line([Math.cos(a) * D * .95, Math.sin(a) * D * .95, depth], [0, 0, 1.25])(r); },
    color: tone(STEEL, BONE),
  };
  const bus: Part = {
    share: .14,
    sample: (r) => { const k = Math.floor(r() * 10), a0 = k * .628, a1 = a0 + .628, t = r(), R = .85; return r() < .75 ? [Math.cos(a0) * R * (1 - t) + Math.cos(a1) * R * t, Math.sin(a0) * R * (1 - t) + Math.sin(a1) * R * t, -.55 - r() * .45] : [(r() * 2 - 1) * .7, (r() * 2 - 1) * .7, -1]; },
    color: tone([.75, .56, .26], [.5, .4, .25]),
  };
  const record: Part = { share: .03, sample: (r) => { const a = r() * 6.283, rr = .32 * Math.sqrt(r()); return [.9, Math.cos(a) * rr - .1, -.78 + Math.sin(a) * rr]; }, color: (r) => GOLD.map((v) => v * (.8 + r() * .2)) as RGB };
  const mag: Part = { share: .05, sample: line([-.4, .6, -.9], [-6, 4.3, -2.4], .01), color: tone(STEEL, BONE, .35) };
  const rtgEnd: V3 = [-2.9, -1.2, -1];
  const rtg: Part = {
    share: .1,
    sample: (r) => {
      if (r() < .3) return line([-.6, -.4, -.8], rtgEnd)(r);
      const k = Math.floor(r() * 3), c = lerp3([-1.7, -.75, -.9], rtgEnd, k / 2.4), a = r() * 6.283;
      return [c[0] + (r() - .5) * .45, c[1] + Math.cos(a) * .17, c[2] + Math.sin(a) * .17];
    },
    color: tone([.45, .42, .4], [.7, .65, .58]),
  };
  const sciEnd: V3 = [2.8, -1, -.9];
  const sci: Part = { share: .1, sample: (r) => (r() < .35 ? line([.6, -.4, -.8], sciEnd)(r) : box(sciEnd, [.32, .26, .22])(r)), color: tone(STEEL, [.8, .6, .3]) };
  return build(n, view, 12, [dish, rim, feed, bus, record, mag, rtg, sci], [-.18, .55, .05], 8, .2);
}

// ---------- A microchip: silicon die with Manhattan traces on a package with gold pins ----------
export function chip(n: number, view: View): Shape {
  const H = 1.6, P = 2.3, grid = .065;
  const hash = (a: number, b: number) => { const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return s - Math.floor(s); };
  const die: Part = {
    share: .56,
    sample: (r) => { // points snap onto a fine grid in x OR y → reads as wiring
      const x = (r() * 2 - 1) * H, y = (r() * 2 - 1) * H;
      return r() < .5 ? [Math.round(x / grid) * grid, y, .06] : [x, Math.round(y / grid) * grid, .06];
    },
    color: (r, p) => { const b = hash(Math.floor((p[0] + H) / .4), Math.floor((p[1] + H) / .4)); return (b > .82 ? mix(GOLD, BONE, r() * .4) : mix([.38, .48, .7], [.62, .72, .9], b)).map((v) => v * (.55 + r() * .45)) as RGB; },
  };
  const edge: Part = { share: .06, sample: (r) => { const t = r() * 2 - 1, s = r() < .5 ? -1 : 1; return r() < .5 ? [t * H, s * H, .06] : [s * H, t * H, .06]; }, color: () => BONE };
  const pkg: Part = { share: .16, sample: (r) => [(r() * 2 - 1) * P, (r() * 2 - 1) * P, -.08], color: (r) => [.12, .16, .14].map((v) => v * (.6 + r() * .6)) as RGB };
  const pins: Part = {
    share: .18,
    sample: (r) => {
      const k = Math.floor(r() * 24), t = ((k + .5) / 24) * 2 - 1, side = Math.floor(r() * 4), along = t * P * .92 + (r() - .5) * .08, out = P + r() * .45;
      const pt: V3 = side === 0 ? [along, out, -.1] : side === 1 ? [along, -out, -.1] : side === 2 ? [out, along, -.1] : [-out, along, -.1];
      return pt;
    },
    color: (r) => GOLD.map((v) => v * (.6 + r() * .4)) as RGB,
  };
  return build(n, view, 13, [die, edge, pkg, pins], [-.95, 0, .35], 6.4, -.1);
}

/** Rasterise text on a 2D canvas, sample lit pixels → world positions. `fill` share forms glyphs; rest is dust. */
export function text(n: number, view: View, lines: string[], font: (px: number) => string, a: RGB, b: RGB, fill = .82, seed = 21, maxW = .84): Shape {
  const r = prng(seed), W = 1400, H = Math.round(W * view.h / view.w);
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const g = cv.getContext('2d', { willReadFrequently: true });
  if (!g) throw new Error('2D canvas unavailable');
  let px = H / (lines.length * 1.3);
  g.font = font(px);
  const widest = Math.max(...lines.map((l) => g.measureText(l).width));
  px = Math.min(px, px * (W * maxW) / widest);
  g.font = font(px); g.fillStyle = '#fff'; g.textBaseline = 'middle'; g.textAlign = 'center';
  lines.forEach((l, i) => g.fillText(l, W / 2, H / 2 + (i - (lines.length - 1) / 2) * px * 1.05));
  const data = g.getImageData(0, 0, W, H).data, hits: number[] = [];
  for (let y = 0; y < H; y += 2) for (let x = 0; x < W; x += 2) if (data[(y * W + x) * 4 + 3] > 128) hits.push(x, y);
  const m = hits.length / 2, pos = new Float32Array(n * 3), col = new Float32Array(n * 3), sx = view.w / W;
  for (let i = 0; i < n; i++) {
    if (m && r() < fill) {
      const k = Math.floor(r() * m) * 2, x = hits[k], y = hits[k + 1];
      pos.set([(x - W / 2) * sx + (r() - .5) * sx * 1.4, -(y - H / 2) * sx + (r() - .5) * sx * 1.4, (r() - .5) * .15], i * 3);
      col.set(mix(a, b, Math.min(1, Math.max(0, x / W + (r() - .5) * .2))), i * 3);
    } else {
      pos.set([(r() - .5) * view.w * 1.7, (r() - .5) * view.h * 1.7, -3 - r() * 8], i * 3);
      const k = .07 + r() * .12; col.set([k, k, k * 1.1], i * 3);
    }
  }
  return { pos, col };
}

/** A loose, breathing cloud near the centre — the dots gathering before they know what to become. */
export function huddle(n: number, view: View): Shape {
  const r = prng(31), pos = new Float32Array(n * 3), col = new Float32Array(n * 3), s = Math.min(1, view.w / 9);
  for (let i = 0; i < n; i++) {
    const a = r() * 6.283, b = Math.acos(2 * r() - 1), rr = (.4 + r() ** 1.8 * 3.6) * s;
    pos.set([Math.sin(b) * Math.cos(a) * rr * 1.5, Math.cos(b) * rr * .8, Math.sin(b) * Math.sin(a) * rr], i * 3);
    const k = .2 + r() * .5; col.set(r() < .05 ? [k, k * .7, k * .3] : [k * .8, k * .82, k * .9], i * 3);
  }
  return { pos, col };
}
