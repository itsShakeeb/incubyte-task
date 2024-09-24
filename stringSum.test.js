import { negate_msg, stringSum } from "./stringSum.js";

describe("Sum of strings", () => {
  test("If empty String return sum as 0", () => {
    expect(stringSum("")).toBe(0);
  });

  test("Should return sums of all positive number", () => {
    expect(stringSum("2,3,4")).toBe(9);
  });

  test("Should return all negative number as string from string", () => {
    expect(stringSum("-1,2,3,-4")).toBe(`${negate_msg} -1,-4`);
  });
});
