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
    "url": {
      "type": "string",
      "description": "The URL of the listing"
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
      "type": "array",
      "items": {
        "type": "string",
        "description": "A URL to an image of the property."
      }
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
    },
    "coordinates": {
      "type": "object",
      "properties": {
        "latitude": {
          "type": "number",
          "description": "The latitude of the location."
        },
        "longitude": {
          "type": "number",
          "description": "The longitude of the location."
        }
      }
    },
    "features": {
      "type": "object",
      "properties": {
        "bedrooms": {
          "type": "number",
          "description": "The number of bedrooms."
        },
        "bathrooms": {
          "type": "number",
          "description": "The number of bathrooms."
        },
        "garages": {
          "type": "number",
          "description": "The number of garages."
        },
        "hasTerrace": {
          "type": "boolean",
          "description": "Whether the property has a terrace. (Definition: a flat area of stone or grass outside a house, where people can sit and relax)" // TODO double check?
        },
        "hasBalcony": {
          "type": "boolean",
          "description": "Whether the property has a balcony. (Definition: a platform enclosed by a wall or balustrade on the outside of a building, with access from an upper-floor window or door)"
        },
        "hasGarden": {
          "type": "boolean",
          "description": "Whether the property has a garden. (Definition: a piece of ground, often near a house, often used for growing flowers, fruit, or vegetables)"
        },
        "hasLoggia": {
          "type": "boolean",
          "description": "Whether the property has a loggia. (Definition: A room with 3 walls and one open side)"
        },
        "hasPool": {
          "type": "boolean",
          "description": "Whether the property has a swimming pool."
        },
        "hasStorageRoom": {
          "type": "boolean",
          "description": "Whether the property has a storage room." // TODO Add definition?
        },
        "isBarrierFree": {
          "type": "boolean",
          "description": "Whether the property is barrier-free. (e.g. wheelchair accessible, no stairs, etc.)"
        },
        "hasBuiltInKitchen": {
          "type": "boolean",
          "description": "Whether the property comes with a built-in kitchen."
        },
        "hasElevator": {
          "type": "boolean",
          "description": "Whether the property has an elevator. (usually in multi-story buildings)"
        },
        "hasAirConditioning": {
          "type": "boolean",
          "description": "Whether the property has air conditioning."
        },
        "hasBasementCompartment": {
          "type": "boolean",
          "description": "Whether the property has a basement compartment. (Definition: a room or space below the ground floor of a building, often used for storing things)"
        }
      }
    },
    "dateScraped": {
      "type": "string",
      "format": "date-time", // TODO UTC String?
      "description": "The date and time the listing was scraped."
    },
    "scrapedFrom": {
      "type": "string",
      "description": "The url of the website the listing was scraped from."
    },
    "createdAt": {
      "type": "string",
      "format": "date-time", // TODO UTC String?
      "description": "The date and time the listing was created."
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time", // TODO UTC String?
      "description": "The date and time the listing was last updated."
    }
  }
}
```
