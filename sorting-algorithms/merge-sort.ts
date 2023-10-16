const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

const mergeSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]) => {
  let result: number[] = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return result.concat(left.slice(leftIdx), right.slice(rightIdx));
};

console.log("Initial array = ", arr);
const sortedArr = mergeSort(arr);
console.log("Sorted array = ", sortedArr);
