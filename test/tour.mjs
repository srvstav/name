import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
const srv = spawn('npx', ['vite', 'preview', '--port', '4323', '--strictPort'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:4323/'); await p.keyboard.press('Enter');
for (let i = 0; i < 22; i++) {
  await p.waitForTimeout(6000);
  const info = await p.evaluate(() => `${window.__site.pilot.state} y=${Math.round(scrollY)} ${document.querySelector('#pilotChapter').textContent} | ${document.querySelector('#reticleLabel').textContent}`);
  console.log(i * 6 + 6, info);
  await p.screenshot({ path: `test/tour-${String(i).padStart(2, '0')}.png` });
}
await b.close(); srv.kill();
