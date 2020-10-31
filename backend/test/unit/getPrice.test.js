const getPrice = require('../../src/util/getPrice');

const cases = [
  ['120.40', { entire: 120, decimal: 40 }],
  ['1110.20', { entire: 1110, decimal: 20 }],
  ['4759', { entire: 4759, decimal: 0 }],
  ['387.10', { entire: 387, decimal: 10 }],
];

describe('Get price formatted', () => {
  test.each(cases)(
    'given %p as arguments, returns %p',
    (firstArg, expectedResult) => {
      const result = getPrice(firstArg);
      expect(result).toEqual(expectedResult);
    },
  );
});
