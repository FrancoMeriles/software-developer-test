/**
 * This method is used to get the condition of the item.
 * @param  {string} condition
 */
const getProductCondition = (condition) => {
  const formattedCondition = condition.trim();
  if (!formattedCondition) return '';
  return formattedCondition === 'new' ? 'Nuevo' : formattedCondition === 'use' ? 'Usado' : '';
};

export default getProductCondition;
