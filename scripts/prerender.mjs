// Prerenders every route in sitemap_data.json into static HTML under dist/,
// so search crawlers get real per-page <title>/<meta description> without
// needing to execute JavaScript. Runs after `vite build`: starts a preview
// server over the built dist/ output, visits each route with a headless
// browser, and writes the fully-rendered DOM back to dist/<route>/index.html.
// The original SPA script tags stay in the captured HTML, so the page still
// hydrates and behaves as a normal client-rendered app after first paint.
import { spawn } from 'node:child_process';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, 'dist');
const port = 4321;

async function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Preview server did not become ready at ${url}`);
}

async function main() {
  const sitemapPath = join(rootDir, 'sitemap_data.json');
  const sitemap = JSON.parse(await readFile(sitemapPath, 'utf-8'));
  const routes = [...new Set(sitemap.map((row) => row.path))];

  console.log(`Prerendering ${routes.length} routes...`);

  const preview = spawn(
    'npx',
    ['vite', 'preview', '--port', String(port), '--strictPort'],
    { cwd: rootDir, shell: true, stdio: ['ignore', 'pipe', 'pipe'] }
  );

  let previewFailed = false;
  preview.on('exit', (code) => {
    if (code !== null && code !== 0) previewFailed = true;
  });

  try {
    await waitForServer(`http://localhost:${port}/christcollgepune/`);

    const browser = await chromium.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();

    let ok = 0;
    let failed = [];
    for (const route of routes) {
      try {
        // 'load' rather than 'networkidle': the Home route's looping <video>
        // issues ongoing range requests once playback starts, so the page
        // never reaches network-idle and networkidle would time out here.
        await page.goto(`http://localhost:${port}/christcollgepune${route}`, { waitUntil: 'load', timeout: 15000 });
        await page.waitForTimeout(150);
        const html = await page.content();
        const outPath = route === '/' ? join(distDir, 'index.html') : join(distDir, route.slice(1), 'index.html');
        await mkdir(dirname(outPath), { recursive: true });
        await writeFile(outPath, html);
        ok += 1;
      } catch (err) {
        failed.push({ route, error: String(err) });
      }
    }

    await browser.close();

    console.log(`Prerendered ${ok}/${routes.length} routes.`);
    if (failed.length) {
      console.log(`Failed (${failed.length}):`);
      failed.forEach((f) => console.log(`  ${f.route}: ${f.error.split('\n')[0]}`));
    }
  } finally {
    preview.kill();
  }

  if (previewFailed) {
    throw new Error('vite preview server exited unexpectedly');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
