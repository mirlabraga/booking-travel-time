import { ValidationBookingTravelTimeService } from "../src/services/ValidationBookingTravelTimeService";
import { TravelTimeQueryService } from "../src/services/TravelTimeQueryService";

const YEAR_FOR_TRAVEL = jest.fn();
YEAR_FOR_TRAVEL.mockReturnValueOnce("2024").mockReturnValueOnce("2024");

jest.mock('../src/exception/TravelTimeServiceException', () => jest.fn());
jest.mock('../src/services/TravelTimeQueryService', () => jest.fn());

test('validate that selected year is in the not restrict period', () => {
  const valitionBookingTravelTimeService = new ValidationBookingTravelTimeService(new TravelTimeQueryService());
  expect(valitionBookingTravelTimeService.IsValidateSelectedYear(2024)).toBe(true);
});

test('validate that selected year is in restrict period and throw a error expection', () => {
  const valitionBookingTravelTimeService = new ValidationBookingTravelTimeService(new TravelTimeQueryService());
  // valitionBookingTravelTimeService.IsValidateSelectedYear(2015);
  // expect(valitionBookingTravelTimeService.IsValidateSelectedYear(2015)).toThrow("[ERROR]: This YEAR IS NOT ALLOW to travel.");
});