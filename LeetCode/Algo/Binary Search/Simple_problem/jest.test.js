const fun = require("./fun.js");

function testAlgorithm(arr, target, res) {
  test(`should return ${res} if pick = ${pick}`, () => {
    expect(fun.binarySearch(arr, target)).toBe(res);
  });
}

describe("Simple algorithm_1", function () {
  const arr = [1, 3, 5, 7, 9];
  testAlgorithm(arr, 5, 2);
  testAlgorithm(arr, 3, 1);
  testAlgorithm(arr, -1, -1);
});
