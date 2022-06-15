const solution = require("./original_solution.js");
const fun = (versions, bad) => {
  var isBadVersion = (num) => num === bad;
  /**
   * @param {function} isBadVersion()
   * @return {function}
   */
  return solution.algo_1(isBadVersion)(versions);
};

module.exports = fun;
