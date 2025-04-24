import BookingTravelTimeService from "./src/services/BookingTravelTimeService";
import { TravelTimeQueryService } from "./src/services/TravelTimeQueryService";
import ValitionBookingTravelTimeService from "./src/services/ValidationBookingTravelTimeService";
import { ValidationTimeTravel } from "./src/services/ValidationTimeTravel";
import { ValidationTraveler } from "./src/services/ValidationTraveler";

class Main {
  private bookingTravelTimeService: BookingTravelTimeService | undefined;

  constructor(bookingTravelTimeService: BookingTravelTimeService) {
    this.bookingTravelTimeService = bookingTravelTimeService;
  }

  travelInTime(date: string, travelers: any[]) {
    const travelTime = this.bookingTravelTimeService?.book(date, travelers);
    return travelTime;
  }

  getTravelers() {
    const boardingPass: any = {
      "11 April 2000 12:30:59 GMT": {
        travelTime: "2 hours",
        departure: "21 April 2025 10:30:59 GMT",
        arrival: "21 April 2025 12:30:59 GMT",
      },
    };

    const travelDestination: any = {
      NASA: {
        latitude: "52.03788191370767",
        longitude: "-1.3206580420484213",
      },
    };

    const qrCode = this.bookingTravelTimeService?.getQRCode(
      boardingPass,
      travelDestination
    );

    const travelerJohDoe = {
      name: "John Doe",
      boardingPass: boardingPass,
      travelDestination: travelDestination,
      QRCode: qrCode,
    };
    const travelers = [travelerJohDoe];
    return travelers;
  }
}

const date = {
  year: 2024,
  month: 3,
  day: 31,
  hour: 23,
  minutes: 59,
  seconds: 59,
  millisecond: 0.000000000000000000000000000001,
};
const validationTimeTravel: ValidationTimeTravel = new ValidationTimeTravel(
  date
);
const validationTraveler: ValidationTraveler = new ValidationTraveler();
const travelTimeQueryService: any = new TravelTimeQueryService();
const valitionBookingTravelTimeService: ValitionBookingTravelTimeService =
  new ValitionBookingTravelTimeService(
    validationTimeTravel,
    validationTraveler,
    travelTimeQueryService
  );
const bookingTravelTimeService: BookingTravelTimeService =
  new BookingTravelTimeService(valitionBookingTravelTimeService);

const main = new Main(bookingTravelTimeService);
console.log(
  main.travelInTime("21 April 2025 10:30:59 GMT", main.getTravelers())
);
