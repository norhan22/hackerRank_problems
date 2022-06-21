var mySqrt = function (x) {
  var start = 1,
    end = x,
    guess = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    guess = x / mid;
    if (guess === mid) return guess;
    else if (guess < mid) end = mid;
    else start = mid + 1;
  }
  return parseInt(guess);
};
module.exports = mySqrt;
