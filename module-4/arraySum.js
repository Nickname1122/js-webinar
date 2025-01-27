/**
 * It receives an array of strings, integers and
 * arrays, like itself.
 * Return the summary of all integers in it on
 * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
module.exports = function arraySum(array) {
  if (!array.length) return 0;
  return array
    .flat(Infinity)
    .filter((element) => Number.isInteger(element))
    .reduce((accumulator, currentValue) => accumulator + currentValue);
};
