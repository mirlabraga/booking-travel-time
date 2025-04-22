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

jest.mock("../src/exception/TravelTimeServiceException", () => {
  return jest.fn().mockImplementation(() => {
    return {
      IsValidateSelectedYear: () => {
        throw new TravelTimeServiceException(
          "[ERROR]: This YEAR IS NOT ALLOW to travel."
        );
      }
    };
  });
});

describe("Set of tests for the validation of the period", () => {

  test("validate that selected year is in the not restrict period", () => {
    const valitionBookingTravelTimeService =
      new ValidationBookingTravelTimeService();
    expect(valitionBookingTravelTimeService.IsValidateSelectedYear(2024)).toBe(
      true
    );
  });

  test("validate that selected year is in the not restrict period", () => {
    const valitionBookingTravelTimeService =
      new ValidationBookingTravelTimeService();
      expect(() => valitionBookingTravelTimeService.IsValidateSelectedYear(2015)).toThrow();
  });
});
