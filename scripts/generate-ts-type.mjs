/* This script generates a TypeScript type from the JSON schema. */

import fs from "fs";
import { compile } from "json-schema-to-typescript";
import { importJson } from "./utils.mjs";

const { json } = importJson("../schema.json");

compile(json, "RealEstateListing").then((ts) => fs.writeFileSync("src/real-estate-listing.d.ts", ts));
