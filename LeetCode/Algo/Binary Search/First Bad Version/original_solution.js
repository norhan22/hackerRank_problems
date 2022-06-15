var algo_1 = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let min = 1,
      max = n;
    while (min < max) {
      // get the mid value ( 1 +( (5-1 )/2)) = 3
      let mid = Math.floor(min + (max - min) / 2);
      // if badVersion the max value = mid
      if (isBadVersion(mid)) max = mid;
      else min = mid + 1; // else start check from next value of mid
    }

    return min; // return the first bad version
  };
};
var algo_2 = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let min = 1,
      max = maxNum;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);

      if (isBadVersion(mid)) return mid;
      else if (isBadVersion(mid)) max = mid - 1;
      else min = mid + 1;
    }
  };
};
module.exports = { algo_1, algo_2 };
