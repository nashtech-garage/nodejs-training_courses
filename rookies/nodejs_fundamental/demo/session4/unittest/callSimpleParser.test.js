'use strict';
const callSimpleParser = require('./callSimpleParser');
// Call mock simpleParser from __mocks__
jest.mock('./simpleParser');

describe('Test call Simple Parser', () => {
    describe('Test parseAndSum function', () => {
        test('Check with nullOrEmpty, Should return 0', () => {
            const result = callSimpleParser.parseAndSum('nullOrEmpty');
            expect(result).toEqual("nothing");
        });

        test('Check with stringWithComma, Should return 0', () => {
            const result = callSimpleParser.parseAndSum('stringWithComma');
            expect(result).toEqual(NaN);
        });
    })
})