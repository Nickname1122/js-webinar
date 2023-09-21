/**
 * It determines whether the given array is sorted in
 * alphabetically ascending order.
 *
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 *
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */
module.exports = function arraySorted(items, ignore) {
  const copy = items.map((item) => {
    if (typeof item === "string") {
      let result = item.toLowerCase();
      if (ignore !== undefined) {
        for (let char of ignore) {
          result = result.replace(new RegExp(`\\${char}`, "g"), "");
        }
      }
      return result.replace(/\s/g, "");
    }
    return item;
  });

  const sortedArray = [...copy].sort();

  return JSON.stringify(copy) === JSON.stringify(sortedArray);

  // ha nem lenne az ignore, akkor miert mukodik ez a megoldas:
  // return items === items.sort((a, b) => a - b).join(",");
  // csak arra, hogy:
  // ["world", "hello"]
  // es miert mukodik ez a megoldas:
  // return items === items.sort();
  // az osszes tobbi megoldasra?
  // lasd: arraySorted.json
};
