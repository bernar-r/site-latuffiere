// Compresse et redimensionne toutes les images du dossier public/images en place (sharp deja fourni par Astro).
import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const dir = join(process.cwd(), "public", "images");
const files = readdirSync(dir);

const MAX_WIDTH = 1920;

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
  const path = join(dir, file);
  const before = statSync(path).size;
  totalBefore += before;

  try {
    const img = sharp(path, { failOn: "none" });
    const meta = await img.metadata();
    const pipeline = meta.width && meta.width > MAX_WIDTH ? img.resize({ width: MAX_WIDTH }) : img;

    const buffer =
      ext === ".png"
        ? await pipeline.png({ quality: 80, compressionLevel: 9 }).toBuffer()
        : await pipeline.jpeg({ quality: 78, mozjpeg: true }).toBuffer();

    const after = buffer.length;
    if (after < before) {
      await sharp(buffer).toFile(path + ".tmp");
      const { renameSync } = await import("node:fs");
      renameSync(path + ".tmp", path);
      totalAfter += after;
    } else {
      totalAfter += before;
    }
    console.log(file, (before / 1024).toFixed(0) + "KB", "->", (Math.min(after, before) / 1024).toFixed(0) + "KB");
  } catch (err) {
    totalAfter += before;
    console.warn(file, "SKIPPED (erreur:", err.message + ")");
  }
}

console.log("\nTotal:", (totalBefore / 1024 / 1024).toFixed(1) + "MB", "->", (totalAfter / 1024 / 1024).toFixed(1) + "MB");
