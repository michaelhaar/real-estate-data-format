import fs from "fs";
import path from "path";
import { test, expect, describe } from "vitest";
import Ajv, { JSONSchemaType } from "ajv";
import addFormats from "ajv-formats";
import { RealEstateListing, realEstateListingSchema } from "./index";

const ajv = new Ajv({ removeAdditional: "all" });
addFormats(ajv);
const validate = ajv.compile(realEstateListingSchema as JSONSchemaType<RealEstateListing>);

function getExampleJsonFromReadme() {
  const readme = fs.readFileSync(path.resolve(__dirname, "../README.md"), "utf8");
  const example = readme.match(/```json\n([\s\S]+?)```/)?.[1];
  if (!example) {
    throw new Error("No JSON example found in README");
  }
  return JSON.parse(example);
}

const realEstateListing = getExampleJsonFromReadme();

test("Example JSON from README should pass", () => {
  validate(realEstateListing);
  expect(validate.errors).toBeFalsy();
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

  describe("for invalid postalCodes", () => {
    const testInputs = [
      { ...realEstateListing, address: { ...realEstateListing.address, postalCode: "abc" } },
      { ...realEstateListing, address: { ...realEstateListing.address, postalCode: "123" } },
      { ...realEstateListing, address: { ...realEstateListing.address, postalCode: "124a" } },
      { ...realEstateListing, address: { ...realEstateListing.address, postalCode: "12345" } },
      { ...realEstateListing, address: { ...realEstateListing.address, postalCode: "123456" } },
    ];

    testInputs.forEach((input, index) => {
      test(`testInput #${index}`, () => {
        const valid = validate(input);
        expect(valid).toBe(false);
      });
    });
  });
});
