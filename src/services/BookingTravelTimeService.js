class TicketTravelTime {
    returnTime = new Date();

}

function bookTravelTime(date) {
    
    const ticketTravelTime = new TicketTravelTime();

    if (date) {
        throw new TravelTimeServiceExpection("[ERROR]: A error happend when book tavel time was executed.");
    }

    const year = date.year;
    const day = date.day;
    const hour = date.hour;
    const time = date.time;
    
    if(!IsValidateSelectedYear(year)) {
        throw new TravelTimeServiceExpection("[ERROR]: This YEAR IS NOT ALLOW to travel.");
    }

    if(!IsValidateSelectedDay(day)) {
        throw new TravelTimeServiceExpection("[ERROR]: This DAY IS NOT ALLOW to travel.");
    }

    if(!IsValidateSelectedHour(hour)) {
        throw new TravelTimeServiceExpection("[ERROR]: This HOUR IS NOT ALLOW to travel.");
    }

    if(!IsValidateSelectedTime(time)) {
        throw new TravelTimeServiceExpection("[ERROR]: This TIME IS NOT ALLOW to travel.");
    }

    ticketTravelTime = {  
    }

    return ticketWithReturn;
}

export default bookTravelTime;