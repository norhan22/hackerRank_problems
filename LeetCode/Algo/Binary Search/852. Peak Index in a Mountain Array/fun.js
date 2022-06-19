var peakIndexInMountainArray = function (arr) {
  if (arr.length < 3) return;
  let minIndex = 0,
    maxIndex = arr.length - 1;

  while (minIndex <= maxIndex) {
    const midIndex = Math.floor((minIndex + maxIndex) / 2),
      geuss = arr[midIndex];

    if (geuss > arr[midIndex + 1] && geuss > arr[arr.length - 1])
      return midIndex;
    else if (geuss < arr[arr.length - 1]) maxIndex = midIndex - 1;
    else minIndex = midIndex + 1;
  }
};

module.exports = peakIndexInMountainArray;
