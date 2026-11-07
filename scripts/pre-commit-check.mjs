import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { compressImage } from './compress-images.mjs';
import { compressPdf, getGhostscriptBinary, installInstructions } from './compress-pdfs.mjs';

const MAX_BYTES = 15 * 1024 * 1024; // GitHub's hard per-file limit

function getStagedFiles() {
  const output = execFileSync('git', ['diff', '--cached', '--name-only', '--diff-filter=ACM'], {
    encoding: 'utf8',
  });
  return output.split('\n').filter(Boolean);
}

function reStage(filePath) {
  execFileSync('git', ['add', filePath]);
}

function formatMB(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}

const stagedFiles = getStagedFiles().filter((f) => fs.existsSync(f) && fs.statSync(f).isFile());

let gsBinary;
let warnedNoGhostscript = false;
const oversized = [];

for (const filePath of stagedFiles) {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
    const result = await compressImage(filePath);
    if (result.changed) {
      console.log(`[compress] ${filePath}: ${formatMB(result.originalSize)}MB -> ${formatMB(result.newSize)}MB`);
      reStage(filePath);
    }
  } else if (ext === '.pdf') {
    if (gsBinary === undefined) gsBinary = getGhostscriptBinary();
    if (gsBinary) {
      const result = compressPdf(filePath, gsBinary);
      if (result.changed) {
        console.log(`[compress] ${filePath}: ${formatMB(result.originalSize)}MB -> ${formatMB(result.newSize)}MB`);
        reStage(filePath);
      }
    } else if (!warnedNoGhostscript) {
      console.log(`[compress] Ghostscript not found — PDFs will be committed uncompressed. ${installInstructions()}`);
      warnedNoGhostscript = true;
    }
  }

  const size = fs.statSync(filePath).size;
  if (size > MAX_BYTES) {
    oversized.push({ filePath, size });
  }
}

if (oversized.length > 0) {
  console.error('\nCommit blocked — the following files exceed the 15MB GitHub limit even after compression:');
  for (const { filePath, size } of oversized) {
    console.error(`  ${filePath} (${formatMB(size)}MB)`);
  }
  console.error('\nReduce these files below 15MB (or use Git LFS) before committing.');
  process.exit(1);
}

process.exit(0);
