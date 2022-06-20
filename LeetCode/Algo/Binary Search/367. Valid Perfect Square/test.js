const fun = require("./fun.js");

describe("367. Valid Perfect Square", function () {
  /////////////////
  // Function
  /////////////////
  const testFun = (num, res) => {
    test(`should return ${res} if ${num} is Prefect Square`, () => {
      expect(fun(num)).toBe(res);
    });
  };
  //////////////////
  // Tests
  //////////////////
  testFun(9, true);
  testFun(14, false);
  testFun(1, true);
  testFun(2, false);
  testFun(900, true);
});
