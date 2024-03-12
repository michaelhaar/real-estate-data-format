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
    "monetaryDetails": {
      "type": "object",
      "description": "Pricing information of the property. All prices are in the currency specified and include VAT.",
      "properties": {
        "purchasingPrice": {
          "type": "number",
          "description": "The price when buying/purchasing the property. The buyer is expected to pay this amount once to the seller. => Ownership gets transferred from the seller of the property to the buyer. If the property is not for sale, this field should be null."
        },
        "rent": {
          "type": "number",
          "description": "The monthly rent/lease of the property. The lessee is expected to pay this amount every month to the landlord. => Landlord stays the owner of the property, but the lessee gets the right to use the property. If the property is not for rent, this field should be null."
        },
        "currency": {
          "type": "string",
          "description": "The currency of the price."
        },
        "isCommissionFree": {
          "type": "boolean",
          "description": "Whether the property is commission-free for the buyer/lessee. (e.g. no real estate agent fees)"
        },
        "estMonthlyOperatingCosts": {
          "type": "number",
          "description": "The monthly operating costs of the property (estimated or from the previous year; e.g. heating, water, electricity, etc.). If the property is not for rent, this field should be null."
        }
      }
    },
    "features": {
      "type": "object",
      "description": "The features of the property.",
      "properties": {
        "livingArea": {
          "type": "number",
          "description": "The area of the property that is used for living in square meters. E.g. living room, kitchen, bedrooms, bathrooms, etc. Excludes areas like balconies, terraces, garages, basements (unless they are used as living space.), staircases, hallways, etc."
        },
        "plotArea": {
          "type": "number",
          "description": "The plot area is the surface of the entire property in square meters. The key word here being “surface”, as it does not include underground surfaces or floors situated above the ground."
        },
        "bedrooms": {
          "type": "number",
          "description": "The number of bedrooms."
        },
        "bathrooms": {
          "type": "number",
          "description": "The number of bathrooms."
        },
        "hasGarage": {
          "type": "boolean",
          "description": "Whether the property has a garage. (Definition: Garages are enclosed with solid walls, a roof, and at least one door)"
        },
        "hasCarport": {
          "type": "boolean",
          "description": "Whether the property has a carport. (Definition: Carports are made with a simple structure and a roof or overhead cover, usually built next to a house)"
        },
        "hasParkingSpace": {
          "type": "boolean",
          "description": "Whether the property has a parking space. Includes carports, garages and open parking spaces." //TODO rename to hasOpenParkingSpace?
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
        // TODO heatingType, energyEfficiencyClass, etc.?
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
