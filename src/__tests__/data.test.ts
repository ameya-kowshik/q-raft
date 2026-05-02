import fc from "fast-check";
import { standees } from "@/data/standees";
import type { Design, StandeeType } from "@/data/standees";

// Feature: qraft-landing-site, Property 1: Static data completeness
// Validates: Requirements 10.2, 10.3
test("every StandeeType has all required fields as non-empty strings", () => {
  fc.assert(
    fc.property(fc.constantFrom(...standees), (standee: StandeeType) => {
      return (
        typeof standee.id === "number" &&
        typeof standee.slug === "string" && standee.slug.length > 0 &&
        typeof standee.title === "string" && standee.title.length > 0 &&
        typeof standee.description === "string" && standee.description.length > 0 &&
        typeof standee.coverImage === "string" && standee.coverImage.length > 0 &&
        Array.isArray(standee.designs) && standee.designs.length > 0
      );
    }),
    { numRuns: 100 }
  );
});

test("every Design has all required fields as non-empty strings", () => {
  const allDesigns: Design[] = standees.flatMap((s) => s.designs);
  fc.assert(
    fc.property(fc.constantFrom(...allDesigns), (design: Design) => {
      return (
        typeof design.id === "string" && design.id.length > 0 &&
        typeof design.name === "string" && design.name.length > 0 &&
        typeof design.image === "string" && design.image.length > 0 &&
        typeof design.price === "string" && design.price.length > 0 &&
        typeof design.dimensions === "string" && design.dimensions.length > 0 &&
        typeof design.material === "string" && design.material.length > 0 &&
        typeof design.description === "string" && design.description.length > 0
      );
    }),
    { numRuns: 100 }
  );
});

// Feature: qraft-landing-site, Property 2: Standee count and slug pattern invariant
// Validates: Requirements 6.1, 10.4
test("standees has exactly 8 entries", () => {
  expect(standees).toHaveLength(8);
});

test("standees[i].id === i + 1 and standees[i].slug === `${i+1}-qr-standee` for all i in 0–7", () => {
  fc.assert(
    fc.property(fc.integer({ min: 0, max: 7 }), (i: number) => {
      return (
        standees[i].id === i + 1 &&
        standees[i].slug === `${i + 1}-qr-standee`
      );
    }),
    { numRuns: 100 }
  );
});

// Feature: qraft-landing-site, Property 3: Price placeholder invariant
// Validates: Requirements 10.6, 12.2
test("every design price is the placeholder '₹ ---'", () => {
  const allDesigns: Design[] = standees.flatMap((s) => s.designs);
  fc.assert(
    fc.property(fc.constantFrom(...allDesigns), (design: Design) => {
      return design.price === "₹ ---";
    }),
    { numRuns: 100 }
  );
});

// Feature: qraft-landing-site, Property 4: At least one design per standee
// Validates: Requirements 10.5
test("every StandeeType has at least one design", () => {
  fc.assert(
    fc.property(fc.constantFrom(...standees), (standee: StandeeType) => {
      return standee.designs.length >= 1;
    }),
    { numRuns: 100 }
  );
});
