// The playground: click scatters, hold gathers, drag turns, typing writes; then a full autopilot lap ends in "your turn".
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
const srv = spawn('npx', ['vite', 'preview', '--port', '4333', '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=metal', '--enable-gpu'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
const fail = (m) => { console.error('FAIL:', m); srv.kill(); process.exit(1); };
const u = (k) => p.evaluate((k) => window.__site.field.u[k].value, k);
await p.goto('http://localhost:4333/'); await p.keyboard.press('Enter'); await p.waitForTimeout(2500);
await p.evaluate(() => { const s = window.__site; if (s.pilot.state !== 'off') s.pilot.toggle(); });
await p.mouse.click(950, 300); await p.waitForTimeout(150);
if ((await u('uBurst')) < .3) fail('click did not scatter');
await p.screenshot({ path: 'test/play-burst.png' });
await p.waitForTimeout(1500);
await p.mouse.move(950, 320); await p.mouse.down(); await p.waitForTimeout(900);
if ((await u('uHold')) < .5) fail('hold did not gather');
await p.screenshot({ path: 'test/play-hold.png' });
await p.mouse.up(); await p.waitForTimeout(1200);
const s0 = await u('uSpin');
await p.mouse.move(900, 330); await p.mouse.down(); for (let i = 0; i < 12; i++) await p.mouse.move(900 + i * 25, 330); await p.mouse.up();
await p.waitForTimeout(200);
if (Math.abs((await u('uSpin')) - s0) < .2) fail('drag did not turn');
await p.click('#write'); await p.keyboard.type('hello'); await p.waitForTimeout(2200);
await p.screenshot({ path: 'test/play-write.png' });
await p.fill('#write', ''); await p.waitForTimeout(400);
// one full lap, hands-off
await p.evaluate(() => { window.__site.lenis.scrollTo(0, { immediate: true }); window.__site.pilot.toggle(); });
const t0 = Date.now(); let st = '';
while (Date.now() - t0 < 180000) { await p.waitForTimeout(2000); st = await p.evaluate(() => window.__site.pilot.state); if (st === 'done') break; }
if (st !== 'done') fail('autopilot lap did not finish: ' + st);
console.log('lap seconds:', Math.round((Date.now() - t0) / 1000));
await p.screenshot({ path: 'test/play-done.png' });
if (errs.length) fail(errs.join('\n'));
console.log('PASS: scatter, gather, turn, write, full lap → your turn');
await b.close(); srv.kill();
