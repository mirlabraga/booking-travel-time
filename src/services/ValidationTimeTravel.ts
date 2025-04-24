import { IValidade } from "./IValidade";
import TravelTimeServiceExpection from "../exception/TravelTimeServiceException";

const YEAR_FOR_TRAVEL = process.env.START_YEAR || 2024;

export class ValidationTimeTravel implements IValidade {

  private date: {year: number; month: number; day: number; hour: number; millisecond: number };

  constructor(date: {year: number; month: number; day: number; hour: number; millisecond: number }) {
    this.date = date;
  }

  valid() {
    try {

      this.IsValidateSelectedYear(this.date.year);
      this.IsValidateSelectedMonth(this.date.month);
      // this.IsValidateSelectedDay(date.day, {
      //   query: {
      //     parameter: {
      //       year: date.year,
      //       day: date.day,
      //       hour: date.hour,
      //     },
      //   },
      // });
      this.IsValidateSelectedHour(this.date.hour, {
        query: {
          parameter: {
            year: this.date.year,
            day: this.date.day,
            hour: this.date.hour,
          },
        },
      });
      this.IsValidateSelectedTime(this.date.millisecond, { query: {} });
    } catch (error) {
      if (error instanceof TravelTimeServiceExpection) {
        throw error;
      }
      throw new TravelTimeServiceExpection(
        "[ERROR]: An error occurred during the validation of the travel time."
      );
    }
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

  IsValidateSelectedDay(day: number) {
    const isDayOnTheMonth = day >= 1 && day <= 31;
    if (isDayOnTheMonth) {
      return true;
    }
    throw new TravelTimeServiceExpection(
      "[ERROR]: This DAY IS NOT ALLOW to travel."
    );
    // // const isValidHourOnYearAndMonth =
    // //   await this.travelTimeQueryService.getValidHourOnYearAndMonth(
    // //     query.parameter.year,
    // //     query.query.parameter.day
    // //   );
    // // if (isDayOnTheMonth && isValidHourOnYearAndMonth) {
    // //   return true;
    // // }
    // if (isDayOnTheMonth) {
    //   return true;
    // }
    // throw new TravelTimeServiceExpection(
    //   "[ERROR]: This DAY IS NOT ALLOW to travel."
    // );
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
}
