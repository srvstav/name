// "Home": a scroll-scrubbed pull-back from a full Earth to a sub-pixel dot in a band of scattered sunlight,
// after Voyager 1's Pale Blue Dot (14 Feb 1990). Drawn on a 2D canvas — an interpretation, not the photo.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prng } from '../gl/field';

const smooth = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function createPaleBlue(section: HTMLElement, canvas: HTMLCanvasElement, lines: HTMLElement[], here: HTMLElement) {
  const g = canvas.getContext('2d');
  if (!g) throw new Error('2D canvas unavailable');
  const STOPS = lines.map((_, i) => [0, .2, .44, .66, .86][i] ?? i / lines.length);
  let w = 0, h = 0, dpr = 1, prog = 0, dot = { x: 0, y: 0 }, lastLine = -1;

  // the Earth texture costs ~60 ms to paint: done lazily (on idle after the intro, or on first need)
  let earth: HTMLCanvasElement | null = null;
  const ensureEarth = () => (earth ??= paintEarth(512));
  let glow = 0;
  const bands = [{ x: .18, wd: .08, c: '120,86,64' }, { x: .43, wd: .11, c: '96,104,128' }, { x: .62, wd: .07, c: '150,112,82' }, { x: .83, wd: .05, c: '86,92,110' }];

  function resize() {
    dpr = Math.min(devicePixelRatio, 1.5); w = innerWidth; h = innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
    draw();
  }

  function draw() {
    if (!g) return;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.fillStyle = '#050506'; g.fillRect(0, 0, w, h);
    const z = smooth(.06, .72, prog), bandA = smooth(.3, .78, prog);
    const target = { x: w * .63, y: h * .56 };
    // sunlight scattered in the camera optics: tilted bands
    if (bandA > 0) {
      g.save(); g.translate(w / 2, h / 2); g.rotate(-.12); g.translate(-w / 2, -h / 2);
      for (const b of bands) {
        const x = b.x * w, bw = b.wd * w, grd = g.createLinearGradient(x - bw, 0, x + bw, 0);
        grd.addColorStop(0, `rgba(${b.c},0)`); grd.addColorStop(.5, `rgba(${b.c},${.32 * bandA})`); grd.addColorStop(1, `rgba(${b.c},0)`);
        g.fillStyle = grd; g.fillRect(x - bw, -h * .2, bw * 2, h * 1.4);
      }
      g.restore();
    }
    // the Earth: radius falls exponentially from a third of the screen to under a pixel
    const R0 = Math.min(w, h) * .32, r = R0 * Math.pow(.45 / R0, z);
    const cx = w / 2 + (target.x - w / 2) * z, cy = h / 2 + (target.y - h / 2) * z;
    dot = { x: cx, y: cy };
    if (r > 1.6) {
      const halo = g.createRadialGradient(cx, cy, r * .9, cx, cy, r * 1.25);
      halo.addColorStop(0, 'rgba(120,170,255,.35)'); halo.addColorStop(1, 'rgba(120,170,255,0)');
      g.fillStyle = halo; g.beginPath(); g.arc(cx, cy, r * 1.25, 0, 6.283); g.fill();
      g.drawImage(ensureEarth(), cx - r, cy - r, r * 2, r * 2);
    } else {
      const gr = 5 + glow * 9, halo = g.createRadialGradient(cx, cy, 0, cx, cy, gr); // the dot breathes with the music
      halo.addColorStop(0, `rgba(185,211,255,${.55 + glow * .3})`); halo.addColorStop(1, 'rgba(185,211,255,0)');
      g.fillStyle = halo; g.beginPath(); g.arc(cx, cy, gr, 0, 6.283); g.fill();
      g.fillStyle = '#d6e6ff'; g.beginPath(); g.arc(cx, cy, Math.max(.7, r), 0, 6.283); g.fill();
    }

    // captions: one at a time, in step with the pull-back
    let li = 0; STOPS.forEach((s, i) => { if (prog >= s) li = i; });
    if (li !== lastLine) { lines.forEach((l, i) => l.classList.toggle('is-on', i === li)); lastLine = li; }
    const hk = smooth(.8, .9, prog);
    here.style.opacity = String(hk);
    here.style.transform = `translate3d(${cx + 14}px, ${cy - 30}px, 0)`;
  }

  const st = ScrollTrigger.create({
    trigger: section, pin: section.querySelector<HTMLElement>('.pale__pin') ?? true, start: 'top top', end: '+=330%', scrub: true,
    onUpdate: (s) => { prog = s.progress; draw(); },
    onRefresh: () => draw(),
  });
  addEventListener('resize', () => gsap.delayedCall(.1, resize));
  resize();

  return {
    st,
    prepare: ensureEarth,
    /** Music level → glow on the final dot. Redraws only while the dot is on screen. */
    setGlow(v: number) { if (Math.abs(v - glow) < .01) return; glow = v; if (st.isActive && prog > .6) draw(); },
    stops: STOPS,
    get dot() { return dot; },
  };
}

