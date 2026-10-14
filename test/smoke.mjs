// Smoke test: boots the built site; checks intro beats, autopilot engage → takeover → resume, sections, mobile.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
const PORT = 4319, URL = `http://localhost:${PORT}/`;
const srv = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2500));
const shots = process.env.SHOTS !== '0';
const fail = (m) => { console.error('FAIL:', m); srv.kill(); process.exit(1); };
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const errs = [];
const watch = (p, tag) => { p.on('pageerror', (e) => errs.push(`${tag}: ${e.message}`)); p.on('console', (m) => m.type() === 'error' && errs.push(`${tag}: ${m.text()}`)); };
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  watch(page, 'desktop');
  await page.goto(URL);
  for (const [ms, name] of [[2600, '01-huddle'], [3000, '02-webb'], [3100, '03-voyager'], [2900, '04-chip'], [2500, '05-people'], [2600, '06-name']]) {
    await page.waitForTimeout(ms); if (shots) await page.screenshot({ path: `test/${name}.png` });
  }
  await page.waitForTimeout(2500);
  if (!(await page.evaluate(() => window.__site.introDone))) fail('intro did not finish on its own');
  if (shots) await page.screenshot({ path: 'test/07-hero.png' });
  await page.waitForTimeout(2500);
  if ((await page.evaluate(() => window.__site.pilot.state)) !== 'flying') fail('autopilot did not engage after intro');
  await page.waitForTimeout(9000);
  const y1 = await page.evaluate(() => scrollY);
  if (y1 < 200) fail('autopilot did not travel: ' + y1);
  if (shots) await page.screenshot({ path: 'test/08-pilot.png' });
  await page.mouse.wheel(0, 300); await page.waitForTimeout(300);
  if ((await page.evaluate(() => window.__site.pilot.state)) !== 'paused') fail('wheel did not hand control back');
  await page.waitForTimeout(6800);
  if ((await page.evaluate(() => window.__site.pilot.state)) !== 'flying') fail('autopilot did not resume after pause');
  await page.mouse.wheel(0, 100); // take over again for section screenshots
  for (const [sel, f] of [['#distance', '09-distance'], ['#work', '10-orbit'], ['#files', '11-files'], ['#how', '12-how'], ['#contact', '13-contact']]) {
    await page.evaluate((s) => { window.__site.pilot.toggle(); if (window.__site.pilot.state !== 'off') window.__site.pilot.toggle(); window.__site.lenis.scrollTo(s, { immediate: true, offset: s === '#files' ? 900 : 0 }); }, sel);
    await page.waitForTimeout(1600);
    if (shots) await page.screenshot({ path: `test/${f}.png` });
  }
  const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  watch(m, 'mobile');
  await m.goto(URL); await m.waitForTimeout(6000);
  if (shots) await m.screenshot({ path: 'test/14-mobile-intro.png' });
  await m.keyboard.press('Enter'); await m.waitForTimeout(2500);
  if (shots) await m.screenshot({ path: 'test/15-mobile-hero.png' });
  if (await m.evaluate(() => document.documentElement.scrollWidth > innerWidth)) fail('horizontal scroll on mobile');
  const real = errs.filter((e) => !/fonts\.g|net::ERR|GPU stall/.test(e));
  if (real.length) fail(real.join('\n'));
  console.log('PASS: intro beats, autopilot engage/yield/resume, sections, mobile');
} finally { await browser.close(); srv.kill(); }
