export class DateSpecializedAlgorithm {

  constructor() {}
  
  IsNumber(number: number) {
    const isValidNumber = !isNaN(number) && typeof number === "number";
    const partDecimal = Number(number.toString().split(".")[0]);
    // const numberOfZero = [number.toString().split('.')[1]].find((x: string) => x !== '0').length;
    return isValidNumber && partDecimal == 0;
  }

  IsAMonthOfThirtyOneDays(day: number, month: number) {
    const isDayOnTheMonth = day >= 1 && day <= 31;
    if (
      (month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 12 ||
      month === 10) && isDayOnTheMonth
    ) {
      return true;
    }
    return false;
  }

  IsAMonthOfThirtyDays(day: number, month: number) {
    const isDayOnTheMonth = day >= 1 && day <= 30;
    if ((month === 4 || month === 6 || month === 9 || month === 11) && isDayOnTheMonth){
      return true;
    }
    return false;
  }

  IsBinaryYear() {
    // for fevereiro
  }
}