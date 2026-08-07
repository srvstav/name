# Ayush Srivastav — portfolio

A tactile, single-page portfolio built with TypeScript, Vite, and Three.js. The hero uses a GPU vertex-shader particle field—no per-particle JavaScript updates—to create the evolving sphere.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` for the production build.

## Change the content

Edit the `projects` array and the placeholder copy in [src/main.ts](src/main.ts). The visual system lives in the same file, while layout, typography, responsive behavior, hover states, and fallback styling are in [src/style.css](src/style.css).

## Interaction notes

- Move through the hero to deform the particle field; move quickly to add a small velocity impulse.
- Click **Touch the field** or press inside the hero to create a focused particle bloom.
- Hover or keyboard-focus project rows for their preview state.
- Press the experiment cards for their micro-interactions.
- Press `Shift + A` to reveal the hidden instrumentation overlay; use `Escape` to dismiss it.

## Performance and resilience

The renderer uses WebGL with a shader-driven point cloud. It caps pixel ratio, lowers both pixel ratio and active particle count when frame time rises, pauses on hidden tabs, honours reduced-motion preferences, disposes GPU resources on page exit, and has a CSS fallback when WebGL cannot initialize.
