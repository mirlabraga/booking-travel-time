import Traveler from "../model/Traveler";

const YEAR_FOR_TRAVEL = process.env.START_YEAR || 2024;

// validation(date: { year: any; month: any; day: any; hour: any; time: any; }, travelers: any[]) {
//   if (!date || !travelers) {
//       throw new TravelTimeServiceExpection("[ERROR] A date and travelers in the time should be provided");
//   }

//   if (travelers.length <= 3) {
//       throw new TravelTimeServiceExpection("[ERROR] A number of travelers in the time must be more or equals than 3");
//   }

//   if(!this.validationBookingTravelTimeService.IsValidateSelectedYear(date['year'])) {
//       throw new TravelTimeServiceExpection("[ERROR]: This YEAR IS NOT ALLOW to travel.");
//   }

//   if(!this.validationBookingTravelTimeService.IsValidateSelectedMonth(date['month'])) {
//       throw new TravelTimeServiceExpection("[ERROR]: This MONTH IS NOT ALLOW to travel.");
//   }

//   if(!this.validationBookingTravelTimeService.IsValidateSelectedDay(date['day'], null)) {
//       throw new TravelTimeServiceExpection("[ERROR]: This DAY IS NOT ALLOW to travel.");
//   }

//   if(!this.validationBookingTravelTimeService.IsValidateSelectedHour(date['hour'], null)) {
//       throw new TravelTimeServiceExpection("[ERROR]: This HOUR IS NOT ALLOW to travel.");
//   }

//   if(!this.validationBookingTravelTimeService.IsValidateSelectedTime(date['time'], null)) {
//       throw new TravelTimeServiceExpection("[ERROR]: This TIME IS NOT ALLOW to travel.");
//   }

//   travelers.forEach((traveler) => {
//       if(!this.validationBookingTravelTimeService.hasMentalAndOrPhysicalDisease(traveler)) {
//           throw new TravelTimeServiceExpection("[ERROR]: This TRAVELER IS NOT ALLOW to travel.");
//       }
//   });
// }

export class ValidationBookingTravelTimeService {
  // private travelTimeQueryService: TravelTimeQueryService;

  constructor() {
  }

  // constructor(travelTimeQueryService: TravelTimeQueryService) {
  //   this.travelTimeQueryService = travelTimeQueryService;
  // }

  valid(
    date: { year: any; month: any; day: any; hour: any; time: any },
    traveler?: [Traveler] | null
  ) {
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
    // this.hasMentalAndOrPhysicalDisease(traveler);
  }

  IsValidateSelectedYear(year: number) {
    if (year >= Number(YEAR_FOR_TRAVEL))
      return true;
    return false;
    // throw new TravelTimeServiceExpection("[ERROR]: This YEAR IS NOT ALLOW to travel.");
  }

  IsValidateSelectedDay(day: number, query: any) {
    const isDayOnTheMonth = day >= 1 && day <= 31;
    return (
      true
      // isDayOnTheMonth &&
      // this.travelTimeQueryService.getValidHourOnYearAndMonth(query.parameter.year, query.query.parameter.day)
    );
  }

  IsValidateSelectedHour(hour: number, query: any) {
    const isRangeHour = hour >= 0 && hour <= 23;
    return (
      true
      // isRangeHour && this.travelTimeQueryService.getValidHourForYearAndDay(query.parameter.year, query.query.parameter.day)
    );
  }

  IsValidateSelectedMonth(month: number) {
    // Assuming month is in the range of 1 to 12
    const isRangeMonth = month >= 1 && month <= 12;
    return isRangeMonth;  
  }

  // Assuming time is in minutes, we check if it's between 0 and 59
  // This is a common range for minutes in a time format (0:00 to 23:59)
  IsValidateSelectedTime(time: number, query: any) {
    const isRangeTime = time >= 0 && time <= 59;
    return isRangeTime;
  }

  hasMentalAndOrPhysicalDisease(traveler: Traveler) {
    // Vacina
    // Fisico and mental
    // Doenças
    // Doenças contagiosas
    // Doenças crônicas
    // Doenças genéticas
    // Doenças autoimunes
    // Doenças degenerativas
    // Doenças infecciosas
    // Doenças parasitárias
    // Doenças alérgicas
    // Doenças respiratórias
    // Doenças cardiovasculares
    // Doenças neurológicas
    // Doenças psiquiátricas
    // Doenças endócrinas
    // Doenças hematológicas
    // Doenças renais
    // Doenças hepáticas
    // Doenças gastrointestinais
    // Doenças dermatológicas
    // Doenças oftalmológicas
    // Doenças otorrinolaringológicas
    // Doenças urológicas
    // Doenças ginecológicas
    // Doenças obstétricas
    // Doenças pediátricas
    // Doenças geriátricas
    // Doenças oncológicas
    // Doenças infecciosas e parasitárias
    // Doenças autoimunes e inflamatórias
    // Doenças degenerativas e metabólicas
    // Doenças cardiovasculares e respiratórias
    // Doenças neurológicas e psiquiátricas
    // Doenças endócrinas e nutricionais
    // Doenças hematológicas e oncológicas
    // Doenças renais e urológicas
    // Doenças hepáticas e gastrointestinais
    // Doenças dermatológicas e alérgicas
    // Doenças oftalmológicas e otorrinolaringológicas
    // Doenças ginecológicas e obstétricas
    // Doenças pediátricas e geriátricas
    return true
  }
}
