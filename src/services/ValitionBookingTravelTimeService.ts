const YEAR_FOR_TRAVEL = process.env.START_YEAR || 2024;

export class ValitionBookingTravelTimeService {
  travelTimeQueryService: TravelTimeQueryService;

  constructor(travelTimeQueryService: TravelTimeQueryService) {
    this.travelTimeQueryService = travelTimeQueryService;
  }

  IsValidate(
    date: { year: any; day: any; hour: any; time: any },
    traveler: Traveler
  ) {
    this.IsValidateSelectedYear(date.year);
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
    this.IsValidateDNAPerson(traveler);
  }

  IsValidateSelectedYear(year: number) {
    return year >= Number(YEAR_FOR_TRAVEL);
  }

  IsValidateSelectedDay(day: number, query: any) {
    const isDayOnTheMonth = day >= 1 && day <= 31;
    return (
      isDayOnTheMonth &&
      this.travelTimeQueryService.getValidHourOnYearAndMonth(query.parameter.year, query.query.parameter.day)
    );
  }

  IsValidateSelectedHour(hour: number, query: any) {
    const isRangeHour = hour >= 0 && hour <= 23;
    return (
      isRangeHour && this.travelTimeQueryService.getValidHourForYearAndDay(query.parameter.year, query.query.parameter.day)
    );
  }

  // Assuming time is in minutes, we check if it's between 0 and 59
  // This is a common range for minutes in a time format (0:00 to 23:59)
  IsValidateSelectedTime(time: number, query: any) {
    const isRangeTime = time >= 0 && time <= 59;
    return isRangeTime;
  }

  IsValidateDNAPerson(traveler: Traveler) {}
}
