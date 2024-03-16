// Make sure versions in package.json and schema.json are in sync

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

function relativeToAbsolutePath(relativePath) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, relativePath);
}

function importJSON(relativePath) {
  const absolutePath = relativeToAbsolutePath(relativePath);
  return JSON.parse(fs.readFileSync(absolutePath, "utf8"));
}

const packageJSON = importJSON("../package.json");
const schemaJSON = importJSON("../schema.json");

if (packageJSON.version !== schemaJSON.properties.schemaVersion.enum[0]) {
  console.error("❌ Versions in package.json and schema.json are out of sync");
  process.exit(1);
}

console.log("✅ Versions in package.json and schema.json are in sync", packageJSON.version);
