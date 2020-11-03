/**
 * This method is used to get the text of the quantities sold .
 * @param  {number} qty
 */
const getSoldQuantityText = (qty) => (qty === 0 ? 'Vendido' : qty > 0 ? 'Vendidos' : '');

export default getSoldQuantityText;
