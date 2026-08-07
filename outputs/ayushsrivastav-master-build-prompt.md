# Master Build Prompt — Ayushsrivastav.com

Copy everything below into your frontier coding model.

```text
You are the lead creative technologist responsible for designing and implementing ayushsrivastav.com from the current workspace. Act simultaneously as a senior interaction designer, art director, React/TypeScript engineer, Three.js/WebGL/WebGPU engineer, accessibility specialist, and performance engineer.

This is an implementation task, not a request for a concept, moodboard, tutorial, or partial code sample. Inspect the repository first. If it is empty, scaffold the application from zero. Build the site, install the necessary dependencies, run it locally, inspect the rendered result in a real browser, test the interactions, profile the rendering path, and iterate until the result feels intentional and production-ready.

Do not stop after producing a plausible first pass. Treat the first render as a prototype. Compare it against the brief, identify what looks generic or technically fragile, and improve it. If a visual decision is ambiguous, use taste, restraint, and hierarchy rather than adding more effects.

## 1. Product and creative brief

Build a personal portfolio for Ayush Srivastav at ayushsrivastav.com.

The central identity is a living field of particles: a dense, volumetric sphere made from thousands of dots whose positions are continuously changing. It should feel like a physical, intelligent, breathing object—not a static wireframe, a starfield, a screensaver, or a generic “AI” background.

The sphere is the signature opening scene and a recurring visual motif. It should appear most strongly in the hero, then return in quieter and more abstract forms during project transitions and in the footer. It must never make the rest of the website unreadable or feel like an unrelated demo embedded in a portfolio.

The site should feel authored by a human with a point of view: editorial, tactile, curious, slightly cinematic, technically exact, and emotionally quiet. It should reward attention through timing, spatial composition, and small details instead of shouting through saturated gradients, excessive glow, or constant motion.

Use the following as research references only:

- React Bits for the quality and variety of reusable interaction patterns, especially ideas related to Dot Field, Orb, Threads, Magnet, Scrambled Text, Scroll Reveal, and Variable Proximity: https://reactbits.dev/get-started/index
- Awwwards’ Three.js collection for the standard of art direction, pacing, typography, and interaction finish: https://www.awwwards.com/websites/three-js/?page=10
- Lando Norris’s official website for the idea of a site behaving like a vertical, narrative experience with locked states, clear chapters, and content that feels like a “drive”: https://landonorris.com/

Do not clone any referenced site. Do not reproduce its branding, layout, copy, imagery, colors, or distinctive interaction. Extract principles only, then create an original visual language for Ayushsrivastav.com.

## 2. Non-negotiable anti-patterns

Do not make this look like an AI-generated template. Specifically avoid:

- cheap purple/blue gradient backgrounds;
- default glassmorphism cards everywhere;
- random blobs, liquid blobs, or decorative noise without meaning;
- a generic “creative developer” landing page with oversized gradient text;
- excessive neon cyberpunk styling;
- gratuitous chromatic aberration, bloom, lens flares, or scanlines;
- every section reacting to the mouse;
- every heading animating with the same reveal;
- a full-screen particle demo that competes with the content;
- meaningless 3D objects added only to signal technical ability;
- stock copy, fabricated clients, invented awards, invented metrics, or invented work history;
- visually impressive effects that make navigation, reading, or mobile use worse.

The design must have contrast through scale, rhythm, whitespace, typography, density, and motion—not only through color.

## 3. Brand and design direction

Use an editorial visual system with:

- one strong display typeface and one highly legible reading/UI typeface, or a disciplined variable type system;
- large but controlled typography;
- generous negative space;
- an asymmetrical but coherent grid;
- thin rules, small metadata labels, precise alignment, and occasional oversized numerals or coordinates;
- a restrained neutral foundation with one carefully selected accent family;
- clear separation between primary content, supporting metadata, and experimental details;
- a visual rhythm that alternates between dense moments and calm moments.

Choose colors only after establishing composition. Do not let color carry the entire concept. The particle sphere must remain compelling even in a largely monochrome treatment.

Use motion as editorial punctuation. The page should have pauses, acceleration, settling, and recovery. Avoid infinite uniform motion at one speed.

The visual language should suggest a person thinking, making, testing, and refining. It may contain subtle traces of instruments, coordinates, calibration, measurement, or process, but these should feel designed and useful rather than like fake sci-fi interface decoration.

## 4. Page structure

Create a polished single-page portfolio experience unless the existing repository clearly requires a different routing model. Keep the architecture extensible for future case-study routes.

### Hero

Create an opening viewport with:

- “Ayush Srivastav” as the primary identity;
- an editable positioning statement such as “Designer / developer / builder of thoughtful digital experiences” only as a placeholder, not a final claim;
- minimal navigation to Work, About, Experiments, and Contact;
- the living particle sphere as the main visual event;
- an understated scroll invitation;
- an intentional loading state that feels like part of the system rather than a spinner.

The hero must establish hierarchy within the first few seconds. The sphere may occupy a large portion of the viewport, but the visitor must immediately understand whose site this is and what they can do next.

### Selected work

Create a data-driven project section with editable placeholder entries. Each project should support:

- title;
- short description;
- role;
- year;
- category or discipline;
- status;
- link placeholder;
- optional image or media placeholder.

Use restrained hover physics or pointer proximity on project rows/cards. A project may subtly attract, tilt, reveal metadata, or expose a preview, but the interaction must remain useful and keyboard-accessible.

### About and process

Use clear, human-scale writing about how Ayush thinks and works. Do not invent a résumé. Mark all uncertain personal statements as editable content. The layout should give the visitor a sense of personality without using exaggerated self-promotion.

### Experiments

Include a small section for experiments, prototypes, or visual studies. This may contain compact interactive moments derived from the sphere’s motion language, but keep it subordinate to the main portfolio narrative.

### Contact

Make contact obvious and low friction. Include editable email and social-link placeholders. Avoid a contact section that feels like an afterthought.

### Footer

End with a quiet, reduced version of the particle language, a small technical signature, and the site name. The footer should feel like the system exhaling, not another hero section.

## 5. Particle sphere: visual behavior

Implement a true volumetric particle field rather than a flat circular cloud.

The baseline sphere should have:

- several thousand particles on capable desktop hardware;
- a deterministic seed so the initial arrangement is stable between reloads;
- a genuinely volumetric distribution with layered depth;
- a nonuniform but coherent density profile;
- subtle surface and interior variation;
- depth-aware size and opacity;
- soft point sprites or another efficient particle primitive;
- gentle parallax from camera movement;
- no obvious repeating loops shorter than the visitor’s attention span.

The sphere should look alive even when the pointer is still. Its motion should be generated from layered forces rather than a single rotation:

1. Slow autonomous breathing: the radius and density subtly expand and contract.
2. Flow-field drift: particles follow coherent curl-noise or domain-warped motion instead of independent jitter.
3. Elastic pointer influence: the pointer creates a localized deformation with inertia, falloff, and a delayed return to equilibrium.
4. Scroll influence: scrolling changes the camera, phase, rotation, compression, or field orientation in a controlled way.
5. Attention state: when the visitor pauses or hovers near the hero, the system may briefly settle, focus, or reorganize before returning to its baseline.
6. Controlled reformation: at one carefully chosen moment, a subset or layer of particles may briefly suggest a wordmark, geometric signal, or recognizable structure before dissolving. It must be subtle and not feel like a cheap logo animation.

Use temporal composition. The system should occasionally be still enough to be read, then become more active in response to meaningful input. Do not keep every degree of freedom moving at maximum intensity.

The motion must feel physical. Use damping, spring-like return forces, non-linear easing, smoothstep-like transitions, and bounded values. Avoid abrupt teleports, noisy randomness, and uncontrolled simulation drift.

## 6. Particle sphere: graphics architecture

Use a renderer abstraction with three capability tiers:

### Tier A: WebGPU

Prefer a WebGPU path when the browser and device support it. Use Three.js’s WebGPU renderer and TSL/WGSL-compatible materials where appropriate. WebGPU initialization is asynchronous; handle that explicitly and never show a broken or blank canvas while it initializes.

### Tier B: WebGL2

Provide a robust WebGL2 fallback. Use GPUComputationRenderer, ping-pong render targets, floating-point textures, vertex shaders, or an equivalent GPU simulation technique where supported. Keep the particle simulation on the GPU rather than updating thousands of particle positions in JavaScript every frame.

### Tier C: graceful fallback

If neither usable WebGPU nor WebGL2 is available, show an intentional static/CSS fallback that preserves the visual identity and content hierarchy. The site must remain readable, navigable, and complete.

Do not claim to use WebGPU, compute shaders, or GPU simulation unless the implementation actually uses them. Document the selected path and its fallback behavior.

Use `setAnimationLoop` or the renderer’s appropriate animation API. Use asynchronous shader compilation/preparation when available. Cap device pixel ratio. Pause or reduce work when the document is hidden. Correctly dispose of geometries, materials, textures, render targets, event listeners, and animation loops.

Handle:

- viewport resize;
- device-pixel-ratio changes;
- orientation changes;
- WebGL context loss and restoration;
- WebGPU initialization failure;
- mobile touch input;
- reduced-motion preferences;
- low-power devices;
- route changes or component unmounting.

Prefer direct Three.js control when React Three Fiber would add unnecessary abstraction or render-loop overhead. If React Three Fiber is used, keep the simulation and animation state outside ordinary React state and avoid per-frame component re-renders.

## 7. Typed configuration and renderer-independent interfaces

Create a small typed configuration layer so visual tuning does not require searching through shader code. The configuration should cover at least:

- particle count;
- simulation resolution;
- particle size range;
- density profile;
- breathing amplitude and speed;
- flow-field strength and scale;
- cursor influence radius and strength;
- scroll influence;
- idle/attention thresholds;
- quality tier;
- pixel-ratio cap;
- post-processing level;
- reduced-motion behavior;
- preferred renderer backend;
- debug/instrument mode.

Create a renderer-independent simulation contract. For example, the scene layer should be able to request initialization, resize, pointer input, scroll input, frame updates, render, quality changes, diagnostics, and disposal without knowing whether the active implementation is WebGPU or WebGL2.

Keep shader source and simulation code modular. Avoid one enormous component that mixes DOM, layout, input handling, GPU initialization, shaders, debug UI, and content data.

## 8. Adaptive performance system

Build a quality controller based on measured frame time, not on the user-agent string alone.

It should be able to adapt:

- particle count;
- simulation texture size;
- device pixel ratio;
- point size and post-processing;
- interaction complexity;
- update frequency for nonessential effects.

Use hysteresis and gradual transitions so the quality level does not oscillate every few frames. Make quality changes invisible or visually graceful.

Suggested intent, not a rigid promise:

- high tier: dense particles, full interaction, crisp rendering;
- balanced tier: reduced simulation resolution and moderate particle count;
- low tier: simplified motion and fewer particles;
- reduced-motion tier: minimal or paused movement while preserving the scene’s composition.

Do not make unsupported claims such as “zero latency” or “guaranteed 60 FPS.” Measure actual frame timing in the target environment and report the result.

Avoid:

- per-frame React state updates;
- per-frame array creation;
- per-particle JavaScript loops for the main simulation;
- unnecessary object allocations;
- unbounded pointer or scroll listeners;
- repeated layout reads in the animation loop;
- multiple canvases when one composited scene is sufficient;
- large post-processing chains that do not materially improve the image.

## 9. Interaction design

Every interaction must have a reason. It should provide hierarchy, orientation, emotion, feedback, or discovery.

Use:

- a cursor field that is spatially localized rather than globally warping everything;
- pointer velocity only when it adds a sense of momentum;
- hover states that settle cleanly;
- scroll-driven transitions with clear start and end states;
- occasional magnetic behavior on selected controls, never every control;
- text reveals that respect reading order;
- micro-variation in timing so the site does not feel mechanically stamped out.

The visitor should be able to understand the site without discovering every interaction. Motion is a layer of depth, not a prerequisite for comprehension.

Support mouse, touch, keyboard, and coarse-pointer devices. Do not build interactions that only work with a desktop mouse.

## 10. Accessibility and resilience

The WebGL canvas is decorative and must not be the only place where meaning exists. Keep headings, navigation, project information, links, and controls in semantic DOM.

Include:

- a skip link;
- semantic landmarks;
- visible keyboard focus states;
- keyboard-accessible project links and controls;
- useful labels for buttons and links;
- sufficient contrast;
- `prefers-reduced-motion` support;
- a non-WebGL fallback;
- no critical content hidden inside canvas pixels;
- no interaction that depends only on color;
- no forced device rotation;
- no layout shift caused by canvas initialization.

The loading state should preserve layout and communicate progress without blocking the entire page longer than necessary.

## 11. Hidden easter egg: instrument mode

Add a hidden developer-quality instrument mode activated by a subtle keyboard gesture such as `Shift + A`. Do not advertise it in the main navigation.

When activated, reveal an elegant, minimal overlay showing live diagnostics such as:

- active renderer backend;
- quality tier;
- particle count;
- simulation resolution;
- frame time;
- approximate frame rate;
- draw calls;
- renderer memory counts when available;
- adaptive-quality state;
- reduced-motion state.

The overlay should feel like a designed instrument panel, not a default browser debug dump. It must not change the composition or affect normal visitors unless activated. Ensure it can be closed with the same gesture or Escape.

This is the small detail that should make a good programmer smile: the scene is not merely beautiful; it explains itself to the person maintaining it, without exposing implementation clutter to ordinary visitors.

## 12. Content rules

Use Ayush Srivastav and ayushsrivastav.com as the identity.

Create polished editable placeholders for:

- positioning statement;
- project titles;
- project descriptions;
- dates;
- roles;
- metrics;
- project links;
- email;
- social links;
- about copy.

Never invent factual achievements, clients, employment, awards, revenue, performance results, or case-study outcomes. If sample text is needed, label it clearly as placeholder content in the source so it can be replaced safely.

Keep portfolio content in a data structure rather than scattering it through JSX. Make replacing the placeholder projects a simple edit.

## 13. Technical quality bar

Use strict TypeScript where practical. Keep components composable and files understandable. Use stable, maintained dependencies and avoid adding libraries merely because they are fashionable.

Prefer:

- semantic HTML;
- CSS variables/tokens for the design system;
- predictable layout primitives;
- CSS transitions for simple UI motion;
- a dedicated animation library only when it genuinely improves orchestration;
- clean separation between content, layout, interaction, rendering, and diagnostics;
- deterministic particle seeds for reproducible visual debugging.

If the repository is empty, choose a modern React + TypeScript setup with a production-quality development script and build script. Favor Next.js when SEO, routing, and metadata are useful; favor Vite when a focused client-rendered experience is the more reliable choice. Explain the choice briefly in the final report.

## 14. Required build-and-iterate workflow

Follow this sequence:

1. Inspect the workspace and existing package configuration.
2. Decide the framework and dependency set.
3. Scaffold or adapt the application.
4. Establish the design tokens, type system, page shell, and content data.
5. Implement the simplest readable hero and DOM structure first.
6. Implement the particle sphere behind a renderer-independent interface.
7. Add WebGPU, WebGL2, and graceful fallback capability paths.
8. Add interaction, adaptive quality, reduced-motion behavior, and diagnostics.
9. Run the application in a browser and inspect the actual rendered composition at desktop and mobile dimensions.
10. Fix visual problems: generic composition, weak hierarchy, excessive motion, poor spacing, unreadable text, awkward loading, or anything that resembles a template.
11. Run type checks, linting, tests, production build, and any available browser checks.
12. Profile frame timing and verify resource cleanup.
13. Revisit the design after profiling so performance compromises remain visually intentional.

Do not treat a successful build as proof that the work is complete. The visual result and the interaction behavior must be inspected.

## 15. Acceptance criteria

The implementation is complete only when all of the following are true:

- The homepage clearly identifies Ayush Srivastav.
- The hero contains a dense, volumetric, continuously changing particle sphere.
- The particles are GPU-driven or use the most capable practical GPU path available, with a documented fallback.
- Cursor and scroll interactions feel elastic, bounded, and intentional.
- The sphere has moments of calm and activity rather than constant noisy motion.
- The page remains readable while the sphere is active.
- Work, About, Experiments, Contact, and Footer sections feel like one designed experience.
- Portfolio content is editable and does not contain fabricated facts.
- The site works with keyboard navigation, touch input, reduced motion, and no usable WebGL/WebGPU.
- The canvas does not cause layout shift or hydration errors.
- There are no console errors in the normal flow.
- GPU resources, event listeners, and animation loops are cleaned up correctly.
- Adaptive quality responds to measured frame time and does not oscillate visibly.
- Instrument mode exposes useful diagnostics without making the production design look like a dev tool.
- The result feels distinctive and human, not like a collection of popular ReactBits demos.

## 16. Final response requirements

When the implementation is complete, report:

1. What was built.
2. The chosen framework and rendering strategy.
3. The main files or modules created.
4. How the WebGPU/WebGL2/fallback paths work.
5. How the adaptive quality system works.
6. How to edit portfolio content and particle tuning values.
7. Commands used for development, testing, and production build.
8. Browser/device scenarios tested.
9. Measured frame-time or performance observations, with no unsupported guarantees.
10. Any known limitations or follow-up opportunities.

Build the experience with ambition, but make every ambitious element earn its place.
```
