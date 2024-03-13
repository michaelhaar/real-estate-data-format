import { compileFromFile } from "json-schema-to-typescript";
import fs from "fs";

compileFromFile("schema.json").then((ts) => fs.writeFileSync("real-estate-listing.d.ts", ts));
