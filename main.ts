// News image entry for make.fun — news-image-20261125.
// Copies the pre-rendered front page (entry.png, 1024x1024, the world
// news of Wednesday 25 November 2026) into the grader's output dir.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const src = new URL("./entry.png", import.meta.url);
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
const bytes = statSync(join(outDir, "entry.png")).size;
if (bytes > 1048576) throw new Error(`entry.png too large: ${bytes} bytes`);
console.log(`entry.png written to ${join(outDir, "entry.png")} (${bytes} bytes)`);
