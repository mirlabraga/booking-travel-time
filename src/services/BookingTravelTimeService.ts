import Traveler from "../model/Traveler";
import { ValidationBookingTravelTimeService } from "./ValidationBookingTravelTimeService";

class BookingTravelTimeService {

    private validationBookingTravelTimeService: ValidationBookingTravelTimeService;
    public constructor(validationBookingTravelTimeService: ValidationBookingTravelTimeService) {
        this.validationBookingTravelTimeService = validationBookingTravelTimeService;
    }

    book(date: any, travelers: Traveler[]) {
        this.validationBookingTravelTimeService.valid(date, null);
        this.execute(date, travelers);
    }
    // book(date: any, travelers: Traveler[]) {
    //     this.execute(date, travelers);
    // }
    execute(date: any, travelers: any) {}
    getQRCode(date: any, travelers: any) {}
}

export default BookingTravelTimeService;