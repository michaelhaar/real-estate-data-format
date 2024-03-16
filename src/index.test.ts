import { test, expect, describe } from "vitest";
import Ajv, { JSONSchemaType } from "ajv";
import addFormats from "ajv-formats";
import { RealEstateListing, realEstateListingSchema } from "./index";

const ajv = new Ajv({ removeAdditional: "all" });
addFormats(ajv);
const validate = ajv.compile(realEstateListingSchema as JSONSchemaType<RealEstateListing>);

const realEstateListing = {
  listingId: "<string>",
  url: "<string>",
  title: "<string>",
  description: "<string>",
  images: ["<string>"],
  propertyType: "<string>",
  address: {
    street: "<string>",
    city: "<string>",
    state: "<string>",
    postalCode: "<string>",
    country: "<string>",
    countryCode: "<string>",
  },
  coordinates: {
    latitude: 90,
    longitude: 92,
  },
  monetaryDetails: {
    purchasingPrice: 243,
    rent: 266,
    currencyCode: "<string>",
    isCommissionFree: true,
    estMonthlyOperatingCosts: 182,
  },
  features: {
    livingArea: 247,
    plotArea: 185,
    yearBuilt: 2022,
    bedrooms: 23,
    bathrooms: 24,
    hasGarage: true,
    hasCarport: true,
    hasParkingSpace: true,
    hasTerrace: true,
    hasBalcony: true,
    hasGarden: true,
    hasLoggia: true,
    hasPool: true,
    hasStorageRoom: true,
    isBarrierFree: true,
    hasBuiltInKitchen: true,
    hasElevator: true,
    hasAirConditioning: true,
    hasBasementCompartment: true,
  },
  contactDetails: {
    name: "<string>",
    email: "test@gmail.com",
    phone: "<string>",
  },
  snapshotDate: "2022-03-14T01:59:59Z",
  scrapedFrom: "<string>",
  publishedAt: "2022-03-14T01:59:59Z",
  updatedAt: "2022-03-14T01:59:59Z",
};

test("should pass", () => {
  const valid = validate(realEstateListing);
  expect(valid).toBe(true);
});

describe("should remove additional properties", () => {
  const testInputs = [
    { ...realEstateListing, additionalProp: 1 },
    { ...realEstateListing, address: { ...realEstateListing.address, additionalProp: 1 } },
    { ...realEstateListing, coordinates: { ...realEstateListing.coordinates, additionalProp: 1 } },
    { ...realEstateListing, monetaryDetails: { ...realEstateListing.monetaryDetails, additionalProp: 1 } },
    { ...realEstateListing, features: { ...realEstateListing.features, additionalFeature: 1 } },
    { ...realEstateListing, contactDetails: { ...realEstateListing.contactDetails, additionalProp: 1 } },
  ];

  testInputs.forEach((input, index) => {
    test(`testInput #${index}`, () => {
      const valid = validate(input);
      expect(valid).toBe(true);
      expect(input).toEqual(realEstateListing);
    });
  });
});

describe("should fail", () => {
  describe("for missing required properties", () => {
    const testInputs = [
      { ...realEstateListing, listingId: undefined },
      { ...realEstateListing, url: undefined },
      { ...realEstateListing, title: undefined },
      { ...realEstateListing, description: undefined },
      { ...realEstateListing, images: undefined },
      { ...realEstateListing, propertyType: undefined },
      { ...realEstateListing, address: undefined },
      { ...realEstateListing, coordinates: undefined },
      { ...realEstateListing, monetaryDetails: undefined },
      { ...realEstateListing, features: undefined },
      { ...realEstateListing, contactDetails: undefined },
      { ...realEstateListing, snapshotDate: undefined },
      { ...realEstateListing, scrapedFrom: undefined },
      { ...realEstateListing, publishedAt: undefined },
      { ...realEstateListing, updatedAt: undefined },
      { ...realEstateListing, address: { ...realEstateListing.address, street: undefined } },
      { ...realEstateListing, monetaryDetails: { ...realEstateListing.monetaryDetails, purchasingPrice: undefined } },
      { ...realEstateListing, features: { ...realEstateListing.features, livingArea: undefined } },
    ];

    testInputs.forEach((input, index) => {
      test(`testInput #${index}`, () => {
        const valid = validate(input);
        expect(valid).toBe(false);
      });
    });
  });

  describe("for invalid property types", () => {
    const testInputs = [
      { ...realEstateListing, listingId: 1 },
      { ...realEstateListing, url: 1 },
      { ...realEstateListing, title: 1 },
      { ...realEstateListing, description: 1 },
      { ...realEstateListing, images: 1 },
      { ...realEstateListing, propertyType: 1 },
      { ...realEstateListing, address: 1 },
      { ...realEstateListing, coordinates: 1 },
      { ...realEstateListing, monetaryDetails: 1 },
      { ...realEstateListing, features: 1 },
      { ...realEstateListing, contactDetails: 1 },
      { ...realEstateListing, snapshotDate: 1 },
      { ...realEstateListing, scrapedFrom: 1 },
      { ...realEstateListing, publishedAt: 1 },
      { ...realEstateListing, updatedAt: 1 },
      { ...realEstateListing, address: { ...realEstateListing.address, street: 1 } },
      { ...realEstateListing, monetaryDetails: { ...realEstateListing.monetaryDetails, purchasingPrice: "1" } },
      { ...realEstateListing, features: { ...realEstateListing.features, livingArea: "1" } },
    ];

    testInputs.forEach((input, index) => {
      test(`testInput #${index}`, () => {
        const valid = validate(input);
        expect(valid).toBe(false);
      });
    });
  });
});
