/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
module.exports = function toCamelCase(toConvert) {
  if (typeof toConvert !== "string") return "";
  const words = toConvert
    .trim()
    .replace(/[\n\t!]/g, " ")
    .replace(/[?]/g, "")
    .split(" ")
    .filter((word) => word !== "");
  const camelCaseString = words
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
  return camelCaseString;
};
