import Utils from "../src/Utils";

describe("Set of tests for the validation of the period", () => {
  test("TEST FOR VALID if the MONTH has 31 days", () => {
    const utils = new Utils();
    expect(utils.IsAMonthOfThirtyDays(31, 1)).toBe(true);
    expect(utils.IsAMonthOfThirtyDays(31, 3)).toBe(true);
    expect(utils.IsAMonthOfThirtyDays(31, 5)).toBe(true);
    expect(utils.IsAMonthOfThirtyDays(31, 7)).toBe(true);
    expect(utils.IsAMonthOfThirtyDays(31, 8)).toBe(true);
    expect(utils.IsAMonthOfThirtyDays(31, 10)).toBe(true);
    expect(utils.IsAMonthOfThirtyDays(31, 12)).toBe(true);
  });

  test("TEST FOR VALID if the MONTH has NOT with 31 days", () => {
    const utils = new Utils();
    expect(utils.IsAMonthOfThirtyDays(31, 2)).toBe(false);
    expect(utils.IsAMonthOfThirtyDays(31, 4)).toBe(false);
    expect(utils.IsAMonthOfThirtyDays(31, 6)).toBe(false);
    expect(utils.IsAMonthOfThirtyDays(31, 9)).toBe(false);
    expect(utils.IsAMonthOfThirtyDays(31, 11)).toBe(false);
  });
});