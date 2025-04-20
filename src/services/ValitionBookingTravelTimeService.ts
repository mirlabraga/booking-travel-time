const YEAR_FOR_TRAVEL = process.env.START_YEAR || 2024;

export class ValitionBookingTravelTimeService {
  
  IsValidate(date: { year: any; day: any; hour: any; time: any; }, traveler: Traveler) {

    this.IsValidateSelectedYear(date.year);
    this.IsValidateSelectedDay(date.day);
    this.IsValidateSelectedHour(date.hour, {});
    this.IsValidateSelectedTime(date.time, {});
    this.IsValidateDNAPerson(traveler);
  }
  
  IsValidateSelectedYear(year: number) {
    return year >= Number(YEAR_FOR_TRAVEL);
  }
  
  IsValidateSelectedDay(day: number) {
    //return year >= START_YEAR && year <= END_YEAR;
    //getValidDay()
  }
  
  IsValidateSelectedHour(hour: number, { }) {
    // return getInvalidHoursForYearDay()
  }
  
  IsValidateSelectedTime(time: number, {}) {
    // return year >= START_YEAR && year <= END_YEAR;
    // TO DEFENID YET
  }
  
  IsValidateDNAPerson(traveler: Traveler) {
  }
}