// ---------- a procedural Earth, painted once: fBm continents + clouds, lit from the upper left ----------
function paintEarth(N: number) {
  const cv = document.createElement('canvas'); cv.width = cv.height = N;
  const g = cv.getContext('2d');
  if (!g) return cv;
  const img = g.createImageData(N, N), d = img.data, r = prng(17), P = new Uint8Array(512);
  const perm = Array.from({ length: 256 }, (_, i) => i);
  for (let i = 255; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; }
  for (let i = 0; i < 512; i++) P[i] = perm[i & 255];
  const fade = (t: number) => t * t * (3 - 2 * t);
  const h3 = (x: number, y: number, z: number) => P[P[P[x & 255] + (y & 255)] + (z & 255)] / 255;
  const vnoise = (x: number, y: number, z: number) => { // 3D value noise, trilinear
    const X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z), u = fade(x - X), v = fade(y - Y), w = fade(z - Z);
    const l = (a: number, b: number, t: number) => a + (b - a) * t;
    return l(l(l(h3(X, Y, Z), h3(X + 1, Y, Z), u), l(h3(X, Y + 1, Z), h3(X + 1, Y + 1, Z), u), v),
             l(l(h3(X, Y, Z + 1), h3(X + 1, Y, Z + 1), u), l(h3(X, Y + 1, Z + 1), h3(X + 1, Y + 1, Z + 1), u), v), w);
  };
  const fbm = (x: number, y: number, z: number, o: number) => { let s = 0, a = .5, f = 1; for (let i = 0; i < o; i++) { s += vnoise(x * f, y * f, z * f) * a; a *= .5; f *= 2.03; } return s; };
  const sun = [-.62, -.48, .62], sl = Math.hypot(...sun); sun.forEach((_, i) => (sun[i] /= sl));
  // O(N²·octaves) ≈ 260k px × 9 noise calls — runs once, ~60 ms
  for (let py = 0; py < N; py++) for (let px = 0; px < N; px++) {
    const x = (px + .5) / N * 2 - 1, y = (py + .5) / N * 2 - 1, rr2 = x * x + y * y, k = (py * N + px) * 4;
    if (rr2 > 1) { d[k + 3] = 0; continue; }
    const z = Math.sqrt(1 - rr2), sp = 2.2;
    const land = fbm(x * sp + 4, y * sp + 1.3, z * sp, 5);
    const cloud = fbm(x * 3.4 + 9, y * 6.5, z * 3.4 + 2, 4); // stretched in y → banded weather
    const lit = Math.max(0, x * sun[0] + y * sun[1] + z * sun[2]);
    const day = Math.pow(lit, .75), rim = Math.pow(1 - z, 3);
    const deep = Math.min(1, Math.max(0, (.53 - land) * 5)), t = Math.min(1, Math.max(0, (land - .53) * 6));
    const ocean = [20 - deep * 8, 62 - deep * 22, 140 - deep * 30], ground = [70 + t * 60, 92 + t * 30, 52 + t * 10];
    const shore = fade(Math.min(1, Math.max(0, (land - .515) / .03))); // soft coastlines
    let c = ocean.map((v, i) => v + (ground[i] - v) * shore);
    const ice = fade(Math.min(1, Math.max(0, (Math.abs(y) + (land - .5) * .5 - .8) / .08))); // ragged polar caps
    c = c.map((v) => v + (232 - v) * ice);
    const cl = Math.max(0, Math.min(1, (cloud - .5) * 3.2));
    c = c.map((v) => v + (245 - v) * cl);
    for (let i = 0; i < 3; i++) d[k + i] = Math.min(255, c[i] * (.04 + day * 1.05) + [90, 150, 255][i] * rim * (.25 + lit * .9));
    d[k + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return cv;
}
