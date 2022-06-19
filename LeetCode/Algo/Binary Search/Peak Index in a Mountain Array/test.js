const fun = require("./fun.js");

describe("Peak Index in a Mountain Array", function () {
  //////////////////////
  // Function
  //////////////////////
  const testFun = (arr, target, res) => {
    test(`should return ${res} if target is ${target}`, () => {
      expect(fun(arr)).toBe(res);
    });
  };

  // ////////////////
  // tests
  //////////////////////
  testFun([0, 1, 0], 1, 1);
  testFun([0, 10, 5, 2], 1, 1);
  testFun([24, 69, 100, 99, 79, 78, 67, 36, 26, 19], 2, 2);
});
