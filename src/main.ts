import * as THREE from 'three';
import './style.css';

type Project = { number: string; title: string; discipline: string; year: string; copy: string; href: string };

const projects: Project[] = [
  { number: '01', title: 'A new system for attention', discipline: 'Digital product / identity', year: '2026', copy: 'Replace this with a short, direct project description.', href: '#' },
  { number: '02', title: 'Objects in motion', discipline: 'Experience / experiment', year: '2025', copy: 'A place for a project that rewards interaction without demanding it.', href: '#' },
  { number: '03', title: 'Useful, quietly unusual', discipline: 'Strategy / design / build', year: '2025', copy: 'Keep the copy factual. A few good sentences are more memorable than a case-study wall.', href: '#' },
];

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('Missing app root');

app.innerHTML = `
  <div class="site-grain" aria-hidden="true"></div>
  <header class="site-header" id="top">
    <a class="brand" href="#top" aria-label="Ayush Srivastav, top">AYUSH<br>SRIVASTAV<span class="brand-dot">.</span></a>
    <nav aria-label="Primary navigation">
      <a href="#work">Work</a><a href="#about">About</a><a href="#experiments">Experiments</a><a href="#contact">Contact</a>
    </nav>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-canvas" aria-hidden="true"><canvas id="particle-canvas"></canvas></div>
      <div class="hero-copy">
        <p class="eyebrow">Independent digital practice <span>•</span> 2026</p>
        <h1 id="hero-title">Making digital<br><em>things</em> with intent.</h1>
        <p class="hero-intro">Design, technology and small obsessions—assembled into experiences people can feel.</p>
      </div>
      <div class="sound-dock">
        <button class="sound-toggle" type="button" aria-pressed="false" aria-label="Play Prelude">
          <span class="sound-orbit" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
          <span class="sound-copy"><span id="sound-state">Sound off</span><strong>Prelude</strong></span>
          <span class="sound-action" id="sound-action">Play</span>
        </button>
      </div>
      <div class="hero-meta"><span>Scroll to enter</span><span class="scroll-line" aria-hidden="true"></span><span>01—04</span></div>
      <button class="sphere-note" type="button" aria-label="Focus the particle system" aria-pressed="false">Touch the field <span>↗</span></button>
    </section>

    <section class="statement reveal-section" aria-label="Introductory statement">
      <p class="statement-kicker">A little less noise.</p>
      <h2>Things worth <em>stopping</em> for usually have a pulse.</h2>
      <p class="statement-copy">I build identities, interfaces and interactive systems with enough character to be remembered—and enough discipline to be used.</p>
    </section>

    <section class="work reveal-section" id="work" aria-labelledby="work-title">
      <div class="section-heading"><span class="section-index">01</span><h2 id="work-title">Selected work</h2><span class="section-caption">A small edit of ongoing practice</span></div>
      <div class="project-list">
        ${projects.map((project) => `<a class="project-row" href="${project.href}" aria-label="${project.title}, placeholder project">
          <span class="project-number">${project.number}</span>
          <span class="project-title">${project.title}</span>
          <span class="project-discipline">${project.discipline}</span>
          <span class="project-year">${project.year}</span>
          <span class="project-arrow">↗</span>
          <span class="project-preview">${project.copy}</span>
        </a>`).join('')}
      </div>
    </section>

    <section class="about reveal-section" id="about" aria-labelledby="about-title">
      <div class="section-heading"><span class="section-index">02</span><h2 id="about-title">About the practice</h2></div>
      <div class="about-grid">
        <p class="about-big">The point is not to make a website look expensive. The point is to make a person <em>feel something useful.</em></p>
        <div class="about-small"><p>Placeholder copy: explain your approach in a few plainspoken sentences. Mention the kind of problems you like, the people you work with, and the standard you hold yourself to.</p><a class="text-link" href="#contact">Start a conversation <span>→</span></a></div>
      </div>
    </section>

    <section class="experiments reveal-section" id="experiments" aria-labelledby="experiments-title">
      <div class="section-heading"><span class="section-index">03</span><h2 id="experiments-title">On the side</h2><span class="section-caption">Experiments, fragments, unfinished ideas</span></div>
      <div class="experiment-grid">
        <button class="experiment-card card-a" type="button" data-message="Signal detected: the field is listening."><span>01 / FIELD STUDY</span><strong>Press<br>gently</strong><i></i></button>
        <button class="experiment-card card-b" type="button" data-message="Nothing is static. It only looks that way from far enough away."><span>02 / MOTION NOTE</span><strong>Hold the<br>line</strong><i></i></button>
        <button class="experiment-card card-c" type="button" data-message=" ̑ "><span>03 / SMALL DETAIL</span><strong>Stay<br>curious</strong><i></i></button>
      </div>
      <p class="experiment-message" aria-live="polite">Choose a fragment.</p>
    </section>

    <section class="contact reveal-section" id="contact" aria-labelledby="contact-title">
      <div><span class="section-index">04</span><p class="eyebrow">Available for select work</p></div>
      <h2 id="contact-title">Have an idea<br>with some <em>gravity?</em></h2>
      <a class="contact-link" href="mailto:hello@ayushsrivastav.com">hello@ayushsrivastav.com <span>↗</span></a>
    </section>
  </main>

  <footer>
    <div class="footer-field" aria-hidden="true" id="footer-field"></div>
    <span>AYUSH SRIVASTAV © 2026</span><span>Built with attention</span><a href="#top">Back to top ↑</a>
  </footer>
  <audio id="prelude" src="/audio/prelude.mp3" preload="metadata" loop></audio>
  <aside class="instrument" aria-live="polite" aria-label="Particle system diagnostics" hidden>
    <p>INSTRUMENT / ACTIVE</p><dl><div><dt>backend</dt><dd id="diag-backend">WEBGL</dd></div><div><dt>particles</dt><dd id="diag-particles">0</dd></div><div><dt>frame</dt><dd id="diag-frame">0 ms</dd></div><div><dt>quality</dt><dd id="diag-quality">balanced</dd></div></dl><span>SHIFT + A / ESC TO CLOSE</span>
  </aside>
`;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const canvas = document.querySelector<HTMLCanvasElement>('#particle-canvas');
const hero = document.querySelector<HTMLElement>('.hero');
const note = document.querySelector<HTMLButtonElement>('.sphere-note');
if (!canvas || !hero || !note) throw new Error('Missing hero scene elements');
const sceneCanvas: HTMLCanvasElement = canvas;
const heroSection: HTMLElement = hero;

