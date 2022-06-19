/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let minIndex = 0,
    maxIndex = arr.length - 1;

  while (minIndex <= maxIndex) {
    const midIndex = Math.floor((minIndex + maxIndex) / 2),
      geuss = arr[midIndex];

    if (geuss > arr[midIndex + 1] && geuss > arr[midIndex - 1]) return midIndex;
    else if (geuss < arr[midIndex - 1]) {
      maxIndex = midIndex - 1;
    } else {
      minIndex = midIndex + 1;
    }
  }
};
module.exports = peakIndexInMountainArray;
