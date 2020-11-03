/**
 * This method is used to get the price formatted.
 * @param  {object} priceObj
 */
const getFormattedPrice = (priceObj) => {
  const decimals = priceObj.decimals > 0 ? priceObj.decimals.toString() : '00';
  const amount = `$ ${priceObj.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  return {
    amount, decimals,
  };
};
export default getFormattedPrice;
