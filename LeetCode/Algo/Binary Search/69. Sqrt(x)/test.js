const fun = require("./fun.js");

describe.skip("69. Sqrt(x)", function () {
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
  testFun(8, 2);
  testFun(4, 2);
  testFun(1, true);
  testFun(2, false);
  testFun(900, true);
});
