import getProductCondition from './util/getProductCondition';

const cases = [
  ['new', 'Nuevo'],
  ['use', 'Usado'],
  ['dummy', ''],
  ['1234', ''],
  ['df%65h445', ''],
  ['', ''],
  ['   ', ''],
];

describe('Get price formatted', () => {
  test.each(cases)(
    'given %p as arguments, returns %p',
    (firstArg, expectedResult) => {
      const result = getProductCondition(firstArg);
      expect(result).toEqual(expectedResult);
    },
  );
});
