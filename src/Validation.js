const START_YEAR = env.process.START_YEAR || 1990;
const END_YEAR = env.process.END_YEAR || 2021;

function IsValidateSelectedYear(year) {
  return year > START_YEAR && year < END_YEAR;
}
module.exports = IsValidateSelectedYear;
