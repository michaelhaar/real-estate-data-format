# real-estate-data-format

This repository proposes a standardized JSON data format especially designed for real estate properties.

## `RealEstateListing` JSON Format

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "listingId": {
      "type": "string",
      "description": "The unique identifier for the listing"
    },
    "propertyType": {
      "type": "string", // TODO: Enum?
      "description": "The type of property"
    },
    "address": {
      "type": "object",
      "properties": {
        "street": {
          "type": "string",
          "description": "Street name (in practice may also contain street number)."
        },
        "city": {
          "type": "string",
          "description": "The name of the primary locality of the place."
        },
        "state": {
          "type": "string",
          "description": "A division of a country; typically a first-level administrative division of a country and/or a geographical region."
        },
        "postalCode": {
          "type": "string",
          "description": "An alphanumeric string included in a postal address to facilitate mail sorting (a.k.a. post code, postcode, or ZIP code)."
        },
        "country": {
          "type": "string",
          "description": "The localised country name."
        },
        "countryCode": {
          "type": "string",
          "description": "The ISO 3166-1 alpha-3 country code."
        }
      }
    }
  }
}
```
