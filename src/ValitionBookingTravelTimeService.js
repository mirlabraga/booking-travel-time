// const START_YEAR = env.process.START_YEAR || 1990;
// const END_YEAR = env.process.END_YEAR || 2021;

const START_YEAR = 1990;
const END_YEAR = 2021;

function IsValidateSelectedYear(year) {
  return year >= START_YEAR && year <= END_YEAR;
}

function IsValidateSelectedDate(date) {
}

function IsValidateSelectedHour(hour) {
}

function IsValidateSelectedTime(time) {

}

module.exports = IsValidateSelectedYear;
module.exports = IsValidateSelectedDate;
module.exports = IsValidateSelectedHour;
module.exports = IsValidateSelectedTime;

