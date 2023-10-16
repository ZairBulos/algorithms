const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      const temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
};

console.log("Initial array = ", arr);
selectionSort(arr);
console.log("Sorted array = ", arr);
