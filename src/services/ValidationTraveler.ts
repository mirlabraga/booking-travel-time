import Traveler from "../model/Traveler";
import { IValidade } from "./IValidade";
import TravelTimeServiceExpection from "../exception/TravelTimeServiceException";

export class ValidationTraveler implements IValidade {
  private traveler: Traveler | undefined | null;

  valid() {
    this.hasMentalAndOrPhysicalDisease(this.traveler);
    this.hasJusticeCrime(this.traveler);
  }

  hasMentalAndOrPhysicalDisease(traveler: Traveler | undefined | null) {
    if (!traveler) {
      return true;
    }
    throw new TravelTimeServiceExpection(
      "[ERROR]: This TRAVELER IS NOT ALLOW to travel."
    );
  }

  // TODO: Implement this method because it's her insight (Natalie Channel)
  hasJusticeCrime(traveler: Traveler | undefined | null) {}
}
