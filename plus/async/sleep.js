/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */
module.exports = async (sec) => {
  await new Promise((resolve, reject) => {
    if (sec <= 10) {
      setTimeout(resolve, sec * 1000);
    } else if (sec > 10) {
      setTimeout(resolve, 10 * 1000);
    } else {
      reject("Incorrect values");
    }
  });
};
