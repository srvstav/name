import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
const srv = spawn('npx', ['vite', 'preview', '--port', '4321', '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:4321/'); await p.keyboard.press('Enter'); await p.waitForTimeout(1500);
await p.evaluate(() => { const s = window.__site; s.pilot.toggle(); if (s.pilot.state !== 'off') s.pilot.toggle(); });
const top = await p.evaluate(() => document.querySelector('#home').getBoundingClientRect().top + scrollY);
for (const k of [0.02, 0.3, 0.55, 0.92]) {
  await p.evaluate((y) => window.__site.lenis.scrollTo(y, { immediate: true }), top + k * 900 * 3.3);
  await p.waitForTimeout(1500); await p.screenshot({ path: `test/pale-${k}.png` });
}
await b.close(); srv.kill();
