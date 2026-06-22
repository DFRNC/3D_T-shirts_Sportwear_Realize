import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const useClientPattern = /^\uFEFF?["']use client["'];\r?\n/;

const walk = (dir, files = []) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      walk(fullPath, files);
      continue;
    }
    if (/\.(ts|tsx)$/.test(entry.name)) files.push(fullPath);
  }
  return files;
};

let changed = 0;

for (const dir of ["src", "app"]) {
  const target = path.join(root, dir);
  if (!fs.existsSync(target)) continue;

  for (const file of walk(target)) {
    const source = fs.readFileSync(file, "utf8");
    const next = source.replace(useClientPattern, "");
    if (next === source) continue;
    fs.writeFileSync(file, next);
    changed += 1;
  }
}

console.log(`Removed "use client" from ${changed} files.`);
