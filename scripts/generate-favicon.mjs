// Genere un favicon carre propre a partir du logo (fond blanc, logo centre), en plusieurs tailles.
import sharp from "sharp";
import { join } from "node:path";

const src = join(process.cwd(), "public", "images", "logo.png");
const outDir = join(process.cwd(), "public");

const sizes = [
  { size: 32, name: "favicon-32.png" },
  { size: 16, name: "favicon-16.png" },
  { size: 180, name: "apple-touch-icon.png" },
];

for (const { size, name } of sizes) {
  await sharp(src)
    .resize(Math.round(size * 0.82), Math.round(size * 0.82), { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .extend({
      top: Math.round(size * 0.09),
      bottom: Math.round(size * 0.09),
      left: Math.round(size * 0.09),
      right: Math.round(size * 0.09),
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(join(outDir, name));
  console.log("Genere:", name);
}
