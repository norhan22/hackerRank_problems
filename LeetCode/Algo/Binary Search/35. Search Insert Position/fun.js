const searchInsert = function (nums, target) {
  let minIndex = 0,
    maxIndex = nums.length - 1; // those for keeping track of which part of the list I’ll search in

  // While you haven’t narrowed it down to one element
  while (minIndex <= maxIndex) {
    // check the middle element
    const midIndex = Math.floor((minIndex + maxIndex) / 2),
      geuss = nums[midIndex];
    //  Check the target
    if (geuss === target) return midIndex;
    else if (geuss > target) maxIndex = midIndex - 1;
    else minIndex = midIndex + 1;
  }
  return nums[nums.length - 1] < target
    ? nums.length
    : nums.findIndex((e) => e > target);
};
module.exports = searchInsert;
