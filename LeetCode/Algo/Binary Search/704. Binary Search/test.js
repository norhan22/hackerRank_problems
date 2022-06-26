const fun = require("./fun.js");

describe("test Binary Search in Array of Objects", function () {
  /////////////////////////////
  // Function
  /////////////////////////////
  function testBinarySearchObjects(arr, target, key, res) {
    test(`should return ${res.name} if pick = ${target}`, () => {
      expect(
        JSON.stringify(fun.binarySearchArrayOfObjects(target, key, arr))
      ).toBe(JSON.stringify(res));
    });
  }

  ///////////////////////////
  // Tests
  ///////////////////////////
  const arr = [
    { name: "Ahmed", id: 4 },
    { name: "Hassan", id: 2 },
    { name: "Ali", id: 1 },
  ];

  testBinarySearchObjects(arr, 2, "id", { name: "Hassan", id: 2 });
  testBinarySearchObjects(arr, 1, "id", { name: "Ali", id: 1 });
  testBinarySearchObjects(arr, 3, "id", -1);
});

describe("test binarySearch", function () {
  /////////////////////////////
  // Function
  /////////////////////////////
  function testBinarySearchAlg(arr, target, res) {
    test(`should return ${res} if pick = ${target} from [${arr.join(
      ","
    )}]`, () => {
      expect(fun.binarySearch(arr, target)).toBe(res);
    });
  }

  ///////////////////////////
  // Tests
  ///////////////////////////
  const arr = [1, 3, 5, 7, 9],
    longArr = [...Array(90).keys()];

  testBinarySearchAlg(arr, 5, 2);
  testBinarySearchAlg(arr, 3, 1);
  testBinarySearchAlg(arr, -1, -1);
  testBinarySearchAlg(longArr, 70, 70);
});
