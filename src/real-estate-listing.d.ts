/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface RealEstateListing {
  /**
   * The unique identifier for the listing
   */
  listingId: string | null;
  /**
   * The URL of the listing details page. If the URL is not available, this field should be null.
   */
  url: string | null;
  /**
   * The title of the listing.
   */
  title: string;
  /**
   * A full description of the listing.
   */
  description: string;
  images: string[];
  /**
   * The type of property
   */
  propertyType: "house" | "apartment" | "condo" | "unknown";
  address: {
    /**
     * Street name (in practice may also contain street number). If the street name is not available, this field should be null.
     */
    street: string | null;
    /**
     * The name of the primary locality of the place. If the city name is not available, this field should be null.
     */
    city: string | null;
    /**
     * A division of a country; typically a first-level administrative division of a country and/or a geographical region. If the state name is not available, this field should be null.
     */
    state: string | null;
    /**
     * An alphanumeric string included in a postal address to facilitate mail sorting (a.k.a. post code, postcode, or ZIP code). If the postal code is not available, this field should be null.
     */
    postalCode: string | null;
    /**
     * The localised country name. If the country name is not available, this field should be null.
     */
    country: string | null;
    /**
     * The ISO 3166-1 alpha-3 country code. If the country code is not available, this field should be null.
     */
    countryCode: string | null;
  };
  coordinates: {
    /**
     * The latitude of the location. If the latitude is not available, this field should be null.
     */
    latitude: number | null;
    /**
     * The longitude of the location. If the longitude is not available, this field should be null.
     */
    longitude: number | null;
  };
  /**
   * Pricing information of the property. All prices are in the currency specified and include VAT.
   */
  monetaryDetails: {
    /**
     * The price when buying/purchasing the property. The buyer is expected to pay this amount once to the seller. => Ownership gets transferred from the seller of the property to the buyer. If the property is not for sale, this field should be null.
     */
    purchasingPrice: number | null;
    /**
     * The monthly rent/lease of the property. The lessee is expected to pay this amount every month to the landlord. => Landlord stays the owner of the property, but the lessee gets the right to use the property. If the property is not for rent, this field should be null.
     */
    rent: number | null;
    /**
     * The ISO 4217 currency code of the prices. (e.g. EUR, USD, GBP, etc.)
     */
    currencyCode: string;
    /**
     * Whether the property is commission-free for the buyer/lessee. (e.g. no real estate agent fees)
     */
    isCommissionFree: boolean | null;
    /**
     * The monthly operating costs of the property (estimated or from the previous year; e.g. heating, water, electricity, etc.). If the property is not for rent, this field should be null.
     */
    estMonthlyOperatingCosts: number | null;
  };
  /**
   * The features of the property. All features are nullable. If the availability of a feature is not known, the field should be null.
   */
  features: {
    /**
     * The area of the property that is used for living in square meters. E.g. living room, kitchen, bedrooms, bathrooms, etc. Excludes areas like balconies, terraces, garages, basements (unless they are used as living space.), staircases, hallways, etc.
     */
    livingArea: number | null;
    /**
     * The plot area is the surface of the entire property in square meters. The key word here being “surface”, as it does not include underground surfaces or floors situated above the ground.
     */
    plotArea: number | null;
    /**
     * The year the property was built.
     */
    yearBuilt: number | null;
    /**
     * The number of bedrooms.
     */
    bedrooms: number | null;
    /**
     * The number of bathrooms.
     */
    bathrooms: number | null;
    /**
     * Whether the property has a garage. (Definition: Garages are enclosed with solid walls, a roof, and at least one door)
     */
    hasGarage: boolean | null;
    /**
     * Whether the property has a carport. (Definition: Carports are made with a simple structure and a roof or overhead cover, usually built next to a house)
     */
    hasCarport: boolean | null;
    /**
     * Whether the property has a parking space. Includes carports, garages and open parking spaces.
     */
    hasParkingSpace: boolean | null;
    /**
     * Whether the property has a terrace. (Definition: a flat area of stone or grass outside a house, where people can sit and relax)
     */
    hasTerrace: boolean | null;
    /**
     * Whether the property has a balcony. (Definition: a platform enclosed by a wall or balustrade on the outside of a building, with access from an upper-floor window or door)
     */
    hasBalcony: boolean | null;
    /**
     * Whether the property has a garden. (Definition: a piece of ground, often near a house, often used for growing flowers, fruit, or vegetables)
     */
    hasGarden: boolean | null;
    /**
     * Whether the property has a loggia. (Definition: A room with 3 walls and one open side)
     */
    hasLoggia: boolean | null;
    /**
     * Whether the property has a swimming pool.
     */
    hasPool: boolean | null;
    /**
     * Whether the property has a storage room.
     */
    hasStorageRoom: boolean | null;
    /**
     * Whether the property is barrier-free. (e.g. wheelchair accessible, no stairs, etc.)
     */
    isBarrierFree: boolean | null;
    /**
     * Whether the property comes with a built-in kitchen.
     */
    hasBuiltInKitchen: boolean | null;
    /**
     * Whether the property has an elevator. (usually in multi-story buildings)
     */
    hasElevator: boolean | null;
    /**
     * Whether the property has air conditioning.
     */
    hasAirConditioning: boolean | null;
    /**
     * Whether the property has a basement compartment. (Definition: a room or space below the ground floor of a building, often used for storing things)
     */
    hasBasementCompartment: boolean | null;
  };
  /**
   * The contact details of the person or company responsible for the listing.
   */
  contactDetails: {
    /**
     * The name of the person or company responsible for the listing.
     */
    name: string | null;
    /**
     * The email address of the person or company responsible for the listing.
     */
    email: string | null;
    /**
     * The phone number of the person or company responsible for the listing.
     */
    phone: string | null;
  };
  /**
   * The date and time the listing was scraped/snapshotted.
   */
  snapshotDate: string | null;
  /**
   * The url of the website the listing was scraped from.
   */
  scrapedFrom: string | null;
  /**
   * The date and time the listing was published.
   */
  publishedAt: string | null;
  /**
   * The date and time the listing was last updated.
   */
  updatedAt: string | null;
}
