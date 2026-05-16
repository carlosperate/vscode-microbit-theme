import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import type { Theme } from "./util.ts";

import haloLight from "./themes/halo-light.ts";
import haloDark from "./themes/halo-dark.ts";
import pixelLight from "./themes/pixel-light.ts";
import pixelDark from "./themes/pixel-dark.ts";
import sparkLight from "./themes/spark-light.ts";
import sparkDark from "./themes/spark-dark.ts";

const themes: Array<{ file: string; theme: Theme }> = [
  { file: "microbit-halo-light.json", theme: haloLight },
  { file: "microbit-halo-dark.json", theme: haloDark },
  { file: "microbit-pixel-light.json", theme: pixelLight },
  { file: "microbit-pixel-dark.json", theme: pixelDark },
  { file: "microbit-spark-light.json", theme: sparkLight },
  { file: "microbit-spark-dark.json", theme: sparkDark },
];

const outDir = join(import.meta.dirname, "..", "themes");
mkdirSync(outDir, { recursive: true });

for (const { file, theme } of themes) {
  const out = join(outDir, file);
  writeFileSync(out, JSON.stringify(theme, null, 2) + "\n");
  console.log(`wrote ${out}`);
}
