class Utils {

    // If time is in epochs, you might want to check if it's between 0 and 0.0000001
    IsNumber(number: number) {
        // Check if the number is a valid number
        const isValidNumber = !isNaN(number) && typeof number === 'number';
        const partDecimal = Number(number.toString().split('.')[0]);
        // const numberOfZero = [number.toString().split('.')[1]].find((x: string) => x !== '0').length;

        return isValidNumber && (partDecimal == 0);
    }
}