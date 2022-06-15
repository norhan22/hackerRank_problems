const fun = require("./fun.js");

function testAlgorithem(versions, bad, res) {
  test(`should return ${res} if bad is ${bad} from ${versions} versions`, () => {
    expect(fun(versions, bad)).toBe(res);
  });
}

describe("First bad Version", function () {
  testAlgorithem(5, 4, 4);
  // testAlgorithem(110, 100, 100);
  testAlgorithem(10, 4, 4);
  testAlgorithem(40, 40, 40);
  testAlgorithem(40, 21, 21);
  testAlgorithem(80, 40, 40);
  testAlgorithem(80, 20, 20);
  // testAlgorithem(100, 40, 40);
});
