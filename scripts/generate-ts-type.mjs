/* This script generates a TypeScript type from the JSON schema. */

import { compileFromFile } from "json-schema-to-typescript";
import fs from "fs";

compileFromFile("schema.json").then((ts) => {
  const modifiedTs = ts.replace("export interface Schema", "export interface RealEstateListing");
  fs.writeFileSync("src/real-estate-listing.d.ts", modifiedTs);
});
