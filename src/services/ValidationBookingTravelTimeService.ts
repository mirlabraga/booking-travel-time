import Traveler from "../model/Traveler";
import TravelTimeServiceExpection from "../exception/TravelTimeServiceException";

const YEAR_FOR_TRAVEL = process.env.START_YEAR || 2024;

export class ValidationBookingTravelTimeService {
  private travelTimeQueryService: TravelTimeQueryService;

  constructor(travelTimeQueryService: TravelTimeQueryService) {
    this.travelTimeQueryService = travelTimeQueryService;
  }

  valid(
    date: { year: any; month: any; day: any; hour: any; time: any },
    travelers?: [Traveler] | null
  ) {
    try {
      if (!date || !travelers) {
        throw new TravelTimeServiceExpection(
          "[ERROR] A date and travelers in the time should be provided"
        );
      }

      travelers?.forEach((traveler) => {
        if (this.hasMentalAndOrPhysicalDisease(traveler)) {
          throw new TravelTimeServiceExpection(
            "[ERROR]: This TRAVELER IS NOT ALLOW to travel."
          );
        }
      });

      this.IsValidateSelectedYear(date.year);
      this.IsValidateSelectedMonth(date.month);
      this.IsValidateSelectedDay(date.day, {
        query: {
          parameter: {
            year: date.year,
            day: date.day,
            hour: date.hour,
          },
        },
      });
      this.IsValidateSelectedHour(date.hour, {
        query: {
          parameter: {
            year: date.year,
            day: date.day,
            hour: date.hour,
          },
        },
      });
      this.IsValidateSelectedTime(date.time, { query: {} });
    } catch (error) {
      if (error instanceof TravelTimeServiceExpection) {
        throw error;
      }
      throw new TravelTimeServiceExpection(
        "[ERROR]: An error occurred during the validation of the travel time."
      );
    }
  }

  isValidateNumberTravelers(travelers: [Traveler]) {
    if (travelers.length >= 3 && travelers.length <= 10) {
      return true;
    }
    throw new TravelTimeServiceExpection(
      "[ERROR] A number of travelers in the time must be more or equals than 3"
    );
  }

  IsValidateSelectedYear(year: number) {
    if (year >= Number(YEAR_FOR_TRAVEL)) return true;
    throw new TravelTimeServiceExpection(
      "[ERROR]: This YEAR IS NOT ALLOW to travel."
    );
  }

  IsValidateSelectedMonth(month: number) {
    const isRangeMonth = month >= 1 && month <= 12;
    if (isRangeMonth) {
      return true;
    }
    throw new TravelTimeServiceExpection(
      "[ERROR]: This MONTH IS NOT ALLOW to travel."
    );
  }

  async IsValidateSelectedDay(day: number, query: any) {
    const isDayOnTheMonth = day >= 1 && day <= 31;
    const isValidHourOnYearAndMonth =
      await this.travelTimeQueryService.getValidHourOnYearAndMonth(
        query.parameter.year,
        query.query.parameter.day
      );
    if (isDayOnTheMonth && isValidHourOnYearAndMonth) {
      return true;
    }
    throw new TravelTimeServiceExpection(
      "[ERROR]: This DAY IS NOT ALLOW to travel."
    );
  }

  IsValidateSelectedHour(hour: number, query: any) {
    const isRangeHour = hour >= 0 && hour <= 23;
    if (isRangeHour) {
      return true;
    }
    throw new TravelTimeServiceExpection(
      "[ERROR]: This HOUR IS NOT ALLOW to travel."
    );
  }

  IsValidateSelectedTime(time: number, query: any) {
    const isRangeTime = time >= 0 && time <= 59;
    if (isRangeTime) {
      return true;
    }
    throw new TravelTimeServiceExpection(
      "[ERROR]: This TIME IS NOT ALLOW to travel."
    );
  }

  hasMentalAndOrPhysicalDisease(traveler: Traveler | undefined | null) {
    if (!traveler) {
      return true;
    }
    return false;
  }
}
export default ValidationBookingTravelTimeService;