class ParticleField {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  private points: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
  private clock = new THREE.Clock();
  private pointer = new THREE.Vector2(9, 9);
  private pointerTarget = new THREE.Vector2(9, 9);
  private pointerVelocity = new THREE.Vector2();
  private frameMs = 16;
  private lastTime = performance.now();
  private quality: 'high' | 'balanced' | 'low' = 'high';
  private raf = 0;
  private isVisible = true;
  private focus = 0;
  private focusTimer = 0;
  private activeCount = 0;
  private stableFrames = 0;
  private readonly events = new AbortController();
  readonly count: number;

  constructor() {
    const mobile = matchMedia('(max-width: 700px)').matches;
    this.count = mobile ? 5200 : 9800;
    this.activeCount = this.count;
    this.renderer = new THREE.WebGLRenderer({ canvas: sceneCanvas, alpha: true, antialias: false, powerPreference: 'high-performance' });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.5 : 2));
    this.camera.position.z = 6.1;
    this.points = this.createPoints(this.count);
    this.points.position.set(mobile ? 0.16 : 0.78, mobile ? 0.22 : 0.16, 0);
    this.scene.add(this.points);
    this.resize();
    this.bind();
    this.animate();
  }

  private createPoints(count: number) {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const u = (i + 0.5) / count;
      const phi = Math.acos(1 - 2 * u);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const random = (Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1;
      const normalized = random < 0 ? random + 1 : random;
      const radial = i % 4 === 0
        ? 0.38 + Math.pow(normalized, 0.72) * 1.52
        : 1.48 + (normalized - 0.5) * 0.22;
      positions[i * 3] = radial * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radial * Math.cos(phi);
      positions[i * 3 + 2] = radial * Math.sin(phi) * Math.sin(theta);
      seeds[i] = normalized;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    const material = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uPointer: { value: this.pointer }, uVelocity: { value: this.pointerVelocity }, uScroll: { value: 0 }, uFocus: { value: 0 }, uAudio: { value: 0 }, uPixelRatio: { value: this.renderer.getPixelRatio() } },
      vertexShader: `
        uniform float uTime; uniform vec2 uPointer; uniform vec2 uVelocity; uniform float uScroll; uniform float uFocus; uniform float uAudio; uniform float uPixelRatio; attribute float aSeed; varying float vAlpha; varying float vSeed;
        float hash(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        void main(){
          vec3 p = position; float t = uTime * 0.32 + aSeed * 12.0;
          vec3 wave = vec3(sin(p.y*1.7+t), cos(p.z*1.5-t*1.13), sin(p.x*1.9+t*0.72));
          p += wave * (0.12 + aSeed * 0.17);
          float breath = 1.0 + sin(uTime*0.55 + aSeed*8.0) * 0.035;
          breath += sin(uTime * 1.7 + aSeed * 21.0) * uAudio * 0.075;
          p *= breath;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vec2 local = mv.xy / max(0.1, -mv.z);
          float d = length(local - uPointer * 1.2);
          float pull = exp(-d*d*2.4) * (0.16 + uFocus*0.26);
          p += normalize(p + 0.0001) * pull;
          float impulse = exp(-d*d*3.5) * clamp(length(uVelocity) * 0.36, 0.0, 0.12);
          p.xy += uVelocity * impulse;
          p.x += sin(uScroll*0.002 + p.y) * 0.05;
          mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = (3.0 + aSeed * 5.2 + uFocus * 1.8 + uAudio * 1.8) * uPixelRatio * (4.8 / -mv.z);
          vAlpha = (0.48 + aSeed * 0.42 + uAudio * 0.16) * smoothstep(0.0, 0.85, 1.0 - abs(mv.z + 4.0) * 0.12); vSeed = aSeed;
        }`,
      fragmentShader: `
        varying float vAlpha; varying float vSeed;
        void main(){ float d = distance(gl_PointCoord, vec2(0.5)); float soft = 1.0 - smoothstep(0.12, 0.5, d); vec3 c = mix(vec3(0.70,0.77,0.78), vec3(1.0,0.48,0.17), smoothstep(0.76,1.0,vSeed)*0.45); gl_FragColor = vec4(c, soft*vAlpha); }
      `
    });
    return new THREE.Points(geometry, material);
  }

  private bind() {
    const options = { passive: true, signal: this.events.signal };
    addEventListener('resize', this.resize, options);
    heroSection.addEventListener('pointermove', (event) => {
      const rect = heroSection.getBoundingClientRect();
      const nextX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const nextY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      this.pointerVelocity.set(nextX - this.pointerTarget.x, nextY - this.pointerTarget.y);
      this.pointerTarget.set(nextX, nextY);
    }, options);
    heroSection.addEventListener('pointerleave', () => this.pointerTarget.set(9, 9), options);
    heroSection.addEventListener('pointerdown', () => this.setFocus(), options);
    addEventListener('scroll', () => {
      this.points.material.uniforms.uScroll.value = scrollY;
      const progress = Math.min(scrollY / Math.max(1, document.body.scrollHeight - innerHeight), 1);
      document.documentElement.style.setProperty('--scroll-shift', `${progress * -12}px`);
    }, options);
    document.addEventListener('visibilitychange', () => { this.isVisible = !document.hidden; if (this.isVisible && !this.raf) this.animate(); }, options);
    reduceMotion.addEventListener('change', () => { if (reduceMotion.matches) this.points.material.uniforms.uFocus.value = 0; }, options);
    sceneCanvas.addEventListener('webglcontextlost', (event) => { event.preventDefault(); document.body.classList.add('no-webgl'); }, options);
  }

  setFocus() {
    this.focus = 1;
    window.clearTimeout(this.focusTimer);
    this.focusTimer = window.setTimeout(() => { this.focus = 0; }, 1600);
  }
  setAudioEnergy(energy: number) {
    const current = this.points.material.uniforms.uAudio.value as number;
    const target = reduceMotion.matches ? 0 : Math.min(0.72, Math.max(0, energy));
    this.points.material.uniforms.uAudio.value = current + (target - current) * 0.13;
  }
  private setQuality(next: 'high' | 'balanced' | 'low') {
    if (next === this.quality) return;
    this.quality = next;
    const multiplier = next === 'high' ? 1 : next === 'balanced' ? 0.72 : 0.46;
    this.activeCount = Math.floor(this.count * multiplier);
    this.points.geometry.setDrawRange(0, this.activeCount);
    const pixelRatio = next === 'high' ? Math.min(devicePixelRatio, 2) : next === 'balanced' ? Math.min(devicePixelRatio, 1.35) : 1;
    this.renderer.setPixelRatio(pixelRatio);
    this.resize();
  }
  private resize = () => { const rect = heroSection.getBoundingClientRect(); this.camera.aspect = rect.width / rect.height; this.camera.updateProjectionMatrix(); this.renderer.setSize(rect.width, rect.height, false); this.points.material.uniforms.uPixelRatio.value = this.renderer.getPixelRatio(); };
  private animate = () => {
    if (!this.isVisible) { this.raf = 0; return; }
    this.raf = requestAnimationFrame(this.animate);
    const now = performance.now(); this.frameMs = this.frameMs * 0.92 + (now - this.lastTime) * 0.08; this.lastTime = now;
    if (!reduceMotion.matches) {
      this.pointer.lerp(this.pointerTarget, 0.07);
      this.pointerVelocity.multiplyScalar(0.89);
      this.points.material.uniforms.uTime.value = this.clock.getElapsedTime();
      this.points.material.uniforms.uFocus.value += (this.focus - this.points.material.uniforms.uFocus.value) * 0.06;
      this.points.rotation.y += 0.00135; this.points.rotation.x = Math.sin(this.clock.getElapsedTime() * 0.18) * 0.08;
    }
    if (this.frameMs > 25 && this.quality === 'high') this.setQuality('balanced');
    if (this.frameMs > 38 && this.quality === 'balanced') this.setQuality('low');
    if (this.frameMs < 17) this.stableFrames += 1; else this.stableFrames = 0;
    if (this.stableFrames > 540 && this.quality === 'low') { this.setQuality('balanced'); this.stableFrames = 0; }
    if (this.stableFrames > 900 && this.quality === 'balanced') { this.setQuality('high'); this.stableFrames = 0; }
    this.renderer.render(this.scene, this.camera);
  };
  diagnostics() { return { backend: this.renderer.capabilities.isWebGL2 ? 'WEBGL2' : 'WEBGL', frame: this.frameMs, quality: this.quality, calls: this.renderer.info.render.calls, particles: this.activeCount }; }
  dispose() {
    cancelAnimationFrame(this.raf);
    window.clearTimeout(this.focusTimer);
    this.events.abort();
    this.points.geometry.dispose();
    this.points.material.dispose();
    this.renderer.dispose();
  }
}

