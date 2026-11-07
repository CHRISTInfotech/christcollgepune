import fs from 'fs';
import path from 'path';
import os from 'os';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';

// Ghostscript is the only reliable cross-platform way to recompress the
// images embedded inside a PDF (pdf-lib/pdfjs can't re-encode embedded
// streams). It isn't bundled with Node, so we look for whatever the local
// OS/package manager would have installed it as, including the default
// Windows install path (the installer doesn't always add it to PATH).
function findGhostscriptBinary() {
  const candidates =
    os.platform() === 'win32'
      ? ['gswin64c', 'gswin32c']
      : ['gs'];

  for (const bin of candidates) {
    try {
      execFileSync(bin, ['--version'], { stdio: 'ignore' });
      return bin;
    } catch {
      // not on PATH, keep looking
    }
  }

  if (os.platform() === 'win32') {
    const gsRoot = 'C:\\Program Files\\gs';
    if (fs.existsSync(gsRoot)) {
      const versions = fs.readdirSync(gsRoot).sort().reverse();
      for (const version of versions) {
        for (const exe of ['gswin64c.exe', 'gswin32c.exe']) {
          const full = path.join(gsRoot, version, 'bin', exe);
          if (fs.existsSync(full)) return full;
        }
      }
    }
  }

  return null;
}

export function installInstructions() {
  switch (os.platform()) {
    case 'win32':
      return 'Install Ghostscript: winget install ArtifexSoftware.GhostScript (or https://ghostscript.com/releases/gsdnld.html)';
    case 'darwin':
      return 'Install Ghostscript: brew install ghostscript';
    default:
      return 'Install Ghostscript: sudo apt-get install ghostscript (Debian/Ubuntu) or your distro\'s package manager';
  }
}

let cachedBinary;
export function getGhostscriptBinary() {
  if (cachedBinary === undefined) cachedBinary = findGhostscriptBinary();
  return cachedBinary;
}

// Compresses one PDF in place via Ghostscript's /ebook preset (downsamples
// images to ~150dpi, which is visually lossless on screen — this site only
// ever displays these PDFs in a web viewer, never prints them). Never writes
// back unless the result is valid and strictly smaller.
export function compressPdf(filePath, gsBinary = getGhostscriptBinary()) {
  if (!gsBinary) return { changed: false, skipped: 'no-ghostscript' };

  const originalSize = fs.statSync(filePath).size;
  const tmpOut = path.join(os.tmpdir(), `gs-compress-${Date.now()}-${Math.random().toString(36).slice(2)}.pdf`);

  try {
    execFileSync(
      gsBinary,
      [
        '-sDEVICE=pdfwrite',
        '-dCompatibilityLevel=1.4',
        '-dPDFSETTINGS=/ebook',
        '-dNOPAUSE',
        '-dBATCH',
        '-dQUIET',
        '-dSAFER',
        `-sOutputFile=${tmpOut}`,
        filePath,
      ],
      { stdio: 'ignore' }
    );
  } catch (err) {
    if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut);
    return { changed: false, error: err.message };
  }

  if (!fs.existsSync(tmpOut) || fs.statSync(tmpOut).size === 0) {
    if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut);
    return { changed: false, originalSize, newSize: originalSize };
  }

  const newSize = fs.statSync(tmpOut).size;
  if (newSize >= originalSize) {
    fs.unlinkSync(tmpOut);
    return { changed: false, originalSize, newSize: originalSize };
  }

  fs.copyFileSync(tmpOut, filePath);
  fs.unlinkSync(tmpOut);
  return { changed: true, originalSize, newSize };
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (path.extname(entry.name).toLowerCase() === '.pdf') out.push(full);
  }
  return out;
}

// CLI entry point: node scripts/compress-pdfs.mjs [dir]
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const gsBinary = getGhostscriptBinary();
  if (!gsBinary) {
    console.error(`Ghostscript not found. ${installInstructions()}`);
    process.exit(1);
  }
  console.log(`Using Ghostscript: ${gsBinary}`);

  const targetDir = process.argv[2] || 'src/assets';
  const files = walk(targetDir);
  let totalBefore = 0;
  let totalAfter = 0;
  let changedCount = 0;

  for (const file of files) {
    const result = compressPdf(file, gsBinary);
    if (result.error) {
      console.log(`  SKIP (error): ${file} — ${result.error}`);
      continue;
    }
    totalBefore += result.originalSize || 0;
    totalAfter += result.newSize ?? result.originalSize ?? 0;
    if (result.changed) {
      changedCount++;
      const pct = (100 * (1 - result.newSize / result.originalSize)).toFixed(1);
      console.log(`  ${file}: ${(result.originalSize / 1024 / 1024).toFixed(2)}MB -> ${(result.newSize / 1024 / 1024).toFixed(2)}MB (-${pct}%)`);
    }
  }

  console.log(`\nScanned ${files.length} PDFs, compressed ${changedCount}.`);
  console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
}
