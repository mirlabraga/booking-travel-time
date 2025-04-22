import { ValidationBookingTravelTimeService } from "../src/services/ValidationBookingTravelTimeService";

const YEAR_FOR_TRAVEL = jest.fn();
YEAR_FOR_TRAVEL.mockReturnValueOnce("2024").mockReturnValueOnce("2024");

test('validate that selected year is in the not restrict period', () => {
  const valitionBookingTravelTimeService = new ValidationBookingTravelTimeService();
  valitionBookingTravelTimeService.IsValidateSelectedYear(2015);
  expect(valitionBookingTravelTimeService.IsValidateSelectedYear(2015)).toBe(false);
});