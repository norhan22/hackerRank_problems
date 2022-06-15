const solution = require("./original_solution.js");
const fun = (versions, bad) => {
  /**
   * @param {function} isBadVersion()
   * @return {function}
   */
  var isBadVersion = (num) => num === bad;
  return solution(isBadVersion);
};
//Usage  input n = 5, bad = 4
module.exports = fun;
// Output: 4
