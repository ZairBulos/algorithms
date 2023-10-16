const arr = [2, 12, 15, 17, 27, 29, 45];

const binarySearch = (arr: number[], target: number) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (arr[middle] > target) {
      end = middle - 1;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
};

const binarySearchRecursive = (arr: number[], target: number, low: number, high: number) => {
  if (high >= low) {
    let middle = low + Math.floor((high - low) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] > target) {
      return binarySearchRecursive(arr, target, low, middle - 1);
    } else {
      return binarySearchRecursive(arr, target, middle + 1, high);
    }

  }

  return -1;
};

console.log(binarySearch(arr, 27));
console.log(binarySearchRecursive(arr, 27, 0, arr.length - 1));
