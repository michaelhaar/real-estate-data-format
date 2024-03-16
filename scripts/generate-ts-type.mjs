/* This script generates a TypeScript type from the JSON schema. */

import fs from "fs";
import { compile } from "json-schema-to-typescript";
import { importJson } from "./utils.mjs";

const { json } = importJson("../schema.json");
json.$id = "RealEstateListing"; // $id is used as the name of the generated type

compile(json).then((ts) => fs.writeFileSync("src/real-estate-listing.d.ts", ts));
