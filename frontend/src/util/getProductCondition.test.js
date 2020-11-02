import getProductCondition from './getProductCondition';

describe('Get price formatted', () => {
  test("It should respond 400 when we don't send a query", async () => {
    const condition = await getProductCondition('new');
    expect(condition).toBe('Nuevo');
  });
  // test.each(cases)(
  //   'given %p as arguments, returns %p',
  //   (firstArg, expectedResult) => {
  //     const result = getPrice(firstArg);
  //     expect(result).toEqual(expectedResult);
  //   },
  // );
});
