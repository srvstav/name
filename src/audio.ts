// The score: Prelude in C major, routed element → analyser → gain → speakers.
// The analyser sits before the gain, so the visuals hear the music the same at any volume.
// level = smoothed loudness (0–1); onset = how sharply it just rose — each arpeggio note gives a small kick.
import gsap from 'gsap';

export function createScore(audio: HTMLAudioElement) {
  let ctx: AudioContext | null = null, gain: GainNode | null = null, analyser: AnalyserNode | null = null;
  let data = new Uint8Array(0), level = 0, onset = 0, prev = 0, playing = false, mood = .5;
  const vol = { v: 0 };

  function graph() {
    if (ctx) return ctx;
    ctx = new AudioContext();
    const src = ctx.createMediaElementSource(audio);
    analyser = ctx.createAnalyser(); analyser.fftSize = 512; analyser.smoothingTimeConstant = .55;
    gain = ctx.createGain(); gain.gain.value = 0;
    src.connect(analyser).connect(gain).connect(ctx.destination);
    data = new Uint8Array(analyser.frequencyBinCount);
    return ctx;
  }
  const ramp = (to: number, dur: number, then?: () => void) => gsap.to(vol, { v: to, duration: dur, ease: 'sine.inOut', overwrite: true, onUpdate: () => { if (gain) gain.gain.value = vol.v; }, onComplete: then });

  return {
    /** Resolves true when sound is actually audible. Without a user gesture the browser may refuse — that's fine. */
    async start() {
      if (playing) return true;
      const c = graph();
      try { await c.resume(); } catch { return false; }
      if (c.state !== 'running') return false;
      try { await audio.play(); } catch { return false; }
      playing = true; ramp(mood, 2.5);
      return true;
    },
    stop() {
      if (!playing) return;
      playing = false;
      ramp(0, .8, () => audio.pause());
    },
    /** Each chapter sets its own volume; changes glide over ~1.5 s. */
    setMood(v: number) { mood = v; if (playing) ramp(v, 1.6); },
    frame() {
      if (!playing || !analyser) { level *= .9; onset *= .85; return; }
      analyser.getByteFrequencyData(data);
      let s = 0; const lo = 2, hi = Math.min(96, data.length); // ~170 Hz – 8 kHz: where the piano lives
      for (let i = lo; i < hi; i++) s += data[i];
      const l = Math.min(1, s / ((hi - lo) * 150));
      onset = Math.max(onset * .86, Math.max(0, l - prev) * 5);
      prev = l; level += (l - level) * .25;
    },
    get level() { return level; },
    get onset() { return Math.min(1, onset); },
    get playing() { return playing; },
  };
}