let field: ParticleField | null = null;
try { field = new ParticleField(); } catch { document.body.classList.add('no-webgl'); }

const audioElement = document.querySelector<HTMLAudioElement>('#prelude');
const soundToggle = document.querySelector<HTMLButtonElement>('.sound-toggle');
const soundState = document.querySelector<HTMLElement>('#sound-state');
const soundAction = document.querySelector<HTMLElement>('#sound-action');

class Soundscape {

  
  private context: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private source: MediaElementAudioSourceNode | null = null;
  private values = new Uint8Array(64);
  private raf = 0;
  private fade = 0;
  private pauseTimer = 0;
  private readonly targetVolume = 0.34;

  constructor(private readonly audio: HTMLAudioElement, private readonly button: HTMLButtonElement) {
    this.audio.volume = 0;
    this.audio.addEventListener('pause', this.renderState);
    this.audio.addEventListener('play', this.renderState);
    this.audio.addEventListener('ended', this.renderState);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && !this.audio.paused) this.pause();
    });
    this.renderState();
  }

  private ensureGraph() {
    if (!this.context) {
      this.context = new AudioContext();
    }
  
    if (this.source) return;
  
    this.analyser = this.context.createAnalyser();
    this.analyser.fftSize = 128;
    this.analyser.smoothingTimeConstant = 0.82;
  
    this.source = this.context.createMediaElementSource(this.audio);
  
    this.source.connect(this.analyser);
    this.analyser.connect(this.context.destination);
  }

  private renderState = () => {
    const playing = !this.audio.paused;
    this.button.classList.toggle('is-playing', playing);
    this.button.setAttribute('aria-pressed', String(playing));
    this.button.setAttribute('aria-label', playing ? 'Pause Prelude' : 'Play Prelude');
    if (soundState) soundState.textContent = playing ? 'Sound on' : 'Sound off';
    if (soundAction) soundAction.textContent = playing ? 'Pause' : 'Play';
    if (!playing) field?.setAudioEnergy(0);
  };

  private fadeTo(target: number) {
    window.clearInterval(this.fade);
    this.fade = window.setInterval(() => {
      const direction = target > this.audio.volume ? 1 : -1;
      const next = this.audio.volume + direction * 0.018;
      if ((direction > 0 && next >= target) || (direction < 0 && next <= target)) {
        this.audio.volume = target;
        window.clearInterval(this.fade);
        return;
      }
      this.audio.volume = next;
    }, 28);
  }

  private tick = () => {
    if (this.audio.paused || !this.analyser) {
      this.raf = 0;
      field?.setAudioEnergy(0);
      return;
    }
    this.analyser.getByteFrequencyData(this.values);
    let total = 0;
    for (let i = 1; i < 22; i += 1) total += this.values[i];
    const energy = Math.pow(total / (21 * 255), 1.25);
    field?.setAudioEnergy(energy);
    this.button.style.setProperty('--sound-energy', energy.toFixed(3));
    this.button.style.setProperty('--sound-glow', `${5 + energy * 18}px`);
    this.button.style.setProperty('--sound-scale', `${1 + energy * 0.18}`);
    this.raf = requestAnimationFrame(this.tick);
  };

  private async startPlayback() {
    this.audio.volume = 0;
  
    await this.audio.play();
  
    if (!this.context) {
      this.ensureGraph();
    }
  
    if (this.context?.state === "suspended") {
      await this.context.resume();
    }
  
    this.fadeTo(this.targetVolume);
  
    if (!this.raf) {
      this.tick();
    }
  }

  async toggle() {
  window.clearTimeout(this.pauseTimer);

  if (!this.audio.paused) {
    this.pause();
    return;
  }

  try {
    await this.startPlayback();
  } catch {
    if (soundState) soundState.textContent = 'Sound unavailable';
    if (soundAction) soundAction.textContent = 'Retry';
  }
}

