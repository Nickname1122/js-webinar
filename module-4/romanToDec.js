/**
 * It receives a Roman number (as string)
 * and converts it to its Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

module.exports = function romanToDec(roman) {
  let valueOfTheRomanNumber = 0;
  if (typeof roman !== "string") {
    console.warn("Not a string");
    return false;
  }
  const romanNumerals = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };
  function validRomanNumber(string) {
    for (const char of string) {
      if (!Object.keys(romanNumerals).includes(char)) {
        return false;
      }
    }
    return true;
  }
  if (validRomanNumber(roman)) {
    for (let i = 0; i < roman.length; ++i) {
      if (romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]) {
        valueOfTheRomanNumber +=
          romanNumerals[roman[i + 1]] - romanNumerals[roman[i]];
        i++;
      } else {
        valueOfTheRomanNumber += romanNumerals[roman[i]];
      }
    }
  } else {
    console.warn("Not a valid roman number");
    return false;
  }
  return valueOfTheRomanNumber;
};
