const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1; // 0, 1

    while (j >= 0 && arr[j] > key) { 
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
};

const insertionSortDes = (arr: number[]) => {};

console.log("Initial array = ", arr);
insertionSort(arr);
console.log("Sorted array = ", arr);
