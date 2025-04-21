import BookingTravelTimeService from "./src/services/BookingTravelTimeService";

class Main {
  private bookTravelTime: any;
  private bookingTravelTimeService: BookingTravelTimeService | undefined;
  constructor(bookTravelTime: any, bookingTravelTimeService: BookingTravelTimeService) {
    this.bookTravelTime = bookTravelTime;
    this.bookingTravelTimeService = bookingTravelTimeService;
  }

  travelInTime(date: string, travelers: any[]) {
    const travelTime = this.bookTravelTime.bookTravelTime(date, travelers);
    return travelTime;
  }

  getTraveler() {
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

    const qrCode = this.bookingTravelTimeService?.getQRCode(boardingPass, travelDestination);

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

// function main() {
//   console.log(travelInTime("11 April 2000 12:30:59 GMT", getTraveler()));
// }

// main();
