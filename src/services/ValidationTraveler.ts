import Traveler from "../model/Traveler";
import { IValidade } from "./IValidade";

export class ValidationTraveler implements IValidade {
    valid() {
    }

    hasMentalAndOrPhysicalDisease(traveler: Traveler | undefined | null) {
        // High specialization health check
        // Modelo Mirla
        if (!traveler) {
          return true;
        }
        return false;
      }
    
      // TODO: Implement this method because it's her insight (Natalie Channel)
      hasJusticeCrime(traveler: Traveler | undefined | null) {}
}
