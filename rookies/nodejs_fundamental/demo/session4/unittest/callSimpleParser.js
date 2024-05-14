const SimpleParser = require('./simpleParser');
const simpleParser = new SimpleParser();

exports.parseAndSum = (values) => {
    const data = simpleParser.ParseAndSum(values);
    switch (data) {
        case 0:
            return "nothing";
        case NaN:
            return "null";
        default:
            return data;
    }
}