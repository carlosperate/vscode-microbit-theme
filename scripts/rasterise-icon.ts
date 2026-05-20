// Rasterises icon.svg -> icon.png (128x128) for the marketplace.

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const svg = readFileSync(join(import.meta.dirname, "icon.svg"));
const outPath = join(import.meta.dirname, "..", "icon.png");

async function main() {
  const png = await sharp(svg).resize(128, 128).png().toBuffer();
  writeFileSync(outPath, png);
  console.log(`Wrote ${outPath} (128x128)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
