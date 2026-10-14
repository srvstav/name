// Autopilot: a director, not a timer. Each chapter has its own cue (what to point at, how long to linger),
// dwell is measured from the words on screen, and the glide speed is constant so the eye can keep up.
// Any wheel / touch / key / click hands control back at once. It comes back on its own, but more patiently
// each time the visitor pushes it away (5 s → 10 s → 20 s → 40 s), so readers are never fought.
import gsap from 'gsap';
import type { Reticle } from './reticle';

export type Ctx = {
  ok: () => boolean;
  glide: (y: number, pxPerSec?: number) => Promise<void>;
  wait: (ms: number) => Promise<void>;
  /** Linger long enough to read `el` at a relaxed pace (~330 wpm), bounded so nobody waits too long. */
  read: (el: Element, min?: number, max?: number) => Promise<void>;
  lock: Reticle['lock'];
};
export type Cue = { id: string; label: string; section: HTMLElement; perform: (c: Ctx) => Promise<void> };
export type PilotState = 'standby' | 'flying' | 'paused' | 'done' | 'off';

type Opts = {
  cues: Cue[];
  reticle: Reticle;
  scrollTo: (y: number) => void;
  topOf: (el: HTMLElement) => number;
  onState: (s: PilotState, cue: Cue | null, resumeIn: number) => void;
  /** After one full lap: hand the site over ("your turn"). The tour then waits a long while before replaying. */
  outro?: (c: Ctx) => Promise<void>;
};

const BASE_RESUME = 5000, DONE_RESUME = 75_000;

export function createAutopilot({ cues, reticle, scrollTo, topOf, onState, outro }: Opts) {
  let state: PilotState = 'standby', run = 0, strikes = 0, resumeAt = 0, lastResume = 0, cue: Cue | null = null;
  const live = new Set<gsap.core.Animation>();
  const set = (s: PilotState) => { state = s; onState(s, cue, Math.max(0, resumeAt - performance.now())); };

  // A killed tween never resolves; the caller's ok() check ends that run.
  const play = (a: gsap.core.Animation) => { live.add(a); return new Promise<void>((r) => a.eventCallback('onComplete', () => { live.delete(a); r(); })); };
  const wait = (ms: number) => play(gsap.delayedCall(ms / 1000, () => {}));
  // Long hops rush through the middle and brake hard (expo); short ones just slide. That rhythm is the point:
  // fast enough to make someone grab the wheel — "wait, what was that?" — and slow enough at each stop to land.
  const glide = (y: number, pxPerSec = 2400) => {
    const p = { y: scrollY }, d = Math.abs(y - scrollY);
    if (d < 4) return Promise.resolve();
    const far = d > innerHeight * 1.2;
    return play(gsap.to(p, { y, duration: gsap.utils.clamp(far ? .9 : .5, 2.4, d / pxPerSec), ease: far ? 'expo.inOut' : 'power2.inOut', onUpdate: () => scrollTo(p.y) }));
  };
  const read = (el: Element, min = 900, max = 2600) => wait(gsap.utils.clamp(min, max, ((el.textContent ?? '').trim().split(/\s+/).length / 330) * 60_000));

  // Start from the chapter the visitor is looking at, so resuming never yanks them backwards.
  const startIndex = () => {
    const mid = scrollY + innerHeight * .5;
    const i = cues.findIndex((c) => topOf(c.section) + c.section.offsetHeight > mid);
    return i < 0 ? 0 : i;
  };

  async function fly(id: number) {
    const ok = () => id === run && state === 'flying';
    const ctx: Ctx = { ok, glide, wait, read, lock: reticle.lock };
    for (let i = startIndex(); ok(); i = (i + 1) % cues.length) {
      cue = cues[i]; onState(state, cue, 0);
      if (i === 0 && scrollY > 10) { reticle.lock(null); await glide(0, 9000); if (!ok()) return; }
      await cue.perform(ctx); if (!ok()) return;
      if (i === cues.length - 1 && outro) { // one lap done: go home, show what's playable, step back
        reticle.lock(null); await glide(0, 9000); if (!ok()) return;
        cue = cues[0]; await outro(ctx); if (!ok()) return;
        reticle.lock(null); document.body.classList.remove('is-piloted');
        resumeAt = performance.now() + DONE_RESUME; set('done');
        return;
      }
    }
  }

  const api = {
    get state() { return state; },
    start() {
      if (state === 'flying' || state === 'off') return;
      lastResume = performance.now();
      set('flying'); document.body.classList.add('is-piloted');
      fly(++run);
    },
    /** Visitor took the wheel. */
    yieldTo() {
      if (state === 'off' || state === 'standby') return;
      if (state === 'done') { resumeAt = performance.now() + DONE_RESUME; return; } // they're playing: leave them be
      if (state === 'flying') {
        if (performance.now() - lastResume < 3500) strikes = Math.min(3, strikes + 1); // pushed away right after resuming
        run++; live.forEach((a) => a.kill()); live.clear();
        reticle.lock(null); document.body.classList.remove('is-piloted');
      }
      resumeAt = performance.now() + BASE_RESUME * 2 ** strikes;
      set('paused');
    },
    toggle() {
      if (state === 'off' || state === 'done') { strikes = 0; state = 'paused'; api.start(); return; }
      api.yieldTo(); resumeAt = Infinity; set('off');
    },
    /** Called every frame: counts down a pause and resumes. */
    frame() {
      if (state !== 'paused' && state !== 'done') return;
      const left = resumeAt - performance.now();
      if (left <= 0) api.start(); else if (state === 'paused') onState(state, cue, left);
    },
    arm() { if (state === 'standby') { state = 'paused'; resumeAt = performance.now() + 900; } },
    get total() { return BASE_RESUME * 2 ** strikes; },
  };
  return api;
}
