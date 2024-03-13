# `RealEstateListing` Schema

> The schema is still in early development and may change frequently. Please use with caution.

This repository proposes a **standardized JSON schema** especially **designed for real estate listings**.

The schema is intended to be used for data exchange between different systems and applications, such as real estate websites, property management software, and other real estate-related services.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "schemaVersion": {
      "type": "string",
      "enum": ["1.0.0"],
      "description": "The version of the schema used for the listing."
    },
    "listingId": {
      "type": ["string", "null"],
      "description": "The unique identifier for the listing"
    },
    "url": {
      "type": ["string", "null"],
      "description": "The URL of the listing details page. If the URL is not available, this field should be null."
    },
    "title": {
      "type": "string",
      "description": "The title of the listing."
    },
    "description": {
      "type": "string",
      "description": "A full description of the listing."
    },
    "images": {
      "type": "array", // TODO add limit (maxItems)?
      "items": {
        "type": "string",
        "description": "A URL to an image of the property."
      }
    },
    "propertyType": {
      "type": "string", // TODO: Enum? (e.g. "apartment", "house", "commercial", "land", "garage", "parking", "other")
      "description": "The type of property"
    },
    "address": {
      "type": "object",
      "properties": {
        "street": {
          "type": ["string", "null"],
          "description": "Street name (in practice may also contain street number). If the street name is not available, this field should be null."
        },
        "city": {
          "type": ["string", "null"],
          "description": "The name of the primary locality of the place. If the city name is not available, this field should be null."
        },
        "state": {
          "type": ["string", "null"],
          "description": "A division of a country; typically a first-level administrative division of a country and/or a geographical region. If the state name is not available, this field should be null."
        },
        "postalCode": {
          "type": ["string", "null"],
          "description": "An alphanumeric string included in a postal address to facilitate mail sorting (a.k.a. post code, postcode, or ZIP code). If the postal code is not available, this field should be null."
        },
        "country": {
          "type": ["string", "null"],
          "description": "The localised country name. If the country name is not available, this field should be null."
        },
        "countryCode": {
          "type": ["string", "null"],
          "description": "The ISO 3166-1 alpha-3 country code. If the country code is not available, this field should be null."
        }
      }
    },
    "coordinates": {
      "type": "object",
      "properties": {
        "latitude": {
          "type": ["number", "null"],
          "description": "The latitude of the location. If the latitude is not available, this field should be null."
        },
        "longitude": {
          "type": ["number", "null"],
          "description": "The longitude of the location. If the longitude is not available, this field should be null."
        }
      }
    },
    "monetaryDetails": {
      "type": "object",
      "description": "Pricing information of the property. All prices are in the currency specified and include VAT.",
      "properties": {
        "purchasingPrice": {
          "type": ["number", "null"],
          "description": "The price when buying/purchasing the property. The buyer is expected to pay this amount once to the seller. => Ownership gets transferred from the seller of the property to the buyer. If the property is not for sale, this field should be null."
        },
        "rent": {
          "type": ["number", "null"],
          "description": "The monthly rent/lease of the property. The lessee is expected to pay this amount every month to the landlord. => Landlord stays the owner of the property, but the lessee gets the right to use the property. If the property is not for rent, this field should be null."
        },
        "currencyCode": {
          "type": "string",
          "description": "The ISO 4217 currency code of the prices. (e.g. EUR, USD, GBP, etc.)"
        },
        "isCommissionFree": {
          "type": ["boolean", "null"],
          "description": "Whether the property is commission-free for the buyer/lessee. (e.g. no real estate agent fees)"
        },
        "estMonthlyOperatingCosts": {
          "type": ["number", "null"],
          "description": "The monthly operating costs of the property (estimated or from the previous year; e.g. heating, water, electricity, etc.). If the property is not for rent, this field should be null."
        }
      }
    },
    "features": {
      "type": "object",
      "description": "The features of the property. All features are nullable. If the availability of a feature is not known, the field should be null.",
      "properties": {
        "livingArea": {
          "type": ["number", "null"],
          "description": "The area of the property that is used for living in square meters. E.g. living room, kitchen, bedrooms, bathrooms, etc. Excludes areas like balconies, terraces, garages, basements (unless they are used as living space.), staircases, hallways, etc."
        },
        "plotArea": {
          "type": ["number", "null"],
          "description": "The plot area is the surface of the entire property in square meters. The key word here being “surface”, as it does not include underground surfaces or floors situated above the ground."
        },
        "bedrooms": {
          "type": ["number", "null"],
          "description": "The number of bedrooms."
        },
        "bathrooms": {
          "type": ["number", "null"],
          "description": "The number of bathrooms."
        },
        "hasGarage": {
          "type": ["boolean", "null"],
          "description": "Whether the property has a garage. (Definition: Garages are enclosed with solid walls, a roof, and at least one door)"
        },
        "hasCarport": {
          "type": ["boolean", "null"],
          "description": "Whether the property has a carport. (Definition: Carports are made with a simple structure and a roof or overhead cover, usually built next to a house)"
        },
        "hasParkingSpace": {
          "type": ["boolean", "null"],
          "description": "Whether the property has a parking space. Includes carports, garages and open parking spaces." //TODO rename to hasOpenParkingSpace?
        },
        "hasTerrace": {
          "type": ["boolean", "null"],
          "description": "Whether the property has a terrace. (Definition: a flat area of stone or grass outside a house, where people can sit and relax)" // TODO double check?
        },
        "hasBalcony": {
          "type": ["boolean", "null"],
          "description": "Whether the property has a balcony. (Definition: a platform enclosed by a wall or balustrade on the outside of a building, with access from an upper-floor window or door)"
        },
        "hasGarden": {
          "type": ["boolean", "null"],
          "description": "Whether the property has a garden. (Definition: a piece of ground, often near a house, often used for growing flowers, fruit, or vegetables)"
        },
        "hasLoggia": {
          "type": ["boolean", "null"],
          "description": "Whether the property has a loggia. (Definition: A room with 3 walls and one open side)"
        },
        "hasPool": {
          "type": ["boolean", "null"],
          "description": "Whether the property has a swimming pool."
        },
        "hasStorageRoom": {
          "type": ["boolean", "null"],
          "description": "Whether the property has a storage room." // TODO Add definition?
        },
        "isBarrierFree": {
          "type": ["boolean", "null"],
          "description": "Whether the property is barrier-free. (e.g. wheelchair accessible, no stairs, etc.)"
        },
        "hasBuiltInKitchen": {
          "type": ["boolean", "null"],
          "description": "Whether the property comes with a built-in kitchen."
        },
        "hasElevator": {
          "type": ["boolean", "null"],
          "description": "Whether the property has an elevator. (usually in multi-story buildings)"
        },
        "hasAirConditioning": {
          "type": ["boolean", "null"],
          "description": "Whether the property has air conditioning."
        },
        "hasBasementCompartment": {
          "type": ["boolean", "null"],
          "description": "Whether the property has a basement compartment. (Definition: a room or space below the ground floor of a building, often used for storing things)"
        }
        // TODO heatingType, energyEfficiencyClass, etc.?
      }
    },
    "contactDetails": {
      "type": "object",
      "description": "The contact details of the person or company responsible for the listing.",
      "properties": {
        "name": {
          "type": ["string", "null"],
          "description": "The name of the person or company responsible for the listing."
        },
        "email": {
          "type": ["string", "null"],
          "format": "email",
          "description": "The email address of the person or company responsible for the listing."
        },
        "phone": {
          "type": ["string", "null"],
          "description": "The phone number of the person or company responsible for the listing."
        }
      }
    },
    "snapshotDate": {
      "type": ["string", "null"],
      "format": "date-time",
      "description": "The date and time the listing was scraped/snapshotted."
    },
    "scrapedFrom": {
      "type": ["string", "null"],
      "description": "The url of the website the listing was scraped from."
    },
    "createdAt": {
      "type": ["string", "null"],
      "format": "date-time",
      "description": "The date and time the listing was created."
    },
    "updatedAt": {
      "type": ["string", "null"],
      "format": "date-time",
      "description": "The date and time the listing was last updated."
    }
  }
}
```

## Dev Notes

- The schema is based on the [JSON Schema](https://json-schema.org/) standard and is designed to be **flexible, extensible and easy to use**.
- `RealEstateListing` data can be validated against the schema to ensure that they are well-formed. see: [Validate JSON data against the schema](https://json-schema.org/learn/getting-started-step-by-step#validate)
- `RealEstateListing` data is serializable and can be easily converted to and from JSON and can be used in REST APIs.
- `RealEstateListing` data can easily be converted to and from a tabular format (`flattenObject` or `unflattenObject`) for use in databases or spreadsheets.

## Usage

There are two ways to use the schema in your project:

## via npm

> Note: This is how I'm using it in my projects.

```bash
npm install real-estate-listing-schema
```

You can use your favorite [JSON schema validator](https://json-schema.org/implementations) to validate your data against the schema. Here's an example using [Ajv](https://ajv.js.org/):

```javascript
import { RealEstateListingSchema } from "real-estate-listing-schema";
import Ajv from "ajv";

const ajv = new Ajv();
const validate = ajv.compile(RealEstateListingSchema);

const data = {
  // Your data here
};

const valid = validate(data);
if (!valid) {
  console.log(validate.errors);
}
```

## via download

You can also download or copy&paste the schema file directly into your repository:

```bash
curl -o real-estate-listing-schema.json https://raw.githubusercontent.com/michaelhaar/real-estate-listing-schema/main/schema.json
```

and then use your favorite [JSON schema validator](https://json-schema.org/implementations) to validate your data against the schema.

## Contributing

If you have any ideas for improvements or new features, feel free to open an issue or a pull request.
