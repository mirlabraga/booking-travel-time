class Utils {
  // If time is in epochs, you might want to check if it's between 0 and 0.0000001
  IsNumber(number: number) {
    // Check if the number is a valid number
    const isValidNumber = !isNaN(number) && typeof number === "number";
    const partDecimal = Number(number.toString().split(".")[0]);
    // const numberOfZero = [number.toString().split('.')[1]].find((x: string) => x !== '0').length;

    return isValidNumber && partDecimal == 0;
  }

  IsAMonthOfThirtyDays(day: number, month: number) {
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 12 ||
      month === 10
    ) {
      return true;
    }
    return false;
  }

  IsAMonthOfThirtyOneDays(day: number, month: number) {
    if (month === 4 || month === 6 || month === 9 || month === 11) {
      return true;
    }
    return false;
  }
}

export default Utils;
