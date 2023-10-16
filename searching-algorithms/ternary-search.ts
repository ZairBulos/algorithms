const arr = [2, 12, 15, 17, 27, 29, 45];

const ternarySearch = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle1 = left + Math.floor((right - left) / 3);
    const middle2 = right + Math.floor((right - left) / 3);

    if (arr[middle1] === target) {
      return middle1;
    }

    if (arr[middle2] === target) {
      return middle2;
    }

    if (target < arr[middle1]) {
      right = middle1 - 1;
    } else if (target > arr[middle2]) {
      left = middle2 + 1;
    } else {
      left = middle1 + 1;
      right = middle2 - 1;
    }
  }

  return -1;
};

console.log(ternarySearch(arr, 27));
