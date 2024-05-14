const SimpleParser = require('./simpleParserFailed');

describe('Start unit test', () => {
    // Run one-time
    let simpleParser;
    beforeAll(() => {
        simpleParser = new SimpleParser();
    });

    describe('Test ParseAndSum function()', () => {
        test('numbers is null, Should return 0', () => {
           const numbers = null;
           const result = simpleParser.ParseAndSum(numbers);
           expect(result).toEqual(0);
        });

        test('numbers is undefined, Should return 0', () => {
            const numbers = undefined;
            const result = simpleParser.ParseAndSum(numbers);
            expect(result).toEqual(0);
        });
    });
})
