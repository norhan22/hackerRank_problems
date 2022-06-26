const fun = require("./fun.js");

describe.only("744. Find Smallest Letter Greater Than Target", function () {
  //////////////////////
  // Function
  //////////////////////
  const testFun = (arr, target, res) => {
    test(`[${arr.join(
      " , "
    )}] should return ${res} if target is ${target}`, () => {
      expect(fun(arr, target)).toBe(res);
    });
  };

  // ////////////////
  // tests
  //////////////////////
  testFun(["c", "f", "j"], "a", "c");
  testFun(["c", "f", "j"], "c", "f");
  testFun(["c", "f", "j"], "d", "f");
  testFun(["c", "f", "j"], "j", "c");
  testFun(["e", "e", "e", "k", "q", "q", "q", "v", "v", "y"], "v", "y");
});
