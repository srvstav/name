// The reticle is one element with two drivers: the visitor's pointer, or the autopilot.
// It frames whatever it rests on (links, buttons, [data-lock]) and reads out sky coordinates when free.
// Compositor-only: the four corners, dot and label move by transform — no width/height, so no layout per frame.

type Box = { x: number; y: number; w: number; h: number };
const FREE = 26, PAD = 10, C = 9;

export function createReticle(el: HTMLElement, label: HTMLElement, canHover: boolean) {
  const [tl, tr, bl, br] = [...el.querySelectorAll<HTMLElement>('i')];
  const dot = el.querySelector<HTMLElement>('b');
  const cur: Box = { x: innerWidth / 2, y: innerHeight / 2, w: FREE, h: FREE };
  let px = cur.x, py = cur.y, hover: Element | null = null, pulse = 0;
  let pilot: { el?: Element; x?: number; y?: number; text: string } | null = null;
  let lastText = '', lastLocked = false, lastVisible = false;

  addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    px = e.clientX; py = e.clientY;
    hover = (e.target as Element | null)?.closest?.('a, button, [data-lock]') ?? null;
  }, { passive: true });

  const sky = (x: number, y: number) => { // viewport → a playful right ascension / declination readout
    const ra = (x / innerWidth) * 24, dec = 90 - (y / innerHeight) * 180;
    return `RA ${String(Math.floor(ra)).padStart(2, '0')}h${String(Math.floor((ra % 1) * 60)).padStart(2, '0')} · DEC ${dec >= 0 ? '+' : '−'}${String(Math.abs(Math.round(dec))).padStart(2, '0')}°`;
  };
  const nameOf = (t: Element) => (t.getAttribute('data-lock') || t.getAttribute('aria-label') || t.textContent || '').trim().slice(0, 28);
  const put = (n: HTMLElement | null | undefined, x: number, y: number, s = 1) => { if (n) n.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)${s !== 1 ? ` scale(${s.toFixed(2)})` : ''}`; };

  function frame(level = 0) {
    let target: Box, text: string;
    if (hover && hover.checkVisibility?.({ checkVisibilityCSS: true }) === false) hover = null; // hidden since (e.g. the intro's skip button)
    const lockEl = pilot ? pilot.el : hover;
    if (lockEl) {
      const r = lockEl.getBoundingClientRect();
      target = { x: r.left - PAD, y: r.top - PAD, w: r.width + PAD * 2, h: r.height + PAD * 2 };
      text = pilot?.text || `Lock · ${nameOf(lockEl)}`;
    } else {
      const x = pilot?.x ?? px, y = pilot?.y ?? py;
      target = { x: x - FREE / 2, y: y - FREE / 2, w: FREE, h: FREE };
      text = pilot?.text || sky(x, y);
    }
    const k = pilot ? .2 : .3;
    cur.x += (target.x - cur.x) * k; cur.y += (target.y - cur.y) * k;
    cur.w += (target.w - cur.w) * k; cur.h += (target.h - cur.h) * k;
    pulse += (level - pulse) * .3;
    const o = pulse * 4; // corners breathe outward with the music
    put(tl, cur.x - o, cur.y - o); put(tr, cur.x + cur.w - C + o, cur.y - o);
    put(bl, cur.x - o, cur.y + cur.h - C + o); put(br, cur.x + cur.w - C + o, cur.y + cur.h - C + o);
    put(dot, cur.x + cur.w / 2 - 1.5, cur.y + cur.h / 2 - 1.5, 1 + pulse * 2.5);
    put(label, cur.x, cur.y + cur.h + 8 + o);
    const locked = !!lockEl, visible = canHover || !!pilot;
    if (locked !== lastLocked) { el.classList.toggle('is-locked', locked); lastLocked = locked; }
    if (visible !== lastVisible) { el.classList.toggle('is-visible', visible); lastVisible = visible; }
    if (text !== lastText) { label.textContent = text; lastText = text; }
  }

  return {
    frame,
    /** Autopilot: frame an element (or a point). Pass null to hand the reticle back to the pointer. */
    lock(target: Element | { x: number; y: number } | null, text = '') {
      if (!target) { pilot = null; return; }
      pilot = target instanceof Element ? { el: target, text: text || `Lock · ${nameOf(target)}` } : { x: target.x, y: target.y, text };
    },
    get piloted() { return !!pilot; },
  };
}
export type Reticle = ReturnType<typeof createReticle>;
