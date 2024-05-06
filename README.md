# `RealEstateListing` Schema

- view the [schema.json](https://github.com/michaelhaar/real-estate-listing-schema/blob/main/schema.json),
- as raw [schema.json](https://raw.githubusercontent.com/michaelhaar/real-estate-listing-schema/main/schema.json),
- or via the [Atlassian JSON Schema Viewer](https://json-schema.app/view/%23?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmichaelhaar%2Freal-estate-listing-schema%2Fmain%2Fschema.json).

Here is an example of a valid `RealEstateListing` object:

```json
{
  "listingId": "728030085",
  "url": "https://www.somerealestatewebsite.com/apartments/no-commission-apartment-for-investment-also-suitable-for-personal-use-728030085/",
  "title": "(No commission) apartment for investment / also suitable for personal use",
  "description": "Selling renovated 38m^2 apartment on the 2nd floor with elevator and loggia. The apartment also includes...",
  "propertyType": "apartment",
  "address": {
    "street": "Raiffeisenstraße 54a",
    "postalCode": "8010",
    "city": "Graz",
    "state": "Styria",
    "country": "Austria",
    "countryCode": "AT"
  },
  "coordinates": { "latitude": 47.05104, "longitude": 15.44788 },
  "monetaryDetails": {
    "purchasingPrice": 169000,
    "previousPurchasingPrice": null,
    "rent": null,
    "previousRent": null,
    "currencyCode": "EUR",
    "isCommissionFree": true,
    "estMonthlyOperatingCosts": null
  },
  "features": {
    "livingArea": 48,
    "plotArea": null,
    "yearBuilt": null,
    "bedrooms": null,
    "bathrooms": null,
    "hasGarage": true,
    "hasCarport": false,
    "hasParkingSpace": false,
    "hasBalcony": false,
    "hasTerrace": false,
    "hasGarden": false,
    "hasLoggia": true,
    "hasPool": false,
    "hasStorageRoom": false,
    "isBarrierFree": false,
    "hasBuiltInKitchen": true,
    "hasElevator": true,
    "hasBasementCompartment": true,
    "hasAirConditioning": false
  },
  "contactDetails": { "name": null, "phone": null, "email": null },
  "images": [
    "https://cache.somerealestatewebsite.com/1927743998.jpg",
    "https://cache.somerealestatewebsite.com/1133143014.jpg",
    "https://cache.somerealestatewebsite.com/1951786924.jpg",
    "https://cache.somerealestatewebsite.com/1593453202.jpg",
    "https://cache.somerealestatewebsite.com/96308128.jpg",
    "https://cache.somerealestatewebsite.com/3060419.jpg",
    "https://cache.somerealestatewebsite.com/120863053.jpg",
    "https://cache.somerealestatewebsite.com/567083695.jpg",
    "https://cache.somerealestatewebsite.com/726985358.jpg"
  ],
  "snapshotDate": "2024-03-16T14:47:08.558Z",
  "scrapedFrom": "https://www.somerealestatewebsite.com/apartments/",
  "publishedAt": null,
  "updatedAt": null
}
```

## Motivation

This repository proposes a **standardized JSON schema** especially **designed for real estate listings**.

The schema is intended to be used for data exchange between different systems and applications, such as real estate websites, property management software, and other real estate-related services.

- The schema is based on the [JSON Schema standard](https://json-schema.org/) and is designed to be **flexible, extensible and intuitive to use**.
- Potential `RealEstateListing` data can be **validated against the schema** to ensure that it is well-formed. see: [Validate JSON data against the schema](https://json-schema.org/learn/getting-started-step-by-step#validate)
- Validated `RealEstateListing` data is serializable and can be converted to and from JSON and **can be used in REST APIs**.
- Validated `RealEstateListing` data can easily be converted to and from a tabular format (`flattenObject` or `unflattenObject`) **for use in databases or spreadsheets**.

## Usage

There are multiple ways to use the schema in your project. E.g.:

### via download

The most straight forward way is to download or copy&paste the schema file directly into your project:

```bash
curl -o schema.json https://raw.githubusercontent.com/michaelhaar/real-estate-listing-schema/main/schema.json
```

and then use your favorite [JSON schema validator](https://json-schema.org/implementations) to validate your data against the schema.

### via npm

Alternatively, the schema is also available as an npm package. It can be installed using npm::

```bash
npm install real-estate-listing-schema
```

and then used in your project like this:

```javascript
import { realEstateListingSchema, RealEstateListing } from "real-estate-listing-schema";

// use your favorite JSON schema validator to validate your data against the schema
```

The [index.test.ts](https://github.com/michaelhaar/real-estate-listing-schema/blob/main/src/index.test.ts) file contains a simple example of how to use the schema with the [ajv](https://www.npmjs.com/package/ajv) JSON schema validator.

## Versioning

This repository follows the [Semantic Versioning](https://semver.org/) standard.
