import fs from "fs";
import { execSync } from "child_process";
import { importJson } from "./utils.mjs";

const [_nodePath, _scriptPath, ...args] = process.argv;
if (args.length === 0) {
  console.error("❌ Please provide a version number");
  process.exit(1);
}
const newVersion = args[0];

const { json: packageJson, absolutePath: packageJsonPath } = importJson("../package.json");
const { json: schemaJson, absolutePath: schemaJsonPath } = importJson("../schema.json");

packageJson.version = newVersion;
schemaJson.properties.schemaVersion.enum[0] = newVersion;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
fs.writeFileSync(schemaJsonPath, JSON.stringify(schemaJson, null, 2));

execSync("npm run generate-ts-type");
execSync("npm run prettier:fix");

console.log("✅ Updated package.json and schema.json to version", newVersion);
