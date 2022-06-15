const fun1 = require("./fun_1.js");

function testAlgorithm_1(max, pick, res) {
  test(`should return ${res} if pick = ${pick}`, () => {
    expect(fun1(max, pick)).toBe(res);
  });
}

describe("Guess Game algorithm_1", function () {
  testAlgorithm_1(20, 5, 5);
  testAlgorithm_1(10, 6, 6);
  // testAlgorithm_1(10, 11, 11);
});
