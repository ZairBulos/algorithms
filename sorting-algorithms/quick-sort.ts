const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

const quickSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log("Initial array = ", arr);
const sortedArr = quickSort(arr);
console.log("Sorted array = ", sortedArr);
