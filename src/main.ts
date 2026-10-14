import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './fonts.css';
import './style.css';
import { createScore } from './audio';
import { Field, scatter, type RGB, type Shape } from './gl/field';
import { webb, voyager, chip, text, huddle } from './gl/shapes';
import { beats, contact, marvels, principles, projects, type Beat, type Marvel } from './content';
import { voyagerKm, lightSeconds, fmtKm, fmtDuration } from './space';
import { createReticle } from './ui/reticle';
import { createOrbit } from './ui/orbit';
import { createPaleBlue } from './ui/paleblue';
import { createReel } from './ui/reel';
import { createAutopilot, type Cue, type PilotState } from './ui/autopilot';

gsap.registerPlugin(ScrollTrigger);

const $ = <T extends Element = HTMLElement>(s: string, root: ParentNode = document) => {
  const el = root.querySelector<T>(s);
  if (!el) throw new Error(`Missing element: ${s}`);
  return el;
};
const $$ = <T extends Element = HTMLElement>(s: string, root: ParentNode = document) => [...root.querySelectorAll<T>(s)];
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
const store = { // per-visitor conveniences only; storage can throw in private modes
  get: (k: string) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k: string, v: string) => { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
};

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
const mobile = innerWidth < 860;
const GOLD: RGB = [1, .72, .3], BONE: RGB = [.93, .91, .86], ASH: RGB = [.5, .5, .55];
const T0 = performance.now();

// ---------- content → DOM ----------
$('#filesTrack').innerHTML = projects.map((p, i) => `
  <article class="file" data-lock="${esc(p.name)}" style="--i:${i}">
    <header class="mono"><span>${String(i + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}</span><span class="file__status file__status--${p.orbit}">${esc(p.status)}</span></header>
    <h3 class="file__name">${esc(p.name)}</h3>
    <p class="file__line">${esc(p.line)}</p>
    <p class="file__body">${esc(p.body)}</p>
    <span class="file__ghost" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
  </article>`).join('');
$('#howList').innerHTML = principles.map((p, i) => `
  <li class="how__item" data-n="${String(i + 1).padStart(2, '0')}"><h3>${esc(p.title)}</h3><p>${esc(p.body)}</p></li>`).join('');
$('#marquee').innerHTML = Array(4).fill(projects.map((p) => `<span>${esc(p.name)}</span><i>✦</i>`).join('')).join('');
const mail = $<HTMLAnchorElement>('#mail');
mail.href = `mailto:${contact.email}`; mail.textContent = contact.email;
$<HTMLAnchorElement>('#gh').href = contact.github;

const sec = (id: string) => $(`[data-cue="${id}"]`);

// ---------- particle field (fails soft: the page works without WebGL) ----------
let field: Field | null = null;
try { field = new Field($<HTMLCanvasElement>('#gl'), mobile ? 26000 : 72000); }
catch (e) { console.warn('WebGL unavailable, continuing without particles', e); document.body.classList.add('no-gl'); }

// ---------- scroll ----------
const lenis = new Lenis({ lerp: .12, wheelMultiplier: 1 });
lenis.stop();
lenis.on('scroll', ScrollTrigger.update);
const topOf = (el: HTMLElement) => el.getBoundingClientRect().top + scrollY;
const scrollTo = (y: number) => lenis.scrollTo(y, { immediate: true, force: true });

// ---------- UI systems ----------
const reticle = createReticle($('#reticle'), $('#reticleLabel'), canHover);
if (canHover) document.body.classList.add('has-reticle');
const orbit = createOrbit($<SVGSVGElement>('#orbitSvg'), $('#orbitCard'), $('#orbitLegend'), projects);

