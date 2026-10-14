// Projects as satellites on tilted orbits around "AS". Inner orbits move faster (Kepler-ish: ω ∝ r^-1.5).
// Satellites pass behind the centre (dimmer, smaller) and in front of it. Hover, focus or tap pauses time.
import type { Project } from '../content';

const NS = 'http://www.w3.org/2000/svg';
const CX = 500, CY = 280, RX = [170, 290, 430], FLAT = .3;
const svgEl = <K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string | number>, parent?: Element) => {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v));
  parent?.appendChild(e);
  return e;
};
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export function createOrbit(svg: SVGSVGElement, card: HTMLElement, legend: HTMLElement, projects: Project[]) {
  const back = svgEl('g', {}, svg);
  RX.forEach((rx, i) => svgEl('ellipse', { cx: CX, cy: CY, rx, ry: rx * FLAT, class: `ring ring--${i}` }, back));
  const sun = svgEl('g', { class: 'sun' }, svg);
  svgEl('circle', { cx: CX, cy: CY, r: 46, class: 'sun__halo' }, sun);
  svgEl('circle', { cx: CX, cy: CY, r: 9, class: 'sun__core' }, sun);
  svgEl('text', { x: CX, y: CY + 34, class: 'sun__label', 'text-anchor': 'middle' }, sun).textContent = 'AS';
  const front = svgEl('g', {}, svg);

  const perOrbit = [0, 0, 0];
  const sats = projects.map((p) => {
    const k = perOrbit[p.orbit]++, count = projects.filter((q) => q.orbit === p.orbit).length;
    const g = svgEl('g', { class: 'sat', tabindex: 0, role: 'button', 'aria-label': `${p.name}: ${p.line} ${p.status}.`, 'data-lock': p.name }, front);
    svgEl('circle', { r: 22, class: 'sat__hit' }, g);
    svgEl('circle', { r: 5 + (2 - p.orbit) * 1.5, class: `sat__dot sat__dot--${p.orbit}` }, g);
    svgEl('text', { x: 14, y: 4, class: 'sat__name' }, g).textContent = p.name;
    return { p, g, a: (k / count) * Math.PI * 2 + p.orbit * .9, w: .32 * (RX[0] / RX[p.orbit]) ** 1.5, inFront: true };
  });

  legend.innerHTML = projects.map((p) => `<li data-id="${p.id}"><b>${esc(p.name)}</b> ${esc(p.line)} <span>${esc(p.status)}</span></li>`).join('');

  let speed = 1, target = 1, active: (typeof sats)[number] | null = null, visible = false;
  const show = (s: (typeof sats)[number] | null) => {
    active = s; target = s ? 0 : 1;
    sats.forEach((x) => x.g.classList.toggle('is-on', x === s));
    if (!s) { card.hidden = true; return; }
    card.hidden = false;
    card.innerHTML = `<p class="mono">${esc(s.p.status)}</p><h3>${esc(s.p.name)}</h3><p class="orbit__line">${esc(s.p.line)}</p><p>${esc(s.p.body)}</p>`;
  };
  sats.forEach((s) => {
    s.g.addEventListener('pointerenter', () => show(s));
    s.g.addEventListener('pointerleave', () => show(null));
    s.g.addEventListener('focus', () => show(s));
    s.g.addEventListener('blur', () => show(null));
    s.g.addEventListener('click', () => show(active === s ? null : s));
  });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(svg);

  function frame(dt: number) {
    if (!visible) return;
    speed += (target - speed) * Math.min(1, dt * 4);
    for (const s of sats) {
      s.a += s.w * dt * speed;
      const sin = Math.sin(s.a), x = CX + Math.cos(s.a) * RX[s.p.orbit], y = CY + sin * RX[s.p.orbit] * FLAT;
      const depth = (sin + 1) / 2; // 0 = far side, 1 = near side
      s.g.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${(.75 + depth * .45).toFixed(3)})`);
      s.g.style.opacity = String(.4 + depth * .6);
      const nowFront = sin > -.15;
      if (nowFront !== s.inFront) { (nowFront ? front : back).appendChild(s.g); s.inFront = nowFront; }
    }
  }

  return {
    frame,
    show: (id: string | null) => show(id ? sats.find((s) => s.p.id === id) ?? null : null),
    el: (id: string) => sats.find((s) => s.p.id === id)?.g ?? null,
  };
}
