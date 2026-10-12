import { readdir, stat } from 'node:fs/promises';
import { extname, join, dirname, basename } from 'node:path';
import sharp from 'sharp';

const root = join(import.meta.dirname, '..', 'public', 'photos');

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let count = 0;
for await (const file of walk(root)) {
  if (!/\.(jpe?g|png)$/i.test(extname(file))) continue;
  const webp = join(dirname(file), `${basename(file, extname(file))}.webp`);
  await sharp(file).webp({ quality: 82 }).toFile(webp);
  console.log(`${file} -> ${webp}`);
  count++;
}

console.log(`Listo. ${count} imagen(es) convertida(s) a .webp.`);
