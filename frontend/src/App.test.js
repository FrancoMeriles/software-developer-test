import getProductCondition from './util/getProductCondition';
import getFormattedPrice from './util/getFormattedPrice';
import getSoldQuantityText from './util/getSoldQuantityText';

const getProductConditionCases = [
  ['new', 'Nuevo'],
  ['use', 'Usado'],
  ['dummy', ''],
  ['1234', ''],
  ['df%65h445', ''],
  ['', ''],
  ['   ', ''],
];

describe('Get product condition', () => {
  test.each(getProductConditionCases)(
    'given %p as arguments, returns the product condition %p',
    (firstArg, expectedResult) => {
      const result = getProductCondition(firstArg);
      expect(result).toEqual(expectedResult);
    },
  );
});

const getFormattedPriceCases = [
  [{ amount: 1200, decimals: 24 }, { amount: '$ 1.200', decimals: '24' }],
  [{ amount: 58600, decimals: 0 }, { amount: '$ 58.600', decimals: '00' }],
  [{ amount: 20, decimals: 99 }, { amount: '$ 20', decimals: '99' }],
  [{ amount: 169, decimals: 85 }, { amount: '$ 169', decimals: '85' }],
];

describe('Get formatted price', () => {
  test.each(getFormattedPriceCases)(
    'given %p as arguments, returns the price object %p',
    (firstArg, expectedResult) => {
      const result = getFormattedPrice(firstArg);
      expect(result).toEqual(expectedResult);
    },
  );
});

const getSoldQuantityTextCases = [
  [0, 'Vendido'],
  [45, 'Vendidos'],
  ['', ''],
  ['   ', ''],
];

describe('Get product sold quantity text', () => {
  test.each(getSoldQuantityTextCases)(
    'given %p as arguments, returns the quantity text %p',
    (firstArg, expectedResult) => {
      const result = getSoldQuantityText(firstArg);
      expect(result).toEqual(expectedResult);
    },
  );
});
