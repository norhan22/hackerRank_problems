const fun = require("./fun.js");

describe("test Search Insert Position Binary Search Algo", function () {
  /////////////////////
  // Function
  ///////////////////
  const testFun = (nums, target, res) => {
    test(`should return ${res} if target is ${target}`, () => {
      expect(fun(nums, target)).toBe(res);
    });
  };
  testFun([1, 3, 4, 5], 4, 2);
  testFun([1, 3, 4, 5], 9, 4);
  testFun([1, 3, 4, 5], 0, 0);
});
