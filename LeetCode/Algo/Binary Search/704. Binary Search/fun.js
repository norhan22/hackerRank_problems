/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//////////////////////
// simple search
//////////////////////
const simpleSearch = function (nums, target) {
  let result = -1;

  // SOL.1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) result = i;
  }

  //SOL.2
  if (nums.includes(target)) result = nums.indexOf(target);

  return result;
};

const simpleSearchShort = (nums, target) =>
  nums.includes(target) ? nums.indexOf(target) : -1;

//////////////////////
// Binary search
//////////////////////
const binarySearch = function (nums, target) {
  let result = -1,
    minIndex = 0,
    maxIndex = nums.length - 1; // those for keeping track of which part of the list I’ll search in

  // While you haven’t narrowed it down to one element
  while (minIndex <= maxIndex) {
    // check the middle element
    const midIndex = Math.floor((minIndex + maxIndex) / 2),
      geuss = nums[midIndex];
    //  Check the target
    if (geuss === target) return (result = midIndex);
    else if (geuss > target) maxIndex = midIndex - 1;
    else minIndex = midIndex + 1;
  }

  return result;
};
const binarySearchArrayOfObjects = (targetValue, key, arr) => {
  // the arr must be sorted by the key's value
  arr = arr.sort((a, b) => a[key] - b[key]);
  console.log(arr);
  let minIndex = 0,
    maxIndex = arr.length - 1;
  try {
    while (minIndex <= maxIndex) {
      let midIndex = Math.floor((minIndex + maxIndex) / 2),
        guess = arr[midIndex];

      if (guess[key] === targetValue) return guess;
      else if (guess[key] > targetValue) maxIndex = midIndex - 1;
      else minIndex = midIndex + 1;
    }
    return -1;
  } catch (err) {
    console.log("getSingleData", err);
    return -1;
  }
};

module.exports = {
  binarySearch,
  binarySearchArrayOfObjects,
};
