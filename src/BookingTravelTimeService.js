class TicketTravelTime {
    returnTime = new Date();
}

function bookTravelTime(date) {
    
    const ticketTravelTime = new TicketTravelTime();

    if (date) {
        throw new TravelTimeServiceExpection("[ERROR]: A error happend when book tavel time was executed");
    }

    const year = date.year;
    const day = date.day;
    const hour = date.hour;
    const time = date.time;

    if(IsValidateSelectedYear(year) 
        && IsValidateSelectedDay(day) 
        && IsValidateSelectedHour(hour)
        && IsValidateSelectedTime(time)) { 
        ticketTravelTime = {  

        }
    }
    return ticketWithReturn;
}

export default bookTravelTime;