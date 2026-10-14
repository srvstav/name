# Ayush Srivastav — portfolio

Vite + TypeScript + three.js (custom shaders) + GSAP/ScrollTrigger + Lenis. No framework.

## What happens
- **Intro:** 72k dots (26k on phones) hesitate, huddle with their neighbours, then form the James Webb telescope,
  Voyager 1, a microchip, "all made by people." and the name. Each shape has a short factual caption.
  Skip with the button, Enter, Space, Esc or a scroll. Returning visitors only see the name.
- **Hero reel:** after the intro, the dots keep building marvels: Ferrari 12Cilindri V12 (pistons fire in order) →
  Starship (lifts off) → the exosphere → ALMA → Halley VI under the aurora → Sphere's eye (its screen is called the
  Exosphere) → Sydney Opera House (shells cut from one sphere) → a drone-show dragon. Each has one plain caption.
  **Play:** drag turns it, click scatters it, hold gathers it toward you, type a word and the dots spell it, ← / → switches.
- **Sound:** Prelude in C major plays from the first tap or key (remembered if turned off). The dots, the reticle, the
  Earth and the orbit's sun react to it, and the volume changes by chapter (it swells for "Home").
- **Far:** a live, approximate distance to Voyager 1 (`src/space.ts`).
- **Home:** a pinned pull-back from a full Earth to a dot smaller than a pixel in a band of sunlight,
  after Voyager's Pale Blue Dot (1990). Drawn on a canvas; it's an interpretation, not the photo.
- **Work:** the projects as satellites. Closer to the centre means closer to done. Then a horizontal reel of project cards.
- **How I work**, then **Contact**: light time to Voyager, plus how far it moved while you were on the page.
- **Reticle:** the cursor frames whatever it rests on. The autopilot drives the same reticle.
- **Autopilot:** starts on its own after the intro and does one fast lap (about 70 s). Long hops rush and brake hard,
  and stops last about as long as the words on screen take to read at a brisk pace. It shows the playground by itself
  (a ghost click, a hold), then hands over with "Your turn". Any wheel, touch, key or click takes control. A pause resumes
  after 5 s, longer each time you push it away; after the lap it waits 75 s.
- `Shift + A` opens an instrument panel (FPS, dot budget, autopilot state). If FPS stays low, the dot count is halved.

## Edit
- Words, marvels, projects, principles, email: `src/content.ts` (the email is a placeholder; see the TODO).
- Shapes: intro in `src/gl/shapes.ts`, marvels in `src/gl/marvels.ts`. Preview one with `?beat=webb|voyager|chip|people|name`.
- Autopilot cues: the `cues` array in `src/main.ts`.

## Run
```bash
npm install
npm run dev
npm run build
npm test               # smoke: intro, autopilot engage/yield/resume, sections, mobile
node test/play.mjs     # playground + one full autopilot lap → "your turn"
node test/perf.mjs     # frame times + long tasks on the real GPU (intro + tour)
node test/heroperf.mjs # the hero reel for 45 s
```
