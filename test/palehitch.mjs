import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
const srv = spawn('npx', ['vite', 'preview', '--port', '4331', '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=metal', '--enable-gpu'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await p.goto('http://localhost:4331/'); await p.keyboard.press('Enter'); await p.waitForTimeout(6000);
const out = await p.evaluate(async () => {
  const s = window.__site; if (s.pilot.state !== 'off') s.pilot.toggle();
  const top = document.querySelector('#home').getBoundingClientRect().top + scrollY - 900;
  const res = []; let last = performance.now();
  for (let y = top; y < top + 4500; y += 18) {
    s.lenis.scrollTo(y, { immediate: true, force: true });
    await new Promise((r) => requestAnimationFrame(r));
    const now = performance.now(); if (now - last > 34) res.push(`y=${Math.round(y)} d=${Math.round(now - last)}`); last = now;
  }
  return { top, res };
});
console.log(JSON.stringify(out)); await b.close(); srv.kill();
