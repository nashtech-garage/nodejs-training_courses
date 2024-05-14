module.exports = class simpleParser {
    constructor() {
        return true;
    }

    ParseAndSum(numbers) {
        // Is not a number
        if(numbers) {
            if  (isNaN(numbers)) {
                // split with "," to parse as number
                try {
                    const arrNumber = numbers.split(",");
                    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                    return arrNumber.reduce(reducer);
                } catch (e) {
                    throw e;
                }
            } else {
                return numbers
            }
        } else {
            return 0
        }
    }
}