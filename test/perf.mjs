// Perf probe on the real GPU: frame times + main-thread long tasks, during the intro and an autopilot tour.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
const PORT = 4330, secs = Number(process.env.TOUR ?? 40);
const srv = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=metal', '--enable-gpu', '--disable-gpu-vsync', '--disable-frame-rate-limit'].slice(0, process.env.UNCAPPED ? 4 : 2) });
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await p.addInitScript(() => {
  const w = window; w.__perf = { marks: [], long: [] };
  let last = performance.now();
  const loop = (t) => { w.__perf.marks.push([t, t - last, scrollY]); last = t; requestAnimationFrame(loop); };
  requestAnimationFrame(loop);
  new PerformanceObserver((l) => l.getEntries().forEach((e) => w.__perf.long.push([e.startTime, e.duration]))).observe({ type: 'longtask', buffered: true });
});
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
await p.goto(`http://localhost:${PORT}/`);
await p.waitForFunction(() => window.__site?.introDone, null, { timeout: 30000 });
const introEnd = await p.evaluate(() => performance.now());
await p.waitForTimeout(secs * 1000);
const res = await p.evaluate((introEnd) => {
  const stat = (arr) => { const d = arr.map((m) => m[1]).sort((a, b) => a - b); const q = (k) => d[Math.min(d.length - 1, Math.floor(d.length * k))] ?? 0; return { frames: d.length, fps: +(1000 / (d.reduce((a, b) => a + b, 0) / d.length)).toFixed(1), p50: +q(.5).toFixed(1), p95: +q(.95).toFixed(1), p99: +q(.99).toFixed(1), max: +(d.at(-1) ?? 0).toFixed(1), over33: d.filter((x) => x > 33.4).length }; };
  const { marks, long } = window.__perf;
  const lt = (a, b) => long.filter(([t]) => t >= a && t < b);
  const sum = (l) => ({ n: l.length, ms: Math.round(l.reduce((a, [, d]) => a + d, 0)), worst: Math.round(Math.max(0, ...l.map(([, d]) => d))) });
  return { intro: stat(marks.filter(([t]) => t > 500 && t < introEnd)), tour: stat(marks.filter(([t]) => t >= introEnd + 1000)), longIntro: sum(lt(0, introEnd)), longTour: sum(lt(introEnd, 1e12)), hitches: marks.filter(([t, d]) => d > 33.4 && t > 500).map(([t, d, y]) => `${Math.round(t)}ms d=${Math.round(d)} y=${Math.round(y)}`), longs: long.map(([t, d]) => `${Math.round(t)}+${Math.round(d)}`), introEnd: Math.round(introEnd), y: scrollY, pilot: window.__site.pilot.state };
}, introEnd);
console.log(JSON.stringify(res, null, 1));
if (errs.length) console.log('ERRORS', errs);
await b.close(); srv.kill();