async autoplay() {
  if (!this.audio.paused) return;

  await this.startPlayback();
}

  pause() {
    this.fadeTo(0);
    window.clearTimeout(this.pauseTimer);
    this.pauseTimer = window.setTimeout(() => this.audio.pause(), 350);
  }

  dispose() {
    cancelAnimationFrame(this.raf);
    window.clearInterval(this.fade);
    window.clearTimeout(this.pauseTimer);
    this.audio.pause();
    void this.context?.close();
  }
}

let sound: Soundscape | null = null;

if (audioElement && soundToggle) {
  sound = new Soundscape(audioElement, soundToggle);

  soundToggle.addEventListener('click', () => void sound?.toggle());

  void sound.autoplay().catch(() => {
    const unlock = async () => {
      try {
        console.log("unlock");
await sound?.toggle();
    
        document.removeEventListener('pointerdown', unlock);
        document.removeEventListener('touchstart', unlock);
        document.removeEventListener('keydown', unlock);
        document.removeEventListener('click', unlock);
      } catch {
        // Keep waiting for another interaction.
      }
    };
    
    document.addEventListener('pointerdown', unlock);
    document.addEventListener('touchstart', unlock);
    document.addEventListener('keydown', unlock);
    document.addEventListener('click', unlock);
  });
}

