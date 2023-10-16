const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

console.log("Initial array = ", arr);
bubbleSort(arr);
console.log("Sorted array = ", arr);
