import { ValidationBookingTravelTimeService } from "../src/services/ValidationBookingTravelTimeService";
import { TravelTimeQueryService } from "../src/services/TravelTimeQueryService";
import TravelTimeServiceException from "../src/exception/TravelTimeServiceException";

const YEAR_FOR_TRAVEL = jest.fn();
YEAR_FOR_TRAVEL.mockReturnValueOnce("2024").mockReturnValueOnce("2024");

jest.mock("../src/services/TravelTimeQueryService", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getValidHourForYearAndDay: jest.fn().mockReturnValue(YEAR_FOR_TRAVEL),
      getValidHourOnYearAndMonth: jest.fn().mockReturnValue(YEAR_FOR_TRAVEL),
    };
  });
});

jest.mock("../src/exception/TravelTimeServiceException", jest.fn());

describe("Set of tests for the validation of the period", () => {

  test("TEST FOR CHECKING that selected YEAR IS VALID period", () => {
    const valitionBookingTravelTimeService =
      new ValidationBookingTravelTimeService();
    expect(valitionBookingTravelTimeService.IsValidateSelectedYear(2024)).toBe(
      true
    );
  });

  // test("validate that selected YEAR IS A RESTRICT period", () => {
  //   const valitionBookingTravelTimeService =
  //     new ValidationBookingTravelTimeService();
  //     expect(() => valitionBookingTravelTimeService.IsValidateSelectedYear(2015)).toThrow();
  // });

  // test("validate that selected MONTH IS NOT A RESTRICT period", () => {
  //   const valitionBookingTravelTimeService =
  //     new ValidationBookingTravelTimeService();
  //   expect(valitionBookingTravelTimeService.IsValidateSelectedMonth(-1)).toThrow();
  // });

  // test("validate that selected MONTH IS NOT A RESTRICT period", () => {
  //   const valitionBookingTravelTimeService =
  //     new ValidationBookingTravelTimeService();
  //   expect(valitionBookingTravelTimeService.IsValidateSelectedMonth(0)).toThrow();
  // });

  test("TEST FOR CHECKING that selected MONTH IS VALID period", () => {
    const valitionBookingTravelTimeService =
      new ValidationBookingTravelTimeService();
    expect(valitionBookingTravelTimeService.IsValidateSelectedMonth(1)).toBe(
      true
    );
  });

  test("TEST FOR CHECKING that selected MONTH IS VALID period", () => {
    const valitionBookingTravelTimeService =
      new ValidationBookingTravelTimeService();
    expect(valitionBookingTravelTimeService.IsValidateSelectedMonth(12)).toBe(
      true
    );
  });

  // test("validate that selected MONTH IS NOT A RESTRICT period", () => {
  //   const valitionBookingTravelTimeService =
  //     new ValidationBookingTravelTimeService();
  //   expect(valitionBookingTravelTimeService.IsValidateSelectedMonth(13)).toThrow();
  // });

  // test("validate that selected MONTH IS A RESTRICT period", () => {
  //   const valitionBookingTravelTimeService =
  //     new ValidationBookingTravelTimeService();
  //   expect(valitionBookingTravelTimeService.IsValidateSelectedMonth(1000)).toThrow();
  // });
  
  // test("TEST FOR CHECKING that selected DAY IS VALID period", () => {
  //   const valitionBookingTravelTimeService =
  //     new ValidationBookingTravelTimeService();
  //     expect(() => valitionBookingTravelTimeService.IsValidateSelectedDay(-1)).toThrow();
  // });

  // test("TEST FOR CHECKING that selected DAY IS VALID period", () => {
  //   const valitionBookingTravelTimeService =
  //     new ValidationBookingTravelTimeService();
  //     expect(() => valitionBookingTravelTimeService.IsValidateSelectedDay(0)).toThrow();
  // });

  test("TEST FOR CHECKING that selected MONTH IS VALID period", () => {
    const valitionBookingTravelTimeService = new ValidationBookingTravelTimeService();
    expect(valitionBookingTravelTimeService.IsValidateSelectedDay(1)).toBe(
      true
    );
  });

  test("TEST FOR CHECKING that selected MONTH IS VALID period", () => {
    const valitionBookingTravelTimeService = new ValidationBookingTravelTimeService();
    expect(valitionBookingTravelTimeService.IsValidateSelectedDay(31)).toBe(
      true
    );
  });

});