note.addEventListener('click', () => {
  field?.setFocus();
  note.classList.add('active');
  note.setAttribute('aria-pressed', 'true');
  setTimeout(() => { note.classList.remove('active'); note.setAttribute('aria-pressed', 'false'); }, 900);
});
addEventListener('pagehide', () => { field?.dispose(); sound?.dispose(); }, { once: true });

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const header = document.querySelector<HTMLElement>('.site-header');
menuToggle?.addEventListener('click', () => { const open = header?.classList.toggle('menu-open') ?? false; menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => { header?.classList.remove('menu-open'); menuToggle?.setAttribute('aria-expanded', 'false'); }));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: 0.15 });
document.querySelectorAll<HTMLElement>('.reveal-section').forEach((section) => observer.observe(section));

const message = document.querySelector<HTMLElement>('.experiment-message');
document.querySelectorAll<HTMLButtonElement>('.experiment-card').forEach((card) => card.addEventListener('click', () => { message!.textContent = card.dataset.message ?? ''; card.classList.add('selected'); setTimeout(() => card.classList.remove('selected'), 700); }));

const instrument = document.querySelector<HTMLElement>('.instrument');
const toggleInstrument = () => { if (!instrument) return; instrument.hidden = !instrument.hidden; };
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') instrument!.hidden = true; if (event.shiftKey && event.key.toLowerCase() === 'a') { event.preventDefault(); toggleInstrument(); } });
setInterval(() => { if (!field || !instrument || instrument.hidden) return; const d = field.diagnostics(); document.querySelector('#diag-backend')!.textContent = d.backend; document.querySelector('#diag-particles')!.textContent = String(d.particles); document.querySelector('#diag-frame')!.textContent = `${d.frame.toFixed(1)} ms / ${d.calls} calls`; document.querySelector('#diag-quality')!.textContent = d.quality; }, 300);
