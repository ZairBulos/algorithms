const arr = [2, 12, 15, 17, 27, 29, 45];

const interpolationSearch = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right && target >= arr[left] && target <= arr[right]) {
    if (left === right) {
      if (arr[left] === target) {
        return left;
      }

      return -1;
    }

    const pos = left + Math.floor(((target - arr[left]) / (arr[right] - arr[left])) * (right - left));

    if (arr[pos] == target) {
      return pos;
    } else if (arr[pos] < target) {
      left = pos + 1;
    } else {
      right = pos - 1;
    }
  }

  return -1;
};

console.log(interpolationSearch(arr, 27));
