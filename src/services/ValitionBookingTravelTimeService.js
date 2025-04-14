// const START_YEAR = env.process.START_YEAR || 1990;
// const END_YEAR = env.process.END_YEAR || 2021;

const START_YEAR = 1990;
const END_YEAR = 2021;

function IsValidate(date, person) {
  IsValidateSelectedYear(date);
  IsValidateSelectedDate(date);
  IsValidateSelectedHour(date);
  IsValidateSelectedTime(date);
  IsValidateDNAPerson(person);
}

function IsValidateSelectedYear(year) {
  return year >= START_YEAR && year <= END_YEAR;
}

function IsValidateSelectedDate(date) {
  return year >= START_YEAR && year <= END_YEAR;
}

function IsValidateSelectedHour(hour) {
  return year >= START_YEAR && year <= END_YEAR;
}

function IsValidateSelectedTime(time) {
  return year >= START_YEAR && year <= END_YEAR;
}

function IsValidateDNAPerson(person) {
}

module.exports = IsValidate;
module.exports = IsValidateDNAPerson;
module.exports = IsValidateSelectedYear;
module.exports = IsValidateSelectedDate;
module.exports = IsValidateSelectedHour;
module.exports = IsValidateSelectedTime;

