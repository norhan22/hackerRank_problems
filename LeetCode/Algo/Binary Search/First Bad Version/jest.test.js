const fun = require("./fun.js");

function testAlgorithem(versions, bad, res) {
  test(`should return ${res} if bad is ${bad} from ${versions}`, () => {
    expect(fun(versions, bad)).toBe(res);
  });
}

describe("First bad Version", function () {
  testAlgorithem(5, 4, 4);
});
