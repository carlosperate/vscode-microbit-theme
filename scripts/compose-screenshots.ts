// Composes the six per-theme screenshots in docs/screenshots/ into a single
// preview.png laid out as 3 cols (Pixel / Spark / Halo) x 2 rows (Light / Dark).
//
// Inputs:  docs/screenshots/microbit-{family}-{mode}.png  (macOS window captures,
//          shadow kept, transparent background)
// Output:  docs/screenshots/preview.png

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const families = ["pixel", "spark", "halo"] as const;
const modes = ["light", "dark"] as const;

const screenshotsDir = join(import.meta.dirname, "..", "docs", "screenshots");
const outPath = join(screenshotsDir, "preview.png");
const outPathSmall = join(screenshotsDir, "preview-small.png");
const smallWidth = 1500;

// Transparent background so the macOS shadows blend onto whatever surface
// the composite is rendered on (README, marketplace page, etc.).
const background = { r: 0, g: 0, b: 0, alpha: 0 };
const gap = 24; // px between cells
const padding = 32; // px around the whole grid

type Cell = { family: string; mode: string; buf: Buffer; w: number; h: number };

async function main() {
  const cells: Cell[] = [];
  for (const mode of modes) {
    for (const family of families) {
      const file = join(screenshotsDir, `microbit-${family}-${mode}.png`);
      const buf = readFileSync(file);
      const { width, height } = await sharp(buf).metadata();
      if (!width || !height) throw new Error(`No metadata for ${file}`);
      cells.push({ family, mode, buf, w: width, h: height });
    }
  }

  // Normalise to a common cell size (smallest width/height so nothing upscales).
  const cellW = Math.min(...cells.map((c) => c.w));
  const cellH = Math.min(...cells.map((c) => c.h));

  const resized = await Promise.all(
    cells.map((c) =>
      sharp(c.buf)
        .resize(cellW, cellH, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer(),
    ),
  );

  const cols = families.length; // 3
  const rows = modes.length; // 2
  const canvasW = padding * 2 + cellW * cols + gap * (cols - 1);
  const canvasH = padding * 2 + cellH * rows + gap * (rows - 1);

  const composites = resized.map((input, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      input,
      left: padding + col * (cellW + gap),
      top: padding + row * (cellH + gap),
    };
  });

  const output = await sharp({
    create: { width: canvasW, height: canvasH, channels: 4, background },
  })
    .composite(composites)
    .png()
    .toBuffer();

  writeFileSync(outPath, output);
  console.log(`Wrote ${outPath} (${canvasW}x${canvasH})`);

  const small = await sharp(output).resize({ width: smallWidth }).png().toBuffer();
  const smallH = Math.round((canvasH * smallWidth) / canvasW);
  writeFileSync(outPathSmall, small);
  console.log(`Wrote ${outPathSmall} (${smallWidth}x${smallH})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