// ---------- frame loop ----------
let marqueeHalf = 0, marqueeOn = false, lvl = -1;
let last = 0, lastY = scrollY, vel = 0, frames = 0, fpsT = 0, fps = 60, slowFor = 0, kmT = 0, marqueeX = 0;
const stay = $('#stay'), marquee = $('#marquee'), clock = $('#clock'), kmEl = $('#km'), hudKm = $('#hudKm'), lightEl = $('#lightTime');
gsap.ticker.add((t) => {
  lenis.raf(t * 1000);
  const dt = Math.min(.05, Math.max(1 / 240, t - last)); last = t;
  vel += (gsap.utils.clamp(-1.5, 1.5, (scrollY - lastY) / dt / 4000) - vel) * .12; lastY = scrollY;

  reel?.frame(t, dt);
  if (field) {
    const fade = introDone ? gsap.utils.clamp(0, 1, 1 - scrollY / (innerHeight * .95)) : 1;
    field.u.uFade.value = fade; field.u.uVel.value = vel;
    field.tick(t, dt, fade > .002);
  }
  score.frame();
  const level = score.level, onset = score.onset;
  if (field) { field.u.uAudio.value = level; field.u.uOnset.value = onset; }
  reticle.frame(level); orbit.frame(dt); pilot.frame(); pale.setGlow(level);
  if (Math.abs(level - lvl) > .015) { lvl = level; document.documentElement.style.setProperty('--lvl', level.toFixed(3)); }

  marqueeX -= (40 + Math.abs(vel) * 900) * dt * (vel < -.02 ? -1 : 1);
  const half = marqueeHalf;
  if (half && marqueeOn) { marqueeX = ((marqueeX % half) - half) % half; marquee.style.transform = `translate3d(${marqueeX}px,0,0) skewX(${gsap.utils.clamp(-12, 12, -vel * 18)}deg)`; }

  if (t - kmT > .1) { // ~10 Hz is plenty for a ticking counter
    kmT = t;
    const km = voyagerKm(), s = fmtKm(km);
    kmEl.textContent = s; hudKm.textContent = s; lightEl.textContent = fmtDuration(lightSeconds(km));
    const e = Math.floor((performance.now() - T0) / 1000);
    const mins = Math.floor(e / 60), secs = e % 60;
    stay.textContent = `You have been here ${mins ? `${mins} min ` : ''}${secs} s. In that time Voyager 1 moved ${fmtKm(e * 17)} km further from home.`;
    clock.textContent = `T+${[e / 3600, (e / 60) % 60, e % 60].map((v) => String(Math.floor(v)).padStart(2, '0')).join(':')}`;
  }
  frames++;
  if (t - fpsT > 1) { // adaptive quality: sustained low FPS halves the dots once
    fps = frames; frames = 0; fpsT = t;
    slowFor = fps < 38 ? slowFor + 1 : 0;
    if (field && slowFor >= 2 && field.budget === field.n) field.setBudget(.5);
    if (instrumentOn) updateInstrument();
  }
});
gsap.ticker.lagSmoothing(0);

// ---------- intro: the dots decide what to become ----------
const FONTS = ['600 80px "Clash Display"', 'italic 300 80px "Newsreader"'];
const fontsReady = Promise.race([Promise.all(FONTS.map((f) => document.fonts.load(f))), sleep(3000)]);
const BEAT_MS: Record<Beat, number> = { huddle: 1500, webb: 3100, voyager: 3100, chip: 2800, people: 2500, name: 2700 };
let introDone = false, introEndedAt = 0, beatName: Beat | '—' = '—';
const caption = $('#caption'), beatNo = $('#beatNo');

function shapeFor(b: Beat): Shape | null {
  if (!field) return null;
  const n = field.n, v = field.view();
  switch (b) {
    case 'huddle': return huddle(n, v);
    case 'webb': return webb(n, v);
    case 'voyager': return voyager(n, v);
    case 'chip': return chip(n, v);
    case 'people': return text(n, v, mobile ? ['all made', 'by people.'] : ['all made by people.'], (p) => `italic 300 ${p}px "Newsreader"`, BONE, GOLD, .8, 22, .78);
    case 'name': return text(n, v, mobile ? ['Ayush', 'Srivastav'] : ['Ayush Srivastav'], (p) => `600 ${p}px "Clash Display"`, GOLD, BONE, .84, 23, .86);
  }
}

