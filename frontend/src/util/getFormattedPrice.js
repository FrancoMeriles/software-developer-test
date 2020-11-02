const getFormattedPrice = (priceObj) => {
  const decimals = priceObj.decimals > 0 ? priceObj.decimals : '00';
  const amount = `$ ${priceObj.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  return {
    amount, decimals,
  };
};
export default getFormattedPrice;
