import{ SpecializedAlgorithm } from "../src/SpecializedAlgorithm";

describe("Suites of tests for the validation of the period", () => {
  test("TEST FOR VALID if the MONTH has 31 days", () => {
    const specializedAlgorithm = new SpecializedAlgorithm();
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 1)).toBe(true); 
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 3)).toBe(true);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 5)).toBe(true);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 7)).toBe(true);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 8)).toBe(true);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 10)).toBe(true);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 12)).toBe(true);
  });    

  test("TEST if a DAY is INVALID for month with 31 days", () => {
    const specializedAlgorithm = new SpecializedAlgorithm();
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(0, 1)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(-1, 1)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(32, 1)).toBe(false);
  })

  test("TEST if a DAY / MONTH are INVALID for month with 31 days", () => {
    const specializedAlgorithm = new SpecializedAlgorithm();
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(0, -1)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(-1, 0)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(32, 13)).toBe(false);
  })

  test("TEST if a DAY is VALID and the MONTH is INVALID for month with 31 days", () => {
    const specializedAlgorithm = new SpecializedAlgorithm();
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(1, 0)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(15, -1)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 13)).toBe(false);
  })

  test("TEST FOR VALID if the MONTH has NOT with 31 days", () => {
    const specializedAlgorithm = new SpecializedAlgorithm();
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 2)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 4)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 6)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 9)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyOneDays(31, 11)).toBe(false);
  });

  test("TEST FOR VALID if the MONTH has 30 days", () => {
    const specializedAlgorithm = new SpecializedAlgorithm();
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(30, 4)).toBe(true);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(30, 6)).toBe(true);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(30, 9)).toBe(true);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(30, 11)).toBe(true);
  });

  test("TEST FOR VALID if the MONTH has NOT with 30 days", () => {
    const specializedAlgorithm = new SpecializedAlgorithm();
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(30, 1)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(30, 3)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(30, 5)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(30, 7)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(30, 8)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(30, 10)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(30, 12)).toBe(false);
  });

  test("TEST FOR VALID if the MONTH has NOT with 30 days", () => {
    const specializedAlgorithm = new SpecializedAlgorithm();
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(31, 2)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(31, 4)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(31, 6)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(31, 9)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(31, 11)).toBe(false);
  });

  test("TEST if a DAY is INVALID for month with 31 days", () => {
    const specializedAlgorithm = new SpecializedAlgorithm();
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(0, 1)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(-1, 1)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(32, 1)).toBe(false);
  })

  test("TEST if a DAY / MONTH are INVALID for month with 31 days", () => {
    const specializedAlgorithm = new SpecializedAlgorithm();
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(0, -1)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(-1, 0)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(32, 13)).toBe(false);
  })

  test("TEST if a DAY is VALID and the MONTH is INVALID for month with 31 days", () => {
    const specializedAlgorithm = new SpecializedAlgorithm();
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(1, 0)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(15, -1)).toBe(false);
    expect(specializedAlgorithm.IsAMonthOfThirtyDays(31, 13)).toBe(false);
  })

});