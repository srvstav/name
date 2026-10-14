import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
const srv = spawn('npx', ['vite', 'preview', '--port', '4332', '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=metal', '--enable-gpu'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await p.addInitScript(() => {
  const w = window; w.__h = []; w.__l = []; let last = performance.now();
  const f = (t) => { if (t - last > 25) w.__h.push([Math.round(t), Math.round(t - last)]); last = t; requestAnimationFrame(f); }; requestAnimationFrame(f);
  new PerformanceObserver((l) => l.getEntries().forEach((e) => w.__l.push([Math.round(e.startTime), Math.round(e.duration)]))).observe({ type: 'longtask', buffered: true });
});
await p.goto('http://localhost:4332/'); await p.keyboard.press('Enter');
await p.evaluate(() => { const s = window.__site; if (s.pilot.state !== 'off') s.pilot.toggle(); window.__t0 = performance.now(); });
await p.waitForTimeout(45000);
console.log(JSON.stringify(await p.evaluate(() => ({ t0: Math.round(window.__t0), hitches: window.__h, longs: window.__l }))));
await b.close(); srv.kill();
