import { stringSum } from "./stringSum.js";

describe("Sum of strings", () => {
  test("If empty String return sum as 0", () => {
    expect(stringSum("")).toBe(0);
  });

  test("Should return sums of all positive number", () => {
    expect(stringSum("2,3,4")).toBe(9);
  });
});
