import { stringSum } from "./stringSum.js";

describe("Sum of strings", () => {
  test("If empty String return sum as 0", () => {
    expect(stringSum("")).toBe(0);
  });
});
