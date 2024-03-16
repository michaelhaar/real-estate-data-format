# `RealEstateListing` Schema

- [schema.json](https://github.com/michaelhaar/real-estate-listing-schema/blob/main/schema.json)
- as raw [schema.json](https://raw.githubusercontent.com/michaelhaar/real-estate-listing-schema/main/schema.json)
- on [Atlassian JSON Schema Viewer](https://json-schema.app/view/%23?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmichaelhaar%2Freal-estate-listing-schema%2Fmain%2Fschema.json)

## Motivation

This repository proposes a **standardized JSON schema** especially **designed for real estate listings**.

The schema is intended to be used for data exchange between different systems and applications, such as real estate websites, property management software, and other real estate-related services.

- The schema is based on the [JSON Schema](https://json-schema.org/) standard and is designed to be **flexible, extensible and easy to use**.
- `RealEstateListing` data can be validated against the schema to ensure that they are well-formed. see: [Validate JSON data against the schema](https://json-schema.org/learn/getting-started-step-by-step#validate)
- `RealEstateListing` data is serializable and can be easily converted to and from JSON and can be used in REST APIs.
- `RealEstateListing` data can easily be converted to and from a tabular format (`flattenObject` or `unflattenObject`) for use in databases or spreadsheets.

## Usage

There are many ways to use the schema in your project. E.g.:

### via download

The most straight forward way is to download or copy&paste the schema file schema.json directly into your project:

```bash
curl -o schema.json https://raw.githubusercontent.com/michaelhaar/real-estate-listing-schema/main/schema.json
```

and then use your favorite [JSON schema validator](https://json-schema.org/implementations) to validate your data against the schema.

### via npm

For convenience, the schema is also published as an [npm package](https://www.npmjs.com/package/real-estate-listing-schema). You can install it via npm:

```bash
npm install real-estate-listing-schema
```

and then use it in your project like this:

```javascript
import { realEstateListingSchema, RealEstateListing } from "real-estate-listing-schema";

// use your favorite JSON schema validator to validate your data against the schema
```

The [index.test.ts](https://github.com/michaelhaar/real-estate-listing-schema/blob/main/src/index.test.ts) file contains a simple example of how to use the schema with the [ajv](https://www.npmjs.com/package/ajv) JSON schema validator.

## Contributing

If you have any ideas for improvements or new features, feel free to open an issue or a pull request.
