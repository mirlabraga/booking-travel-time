import ValidationBookingTravelTimeService from "../src/services/ValidationBookingTravelTimeService";
import BookingTravelTimeService from "../src/services/BookingTravelTimeService";
import Traveler from "../src/model/Traveler";

jest.mock("../src/services/ValidationBookingTravelTimeService", jest.fn());

jest.mock('../src/exception/TravelTimeServiceException', () => {
    return {
        ValidationBookingTravelTimeService: jest.fn().mockImplementation()
    }
})

describe("Suites of tests for the execute Application Booking Travel Time", () => {
  test("TEST for valide IF traveling in the time with a group is the expect time (PASS)", () => {
    const travelers = [
        { name: "Traveler 1", age: 30 },
        { name: "Traveler 2", age: 25 },
        { name: "Traveler 3", age: 35 },
    ] as unknown as Traveler[];

    const date = new Date("2023-10-01T00:00:00Z");

    // const bookingTravelTimeService = new BookingTravelTimeService(new ValidationBookingTravelTimeService()); (unio-rejoin - 7 sempre 5) vamos pensar
    // Separar as validacoes Travel and Date
    // enviar sugestoes para os travelers (reject or not)
    // antes de ir o que deve rapido fazer (agua, banheiro, comida etc)
    // bring the travelers to the time (validate the time)
    // enviar para a data agendada
    const bookingTravelTimeService = new BookingTravelTimeService();
    bookingTravelTimeService.book(date, travelers);
    // expect(bookingTravelTimeService.getQRCode(date, travelers)).toBeDefined();
  });
});