async function intro() {
  if (!field || reduced) { await fontsReady; return finishIntro(); }
  const hold = new URLSearchParams(location.search).get('beat') as Beat | null; // dev: ?beat=webb holds one shape
  if (hold && beats.some((b) => b.shape === hold)) {
    await fontsReady; const s = shapeFor(hold); if (!s) return;
    field.morph(s, 2.5); field.spinSpeed = .09; gsap.to(field.u.uDoubt, { value: .3, duration: 2.5 }); beatName = hold;
    return;
  }
  const list: readonly (typeof beats)[number][] = beats.filter((b) => b.shape !== 'name'); // full intro every visit; ends on "all made by people."
  for (const [i, b] of list.entries()) {
    if (introDone) return;
    if (b.shape === 'people' || b.shape === 'name') await fontsReady;
    const shape = shapeFor(b.shape);
    if (!shape || introDone) return;
    const ms = BEAT_MS[b.shape], isText = b.shape === 'people' || b.shape === 'name';
    beatName = b.shape;
    field.morph(shape, (ms / 1000) * .9, isText ? .7 : 1.1);
    gsap.fromTo(field.u.uDoubt, { value: 1 }, { value: isText ? .1 : .3, duration: ms / 1000, ease: 'power2.out' });
    if (isText) { field.spinSpeed = 0; gsap.to(field.u.uSpin, { value: Math.round(field.u.uSpin.value / (Math.PI * 2)) * Math.PI * 2, duration: 1.4, ease: 'power3.inOut' }); }
    else if (b.shape !== 'huddle') field.spinSpeed = .09;
    beatNo.textContent = `${String(i).padStart(2, '0')} / ${String(list.length - 1).padStart(2, '0')}`;
    setCaption(b.caption);
    await sleep(ms);
  }
  finishIntro();
}

function setCaption(s: string) {
  if (!s) { gsap.to(caption, { opacity: 0, duration: .4 }); return; }
  gsap.set(caption, { opacity: 1 });
  scramble(caption, s, 1.1);
}

