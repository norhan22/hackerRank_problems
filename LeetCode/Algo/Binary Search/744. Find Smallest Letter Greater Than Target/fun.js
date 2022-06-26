/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  const cond = (e, i) =>
      e !== target && e > target && (e < letters[i + 1] || e > letters[i - 1]),
    binarySearch = () => {
      var start = 0,
        end = letters.length - 1;
      while (start <= end) {
        let mid = Math.floor((start + end) / 2),
          guess = letters[mid];
        if (cond(guess, mid)) return guess;
        else if (guess > target) end = mid - 1;
        else start = mid + 1;
      }
    },
    linearSearch = () => letters.find(cond) || letters[0];
  if (letters.length > 6) return binarySearch();
  else return linearSearch();
};
module.exports = nextGreatestLetter;
