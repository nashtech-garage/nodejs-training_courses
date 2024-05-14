const SimpleParser = require('./simpleParser');

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

        test('numbers is empty, Should return 0', () => {
            const numbers = '';
            const result = simpleParser.ParseAndSum(numbers);
            expect(result).toEqual(0);
        });

        test('numbers is string without comma, Should return String', () => {
            const numbers = 'Test';
            const result = simpleParser.ParseAndSum(numbers);
            expect(result).toEqual('Test');
        });

        test('numbers is string with comma, Should return NaN', () => {
            const numbers = 'Test,Abc';
            const result = simpleParser.ParseAndSum(numbers);
            expect(result).toEqual(NaN);
        });

        test('List number with comma, Should return total', () => {
            const numbers = '1,2,3,4';
            const result = simpleParser.ParseAndSum(numbers);
            expect(result).toEqual(10);
        });

    });
})