function finishIntro() {
  if (introDone) return;
  introDone = true; introEndedAt = performance.now();
  document.body.classList.remove('is-loading');
  lenis.start();
  if (field) {
    gsap.killTweensOf(field.u.uDoubt);
    field.u.uDoubt.value = .15;
    if (reel && !reduced) reel.start(); // the name breaks apart and becomes the first marvel
    else { field.spinSpeed = .012; field.morph(scatter(field.n, field.view(), 5, ASH), 2.4, 2.5); }
  }
  heroIn();
  if (reduced) pilot.toggle(); else pilot.arm();
  const idle = window.requestIdleCallback ?? ((f: () => void) => setTimeout(f, 1200));
  idle(() => pale.prepare(), { timeout: 4000 }); // paint the Earth while nothing else is happening
}
$('#skip').addEventListener('click', finishIntro);
addEventListener('keydown', (e) => { if (!introDone && (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ')) finishIntro(); });
addEventListener('wheel', () => { if (!introDone) finishIntro(); }, { passive: true });

// ---------- text effects ----------
const GLYPHS = '·:+×*<>/\\=-01';
const scrambles = new WeakMap<Element, gsap.core.Tween>();
function scramble(el: HTMLElement, to: string, dur = .6) {
  scrambles.get(el)?.kill();
  const o = { p: 0 };
  scrambles.set(el, gsap.to(o, {
    p: 1, duration: dur, ease: 'none',
    onUpdate: () => { const k = Math.floor(o.p * to.length); el.textContent = to.slice(0, k) + [...to.slice(k, k + 12)].map((c) => (c === ' ' ? ' ' : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join(''); },
    onComplete: () => { el.textContent = to; },
  }));
}
function splitChars(el: HTMLElement) {
  const words = (el.textContent ?? '').trim().split(/\s+/);
  el.innerHTML = words.map((w) => `<span class="w">${[...w].map((c) => `<span class="ch">${esc(c)}</span>`).join('')}</span>`).join(' ');
}
function splitWords(el: HTMLElement) {
  el.innerHTML = el.innerHTML.replace(/(<em>.*?<\/em>|[^\s<]+)/g, '<span class="wd">$1</span>');
}
$$('.split').forEach(splitChars);
$$('.words').forEach(splitWords);

function heroIn() {
  gsap.fromTo('.hero__name .ch', { yPercent: 115, rotate: 6, opacity: 0 }, { yPercent: 0, rotate: 0, opacity: 1, duration: 1.05, stagger: .028, ease: 'expo.out', delay: .1 });
  gsap.fromTo('.marvel > *, .hero__foot > *, .hud, .dock', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .9, stagger: .06, delay: .35, ease: 'expo.out' });
}
gsap.set('.hud, .dock', { opacity: 0 });

// headings rise char by char as they arrive
$$('section:not(.hero) .split').forEach((h) => gsap.fromTo($$('.ch', h), { yPercent: 110 }, { yPercent: 0, stagger: .018, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 85%' } }));
$$('section:not(.hero) .kicker').forEach((k) => ScrollTrigger.create({ trigger: k, start: 'top 90%', once: true, onEnter: () => scramble(k, k.textContent ?? '', .7) }));
// words light up as you read down
$$('.words').forEach((w) => gsap.to($$('.wd', w), { opacity: 1, stagger: .1, ease: 'none', scrollTrigger: { trigger: w, start: 'top 78%', end: 'bottom 52%', scrub: true } }));
gsap.fromTo('.distance__num', { letterSpacing: '.2em', opacity: 0 }, { letterSpacing: '-.04em', opacity: 1, ease: 'expo.out', duration: 1.6, scrollTrigger: { trigger: '.distance__num', start: 'top 85%' } });

// home: the pull-back to a pale blue dot (pinned, scrubbed — created in page order so pin spacing stacks)
const paleLines = $$('.pale__line');
const pale = createPaleBlue(sec('pale'), $<HTMLCanvasElement>('#pale'), paleLines, $('#paleHere'));

// project files: a horizontal reel on desktop, a plain stack on small screens
let filesST: ScrollTrigger | null = null;
const mm = gsap.matchMedia();
mm.add('(min-width: 860px)', () => {
  const track = $('#filesTrack');
  const tw = gsap.to(track, {
    x: () => -(track.scrollWidth - innerWidth + 64), ease: 'none',
    scrollTrigger: { trigger: '.files', pin: '.files__pin', start: 'top top', end: () => `+=${track.scrollWidth - innerWidth + 64}`, scrub: .6, invalidateOnRefresh: true },
  });
  filesST = tw.scrollTrigger ?? null;
  return () => { filesST = null; };
});
$$<HTMLElement>('.file').forEach((f) => {
  if (!canHover) return;
  f.addEventListener('pointermove', (e) => { const r = f.getBoundingClientRect(); f.style.setProperty('--rx', `${((e.clientY - r.top) / r.height - .5) * -8}deg`); f.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - .5) * 10}deg`); });
  f.addEventListener('pointerleave', () => { f.style.setProperty('--rx', '0deg'); f.style.setProperty('--ry', '0deg'); });
});

// principles: a sticky index that counts with you
const howIndex = $('#howIndex');
$$('.how__item').forEach((li) => ScrollTrigger.create({
  trigger: li, start: 'top 60%', end: 'bottom 60%',
  onToggle: (st) => { li.classList.toggle('is-on', st.isActive); if (st.isActive) scramble(howIndex, li.dataset.n ?? '', .4); },
}));
ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (st) => gsap.set('#prog', { scaleX: st.progress }) });
if (field) gsap.to(field.camera.position, { z: 15, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

// contact
$('#copy').addEventListener('click', async () => {
  const btn = $('#copy');
  try { await navigator.clipboard.writeText(contact.email); scramble(btn, 'Copied', .4); }
  catch { scramble(btn, 'Select and copy above', .4); }
  setTimeout(() => scramble(btn, 'Copy address', .4), 2200);
});
if (canHover) { // magnetic email
  mail.addEventListener('pointermove', (e) => { const r = mail.getBoundingClientRect(); gsap.to(mail, { x: (e.clientX - r.left - r.width / 2) * .12, y: (e.clientY - r.top - r.height / 2) * .25, duration: .5, ease: 'power3.out' }); });
  mail.addEventListener('pointerleave', () => gsap.to(mail, { x: 0, y: 0, duration: .9, ease: 'elastic.out(1, .4)' }));
}

// in-page links glide instead of jumping
$$<HTMLAnchorElement>('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const id = a.getAttribute('href') ?? '#';
  if (id.length < 2) return;
  e.preventDefault();
  lenis.scrollTo(id === '#top' ? 0 : id, { duration: 1.6 });
}));

addEventListener('pointermove', (e) => field?.setMouse((e.clientX / innerWidth) * 2 - 1, -((e.clientY / innerHeight) * 2 - 1)), { passive: true });
addEventListener('resize', () => field?.resize());

const measureMarquee = () => { marqueeHalf = marquee.scrollWidth / 2; };
measureMarquee(); addEventListener('resize', measureMarquee); document.fonts.ready.then(measureMarquee);
new IntersectionObserver(([e]) => { marqueeOn = e.isIntersecting; }).observe(marquee);

// ---------- the hero reel: marvels in dots, and the playground ----------
const mvIdx = $('#mvIdx'), mvName = $('#mvName'), mvLine = $('#mvLine'), mvBar = $('#mvBar'), mvDots = $('#mvDots'), hero = $('.hero');
mvDots.innerHTML = marvels.map((m, k) => `<button type="button" aria-label="${esc(m.name)}" data-k="${k}"></button>`).join('');
const dotEls = $$<HTMLButtonElement>('button', mvDots);
function renderMarvel(i: number, m: Marvel, ms: number) {
  mvIdx.textContent = String(i + 1).padStart(2, '0');
  scramble(mvName, m.name, .55);
  gsap.fromTo(mvLine, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .6, delay: .25, ease: 'expo.out', onStart: () => { mvLine.textContent = m.line; } });
  dotEls.forEach((d, k) => d.classList.toggle('is-on', k === i));
  gsap.fromTo(mvBar, { scaleX: 0 }, { scaleX: 1, duration: ms / 1000, ease: 'none', overwrite: true });
}
const reel = field ? createReel(field, marvels, {
  onChange: renderMarvel,
  gap: () => ({ top: $('#marvel').getBoundingClientRect().bottom + scrollY + 8, bottom: $('.hero__name').getBoundingClientRect().top + scrollY - 8 }),
}) : null;
if (!reel) $('#marvel').hidden = true;
dotEls.forEach((d) => d.addEventListener('click', () => reel?.to(Number(d.dataset.k))));
$('#mvPrev').addEventListener('click', () => reel?.prev());
$('#mvNext').addEventListener('click', () => reel?.next());
let heroVisible = true;
new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; reel?.setVisible(e.isIntersecting); }, { threshold: .35 }).observe(hero);

// drag to turn · click to scatter · hold to gather
let down: { x: number; lx: number; dragged: boolean; held: boolean; timer: number } | null = null;
const playable = (t: EventTarget | null) => !(t as Element | null)?.closest?.('a, button, input, label');
hero.addEventListener('pointerdown', (e) => {
  if (!reel || !introDone || !playable(e.target)) return;
  field?.setMouse((e.clientX / innerWidth) * 2 - 1, -((e.clientY / innerHeight) * 2 - 1));
  down = { x: e.clientX, lx: e.clientX, dragged: false, held: false, timer: window.setTimeout(() => { if (down && !down.dragged) { down.held = true; reel.hold(true); } }, 240) };
});
addEventListener('pointermove', (e) => {
  if (!down || !reel) return;
  if (!down.dragged && Math.abs(e.clientX - down.x) > 7) { down.dragged = true; clearTimeout(down.timer); if (down.held) { reel.hold(false); down.held = false; } }
  if (down.dragged) reel.drag(e.clientX - down.lx);
  down.lx = e.clientX;
}, { passive: true });
const release = (e: PointerEvent) => {
  if (!down || !reel) return;
  clearTimeout(down.timer);
  if (down.held) reel.hold(false); else if (!down.dragged && e.type === 'pointerup') reel.burst(e.clientX, e.clientY);
  down = null;
};
addEventListener('pointerup', release); addEventListener('pointercancel', release);

// ← / → switch marvels; typing in the box makes the dots write
addEventListener('keydown', (e) => {
  if (!reel || !introDone || !heroVisible || (e.target as Element | null)?.closest?.('input')) return;
  if (e.key === 'ArrowRight') reel.next(); else if (e.key === 'ArrowLeft') reel.prev();
});
const write = $<HTMLInputElement>('#write');
let writeT = 0;
write.addEventListener('input', () => { clearTimeout(writeT); writeT = window.setTimeout(() => reel?.write(write.value), 260); });
write.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === 'Escape') write.blur(); });
let resizeT = 0;
addEventListener('resize', () => { clearTimeout(resizeT); resizeT = window.setTimeout(() => { if (introDone) reel?.relayout(); }, 250); });

// ---------- autopilot cues: what each chapter shows when nobody is driving ----------
const cues: Cue[] = [
  {
    id: 'hero', label: 'Hello', section: sec('hero'),
    perform: async (c) => {
      await c.glide(0); if (!c.ok()) return;
      c.lock(mvName, 'Marvel'); await c.wait(1500); if (!c.ok()) return;
      if (reel && field) { // show that it's touchable: a ghost click scatters the dots
        const x = innerWidth * (innerWidth >= 860 ? .64 : .5), y = innerHeight * .34;
        c.lock({ x, y }, 'Click · scatter'); await c.wait(500); if (!c.ok()) return;
        reel.burst(x, y); await c.wait(1300); if (!c.ok()) return;
      }
      c.lock($('.hero__name'), 'Lock · Ayush Srivastav'); await c.wait(1100); if (!c.ok()) return;
      c.lock($('.hero__line'), 'Reading'); await c.read($('.hero__line'), 1100); if (!c.ok()) return;
      c.lock($('.hero__now'), 'Now'); await c.wait(1000);
    },
  },
  {
    id: 'distance', label: 'Far', section: sec('distance'),
    perform: async (c) => {
      const s = sec('distance');
      c.lock(null); await c.glide(topOf(s) - innerHeight * .08); if (!c.ok()) return;
      c.lock($('.distance__num'), 'Tracking · Voyager 1'); await c.wait(1500); if (!c.ok()) return;
      for (const w of $$('.words', s)) { // glide at reading pace so the words light up as they are read
        c.lock(w, 'Reading'); await c.glide(topOf(w) + w.offsetHeight - innerHeight * .5, 650); if (!c.ok()) return;
        await c.wait(500); if (!c.ok()) return;
      }
    },
  },
  {
    id: 'pale', label: 'Home', section: sec('pale'),
    perform: async (c) => { // slow pull-back, one sentence at a time; the reticle finds the dot at the end
      const st = pale.st;
      c.lock(null);
      for (const [i, s] of pale.stops.entries()) {
        await c.glide(st.start + (st.end - st.start) * Math.min(1, s + (i ? .05 : 0)), i ? 1100 : 2400); if (!c.ok()) return;
        if (i >= 2) c.lock(pale.dot, i === pale.stops.length - 1 ? 'Earth · 0.12 pixel' : 'Earth · less than a pixel');
        await c.read(paleLines[i], i === pale.stops.length - 1 ? 2400 : 1300, 2600); if (!c.ok()) return;
      }
      c.lock(null); await c.glide(st.end + 4);
    },
  },
  {
    id: 'orbit', label: 'Orbit', section: sec('orbit'),
    perform: async (c) => {
      c.lock(null); await c.glide(topOf($('.orbit__stage')) - innerHeight * .2); if (!c.ok()) return;
      for (const id of ['say', 'glassbox', 'clible']) {
        const el = orbit.el(id); if (!el) continue;
        orbit.show(id); c.lock(el, `Lock · ${projects.find((p) => p.id === id)?.name}`);
        await c.wait(1500); if (!c.ok()) { orbit.show(null); return; }
      }
      orbit.show(null);
    },
  },
  {
    id: 'files', label: 'Projects', section: sec('files'),
    perform: async (c) => {
      const cards = $$('.file');
      c.lock(null);
      for (const [i, card] of cards.entries()) {
        const st = filesST;
        const y = st ? st.start + (st.end - st.start) * (i / (cards.length - 1)) : topOf(card) - innerHeight * .15;
        await c.glide(y, st ? 2600 : 2000); if (!c.ok()) return;
        c.lock(card, `File ${String(i + 1).padStart(2, '0')}`); await c.read(card, 1000, 1700); if (!c.ok()) return;
      }
    },
  },
  {
    id: 'how', label: 'How', section: sec('how'),
    perform: async (c) => {
      for (const li of $$('.how__item')) {
        await c.glide(topOf(li) - innerHeight * .4, 1800); if (!c.ok()) return;
        c.lock($('h3', li), `Principle ${li.dataset.n}`); await c.read(li, 900, 1600); if (!c.ok()) return;
      }
    },
  },
  {
    id: 'contact', label: 'Signal', section: sec('contact'),
    perform: async (c) => {
      c.lock(null); await c.glide(document.documentElement.scrollHeight - innerHeight); if (!c.ok()) return;
      c.lock(mail, 'Lock · say hello'); await c.wait(1600); if (!c.ok()) return;
      c.lock(lightEl, 'Light time · Voyager 1'); await c.wait(1600); if (!c.ok()) return;
      c.lock(null); await c.wait(2800); // a breath before going round again
    },
  },
];

const pilotBtn = $('#pilot'), pilotState = $('#pilotState'), pilotChapter = $('#pilotChapter'), segs = $('#pilotSegs');
segs.innerHTML = cues.map(() => '<i></i>').join('');
const segEls = $$('i', segs);
let lastPilot = '';
function renderPilot(s: PilotState, cue: Cue | null, left: number) {
  const idx = cue ? cues.indexOf(cue) : -1;
  const label = s === 'paused' ? `Resumes in ${Math.ceil(left / 1000)}` : s === 'off' ? 'Autopilot off' : s === 'done' ? 'Your turn' : 'Autopilot';
  const chap = s === 'flying' && cue ? `${String(idx + 1).padStart(2, '0')} · ${cue.label}` : s === 'paused' ? 'You are driving' : s === 'off' ? 'Tap to turn on' : s === 'done' ? 'Tour done · tap to replay' : 'Standing by';
  pilotBtn.style.setProperty('--p', s === 'paused' ? String(1 - left / pilot.total) : '0');
  const key = s + label + chap;
  if (key === lastPilot) return;
  lastPilot = key;
  document.body.dataset.pilot = s;
  pilotBtn.setAttribute('aria-pressed', String(s !== 'off' && s !== 'done'));
  pilotState.textContent = label; pilotChapter.textContent = chap;
  segEls.forEach((e, i) => e.classList.toggle('is-on', i <= idx && s === 'flying'));
}
const pilot = createAutopilot({
  cues, reticle, scrollTo, topOf, onState: renderPilot,
  outro: async (c) => { // hand over: show "hold", point at the box, then step back
    if (!reel || !field) return;
    const x = innerWidth * (innerWidth >= 860 ? .64 : .5), y = innerHeight * .34;
    c.lock({ x, y }, 'Hold · gather'); field.setMouse((x / innerWidth) * 2 - 1, -((y / innerHeight) * 2 - 1));
    await c.wait(500); if (!c.ok()) return;
    reel.hold(true); await c.wait(1600); reel.hold(false); if (!c.ok()) return;
    await c.wait(700); if (!c.ok()) return;
    c.lock(write, 'Type · write'); await c.wait(1500); if (!c.ok()) return;
    c.lock($('#mvHint'), 'Your turn'); await c.wait(1800);
  },
});
pilotBtn.addEventListener('click', () => pilot.toggle());

const takeOver = (e: Event) => {
  if (!introDone || performance.now() - introEndedAt < 400) return; // the key that skipped the intro is not a takeover
  if (e.type === 'keydown' && ['Shift', 'Alt', 'Meta', 'Control'].includes((e as KeyboardEvent).key)) return;
  if ((e.target as Element | null)?.closest?.('#pilot')) return;
  pilot.yieldTo();
};
(['wheel', 'touchstart', 'keydown', 'pointerdown'] as const).forEach((ev) => addEventListener(ev, takeOver, { passive: true }));

// ---------- the score: Prelude in C major ----------
// Plays on the first tap, click or key unless the visitor turned it off before (remembered). Browsers won't
// start sound without a gesture, so we also try once at load — it works where the site has earned autoplay.
const audio = $<HTMLAudioElement>('#prelude'), soundBtn = $('#sound'), introSound = $('#introSound');
const score = createScore(audio);
const renderSound = () => {
  const on = score.playing;
  soundBtn.textContent = on ? 'Sound on' : 'Sound off'; soundBtn.setAttribute('aria-pressed', String(on));
  introSound.textContent = on ? '♪ Prelude in C' : '♪ Play with sound'; introSound.classList.toggle('is-on', on);
  document.body.classList.toggle('has-sound', on);
};
const startSound = async () => { if (await score.start()) { store.set('as-sound', 'on'); renderSound(); } };
const toggleSound = async () => {
  if (score.playing) { score.stop(); store.set('as-sound', 'off'); renderSound(); } else await startSound();
};
soundBtn.addEventListener('click', toggleSound);
introSound.addEventListener('click', (e) => { e.stopPropagation(); toggleSound(); });
const firstGesture = () => {
  ['pointerdown', 'keydown', 'touchend'].forEach((ev) => removeEventListener(ev, firstGesture, true));
  if (store.get('as-sound') !== 'off' && !score.playing) startSound();
};
['pointerdown', 'keydown', 'touchend'].forEach((ev) => addEventListener(ev, firstGesture, { capture: true, passive: true }));
if (store.get('as-sound') !== 'off') startSound(); // autoplay attempt; silently refused without a gesture
// each chapter has its own loudness: the music swells for "Home" and steps back for reading
const MOOD: Record<string, number> = { hero: .5, distance: .4, pale: .9, orbit: .45, files: .42, how: .38, contact: .55 };
$$('[data-cue]').forEach((sct) => ScrollTrigger.create({ trigger: sct, start: 'top 55%', end: 'bottom 55%', onToggle: (st) => { if (st.isActive) score.setMood(MOOD[sct.dataset.cue ?? ''] ?? .45); } }));

// ---------- instrument mode: Shift + A ----------
const instrument = $('#instrument');
let instrumentOn = false;
function updateInstrument() {
  $('#dFps').textContent = String(fps);
  $('#dDots').textContent = field ? `${fmtKm(field.budget)} / ${fmtKm(field.n)}` : 'no WebGL';
  $('#dPx').textContent = field ? field.renderer.getPixelRatio().toFixed(2) : '—';
  $('#dBeat').textContent = introDone ? 'sky' : beatName;
  $('#dPilot').textContent = pilot.state;
}
addEventListener('keydown', (e) => {
  if ((e.target as Element | null)?.closest?.('input')) return;
  if ((e.shiftKey && e.key.toLowerCase() === 'a') || (e.key === 'Escape' && instrumentOn)) {
    instrumentOn = e.key === 'Escape' ? false : !instrumentOn;
    instrument.hidden = !instrumentOn;
    if (instrumentOn) updateInstrument();
  }
});

Object.assign(window, { __site: { pilot, lenis, reel, field, get introDone() { return introDone; } } }); // test + console hook
addEventListener('pagehide', () => field?.dispose());

intro();
