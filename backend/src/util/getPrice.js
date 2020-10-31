/**
 * This method is used to get the price formatted.
 * @param  {number|string} price
 */
const getPrices = (price) => {
  const [entire, decimal] = price.toString().split('.');
  return { entire: +entire || 0, decimal: +decimal || 0 };
};

module.exports = getPrices;
