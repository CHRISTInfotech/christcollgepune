import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

// Compresses one image file in place. Never writes back unless the result is
// strictly smaller, so this can never make an image worse — only skips it.
export async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.has(ext)) return { changed: false };

  const originalBuffer = fs.readFileSync(filePath);
  const originalSize = originalBuffer.length;

  let outputBuffer;
  try {
    const image = sharp(originalBuffer, { failOn: 'none' }).rotate(); // rotate() bakes in EXIF orientation
    if (ext === '.png') {
      outputBuffer = await image
        .png({ compressionLevel: 9, effort: 10, palette: false })
        .toBuffer();
    } else {
      outputBuffer = await image
        .jpeg({ quality: 88, mozjpeg: true, progressive: true })
        .toBuffer();
    }
  } catch (err) {
    return { changed: false, error: err.message };
  }

  if (!outputBuffer || outputBuffer.length >= originalSize) {
    return { changed: false, originalSize, newSize: originalSize };
  }

  fs.writeFileSync(filePath, outputBuffer);
  return { changed: true, originalSize, newSize: outputBuffer.length };
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

// CLI entry point: node scripts/compress-images.mjs [dir]
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const targetDir = process.argv[2] || 'src/assets';
  const files = walk(targetDir);
  let totalBefore = 0;
  let totalAfter = 0;
  let changedCount = 0;

  for (const file of files) {
    const result = await compressImage(file);
    if (result.error) {
      console.log(`  SKIP (error): ${file} — ${result.error}`);
      continue;
    }
    totalBefore += result.originalSize || 0;
    totalAfter += result.newSize ?? result.originalSize ?? 0;
    if (result.changed) {
      changedCount++;
      const pct = (100 * (1 - result.newSize / result.originalSize)).toFixed(1);
      console.log(`  ${file}: ${(result.originalSize / 1024).toFixed(0)}KB -> ${(result.newSize / 1024).toFixed(0)}KB (-${pct}%)`);
    }
  }

  console.log(`\nScanned ${files.length} images, compressed ${changedCount}.`);
  console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
}
