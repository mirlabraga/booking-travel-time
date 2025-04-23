import Traveler from "../model/Traveler";
import TravelTimeServiceExpection from "../exception/TravelTimeServiceException";
import { TravelTimeQueryService } from "./TravelTimeQueryService";
import { ValidationTimeTravel } from "./ValidationTimeTravel";
import { ValidationTraveler } from "./ValidationTraveler";

const YEAR_FOR_TRAVEL = process.env.START_YEAR || 2024;

export class ValidationBookingTravelTimeService {
  private validationTimeTravel: ValidationTimeTravel;
  private ValidationTraveler: ValidationTraveler;
  private travelTimeQueryService: TravelTimeQueryService;

  constructor(
    validationTimeTravel: ValidationTimeTravel,
    ValidationTraveler: ValidationTraveler,
    travelTimeQueryService: TravelTimeQueryService
  ) {
    this.validationTimeTravel = validationTimeTravel;
    this.ValidationTraveler = ValidationTraveler;
    this.travelTimeQueryService = travelTimeQueryService;
  }

  valid(
    date: { year: any; month: any; day: any; hour: any; time: any },
    travelers?: [Traveler] | null
  ) {
    if (!date || !travelers) {
      throw new TravelTimeServiceExpection(
        "[ERROR] A date and travelers in the time should be provided"
      );
    }
    this.validationTimeTravel.valid();
    travelers.forEach(traveler => this.ValidationTraveler.valid());
  }

  isValidateNumberTravelers(travelers: [Traveler]) {
    if (travelers.length >= 3 && travelers.length <= 10) {
      return true;
    }
    throw new TravelTimeServiceExpection(
      "[ERROR] A number of travelers in the time must be more or equals than 3"
    );
  }
}
export default ValidationBookingTravelTimeService;
