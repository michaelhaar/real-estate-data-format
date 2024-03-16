import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export function relativeToAbsolutePath(relativePath) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, relativePath);
}

export function importJson(relativePath) {
  const absolutePath = relativeToAbsolutePath(relativePath);
  const json = JSON.parse(fs.readFileSync(absolutePath, "utf8"));
  return {
    json,
    absolutePath,
  };
}
