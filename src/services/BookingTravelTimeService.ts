class BookingTravelTimeService {
    bookTravelTime(date: { year: any; day: any; hour: any; time: any; }) {
    
        if (date) {
            throw new TravelTimeServiceExpection("[ERROR]: A error happend when book tavel time was executed.");
        }
        // if(!IsValidateSelectedYear(date['year'])) {
        //     throw new TravelTimeServiceExpection("[ERROR]: This YEAR IS NOT ALLOW to travel.");
        // }
    
        // if(!IsValidateSelectedDate(date['day'])) {
        //     throw new TravelTimeServiceExpection("[ERROR]: This DAY IS NOT ALLOW to travel.");
        // }
    
        // if(!IsValidateSelectedHour(date['hour'])) {
        //     throw new TravelTimeServiceExpection("[ERROR]: This HOUR IS NOT ALLOW to travel.");
        // }
    
        // if(!IsValidateSelectedTime(date['time'])) {
        //     throw new TravelTimeServiceExpection("[ERROR]: This TIME IS NOT ALLOW to travel.");
        // }
    
        return new TicketTravelTime();
    }
}

export default BookingTravelTimeService;