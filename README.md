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

There are two ways to use the schema in your project:

### via npm

> Note: This is how I'm using it in my projects.

```bash
npm install real-estate-listing-schema
```

You can use your favorite [JSON schema validator](https://json-schema.org/implementations) to validate your data against the schema. Here's an example using [Ajv](https://ajv.js.org/):

```javascript
import realEstateListingSchema from "real-estate-listing-schema";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv();
addFormats(ajv);
const validate = ajv.compile(realEstateListingSchema);

const data = {
  // Your data here
};

const valid = validate(data);
if (!valid) {
  console.log(validate.errors);
}
```

### via download

You can also download or copy&paste the schema file directly into your repository:

```bash
curl -o real-estate-listing-schema.json https://raw.githubusercontent.com/michaelhaar/real-estate-listing-schema/main/schema.json
```

and then use your favorite [JSON schema validator](https://json-schema.org/implementations) to validate your data against the schema.

## Contributing

If you have any ideas for improvements or new features, feel free to open an issue or a pull request.
