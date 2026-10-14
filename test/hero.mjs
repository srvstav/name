// Screenshots each marvel on the hero (desktop + phone), and checks the playground responds.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
const srv = spawn('npx', ['vite', 'preview', '--port', '4324', '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=metal', '--enable-gpu'] });
const errs = [];
for (const [vw, vh, tag] of [[1440, 900, 'd'], [390, 844, 'm']]) {
  const p = await b.newPage({ viewport: { width: vw, height: vh }, deviceScaleFactor: 2, isMobile: tag === 'm', hasTouch: tag === 'm' });
  p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
  await p.goto('http://localhost:4324/'); await p.keyboard.press('Enter'); await p.waitForTimeout(300);
  await p.evaluate(() => { const s = window.__site; if (s.pilot.state !== 'off') s.pilot.toggle(); });
  const only = process.argv[2];
  for (let k = 0; k < 8; k++) {
    if (only && String(k) !== only) continue;
    await p.evaluate((k) => window.__site.reel.to(k), k);
    await p.waitForTimeout(k === 1 ? 2400 : 2600);
    await p.screenshot({ path: `test/marvel-${tag}-${k}.png` });
  }
}
console.log(errs.length ? 'ERRORS ' + errs.join('\n') : 'no errors');
await b.close(); srv.kill();
