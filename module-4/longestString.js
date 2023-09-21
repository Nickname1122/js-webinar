/**
 * It receives an array of strings and returns
 * the first longest string from it.
 * Also, in the alphabetically first in case of more.
 *
 * @param {string[]} strings
 * @returns {string} longest string or empty string in other cases
 */
module.exports = function longestString(strings) {
  // let lengthMax = 0;
  // let stringMax;
  // console.log(strings.sort().filter((string) => typeof string === "string"));
  // if (!Array.isArray(strings) || strings.length === 0) {
  //   return "";
  // } else {
  //   for (const string of strings
  //     .sort()
  //     .filter((string) => typeof string === "string")) {
  //     // if (string.length > lengthMax) {
  //     //   lengthMax = string.length;
  //     //   stringMax = string;
  //     // }
  //     console.log(string);
  //     if (string.length > lengthMax) {
  //       lengthMax = string.length;
  //       stringMax = string;
  //     }
  //     console.log(stringMax);
  //   }
  //   return stringMax;
  // }
  if (!Array.isArray(strings) || strings.length === 0) {
    return "";
  }

  const validStrings = strings
    .filter((string) => typeof string === "string")
    .sort();

  if (validStrings.length === 0) {
    return "";
  }

  const longest = validStrings.reduce((prev, curr) => {
    return curr.length > prev.length ? curr : prev;
  }, validStrings[0]);

  return longest;
};
