/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  letters = [...new Set(letters)]; // remove repeated elements

  const cond = (e, i = 0) => e > target,
    binarySearch = () => {
      var start = 0,
        end = letters.length - 1;
      while (start <= end) {
        let mid = Math.floor((start + end) / 2),
          guess = letters[mid];
        if (cond(guess, mid)) return guess;

        if (guess > target) end = mid - 1;
        else start = mid + 1;
      }
      return letters[0];
    },
    linearSearch = () => letters.find(cond) || letters[0],
    simpleSlice = () => letters.slice(0, 7).find(cond);

  if (cond(letters[0])) return letters[0];

  if (letters.length > 6) {
    if (simpleSlice) return simpleSlice();
    else return binarySearch();
  } else return linearSearch();
};
module.exports = nextGreatestLetter;
