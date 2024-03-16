// Make sure versions in package.json and schema.json are in sync

import { importJson } from "./utils.mjs";

const { json: packageJson } = importJson("../package.json");
const { json: schemaJson } = importJson("../schema.json");

if (packageJson.version !== schemaJson.$id) {
  console.error("❌ Versions in package.json and schema.json are out of sync");
  process.exit(1);
}

console.log("✅ Versions in package.json and schema.json are in sync", packageJson.version);
