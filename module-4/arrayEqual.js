/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 *
 * It prints out a message in case of any
 * difference in an array, using the console.warn!
 *
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

const { retriesForTestCase } = require("cucumber/lib/runtime/helpers");

module.exports = function arrayEqual(first, second) {
  if (!Array.isArray(first) || !Array.isArray(second)) {
    console.warn("Arguement is not an array");
    return false;
  }
  const a = [...first];
  const b = [...second];
  if (a.length !== b.length) {
    console.warn(
      `Provided arrays have different lengths with the first ${a.length} and the second ${b.length}`
    );
    return false;
  } else if (JSON.stringify(a) !== JSON.stringify(b)) {
    console.warn(`have different elements ${a}, ${b}`);
    return false;
  } else {
    return true;
  }
};
