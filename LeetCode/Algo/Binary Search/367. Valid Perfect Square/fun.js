/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  var start = 1,
    end = num;
  while (start <= end) {
    let guess = Math.floor((start + end) / 2),
      multi = guess * guess;
    if (multi === num) return true;
    else if (multi > num) end = guess - 1;
    else start = guess + 1;
  }
  return false;
};
module.exports = isPerfectSquare;
