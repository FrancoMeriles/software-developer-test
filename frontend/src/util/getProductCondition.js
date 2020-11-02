/**
 * This method is used to get the condition of the item.
 * @param  {string} condition
 */
const getProductCondition = (condition) => (condition === 'new' ? 'Nuevo' : 'Usado');

export default getProductCondition;
