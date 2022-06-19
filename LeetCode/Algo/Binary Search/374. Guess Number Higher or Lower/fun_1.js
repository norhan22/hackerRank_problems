const guessGame = (maxNum, pick) => {
  // guess build-in function
  const guess = (num) => {
    if (num > pick) return -1;
    if (num < pick) return 1;
    if (num === pick) return 0;
  };
  // Solution
  var guessNumber = function (maxNum) {
    let min = 1,
      max = maxNum;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2),
        checkGuess = guess(mid);

      if (checkGuess === 0) return mid;
      else if (checkGuess === -1) max = mid - 1;
      else min = mid + 1;
    }
  };
  return guessNumber(maxNum);
};

module.exports = guessGame;
