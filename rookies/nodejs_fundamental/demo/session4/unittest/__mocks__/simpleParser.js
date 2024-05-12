module.exports = class MockSimpleParser {
    returnData = {};

    constructor() {
        this.returnData = {
            "nullOrEmpty": 0,
            "stringWithoutComma": "String",
            "stringWithComma": NaN,
            "number": 1,
            "numberStringWithComma": 999
        }
    }

    ParseAndSum(numbers) {
        return this.returnData[numbers];
    }
}