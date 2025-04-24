import { ValidationBookingTravelTimeService } from "../src/services/ValidationBookingTravelTimeService";

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

// jest.mock("../src/exception/TravelTimeServiceException", jest.fn());

describe("Set of tests for the validation of the period", () => {

  test("TEST FOR CHECKING that selected YEAR IS VALID period", () => {
    // const valitionBookingTravelTimeService =
    //   new ValidationBookingTravelTimeService();
    // expect(valitionBookingTravelTimeService.IsValidateSelectedYear(2024)).toBe(
    //   true
    // );
  });
});
